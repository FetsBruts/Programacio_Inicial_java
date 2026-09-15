/* ==========================================================================
   eines/prova-pagines.mjs — Comprovació automàtica de les pàgines del curs
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0

   Què comprova:
     · index.html — que el mapa, la taula d'estat, les pestanyes i l'autoria
       es generen correctament.
     · eines/plantilla-tema.html — que el motor de tema funciona (índex intern,
       menú de temes, navegació, solucions, marques d'exercici fet…).
     · TOTS els temes publicats a  temes/temaN.html  — que tinguen els 11
       apartats, les 9 preguntes d'autoavaluació, entre 4 i 8 mini exercicis,
       entre 3 i 5 exercicis principals, reptes sense solució, l'autoria i la
       llicència, i cap solució trencada.

   Ús:
     npm install jsdom          # una sola volta (només per a les proves)
     node eines/prova-pagines.mjs

   NOTA: esta comprovació és opcional. El material del curs NO necessita Node
   per funcionar: només el navegador.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ARREL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/* ------------------------------------------------ 0. Carreguem jsdom */
let JSDOM, VirtualConsole;
try {
  ({ JSDOM, VirtualConsole } = require('jsdom'));
} catch (e) {
  console.log('ℹ Per fer esta comprovació cal jsdom:  npm install jsdom');
  console.log('  (és una prova opcional; el material funciona sense Node)');
  process.exit(0);
}

let fallades = 0;
let comprovacions = 0;
const ok = (cond, msg) => {
  comprovacions++;
  if (!cond) fallades++;
  console.log((cond ? '  ✔ ' : '  ✖ ') + msg);
};

/** Carrega una pàgina amb els seus scripts i recursos locals. */
async function carrega(rutaFitxer) {
  const errors = [];
  const vc = new VirtualConsole();
  vc.on('jsdomError', (e) => { if (!/localStorage/.test(e.message)) errors.push(e.message); });
  vc.on('error', (m) => errors.push('console.error: ' + m));

  const dom = await JSDOM.fromFile(path.join(ARREL, rutaFitxer), {
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true,
    virtualConsole: vc
  });
  await new Promise((r) => {
    if (dom.window.document.readyState === 'complete') return r();
    dom.window.addEventListener('load', r);
  });
  await new Promise((r) => setTimeout(r, 350));
  return { dom, errors };
}

/* ------------------------------------------------------- 1. index.html */
async function provaIndex() {
  console.log('\n► index.html');
  const { dom, errors } = await carrega('index.html');
  const d = dom.window.document;
  ok(errors.length === 0, 'sense errors de JavaScript' + (errors.length ? ': ' + errors.join(' | ') : ''));
  const temes = dom.window.CURS ? dom.window.CURS.temes.length : 0;
  ok(temes === 10, 'dades-curs.js definix 10 temes (' + temes + ')');
  ok(d.querySelectorAll('#mapa-temes .targeta-tema').length === 10, 'mapa del curs: 10 targetes');
  ok(d.querySelectorAll('#taula-estat tbody tr').length === 10, 'taula d\'estat: 10 files');
  const pendents = [...d.querySelectorAll('#taula-estat tbody tr')].filter((fila) => {
    const tema = d.querySelectorAll('#taula-estat tbody tr').length
      ? Number((fila.textContent.match(/Tema (\d)/) || [])[1])
      : -1;
    const dades = (dom.window.CURS.temes || []).find((t) => t.n === tema) || {};
    if (!dades.recursos) return false;
    const r = dades.recursos;
    const esperats = [!!dades.fitxer, r.solucions, r.autoavaluacio, r.powerpoint];
    const marques = [...fila.querySelectorAll('td')].slice(1).map((td) => td.textContent.trim() === 'Sí');
    return esperats.some((esperat, i) => esperat !== marques[i]);
  }).length;
  ok(pendents === 0, 'taula d\'estat coherent amb les dades del curs');
  ok(d.querySelectorAll('pre.codi code[data-resaltat]').length > 0, 'blocs de codi processats');
  ok([...d.querySelectorAll('.panel-pestanya')].filter((p) => !p.hidden).length === 1, 'pestanyes: només 1 panell obert');
  const text = d.body.textContent;
  ok(text.includes('Material creat per Agustín Gil'), 'autoria a la pàgina');
  ok(text.includes('CC BY-NC 4.0') || text.includes('BY-NC 4.0'), 'llicència a la pàgina');
  ok(d.querySelector('#portada-impressio [data-camp="data"]') !== null, 'portada d\'impressió preparada');
}

