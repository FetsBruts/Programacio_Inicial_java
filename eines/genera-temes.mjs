/* ==========================================================================
   eines/genera-temes.mjs — Genera les pàgines dels temes i les seues diapositives
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0

   Cada tema s'escriu una sola volta, com a dades, en  eines/contingut/temaN.js.
   Este programa produïx a partir d'eixes dades:

       temes/temaN.html                        (la pàgina completa per a l'alumnat)
       assets/js/diapositives/temaN.js         (les diapositives per al PowerPoint)

   Així l'estructura de les 11 apartats, la navegació, els botons de solució,
   les marques d'exercici i el peu d'impressió sempre són idèntics en tots els
   temes, i qualsevol canvi estructural es fa en un sol lloc.

   ÚS
     node eines/genera-temes.mjs            → tots els temes
     node eines/genera-temes.mjs 0 3        → només els temes 0 i 3

   IMPORTANT: els fitxers generats SÍ que es guarden al repositori (així el
   material funciona sense necessitat de generar res). Si canvies un tema,
   torna a executar este programa.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ARREL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR_CONTINGUT = path.join(ARREL, 'eines/contingut');
const DIR_TEMES = path.join(ARREL, 'temes');
const DIR_DIAPOSITIVES = path.join(ARREL, 'assets/js/diapositives');

const AUTORIA = {
  autor: 'Agustín Gil',
  centre: 'IES La Vereda',
  any: '2026',
  llicencia: 'Creative Commons Reconeixement-NoComercial 4.0 Internacional',
  llicenciaCurta: 'CC BY-NC 4.0',
  llicenciaEnllac: 'https://creativecommons.org/licenses/by-nc/4.0/deed.ca'
};
const AUTOR_TEXT = `Material creat per ${AUTORIA.autor} - ${AUTORIA.centre} ${AUTORIA.any}`;

/* ==========================================================================
   1. UTILITATS DE TEXT
   ========================================================================== */

/** Escapa el text perquè es puga posar dins d'HTML. */
function esc(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Escapa el text que va dins d'un <pre><code> (el resaltador llegix textContent). */
function escCodi(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Marcació mínima dins del text: **negreta**, `codi` i *cursiva*.
 * Primer s'escapa l'HTML i després s'aplica, així no hi ha perill.
 */
function md(text) {
  if (text === undefined || text === null) return '';
  return esc(text)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/(^|\s)\*([^*\n]+)\*(?=[\s.,;:!?)]|$)/g, '$1<em>$2</em>');
}

