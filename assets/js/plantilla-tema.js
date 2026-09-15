/* ==========================================================================
   plantilla-tema.js — Motor comú de TOTES les pàgines de tema
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0

   Fa estes coses automàticament:
     1.  Decora els blocs de codi (capçalera, títol, botó de copiar).
     2.  Genera l'índex intern del menú lateral a partir de <section data-nav>.
     3.  Genera la llista de temes del curs (menú lateral).
     4.  Genera la navegació «tema anterior / tema següent».
     5.  Activa / desactiva les solucions i les pistes.
     6.  Barra de progrés de lectura, botó «tornar a dalt» i scroll reveal.
     7.  Menú lateral mòbil.
     8.  Marca personal d'exercicis fets (es guarda al navegador).
     9.  Botó «Imprimir PDF» i botó «Crear PowerPoint».

   La pàgina del tema només ha de declarar l'estructura i el contingut.
   ========================================================================== */
(function () {
  'use strict';

  const DADES = window.CURS || { temes: [], autoria: {} };
  const AUTORIA = DADES.autoria || {};
  const CLASSE_FET = 'fet'; // clau de localStorage per tema

  /* ------------------------------------------------------- 0. UTILITATS */
  const $ = (sel, arrel) => (arrel || document).querySelector(sel);
  const $$ = (sel, arrel) => Array.prototype.slice.call((arrel || document).querySelectorAll(sel));

  function avis(text, tipus) {
    let caixa = $('.avis-toast');
    if (!caixa) {
      caixa = document.createElement('div');
      caixa.className = 'avis-toast';
      caixa.setAttribute('role', 'status');
      document.body.appendChild(caixa);
    }
    caixa.className = 'avis-toast' + (tipus === 'error' ? ' avis-toast--error' : '');
    caixa.textContent = text;
    caixa.setAttribute('data-visible', 'true');
    clearTimeout(caixa._temporitzador);
    caixa._temporitzador = setTimeout(function () {
      caixa.setAttribute('data-visible', 'false');
    }, 3600);
  }
  window.avis = avis;

  const numeroTema = (function () {
    const valor = document.body.getAttribute('data-tema');
    return valor === null ? null : parseInt(valor, 10);
  })();

  /* --------------------------------------------- 1. BLOCS DE CODI DECORATS */
  function decoraBlocsCodi() {
    $$('pre.codi').forEach(function (pre) {
      if (pre.closest('.bloc-codi')) return;

      const embolcall = document.createElement('div');
      embolcall.className = 'bloc-codi';
      if (pre.dataset.bloc) embolcall.classList.add('bloc-codi--' + pre.dataset.bloc);

      const cap = document.createElement('div');
      cap.className = 'bloc-codi__cap';

      const punts = document.createElement('span');
      punts.className = 'bloc-codi__punts';
      punts.innerHTML = '<i></i><i></i><i></i>';
      cap.appendChild(punts);

      const titol = document.createElement('span');
      titol.className = 'bloc-codi__titol';
      titol.textContent = pre.dataset.titol || 'Codi Java';
      cap.appendChild(titol);

      if (pre.dataset.etiqueta) {
        const etiqueta = document.createElement('span');
        etiqueta.className = 'bloc-codi__etiqueta';
        etiqueta.textContent = pre.dataset.etiqueta;
        cap.appendChild(etiqueta);
      }

      const botoCopiar = document.createElement('button');
      botoCopiar.type = 'button';
      botoCopiar.className = 'boto-copiar';
      botoCopiar.textContent = 'Copiar';
      botoCopiar.addEventListener('click', function () {
        copiaAlPortapapers(pre.innerText, botoCopiar);
      });
      cap.appendChild(botoCopiar);

      pre.parentNode.insertBefore(embolcall, pre);
      embolcall.appendChild(cap);
      embolcall.appendChild(pre);
    });
  }

  function copiaAlPortapapers(text, boto) {
    const fet = function () {
      boto.textContent = 'Copiat ✔';
      boto.setAttribute('data-copiat', 'true');
      setTimeout(function () {
        boto.textContent = 'Copiar';
        boto.removeAttribute('data-copiat');
      }, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(fet, function () { alternativa(); });
    } else {
      alternativa();
    }
    function alternativa() {
      const area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('aria-hidden', 'true');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      try { document.execCommand('copy'); fet(); } catch (e) { avis('No s\'ha pogut copiar', 'error'); }
      document.body.removeChild(area);
    }
  }

  /* --------------------------------------------- 2. ÍNDEX INTERN LATERAL */
  function construeixIndexIntern() {
    const contenidor = $('#indice-intern');
    if (!contenidor) return;
    const seccions = $$('section[data-nav]');
    if (!seccions.length) return;

    const llista = document.createElement('ol');
    seccions.forEach(function (seccio) {
      const item = document.createElement('li');
      const enllac = document.createElement('a');
      enllac.href = '#' + seccio.id;
      const [num, ...resta] = seccio.dataset.nav.split('·');
      enllac.innerHTML =
        '<span class="num">' + num.trim() + '</span>' +
        '<span>' + (resta.join('·').trim() || num.trim()) + '</span>';
      enllac.dataset.objectiu = seccio.id;
      item.appendChild(enllac);
      llista.appendChild(item);
    });
    contenidor.appendChild(llista);

    /* Ressalta la secció visible (si el navegador ho permet) */
    const enllacos = $$('a[data-objectiu]', contenidor);
    if (!('IntersectionObserver' in window)) return;

    const observador = new IntersectionObserver(
      function (entrades) {
        entrades.forEach(function (entrada) {
          if (!entrada.isIntersecting) return;
          enllacos.forEach(function (a) {
            a.setAttribute('data-actiu', String(a.dataset.objectiu === entrada.target.id));
          });
        });
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    );
    seccions.forEach(function (s) { observador.observe(s); });
  }

  /* ------------------------------------------- 3. LLISTA DE TEMES AL MENÚ */
  function construeixLlistaTemes() {
    const contenidor = $('#llista-temes-mini');
    if (!contenidor || !DADES.temes) return;
    const llista = document.createElement('ul');
    DADES.temes.forEach(function (tema) {
      const item = document.createElement('li');
      const enllac = document.createElement('a');
      const esActual = numeroTema !== null && tema.n === numeroTema;
      enllac.innerHTML = '<span class="n">' + tema.n + '</span><span>' + tema.titol + '</span>';

      if (esActual) {
        enllac.setAttribute('aria-current', 'page');
      } else if (tema.fitxer) {
        enllac.href = '../' + tema.fitxer;
      } else {
        enllac.className = 'proper';
        enllac.href = '../index.html#mapa';
        enllac.title = 'Encara en preparació';
        enllac.innerHTML += ' <span class="sr-only">(en preparació)</span>';
      }
      item.appendChild(enllac);
      llista.appendChild(item);
    });
    contenidor.appendChild(llista);
  }

  /* -------------------------------------- 4. NAVEGACIÓ ENTRE TEMES */
  function construeixNavegacioTemes() {
    const contenidor = $('#navegacio-temes');
    if (!contenidor || numeroTema === null || !DADES.temes) return;
    const index = DADES.temes.findIndex(function (t) { return t.n === numeroTema; });
    if (index < 0) return;

    const anteriors = DADES.temes.slice(0, index).reverse();
    const posteriors = DADES.temes.slice(index + 1);

    function targeta(tema, etiqueta, propera) {
      const enllac = document.createElement('a');
      enllac.className = 'targeta-tema-nav' + (propera ? ' targeta-tema-nav--proper' : '');
      if (tema && tema.fitxer && !propera) {
        enllac.href = tema.fitxer.replace(/^temes\//, '');
      } else {
        enllac.href = '../index.html#mapa';
      }
      const nom = tema ? 'Tema ' + tema.n + ' · ' + tema.titol : 'Torna al mapa del curs';
      enllac.innerHTML =
        '<span class="targeta-tema-nav__etiqueta">' + etiqueta + '</span>' +
        '<span class="targeta-tema-nav__titol">' + nom + '</span>' +
        '<span class="text-suau" style="font-size:.85rem">' +
        (propera ? 'Encara en preparació' : (tema ? tema.subtitol : 'Estructura completa del curs')) +
        '</span>';
      return enllac;
    }

    const anterior = anteriors.find(function (t) { return t.fitxer; }) || anteriors[0];
    const seguentAmbFitxer = posteriors.find(function (t) { return t.fitxer; });
    const seguent = seguentAmbFitxer || posteriors[0];

    if (anterior) contenidor.appendChild(targeta(anterior, '← Tema anterior', false));
    contenidor.appendChild(targeta(null, 'Índex del curs', false));
    if (seguent) {
      contenidor.appendChild(
        targeta(seguent, 'Tema següent →', !seguent.fitxer)
      );
    }
  }

  /* -------------------------------------- 5. SOLUCIONS I PISTES */
  function preparaRevelats() {
    /* Botons de solució: <button data-solucio="id"> */
    $$('[data-solucio]').forEach(function (boto) {
      const objectiu = document.getElementById(boto.dataset.solucio);
      if (!objectiu) return;
      const textMostrar = boto.dataset.textMostrar || 'Mostrar solució';
      const textOcultar = boto.dataset.textOcultar || 'Ocultar solució';
      boto.textContent = textMostrar;
      boto.setAttribute('aria-expanded', 'false');
      boto.setAttribute('aria-controls', objectiu.id);
      boto.classList.add('boto', 'boto--solucio');
      boto.addEventListener('click', function () {
        const obert = boto.getAttribute('aria-expanded') === 'true';
        boto.setAttribute('aria-expanded', String(!obert));
        boto.textContent = obert ? textMostrar : textOcultar;
        objectiu.hidden = obert;
        if (!obert) {
          window.ResaltatJava && window.ResaltatJava.aplica(objectiu);
          objectiu.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      });
    });

    /* Pistes: <button data-pista="id"> (només és visible quan cal) */
    $$('[data-pista]').forEach(function (boto) {
      const objectiu = document.getElementById(boto.dataset.pista);
      if (!objectiu) return;
      boto.classList.add('boto', 'boto--fantasma', 'boto--petit');
      if (!boto.textContent.trim()) boto.textContent = 'Vore una pista';
      boto.setAttribute('aria-expanded', String(!objectiu.hidden));
      boto.addEventListener('click', function () {
        const visible = !objectiu.hidden;
        objectiu.hidden = visible;
        boto.setAttribute('aria-expanded', String(!visible));
        boto.textContent = visible ? 'Vore una pista' : 'Amagar la pista';
      });
    });
  }

  /* -------------------------------------- 6. PROGRÉS, REVEAL, TORNAR A DALT */
  function preparaProgres() {
    const barra = $('#barra-progres span') || $('.barra-progres span');
    const boto = $('#tornar-dalt');
    const actualitza = function () {
      const alçada = document.documentElement.scrollHeight - window.innerHeight;
      const percent = alçada > 0 ? Math.min(100, (window.scrollY / alçada) * 100) : 0;
      if (barra) barra.style.width = percent.toFixed(2) + '%';
      if (boto) boto.setAttribute('data-visible', String(window.scrollY > 600));
    };
    window.addEventListener('scroll', actualitza, { passive: true });
    window.addEventListener('resize', actualitza);
    actualitza();

    if (boto) {
      boto.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    /* Scroll reveal subtil */
    const elements = $$('.revela');
    if ('IntersectionObserver' in window && elements.length) {
      const obs = new IntersectionObserver(
        function (entrades) {
          entrades.forEach(function (entrada) {
            if (entrada.isIntersecting) {
              entrada.target.classList.add('visibles');
              obs.unobserve(entrada.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
      );
      elements.forEach(function (el) { obs.observe(el); });
    } else {
      elements.forEach(function (el) { el.classList.add('visibles'); });
    }
  }

  /* -------------------------------------- 7. MENÚ MÒBIL */
  function preparaMenu() {
    const boto = $('[data-menu-toggle]');
    if (!boto) return;
    boto.addEventListener('click', function () {
      const obert = document.body.classList.toggle('menu-obert');
      boto.setAttribute('aria-expanded', String(obert));
    });
    const overlay = $('.overlay-menu');
    if (overlay) overlay.addEventListener('click', tanca);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') tanca();
    });
    $$('.menu-lateral a').forEach(function (a) { a.addEventListener('click', tanca); });
    function tanca() {
      document.body.classList.remove('menu-obert');
      boto.setAttribute('aria-expanded', 'false');
    }
  }

  /* -------------------------------------- 8. EXERCICIS MARCATS COM A FETS */
  function preparaMarques() {
    const clau = 'curs-java:' + CLASSE_FET + ':' + (numeroTema === null ? 'general' : numeroTema) + ':';
    const caselles = $$('input[data-fet]');

    caselles.forEach(function (casella) {
      const id = casella.dataset.fet;
      try {
        if (localStorage.getItem(clau + id) === '1') casella.checked = true;
      } catch (e) { /* navegació privada: no passa res */ }

      const etiqueta = casella.closest('.marca-fet');
      const pinta = function () {
        if (etiqueta) etiqueta.setAttribute('data-fet', String(casella.checked));
      };
      pinta();

      casella.addEventListener('change', function () {
        try {
          if (casella.checked) localStorage.setItem(clau + id, '1');
          else localStorage.removeItem(clau + id);
        } catch (e) { /* ignore */ }
        pinta();
        actualitzaComptador();
      });
    });

    const comptador = $('#progres-exercicis');
    if (comptador && caselles.length) comptador.hidden = false;
    actualitzaComptador();

    function actualitzaComptador() {
      if (!comptador) return;
      const total = caselles.length;
      const fets = caselles.filter(function (c) { return c.checked; }).length;
      const barra = $('#progres-exercicis span');
      const text = $('#progres-exercicis-text');
      if (barra) barra.style.width = (total ? (fets / total) * 100 : 0) + '%';
      if (text) text.textContent = fets + ' de ' + total + ' exercicis marcats com a fets';
    }
  }

  /* -------------------------------------- 9. IMPRESSIÓ I POWERPOINT */
  function preparaImpressio() {
    $$('[data-imprimir]').forEach(function (boto) {
      boto.addEventListener('click', function () {
        ompliPortadaImpressio();
        setTimeout(function () { window.print(); }, 60);
      });
    });
    /* Si s'imprimix amb Ctrl+P, la portada també ha d'estar completa */
    window.addEventListener('beforeprint', ompliPortadaImpressio);
  }

  function ompliPortadaImpressio() {
    const portada = $('#portada-impressio');
    if (!portada) return;
    const ara = new Date();
    const posa = function (selector, valor) {
      const el = $(selector, portada);
      if (el && valor) el.textContent = valor;
    };
    posa('[data-camp="curs"]', DADES.titol || '');
    posa('[data-camp="assignatura"]', DADES.assignatura || '');
    posa('[data-camp="tema"]', document.title.split('|')[0].trim());
    posa('[data-camp="subtitol"]', $('meta[name="description"]') ? $('meta[name="description"]').content : '');
    posa('[data-camp="data"]', ara.toLocaleDateString('ca-ES', { day: '2-digit', month: 'long', year: 'numeric' }));
    posa('[data-camp="autor"]',
      'Material creat per ' + (AUTORIA.autor || 'Agustín Gil') + ' · ' + (AUTORIA.centre || 'IES La Vereda') + ' ' + (AUTORIA.any || '2026'));
    posa('[data-camp="llicencia"]', (AUTORIA.llicenciaCurta || 'CC BY-NC 4.0') + ' · ' + (AUTORIA.llicencia || ''));
    const enllac = $('[data-camp="enllac"]', portada);
    if (enllac && AUTORIA.llicenciaEnllac) enllac.href = AUTORIA.llicenciaEnllac;
  }

  function preparaBotonsTopBar() {
    $$('[data-enllac-index]').forEach(function (a) {
      a.setAttribute('href', a.getAttribute('data-enllac-index'));
    });
  }

  /* -------------------------------------- INICIALITZACIÓ */
  function inicia() {
    decoraBlocsCodi();
    construeixIndexIntern();
    construeixLlistaTemes();
    construeixNavegacioTemes();
    preparaRevelats();
    preparaProgres();
    preparaMenu();
    preparaMarques();
    preparaImpressio();
    preparaBotonsTopBar();
    ompliPortadaImpressio();

    /* El botó de PowerPoint s'activa només si el tema té diapositives definides */
    $$('[data-pptx]').forEach(function (boto) {
      const teDades = !!(window.DIAPOSITIVES_TEMA && window.DIAPOSITIVES_TEMA.blocs);
      if (!teDades) {
        boto.setAttribute('aria-disabled', 'true');
        boto.title = 'Les diapositives d\'este tema encara no estan definides';
        boto.style.opacity = '0.55';
        boto.addEventListener('click', function () {
          avis('Les diapositives d\'este tema encara estan en preparació.');
        });
        return;
      }
      boto.addEventListener('click', function () {
        if (!window.GeneradorPPTX) {
          avis('No s\'ha pogut carregar el generador de PowerPoint', 'error');
          return;
        }
        window.GeneradorPPTX.genera(window.DIAPOSITIVES_TEMA, avis);
      });
    });
  }

  /* Exposat per si una pàgina vol cridar-ho després de crear contingut dinàmic */
  window.PlantillaTema = {
    decoraBlocsCodi: decoraBlocsCodi,
    ompliPortadaImpressio: ompliPortadaImpressio,
    avis: avis
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicia);
  } else {
    inicia();
  }
})();
