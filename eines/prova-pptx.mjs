/* ==========================================================================
   eines/prova-pptx.mjs — Comprovació del generador de PowerPoint des de Node
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0

   Servix per a dos coses:
     1. Comprovar que assets/js/pptx.js funciona (prova automàtica).
     2. Generar la presentació d'un tema sense obrir el navegador.

   Ús:
     node eines/prova-pptx.mjs                        → prova amb dades d'exemple
     node eines/prova-pptx.mjs assets/js/diapositives/tema1.js
                                                      → genera el PPTX d'eixe tema

   Els fitxers es guarden en  tmp/  (carpeta ignorada pel repositori).
   La llibreria s'executa dins d'un context vm imitant el navegador, perquè
   així s'utilitza EXACTAMENT el mateix fitxer que carrega la web.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ARREL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RUTA_DADES = process.argv[2] ? path.resolve(ARREL, process.argv[2]) : null;
const DIR_EIXIDA = path.join(ARREL, 'tmp');

/* ------------------------------------------- 1. Context «navegador mínim» */
/* Executem la llibreria dins d'un àmbit aïllat on window és el propi àmbit,
   exactament com fa el navegador, però amb el carregador de mòduls de Node
   permés (la llibreria fa import("node:fs") per a escriure el fitxer). */
const context = {
  console, Promise, Date, Math, JSON, Error, Object, Array, Number, String,
  setTimeout, clearTimeout, Uint8Array, ArrayBuffer, TextEncoder, TextDecoder,
  Blob, URL
};
context.window = context;
context.self = context;
context.global = context;
context.document = { head: { appendChild() {} }, createElement: () => ({ remove() {} }) };
vm.createContext(context);

/* 2. Carreguem PptxGenJS (la còpia local: inclou PptxGenJS + JSZip) */
vm.runInContext(
  fs.readFileSync(path.join(ARREL, 'assets/vendor/pptxgen.bundle.js'), 'utf8'),
  context,
  { filename: 'pptxgen.bundle.js' }
);
const PptxGenJS = context.PptxGenJS;
if (typeof PptxGenJS !== 'function') throw new Error('PptxGenJS no s\'ha carregat al context');

/* 3. Dades del curs i generador */
context.CURS = {
  autoria: {
    autor: 'Agustín Gil', centre: 'IES La Vereda', any: '2026',
    llicenciaCurta: 'CC BY-NC 4.0',
    llicencia: 'Creative Commons Reconeixement-NoComercial 4.0 Internacional',
    llicenciaEnllac: 'https://creativecommons.org/licenses/by-nc/4.0/deed.ca'
  }
};
vm.runInContext(
  fs.readFileSync(path.join(ARREL, 'assets/js/pptx.js'), 'utf8'),
  context,
  { filename: 'pptx.js' }
);

/* ------------------------------------------- 4. Dades de prova */
const DADES_EXEMPLE = {
  numero: 1,
  titol: 'Variables: guardar informació',
  subtitol: 'Les caixes on el programa desa les dades',
  objectiu: 'Entendre què és una variable i saber guardar, canviar i mostrar informació en un programa senzill.',
  index: ['Què és una variable', 'Tipus bàsics', 'Operadors', 'Concatenar text', 'Scanner'],
  blocs: [
    { tipus: 'concepte', titol: 'Una variable és una caixa', bullets: ['Té un nom', 'Té un tipus', 'Dins guarda un valor', 'El valor pot canviar'], notes: 'Exemple de la caixa amb etiqueta.' },
    { tipus: 'codi', titol: 'La nostra primera variable', codi: 'int punts = 0;\npunts = punts + 10;\nSystem.out.println(punts);', sortida: '10', notes: 'Escriure a l\'editor i executar.' },
    { tipus: 'prediccio', titol: 'Pensem abans d\'executar', codi: 'int a = 5;\nint b = 2;\nSystem.out.println(a / b);\nSystem.out.println(a % b);', pregunta: 'Què apareixerà per pantalla?' },
    { tipus: 'esquema', titol: 'El camí d\'una dada', flux: ['Declarar', 'Assignar', 'Modificar', 'Mostrar'], nota: 'Sempre el mateix orde: primer es declara i després s\'usa.' },
    { tipus: 'comparacio', titol: 'int o double?', esquerra: { titol: 'int', bullets: ['Nombres enters', '16, 0, -3', 'Per comptar coses'] }, dreta: { titol: 'double', bullets: ['Amb decimals', '7.5, 0.25', 'Notes, preus, temperatures'] } },
    { tipus: 'activitat', titol: 'Provem-ho', enunciat: 'Crea una variable amb la teua edat, una altra amb el teu nom i mostra per pantalla: "Em dic X i tinc Y anys".', temps: '10 min', pistes: ['Necessites dos tipus distints: String i int', 'Les cadenes de text van entre cometes'] },
    { tipus: 'pregunta', titol: 'Pensem un moment', pregunta: 'I si l\'usuari escriu una lletra quan li demanem l\'edat? Què passaria?' }
  ],
  resum: [
    'Una variable és una caixa amb nom on guardem un valor.',
    'Cada dada té un tipus: int, double, boolean, char o String.',
    'Assignar amb = vol dir «guarda això dins».',
    'Els operadors + - * / % ens deixen calcular.',
    'System.out.println() mostra el valor per pantalla.'
  ],
  seguent: 'Tema 2 · Prendre decisions'
};

/* --------------------------------------------------------- 5. Execució */
async function principal() {
  let dades = DADES_EXEMPLE;
  if (RUTA_DADES) {
    if (!fs.existsSync(RUTA_DADES)) throw new Error('No trobe el fitxer: ' + RUTA_DADES);
    vm.runInContext(fs.readFileSync(RUTA_DADES, 'utf8'), context, { filename: path.basename(RUTA_DADES) });
    dades = context.DIAPOSITIVES_TEMA;
    if (!dades) throw new Error('El fitxer no definix window.DIAPOSITIVES_TEMA');
  }

  fs.mkdirSync(DIR_EIXIDA, { recursive: true });
  PptxGenJS.prototype.writeFile = async function (opcions) {
    const nom = (opcions && opcions.fileName) || 'presentacio.pptx';
    const dades = await this.exportPresentation({ compression: true, outputType: 'arraybuffer' });
    fs.writeFileSync(path.join(DIR_EIXIDA, nom), Buffer.from(dades));
    return nom;
  };

  context.DIAPOSITIVES_TEMA = dades;
  const ok = await context.GeneradorPPTX.genera(dades, (text, tipus) => console.log((tipus || 'info') + ': ' + text));

  const fitxers = fs.readdirSync(DIR_EIXIDA).filter((f) => f.endsWith('.pptx'));
  console.log('\nFitxers a tmp/:');
  fitxers.forEach((f) => {
    const mida = fs.statSync(path.join(DIR_EIXIDA, f)).size;
    console.log('  · ' + f + ' (' + (mida / 1024).toFixed(1) + ' KB)');
  });

  if (!ok || !fitxers.length) throw new Error('La generació ha fallat');
  console.log('✔ Prova superada');
}

principal().catch((e) => {
  console.error('✖ ' + e.message);
  process.exit(1);
});
