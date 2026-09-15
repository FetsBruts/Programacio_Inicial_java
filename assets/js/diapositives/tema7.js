/* ==========================================================================
   Diapositives del Tema 7 · Construir un programa complet
   GENERAT automàticament amb eines/genera-temes.mjs a partir de
   eines/contingut/tema7.js — no edites este fitxer a mà.
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   ========================================================================== */
window.DIAPOSITIVES_TEMA = {
  "numero": 7,
  "titol": "Construir un programa complet",
  "subtitol": "De la idea al programa que funciona: pensem, dividim, programem i provem",
  "objectiu": "Saber convertir un problema en un programa: dividir-lo en parts, escollir les dades, construir-lo per etapes i provar cada etapa.",
  "index": [
    "El problema: tot dins del main",
    "El mètode de treball (6 etapes)",
    "Del problema a la llista de parts",
    "Escollir les dades",
    "L'esquelet que compila",
    "Una part, una prova",
    "El menú: el programa no s'acaba",
    "Trobar l'error: busca la part",
    "Millorar quan ja funciona"
  ],
  "blocs": [
    {
      "tipus": "concepte",
      "titol": "Hui no hi ha sintaxi nova",
      "bullets": [
        "Ja sabem variables, decisions, bucles, arrays, mètodes i objectes",
        "El que falta és saber ajuntar-ho",
        "Els programes grans es construïxen per etapes",
        "La diferència no és el codi: és el mètode"
      ],
      "notes": "Dir-ho clar al principi: hui s'apren a treballar, no a escriure codi nou."
    },
    {
      "tipus": "esquema",
      "titol": "Les sis etapes",
      "flux": [
        "Entendre",
        "Dividir",
        "Dades",
        "Esquelet",
        "Omplir i provar",
        "Millorar"
      ],
      "nota": "Sempre les mateixes, tant per a un exercici de classe com per a un joc professional."
    },
    {
      "tipus": "concepte",
      "titol": "La llista de parts és el mapa",
      "bullets": [
        "Cada cosa que el programa sap fer → un mètode",
        "Es decideix en paper, abans de programar",
        "Quan et bloques, tornes a la llista",
        "La pregunta: què li entra i què ha de tornar?"
      ],
      "notes": "Escriure-la a la pissarra amb el gestor del torneig."
    },
    {
      "tipus": "comparacio",
      "titol": "Dades: què trie?",
      "esquerra": {
        "titol": "Un sol valor",
        "bullets": [
          "Variable simple",
          "total, comptador, resposta",
          "int, double, String, boolean"
        ]
      },
      "dreta": {
        "titol": "Moltes dades",
        "bullets": [
          "Array (o array d'objectes)",
          "Dades que van juntes → classe",
          "Es recorre amb un bucle"
        ]
      }
    },
    {
      "tipus": "codi",
      "titol": "L'esquelet que compila",
      "codi": "public static int totalPunts(Jugador[] jugadors) {\n    return 0;      // provisional\n}\n\npublic static void main(String[] args) {\n    System.out.println(\"Estructura preparada.\");\n}",
      "sortida": "Estructura preparada.",
      "notes": "Escriure-ho en directe i executar-ho: compila i funciona, encara que no faça res."
    },
    {
      "tipus": "prediccio",
      "titol": "Una part, una prova",
      "codi": "int[] proves = {120, 95, 180};\nSystem.out.println(totalPunts(proves));",
      "pregunta": "Quin resultat esperem? Com ho comprovem?",
      "notes": "Fer-los calcular mentalment: 395. I preguntar què faríem si ix 390."
    },
    {
      "tipus": "esquema",
      "titol": "El main llegit com un resum",
      "flux": [
        "mostrarTots()",
        "totalPunts()",
        "millorJugador()",
        "afegirPunts()"
      ],
      "nota": "Si algú llig el main i entén què fa el programa, les parts estan ben triades."
    },
    {
      "tipus": "codi",
      "titol": "El menú",
      "codi": "boolean eixir = false;\nwhile (!eixir) {\n    System.out.println(\"1. Mostrar  2. Sumar  0. Eixir\");\n    int opcio = teclat.nextInt();\n    if (opcio == 0) eixir = true;\n    else if (opcio == 1) mostrarTots(jugadors);\n}",
      "sortida": "El programa no s'acaba fins que l'usuari vol.",
      "notes": "Recordar el bucle infinit: la variable ha de canviar dins del bucle."
    },
    {
      "tipus": "concepte",
      "titol": "Quan alguna cosa falla",
      "bullets": [
        "Quina part és la culpable?",
        "Li arriben bé les dades? (println provisional)",
        "Què torna exactament?",
        "Amb quines dades falla? (prova amb poques)"
      ],
      "notes": "Insistir: un canvi, una prova."
    },
    {
      "tipus": "activitat",
      "titol": "Ara et toca a tu",
      "enunciat": "Escriu el pla (la llista de parts) d'un programa que guarda les teues notes de SMX i diu la mitjana, si passes de curs i quin mòdul et costa més.",
      "temps": "10 min",
      "pistes": [
        "Cada part ha de tindre un nom i un resultat clar",
        "Quines dades necessites: un array? una classe?"
      ],
      "notes": "Corregir en veu alta dos o tres plans: discutir els noms i els tipus de retorn."
    },
    {
      "tipus": "pregunta",
      "titol": "Pensem un moment",
      "pregunta": "Per què és millor provar el mètode amb {1, 2, 3} que amb les 40 dades reals del programa?"
    },
    {
      "tipus": "codi",
      "titol": "Els casos estranys",
      "codi": "int[] cap = {};                       // array buit\nSystem.out.println(totalPunts(cap));   // hauria de dir 0\n\nJugador[] buit = new Jugador[4];       // tot null\nmostrarTots(buit);                     // no ha d'esclatar",
      "sortida": "0",
      "notes": "Presentar els casos estranys com el que són: la diferència entre un exercici i un programa de debò."
    }
  ],
  "resum": [
    "Els programes es construïxen per etapes, no d'un colp.",
    "La llista de parts és el mapa del programa.",
    "Les dades es decideixen abans d'escriure codi.",
    "L'esquelet ha de compilar i executar-se.",
    "Una part, una prova: un canvi, una prova.",
    "Calcular i mostrar són coses distintes.",
    "El main és un resum, no el programa sencer.",
    "Els casos estranys formen part del programa."
  ],
  "seguent": "Tema 8 · Programar en l'era de la IA"
};
