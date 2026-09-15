/* ==========================================================================
   eines/prova-sintaxi-java.mjs — Comprovació de SINTAXI de tots els blocs Java
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0

   Llig els fitxers de  eines/contingut/temaN.js , extrau tots els blocs de codi
   Java (els mateixos que comprova prova-codi-java.mjs) i comprova que es poden
   analitzar sense errors de sintaxi. Detecta: faltes de punt i coma, claus
   descompensades, parèntesis que no tanquen, paraules mal escrites en
   estructures, etc.

   És el complement de prova-codi-java.mjs:
     · prova-sintaxi-java.mjs  → NO necessita res instal·lat (usa java-parser)
     · prova-codi-java.mjs     → compila i executa amb un JDK real

   ÚS
     npm install            (una volta; instal·la java-parser i jsdom)
     node eines/prova-sintaxi-java.mjs             → tots els temes
     node eines/prova-sintaxi-java.mjs 7 8 9       → només els temes indicats

   Els blocs que NO són Java (diagrames, comandes de terminal, codi d'altres
   llenguatges) s'han de marcar amb    noExecuta: true    al fitxer de contingut.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const ARREL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR_CONTINGUT = path.join(ARREL, 'eines/contingut');

let parse;
try {
  ({ parse } = require('java-parser'));
} catch (e) {
  console.log('ℹ Per fer esta comprovació cal java-parser:  npm install');
  process.exit(0);
}

/* ------------------------------------------------ Extracció dels blocs */
const blocs = [];

function afigCodi(bloc, context) {
  if (!bloc || typeof bloc !== 'object' || !bloc.text) return;
  if (bloc.noExecuta) return;   // diagrames, terminal, altres llenguatges…
  if (bloc.mal || context.intencionat) {   // errors provocats a propòsit: no s'analitzen
    blocs.push({ context, titol: bloc.titol || 'Codi', text: bloc.text, intencionat: true });
    return;
  }
  blocs.push({ context, titol: bloc.titol || 'Codi', text: bloc.text, eixida: bloc.sortida });
}

function recorre(contingut, context) {
  if (Array.isArray(contingut)) return contingut.forEach((c) => recorre(c, context));
  if (!contingut || typeof contingut !== 'object') return;
  if (contingut.codi) afigCodi(contingut.codi, context);
  if (contingut.prediccio) afigCodi(contingut.prediccio, context);
  if (contingut.solucio) afigCodi(contingut.solucio, context);
  if (contingut.mal) afigCodi(contingut.mal, { ...context, intencionat: true });
  /* Als «errors habituals» el parell mal/bo sol ser un fragment amb context
     (una línia solta, una condició a mitges…): es revisa a mà */
  if (contingut.bo && !contingut.mal) afigCodi(contingut.bo, context);
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

/* ------------------------------------- Embolcall dels fragments de codi */
function nomDeClasse(codi) {
  const m = codi.match(/public\s+class\s+([A-Za-z_]\w*)/) || codi.match(/class\s+([A-Za-z_]\w*)/);
  return m ? m[1] : null;
}

/**
 * Prepara un bloc perquè es puga analitzar:
 *   · si ja és una classe completa (o un fitxer amb import) → tal qual;
 *   · si és un fragment amb mètodes → dins del cos d'una classe;
 *   · si és un fragment d'instruccions → dins d'un main.
 */
function programaComplet(codi) {
  if (nomDeClasse(codi)) return codi;
  /* Els fragments poden portar imports davall: es lleven i el codi s'embolcalla */
  if (/^\s*import\s/m.test(codi)) codi = codi.split('\n').filter((l) => !/^\s*import\s/.test(l)).join('\n').trim();
  const declaraMetode = /^\s*(public|private|protected|static|final|abstract)[\w\s<>\[\]]*\([^)]*\)\s*\{/m.test(codi);
  const cos = codi.split('\n').map((l) => '    ' + l).join('\n');
  if (declaraMetode) return `public class Prova {\n${cos}\n}`;
  const dins = codi.split('\n').map((l) => '        ' + l).join('\n');
  return `public class Prova {\n    public static void main(String[] args) {\n${dins}\n    }\n}`;
}

/* ------------------------------------------------------------ Execució */
const volguts = process.argv.slice(2).map(Number);
const fitxers = fs.readdirSync(DIR_CONTINGUT)
  .filter((f) => /^tema\d+\.js$/.test(f))
  .filter((f) => !volguts.length || volguts.includes(Number(f.match(/\d+/)[0])))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));

let total = 0;
let fallades = 0;
let intencionats = 0;
const avisosNoJava = [];

fitxers.forEach((f) => {
  const t = carregaTema(path.join(DIR_CONTINGUT, f));
  blocs.length = 0;
  recorre(t, { tema: t.n });
  if (!blocs.length) return;

  console.log(`\n► Tema ${t.n} · ${t.titol} — ${blocs.length} blocs Java`);
  blocs.forEach((bloc) => {
    if (bloc.intencionat) {
      intencionats++;
      console.log(`\x1b[33m  • ${bloc.titol} (error provocat: no s'analitza)\x1b[0m`);
      return;
    }
    total++;
    try {
      parse(programaComplet(bloc.text));
    } catch (error) {
      fallades++;
      const detall = (error.message || '').split('\n')[0];
      console.log(`\x1b[31m  ✖ ${bloc.titol} → ${detall}\x1b[0m`);
      const linia = (error.message || '').match(/line:\s*(\d+)/);
      if (linia) {
        const l = Number(linia[1]);
        bloc.text.split('\n').slice(Math.max(0, l - 3), l + 2).forEach((t2, i) => {
          console.log(`      ${Math.max(1, l - 2) + i}: ${t2}`);
        });
      }
      return;
    }
    console.log(`\x1b[32m  ✔ ${bloc.titol}\x1b[0m`);
  });
});

/* Els blocs marcats com a no-Java es poden llistar per revisar-los a mà */
fitxers.forEach((f) => {
  const t = carregaTema(path.join(DIR_CONTINGUT, f));
  const salts = [];
  const mira = (c) => {
    if (Array.isArray(c)) return c.forEach(mira);
    if (!c || typeof c !== 'object') return;
    ['codi', 'prediccio', 'solucio', 'mal', 'bo'].forEach((k) => {
      if (c[k] && c[k].noExecuta) salts.push(c[k].titol || 'sense títol');
    });
    Object.entries(c).forEach(([k, v]) => {
      if (!['codi', 'prediccio', 'solucio', 'mal', 'bo'].includes(k) && v && typeof v === 'object') mira(v);
    });
  };
  mira(t);
  if (salts.length) avisosNoJava.push(`Tema ${t.n}: ${salts.length} blocs no-Java (${salts.slice(0, 4).join(', ')}${salts.length > 4 ? '…' : ''})`);
});

if (avisosNoJava.length) {
  console.log('\nℹ Blocs marcats com a no-Java (revisats a mà):');
  avisosNoJava.forEach((a) => console.log('  · ' + a));
}

console.log('\n' + (fallades === 0
  ? `✔ TOTS ELS BLOCS JAVA TENEN SINTAXI CORRECTA (${total} blocs analitzats)` +
    (intencionats ? ` · ${intencionats} blocs amb errors provocats a propòsit` : '')
  : `✖ ${fallades} de ${total} blocs tenen errors de sintaxi`));
process.exit(fallades === 0 ? 0 : 1);