/** Text pla sense marcació (per als atributs i per a les diapositives). */
function pla(text) {
  if (text === undefined || text === null) return '';
  return String(text).replace(/\*\*([^*]+)\*\*/g, '$1').replace(/`([^`]+)`/g, '$1').replace(/\*([^*\n]+)\*/g, '$1');
}

const EMojisPerDefecte = { tip: '💡', info: 'ℹ️', avis: '⚠️', important: '⛔', exit: '✅' };

/* ==========================================================================
   2. RENDERS DE BLOCS DE CONTINGUT
   ========================================================================== */

function rendaCodi(c, opcions = {}) {
  const etiqueta = c.etiqueta || 'CODI';
  const titol = c.titol || 'Codi Java';
  const mal = c.mal ? ' codi--error' : '';
  let html = `<pre class="codi${mal}" data-titol="${esc(titol)}" data-etiqueta="${esc(etiqueta)}"><code>${escCodi(c.text)}</code></pre>`;
  if (c.missatge) html += `\n          <p class="missatge-error">${esc(c.missatge)}</p>`;
  const eixida = c.sortidaMostrada !== undefined ? c.sortidaMostrada : c.sortida;
  if (eixida !== undefined) {
    html += `\n          <div class="consola${c.entrada ? ' consola--entrada' : ''}">
            <span class="consola__titol">${esc(c.titolSortida || (c.entrada ? 'Què ha de passar' : 'Eixida per pantalla'))}</span>
            <pre>${esc(eixida)}</pre>
          </div>`;
  }
  return html;
}

const RENDERS = {
  p: (b) => `<p${b.classe ? ` class="${b.classe}"` : ''}>${md(b.p)}</p>`,

  h3: (b) => `<h3>${md(b.h3)}</h3>`,
  h4: (b) => `<h4>${md(b.h4)}</h4>`,

  nota: (b) => {
    const tipus = b.nota.tipus || 'tip';
    const emoji = b.nota.emoji || EMojisPerDefecte[tipus] || '💡';
    return `<div class="nota nota--${tipus}">
            <span class="nota__icona" aria-hidden="true">${emoji}</span>
            <div><p>${md(b.nota.text)}</p></div>
          </div>`;
  },

  notatecnica: (b) => `<div class="nota nota-notecnica">
            <span class="nota__icona" aria-hidden="true">🔧</span>
            <div><p><strong>De moment no necessitem entendre esta part.</strong> ${md(b.notatecnica)}</p></div>
          </div>`,

  llista: (b) => {
    const etiqueta = b.numerada ? 'ol' : 'ul';
    const classe = b.classe || 'llista-punts';
    return `<${etiqueta} class="${classe}"${b.numerada ? '' : ''}>` +
      b.llista.map((i) => `\n            <li>${md(i)}</li>`).join('') +
      `\n          </${etiqueta}>`;
  },

  codi: (b) => rendaCodi(b.codi),

  consola: (b) => `<div class="consola${b.consola.entrada ? ' consola--entrada' : ''}">
            <span class="consola__titol">${esc(b.consola.titol || 'Eixida per pantalla')}</span>
            <pre>${esc(b.consola.text)}</pre>
          </div>`,

  prediccio: (b) => {
    const id = b.prediccio.id;
    return `<div class="prediccio">
            <h3>${md(b.prediccio.titol || 'Què apareixerà per pantalla?')}</h3>
            <pre class="codi" data-titol="${esc(b.prediccio.fitxer || 'Prediccio.java')}" data-etiqueta="PENSA PRIMER"><code>${escCodi(b.prediccio.text)}</code></pre>
            <button class="boto boto--solucio" type="button" data-solucio="${id}" data-text-mostrar="Mostrar què apareix" data-text-ocultar="Amagar">Mostrar què apareix</button>
            <div class="solucio" id="${id}" hidden>
              <span class="solucio__etiqueta">Resposta</span>
              ${b.prediccio.sortida !== undefined ? `<div class="consola"><span class="consola__titol">Eixida real</span><pre>${esc(b.prediccio.sortida)}</pre></div>` : ''}
              <p class="solucio__perque"><strong>Per què:</strong> ${md(b.prediccio.perque)}</p>
            </div>
          </div>`;
  },

  preguntaClasse: (b) => `<div class="pregunta-classe"><p>${md(b.preguntaClasse)}</p></div>`,

  taula: (b) => `<div class="taula-embolcall">
            <table class="taula">
              <thead><tr>${b.taula.cap.map((c) => `<th>${md(c)}</th>`).join('')}</tr></thead>
              <tbody>${b.taula.files.map((f) => `\n                <tr>${f.map((c) => `<td>${md(c)}</td>`).join('')}</tr>`).join('')}
              </tbody>
            </table>
          </div>`,

  graella: (b) => {
    const columnes = b.columnes || b.graella.length;
    const classe = columnes === 2 ? 'graella graella--2' : columnes >= 4 ? 'graella graella--4' : 'graella';
    return `<div class="${classe}">
            ${b.graella.map((t) => `<article class="targeta">
              <h3>${t.emoji ? `<span aria-hidden="true">${t.emoji}</span> ` : ''}${md(t.titol)}</h3>
              <p>${md(t.text)}</p>
            </article>`).join('\n            ')}
          </div>`;
  },

  figura: (b) => `<figure class="figura">
            <img src="../assets/img/${b.figura.imatge}" alt="${esc(b.figura.alt || '')}"${b.figura.amplada ? ` width="${b.figura.amplada}"` : ''}>
            ${b.figura.peu ? `<figcaption>${md(b.figura.peu)}</figcaption>` : ''}
          </figure>`,

  html: (b) => b.html
};

/** Renda una llista de blocs (o un text solt) dins del cos d'una secció. */
function rendaBlocs(contingut, indentacio = '        ') {
  if (!contingut) return '';
  const blocs = Array.isArray(contingut) ? contingut : [{ p: contingut }];
  return blocs
    .map((bloc) => {
      const tipus = Object.keys(bloc).find((k) => RENDERS[k]);
      if (!tipus) throw new Error('Bloc desconegut: ' + JSON.stringify(bloc).slice(0, 90));
      const html = RENDERS[tipus](bloc);
      return html.split('\n').map((l) => indentacio + l).join('\n').trimStart();
    })
    .join('\n' + indentacio);
}

/* ==========================================================================
   3. RENDERS D'EXERCICIS, REPTES, ERRORS I AUTOAVALUACIÓ
   ========================================================================== */

function rendaExercici(ex, mini) {
  const etiquetaDificultat = {
    facil: '<span class="pastilla pastilla--verd">Fàcil</span>',
    mitjana: '<span class="pastilla pastilla--blau">Intermèdia</span>',
    repte: '<span class="pastilla pastilla--taronja">Cal pensar</span>'
  }[ex.dificultat] || '';

  const exemple = ex.exemple
    ? `<p><strong>Com ha de funcionar:</strong></p>
          <div class="consola consola--entrada">
            <span class="consola__titol">Exemple d'ús</span>
            <pre>${esc(ex.exemple.entrada)}</pre>
          </div>
          <div class="consola">
            <span class="consola__titol">Què ha d'aparéixer</span>
            <pre>${esc(ex.exemple.sortida)}</pre>
          </div>`
    : '';

  return `<article class="exercici${mini ? ' exercici--mini' : ''}" id="${ex.id}">
          <div class="exercici__cap">
            <span class="exercici__num">${ex.num}</span>
            <h3 class="exercici__titol">${md(ex.titol)}</h3>
            ${etiquetaDificultat}
            ${ex.temps ? `<span class="pastilla">${esc(ex.temps)}</span>` : ''}
          </div>
          <div class="exercici__enunciat">${md(ex.enunciat)}</div>
          ${ex.codi ? rendaCodi({ titol: ex.codi.titol || 'Revisa.java', etiqueta: ex.codi.mal ? 'QUÈ FALLA?' : 'CODI', text: ex.codi.text, mal: ex.codi.mal }) : ''}
          ${exemple}
          <div class="exercici__accions">
            <button class="boto boto--solucio" type="button" data-solucio="sol-${ex.id}">Mostrar solució</button>
            ${ex.pista ? `<button class="boto boto--fantasma boto--petit" type="button" data-pista="pista-${ex.id}">Vore una pista</button>` : ''}
            <label class="marca-fet"><input type="checkbox" data-fet="${ex.id}"> Fet</label>
          </div>
          ${ex.pista ? `<div class="pista" id="pista-${ex.id}" hidden><p><strong>Pista:</strong> ${md(ex.pista)}</p></div>` : ''}
          <div class="solucio" id="sol-${ex.id}" hidden>
            <span class="solucio__etiqueta">Solució proposada</span>
            ${rendaCodi({ titol: ex.solucio.titol || 'Solucio.java', etiqueta: 'SOLUCIÓ', text: ex.solucio.text, sortida: ex.solucio.sortida, sortidaMostrada: ex.solucio.sortidaMostrada, entrada: ex.solucio.entrada, titolSortida: ex.solucio.titolSortida })}
            <p class="solucio__perque"><strong>Per què es fa aixina:</strong> ${md(ex.solucio.perque)}</p>
          </div>
        </article>`;
}

function rendaError(err, num) {
  return `<article class="error-habitual">
          <div class="error-habitual__cap">
            <span class="error-habitual__etiqueta">Error ${num}</span>
            <h3 class="exercici__titol" style="margin:0">${md(err.titol)}</h3>
          </div>
          <div class="error-habitual__cos">
            <div>
              <span class="etiqueta-error">Codi que falla</span>
              ${rendaCodi({ titol: err.mal.titol || 'Mal.java', text: err.mal.text, missatge: err.mal.missatge })}
            </div>
            <div>
              <dl>
                <dt>Què ha passat</dt><dd>${md(err.que)}</dd>
                <dt>Per què</dt><dd>${md(err.perque)}</dd>
                <dt>Com detectar-ho</dt><dd>${md(err.detectar)}</dd>
                <dt>Com corregir-ho</dt><dd>${md(err.corregir)}</dd>
              </dl>
              <span class="etiqueta-correcte">Codi correcte</span>
              ${rendaCodi({ titol: err.bo.titol || 'Be.java', text: err.bo.text })}
            </div>
          </div>
        </article>`;
}

function rendaPregunta(p, num) {
  const opcions = p.opcions
    ? `<ul class="opcions">${p.opcions.map((o) => `<li>${md(o)}</li>`).join('')}</ul>`
    : '';
  const codi = p.codi
    ? `<pre class="codi" data-titol="${esc(p.codi.titol || 'Pregunta.java')}" data-etiqueta="ANALITZA"><code>${escCodi(p.codi.text)}</code></pre>`
    : '';
  return `<li>
          <p class="enunciat">${md(p.pregunta)}</p>
          ${codi}
          ${opcions}
          <button class="boto boto--solucio" type="button" data-solucio="av${num}">Mostrar solució</button>
          <div class="solucio" id="av${num}" hidden>
            <span class="solucio__etiqueta">Solució</span>
            <p>Resposta: <strong>${md(p.resposta)}</strong></p>
            <p class="solucio__perque">${md(p.perque)}</p>
          </div>
        </li>`;
}

/* ==========================================================================
   4. LA PÀGINA DEL TEMA
   ========================================================================== */

const NOMS_SECCIONS = [
  ['introduccio', '01 · Introducció'],
  ['objectius', '02 · Què aprendrem?'],
  ['teoria', '03 · Teoria'],
  ['exemples', '04 · Exemples'],
  ['guiada', '05 · Programació guiada'],
  ['mini-exercicis', '06 · Mini exercicis'],
  ['fes-el-programa', '07 · Fes el programa'],
  ['reptes', '08 · Reptes'],
  ['errors', '09 · Errors habituals'],
  ['resum', '10 · Resum visual'],
  ['autoavaluacio', '11 · Autoavaluació']
];

function genereixPagina(t) {
  const n = t.n;
  const titolComplet = `Tema ${n} · ${pla(t.titol)}`;
  const esTema0 = n === 0;

  /* --- 01 introducció --- */
  const plan = (t.introduccio.plan || []).map((p) => `          <div class="plan-sessio__bloc">
            <span class="plan-sessio__temps">${esc(p[0])}</span>
            <span class="plan-sessio__nom">${esc(p[1])}</span>
          </div>`).join('\n');

  /* --- 11 autoavaluació --- */
  const preguntes = t.autoavaluacio.preguntes.map((p, i) => rendaPregunta(p, i + 1)).join('\n        ');

  const html = `<!DOCTYPE html>
