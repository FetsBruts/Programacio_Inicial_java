/* ==========================================================================
   eines/prova-codi-java.mjs — Comprovació automàtica de TOTS els exemples Java
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0

   Llig els fitxers de  eines/contingut/temaN.js , extrau cada bloc de codi que
   tinga una eixida declarada, el compila, l'executa i COMPARA l'eixida real
   amb la que hi ha escrita al material. Si alguna cosa no coincidix, l'avisa.

   Servix per a no publicar mai un exemple amb una eixida equivocada: els
   alumnes ho detectarien de seguida.

   ÚS
     node eines/prova-codi-java.mjs                 → comprova tots els temes
     node eines/prova-codi-java.mjs 1 2             → només els temes 1 i 2
     node eines/prova-codi-java.mjs --anotacions    → a més, marca els errors
        damunt del fitxer font (servix per a GitHub Actions, que els mostra
        com anotacions en la pàgina del canvi)

   PER A QUÈ NECESSITA
     · Un JDK (comanda `javac`) o, si no n'hi ha, un compilador d'Eclipse (ecj):
         export ECJ_JAR=/ruta/ecj.jar     (es baixa de Maven Central)
     · La màquina virtual de Java (`java`) per executar els programes.
   Si no troba cap compilador, ho diu i no fa res (és una comprovació opcional).

   Els programes que lliguen dades pel teclat (Scanner) porten l'entrada dins
   el camp `entrada` del bloc de codi, i s'envien per l'entrada estàndard.
   ========================================================================== */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ARREL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR_CONTINGUT = path.join(ARREL, 'eines/contingut');

/* ---------------------------------------------------- Eines de Java */
function trobaJava() {
  const candidats = [
    process.env.JAVA_BIN,
    process.env.JAVA_HOME && path.join(process.env.JAVA_HOME, 'bin', 'java'),
    '/usr/bin/java',
    '/usr/lib/jvm/default-java/bin/java'
  ].filter(Boolean);
  for (const c of candidats) if (c && fs.existsSync(c)) return c;
  try {
    execFileSync('java', ['-version'], { stdio: 'ignore' });
    return 'java';
  } catch (e) { return null; }
}

function trobaJavac() {
  const candidats = [
    process.env.JAVAC_BIN,
    process.env.JAVA_HOME && path.join(process.env.JAVA_HOME, 'bin', 'javac')
  ].filter(Boolean);
  for (const c of candidats) if (c && fs.existsSync(c)) return c;
  try {
    execFileSync('javac', ['-version'], { stdio: 'ignore' });
    return 'javac';
  } catch (e) { return null; }
}

const JAVA = trobaJava();
const JAVAC = trobaJavac();
const ECJ = process.env.ECJ_JAR && fs.existsSync(process.env.ECJ_JAR) ? process.env.ECJ_JAR : null;

if (!JAVA) {
  console.log('ℹ No hi ha cap màquina virtual de Java instal·lada: no es pot comprovar el codi.');
  process.exit(0);
}
if (!JAVAC && !ECJ) {
  console.log('ℹ No s\'ha trobat cap compilador de Java (ni `javac` ni ECJ_JAR).');
  console.log('  Instal·la un JDK o indica el camí del compilador d\'Eclipse:  export ECJ_JAR=/ruta/ecj.jar');
  process.exit(0);
}

/* -------------------------------------------- Extracció dels blocs de codi */
const blocs = [];

function afigCodi(bloc, context) {
  if (!bloc || typeof bloc !== 'object' || !bloc.text) return;
  if (bloc.sortida === undefined) return;           // només comprovem el que té eixida
  if (bloc.noExecuta) return;                       // bloc marcat com a no executable
  blocs.push({
    context,
    titol: bloc.titol || 'Codi',
    text: bloc.text,
    sortida: bloc.sortida,
    entrada: bloc.entrada
  });
}

function recorre(contingut, context) {
  if (Array.isArray(contingut)) return contingut.forEach((c) => recorre(c, context));
  if (!contingut || typeof contingut !== 'object') return;
  if (contingut.codi) afigCodi(contingut.codi, context);
  if (contingut.prediccio) afigCodi(contingut.prediccio, context);
  if (contingut.solucio) afigCodi(contingut.solucio, context);
  if (contingut.mal) afigCodi(contingut.mal, context);
  if (contingut.bo) afigCodi(contingut.bo, context);
  Object.entries(contingut).forEach(([clau, valor]) => {
    if (['codi', 'prediccio', 'solucio', 'mal', 'bo'].includes(clau)) return;
    if (valor && typeof valor === 'object') recorre(valor, context);
  });
}

function carregaTema(fitxer) {
  const context = { console };
  context.globalThis = context;
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(fitxer, 'utf8'), context, { filename: path.basename(fitxer) });
  return context.TEMA;
}

/* --------------------------------------------------- Compilar i executar */
function nomDeClasse(codi) {
  const m = codi.match(/public\s+class\s+([A-Za-z_]\w*)/) || codi.match(/class\s+([A-Za-z_]\w*)/);
  return m ? m[1] : null;
}

/** Si el bloc és un fragment, l'embolcallem per poder executar-lo. */
function programaComplet(codi) {
  if (nomDeClasse(codi)) return { codi, classe: nomDeClasse(codi) };
  const cos = codi.split('\n').map((l) => '        ' + l).join('\n');
  return { codi: `public class Prova {\n    public static void main(String[] args) {\n${cos}\n    }\n}`, classe: 'Prova' };
}

