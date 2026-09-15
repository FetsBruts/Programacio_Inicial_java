/* ==========================================================================
   resaltat.js — Resaltat de sintaxi Java sense dependències
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0

   · No necessita cap llibreria externa (ni Prism, ni highlight.js).
   · Funciona obrint l'HTML directament al navegador (protocol file://).
   · S'aplica a tots els blocs:   <pre class="codi"><code>…</code></pre>
   · El codi dins del <code> ha d'anar amb les entitats HTML escrites:
       <  →  &lt;      >  →  &gt;      &  →  &amp;
   ========================================================================== */
(function () {
  'use strict';

  /* Paraules reservades del llenguatge */
  const PARAULES_CLAU = new Set([
    'abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char',
    'class', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum',
    'extends', 'final', 'finally', 'float', 'for', 'goto', 'if', 'implements',
    'import', 'instanceof', 'int', 'interface', 'long', 'native', 'new',
    'package', 'private', 'protected', 'public', 'record', 'return', 'sealed',
    'short', 'static', 'strictfp', 'super', 'switch', 'synchronized', 'this',
    'throw', 'throws', 'transient', 'true', 'false', 'null', 'try', 'var',
    'void', 'volatile', 'while', 'yield'
  ]);

  /* Tipus i classes que apareixen al curs (es pinten en blau clar) */
  const TIPUS = new Set([
    'String', 'StringBuilder', 'Scanner', 'System', 'Math', 'Random',
    'ArrayList', 'List', 'Map', 'HashMap', 'HashSet', 'Set', 'Arrays',
    'Collections', 'Integer', 'Double', 'Boolean', 'Character', 'Long',
    'Object', 'Comparable', 'Comparator', 'LocalDate', 'LocalTime', 'File',
    'Files', 'Paths', 'Thread', 'Exception', 'NumberFormatException'
  ]);

  /* Escapat d'entitats: sempre abans de construir l'HTML */
  function escapa(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /* Ordre dels grups: 1 comentari · 2 cadena · 3 anotació · 4 número · 5 paraula */
  const PATRO =
    /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|(@[A-Za-z_][\w.]*)|\b(\d+(?:\.\d+)?(?:[eE][+-]?\d+)?[fFdDlL]?)\b|([A-Za-z_]\w*)/g;

  /**
   * Convertix codi Java pla en HTML amb els colors de sintaxi.
   * @param {string} codi Codi font en text pla.
   * @returns {string} HTML segur amb <span class="tok-…">
   */
  function resalta(codi) {
    let html = '';
    let ultim = 0;
    let coincidencia;
    PATRO.lastIndex = 0;

    while ((coincidencia = PATRO.exec(codi)) !== null) {
      html += escapa(codi.slice(ultim, coincidencia.index));

      const [tot, comentari, cadena, anotacio, numero, paraula] = coincidencia;

      if (comentari) {
        html += '<span class="tok-comentari">' + escapa(comentari) + '</span>';
      } else if (cadena) {
        html += '<span class="tok-cadena">' + escapa(cadena) + '</span>';
      } else if (anotacio) {
        html += '<span class="tok-anotacio">' + escapa(anotacio) + '</span>';
      } else if (numero) {
        html += '<span class="tok-numero">' + escapa(numero) + '</span>';
      } else if (paraula) {
        let classe = '';
        if (PARAULES_CLAU.has(paraula)) {
          classe = 'tok-paraula';
        } else if (TIPUS.has(paraula)) {
          classe = 'tok-tipus';
        } else if (/^\s*\(/.test(codi.slice(coincidencia.index + paraula.length))) {
          classe = 'tok-funcio'; // és una crida o una definició de mètode
        }
        html += classe
          ? '<span class="' + classe + '">' + escapa(paraula) + '</span>'
          : escapa(paraula);
      }

      ultim = coincidencia.index + tot.length;
    }

    return html + escapa(codi.slice(ultim));
  }

  /**
   * Resalta tots els blocs de codi d'un document o d'un element concret.
   * @param {ParentNode} [arrel] Element on buscar (per defecte, el document).
   */
  function aplica(arrel) {
    const abast = arrel || document;
    abast.querySelectorAll('pre.codi > code:not([data-resaltat])').forEach(function (bloc) {
      const font = bloc.textContent.replace(/^\n+|\s+$/g, (t) => (/\n/.test(t) ? '' : t));
      bloc.innerHTML = resalta(font);
      bloc.setAttribute('data-resaltat', 'true');
    });
  }

  /* API pública */
  window.ResaltatJava = { resalta: resalta, aplica: aplica };

  /* S'executa automàticament quan el DOM està a punt */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { aplica(); });
  } else {
    aplica();
  }
})();
