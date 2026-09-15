/* ==========================================================================
   Diapositives del Tema 6 · Classes i objectes
   GENERAT automàticament amb eines/genera-temes.mjs a partir de
   eines/contingut/tema6.js — no edites este fitxer a mà.
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   ========================================================================== */
window.DIAPOSITIVES_TEMA = {
  "numero": 6,
  "titol": "Classes i objectes",
  "subtitol": "Dades i accions que viatgen juntes: el meu primer «jugador» de veritat",
  "objectiu": "Agrupar dades i accions en classes i crear objectes que recorden el seu estat i protegixen les seues regles.",
  "index": [
    "El problema de les dades soltes",
    "Classe: el motlle",
    "Objectes amb new",
    "Mètodes sense static",
    "El constructor",
    "Cada objecte, les seues dades",
    "Arrays d'objectes",
    "Practiquem"
  ],
  "blocs": [
    {
      "tipus": "concepte",
      "titol": "Dades que van juntes",
      "bullets": [
        "nom1, vida1, punts1, nom2, vida2, punts2...",
        "Les dades d'un jugador estan escampades",
        "Afegir un jugador = tocar mig programa",
        "Solució: un motlle que agrupa dades i accions"
      ],
      "notes": "Escriure les 6 variables a la pissarra i preguntar com afegiríem el jugador 5."
    },
    {
      "tipus": "esquema",
      "titol": "El motlle i les coses fetes amb ell",
      "flux": [
        "CLASSE Jugador",
        "atributs: nom, vida, punts, nivell",
        "mètodes: atacar, curar, pujarNivell",
        "OBJECTES: ana, bruno, carla"
      ],
      "nota": "La classe no és cap jugador: és la descripció. Els objectes són els jugadors de veritat, cadascun amb les seues dades."
    },
    {
      "tipus": "codi",
      "titol": "El primer objecte",
      "codi": "Jugador ana = new Jugador();\nana.nom = \"Ana\";\nana.vida = 100;\n\nSystem.out.println(ana.nom + \" té \" + ana.vida + \" de vida.\");",
      "sortida": "Ana té 100 de vida.",
      "notes": "El punt és la porta: ana.nom és el nom d'eixe jugador concret."
    },
    {
      "tipus": "codi",
      "titol": "Mètodes de l'objecte (sense static)",
      "codi": "public void atacar() {\n    System.out.println(nom + \" llança un atac!\");\n    puntuacio = puntuacio + 10;\n}\n\n// a main:\nana.atacar();",
      "sortida": "Ana llança un atac!",
      "notes": "Dins del mètode, nom i puntuacio són de l'objecte que rep la crida. Insistir: sense static."
    },
    {
      "tipus": "codi",
      "titol": "El constructor",
      "codi": "public Jugador(String nom) {\n    this.nom = nom;\n    this.vida = 100;\n    this.puntuacio = 0;\n    this.nivell = 1;\n}\n\n// i a main:\nJugador ana = new Jugador(\"Ana\");",
      "sortida": "Ana · vida: 100 · punts: 0 · nivell: 1",
      "notes": "Es diu igual que la classe, no té tipus de retorn i s'executa sol amb new."
    },
    {
      "tipus": "comparacio",
      "titol": "Cada objecte va a la seua",
      "esquerra": {
        "titol": "ana",
        "bullets": [
          "nom = \"Ana\"",
          "vida = 100",
          "punts = 10"
        ]
      },
      "dreta": {
        "titol": "bruno",
        "bullets": [
          "nom = \"Bruno\"",
          "vida = 100",
          "punts = 0"
        ]
      }
    },
    {
      "tipus": "codi",
      "titol": "Un array d'objectes",
      "codi": "Jugador[] equip = new Jugador[3];\nequip[0] = new Jugador(\"Ana\");\nequip[1] = new Jugador(\"Bruno\");\nequip[2] = new Jugador(\"Carla\");\n\nfor (int i = 0; i < equip.length; i++) {\n    equip[i].atacar();\n    equip[i].mostra();\n}",
      "sortida": "Ana (20 punts)\nBruno (20 punts)\nCarla (20 punts)",
      "notes": "Cada casella guarda un objecte sencer. Es recorre amb un for com en el Tema 4."
    },
    {
      "tipus": "activitat",
      "titol": "Ara et toca a tu",
      "enunciat": "Fes la classe Mobil (marca, model, bateria) amb els mètodes usar(int), carregar() i mostra(), i crea dos mòbils amb històries distintes.",
      "temps": "20 min",
      "pistes": [
        "Atributs primer, constructor després, mètodes al final",
        "La bateria no pot ser negativa",
        "Prova els dos objectes per separat"
      ],
      "notes": "Comprovar amb les taules que els dos objectes no es barregen."
    },
    {
      "tipus": "pregunta",
      "titol": "Pensem un moment",
      "pregunta": "Per què creus que és millor que la regla «no passar de 100 de vida» estiga dins del mètode curar i no en el programa principal?"
    }
  ],
  "resum": [
    "Classe = motlle; objecte = cosa concreta creada amb new.",
    "Atributs: les dades de cada objecte.",
    "Mètodes de l'objecte: sense static.",
    "Constructor: es diu com la classe i s'executa amb new.",
    "this.nom = l'atribut d'este objecte.",
    "El punt arriba a les dades i als mètodes: ana.vida, ana.atacar().",
    "Arrays d'objectes + bucle per a treballar amb molts.",
    "Cada objecte protegix les seues regles."
  ],
  "seguent": "Tema 7 · Un programa complet"
};