<html lang="ca">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tema ${n} · ${pla(t.titol)} | Introducció a la Programació amb Java</title>
<meta name="description" content="${esc(pla(t.subtitol))}">
<meta name="author" content="${AUTORIA.autor} · ${AUTORIA.centre} ${AUTORIA.any}">
<link rel="icon" href="../assets/img/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="../assets/css/base.css">
<link rel="stylesheet" href="../assets/css/tema.css">
<link rel="stylesheet" href="../assets/css/print.css">
<!-- PÀGINA GENERADA amb eines/genera-temes.mjs — edita eines/contingut/tema${n}.js i torna a generar-la -->
</head>

<body data-tema="${n}">

<!-- ============================ PORTADA D'IMPRESSIÓ ============================ -->
<div class="portada-impressio només-impressio" id="portada-impressio">
  <p class="portada-impressio__curs" data-camp="assignatura">Optativa SMX · Introducció a la Programació</p>
  <h1 data-camp="tema">Tema ${n} · ${pla(t.titol)}</h1>
  <p class="portada-impressio__resum" data-camp="subtitol">${esc(pla(t.subtitol))}</p>
  <div class="portada-impressio__meta">
    <p data-camp="autor">${AUTOR_TEXT}</p>
    <p>Llicència <span data-camp="llicencia">${AUTORIA.llicenciaCurta}</span> · <a data-camp="enllac" href="${AUTORIA.llicenciaEnllac}">creativecommons.org/licenses/by-nc/4.0</a></p>
    <p>Data d'impressió: <span data-camp="data"></span></p>
    <p class="text-suau">Manual d'estudi: introducció, objectius, teoria, exemples explicats, programació guiada, errors habituals i resum. Les tres primeres preguntes d'autoavaluació inclouen la solució; els exercicis i els reptes es treballen en la versió web.</p>
  </div>
