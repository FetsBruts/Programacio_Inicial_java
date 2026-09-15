/* ==========================================================================
   Diapositives del Tema 4 · Arrays: guardar moltes dades
   GENERAT automàticament amb eines/genera-temes.mjs a partir de
   eines/contingut/tema4.js — no edites este fitxer a mà.
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   ========================================================================== */
window.DIAPOSITIVES_TEMA = {
  "numero": 4,
  "titol": "Arrays: guardar moltes dades",
  "subtitol": "Una fila de caselles numerades per a totes les notes, punts o temperatures",
  "objectiu": "Guardar moltes dades en caselles numerades i recórrer-les amb bucles per a calcular el que vulguem.",
  "index": [
    "Per què arrays?",
    "Crear i accedir",
    "Índexs: del 0 al length-1",
    "Recórrer amb for i for-each",
    "Omplir des del teclat",
    "Màxims, mínims i cerques",
    "Els textos també es recorren",
    "Practiquem"
  ],
  "blocs": [
    {
      "tipus": "concepte",
      "titol": "El problema de les mil variables",
      "bullets": [
        "30 notes no poden ser 30 variables",
        "Un array: una variable amb moltes caselles",
        "Cada casella té un número: la seua posició",
        "Array + bucle = màquina de calcular"
      ],
      "notes": "Escriure 6 variables a la pissarra i preguntar com ho faríem amb 300."
    },
    {
      "tipus": "esquema",
      "titol": "Índexs: del 0 al length-1",
      "flux": [
        "[0] → 120",
        "[1] → 95",
        "[2] → 180",
        "[3] → 60",
        "[4] → 145"
      ],
      "nota": "5 caselles = índexs del 0 al 4. El 5 no existix: ArrayIndexOutOfBoundsException."
    },
    {
      "tipus": "codi",
      "titol": "Crear i recórrer",
      "codi": "int[] punts = {120, 95, 180, 60, 145};\n\nfor (int i = 0; i < punts.length; i++) {\n    System.out.println(\"Jugador \" + (i + 1) + \": \" + punts[i]);\n}",
      "sortida": "Jugador 1: 120\nJugador 2: 95\nJugador 3: 180\nJugador 4: 60\nJugador 5: 145",
      "notes": "Insistir en i < length (sense igual). Provocar l'error de canviar <= per vore què passa."
    },
    {
      "tipus": "codi",
      "titol": "Omplir amb el teclat",
      "codi": "double[] notes = new double[5];\n\nfor (int i = 0; i < notes.length; i++) {\n    System.out.print(\"Nota \" + (i + 1) + \": \");\n    notes[i] = teclat.nextDouble();\n}",
      "sortida": "Nota 1: 6\nNota 2: 7\nNota 3: 6\nNota 4: 9\nNota 5: 8",
      "notes": "El patró es repetix sempre: un bucle per a omplir i un altre per a calcular."
    },
    {
      "tipus": "codi",
      "titol": "L'aspirant al títol de màxim",
      "codi": "int maxim = punts[0];\n\nfor (int i = 1; i < punts.length; i++) {\n    if (punts[i] > maxim) {\n        maxim = punts[i];\n    }\n}",
      "sortida": "La millor partida: 180 punts",
      "notes": "Preguntar: per què no comencem amb 0? Què passaria amb temperatures negatives?"
    },
    {
      "tipus": "comparacio",
      "titol": "for o for-each?",
      "esquerra": {
        "titol": "for amb índex",
        "bullets": [
          "Necessite la posició",
          "Vull omplir o canviar caselles",
          "Vull comparar amb la següent"
        ]
      },
      "dreta": {
        "titol": "for-each",
        "bullets": [
          "Només vull llegir els valors",
          "Codi més curt",
          "No puc guardar res dins"
        ]
      }
    },
    {
      "tipus": "codi",
      "titol": "Els textos es recorren igual",
      "codi": "String paraula = \"videoconsola\";\nint vocals = 0;\n\nfor (int i = 0; i < paraula.length(); i++) {\n    char lletra = paraula.charAt(i);\n    if (lletra == 'a' || lletra == 'e' || lletra == 'i'\n            || lletra == 'o' || lletra == 'u') {\n        vocals++;\n    }\n}",
      "sortida": "La paraula videoconsola té 6 vocals.",
      "notes": "char amb cometes simples: els char es comparen amb ==, els textos amb equals."
    },
    {
      "tipus": "activitat",
      "titol": "Ara et toca a tu",
      "enunciat": "Demana 6 notes, guarda-les en un array i mostra la mitjana, la més alta i la més baixa.",
      "temps": "15 min",
      "pistes": [
        "Un bucle per a omplir",
        "Un altre per a calcular",
        "El màxim i el mínim comencen en notes[0]"
      ],
      "notes": "Passar per les taules comprovant que el bucle comença en 0 i acaba en length-1."
    },
    {
      "tipus": "pregunta",
      "titol": "Pensem un moment",
      "pregunta": "Per què creus que el primer índex d'un array és el 0 i no l'1? Quines conseqüències té quan mostrem dades a l'usuari?"
    }
  ],
  "resum": [
    "Un array guarda molts valors del mateix tipus.",
    "Es crea amb new o amb {valors}.",
    "Índexs del 0 fins a length-1.",
    "Es recorre amb for: i < array.length.",
    "for-each per a llegir; for amb índex per a omplir.",
    "Sumes, mitjanes, màxim i mínim amb un bucle.",
    "Cerca: variable bandera i break.",
    "array.length sense parèntesis; text.length() amb parèntesis."
  ],
  "seguent": "Tema 5 · Mètodes: reutilitzar el codi"
};
