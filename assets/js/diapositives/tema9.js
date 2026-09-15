/* ==========================================================================
   Diapositives del Tema 9 · Cap a on va la programació
   GENERAT automàticament amb eines/genera-temes.mjs a partir de
   eines/contingut/tema9.js — no edites este fitxer a mà.
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   ========================================================================== */
window.DIAPOSITIVES_TEMA = {
  "numero": 9,
  "titol": "Cap a on va la programació",
  "subtitol": "Les ferramentes canvien cada any; els fonaments que has aprés es queden",
  "objectiu": "Vore on va tot el que has aprés: quines peces té qualsevol aplicació, què permeten les grans àrees de la programació, què es queda per sempre i com continuar aprenent amb un projecte propi.",
  "index": [
    "Les tres peces de tota aplicació",
    "API: mètodes que parlen per internet",
    "El mateix en tots els llenguatges",
    "Les grans àrees",
    "El mateix codi en un joc, un robot i un servici",
    "Els nou fonaments que es queden",
    "Com es continua aprenent",
    "Com triar què aprendre",
    "El codi decidix sobre persones",
    "El teu mini projecte"
  ],
  "blocs": [
    {
      "tipus": "concepte",
      "titol": "El teu matí és ple de programes",
      "bullets": [
        "L'alarma, el grup de classe, la música, el joc, l'autobús, el temps",
        "Darrere hi ha programes que parlen amb altres programes",
        "I no hi ha cap idea nova dins: variables, condicions, bucles, llistes, funcions",
        "Hui mirem on va això i triem el teu camí"
      ],
      "notes": "Començar amb un matí real d'un alumne i preguntar quants programes hi haurà darrere de cada moment."
    },
    {
      "tipus": "esquema",
      "titol": "Les tres peces",
      "flux": [
        "Interfície",
        "Lògica del programa",
        "Dades"
      ],
      "nota": "La interfície parla amb la persona, la lògica decidix, les dades guarden. Tot el que has aprés viu al mig."
    },
    {
      "tipus": "concepte",
      "titol": "Quan polses «Enviar»",
      "bullets": [
        "La interfície munta un missatge",
        "Viatja per internet fins a un servidor",
        "La lògica comprova i calcula; les dades guarden",
        "Torna la resposta: «guardat», «incorrecte», els punts nous…"
      ],
      "notes": "Dibuixar-ho a la pissarra amb quatre fletxes. És la mateixa pel·lícula en tota app."
    },
    {
      "tipus": "codi",
      "titol": "Una API és un mètode amb adreça",
      "codi": "public static int totalPunts(Jugador[] jugadors) {\n    int suma = 0;\n    for (int i = 0; i < jugadors.length; i++) {\n        suma = suma + jugadors[i].punts;\n    }\n    return suma;\n}",
      "sortida": "GET /torneig/total  →  {\"total\": 395}",
      "notes": "El mateix mètode que van escriure ells al Tema 5. L'API només afig el transport."
    },
    {
      "tipus": "comparacio",
      "titol": "El mateix bucle, en quatre llenguatges",
      "esquerra": {
        "titol": "Amb claus i parèntesi",
        "bullets": [
          "Java: for (int i = 0; …)",
          "JavaScript: for (const x of v)"
        ]
      },
      "dreta": {
        "titol": "Més curt",
        "bullets": [
          "Python: for x in v:",
          "Kotlin: for (x in v)"
        ]
      }
    },
    {
      "tipus": "concepte",
      "titol": "Canvia la manera d'escriure, no la idea",
      "bullets": [
        "Recórrer una llista es fa igual a tot arreu",
        "També decidir, repetir, agrupar en funcions i crear objectes",
        "Si canvie de llenguatge, no comence de zero",
        "Comence del capítol dos"
      ],
      "notes": "Convencer-los que el que han aprés és transferible: és el missatge central del tema."
    },
    {
      "tipus": "esquema",
      "titol": "Les grans àrees",
      "flux": [
        "Web i mòbil",
        "APIs",
        "Jocs",
        "Dades i IA",
        "Robòtica i IoT",
        "Ciberseguretat",
        "Núvol",
        "Agents"
      ],
      "nota": "No cal aprendre-les totes: cal saber que existixen i què permeten."
    },
    {
      "tipus": "comparacio",
      "titol": "Mateixa idea, llocs distints",
      "esquerra": {
        "titol": "Canvia",
        "bullets": [
          "El dibuix i el temps real en un joc",
          "Sensors i motors en un robot",
          "Xarxa i molta gent en un servici",
          "La legalitat i les dades sensibles"
        ]
      },
      "dreta": {
        "titol": "No canvia",
        "bullets": [
          "La condició",
          "El bucle",
          "Les dades que es guarden",
          "Provar i dividir el problema"
        ]
      }
    },
    {
      "tipus": "codi",
      "titol": "El primer recomanador",
      "codi": "public static int coincidencies(boolean[] a, boolean[] b) {\n    int quants = 0;\n    for (int i = 0; i < a.length; i++) {\n        if (a[i] && b[i]) quants++;\n    }\n    return quants;\n}",
      "sortida": "Coincidències amb u2: 2",
      "notes": "Amb dos usuaris és una curiositat; amb milions i matemàtiques fines és el motor d'una plataforma."
    },
    {
      "tipus": "concepte",
      "titol": "Els nou fonaments que es queden",
      "bullets": [
        "Variables i tipus · decisions · bucles",
        "Llistes i límits · dividir en parts · objectes",
        "Provar · llegir codi i errors · treballar en equip",
        "Pots canviar de llenguatge o d'editor en un cap de setmana",
        "Canviar de fonaments no es fa en un any"
      ],
      "notes": "Dir-ho clar: este llistat és el que s'emporten del curs i no caduca."
    },
    {
      "tipus": "esquema",
      "titol": "Com es continua aprenent",
      "flux": [
        "Domina el que saps",
        "Un projecte xicotet i acabat",
        "Llig codi dels altres",
        "Aprén Git",
        "Documentació i errors",
        "Compartix i pregunta"
      ],
      "nota": "El millor senyal de progrés no és «sé molt», és «he acabat un projecte menut»."
    },
    {
      "tipus": "comparacio",
      "titol": "Com triar què aprendre",
      "esquerra": {
        "titol": "Mal senyal",
        "bullets": [
          "Aprendre la moda del mes",
          "Nou temes alhora",
          "Tutorials sense acabar mai res",
          "Copiar sense entendre"
        ]
      },
      "dreta": {
        "titol": "Bon senyal",
        "bullets": [
          "Un projecte que vull acabar",
          "Una tecnologia nova per projecte",
          "Coses funcionant cada setmana",
          "Poder explicar el codi"
        ]
      }
    },
    {
      "tipus": "pregunta",
      "titol": "Pensem un moment",
      "pregunta": "Per què un programa de 40 línies que saps explicar val més que un de 400 que no entens?"
    },
    {
      "tipus": "concepte",
      "titol": "El codi decidix sobre persones",
      "bullets": [
        "Dades mínimes i permisos clars",
        "Si s'equivoca, hi ha d'haver manera de reclamar",
        "Cal poder explicar la decisió a qui la patix",
        "Sempre hi ha una persona responsable del programa"
      ],
      "notes": "Exemples reals: beques, descomptes, avisos mèdics, accés a servicis. Breu i clar."
    },
    {
      "tipus": "activitat",
      "titol": "El teu mini projecte",
      "enunciat": "Tria una idea que t'agrade, que cape en unes setmanes i que tinga dades. Escriu el pla (parts i dades), l'esquelet amb el menú i una primera part funcionant. Porta-ho provat amb un cas normal i un cas límit.",
      "temps": "la resta de la sessió",
      "pistes": [
        "Pla, dades, esquelet, una part i una prova",
        "Almenys 4 mètodes i una classe pròpia",
        "Presentació de 3 minuts explicant el codi"
      ],
      "notes": "Acompanyar-los pel pla: la major part dels projectes que s'encallen ho fan perquè han triat una idea massa gran."
    },
    {
      "tipus": "pregunta",
      "titol": "L'última pregunta del curs",
      "pregunta": "Si dins d'un any hagueres d'ensenyar a algú una cosa que has aprés ací, quina seria? I què construiràs amb ella?"
    }
  ],
  "resum": [
    "Tota aplicació té interfície, lògica i dades.",
    "Una API és un mètode que parla per internet i respon en text.",
    "Els fonaments són els mateixos en totes les àrees i tots els llenguatges.",
    "Canviar de llenguatge o d'editor és fàcil; canviar de fonaments, no.",
    "Es continua aprenent amb projectes acabats, llegint codi, errors i documentació.",
    "Es tria què aprendre pel projecte, no per la moda.",
    "El codi decidix sobre persones: dades mínimes i responsabilitat.",
    "Saber explicar el teu codi és la competència més valorada.",
    "El millor final del curs és tindre alguna cosa acabada i teua."
  ],
  "seguent": "El teu projecte comença ara"
};