</div>

<!-- ================================== CAPÇALERA ================================== -->
<header class="capcalera">
  <div class="contenidor capcalera__interior" style="max-width:1400px">
    <a class="capcalera__marca" href="../index.html">
      <span class="capcalera__logo" aria-hidden="true">{}</span>
      <span class="capcalera__text">
        <span class="capcalera__curs">Optativa SMX · Programació amb Java</span>
        <span class="capcalera__tema">${esc(titolComplet)}</span>
      </span>
    </a>
    <div class="capcalera__accions">
      <button class="boto boto--ciano boto--petit" type="button" data-imprimir>🖨 <span class="text-llarg">Imprimir</span> PDF</button>
      <button class="boto boto--taronja boto--petit" type="button" data-pptx>📊 <span class="text-llarg">Crear</span> PowerPoint</button>
      <a class="boto boto--fantasma boto--petit" href="../index.html">Índex del curs</a>
      <button class="boto-icona" type="button" data-menu-toggle aria-expanded="false" aria-label="Obrir el menú del tema">☰</button>
    </div>
  </div>
  <div class="contenidor capcalera__meta" style="max-width:1400px">
    <span>✍ ${AUTOR_TEXT}</span>
    <a href="${AUTORIA.llicenciaEnllac}" target="_blank" rel="noopener">Llicència ${AUTORIA.llicenciaCurta}</a>
    <span class="text-suau">Tema ${n} de 10 · ${esc(t.durada)}</span>
  </div>
  <div class="barra-progres" aria-hidden="true"><span></span></div>