function compilaIExecuta(bloc) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'java-'));
  try {
    const { codi, classe } = programaComplet(bloc.text);
    fs.writeFileSync(path.join(dir, classe + '.java'), codi);

    /* Compilació */
    if (JAVAC) {
      const r = spawnSync(JAVAC, ['-encoding', 'UTF-8', '-d', dir, path.join(dir, classe + '.java')], { encoding: 'utf8' });
      if (r.status !== 0) return { error: 'compilació: ' + (r.stderr || r.stdout || '').split('\n').slice(0, 4).join(' ') };
    } else {
      const r = spawnSync(JAVA, ['-cp', ECJ, 'org.eclipse.jdt.internal.compiler.batch.Main', '-encoding', 'UTF-8', '-source', '21', '-d', dir, path.join(dir, classe + '.java')], { encoding: 'utf8' });
      if (r.status !== 0) return { error: 'compilació: ' + (r.stderr || r.stdout || '').split('\n').slice(0, 4).join(' ') };
    }

    /* Execució */
    /* Forcem UTF-8 també a l'eixida: si no, els accents i les fletxes ixen com a «?» */
    const r = spawnSync(JAVA, [
      '-Dfile.encoding=UTF-8', '-Dstdout.encoding=UTF-8', '-Dstderr.encoding=UTF-8',
      '-cp', dir, classe
    ], {
      encoding: 'utf8',
      input: bloc.entrada || '',
      timeout: 15000,
      env: { ...process.env, LC_ALL: 'C.UTF-8', LANG: 'C.UTF-8' }
    });
    if (r.status !== 0) {
      return { error: 'execució: ' + ((r.stderr || '').split('\n').filter((l) => l.includes('Exception') || l.includes('Error')).join(' ') || r.stderr || '').slice(0, 300) };
    }
    return { eixida: r.stdout.replace(/\r\n/g, '\n') };
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

const normalitza = (t) => String(t)
  .replace(/\r\n/g, '\n')
  .split('\n')
  .map((l) => l.replace(/[ \t]+$/g, ''))   // els espais finals no es veuen: no compten
  .join('\n')
  .replace(/^\n+/, '')
  .replace(/\n+$/, '');

/* ------------------------------------------------------------ Execució */
const ANOTACIONS = process.argv.includes('--anotacions');
const volguts = process.argv.slice(2)
  .filter((a) => /^\d+$/.test(a))     // els indicadors (--anotacions) no són temes
  .map(Number);

/* Escapa un missatge per a l'orde ::error:: de GitHub Actions */
const perGitHub = (text) => String(text)
  .replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');

const anota = (bloc, missatge) => {
  if (!ANOTACIONS) return;
  const fitxer = bloc.context && bloc.context.fitxer ? bloc.context.fitxer : '';
  console.log(`::error file=${fitxer}::${perGitHub(missatge).slice(0, 900)}`);
};
const fitxers = fs.readdirSync(DIR_CONTINGUT)
  .filter((f) => /^tema\d+\.js$/.test(f))
  .filter((f) => !volguts.length || volguts.includes(Number(f.match(/\d+/)[0])))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));

let total = 0;
let fallades = 0;

fitxers.forEach((f) => {
  const t = carregaTema(path.join(DIR_CONTINGUT, f));
  blocs.length = 0;
  recorre(t, { tema: t.n, fitxer: 'eines/contingut/' + f });
  if (!blocs.length) return;

  console.log(`\n► Tema ${t.n} · ${t.titol} — ${blocs.length} blocs amb eixida`);
  blocs.forEach((bloc) => {
    total++;
    const resultat = compilaIExecuta(bloc);
    const color = (ok, text) => (ok ? '\x1b[32m' + text + '\x1b[0m' : '\x1b[31m' + text + '\x1b[0m');
    if (resultat.error) {
      fallades++;
      console.log(color(false, `  ✖ ${bloc.titol} → ${resultat.error}`));
      anota(bloc, `Tema ${bloc.context.tema} · ${bloc.titol} → ${resultat.error}`);
      return;
    }
    const esperat = normalitza(bloc.sortida);
    const obtingut = normalitza(resultat.eixida);
    if (esperat === obtingut) {
      console.log(color(true, `  ✔ ${bloc.titol}`));
    } else {
      fallades++;
      console.log(color(false, `  ✖ ${bloc.titol}`));
      console.log('      esperat: ' + JSON.stringify(esperat));
      console.log('      obtingut: ' + JSON.stringify(obtingut));
      anota(bloc, `Tema ${bloc.context.tema} · ${bloc.titol} → esperat: ${JSON.stringify(esperat)} · obtingut: ${JSON.stringify(obtingut)}`);
    }
  });
});

const resum = fallades === 0
  ? `✔ TOTS ELS EXEMPLES SÓN CORRECTES (${total} blocs compilats i executats)`
  : `✖ ${fallades} de ${total} blocs no coincidixen amb l'eixida escrita`;
console.log('\n' + resum);
if (ANOTACIONS && fallades > 0) {
  console.log(`::error::${perGitHub(resum)}`);
}
process.exit(fallades === 0 ? 0 : 1);
