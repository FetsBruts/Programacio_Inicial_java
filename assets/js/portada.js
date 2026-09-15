/* ==========================================================================
   portada.js — Comportament de la pàgina índex del curs (index.html)
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0

   · Construeix el mapa de temes i la taula d'estat del material des de
     assets/js/dades-curs.js (font única de veritat).
   · Pestanyes de «Com usar el material».
   · Scroll reveal, barra de progrés i botó «tornar a dalt».
   · Botó «Imprimir PDF» del curs.
   ========================================================================== */
(function () {
  'use strict';

  const DADES = window.CURS || { temes: [] };
  const AUTORIA = DADES.autoria || {};
  const $ = (sel, arrel) => (arrel || document).querySelector(sel);
  const $$ = (sel, arrel) => Array.prototype.slice.call((arrel || document).querySelectorAll(sel));

  /* ------------------------------------------------ 1. MAPA DEL CURS */
  function construeixMapa() {
    const contenidor = $('#mapa-temes');
    if (!contenidor) return;

    DADES.temes.forEach(function (tema) {
      const targeta = document.createElement(tema.fitxer ? 'a' : 'article');
      targeta.className = 'targeta-tema revela';
      if (tema.fitxer) {
        targeta.href = tema.fitxer;
      } else {
        targeta.classList.add('targeta-tema--proper');
      }
      if (tema.n === 0 || tema.n === 6 || tema.n === 8) targeta.classList.add('targeta-tema--destacat');

      const blocs = (tema.continguts || [])
        .map(function (c) { return '<span class="pastilla">' + c + '</span>'; })
        .join('');

      targeta.innerHTML =
        '<div class="targeta-tema__cap">' +
          '<span class="targeta-tema__num">TEMA ' + tema.n + '</span>' +
          '<span class="targeta-tema__emoji" aria-hidden="true">' + tema.emoji + '</span>' +
        '</div>' +
        '<h3 class="targeta-tema__titol">' + tema.titol + '</h3>' +
        '<p class="targeta-tema__desc">' + tema.desc + '</p>' +
        '<div class="targeta-tema__blocs">' + blocs + '</div>' +
        '<div class="targeta-tema__peu">' +
          '<span>' + (tema.bloc || '') + '</span>' +
          '<span class="pastilla' + (tema.fitxer ? ' pastilla--verd' : '') + '">' +
            (tema.fitxer ? 'Disponible' : 'En preparació') +
          '</span>' +
        '</div>' +
        '<div class="targeta-tema__peu" style="border-top:0;padding-top:0">' +
          '<span class="text-suau">⏱ ' + tema.durada + '</span>' +
          '<span class="text-suau">Prerequisits: ' + tema.prereq + '</span>' +
        '</div>';
      contenidor.appendChild(targeta);
    });
  }

  /* -------------------------------------- 2. TAULA D'ESTAT DEL MATERIAL */
  /* Cada tema declara què té llest en  recursos: { web, solucions,
     autoavaluacio, powerpoint } . Si no ho declara, s'assumix que tot el
     que va amb la pàgina està llest quan el tema està publicat. */
  function construeixEstat() {
    const cos = $('#taula-estat tbody');
    if (!cos) return;
    const llest = function (tema, clau) {
      const r = tema.recursos;
      if (r && typeof r[clau] === 'boolean') return r[clau];
      return !!tema.fitxer;
    };
    DADES.temes.forEach(function (tema) {
      const fila = document.createElement('tr');
      const marca = function (si) {
        return si
          ? '<span class="pastilla pastilla--verd">Sí</span>'
          : '<span class="pastilla">Pendent</span>';
      };
      fila.innerHTML =
        '<td><strong>Tema ' + tema.n + '</strong><br><span class="text-suau" style="font-size:.85rem">' +
        tema.titol + '</span></td>' +
        '<td>' + marca(llest(tema, 'web') && !!tema.fitxer) + '</td>' +
        '<td>' + marca(llest(tema, 'solucions')) + '</td>' +
        '<td>' + marca(llest(tema, 'autoavaluacio')) + '</td>' +
        '<td>' + marca(llest(tema, 'powerpoint')) + '</td>';
      cos.appendChild(fila);
    });
  }

  /* --------------------------------------------- 3. PESTANYES */
  function preparaPestanyes() {
    const botons = $$('[data-pestanya]');
    if (!botons.length) return;
    botons.forEach(function (boto) {
      boto.addEventListener('click', function () {
        botons.forEach(function (b) {
          b.setAttribute('aria-selected', String(b === boto));
          const panel = document.getElementById(b.dataset.pestanya);
          if (panel) panel.hidden = b !== boto;
        });
      });
    });
  }

  /* --------------------------------------- 4. PROGRÉS I REVEAL */
  function preparaProgres() {
    const barra = $('.barra-progres span');
    const boto = $('#tornar-dalt');
    const actualitza = function () {
      const alçada = document.documentElement.scrollHeight - window.innerHeight;
      const percent = alçada > 0 ? Math.min(100, (window.scrollY / alçada) * 100) : 0;
      if (barra) barra.style.width = percent.toFixed(2) + '%';
      if (boto) boto.setAttribute('data-visible', String(window.scrollY > 700));
    };
    window.addEventListener('scroll', actualitza, { passive: true });
    window.addEventListener('resize', actualitza);
    actualitza();
    if (boto) boto.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    const elements = $$('.revela');
    if ('IntersectionObserver' in window && elements.length) {
      const obs = new IntersectionObserver(function (entrades) {
        entrades.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visibles');
            obs.unobserve(entrada.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
      elements.forEach(function (el) { obs.observe(el); });
    } else {
      elements.forEach(function (el) { el.classList.add('visibles'); });
    }
  }

  /* --------------------------------------------- 5. IMPRESSIÓ */
  function preparaImpressio() {
    $$('[data-imprimir]').forEach(function (boto) {
      boto.addEventListener('click', function () {
        const curs = $('#portada-impressio [data-camp="curs"]');
        const autor = $('#portada-impressio [data-camp="autor"]');
        if (curs) curs.textContent = DADES.titol || '';
        if (autor) {
          autor.textContent = 'Material creat per ' + AUTORIA.autor + ' · ' +
            AUTORIA.centre + ' ' + AUTORIA.any + ' · ' + AUTORIA.llicenciaCurta;
        }
        const data = $('#portada-impressio [data-camp="data"]');
        if (data) data.textContent = new Date().toLocaleDateString('ca-ES', { day: '2-digit', month: 'long', year: 'numeric' });
        setTimeout(function () { window.print(); }, 60);
      });
    });
  }

  /* --------------------------------------------- INICIALITZACIÓ */
  function inicia() {
    construeixMapa();
    construeixEstat();
    preparaPestanyes();
    preparaProgres();
    preparaImpressio();
    /* Les dades d'autoria i llicència de la portada i el peu */
    $$('[data-autoria]').forEach(function (el) {
      el.textContent = 'Material creat per ' + AUTORIA.autor + ' - ' + AUTORIA.centre + ' ' + AUTORIA.any;
    });
    $$('[data-llicencia]').forEach(function (el) {
      el.textContent = AUTORIA.llicenciaCurta;
      if (el.tagName === 'A') el.href = AUTORIA.llicenciaEnllac;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicia);
  } else {
    inicia();
  }
})();