</header>

<div class="overlay-menu" aria-hidden="true"></div>

<div class="disposicio">

  <!-- ============================== MENÚ LATERAL ============================== -->
  <aside class="menu-lateral" id="menu-lateral" aria-label="Navegació del tema">
    <div class="menu-lateral__bloc">
      <p class="menu-lateral__titol">En este tema</p>
      <nav class="indice-intern" id="indice-intern" aria-label="Índex del tema"></nav>
    </div>

    <div class="menu-lateral__bloc" id="progres-exercicis" hidden>
      <p class="menu-lateral__titol">El teu progrés</p>
      <div class="barra-avaluacio"><span style="width:0"></span></div>
      <p class="text-suau" id="progres-exercicis-text" style="font-size:.82rem;margin:0"></p>
    </div>

    <div class="menu-lateral__bloc">
      <p class="menu-lateral__titol">Temes del curs</p>
      <nav class="llista-temes-mini" id="llista-temes-mini" aria-label="Temes del curs"></nav>
    </div>

    <div class="menu-lateral__bloc">
      <p class="menu-lateral__titol">Accions</p>
      <div class="pila" style="gap:.5rem">
        <button class="boto boto--primari boto--ampla boto--petit" type="button" data-imprimir>🖨 Imprimir PDF</button>
        <button class="boto boto--taronja boto--ampla boto--petit" type="button" data-pptx>📊 Crear PowerPoint</button>
      </div>
      <p class="text-suau" style="font-size:.78rem;margin:.6rem 0 0">
        El PDF inclou la teoria i el resum. La presentació és per explicar a classe.
      </p>
    </div>

    <div class="menu-lateral__bloc">
      <p class="menu-lateral__titol">Autoria</p>
      <p class="text-suau" style="font-size:.8rem;margin:0">
        <strong>${AUTORIA.autor}</strong><br>${AUTORIA.centre} · ${AUTORIA.any}<br>
        <a href="${AUTORIA.llicenciaEnllac}" target="_blank" rel="noopener">${AUTORIA.llicenciaCurta}</a>
      </p>
    </div>
  </aside>

  <!-- ================================= CONTINGUT ================================= -->
  <main class="contingut">

    <div class="hero-tema">
      <span class="hero-tema__etiqueta">${esc(t.hero.etiqueta)}</span>
      <h1>${md(t.titol)}</h1>
      <p class="hero-tema__entradeta">${md(t.hero.entradeta)}</p>
      <div class="hero-tema__meta">
        ${t.hero.meta.map((m) => `<span class="pastilla">${esc(m)}</span>`).join('\n        ')}
      </div>
    </div>

    <!-- ============================ 01 · INTRODUCCIÓ ============================ -->
    <section class="seccio" id="introduccio" data-nav="${NOMS_SECCIONS[0][1]}" style="padding-top:0">
      <h2>${md(t.introduccio.titol)}</h2>
      <div class="situacio revela">
        <span class="situacio__emoji" aria-hidden="true">${t.introduccio.emoji}</span>
        <div>
${rendaBlocs(t.introduccio.blocs, '          ')}
        </div>
      </div>
