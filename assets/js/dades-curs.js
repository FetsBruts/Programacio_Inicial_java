/* ==========================================================================
   dades-curs.js — Font única de veritat de l'estructura del curs
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0

   Ací està definit: l'autoria, la llicència, el mapa de temes i l'estat
   de cada material. La portada (index.html) i el menú lateral de cada tema
   es construïxen a partir d'estes dades, així que NO cal tocar l'HTML
   quan s'afegix un tema nou: només actualitzar este fitxer.

   Camps de cada tema:
     n          → número de tema (0 a 9)
     fitxer     → ruta del fitxer HTML del tema (null si encara no existix)
     titol      → títol per a l'alumnat
     subtitol   → frase curta que descriu el tema
     emoji      → icona de la targeta
     durada     → "Introducció" o "3 h"
     bloc       → bloc de contingut (per a la progressió del curs)
     desc       → descripció de 1-2 línies
     continguts → 4-6 etiquetes amb els conceptes principals
     prereq     → què ha de saber l'alumnat abans de començar
     estat      → 'publicat' | 'en-preparacio'
   ========================================================================== */
window.CURS = {
  titol: 'Introducció a la Programació amb Java',
  assignatura: 'Optativa SMX — Introducció a la Programació',
  cicle: 'Cicle Formatiu de Grau Mitjà · Sistemes Microinformàtics i Xarxes',
  nivell: 'Alumnat de 16 anys sense experiència prèvia en programació',
  llenguatge: 'Java',
  sessions: 'Tema 0 + 9 sessions de 3 hores (≈ 27 h lectives)',
  autoria: {
    autor: 'Agustín Gil',
    centre: 'IES La Vereda',
    any: '2026',
    llicencia: 'Creative Commons Reconeixement-NoComercial 4.0 Internacional',
    llicenciaCurta: 'CC BY-NC 4.0',
    llicenciaEnllac: 'https://creativecommons.org/licenses/by-nc/4.0/deed.ca'
  },

  /* ------------------------------------------------------------- TEMES */
  temes: [
    {
      n: 0,
      fitxer: 'temes/tema0.html',
      titol: 'Què és programar?',
      subtitol: 'El primer contacte: instruccions, codi font i el nostre «Hola món!»',
      emoji: '🚀',
      durada: 'Introducció curta',
      bloc: 'Punt de partida',
      desc: 'Què significa programar, què és un programa i per què aprenem Java. Escriurem i executarem el nostre primer programa.',
      continguts: ['Què és programar', 'Llenguatge de programació', 'Codi font i execució', 'Entorn de treball', 'Hola món!'],
      prereq: 'Cap. Només ganes de provar coses.',
      estat: 'publicat'
    },
    {
      n: 1,
      fitxer: 'temes/tema1.html',
      titol: 'Variables: guardar informació',
      subtitol: 'Les «caixes» on el programa desa les dades',
      emoji: '📦',
      durada: '3 h',
      bloc: 'Pensament de programador',
      desc: 'Guardar, canviar i mostrar informació: tipus bàsics, operadors aritmètics i les primeres entrades per teclat.',
      continguts: ['int, double, boolean, char, String', 'Declarar i assignar', 'Operadors + − * / %', 'Scanner', 'Concatenació'],
      prereq: 'Tema 0: saber crear un fitxer i executar-lo.',
      estat: 'publicat'
    },
    {
      n: 2,
      fitxer: 'temes/tema2.html',
      titol: 'Prendre decisions',
      subtitol: 'Que el programa decidisca per si mateix',
      emoji: '🔀',
      durada: '3 h',
      bloc: 'Pensament de programador',
      desc: 'Comparacions, operadors lògics, if / else if / else i una primera ullada a switch. La pregunta clau: quina condició ha de complir-se?',
      continguts: ['Comparacions', '&& || !', 'if / else', 'else if', 'switch'],
      prereq: 'Tema 1: variables i tipus bàsics.',
      estat: 'publicat'
    },
    {
      n: 3,
      fitxer: 'temes/tema3.html',
      titol: 'Repetir: els bucles',
      subtitol: 'Per què els ordinadors són tan bons repetint coses',
      emoji: '🔁',
      durada: '3 h',
      bloc: 'Pensament de programador',
      desc: 'while i for, comptadors, acumuladors, condicions d\'eixida i com evitar el temut bucle infinit.',
      continguts: ['while', 'for', 'Comptadors', 'Acumuladors', 'Bucles infinits'],
      prereq: 'Temes 1 i 2: variables i condicions.',
      estat: 'publicat'
    },
    {
      n: 4,
      fitxer: 'temes/tema4.html',
      titol: 'Treballar amb moltes dades',
      subtitol: 'Quan una variable ja no ens arriba',
      emoji: '🗂️',
      durada: '3 h',
      bloc: 'Pensament de programador',
      desc: 'Arrays, índexs, recórrer dades amb bucles, buscar, comptar, sumar i traure màxims i mínims.',
      continguts: ['Crear arrays', 'Índexs', 'Recórrer amb for', 'Sumar i comptar', 'Màxim i mínim'],
      prereq: 'Tema 3: bucles.',
      estat: 'publicat'
    },
    {
      n: 5,
      fitxer: 'temes/tema5.html',
      titol: 'Dividir un programa en parts',
      subtitol: 'Mètodes: problemes xicotets, solucions clares',
      emoji: '🧩',
      durada: '3 h',
      bloc: 'Pensament de programador',
      desc: 'Crear mètodes, passar paràmetres, retornar valors i descompondre un problema gran en funcions xicotetes.',
      continguts: ['Què és un mètode', 'Paràmetres', 'return', 'void', 'Reutilització'],
      prereq: 'Temes 1 a 4. És el pas previ obligatori abans dels objectes.',
      estat: 'publicat'
    },
    {
      n: 6,
      fitxer: 'temes/tema6.html',
      titol: 'Objectes i classes',
      subtitol: 'El nostre primer Jugador amb vida, punts i accions',
      emoji: '🎮',
      durada: '3 h',
      bloc: 'Programació orientada a objectes',
      desc: 'Què és una classe i què és un objecte, atributs, mètodes, constructors i diversos objectes de la mateixa classe.',
      continguts: ['Classe i objecte', 'Atributs', 'Mètodes de la classe', 'Constructors', 'Diversos objectes'],
      prereq: 'Temes 1 a 5, especialment mètodes. No s\'introduïx abans.',
      estat: 'publicat'
    },
    {
      n: 7,
      fitxer: 'temes/tema7.html',
      titol: 'Construir un programa complet',
      subtitol: 'Ho ajuntem tot i ho fem funcionar',
      emoji: '🏗️',
      durada: '3 h',
      bloc: 'Construcció',
      desc: 'Un projecte que creix pas a pas: entendre el problema, dividir-lo, programar cada part, provar-la i millorar-la.',
      continguts: ['Analitzar el problema', 'Dividir en parts', 'Programar', 'Provar', 'Millorar'],
      prereq: 'Tot el curs fins ací: variables, decisions, bucles, arrays, mètodes i objectes.',
      estat: 'publicat'
    },
    {
      n: 8,
      fitxer: null,
      titol: 'Programar en l\'era de la IA',
      subtitol: 'La IA com a assistent, no com a substitut',
      emoji: '🤖',
      durada: '3 h',
      bloc: 'Programació real',
      desc: 'Utilitzar la IA per generar, explicar, depurar i millorar codi… sabent sempre què fa el programa i per què.',
      continguts: ['Prompts útils', 'Explicar errors', 'Generar tests', 'Refactoritzar', 'Detectar errors de la IA'],
      prereq: 'Temes 1 a 7: cal entendre el codi per poder revisar-lo.',
      estat: 'en-preparacio'
    },
    {
      n: 9,
      fitxer: null,
      titol: 'Cap a on va la programació?',
      subtitol: 'Innovacions, tecnologies i el teu pròxim pas',
      emoji: '🌐',
      durada: '3 h',
      bloc: 'Programació real',
      desc: 'IA, aplicacions web i mòbils, APIs, IoT, robòtica, ciberseguretat, videojocs, núvol i agents d\'IA… sense perdre els fonaments.',
      continguts: ['IA i agents', 'Web i mòbil', 'APIs i IoT', 'Ciberseguretat', 'Núvol i dades'],
      prereq: 'Tot el curs. És la sessió que obri portes.',
      estat: 'en-preparacio'
    }
  ]
};
