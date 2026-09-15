/* ==========================================================================
   Diapositives del Tema 8 · Programació en l'era de la IA
   GENERAT automàticament amb eines/genera-temes.mjs a partir de
   eines/contingut/tema8.js — no edites este fitxer a mà.
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   ========================================================================== */
window.DIAPOSITIVES_TEMA = {
  "numero": 8,
  "titol": "Programació en l'era de la IA",
  "subtitol": "La IA escriu codi molt de pressa; el programador decidix, comprova i respon",
  "objectiu": "Treballar amb assistents d'IA com un programador: demanar bé, comprovar sempre, arreglar i entendre el codi per a poder respondre'n.",
  "index": [
    "La IA no comprova res",
    "Els errors típics del codi generat",
    "El prompt de quatre parts",
    "Lligir codi alié: la traça",
    "Les tres proves",
    "El pilot i el copilot",
    "Privacitat i honestedat",
    "El jutge: proves abans que codi"
  ],
  "blocs": [
    {
      "tipus": "concepte",
      "titol": "Un exemple per obrir els ulls",
      "bullets": [
        "«Fes un programa de notes en Java» → en 2 segons tenim codi",
        "Compila, s'executa… i dona 6.0 quan hauria de donar 6.33",
        "El perill no és que falle: és que pareix que funciona",
        "Hui aprenem a comprovar i a decidir"
      ],
      "notes": "Ensenyar la primera diapositiva de codi i preguntar: «veieu res estrany?». Deixar que fallen abans de dir-ho."
    },
    {
      "tipus": "comparacio",
      "titol": "Què fa i què no fa una IA de codi",
      "esquerra": {
        "titol": "✅ Sòlia encertar",
        "bullets": [
          "Estructures típiques (bucles, if)",
          "Explicar un missatge d'error",
          "Generar casos de prova",
          "Comentar i ordenar codi"
        ]
      },
      "dreta": {
        "titol": "⚠️ Hem de comprovar",
        "bullets": [
          "Tot el que depén de les teues dades",
          "Els tipus (int vs double)",
          "Els límits (buit, 0, null)",
          "Les regles del teu problema"
        ]
      }
    },
    {
      "tipus": "codi",
      "titol": "Al·lucinació: el mètode que no existix",
      "codi": "String text = \"hola\";\nSystem.out.println(text.reverse());",
      "sortida": "error: cannot find symbol — method reverse()",
      "notes": "En Java, String no té reverse(). Existix en altres llenguatges: eixa és la font de l'error. El missatge del compilador és la prova."
    },
    {
      "tipus": "concepte",
      "titol": "Els cinc errors típics",
      "bullets": [
        "Divisió de enters: (6+7+6)/3 = 6",
        "Mètodes i llibreries inventades",
        "No comprovar null ni el cas buit",
        "Bucle amb <= length (una volta de més)",
        "== per a comparar String"
      ],
      "notes": "No cal memoritzar-los: els buscarem sempre, un per un, en el codi que rebrem."
    },
    {
      "tipus": "comparacio",
      "titol": "Dos prompts, dos resultats",
      "esquerra": {
        "titol": "✗ Fluix",
        "bullets": [
          "«Fes-me un programa de notes»",
          "Sense dades ni restriccions",
          "Resposta genèrica",
          "No aprenem res"
        ]
      },
      "dreta": {
        "titol": "✅ Complet",
        "bullets": [
          "Context i dades",
          "Què ha de fer (regles)",
          "Què no pot fer",
          "Què vull que m'explique"
        ]
      }
    },
    {
      "tipus": "esquema",
      "titol": "Les quatre parts del prompt",
      "flux": [
        "Context i dades",
        "Què ha de fer",
        "Restriccions",
        "Què vull aprendre"
      ],
      "nota": "El prompt és el pla del Tema 7 traduït a una conversa."
    },
    {
      "tipus": "codi",
      "titol": "Lligir codi alié: la traça",
      "codi": "int doble(int n) {\n    return n * 2;\n}\n// traça amb n = 9  →  torna 18",
      "sortida": "18",
      "notes": "Sempre amb valors concrets i paper. «M'ho semble» no és una traça."
    },
    {
      "tipus": "esquema",
      "titol": "Les tres proves",
      "flux": [
        "Cas normal",
        "Cas límit (buit, 0, negatiu)",
        "Cas dolent (dada estranya)"
      ],
      "nota": "Si passa les tres, tenim un argument. Si no, tenim una impressió."
    },
    {
      "tipus": "prediccio",
      "titol": "Traça i endevina",
      "codi": "int[] v = {3, 1, 4};\nint comptador = 1;\nfor (int i = 0; i <= v.length; i++) {\n    comptador = comptador * 2;\n}\nSystem.out.println(comptador);",
      "pregunta": "Quantes voltes fa el bucle i què ix per pantalla? Què hauria d'eixir amb < en compte de <=?",
      "notes": "Solució: 4 voltes → 16. Amb < en serien 3 voltes → 8. El senyal és el «<= length»."
    },
    {
      "tipus": "esquema",
      "titol": "Pilot i copilot",
      "flux": [
        "Pensa el pla",
        "Escriu-ho tu",
        "Pregunta un fragment",
        "Prova-ho tu",
        "Arregla i entén",
        "Fes-ho teu"
      ],
      "nota": "Tu decideixes i respones. La IA proposa."
    },
    {
      "tipus": "codi",
      "titol": "Preguntar quan ja has provat",
      "codi": "// ✗ \"Arregla'm això.\"\n\n// ✓ \"Tinc este mètode amb double suma = 0.\n//    M'ha donat ArithmeticException: / by zero\n//    amb un array buit. Ja torne 0 en eixe cas.\n//    Explica'm per què passava i quines altres\n//    decisions podria prendre.\"",
      "notes": "El segon prompt t'obliga a formular el problema: eixe és l'aprenentatge."
    },
    {
      "tipus": "concepte",
      "titol": "Privacitat: la regla del semàfor",
      "bullets": [
        "🔴 No s'envien noms, DNI, telèfons, notes reals, contrasenyes",
        "🟢 Sí que s'envien dades inventades i codi propi",
        "Substituir no és amagar: és protegir terceres persones",
        "La responsabilitat legal és sempre teua"
      ],
      "notes": "Posar un exemple real de prompt amb «alumne1, alumne2» per a vore com funciona igual de bé."
    },
    {
      "tipus": "concepte",
      "titol": "Honestedat acadèmica",
      "bullets": [
        "Si uses IA, digues-ho: prompt, què et va donar, què vas canviar",
        "No entregues mai codi que no saps explicar",
        "La prova definitiva: «explica'm esta línia»",
        "Fer trampes amb IA és fàcil de detectar… i deixa de ser útil"
      ],
      "notes": "Explicar la fitxa de responsabilitat de l'exercici 4: prompt, canvis, proves, què no entenies."
    },
    {
      "tipus": "activitat",
      "titol": "Ara et toca a tu",
      "enunciat": "Escriu un prompt complet per a un mètode que diga si un nom d'usuari és vàlid (entre 3 i 10 caràcters i sense espais). Afig les tres proves que li faries abans de creure-te la resposta.",
      "temps": "10 min",
      "pistes": [
        "Les quatre parts del prompt",
        "Un cas normal, dos límits i un dolent",
        "Qui decidix si la resposta val?"
      ],
      "notes": "Corregir dos o tres prompts en veu alta: què els falta? Normalment la part de restriccions i la de proves."
    },
    {
      "tipus": "pregunta",
      "titol": "Pensem un moment",
      "pregunta": "Si li he dit a la IA tot el que ha de fer del programa, ¿què queda per a mi? I si no li ho he dit bé, qui paga les conseqüències?"
    },
    {
      "tipus": "codi",
      "titol": "El jutge, en tres línies",
      "codi": "comprovar(\"normal\", mitjana(new int[]{6, 7, 6}), 6.33);\ncomprovar(\"buit\",   mitjana(new int[]{}),      0.0);\ncomprovar(\"negatiu\", mitjana(new int[]{-4, 4}),   0.0);",
      "sortida": "✔ normal -> 6.333333333333333\n✗ buit -> esperàvem 0.0 i ha donat ArithmeticException",
      "notes": "El jutge no discuteix: dona números. Iixa és la diferència entre opinió i comprovació."
    },
    {
      "tipus": "pregunta",
      "titol": "L'última pregunta",
      "pregunta": "El codi de la IA que has arreglat tu, ara de qui és? Què has après arreglant-lo que no hauries après copiant-lo?"
    }
  ],
  "resum": [
    "La IA prediu codi: encerta molt i no comprova res del teu problema.",
    "Els errors típics: enters, límits, null, <= length, == amb String.",
    "Bon prompt = context i dades + què ha de fer + restriccions + què vull aprendre.",
    "El codi alié es llija amb traça i paper, no «per damunt».",
    "Tres proves sempre: normal, límit i dolenta.",
    "La IA proposa, les proves decidixen.",
    "Tu eres el pilot: tu decidixes el pla i arregles.",
    "No s'envien dades personals; si cal, s'inventen.",
    "Si uses IA, digues-ho i sàpigues explicar cada línia."
  ],
  "seguent": "Tema 9 · Cap a on va la programació"
};