/* -------------------------------------- 2. eines/plantilla-tema.html */
async function provaPlantilla() {
  console.log('\n► eines/plantilla-tema.html (motor dels temes)');
  const { dom, errors } = await carrega('eines/plantilla-tema.html');
  const d = dom.window.document;
  ok(errors.length === 0, 'sense errors de JavaScript' + (errors.length ? ': ' + errors.join(' | ') : ''));
  ok(typeof dom.window.PlantillaTema === 'object', 'el motor plantilla-tema.js s\'ha carregat');
  ok(d.querySelectorAll('#indice-intern a').length === 11, 'índex intern amb 11 apartats');
  ok(d.querySelectorAll('#llista-temes-mini a').length === 10, 'menú lateral amb els 10 temes');
  ok(d.querySelectorAll('#navegacio-temes a').length >= 2, 'navegació entre temes generada');
  ok(d.querySelectorAll('.bloc-codi .boto-copiar').length > 0, 'blocs de codi amb botó de copiar');
  ok(d.querySelectorAll('.solucio[hidden]').length >= 10, 'les solucions estan ocultes per defecte');

  const boto = d.querySelector('[data-solucio="mini1"]');
  const objectiu = d.getElementById('mini1');
  boto.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
  ok(objectiu.hidden === false && boto.getAttribute('aria-expanded') === 'true', 'el botó «Mostrar solució» funciona');
  boto.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
  ok(objectiu.hidden === true, 'el botó torna a ocultar la solució');

  ok(d.querySelectorAll('[data-fet]').length >= 2, 'marques d\'exercici fet');
  ok(d.querySelector('[data-pptx]').getAttribute('aria-disabled') === 'true', 'PowerPoint avisa si no hi ha diapositives');
  ok(d.querySelector('#portada-impressio [data-camp="autor"]').textContent.includes('Agustín Gil'), 'portada d\'impressió omplerta');
}

/* ------------------------------------------- 3. temes publicats */
const IDS_OBLIGATORIS = [
  'introduccio', 'objectius', 'teoria', 'exemples', 'guiada',
  'mini-exercicis', 'fes-el-programa', 'reptes', 'errors', 'resum', 'autoavaluacio'
];

async function provaTema(fitxer) {
  console.log('\n► ' + fitxer);
  const { dom, errors } = await carrega(fitxer);
  const d = dom.window.document;
  ok(errors.length === 0, 'sense errors de JavaScript' + (errors.length ? ': ' + errors.join(' | ') : ''));

  const faltants = IDS_OBLIGATORIS.filter((id) => !d.getElementById(id));
  ok(faltants.length === 0, 'els 11 apartats hi són' + (faltants.length ? ' (falten: ' + faltants.join(', ') + ')' : ''));

  const autoavaluacio = d.querySelectorAll('#autoavaluacio .llista-autoavaluacio > li').length;
  ok(autoavaluacio === 9, 'autoavaluació amb 9 preguntes (' + autoavaluacio + ')');

  const mini = d.querySelectorAll('#mini-exercicis .exercici').length;
  ok(mini >= 4 && mini <= 8, 'mini exercicis entre 4 i 8 (' + mini + ')');

  const exercicis = d.querySelectorAll('#fes-el-programa .exercici').length;
  ok(exercicis >= 3 && exercicis <= 5, 'exercicis principals entre 3 i 5 (' + exercicis + ')');

  const reptes = d.querySelectorAll('#reptes .repte').length;
  ok(reptes >= 1, 'hi ha reptes (' + reptes + ')');
  ok(d.querySelectorAll('#reptes [data-solucio]').length === 0, 'els reptes NO tenen botó de solució');

  const botons = [...d.querySelectorAll('[data-solucio]')];
  const trencats = botons.filter((b) => !d.getElementById(b.dataset.solucio));
  ok(trencats.length === 0, 'tots els botons de solució apunten a un bloc existent');

  ok(d.querySelectorAll('pre.codi code[data-resaltat]').length > 0, 'hi ha codi resaltat');
  const text = d.body.textContent;
  ok(text.includes('Agustín Gil') && text.includes('IES La Vereda'), 'autoria a la capçalera o al peu');
  ok(text.includes('BY-NC 4.0'), 'llicència indicada');
  ok(d.querySelector('.peu-impressio') !== null, 'peu d\'impressió present');
  ok(d.querySelector('#portada-impressio') !== null, 'portada d\'impressió present');
}

/* --------------------------------------------------------- Execució */
(async () => {
  await provaIndex();
  await provaPlantilla();

  const dirTemes = path.join(ARREL, 'temes');
  const temes = fs.existsSync(dirTemes)
    ? fs.readdirSync(dirTemes).filter((f) => /^tema\d+\.html$/.test(f)).sort()
    : [];
  if (temes.length) {
    for (const t of temes) await provaTema('temes/' + t);
  } else {
    console.log('\nℹ Encara no hi ha cap tema publicat a temes/');
  }

  console.log('\n' + (fallades === 0
    ? '✔ TOTES LES COMPROVACIONS HAN PASSAT (' + comprovacions + ')'
    : '✖ ' + fallades + ' de ' + comprovacions + ' comprovacions han fallat'));
  process.exit(fallades === 0 ? 0 : 1);
})();