${plan ? `\n      <div class="plan-sessio revela" style="margin-top:var(--esp-5)">\n${plan}\n      </div>\n` : ''}
      <div class="prerequisits">
        <strong>Abans de començar has de poder fer això:</strong>
        <ul>
          ${t.introduccio.prerequisits.map((p) => `<li>${md(p)}</li>`).join('\n          ')}
        </ul>
      </div>
    </section>

    <!-- ============================ 02 · QUÈ APRENDREM ============================ -->
    <section class="seccio" id="objectius" data-nav="${NOMS_SECCIONS[1][1]}">
      <h2>Què aprendrem en este tema?</h2>
      <p class="entradeta">${md(t.objectius.intro)}</p>
      <ul class="llista-objectius revela">
        ${t.objectius.llista.map((o, i) => `<li><span class="num">${i + 1}</span><span>${md(o)}</span></li>`).join('\n        ')}
      </ul>
    </section>

    <!-- =============================== 03 · TEORIA =============================== -->
    <section class="seccio" id="teoria" data-nav="${NOMS_SECCIONS[2][1]}">
      <h2>${md(t.teoria.titol)}</h2>
      <p class="entradeta">${md(t.teoria.entradeta)}</p>
${rendaBlocs(t.teoria.blocs)}
    </section>

    <!-- =========================== 04 · EXEMPLES EXPLICATS =========================== -->
    <section class="seccio seccio--suau" id="exemples" data-nav="${NOMS_SECCIONS[3][1]}">
      <h2>${md(t.exemples.titol)}</h2>
      <p class="entradeta">${md(t.exemples.entradeta)}</p>
${rendaBlocs(t.exemples.blocs)}
    </section>

    <!-- =========================== 05 · PROGRAMACIÓ GUIADA =========================== -->
    <section class="seccio" id="guiada" data-nav="${NOMS_SECCIONS[4][1]}">
      <h2>${md(t.guiada.titol)}</h2>
      <p class="entradeta">${md(t.guiada.entradeta)}</p>
${t.guiada.passos.map((p, i) => `      <div class="pas revela">
        <span class="pas__num">${i + 1}</span>
        <div class="pas__cos">
          <h3>${md(p.titol)}</h3>
${rendaBlocs(p.blocs, '          ')}
        </div>
      </div>`).join('\n')}
    </section>

    <!-- ============================= 06 · MINI EXERCICIS ============================= -->
    <section class="seccio seccio--suau" id="mini-exercicis" data-nav="${NOMS_SECCIONS[5][1]}">
      <h2>Mini exercicis</h2>
      <p class="entradeta">${md(t.mini.intro)}</p>
      <div class="llista-mini">
        ${t.mini.exercicis.map((e, i) => rendaExercici({ ...e, num: i + 1 }, true)).join('\n        ')}
      </div>
    </section>

    <!-- ========================= 07 · FES EL PROGRAMA ========================= -->
    <section class="seccio" id="fes-el-programa" data-nav="${NOMS_SECCIONS[6][1]}">
      <h2>Fes el programa</h2>
      <p class="entradeta">${md(t.principals.intro)}</p>
      ${t.principals.exercicis.map((e, i) => rendaExercici({ ...e, num: i + 1 })).join('\n      ')}
    </section>

    <!-- ================================ 08 · REPTES ================================ -->
    <section class="seccio seccio--suau" id="reptes" data-nav="${NOMS_SECCIONS[7][1]}">
      <h2>Reptes (sense solució)</h2>
      <div class="nota nota--avis">
        <span class="nota__icona" aria-hidden="true">🧠</span>
        <div><p>Els reptes <strong>no tenen botó de solució</strong>, a propòsit. L'objectiu és pensar, provar, equivocar-se i tornar-ho a intentar. Es poden resoldre de moltes maneres diferents: totes les solucions que funcionen són bones.</p></div>
      </div>
      ${t.reptes.reptes.map((r, i) => `<article class="repte revela">
        <div class="repte__cap">
          <span class="repte__num">REPTE ${i + 1}</span>
          <h3 class="repte__titol">${md(r.titol)}</h3>
        </div>
${rendaBlocs(r.blocs, '        ')}
        ${r.ampliacions && r.ampliacions.length ? `<p><strong>Per anar més enllà:</strong></p>
        <ul class="llista-punts">
          ${r.ampliacions.map((a) => `<li>${md(a)}</li>`).join('\n          ')}
        </ul>` : ''}
      </article>`).join('\n      ')}
    </section>

    <!-- ============================ 09 · ERRORS HABITUALS ============================ -->
    <section class="seccio" id="errors" data-nav="${NOMS_SECCIONS[8][1]}">
      <h2>Errors habituals</h2>
      <p class="entradeta">${md(t.errors.entradeta)}</p>
      ${t.errors.errors.map((e, i) => rendaError(e, i + 1)).join('\n      ')}
    </section>

    <!-- ============================= 10 · RESUM VISUAL ============================= -->
    <section class="seccio seccio--suau" id="resum" data-nav="${NOMS_SECCIONS[9][1]}">
      <h2>Resum visual</h2>
      <p class="entradeta">${md(t.resum.entradeta)}</p>
      <div class="resum-visual revela">
        ${t.resum.idees.map((i) => `<div class="resum-visual__item"><p>${md(i)}</p></div>`).join('\n        ')}
      </div>
    </section>

    <!-- ============================ 11 · AUTOAVALUACIÓ ============================ -->
    <section class="seccio" id="autoavaluacio" data-nav="${NOMS_SECCIONS[10][1]}">
      <h2>Autoavaluació</h2>
      <p class="entradeta">${md(t.autoavaluacio.entradeta)}</p>
      <ol class="llista-autoavaluacio">
        ${preguntes}
      </ol>
    </section>

    <nav class="navegacio-temes no-imprimible" id="navegacio-temes" aria-label="Navegació entre temes"></nav>

  </main>
