/* ==========================================================================
   Diapositives del Tema 5 · Mètodes: reutilitzar el codi
   GENERAT automàticament amb eines/genera-temes.mjs a partir de
   eines/contingut/tema5.js — no edites este fitxer a mà.
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   ========================================================================== */
window.DIAPOSITIVES_TEMA = {
  "numero": 5,
  "titol": "Mètodes: reutilitzar el codi",
  "subtitol": "Posar nom a un tros de programa i usar-lo les vegades que calga",
  "objectiu": "Escriure mètodes per a no repetir codi i construir programes grans a partir de peces menudes i provades.",
  "index": [
    "El problema: codi repetit",
    "El primer mètode",
    "Paràmetres i arguments",
    "return: tornar valors",
    "void o amb retorn?",
    "Àmbit de les variables",
    "Mètodes amb arrays",
    "Pensar el problema en peces"
  ],
  "blocs": [
    {
      "tipus": "concepte",
      "titol": "Per què mètodes?",
      "bullets": [
        "El mateix càlcul, escrit vint vegades",
        "Un canvi → vint llocs on tocar-lo",
        "Solució: donar un nom a cada peça",
        "Ja n'has usat: println, nextInt, length..."
      ],
      "notes": "Ensenyar dos trossos de codi idèntics al costat i preguntar què passa si cal canviar-los."
    },
    {
      "tipus": "esquema",
      "titol": "Anatomia d'un mètode",
      "flux": [
        "public static",
        "tipus de retorn",
        "nom",
        "(paràmetres)",
        "{ cos }"
      ],
      "nota": "El cap diu com es diu i què torna. El cos diu què fa. La crida és on s'executa."
    },
    {
      "tipus": "codi",
      "titol": "El primer mètode",
      "codi": "public static void saluda() {\n    System.out.println(\"Hola! Soc un mètode.\");\n}\n\npublic static void main(String[] args) {\n    saluda();\n    saluda();\n}",
      "sortida": "Hola! Soc un mètode.\nHola! Soc un mètode.",
      "notes": "Insistir: definir un mètode no l'executa. S'executa en la crida."
    },
    {
      "tipus": "codi",
      "titol": "Amb paràmetres",
      "codi": "public static void saluda(String nom) {\n    System.out.println(\"Hola, \" + nom + \"!\");\n}\n\npublic static void main(String[] args) {\n    saluda(\"Ana\");\n    saluda(\"Bruno\");\n}",
      "sortida": "Hola, Ana!\nHola, Bruno!",
      "notes": "Paràmetre = String nom (al cap). Argument = \"Ana\" (a la crida)."
    },
    {
      "tipus": "codi",
      "titol": "return: tornar un valor",
      "codi": "public static int suma(int a, int b) {\n    return a + b;\n}\n\npublic static void main(String[] args) {\n    int r = suma(4, 7);\n    System.out.println(\"4 + 7 = \" + r);\n    System.out.println(\"10 + 32 = \" + suma(10, 32));\n}",
      "sortida": "4 + 7 = 11\n10 + 32 = 42",
      "notes": "return fa dos treballs: torna el valor i acaba el mètode."
    },
    {
      "tipus": "comparacio",
      "titol": "void o amb retorn?",
      "esquerra": {
        "titol": "void",
        "bullets": [
          "Fa faena i no torna res",
          "Escriure, dibuixar, mostrar",
          "No es pot guardar en una variable"
        ]
      },
      "dreta": {
        "titol": "Amb tipus",
        "bullets": [
          "Torna un valor",
          "int, double, boolean, String, int[]",
          "Es pot guardar i usar"
        ]
      }
    },
    {
      "tipus": "concepte",
      "titol": "Cadascú a sa casa",
      "bullets": [
        "Les variables d'un mètode només existixen dins",
        "Fora del mètode no es veuen",
        "Per això es poden repetir noms sense problema",
        "Portes: paràmetres (entrada) i return (eixida)"
      ],
      "notes": "Dibuixar dos caixes separades a la pissarra: main i el mètode."
    },
    {
      "tipus": "codi",
      "titol": "Mètodes amb arrays",
      "codi": "public static double mitjana(double[] valors) {\n    double suma = 0;\n    for (int i = 0; i < valors.length; i++) {\n        suma = suma + valors[i];\n    }\n    return suma / valors.length;\n}",
      "sortida": "Mitjana: 7.2",
      "notes": "El càlcul s'escriu UNA vegada i servix per a qualsevol array de notes, punts o temperatures."
    },
    {
      "tipus": "activitat",
      "titol": "Ara et toca a tu",
      "enunciat": "Divideix en mètodes un programa que demana 6 notes i mostra la mitjana, la més alta i els aprovats.",
      "temps": "20 min",
      "pistes": [
        "Pensa els verbs: llegir, calcular, mostrar",
        "Decidix què torna cada mètode",
        "main amb poques línies"
      ],
      "notes": "Passar per les taules preguntant: què torna este mètode?"
    },
    {
      "tipus": "pregunta",
      "titol": "Pensem un moment",
      "pregunta": "Si un mètode ha de tornar un valor, i dins té un if sense else, per què pot donar error? Quants camins té eixe mètode?"
    }
  ],
  "resum": [
    "Un mètode és codi amb nom que es pot cridar moltes vegades.",
    "Paràmetres: què necessita. Arguments: què li passem.",
    "void = no torna res; altre tipus = return.",
    "return torna el valor i acaba el mètode.",
    "Tots els camins d'un mètode han de tornar el valor.",
    "Les variables viuen només dins del seu mètode.",
    "Els arrays es passen i es tornen sense problema.",
    "main ha de ser l'esquelet del programa."
  ],
  "seguent": "Tema 6 · Classes i objectes"
};
