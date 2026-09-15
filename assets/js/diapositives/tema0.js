/* ==========================================================================
   Diapositives del Tema 0 · Què és programar?
   GENERAT automàticament amb eines/genera-temes.mjs a partir de
   eines/contingut/tema0.js — no edites este fitxer a mà.
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   ========================================================================== */
window.DIAPOSITIVES_TEMA = {
  "numero": 0,
  "titol": "Què és programar?",
  "subtitol": "El primer contacte: instruccions, codi font i el nostre «Hola món!»",
  "objectiu": "Entendre què és programar, què és un programa i escriure el nostre primer programa en Java.",
  "index": [
    "Què és programar",
    "Què és un programa",
    "El codi font i el compilador",
    "El nostre «Hola món!»",
    "Com es modifica un programa",
    "Activitats"
  ],
  "blocs": [
    {
      "tipus": "concepte",
      "titol": "Programar és donar ordres ordenades",
      "bullets": [
        "Un ordinador no endevina: cal dir-li exactament què ha de fer",
        "Les instruccions es fan en orde, de dalt a baix",
        "Si canvies l'orde, canvia el resultat",
        "Abans de programar: pensar i dividir el problema en passos"
      ],
      "notes": "Posa l'exemple de la recepta de cuina o de l'alarma del mòbil."
    },
    {
      "tipus": "esquema",
      "titol": "Del que escrivim al que s'executa",
      "flux": [
        "Codi font",
        "Compilador",
        "Fitxer executable",
        "Màquina virtual"
      ],
      "nota": "Si el compilador s'atura, ens està avisant d'un error: llegim el missatge."
    },
    {
      "tipus": "codi",
      "titol": "El nostre primer programa",
      "codi": "public class HolaMon {\n    public static void main(String[] args) {\n        System.out.println(\"Hola món!\");\n    }\n}",
      "sortida": "Hola món!",
      "notes": "Escriure-ho davant de la classe, no copiar-ho. I després canviar el text."
    },
    {
      "tipus": "concepte",
      "titol": "Què fa cada part",
      "bullets": [
        "System.out.println → mostra una línia per pantalla",
        "El text va entre cometes dobles",
        "Cada instrucció acaba amb punt i coma (;)",
        "La resta és la carcassa que Java necessita per arrancar"
      ],
      "notes": "Avisa que la carcassa no cal entendre-la encara."
    },
    {
      "tipus": "prediccio",
      "titol": "Pensem abans d'executar",
      "codi": "System.out.println(\"Nivell 1\");\nSystem.out.println(\"Nivell 1 + 1\");",
      "pregunta": "Què apareixerà per pantalla?",
      "notes": "Deixar que contesten. La clau: dins de les cometes tot és text."
    },
    {
      "tipus": "activitat",
      "titol": "Ara et toca a tu",
      "enunciat": "Escriu un programa que mostre el teu nom, la teua edat i una frase que t'agrade. Cada cosa en una línia.",
      "temps": "15 min",
      "pistes": [
        "Un println per línia",
        "El text va entre cometes dobles"
      ],
      "notes": "Passar per les taules i vore els primers errors: cometes i punts i coma."
    },
    {
      "tipus": "concepte",
      "titol": "Errors que veuràs segur",
      "bullets": [
        "';' expected → falta un punt i coma",
        "unclosed string literal → falta tancar les cometes",
        "El fitxer ha de dir-se igual que la classe pública",
        "Java distingix majúscules i minúscules"
      ],
      "notes": "Provocar els errors en directe davant de la classe."
    },
    {
      "tipus": "pregunta",
      "titol": "Pensem un moment",
      "pregunta": "Si el programa fa exactament el que li diem, per què de vegades no fa el que volem?"
    }
  ],
  "resum": [
    "Programar és donar instruccions ordenades a l'ordinador.",
    "El codi font el traduïx el compilador; la màquina virtual l'executa.",
    "System.out.println(\"...\") mostra una línia de text.",
    "Cada instrucció acaba en «;» i els textos van entre cometes dobles.",
    "El fitxer ha de dir-se igual que la classe pública.",
    "Els missatges d'error ens diuen on mirar: llegir-los és part del treball."
  ],
  "seguent": "Tema 1 · Variables: guardar informació"
};