</div>

<!-- ====================================== PEU ====================================== -->
<footer class="peu">
  <div class="contenidor">
    <div class="peu__graella">
      <div>
        <h4>Introducció a la Programació amb Java</h4>
        <p>Optativa SMX · Sistemes Microinformàtics i Xarxes</p>
        <p><strong>${AUTOR_TEXT}</strong></p>
      </div>
      <div>
        <h4>En este tema</h4>
        <ul class="llista-netejada">
          <li><a href="#teoria">Teoria</a></li>
          <li><a href="#exemples">Exemples explicats</a></li>
          <li><a href="#guiada">Programació guiada</a></li>
          <li><a href="#resum">Resum visual</a></li>
        </ul>
      </div>
      <div>
        <h4>Llicència</h4>
        <p>Material lliure per a ús educatiu.<br>
        <a href="${AUTORIA.llicenciaEnllac}" target="_blank" rel="noopener">${AUTORIA.llicencia}</a></p>
      </div>
    </div>
    <div class="peu__base">
      <span>© ${AUTORIA.any} ${AUTORIA.autor} · ${AUTORIA.centre}</span>
      <a class="llicencia" href="${AUTORIA.llicenciaEnllac}" target="_blank" rel="noopener">
        <span class="llicencia__icones" aria-hidden="true"><span>CC</span><span>BY</span><span>NC</span></span>
        ${AUTORIA.llicencia}
      </a>
    </div>
  </div>
</footer>

<!-- Peu fix que apareix en cada pàgina del PDF -->
<div class="peu-impressio" aria-hidden="true">
  <span>Introducció a la Programació amb Java · Optativa SMX · ${AUTOR_TEXT} · ${AUTORIA.llicenciaCurta}</span>
  <span class="peu-impressio__dreta">Tema ${n}</span>
</div>

<button class="boto boto--primari tornar-dalt no-imprimible" id="tornar-dalt" type="button" aria-label="Tornar a dalt">↑</button>

<script src="../assets/js/resaltat.js"></script>
<script src="../assets/js/dades-curs.js"></script>
<script src="../assets/js/diapositives/tema${n}.js"></script>
<script src="../assets/js/plantilla-tema.js"></script>
<script src="../assets/js/pptx.js"></script>
</body>
</html>
`;

  /* Neteja: si l'apartat d'introducció és de tema 0, no porta plan de sessió */
  return html.replace(/\n{3,}/g, '\n\n').replace(/[ \t]+\n/g, '\n');
}

/* ==========================================================================
   5. LES DIAPOSITIVES
   ========================================================================== */

function genereixDiapositives(t) {
  const d = t.diapositives;
  const dades = {
    numero: t.n,
    titol: pla(t.titol),
    subtitol: pla(t.subtitol),
    objectiu: pla(d.objectiu),
    index: d.index.map(pla),
    blocs: d.blocs,
    resum: d.resum.map(pla),
    seguent: d.seguent ? pla(d.seguent) : ''
  };
  return `/* ==========================================================================
   Diapositives del Tema ${t.n} · ${pla(t.titol)}
   GENERAT automàticament amb eines/genera-temes.mjs a partir de
   eines/contingut/tema${t.n}.js — no edites este fitxer a mà.
   Material creat per ${AUTORIA.autor} · ${AUTORIA.centre} ${AUTORIA.any} · ${AUTORIA.llicenciaCurta}
   ========================================================================== */
