/* ==========================================================================
   Diapositives del Tema 1 · Variables: guardar informació
   GENERAT automàticament amb eines/genera-temes.mjs a partir de
   eines/contingut/tema1.js — no edites este fitxer a mà.
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   ========================================================================== */
window.DIAPOSITIVES_TEMA = {
  "numero": 1,
  "titol": "Variables: guardar informació",
  "subtitol": "Les «caixes» on el programa desa les dades",
  "objectiu": "Entendre què és una variable i saber guardar, canviar i mostrar informació en un programa senzill.",
  "index": [
    "Què és una variable",
    "Declarar i assignar",
    "Els tipus bàsics",
    "Operadors aritmètics",
    "La divisió entre enters",
    "Concatenar text",
    "Demanar dades amb Scanner",
    "Practiquem"
  ],
  "blocs": [
    {
      "tipus": "concepte",
      "titol": "Una variable és una caixa amb nom",
      "bullets": [
        "Té un nom: edat, punts, nota, preu…",
        "Té un tipus: què hi cap a dins",
        "Dins guarda un valor",
        "El valor pot canviar mentre el programa funciona"
      ],
      "notes": "Dibuixar la capsa a la pissarra i canviar-li el contingut davant de la classe."
    },
    {
      "tipus": "codi",
      "titol": "La primera variable",
      "codi": "int punts = 0;\nSystem.out.println(punts);\npunts = 10;\nSystem.out.println(punts);\npunts = punts + 25;\nSystem.out.println(punts);",
      "sortida": "0\n10\n35",
      "notes": "Escriure-ho i executar-ho en directe. Preguntar què valdrà punts cada vegada."
    },
    {
      "tipus": "comparacio",
      "titol": "Els tipus bàsics",
      "esquerra": {
        "titol": "Nombres",
        "bullets": [
          "int → enters: 16, 0, -3",
          "double → decimals: 7.5, 1.63",
          "Per comptar i calcular"
        ]
      },
      "dreta": {
        "titol": "Altres dades",
        "bullets": [
          "boolean → true / false",
          "char → un caràcter: 'A'",
          "String → text: \"Ana\""
        ]
      }
    },
    {
      "tipus": "codi",
      "titol": "Els operadors",
      "codi": "int a = 7;\nint b = 2;\nSystem.out.println(a + b);   // 9\nSystem.out.println(a - b);   // 5\nSystem.out.println(a * b);   // 14\nSystem.out.println(a / b);   // 3  ← compte!\nSystem.out.println(a % b);   // 1",
      "sortida": "9\n5\n14\n3\n1",
      "notes": "Posar molta atenció en la divisió: 7/2 és 3, no 3.5."
    },
    {
      "tipus": "prediccio",
      "titol": "Pensem abans d'executar",
      "codi": "int a = 9;\nint b = 2;\nSystem.out.println(a / b);\nSystem.out.println(a / 2.0);",
      "pregunta": "Què apareixerà per pantalla? Són iguals?",
      "notes": "Deixar que voten. La clau: si els dos costats són enters, es perd la part decimal."
    },
    {
      "tipus": "codi",
      "titol": "Enganxar text i variables",
      "codi": "String nom = \"Ana\";\nint punts = 350;\nSystem.out.println(\"Hola, \" + nom + \"!\");\nSystem.out.println(\"Tens \" + punts + \" punts.\");",
      "sortida": "Hola, Ana!\nTens 350 punts.",
      "notes": "Avisar del parany: \"Total: \" + a + b no suma, enganxa."
    },
    {
      "tipus": "codi",
      "titol": "Demanar dades pel teclat",
      "codi": "import java.util.Scanner;\n\nScanner teclat = new Scanner(System.in);\n\nSystem.out.print(\"Edat: \");\nint edat = teclat.nextInt();\n\nSystem.out.println(\"Tens \" + edat + \" anys.\");",
      "sortida": "Edat: 16\nTens 16 anys.",
      "notes": "Fer-ho davant de la classe i escriure una lletra per vore l'InputMismatchException."
    },
    {
      "tipus": "activitat",
      "titol": "Ara et toca a tu",
      "enunciat": "Fes un programa que demane les hores treballades i el preu per hora (amb decimals) i diga quant es cobrarà en total.",
      "temps": "15 min",
      "pistes": [
        "Les dos dades poden tindre decimals: double",
        "Multiplica i mostra el resultat amb un missatge"
      ],
      "notes": "Passar per les taules: l'error més habitual serà la coma decimal o oblidar crear el Scanner."
    },
    {
      "tipus": "concepte",
      "titol": "Els errors que veuràs segur",
      "bullets": [
        "Usar una variable sense valor → might not have been initialized",
        "Escriure 4,95 en compte de 4.95",
        "Dividir dos enters i perdre els decimals",
        "Oblidar el tipus: punts = 100; → cannot find symbol",
        "Escriure lletres on cal un número → InputMismatchException"
      ],
      "notes": "Provocar-los en directe: el compilador és el millor professor."
    },
    {
      "tipus": "pregunta",
      "titol": "Pensem un moment",
      "pregunta": "Si una variable pot canviar de valor, com sabem quin valor té en cada moment del programa?"
    }
  ],
  "resum": [
    "Una variable és una caixa amb nom on guardem un valor.",
    "Cada dada té un tipus: int, double, boolean, char o String.",
    "Assignar amb «=» vol dir «guarda això dins».",
    "Els operadors + - * / % ens deixen calcular.",
    "Divisió de dos enters: es perden els decimals!",
    "Amb «+» s'enganxen text i variables (compte amb l'orde).",
    "Scanner servix per llegir el que l'usuari escriu pel teclat.",
    "Els decimals s'escriuen amb punt: 7.5"
  ],
  "seguent": "Tema 2 · Prendre decisions"
};
