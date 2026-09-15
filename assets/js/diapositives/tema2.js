/* ==========================================================================
   Diapositives del Tema 2 · Prendre decisions
   GENERAT automàticament amb eines/genera-temes.mjs a partir de
   eines/contingut/tema2.js — no edites este fitxer a mà.
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   ========================================================================== */
window.DIAPOSITIVES_TEMA = {
  "numero": 2,
  "titol": "Prendre decisions",
  "subtitol": "Que el programa decidisca per si mateix",
  "objectiu": "Fer programes que prenguen decisions: comparar, combinar condicions i triar entre diversos camins.",
  "index": [
    "Comparar valors",
    "El primer if",
    "if / else / else if",
    "Combinar condicions (&& || !)",
    "Comparar textos amb equals",
    "Menús amb switch",
    "Errors que no avisen",
    "Practiquem"
  ],
  "blocs": [
    {
      "tipus": "concepte",
      "titol": "La pregunta clau",
      "bullets": [
        "«Quina condició ha de complir-se perquè passe açò?»",
        "Si no sabem respondre-la, encara no hem pensat el problema",
        "Una comparació dona sempre true o false",
        "Amb eixe true o false el programa decideix"
      ],
      "notes": "Fer la pregunta en veu alta cada vegada que plantegem un cas nou."
    },
    {
      "tipus": "comparacio",
      "titol": "Els operadors de comparació",
      "esquerra": {
        "titol": "Igualtat",
        "bullets": [
          "== és igual a",
          "!= és diferent de",
          "Compte: = guarda, == compara"
        ]
      },
      "dreta": {
        "titol": "Ordre",
        "bullets": [
          "> més gran que",
          "< més menut que",
          ">= i <= inclouen el valor"
        ]
      }
    },
    {
      "tipus": "codi",
      "titol": "El primer if",
      "codi": "double nota = 7.5;\n\nif (nota >= 5) {\n    System.out.println(\"Estàs aprovat!\");\n}",
      "sortida": "Estàs aprovat!",
      "notes": "Remarcar els parèntesis de la condició i les claus del cos. I que NO porta punt i coma darrere."
    },
    {
      "tipus": "codi",
      "titol": "if i else",
      "codi": "if (nota >= 5) {\n    System.out.println(\"Aprovat\");\n} else {\n    System.out.println(\"Suspés\");\n}",
      "sortida": "Suspés",
      "notes": "Preguntar: què passa si nota val 5.0 exactament?"
    },
    {
      "tipus": "esquema",
      "titol": "Els trams del cinema",
      "flux": [
        "Gratis: < 6",
        "6 €: 6-17",
        "9 €: 18-64",
        "5 €: 65+"
      ],
      "nota": "S'encadenen amb else if i es miren en orde, del més concret al més general."
    },
    {
      "tipus": "codi",
      "titol": "Combinar condicions",
      "codi": "int edat = 16;\nboolean teCarnet = false;\n\nSystem.out.println(edat >= 18 && teCarnet);\nSystem.out.println(!teCarnet);\n\nboolean adolescent = edat >= 13 && edat <= 19;\nSystem.out.println(adolescent);",
      "sortida": "false\ntrue\ntrue",
      "notes": "Insistir: en Java no es pot escriure 13 <= edat <= 19."
    },
    {
      "tipus": "codi",
      "titol": "Comparar textos: equals",
      "codi": "String clauEscrita = \"1234\";\nString clauGuardada = \"1234\";\n\nSystem.out.println(clauEscrita == clauGuardada);\nSystem.out.println(clauEscrita.equals(clauGuardada));",
      "sortida": "false\ntrue",
      "notes": "Impacte garantit. Repetir-ho: els textos es comparen amb equals, sempre."
    },
    {
      "tipus": "codi",
      "titol": "Menús amb switch",
      "codi": "switch (opcio) {\n    case 1:\n        System.out.println(\"Nova partida\");\n        break;\n    case 2:\n        System.out.println(\"Carregar partida\");\n        break;\n    default:\n        System.out.println(\"Opció desconeguda\");\n}",
      "sortida": "Carregar partida",
      "notes": "Provocar l'error d'oblidar un break perquè vegen què passa."
    },
    {
      "tipus": "activitat",
      "titol": "Ara et toca a tu",
      "enunciat": "Fes un programa que demane una nota i diga la qualificació: Insuficient, Suficient, Bé, Notable o Excel·lent.",
      "temps": "15 min",
      "pistes": [
        "Les condicions van de menor a major",
        "Prova els valors de la frontera: 4.99, 5.0, 9.0"
      ],
      "notes": "Passar per les taules comprovant l'orde dels else if."
    },
    {
      "tipus": "pregunta",
      "titol": "Pensem un moment",
      "pregunta": "Per què hi ha errors que no donen cap missatge? Com els detectaríem?"
    }
  ],
  "resum": [
    "Comparar amb == != < > <= >= dona true o false.",
    "= guarda i == compara: no els confongues!",
    "if / else decideixen entre dos camins.",
    "else if encadenen casos, i es miren en orde.",
    "&& calen les dos; || en basta una; ! invertix.",
    "Els textos es comparen amb equals.",
    "switch per a menús; recorda els break.",
    "Els errors que no avisen es troben provant el programa."
  ],
  "seguent": "Tema 3 · Repetir: els bucles"
};