window.DIAPOSITIVES_TEMA = ${JSON.stringify(dades, null, 2)};
`;
}

/* ==========================================================================
   6. EXECUCIÓ
   ========================================================================== */

function carregaTema(fitxer) {
  const context = { console };
  context.globalThis = context;
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(fitxer, 'utf8'), context, { filename: path.basename(fitxer) });
  if (!context.TEMA) throw new Error('El fitxer ' + fitxer + ' no definix globalThis.TEMA');
  return context.TEMA;
}

function comprovaTema(t) {
  const problemes = [];
  const seccionsObligatories = ['introduccio', 'objectius', 'teoria', 'exemples', 'guiada', 'mini', 'principals', 'reptes', 'errors', 'resum', 'autoavaluacio'];
  seccionsObligatories.forEach((s) => { if (!t[s]) problemes.push('Falta la secció: ' + s); });
  if (t.objectius.llista.length < 3 || t.objectius.llista.length > 6) problemes.push('Els objectius han de ser entre 3 i 6 (n\'hi ha ' + t.objectius.llista.length + ')');
  if (t.mini.exercicis.length < 4 || t.mini.exercicis.length > 8) problemes.push('Mini exercicis: entre 4 i 8 (' + t.mini.exercicis.length + ')');
  if (t.principals.exercicis.length < 3 || t.principals.exercicis.length > 5) problemes.push('Exercicis principals: entre 3 i 5 (' + t.principals.exercicis.length + ')');
  if (!t.reptes.reptes.length) problemes.push('Cal almenys un repte');
  if (t.errors.errors.length < 3) problemes.push('Errors habituals: almenys 3');
  if (t.autoavaluacio.preguntes.length !== 9) problemes.push('L\'autoavaluació ha de tindre 9 preguntes (' + t.autoavaluacio.preguntes.length + ')');
  if (t.resum.idees.length < 5 || t.resum.idees.length > 10) problemes.push('El resum ha de tindre entre 5 i 10 idees (' + t.resum.idees.length + ')');
  if (!t.diapositives || !t.diapositives.blocs.length) problemes.push('Falten les diapositives');

  /* Ids únics a tot arreu (exercicis, prediccions, preguntes) */
  const ids = [];
  [...t.mini.exercicis, ...t.principals.exercicis].forEach((e) => ids.push(e.id));
  const duplicats = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (duplicats.length) problemes.push('Ids duplicats: ' + duplicats.join(', '));
  [...t.mini.exercicis, ...t.principals.exercicis].forEach((e) => {
    if (!e.solucio || !e.solucio.text) problemes.push('L\'exercici ' + e.id + ' no té solució');
    if (!e.id) problemes.push('Hi ha un exercici sense id');
  });
  return problemes;
}

function principal() {
  const volguts = process.argv.slice(2).map(Number);
  fs.mkdirSync(DIR_TEMES, { recursive: true });
  fs.mkdirSync(DIR_DIAPOSITIVES, { recursive: true });

  const fitxers = fs.readdirSync(DIR_CONTINGUT)
    .filter((f) => /^tema\d+\.js$/.test(f))
    .filter((f) => !volguts.length || volguts.includes(Number(f.match(/\d+/)[0])))
    .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));

  if (!fitxers.length) {
    console.log('No hi ha cap fitxer de contingut a eines/contingut/');
    return;
  }

  let problemes = 0;
  fitxers.forEach((f) => {
    const t = carregaTema(path.join(DIR_CONTINGUT, f));
    const errors = comprovaTema(t);
    if (errors.length) {
      problemes += errors.length;
      console.log(`✖ tema${t.n}: ` + errors.join(' · '));
      return;
    }
    fs.writeFileSync(path.join(DIR_TEMES, `tema${t.n}.html`), genereixPagina(t));
    fs.writeFileSync(path.join(DIR_DIAPOSITIVES, `tema${t.n}.js`), genereixDiapositives(t));
    const mida = (fs.statSync(path.join(DIR_TEMES, `tema${t.n}.html`)).size / 1024).toFixed(1);
    const diapos = t.diapositives.blocs.length + 6;
    console.log(`✔ tema${t.n}: temes/tema${t.n}.html (${mida} KB) · ${diapos} diapositives`);
  });

  console.log(problemes === 0 ? '\nTot generat correctament.' : `\n${problemes} problemes de contingut.`);
  process.exit(problemes === 0 ? 0 : 1);
}

principal();
