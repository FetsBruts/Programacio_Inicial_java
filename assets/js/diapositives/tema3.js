/* ==========================================================================
   Diapositives del Tema 3 · Repetir: els bucles
   GENERAT automàticament amb eines/genera-temes.mjs a partir de
   eines/contingut/tema3.js — no edites este fitxer a mà.
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   ========================================================================== */
window.DIAPOSITIVES_TEMA = {
  "numero": 3,
  "titol": "Repetir: els bucles",
  "subtitol": "Fer que el programa repetisca coses sense escriure-les mil vegades",
  "objectiu": "Fer que el programa repetisca codi: comptar, acumular i parar en el moment correcte.",
  "index": [
    "Per què necessitem bucles?",
    "El bucle while",
    "Comptadors i acumuladors",
    "El bucle for",
    "Bucles que depenen de l'usuari",
    "break: eixir quan toca",
    "Bucles infinits",
    "Practiquem"
  ],
  "blocs": [
    {
      "tipus": "concepte",
      "titol": "Per què bucles?",
      "bullets": [
        "Sense bucles: escriure el mateix 5, 100 o 1.000 vegades",
        "Amb bucles: escrivim la repetició UNA volta",
        "El programa repetix el codi per nosaltres",
        "Preguntes clau: quantes voltes? i quan para?"
      ],
      "notes": "Fer la comparació: 3 línies escrites a mà enfront d'un bucle que conta fins a 100."
    },
    {
      "tipus": "esquema",
      "titol": "Anatomia d'un bucle",
      "flux": [
        "Comptador inicial",
        "Condició",
        "Cos del bucle",
        "Canvi del comptador",
        "Fi"
      ],
      "nota": "Les tres peces: valor inicial, condició i canvi. Si falta l'última → bucle infinit."
    },
    {
      "tipus": "codi",
      "titol": "El primer while",
      "codi": "int i = 1;\n\nwhile (i <= 5) {\n    System.out.println(\"Volta \" + i);\n    i = i + 1;\n}",
      "sortida": "Volta 1\nVolta 2\nVolta 3\nVolta 4\nVolta 5",
      "notes": "Contar en veu alta les voltes amb la classe. Preguntar què passa si llevem i = i + 1."
    },
    {
      "tipus": "codi",
      "titol": "Comptador i acumulador",
      "codi": "int suma = 0;              // acumulador, FORA del bucle\n\nfor (int i = 1; i <= 10; i++) {\n    suma = suma + i;       // dins: s'actualitza\n}\n\nSystem.out.println(\"La suma és \" + suma);",
      "sortida": "La suma és 55",
      "notes": "Insistir en la diferència: el comptador compta voltes, l'acumulador guarda un total."
    },
    {
      "tipus": "comparacio",
      "titol": "while o for?",
      "esquerra": {
        "titol": "while",
        "bullets": [
          "No sé quantes voltes",
          "Depén de l'usuari",
          "Depén d'una condició",
          "Exemple: contrasenya"
        ]
      },
      "dreta": {
        "titol": "for",
        "bullets": [
          "Sé quantes voltes",
          "Comptador amb inici i fi",
          "Tot en una línia",
          "Exemple: taula del 7"
        ]
      }
    },
    {
      "tipus": "codi",
      "titol": "Bucles que esperen l'usuari",
      "codi": "String clau = \"\";\n\nwhile (!clau.equals(\"java2026\")) {\n    System.out.print(\"Contrasenya: \");\n    clau = teclat.next();\n}\n\nSystem.out.println(\"Endavant!\");",
      "sortida": "Contrasenya: hola\nContrasenya: java2026\nEndavant!",
      "notes": "Recordar: els textos es comparen amb equals. Amb == el bucle no acabaria mai."
    },
    {
      "tipus": "codi",
      "titol": "break: eixir quan ja el tenim",
      "codi": "while (true) {\n    if (numero % divisor == 0) {\n        System.out.println(\"El divisor és \" + divisor);\n        break;\n    }\n    divisor++;\n}",
      "sortida": "El divisor és 3",
      "notes": "while (true) sense break = bucle infinit segur."
    },
    {
      "tipus": "activitat",
      "titol": "Ara et toca a tu",
      "enunciat": "Fes un programa que demane notes fins que l'usuari escriga -1 i mostre la mitjana.",
      "temps": "15 min",
      "pistes": [
        "Necessites un acumulador i un comptador",
        "El -1 no es suma mai",
        "Compte: divideix entre un double"
      ],
      "notes": "Recordar que encara no tenim arrays: no cal guardar totes les notes, només la suma i quantes n'hi ha."
    },
    {
      "tipus": "pregunta",
      "titol": "Pensem un moment",
      "pregunta": "Per què creus que un bucle infinit no dona cap error de compilació? Com el podríem detectar abans d'executar-lo?"
    }
  ],
  "resum": [
    "Els bucles repetixen codi sense escriure'l mil vegades.",
    "while: mentres la condició siga vertadera.",
    "for: quan sabem quantes voltes volem.",
    "Tres peces: inici, condició i canvi del comptador.",
    "Comptador compta voltes; acumulador guarda totals.",
    "Acumuladors i comptadors es creen fora del bucle.",
    "break eix del bucle; sense ell, while (true) no para mai.",
    "Un bucle pot fer zero voltes: depén de la condició."
  ],
  "seguent": "Tema 4 · Guardar moltes dades: els arrays"
};
