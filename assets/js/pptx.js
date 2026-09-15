/* ==========================================================================
   pptx.js — Generador de PowerPoint (PptxGenJS) per als temes del curs
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0

   IMPORTANT: la presentació NO és una còpia de la web. Està pensada perquè
   el professor l'utilitze a classe: molt poc text, lletra gran, fragments de
   codi grans, esquemes i preguntes per llançar a l'alumnat.

   Ús des d'una pàgina de tema:
     1) El tema definix les seues diapositives:
          window.DIAPOSITIVES_TEMA = { ... }   (vegeu la PLANTILLA més avall)
     2) El botó «Crear PowerPoint» crida:
          GeneradorPPTX.genera(window.DIAPOSITIVES_TEMA, avis);

   La llibreria es carrega del CDN de jsDelivr; si no hi ha internet, cau
   automàticament a la còpia local de assets/vendor/ (així funciona a classe
   encara que la xarxa estiga bloquejada).

   ---------------------------------------------------------------- PLANTILLA
   window.DIAPOSITIVES_TEMA = {
     numero: 1,
     titol: 'Variables: guardar informació',
     subtitol: 'Les caixes on el programa desa les dades',
     objectiu: 'Entendre què és una variable i saber mostrar-la per pantalla',
     index: ['Què és una variable', 'Tipus bàsics', 'Operadors', 'Scanner'],
     blocs: [
       { tipus: 'concepte', titol: '…', bullets: ['…'], notes: 'què dir a classe' },
       { tipus: 'codi', titol: '…', codi: 'int edat = 16;', sortida: '16', notes: '…' },
       { tipus: 'prediccio', titol: '…', codi: '…', pregunta: 'Què apareixerà?' },
       { tipus: 'esquema', titol: '…', flux: ['Declarar', 'Assignar', 'Mostrar'] },
       { tipus: 'comparacio', titol: '…', esquerra: {titol:'…', bullets:['…']}, dreta: {…} },
       { tipus: 'activitat', titol: '…', enunciat: '…', temps: '10 min', pistes: ['…'] },
       { tipus: 'pregunta', titol: '…', pregunta: '…' }
     ],
     resum: ['…', '…'],
     seguent: 'Tema 2 · Prendre decisions'
   };
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------ CONSTANTS */
  const AMPLE = 10;          // polzades (16:9)
  const ALT = 5.625;
  const MARGE = 0.62;
  const AMPLE_UTIL = AMPLE - MARGE * 2;

  const COLOR = {
    blauFosc: '0A1F4A',
    blau: '12306F',
    blauMitja: '2563EB',
    ciano: '06B6D4',
    cianoClar: 'A5F3FC',
    taronja: 'F97316',
    taronjaClar: 'FFEDD5',
    blanc: 'FFFFFF',
    paper: 'F6F9FD',
    gris: '4C5C76',
    grisClar: 'DBE4F1',
    codiFons: '08142F',
    codiText: 'E6EDF8',
    verd: '10B981',
    vermell: 'EF4444'
  };

  const FONT = 'Arial';
  const FONT_CODI = 'Consolas';
  const AUTORIA = (window.CURS && window.CURS.autoria) || {
    autor: 'Agustín Gil', centre: 'IES La Vereda', any: '2026',
    llicenciaCurta: 'CC BY-NC 4.0',
    llicenciaEnllac: 'https://creativecommons.org/licenses/by-nc/4.0/deed.ca'
  };
  const AUTOR_TEXT = 'Material creat per ' + AUTORIA.autor + ' - ' + AUTORIA.centre + ' ' + AUTORIA.any;

  /* -------------------------------------------------- CÀRREGA DE LA LLIBRERIA */
  const FONTS_LLIBRERIA = [
    'https://cdn.jsdelivr.net/npm/pptxgenjs@4.0.1/dist/pptxgen.bundle.js',
    'https://unpkg.com/pptxgenjs@4.0.1/dist/pptxgen.bundle.js',
    '../assets/vendor/pptxgen.bundle.js'
  ];

  function carregaLlibreria() {
    if (window.PptxGenJS) return Promise.resolve(window.PptxGenJS);

    return FONTS_LLIBRERIA.reduce(function (cadena, url) {
      return cadena.catch(function () {
        return new Promise(function (resol, rebutja) {
          const script = document.createElement('script');
          script.src = url;
          script.async = true;
          const temporitzador = setTimeout(function () {
            script.remove();
            rebutja(new Error('Temps esgotat: ' + url));
          }, 9000);
          script.onload = function () {
            clearTimeout(temporitzador);
            if (window.PptxGenJS) resol(window.PptxGenJS);
            else rebutja(new Error('Carregat però no disponible: ' + url));
          };
          script.onerror = function () {
            clearTimeout(temporitzador);
            script.remove();
            rebutja(new Error('No s\'ha pogut carregar: ' + url));
          };
          document.head.appendChild(script);
        });
      });
    }, Promise.reject()).catch(function () {
      throw new Error('No s\'ha pogut carregar PptxGenJS (ni des del CDN ni des de la còpia local).');
    });
  }

  /* ------------------------------------------------------------ UTILITATS */
  function midaBullets(quants, longitud) {
    let mida = quants <= 3 ? 24 : quants === 4 ? 22 : quants <= 6 ? 20 : 17;
    if (longitud > 120) mida -= 2;
    if (longitud > 190) mida -= 2;
    return Math.max(13, mida);
  }

  function midaCodi(linies, llargariaMax) {
    let mida = 16;
    if (linies > 8) mida = 14;
    if (linies > 12) mida = 12;
    if (linies > 17) mida = 10.5;
    if (linies > 24) mida = 9;
    if (llargariaMax > 48) mida -= 1.5;
    if (llargariaMax > 62) mida -= 1.5;
    return Math.max(7.5, mida);
  }

  function midaTitol(text) {
    const llarg = (text || '').length;
    if (llarg > 62) return 22;
    if (llarg > 48) return 25;
    if (llarg > 34) return 27;
    return 30;
  }

  /* ------------------------------------------------------------ MASTERS */
  function creaMasters(pptx, tema) {
    const peuEsquerra = AUTOR_TEXT;
    const peuDreta = 'Tema ' + tema.numero + ' · ' + tema.titol;

    pptx.defineSlideMaster({
      title: 'TEMA',
      background: { color: COLOR.blanc },
      objects: [
        { rect: { x: 0, y: 0, w: AMPLE, h: 0.1, fill: { color: COLOR.ciano } } },
        { rect: { x: 0, y: 0.1, w: 3.1, h: 0.1, fill: { color: COLOR.taronja } } },
        {
          text: {
            text: 'Optativa SMX · Introducció a la Programació amb Java',
            options: {
              x: MARGE, y: ALT - 0.42, w: 5, h: 0.3,
              fontSize: 9, color: COLOR.gris, fontFace: FONT
            }
          }
        },
        {
          text: {
            text: peuDreta,
            options: {
              x: AMPLE - MARGE - 5.2, y: ALT - 0.42, w: 5.2, h: 0.3,
              fontSize: 9, color: COLOR.gris, align: 'right', fontFace: FONT
            }
          }
        }
      ]
    });

    pptx.defineSlideMaster({
      title: 'FOSC',
      background: { color: COLOR.blauFosc },
      objects: [
        { rect: { x: 0, y: 0, w: AMPLE, h: 0.12, fill: { color: COLOR.ciano } } },
        {
          text: {
            text: peuEsquerra + ' · ' + AUTORIA.llicenciaCurta,
            options: {
              x: MARGE, y: ALT - 0.42, w: AMPLE_UTIL, h: 0.3,
              fontSize: 9, color: '9FB6D8', fontFace: FONT
            }
          }
        }
      ]
    });
  }

  /* ---------------------------------------------------- CAPÇALERA DE DIAPO */
  function capçalera(slide, titol, subtitol) {
    slide.addText(titol, {
      x: MARGE, y: 0.42, w: AMPLE_UTIL, h: 0.8,
      fontSize: midaTitol(titol), bold: true, color: COLOR.blauFosc,
      fontFace: FONT, valign: 'middle'
    });
    if (subtitol) {
      slide.addText(subtitol, {
        x: MARGE, y: 1.2, w: AMPLE_UTIL, h: 0.4,
        fontSize: 13, color: COLOR.gris, fontFace: FONT, italic: true
      });
    }
    slide.addShape('rect', {
      x: MARGE, y: subtitol ? 1.62 : 1.24, w: 0.9, h: 0.045,
      fill: { color: COLOR.taronja }
    });
    return subtitol ? 1.95 : 1.55;
  }

  /* ------------------------------------------------ BLOCS DE DIAPOSITIVES */
  const blocs = {
    /* Bullets grans */
    concepte: function (pptx, slide, bloc, tema) {
      const y = capçalera(slide, bloc.titol || tema.titol, bloc.subtitol);
      const punts = bloc.bullets || [];
      const llargaria = punts.reduce(function (m, p) { return Math.max(m, String(p).length); }, 0);
      const mida = midaBullets(punts.length, llargaria);

      slide.addText(
        punts.map(function (p) {
          if (typeof p === 'string') return { text: p, options: { bullet: { code: '25CF' } } };
          return { text: p.text, options: p.destacat ? { bold: true, color: COLOR.blau } : {} };
        }),
        {
          x: MARGE, y: y, w: AMPLE_UTIL, h: ALT - y - 0.7,
          fontSize: mida, color: '17212F', fontFace: FONT, lineSpacing: mida * 1.5,
          valign: 'top', bullet: { code: '25CF' }, paraSpaceAfter: 10
        }
      );
    },

    /* Codi gran, amb eixida opcional */
    codi: function (pptx, slide, bloc, tema) {
      const y = capçalera(slide, bloc.titol || 'Codi', bloc.subtitol);
      const linies = String(bloc.codi).split('\n');
      const llargaria = linies.reduce(function (m, l) { return Math.max(m, l.length); }, 0);
      const mida = midaCodi(linies.length, llargaria);
      const teSortida = !!bloc.sortida;
      const altDisponible = ALT - y - (teSortida ? 1.5 : 0.75);
      const altCodi = Math.min(altDisponible, linies.length * (mida / 72) * 1.42 + 0.32);

      slide.addShape('roundRect', {
        x: MARGE, y: y, w: AMPLE_UTIL, h: altCodi,
        fill: { color: COLOR.codiFons }, line: { color: '1E3A6E', width: 1 },
        rectRadius: 0.06
      });
      slide.addText(
        linies.map(function (l, i) {
          return { text: l === '' ? ' ' : l, options: { breakLine: i < linies.length - 1 } };
        }),
        {
          x: MARGE + 0.16, y: y + 0.12, w: AMPLE_UTIL - 0.32, h: altCodi - 0.24,
          fontSize: mida, fontFace: FONT_CODI, color: COLOR.codiText, valign: 'top'
        }
      );

      if (teSortida) {
        slide.addShape('roundRect', {
          x: MARGE, y: y + altCodi + 0.14, w: AMPLE_UTIL, h: 1.05,
          fill: { color: 'F0FDF9' }, line: { color: '9EE6C8', width: 1 }, rectRadius: 0.06
        });
        slide.addText(
          [
            { text: (bloc.titolSortida || 'Eixida per pantalla') + '\n', options: { fontSize: 10, bold: true, color: '047857' } },
            { text: String(bloc.sortida), options: { fontSize: Math.max(11, mida), fontFace: FONT_CODI, color: '065F46' } }
          ],
          { x: MARGE + 0.18, y: y + altCodi + 0.22, w: AMPLE_UTIL - 0.36, h: 0.9, valign: 'top' }
        );
      }
    },

    /* Codi + «què apareixerà?» per preguntar a classe */
    prediccio: function (pptx, slide, bloc, tema) {
      const y = capçalera(slide, bloc.titol || 'Què apareixerà per pantalla?', null);
      const linies = String(bloc.codi).split('\n');
      const llargaria = linies.reduce(function (m, l) { return Math.max(m, l.length); }, 0);
      const mida = midaCodi(linies.length, llargaria);
      const altCodi = Math.min(ALT - y - 1.55, linies.length * (mida / 72) * 1.42 + 0.32);

      slide.addShape('roundRect', {
        x: MARGE, y: y, w: AMPLE_UTIL, h: altCodi,
        fill: { color: COLOR.codiFons }, line: { color: '1E3A6E', width: 1 }, rectRadius: 0.06
      });
      slide.addText(
        linies.map(function (l, i) {
          return { text: l === '' ? ' ' : l, options: { breakLine: i < linies.length - 1 } };
        }),
        {
          x: MARGE + 0.16, y: y + 0.12, w: AMPLE_UTIL - 0.32, h: altCodi - 0.24,
          fontSize: mida, fontFace: FONT_CODI, color: COLOR.codiText, valign: 'top'
        }
      );

      slide.addShape('roundRect', {
        x: MARGE, y: y + altCodi + 0.18, w: AMPLE_UTIL, h: 1.0,
        fill: { color: COLOR.taronjaClar }, line: { color: COLOR.taronja, width: 1.5 }, rectRadius: 0.08
      });
      slide.addText(bloc.pregunta || 'Què apareixerà per pantalla? Pensem-ho abans d\'executar.', {
        x: MARGE + 0.2, y: y + altCodi + 0.3, w: AMPLE_UTIL - 0.4, h: 0.76,
        fontSize: 20, bold: true, color: '9A3412', fontFace: FONT, valign: 'middle'
      });
    },

    /* Esquema de flux: caixes amb fletxes */
    esquema: function (pptx, slide, bloc, tema) {
      const y = capçalera(slide, bloc.titol || 'Esquema', bloc.subtitol);
      const elements = bloc.flux || [];
      const files = [];
      for (let i = 0; i < elements.length; i += 4) files.push(elements.slice(i, i + 4));

      let yActual = y + 0.15;
      const altCaixa = files.length > 1 ? 0.95 : 1.25;

      files.forEach(function (fila) {
        const separacio = 0.3;
        const amplada = (AMPLE_UTIL - separacio * (fila.length - 1)) / fila.length;
        fila.forEach(function (element, i) {
          const x = MARGE + i * (amplada + separacio);
          slide.addShape('roundRect', {
            x: x, y: yActual, w: amplada, h: altCaixa,
            fill: { color: i % 2 ? 'ECFEFF' : 'EEF4FF' },
            line: { color: i % 2 ? COLOR.ciano : COLOR.blauMitja, width: 1.5 },
            rectRadius: 0.08
          });
          slide.addText(element, {
            x: x + 0.1, y: yActual, w: amplada - 0.2, h: altCaixa,
            fontSize: 16, bold: true, color: COLOR.blau, align: 'center', valign: 'middle',
            fontFace: FONT
          });
          if (i < fila.length - 1) {
            slide.addShape('rightArrow', {
              x: x + amplada + 0.03, y: yActual + altCaixa / 2 - 0.12, w: 0.24, h: 0.24,
              fill: { color: COLOR.taronja }
            });
          }
        });
        yActual += altCaixa + 0.45;
      });

      if (bloc.nota) {
        slide.addText(bloc.nota, {
          x: MARGE, y: ALT - 1.1, w: AMPLE_UTIL, h: 0.55,
          fontSize: 15, italic: true, color: COLOR.gris, fontFace: FONT
        });
      }
    },

    /* Dues columnes: comparar conceptes */
    comparacio: function (pptx, slide, bloc, tema) {
      const y = capçalera(slide, bloc.titol || 'Comparem', bloc.subtitol);
      const columnes = [
        { dades: bloc.esquerra, color: bloc.colorEsquerra || COLOR.blauMitja },
        { dades: bloc.dreta, color: bloc.colorDreta || COLOR.ciano }
      ];
      columnes.forEach(function (col, i) {
        const x = MARGE + i * (AMPLE_UTIL / 2 + 0.12);
        const amplada = AMPLE_UTIL / 2 - 0.12;
        slide.addShape('roundRect', {
          x: x, y: y, w: amplada, h: ALT - y - 0.8,
          fill: { color: 'FFFFFF' }, line: { color: col.color, width: 2 }, rectRadius: 0.08
        });
        slide.addText(col.dades.titol || '', {
          x: x + 0.15, y: y + 0.1, w: amplada - 0.3, h: 0.5,
          fontSize: 19, bold: true, color: col.color, fontFace: FONT
        });
        slide.addText(
          (col.dades.bullets || []).map(function (b) {
            return { text: b, options: { bullet: { code: '25CF' } } };
          }),
          {
            x: x + 0.15, y: y + 0.68, w: amplada - 0.3, h: ALT - y - 1.55,
            fontSize: 15, color: '17212F', fontFace: FONT, lineSpacing: 22
          }
        );
      });
    },

    /* Activitat per a l'alumnat */
    activitat: function (pptx, slide, bloc, tema) {
      const y = capçalera(slide, bloc.titol || 'Activitat', null);
      slide.addShape('roundRect', {
        x: MARGE, y: y, w: AMPLE_UTIL, h: 1.0,
        fill: { color: COLOR.paper }, line: { color: COLOR.grisClar, width: 1 }, rectRadius: 0.08
      });
      slide.addText([
        { text: '🛠  ', options: { fontSize: 20 } },
        { text: (bloc.temps || '10 min') + ' · ', options: { fontSize: 16, bold: true, color: COLOR.taronja } },
        { text: bloc.mode || 'Individual o per parelles', options: { fontSize: 16, color: COLOR.gris } }
      ], { x: MARGE + 0.18, y: y + 0.16, w: AMPLE_UTIL - 0.36, h: 0.68, valign: 'middle', fontFace: FONT });

      slide.addText(bloc.enunciat || '', {
        x: MARGE, y: y + 1.15, w: AMPLE_UTIL, h: 1.7,
        fontSize: 20, color: '17212F', fontFace: FONT, valign: 'top'
      });

      const pistes = bloc.pistes || [];
      if (pistes.length) {
        slide.addShape('roundRect', {
          x: MARGE, y: ALT - 1.35, w: AMPLE_UTIL, h: 0.85,
          fill: { color: 'FFFBEB' }, line: { color: 'FDE68A', width: 1 }, rectRadius: 0.08
        });
        slide.addText(
          pistes.map(function (p) { return { text: 'Pista: ' + p, options: { breakLine: true } }; }),
          { x: MARGE + 0.18, y: ALT - 1.28, w: AMPLE_UTIL - 0.36, h: 0.72, fontSize: 13, color: '92400E', fontFace: FONT }
        );
      }
    },

    /* Pregunta per a debatre a classe */
    pregunta: function (pptx, slide, bloc, tema) {
      capçalera(slide, bloc.titol || 'Pensem un moment', null);
      slide.addShape('roundRect', {
        x: MARGE + 0.4, y: 1.9, w: AMPLE_UTIL - 0.8, h: 2.0,
        fill: { color: 'F5F0FF' }, line: { color: '7C3AED', width: 2 }, rectRadius: 0.1
      });
      slide.addText(bloc.pregunta || '', {
        x: MARGE + 0.6, y: 2.05, w: AMPLE_UTIL - 1.6, h: 1.7,
        fontSize: 26, bold: true, color: '4C1D95', fontFace: FONT, valign: 'middle'
      });
    }
  };

  /* ------------------------------------------------------ DIAPOSITIVES FIXES */
  function diapoPortada(pptx, tema) {
    const slide = pptx.addSlide({ masterName: 'FOSC' });
    slide.addShape('rect', { x: 0, y: 1.15, w: AMPLE, h: 0.06, fill: { color: COLOR.ciano } });
    slide.addText('OPTATIVA SMX · INTRODUCCIÓ A LA PROGRAMACIÓ AMB JAVA', {
      x: MARGE, y: 0.55, w: AMPLE_UTIL, h: 0.4,
      fontSize: 12, bold: true, color: COLOR.cianoClar, charSpacing: 2, fontFace: FONT
    });
    slide.addText('TEMA ' + tema.numero, {
      x: MARGE, y: 1.4, w: AMPLE_UTIL, h: 0.5,
      fontSize: 18, bold: true, color: COLOR.taronja, fontFace: FONT
    });
    slide.addText(tema.titol, {
      x: MARGE, y: 1.95, w: AMPLE_UTIL, h: 1.4,
      fontSize: tema.titol.length > 42 ? 34 : 42, bold: true, color: COLOR.blanc,
      fontFace: FONT, valign: 'top'
    });
    slide.addText(tema.subtitol || '', {
      x: MARGE, y: 3.35, w: AMPLE_UTIL, h: 0.6,
      fontSize: 18, color: 'CFE0F7', fontFace: FONT
    });
    slide.addText(AUTOR_TEXT, {
      x: MARGE, y: ALT - 0.95, w: AMPLE_UTIL, h: 0.35,
      fontSize: 12, color: '9FB6D8', fontFace: FONT
    });
    slide.addNotes('Diapositiva de portada del tema.');
    return slide;
  }

  function diapoAutorILlicencia(pptx, tema) {
    const slide = pptx.addSlide({ masterName: 'TEMA' });
    const y = capçalera(slide, 'Sobre este material', 'Autoria, llicència i com utilitzar-lo');
    slide.addText([
      { text: AUTOR_TEXT + '\n', options: { fontSize: 24, bold: true, color: COLOR.blauFosc } },
      { text: 'IES La Vereda · Formació Professional · Informàtica i Comunicacions\n\n', options: { fontSize: 16, color: COLOR.gris } },
      { text: 'Llicència ' + AUTORIA.llicenciaCurta + '\n', options: { fontSize: 20, bold: true, color: COLOR.ciano } },
      { text: AUTORIA.llicencia + '\n', options: { fontSize: 15, color: COLOR.gris } },
      { text: AUTORIA.llicenciaEnllac + '\n\n', options: { fontSize: 13, color: COLOR.blauMitja } },
      { text: 'Es pot copiar, adaptar i compartir amb finalitat educativa citant l\'autoria. No es pot utilitzar amb finalitat comercial.', options: { fontSize: 14, italic: true, color: COLOR.gris } }
    ], { x: MARGE, y: y, w: AMPLE_UTIL, h: ALT - y - 0.8, valign: 'top', fontFace: FONT });
    slide.addNotes('Recorda a l\'alumnat que el material és lliure i que pot reutilitzar-lo per estudiar.');
    return slide;
  }

  function diapoIndex(pptx, tema) {
    const punts = tema.index && tema.index.length
      ? tema.index
      : (tema.blocs || []).map(function (b) { return b.titol; }).filter(Boolean);

    const slide = pptx.addSlide({ masterName: 'TEMA' });
    const y = capçalera(slide, 'Què veurem hui', 'Tema ' + tema.numero + ' · Sessió de 3 hores');
    const columnes = punts.length > 6 ? 2 : 1;
    const perColumna = Math.ceil(punts.length / columnes);

    for (let c = 0; c < columnes; c++) {
      const trossos = punts.slice(c * perColumna, (c + 1) * perColumna);
      slide.addText(
        trossos.map(function (p, i) {
          return {
            text: (c * perColumna + i + 1) + '.  ' + p,
            options: { breakLine: true }
          };
        }),
        {
          x: MARGE + c * (AMPLE_UTIL / 2 + 0.1), y: y, w: AMPLE_UTIL / 2 - 0.1, h: ALT - y - 0.8,
          fontSize: punts.length > 8 ? 16 : 20, color: '17212F', fontFace: FONT, lineSpacing: 30
        }
      );
    }
    slide.addNotes('Índex del tema: útil per situar l\'alumnat i per anticipar què farem.');
    return slide;
  }

  function diapoObjectiu(pptx, tema) {
    const slide = pptx.addSlide({ masterName: 'FOSC' });
    slide.addText('L\'objectiu de hui', {
      x: MARGE, y: 0.6, w: AMPLE_UTIL, h: 0.6,
      fontSize: 18, bold: true, color: COLOR.cianoCap || COLOR.cianoClar, fontFace: FONT
    });
    slide.addText(tema.objectiu || tema.subtitol || '', {
      x: MARGE, y: 1.25, w: AMPLE_UTIL, h: 2.2,
      fontSize: 30, bold: true, color: COLOR.blanc, fontFace: FONT, valign: 'top'
    });
    slide.addText('Quan acabem la sessió, has de ser capaç d\'explicar-ho amb les teues paraules i d\'escriure el codi tu mateix.', {
      x: MARGE, y: 3.7, w: AMPLE_UTIL, h: 0.7,
      fontSize: 16, color: 'CFE0F7', fontFace: FONT
    });
    slide.addNotes('Feu explícit l\'objectiu. Pregunteu a l\'alumnat què creu que aprendrà.');
    return slide;
  }

  function diapoResum(pptx, tema) {
    const slide = pptx.addSlide({ masterName: 'TEMA' });
    const y = capçalera(slide, 'El que has d\'endur-te', 'Resum del tema ' + tema.numero);
    const punts = tema.resum || [];
    slide.addText(
      punts.map(function (p) { return { text: p, options: { bullet: { code: '2714' } } }; }),
      {
        x: MARGE, y: y, w: AMPLE_UTIL, h: ALT - y - 0.8,
        fontSize: midaBullets(punts.length, 110), color: '17212F', fontFace: FONT,
        lineSpacing: 30, paraSpaceAfter: 8
      }
    );
    slide.addNotes('Resum final: és el moment de preguntar «alguna cosa que no haja quedat clara?».');
    return slide;
  }

  function diapoTancament(pptx, tema) {
    const slide = pptx.addSlide({ masterName: 'FOSC' });
    slide.addText('Fi del tema ' + tema.numero, {
      x: MARGE, y: 1.5, w: AMPLE_UTIL, h: 0.8,
      fontSize: 34, bold: true, color: COLOR.blanc, fontFace: FONT
    });
    slide.addText(tema.seguent ? 'Següent: ' + tema.seguent : 'Repàs i pràctica lliure', {
      x: MARGE, y: 2.5, w: AMPLE_UTIL, h: 0.6,
      fontSize: 22, color: COLOR.cianoClar, fontFace: FONT
    });
    slide.addText('Abans d\'acabar: escriu amb les teues paraules què has aprés hui.', {
      x: MARGE, y: 3.5, w: AMPLE_UTIL, h: 0.6,
      fontSize: 16, color: 'CFE0F7', fontFace: FONT
    });
    slide.addNotes('Tanca la sessió amb una pregunta de metacognició.');
    return slide;
  }

  /* ------------------------------------------------------------ GENERADOR */
  async function genera(tema, avisa) {
    const informa = typeof avisa === 'function' ? avisa : function () {};
    informa('Preparant la presentació… es descarregarà en un moment.');
    try {
      const PptxGenJS = await carregaLlibreria();
      const pptx = new PptxGenJS();
      pptx.layout = 'LAYOUT_16x9';
      pptx.author = AUTORIA.autor;
      pptx.company = AUTORIA.centre + ' · ' + AUTORIA.any;
      pptx.title = 'Tema ' + tema.numero + ' · ' + tema.titol;
      pptx.subject = 'Optativa SMX — Introducció a la Programació amb Java';

      creaMasters(pptx, tema);

      diapoPortada(pptx, tema);
      diapoAutorILlicencia(pptx, tema);
      diapoIndex(pptx, tema);
      diapoObjectiu(pptx, tema);

      (tema.blocs || []).forEach(function (bloc) {
        const constructor = blocs[bloc.tipus];
        if (!constructor) {
          console.warn('Tipus de diapositiva desconegut:', bloc.tipus);
          return;
        }
        const slide = pptx.addSlide({ masterName: bloc.fosc ? 'FOSC' : 'TEMA' });
        constructor(pptx, slide, bloc, tema);
        if (bloc.notes) slide.addNotes(bloc.notes);
      });

      diapoResum(pptx, tema);
      diapoTancament(pptx, tema);

      const nom = 'Tema' + tema.numero + '-' + tema.titol
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^A-Za-z0-9]+/g, '-')
        .replace(/^-|-$/g, '') + '.pptx';

      await pptx.writeFile({ fileName: nom });
      informa('Presentació creada: ' + nom);
      return true;
    } catch (error) {
      console.error(error);
      informa('No s\'ha pogut crear la presentació. Comprova la connexió.', 'error');
      return false;
    }
  }

  window.GeneradorPPTX = { genera: genera, carregaLlibreria: carregaLlibreria };
})();
