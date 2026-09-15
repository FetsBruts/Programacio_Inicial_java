/* ==========================================================================
   _PLANTILLA.js — Plantilla de diapositives d'un tema (PowerPoint)
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0

   ATENCIÓ: este fitxer és una PLANTILLA, no s'ha de carregar tal qual.
   Copia'l com  assets/js/diapositives/temaN.js  i descomenta el que faces
   servir. Després, a la pàgina del tema, afegix:

     <script src="../assets/js/diapositives/temaN.js"></script>

   ...JUST ABANS de  <script src="../assets/js/plantilla-tema.js"></script>.

   REGLA D'OR: la web és per ESTUDIAR; el PowerPoint és per EXPLICAR.
   Cada diapositiva ha de tindre poc text, lletra gran i una idea clara.
   Si una diapositiva necessita un paràgraf, no és una diapositiva.

   TIPUS DE DIAPOSITIVA DISPONIBLES
     concepte   → títol + vinyetes (les idees que s'expliquen)
     codi       → fragment de codi gran (+ eixida opcional)
     prediccio  → codi + «què apareixerà per pantalla?» (preguntar a classe)
     esquema    → flux de 3-8 caixes amb fletxes
     comparacio → dues columnes per comparar dos conceptes
     activitat  → enunciat d'activitat amb temps i pistes
     pregunta   → una pregunta gran per debatre

   QUALITAT: les diapositives fixes (portada, autoria, llicència, índex,
   objectiu, resum i tancament) les afig automàticament pptx.js.
   ========================================================================== */

/* Descomenta i adapta:
window.DIAPOSITIVES_TEMA = {
  numero: 1,
  titol: 'Variables: guardar informació',
  subtitol: 'Les caixes on el programa desa les dades',
  objectiu: 'Entendre què és una variable i saber guardar, canviar i mostrar informació en un programa senzill.',

  index: [
    'Què és una variable',
    'Els tipus bàsics',
    'Operadors aritmètics',
    'Entrada de dades amb Scanner',
    'Practiquem'
  ],

  blocs: [
    {
      tipus: 'concepte',
      titol: 'Una variable és una caixa amb nom',
      bullets: [
        'Té un nom: edat, punts, nota…',
        'Té un tipus: int, double, boolean, char, String',
        'Dins guarda un valor',
        'Eixe valor pot canviar mentre el programa funciona'
      ],
      notes: 'Fer el dibuix de la caixa a la pissarra i escriure-hi un valor a dins.'
    },
    {
      tipus: 'codi',
      titol: 'Com es guarda un valor',
      codi: 'int punts = 0;\npunts = punts + 10;\nSystem.out.println("Punts: " + punts);',
      sortida: 'Punts: 10',
      notes: 'Escriure-ho en directe a l\'editor i executar-ho.'
    },
    {
      tipus: 'prediccio',
      titol: 'Pensem abans d\'executar',
      codi: 'int a = 7;\nint b = 2;\nSystem.out.println(a / b);\nSystem.out.println(a % b);',
      pregunta: 'Què apareixerà per pantalla? Algú s\'atrevix?',
      notes: 'No executar fins que hagen votat. Després comprovar.'
    },
    {
      tipus: 'esquema',
      titol: 'El camí d\'una dada',
      flux: ['Declarar', 'Assignar', 'Calcular', 'Mostrar'],
      nota: 'Sempre el mateix orde: primer es declarar, després s\'usa.'
    },
    {
      tipus: 'comparacio',
      titol: 'int o double?',
      esquerra: { titol: 'int', bullets: ['Nombres enters', 'Edats, punts, vides', '16 · 0 · -3'] },
      dreta: { titol: 'double', bullets: ['Nombres amb decimals', 'Notes, preus, temperatures', '7.5 · 0.25'] }
    },
    {
      tipus: 'activitat',
      titol: 'Ara et toca a tu',
      enunciat: 'Crea dos variables amb el teu nom i la teua edat i mostra per pantalla: "Em dic Ana i tinc 16 anys".',
      temps: '10 min',
      pistes: ['Necessites un String i un int', 'El text va entre cometes'],
      notes: 'Passar per les taules i vore els errors típics de cometes i tipus.'
    },
    {
      tipus: 'pregunta',
      titol: 'Pensem un moment',
      pregunta: 'I si l\'usuari escriu una lletra quan li demanem l\'edat? Què passaria?'
    }
  ],

  resum: [
    'Una variable és una caixa amb nom on guardem un valor.',
    'Cada dada té un tipus: int, double, boolean, char o String.',
    'Assignar amb = vol dir «guarda això dins».',
    'Els operadors + - * / % ens deixen calcular.',
    'System.out.println() mostra el valor per pantalla.'
  ],

  seguent: 'Tema 2 · Prendre decisions'
};
*/
