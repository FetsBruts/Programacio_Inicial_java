/* ==========================================================================
   TEMA 7 · Construir un programa complet  —  contingut de la pàgina
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   · sortida = eixida real (es comprova amb  node eines/prova-codi-java.mjs 7 )
   · entrada = dades que s'envien per teclat als programes amb Scanner
   ========================================================================== */
globalThis.TEMA = {
  n: 7,
  titol: 'Construir un programa complet',
  subtitol: 'De la idea al programa que funciona: pensem, dividim, programem i provem',
  durada: '3 hores de classe',

  hero: {
    etiqueta: 'Tema 7 · Sessió de 3 hores',
    entradeta: 'Ja tenim totes les peces: variables, decisions, bucles, arrays, mètodes i objectes. El que falta és el més important: saber ajuntar-les per construir un programa de veritat, de principi a fi, i que funcione.',
    meta: [
      '⏱ 3 hores',
      '🏗 Fase 2 · Estructurar el programa',
      '🧩 Necessites: Temes 0 a 6',
      '❓ La pregunta clau: com se dividix este problema?'
    ]
  },

  introduccio: {
    titol: 'Una situació per començar',
    emoji: '🏆',
    blocs: [
      { p: 'Volem fer un **gestor de puntuacions d\'un torneig de videojocs**: volem guardar els jugadors amb els seus punts, vore qui va primer i poder afegir punts quan acaba una partida.' },
      { p: 'Un company s\'ha posat a escriure-ho tot de colp dins del `main` i li ha eixit això:' },
      { codi: {
        titol: 'Torneig.java',
        etiqueta: 'TOT DE COLP',
        noExecuta: true,
        text: `public class Torneig {
    public static void main(String[] args) {
        String jugador1 = "Ana";   int punts1 = 120;
        String jugador2 = "Bruno"; int punts2 = 95;
        String jugador3 = "Carla"; int punts3 = 180;

        System.out.println(jugador1 + " - " + punts1);
        System.out.println(jugador2 + " - " + punts2);
        System.out.println(jugador3 + " - " + punts3);

        int total = punts1 + punts2 + punts3;                        // i si foren 40 jugadors?
        int millor = Math.max(punts1, Math.max(punts2, punts3));     // i amb 40?
        System.out.println("Total: " + total);
        System.out.println("Millor: " + millor);

        // encara falten: afegir punts, buscar un jugador, ordenar...
    }
}`
      } },
      { p: 'El programa funciona… però no creix. Si un dia volem **40 jugadors**, caldria reescriure\'l tot. I quan falla alguna cosa, no sabem **per on començar a buscar**.' },
      { p: 'La setmana passada vam aprendre a fer peces (mètodes i objectes). Hui aprenem el que de veritat fa un programador: **dividir el problema, construir el programa per etapes i provar cada etapa**.' },
      { p: 'No hi ha codi nou que aprendre hui. El que hi ha és una manera de treballar: si l\'apliques, podràs fer programes tan grans com vullgues.' }
    ],
    plan: [
      ['30-40 min', 'Explicació i demos'],
      ['60-75 min', 'Programació guiada'],
      ['60-75 min', 'Exercicis'],
      ['15-30 min', 'Repàs i repte']
    ],
    prerequisits: [
      'Variables i operadors (Tema 1).',
      'Condicions i `switch` (Tema 2).',
      'Bucles `while` i `for` (Tema 3).',
      'Arrays i `String` (Tema 4).',
      'Mètodes amb paràmetres i `return` (Tema 5).',
      'Classes i objectes (Tema 6).'
    ]
  },

  objectius: {
    intro: 'En acabar esta sessió has de saber fer estes coses:',
    llista: [
      'Llegir un problema i **traure\'n la llista de parts** que necessita el programa.',
      'Decidir quines **dades** faràs servir (variables, arrays o objectes) abans d\'escriure codi.',
      'Escriure **l\'esquelet** del programa i fer-lo funcionar buit.',
      'Omplir **una part cada vegada** i provar-la abans de passar a la següent.',
      'Fer un programa amb **menú i bucle** que no s\'acabe fins que l\'usuari vullga.',
      'Detectar errors i **millorar** un programa que ja funcione.'
    ]
  },

  teoria: {
    titol: 'Teoria, poc a poc',
    entradeta: 'Hui no aprenem sintaxi nova: aprenem un mètode de treball. Una idea → un exemple.',
    blocs: [
      { h3: '1. El mètode de treball' },
      { p: 'Els programes grans no s\'escriuen de colp: **es construïxen per etapes**. Estes sis etapes són sempre les mateixes, tant per a un exercici de classe com per a un joc de veritat:' },
      { graella: [
        { emoji: '1️⃣', titol: 'Entendre', text: 'Què ha de fer exactament el programa? Preguntar-ho i apuntar-ho.' },
        { emoji: '2️⃣', titol: 'Dividir', text: 'Traure la llista de parts (afegir, mostrar, calcular, buscar…).' },
        { emoji: '3️⃣', titol: 'Dades', text: 'Amb què treballem: quina variable, quin array, quina classe.' },
        { emoji: '4️⃣', titol: 'Esquelet', text: 'Escriure les parts buides i el main. Ha de compilar.' },
        { emoji: '5️⃣', titol: 'Omplir i provar', text: 'Fer una part, executar-la, comprovar, i passar a la següent.' },
        { emoji: '6️⃣', titol: 'Millorar', text: 'Quan tot funciona: casos estranys, detalls i netejar el codi.' }
      ] },
      { nota: { tipus: 'tip', text: 'L\'etapa que més es descuida és la **4**. Escriure l\'esquelet primer et dona la sensació de tindre el programa «situat»: després només cal omplir forats, un a un.' } },

      { h3: '2. Del problema a la llista de parts' },
      { p: 'Fixem-nos en el problema del torneig i apuntem què ha de saber fer el programa. Cada cosa que sap fer serà un **mètode**.' },
      { codi: {
        titol: 'PlaDelTorneig.txt',
        etiqueta: 'PLA (SENSE CODI ENCARA)',
        noExecuta: true,
        text: `GESTOR DE PUNTUACIONS
------------------------------
1. Llegir els jugadors       →  llegirJugadors()
2. Mostrar la classificació  →  mostrarTots()
3. Sumar els punts de tots   →  totalPunts()
4. Dir qui va primer         →  millorJugador()
5. Afegir punts a un jugador →  afegirPunts(nom, punts)
6. Buscar un jugador         →  buscar(nom)
7. Menú per triar què fer    →  main()`
      } },
      { p: 'Esta llista és el **mapa del programa**. Quan et bloques escrivint codi, tornes a la llista: *quina part estic fent ara? què li entra i què ha de tornar?*' },
      { preguntaClasse: 'Quines parts d\'esta llista tornen un valor i quines no? Per què?' },

      { h3: '3. Decidir les dades (abans d\'escriure codi)' },
      { p: 'Un jugador té **nom i punts**: això és un objecte. I hi haurà molts jugadors: això és un **array**. Una frase ho resumix tot:' },
      { codi: {
        titol: 'Decisio.java',
        etiqueta: 'LA DECISIÓ',
        text: `Jugador[] jugadors = new Jugador[4];   // molts elements, cadascun amb dades distintes
int total = 0;                          // un sol número que va sumant
String nomBuscat = "Ana";               // un text per buscar`,
        sortida: 'Decisió presa: array d\'objectes, un acumulador i un text.'
      } },
      { p: 'Si t\'equivoques de dades t\'equivoques de programa: si guardes els punts en 40 variables, els bucles i els mètodes no es podran escriure. **Primer les dades, després el codi.**' },

      { h3: '4. L\'esquelet: escriure el programa buit' },
      { p: 'S\'escriuen les capçaleres dels mètodes amb el seu tipus de retorn i, dins, una resposta provisional. El programa **ha de compilar i executar-se** encara que no faça res de profit.' },
      { codi: {
        titol: 'Torneig.java',
        etiqueta: 'ESQUELET',
        text: `public class Torneig {

    public static void mostrarTots(Jugador[] jugadors) {
        System.out.println("(encara no ho he escrit)");
    }

    public static int totalPunts(Jugador[] jugadors) {
        return 0;      // provisional: ja el canviarem
    }

    public static void main(String[] args) {
        System.out.println("El programa arranca bé: estructura preparada.");
    }
}`,
        sortida: 'El programa arranca bé: estructura preparada.'
      } },
      { nota: { tipus: 'info', text: 'Un `return 0;` provisional no és trampa: és una manera de dir «ací encara no hi ha res». El programa compila, s\'executa i podem seguir construint sense que res s\'esbuse.' } },

      { h3: '5. Una part, una prova' },
      { p: 'Ara s\'ompli **una sola part** i s\'executa. Com que sabem quin resultat esperem, comprovar és immediat.' },
      { codi: {
        titol: 'Torneig.java',
        etiqueta: 'PRIMERA PART ACABADA',
        text: `public class Torneig {

    public static int totalPunts(int[] punts) {
        int total = 0;
        for (int i = 0; i < punts.length; i++) {
            total = total + punts[i];
        }
        return total;
    }

    public static void main(String[] args) {
        int[] proves = {120, 95, 180};          // dades xicotetes per provar
        System.out.println(totalPunts(proves)); // ha de dir 395
    }
}`,
        sortida: '395'
      } },
      { p: 'Demanar a un mètode que treballe **sempre amb dades del mètode `main`** fa que siga fàcil de provar: canvies el `main` i proven mil coses sense tocar el mètode.' },
      { nota: { tipus: 'tip', text: 'Provar amb dades menudes que **ja saps sumar de cap** (120 + 95 + 180 = 395) és la manera més ràpida de saber si la part està bé.' } },

      { h3: '6. El menú: el programa no s\'acaba' },
      { p: 'Un programa de veritat no es tanca després de fer una cosa: mostra un menú i espera. Això ja el sabem fer amb un `while` i un `switch`.' },
      { codi: {
        titol: 'Menu.java',
        etiqueta: 'BUCLE PRINCIPAL',
        entrada: '2\n3\n0\n',
        text: `import java.util.Scanner;

public class Menu {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        boolean eixir = false;

        while (!eixir) {
            System.out.println("1. Mostrar   2. Sumar   3. Buscar   0. Eixir");
            int opcio = teclat.nextInt();

            switch (opcio) {
                case 1:
                    System.out.println("Mostre la classificació");
                    break;
                case 2:
                    System.out.println("Total: 395");
                    break;
                case 3:
                    System.out.println("Buscant...");
                    break;
                case 0:
                    eixir = true;
                    System.out.println("Fins aviat!");
                    break;
                default:
                    System.out.println("Opció incorrecta");
            }
        }
    }
}`,
        sortida: `1. Mostrar   2. Sumar   3. Buscar   0. Eixir
Mostre la classificació
1. Mostrar   2. Sumar   3. Buscar   0. Eixir
Total: 395
1. Mostrar   2. Sumar   3. Buscar   0. Eixir
Buscant...
1. Mostrar   2. Sumar   3. Buscar   0. Eixir
Fins aviat!`
      } },
      { nota: { tipus: 'important', text: 'El **`main` ha de ser curt i llegir-se com un resum**: demanar dades, cridar el mètode que toque. Si el `main` té més de 30 línies, segurament hi ha parts que haurien de ser mètodes.' } },

      { h3: '7. Quan alguna cosa falla: busca la part' },
      { p: 'Amb el programa dividit, trobar un error és molt més fàcil. Estes quatre preguntes resolen quasi tots els problemes:' },
      { llista: [
        '**Quina part és la culpable?** (llegir, calcular o mostrar).',
        '**Li arriben bé les dades?** Comprova-ho amb un `println` provisional.',
        '**Què torna?** També es pot imprimir el valor de retorn.',
        '**Amb quines dades falla?** Prova amb un cas xicotet, no amb les 40 dades reals.'
      ] },
      { nota: { tipus: 'avis', text: 'No canvies cinc coses alhora quan no funciona. Canvia\'n una, prova, i si no s\'arregla, torna arrere. Si canvies tot, no saps què ho ha arreglat (ni què ho ha trencat).' } },

      { h3: '8. Quan tot funciona: millorar' },
      { p: 'Un programa que funciona no està acabat. Estos quatre retocs li donen la qualitat que es nota:' },
      { llista: [
        '**Casos estranys:** llista buida, jugador que no existix, empat, valor 0.',
        '**Missatges clars:** «No hi ha cap jugador amb eixe nom» és millor que «Error».',
        '**Noms i ordre:** els mètodes al fitxer, sempre el mateix orde, i el `main` a dalt.',
        '**Traure el que sobra:** codi repetit, variables que no serveixen, comentaris inútils.'
      ] },
      { preguntaClasse: 'Quin cas estrany provaries tu en un gestor de notes? I en un carret de la compra?' }
    ]
  },

  exemples: {
    titol: 'Exemples explicats pas a pas',
    entradeta: 'Tres programes complets, del més xicotet al més complet. Fixa\'t sempre en el mateix: quin és el pla i quines dades es fan servir.',
    blocs: [
      { h3: 'Exemple 1 · Gestor de notes, de zero a programa' },
      { p: '**El pla:** llegir les notes, mostrar-les, calcular la mitjana, comptar els aprovats i dir la nota més alta. Cinc parts i quatre mètodes.' },
      { codi: {
        titol: 'NotesClasse.java',
        etiqueta: 'EXEMPLE COMPLET',
        text: `public class NotesClasse {

    public static void mostrarNotes(double[] notes) {
        for (int i = 0; i < notes.length; i++) {
            System.out.println("Nota " + (i + 1) + ": " + notes[i]);
        }
    }

    public static double mitjana(double[] notes) {
        double suma = 0;
        for (int i = 0; i < notes.length; i++) {
            suma = suma + notes[i];
        }
        return suma / notes.length;
    }

    public static int aprovats(double[] notes) {
        int comptador = 0;
        for (int i = 0; i < notes.length; i++) {
            if (notes[i] >= 5) {
                comptador++;
            }
        }
        return comptador;
    }

    public static double maxima(double[] notes) {
        double mesAlta = notes[0];
        for (int i = 1; i < notes.length; i++) {
            if (notes[i] > mesAlta) {
                mesAlta = notes[i];
            }
        }
        return mesAlta;
    }

    public static void main(String[] args) {
        double[] notes = {6.5, 4.0, 8.25, 7.0, 3.5};

        mostrarNotes(notes);
        System.out.println("Mitjana: " + mitjana(notes));
        System.out.println("Aprovats: " + aprovats(notes));
        System.out.println("La més alta: " + maxima(notes));
    }
}`,
        sortida: `Nota 1: 6.5
Nota 2: 4.0
Nota 3: 8.25
Nota 4: 7.0
Nota 5: 3.5
Mitjana: 5.85
Aprovats: 3
La més alta: 8.25`
      } },
      { nota: { tipus: 'tip', text: 'Fixa\'t que el `main` **es llig com un resum del programa**: mostrar, mitjana, aprovats, màxima. Si algú llig el `main` i entén què fa el programa, les parts estan ben triades.' } },

      { h3: 'Exemple 2 · El mateix pla, ara amb objectes' },
      { p: 'Si a més de la nota volem el nom, cada nota passa a ser un objecte. El pla del programa **no canvia**: només canvia la dada.' },
      { codi: {
        titol: 'NotesAmbNom.java',
        etiqueta: 'OBJECTES + MÈTODES',
        text: `class Alumne {
    String nom;
    double nota;

    public boolean estaAprovat() {
        return nota >= 5;
    }

    public String text() {
        return nom + " (" + nota + ")" + (estaAprovat() ? " APROVAT" : " suspès");
    }
}

public class NotesAmbNom {
    public static void main(String[] args) {
        Alumne[] classe = new Alumne[3];

        classe[0] = new Alumne();
        classe[0].nom = "Ana";
        classe[0].nota = 7.5;

        classe[1] = new Alumne();
        classe[1].nom = "Bruno";
        classe[1].nota = 4.25;

        classe[2] = new Alumne();
        classe[2].nom = "Carla";
        classe[2].nota = 9.0;

        for (int i = 0; i < classe.length; i++) {
            System.out.println(classe[i].text());
        }
    }
}`,
        sortida: `Ana (7.5) APROVAT
Bruno (4.25) suspès
Carla (9.0) APROVAT`
      } },
      { nota: { tipus: 'info', text: 'L\'operador `? :` de la línia del `return` es llig «si es complix això, posa això; si no, posa allò altre». És un `if` que torna un valor. **De moment no cal dominar-lo**: si et resulta més clar, escriu el `if` amb `return` dins de cada branca.' } },

      { h3: 'Exemple 3 · Un inventari que creix' },
      { p: '**El pla:** mostrar els productes, sumar el valor de l\'inventari, dir el més car i buscar un producte pel nom. El «no el trobe» és tan important com el «el trobe».' },
      { codi: {
        titol: 'Inventari.java',
        etiqueta: 'EXEMPLE COMPLET',
        text: `class Producte {
    String nom;
    double preu;
    int unitats;
}

public class Inventari {

    public static void mostrar(Producte[] productes) {
        for (int i = 0; i < productes.length; i++) {
            System.out.println(productes[i].nom + " x" + productes[i].unitats
                    + " = " + (productes[i].preu * productes[i].unitats) + " €");
        }
    }

    public static double valorTotal(Producte[] productes) {
        double total = 0;
        for (int i = 0; i < productes.length; i++) {
            total = total + productes[i].preu * productes[i].unitats;
        }
        return total;
    }

    public static void buscar(Producte[] productes, String nom) {
        boolean trobat = false;
        for (int i = 0; i < productes.length; i++) {
            if (productes[i].nom.equals(nom)) {
                System.out.println("Trobat: " + productes[i].nom + " a " + productes[i].preu + " €");
                trobat = true;
            }
        }
        if (!trobat) {
            System.out.println("No hi ha cap producte que es diga " + nom);
        }
    }

    public static void main(String[] args) {
        Producte[] estoc = new Producte[3];

        estoc[0] = new Producte();
        estoc[0].nom = "Ratolí";
        estoc[0].preu = 12.5;
        estoc[0].unitats = 8;

        estoc[1] = new Producte();
        estoc[1].nom = "Teclat";
        estoc[1].preu = 24.0;
        estoc[1].unitats = 5;

        estoc[2] = new Producte();
        estoc[2].nom = "Monitor";
        estoc[2].preu = 119.9;
        estoc[2].unitats = 2;

        mostrar(estoc);
        System.out.println("Valor de l'estoc: " + valorTotal(estoc) + " €");
        buscar(estoc, "Teclat");
        buscar(estoc, "Impressora");
    }
}`,
        sortida: `Ratolí x8 = 100.0 €
Teclat x5 = 120.0 €
Monitor x2 = 239.8 €
Valor de l'estoc: 459.8 €
Trobat: Teclat a 24.0 €
No hi ha cap producte que es diga Impressora`
      } },
      { nota: { tipus: 'tip', text: 'La variable `trobat` és la manera clàssica de resoldre «buscar»: comença en `false`, es posa en `true` si el troba, i al final decidix què dir. Sense ella no sabríem si no hi ha cap coincidència.' } },

      { prediccio: {
        id: 'pred-exemple7',
        titol: 'Quina serà l\'eixida?',
        fitxer: 'Prediccio.java',
        text: `public class Prediccio {
    public static int dobla(int x) {
        return x * 2;
    }

    public static void main(String[] args) {
        int a = 5;
        a = dobla(a);
        System.out.println(a);
        System.out.println(dobla(a));
    }
}`,
        sortida: `10
20`,
        perque: 'El mètode **no canvia** la variable `a` per si mateix: torna un valor que es guarda (primera línia) o es mostra directament (segona). Entendre això és mitat de la feina amb mètodes.'
      } }
    ]
  },

  guiada: {
    titol: 'Programació guiada: el gestor del torneig',
    entradeta: 'Construïm entre tots el programa del principi de la sessió, però **ben fet**: per etapes, provant cada etapa. No escrigues res definitiu fins que hàgem decidit el pla.',
    passos: [
      {
        titol: 'Pas 1 · Què ha de fer el programa?',
        blocs: [
          { p: 'Abans de tocar el teclat, escrivim el pla entre tots. La llista de parts **és** el programa.' },
          { codi: {
            titol: 'PlaDelTorneig.txt',
            etiqueta: 'EL PLA',
            noExecuta: true,
            text: `1. Guardar 4 jugadors amb nom i punts
2. Mostrar la classificació
3. Sumar tots els punts
4. Dir qui va primer
5. Afegir punts a un jugador (pel nom)
6. Menú per triar què fer, amb opció d'eixir`
          } },
          { preguntaClasse: 'Quantes parts tornen un valor i quantes només mostren coses? Com ho sabem?' },
          { nota: { tipus: 'tip', text: 'Si una part mostra per pantalla, serà `void`. Si calcula alguna cosa que després farem servir, tornarà un valor. La paraula «després» és la pista.' } }
        ]
      },
      {
        titol: 'Pas 2 · Les dades',
        blocs: [
          { p: 'Un jugador: nom i punts. Molts jugadors: un array. Decidit abans d\'escriure res més.' },
          { codi: {
            titol: 'Jugador.java',
            etiqueta: 'LA CLASSE',
            text: `public class Jugador {
    String nom;
    int punts;

    public String text() {
        return nom + ": " + punts + " punts";
    }
}`
          } },
          { p: 'I al programa principal: `Jugador[] jugadors = new Jugador[4];`. Pregunta a classe: **per què `new Jugador[4]` no crea encara cap jugador?**' }
        ]
      },
      {
        titol: 'Pas 3 · L\'esquelet que compila',
        blocs: [
          { p: 'Escrivim el `main` i les capçaleres de tots els mètodes amb un retorn provisional. Executem: **ha de funcionar i no fer res de profit**. Això vol dir que l\'estructura està bé.' },
          { codi: {
            titol: 'Torneig.java',
            etiqueta: 'PAS 3 · ESQUELET',
            text: `public class Torneig {

    public static void mostrarTots(Jugador[] jugadors) {
        System.out.println("(pendent)");
    }

    public static int totalPunts(Jugador[] jugadors) {
        return 0;
    }

    public static int buscar(Jugador[] jugadors, String nom) {
        return -1;          // -1 vol dir "no el trobe"
    }

    public static void main(String[] args) {
        System.out.println("Esquelet preparat.");
    }
}`,
            sortida: 'Esquelet preparat.'
          } },
          { nota: { tipus: 'info', text: '`buscar` torna un **número de casella** i no el jugador: així qui crida al mètode pot decidir què fer (mostrar-lo, afegir-li punts…). Tornar `-1` quan no es troba res és un costum molt estés en programació.' } }
        ]
      },
      {
        titol: 'Pas 4 · Omplim mostrarTots i provem',
        blocs: [
          { p: 'Primera part de veritat. Al `main` li posem dades de prova i comprovem que l\'eixida és la que esperem.' },
          { codi: {
            titol: 'Torneig.java',
            etiqueta: 'PAS 4 · PRIMERA PART',
            text: `public class Torneig {

    public static void mostrarTots(Jugador[] jugadors) {
        for (int i = 0; i < jugadors.length; i++) {
            if (jugadors[i] != null) {
                System.out.println("  " + jugadors[i].text());
            }
        }
    }

    public static Jugador crea(String nom, int punts) {
        Jugador j = new Jugador();
        j.nom = nom;
        j.punts = punts;
        return j;
    }

    public static void main(String[] args) {
        Jugador[] jugadors = new Jugador[4];
        jugadors[0] = crea("Ana", 120);
        jugadors[1] = crea("Bruno", 95);

        mostrarTots(jugadors);
    }
}`,
            sortida: `  Ana: 120 punts
  Bruno: 95 punts`
          } },
          { preguntaClasse: 'Què passa si no comprovem `jugadors[i] != null` i encara no hem omplit les altres caselles?' }
        ]
      },
      {
        titol: 'Pas 5 · Sumar i dir qui va primer',
        blocs: [
          { p: 'Dos mètodes que calculen. Cap dels dos escriu per pantalla: tornen el resultat i el `main` decidix què fer amb ell.' },
          { codi: {
            titol: 'Torneig.java',
            etiqueta: 'PAS 5 · CÀLCULS',
            text: `    public static int totalPunts(Jugador[] jugadors) {
        int total = 0;
        for (int i = 0; i < jugadors.length; i++) {
            if (jugadors[i] != null) {
                total = total + jugadors[i].punts;
            }
        }
        return total;
    }

    public static String millorJugador(Jugador[] jugadors) {
        Jugador millor = null;
        for (int i = 0; i < jugadors.length; i++) {
            if (jugadors[i] != null && (millor == null || jugadors[i].punts > millor.punts)) {
                millor = jugadors[i];
            }
        }
        if (millor == null) {
            return "No hi ha jugadors";
        }
        return millor.nom + " amb " + millor.punts + " punts";
    }`,
            sortida: 'Amb Ana (120) i Bruno (95): total 215 i millor "Ana amb 120 punts".'
          } },
          { nota: { tipus: 'tip', text: 'Fixem-nos en la condició del `if`: primer comprovem que la casella no és buida i **després** mirem els punts. L\'orde no és casualitat: si la casella és `null` i mirem els punts abans, el programa s\'atura.' } }
        ]
      },
      {
        titol: 'Pas 6 · Afegir punts i buscar pel nom',
        blocs: [
          { p: 'Ara les parts que **modifiquen** dades. Buscar i afegir punts demana un mètode que trobe la casella i un altre (o el mateix) que la fa servir.' },
          { codi: {
            titol: 'Torneig.java',
            etiqueta: 'PAS 6 · BUSCAR I AFEGIR',
            text: `    public static int buscar(Jugador[] jugadors, String nom) {
        for (int i = 0; i < jugadors.length; i++) {
            if (jugadors[i] != null && jugadors[i].nom.equals(nom)) {
                return i;              // casella on està
            }
        }
        return -1;                     // no el trobe
    }

    public static void afegirPunts(Jugador[] jugadors, String nom, int punts) {
        int posicio = buscar(jugadors, nom);
        if (posicio == -1) {
            System.out.println("No hi ha cap jugador que es diga " + nom);
        } else {
            jugadors[posicio].punts = jugadors[posicio].punts + punts;
            System.out.println(nom + " ara té " + jugadors[posicio].punts + " punts");
        }
    }`,
            sortida: `Ana ara té 145 punts
No hi ha cap jugador que es diga Zeus`
          } },
          { p: '`afegirPunts` **reutilitza** `buscar`. No hem tornat a escriure el bucle: les peces del programa es recolzen unes en altres.' }
        ]
      },
      {
        titol: 'Pas 7 · El menú i la prova final',
        blocs: [
          { p: 'Ajuntem tot dins d\'un bucle que no acaba fins que l\'usuari vol. I provem els casos estranys abans de donar-lo per acabat.' },
          { codi: {
            titol: 'Torneig.java',
            etiqueta: 'PAS 7 · MENÚ',
            text: `    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        Jugador[] jugadors = new Jugador[4];
        jugadors[0] = crea("Ana", 120);
        jugadors[1] = crea("Bruno", 95);
        jugadors[2] = crea("Carla", 180);

        boolean eixir = false;
        while (!eixir) {
            System.out.println("1. Classificació  2. Total  3. Millor  4. Afegir punts  0. Eixir");
            int opcio = teclat.nextInt();

            if (opcio == 1) {
                mostrarTots(jugadors);
            } else if (opcio == 2) {
                System.out.println("Total: " + totalPunts(jugadors));
            } else if (opcio == 3) {
                System.out.println("Va primer: " + millorJugador(jugadors));
            } else if (opcio == 4) {
                System.out.println("Nom del jugador:");
                String nom = teclat.next();
                System.out.println("Punts a afegir:");
                afegirPunts(jugadors, nom, teclat.nextInt());
            } else if (opcio == 0) {
                eixir = true;
                System.out.println("Fins aviat!");
            } else {
                System.out.println("Opció incorrecta");
            }
        }
    }`,
            sortida: 'El programa funciona i no s\'acaba fins que triem l\'opció 0.'
          } },
          { llista: [
            '**Prova 1:** afegir punts a un jugador que existix (Ana).',
            '**Prova 2:** afegir punts a un jugador que no existix (Zeus).',
            '**Prova 3:** vore la classificació quan encara no s\'ha omplit tot l\'array.',
            '**Prova 4:** triar una opció que no existix (per exemple 9).',
            '**Prova 5:** eixir amb l\'opció 0.'
          ] },
          { nota: { tipus: 'exit', text: 'Hem construït **un programa de debò** amb tot el que sabíem: variables, condicions, bucles, arrays, mètodes i objectes. I l\'hem fet sense cap concepte nou. **Este és el tema 7.**' } }
        ]
      }
    ]
  },

  mini: {
    intro: 'Activitats molt curtes per agafar el costum de pensar en parts. Dos o tres minuts cada una.',
    exercicis: [
      {
        id: 'mini7-1', titol: 'La llista de parts', dificultat: 'facil', temps: '3 min',
        enunciat: '**Sense escriure codi:** apunta les parts que necessitaria un programa que demana la temperatura de cada dia d\'una setmana i després diu la mitjana i el dia més calorós. Escriu-les com a noms de mètode.',
        solucio: {
          titol: 'Pla.txt',
          noExecuta: true,
          text: `llegirTemperatures()    → torna double[] o void
mostrarTemperatures()  → void
mitjana()              → double
diaMesCalorós()        → String (o int, el número de dia)
main()                 → el menú o l'orde de les crides`,
          perque: 'Qualsevol llista raonable val: el que importa és **separar llegir de calcular i de mostrar**. Eixes tres coses sempre són mètodes distints.'
        },
        pista: 'Pregunta\'t: quines dades necessite guardar i quantes coses distintes ha de fer el programa?'
      },
      {
        id: 'mini7-2', titol: 'Quines dades?', dificultat: 'facil', temps: '2 min',
        enunciat: 'Per a un programa que guarda els resultats d\'una lliga de videojocs (equip local, equip visitant, gols local, gols visitant), digues quines dades faries servir i de quin tipus.',
        solucio: {
          titol: 'Partit.java',
          text: `class Partit {
    String local;
    String visitant;
    int golsLocal;
    int golsVisitant;
}

Partit[] jornada = new Partit[6];   // tots els partits de la jornada`,
          perque: 'Totes les dades d\'un partit van juntes: per això una **classe**. I com que hi ha molts partits, un **array** d\'eixa classe.'
        },
        pista: 'Quantes dades té un partit? Aleshores, quina estructura les ajunta?'
      },
      {
        id: 'mini7-3', titol: 'Completa l\'esquelet', dificultat: 'mitjana', temps: '4 min',
        enunciat: 'Escriu l\'esquelet (capçaleres i `main`) d\'un programa que guarda les notes de 5 alumnes i mostra la nota més alta. Ha de **compilar i executar-se** encara que els mètodes no facen res.',
        solucio: {
          titol: 'Esquelet.java',
          text: `public class Esquelet {

    public static double mesAlta(double[] notes) {
        return 0;      // pendent
    }

    public static void mostrar(double[] notes) {
        System.out.println("(pendent)");
    }

    public static void main(String[] args) {
        double[] notes = {6.5, 4.0, 8.25, 7.0, 3.5};
        mostrar(notes);
        System.out.println("La més alta: " + mesAlta(notes));
    }
}`,
          sortida: `(pendent)
La més alta: 0.0`,
          perque: 'L\'esquelet compila i s\'executa: això vol dir que l\'estructura està bé. Ara ja només queda omplir una part cada vegada.'
        },
        pista: 'Els mètodes poden tornar un valor provisional (`return 0;`) perquè el programa arranque.'
      },
      {
        id: 'mini7-4', titol: 'Troba l\'error', dificultat: 'mitjana', temps: '3 min',
        enunciat: 'Este mètode hauria de tornar la suma dels elements. Què fa mal?',
        codi: {
          titol: 'Suma.java',
          text: `public static int suma(int[] valors) {
    int total = 0;
    for (int i = 0; i <= valors.length; i++) {
        total = total + valors[i];
    }
    return total;
}`
        },
        solucio: {
          titol: 'SumaBe.java',
          text: `public static int suma(int[] valors) {
    int total = 0;
    for (int i = 0; i < valors.length; i++) {   // < en compte de <=
        total = total + valors[i];
    }
    return total;
}`,
          perque: 'Amb `<=` l\'última volta busca la casella `valors.length`, que no existix: **ArrayIndexOutOfBoundsException**. Error clàssic del Tema 4 que seguix apareixent.'
        },
        pista: 'Compta les voltes del bucle amb un array de 3 caselles.'
      },
      {
        id: 'mini7-5', titol: 'Predix l\'eixida', dificultat: 'mitjana', temps: '3 min',
        enunciat: 'Què mostrarà este programa per pantalla? Pensa-ho abans d\'executar-lo.',
        codi: {
          titol: 'Prediccio.java',
          text: `public class Prediccio {
    public static void canvia(int x) {
        x = x + 100;
    }

    public static void main(String[] args) {
        int a = 5;
        canvia(a);
        System.out.println(a);
    }
}`
        },
        solucio: {
          titol: 'Prediccio.java',
          text: `System.out.println(a);   // mostra 5`,
          sortida: '5',
          perque: 'Dins del mètode, `x` és **una còpia** del valor: canviar-la no canvia `a`. Si volem que el canvi isca fora, el mètode ha de **tornar** el valor: `a = canvia(a);`.'
        },
        pista: 'Què li arriba al mètode: la variable o una còpia del seu valor?'
      },
      {
        id: 'mini7-6', titol: 'Menú mínim', dificultat: 'mitjana', temps: '5 min',
        enunciat: 'Escriu només el bucle del menú d\'un programa amb dos opcions: 1 mostrar un missatge i 2 eixir. Ha de repetir-se fins que es trie eixir.',
        solucio: {
          titol: 'Menu.java',
          text: `import java.util.Scanner;

public class Menu {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        boolean eixir = false;

        while (!eixir) {
            System.out.println("1. Missatge   2. Eixir");
            int opcio = teclat.nextInt();

            if (opcio == 1) {
                System.out.println("Hola!");
            } else if (opcio == 2) {
                eixir = true;
            } else {
                System.out.println("Opció incorrecta");
            }
        }
        System.out.println("Fi del programa");
    }
}`,
          entrada: '1\n2\n',
          sortida: `1. Missatge   2. Eixir
Hola!
1. Missatge   2. Eixir
Fi del programa`,
          perque: 'La condició del bucle és `!eixir`: mentres no hàgem triat eixir, tornem a mostrar el menú. La variable s\'ha de crear **abans** del bucle i canviar-se **dins**.'
        },
        pista: 'Necessites una variable `boolean` que canvie dins del bucle.'
      }
    ]
  },

  principals: {
    intro: 'Quatre programes complets, de menys a més dificultat. En tots el mateix orde: **pla, dades, esquelet, parts i proves**. Escriu-los tu abans de mirar la solució.',
    exercicis: [
      {
        id: 'ex7-1', titol: 'Gestor de notes de la classe', dificultat: 'facil', temps: '20 min',
        enunciat: 'Fes un programa que guarde 6 notes en un array i mostre: totes les notes, la mitjana arredonida a dos decimals (pots usar `Math.round(mitjana * 100) / 100.0`), la nota més alta, la més baixa i quants han aprovat.\n\n**Pla:** ha de tindre com a mínim quatre mètodes, un per càlcul, i el `main` ha de ser un resum.',
        exemple: {
          entrada: `Notes: {6.5, 4.0, 8.25, 7.0, 3.5, 5.0}`,
          sortida: `Mitjana: 5.71
Més alta: 8.25
Més baixa: 3.5
Aprovats: 4`
        },
        solucio: {
          titol: 'GestorNotes.java',
          text: `public class GestorNotes {

    public static void mostrar(double[] notes) {
        for (int i = 0; i < notes.length; i++) {
            System.out.println("Alumne " + (i + 1) + ": " + notes[i]);
        }
    }

    public static double mitjana(double[] notes) {
        double suma = 0;
        for (int i = 0; i < notes.length; i++) {
            suma = suma + notes[i];
        }
        return suma / notes.length;
    }

    public static double maxima(double[] notes) {
        double mesAlta = notes[0];
        for (int i = 1; i < notes.length; i++) {
            if (notes[i] > mesAlta) {
                mesAlta = notes[i];
            }
        }
        return mesAlta;
    }

    public static double minima(double[] notes) {
        double mesBaixa = notes[0];
        for (int i = 1; i < notes.length; i++) {
            if (notes[i] < mesBaixa) {
                mesBaixa = notes[i];
            }
        }
        return mesBaixa;
    }

    public static int aprovats(double[] notes) {
        int comptador = 0;
        for (int i = 0; i < notes.length; i++) {
            if (notes[i] >= 5) {
                comptador++;
            }
        }
        return comptador;
    }

    public static void main(String[] args) {
        double[] notes = {6.5, 4.0, 8.25, 7.0, 3.5, 5.0};

        mostrar(notes);
        System.out.println("Mitjana: " + Math.round(mitjana(notes) * 100) / 100.0);
        System.out.println("Més alta: " + maxima(notes));
        System.out.println("Més baixa: " + minima(notes));
        System.out.println("Aprovats: " + aprovats(notes));
    }
}`,
          sortida: `Alumne 1: 6.5
Alumne 2: 4.0
Alumne 3: 8.25
Alumne 4: 7.0
Alumne 5: 3.5
Alumne 6: 5.0
Mitjana: 5.71
Més alta: 8.25
Més baixa: 3.5
Aprovats: 4`,
          perque: 'Quatre mètodes que **reben el mateix array** i cadascun fa una cosa. Fixa\'t que cap d\'ells no escriu per pantalla: tornen el número i el `main` decidix com mostrar-lo. Això els fa reutilitzables.'
        },
        pista: 'Comença per la mitjana amb un acumulador i una prova xicoteta (2, 4, 6 → mitjana 4).'
      },
      {
        id: 'ex7-2', titol: 'La botiga de mòbils', dificultat: 'mitjana', temps: '30 min',
        enunciat: 'Crea la classe `Mobil` amb `model` (String), `preu` (double) i `unitats` (int). Després fes un programa amb un array de 4 mòbils que mostre el valor de l\'estoc, diga quin és el mòbil més car i permeta buscar per model (dient clarament si no el troba).',
        exemple: {
          entrada: `Models: Pixel 8 (499 €, 3), Galaxy A55 (349 €, 5), iPhone 15 (909 €, 2), Nothing Phone (429 €, 4)`,
          sortida: `Valor de l'estoc: 6089.0 €
El més car: iPhone 15 (909.0 €)
Trobat: Galaxy A55 a 349.0 €
No hi ha cap mòbil que es diga Nokia`
        },
        solucio: {
          titol: 'Botiga.java',
          text: `class Mobil {
    String model;
    double preu;
    int unitats;
}

public class Botiga {

    public static void mostrar(Mobil[] estoc) {
        for (int i = 0; i < estoc.length; i++) {
            System.out.println(estoc[i].model + " · " + estoc[i].preu + " € · "
                    + estoc[i].unitats + " unitats");
        }
    }

    public static double valorEstoc(Mobil[] estoc) {
        double total = 0;
        for (int i = 0; i < estoc.length; i++) {
            total = total + estoc[i].preu * estoc[i].unitats;
        }
        return total;
    }

    public static String mesCar(Mobil[] estoc) {
        Mobil millor = estoc[0];
        for (int i = 1; i < estoc.length; i++) {
            if (estoc[i].preu > millor.preu) {
                millor = estoc[i];
            }
        }
        return millor.model + " (" + millor.preu + " €)";
    }

    public static void buscar(Mobil[] estoc, String model) {
        for (int i = 0; i < estoc.length; i++) {
            if (estoc[i].model.equals(model)) {
                System.out.println("Trobat: " + estoc[i].model + " a " + estoc[i].preu + " €");
                return;                 // ja el tenim: podem eixir del mètode
            }
        }
        System.out.println("No hi ha cap mòbil que es diga " + model);
    }

    public static Mobil crea(String model, double preu, int unitats) {
        Mobil m = new Mobil();
        m.model = model;
        m.preu = preu;
        m.unitats = unitats;
        return m;
    }

    public static void main(String[] args) {
        Mobil[] estoc = new Mobil[4];
        estoc[0] = crea("Pixel 8", 499.0, 3);
        estoc[1] = crea("Galaxy A55", 349.0, 5);
        estoc[2] = crea("iPhone 15", 909.0, 2);
        estoc[3] = crea("Nothing Phone", 429.0, 4);

        mostrar(estoc);
        System.out.println("Valor de l'estoc: " + valorEstoc(estoc) + " €");
        System.out.println("El més car: " + mesCar(estoc));
        buscar(estoc, "Galaxy A55");
        buscar(estoc, "Nokia");
    }
}`,
          sortida: `Pixel 8 · 499.0 € · 3 unitats
Galaxy A55 · 349.0 € · 5 unitats
iPhone 15 · 909.0 € · 2 unitats
Nothing Phone · 429.0 € · 4 unitats
Valor de l'estoc: 6089.0 €
El més car: iPhone 15 (909.0 €)
Trobat: Galaxy A55 a 349.0 €
No hi ha cap mòbil que es diga Nokia`,
          perque: 'Dos detalls que es poden millorar: el mètode de buscar usa `return;` per eixir quan el troba (més curt que una variable `trobat`), i el valor de l\'estoc es multiplica `preu * unitats` en cada volta. Eixa multiplicació és la «quantitat total» de cada producte.'
        },
        pista: 'Fes primer la classe, després els quatre mètodes i finalment el `main`. El de buscar pot acabar amb `return` dins del bucle.'
      },
      {
        id: 'ex7-3', titol: 'El videojoc textual', dificultat: 'mitjana', temps: '35 min',
        enunciat: 'Fes un petit joc de text amb un `Jugador` (nom, vida, punts) i un menú de tres accions: **atacar** (l\'enemic lleva 15 de vida i tu guanyes 10 punts), **curar-se** (+20 de vida, màxim 100) i **eixir**. Si la vida arriba a 0, el joc s\'acaba amb un missatge.\n\nAmpliació: mostra una barra de vida feta amb `#` (per exemple, 100 de vida = 10 `#`).',
        exemple: {
          entrada: `1 (atacar) · 2 (curar) · 1 (atacar) · 0 (eixir)`,
          sortida: `Vida: 85 · Punts: 10
Vida: 100 · Punts: 10
Vida: 85 · Punts: 20
Fi de la partida. Punts finals: 20`
        },
        solucio: {
          titol: 'JocText.java',
          text: `import java.util.Scanner;

class Heroi {
    String nom;
    int vida;
    int punts;

    public void atacar() {
        vida = vida - 15;
        if (vida < 0) {
            vida = 0;
        }
        punts = punts + 10;
    }

    public void curar() {
        vida = vida + 20;
        if (vida > 100) {
            vida = 100;
        }
    }

    public boolean viu() {
        return vida > 0;
    }

    public String barra() {
        String text = "";
        for (int i = 0; i < vida / 10; i++) {
            text = text + "#";
        }
        return text;
    }
}

public class JocText {

    public static void mostrar(Heroi h) {
        System.out.println(h.nom + " | " + h.vida + "/100 " + h.barra() + " | " + h.punts + " punts");
    }

    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        Heroi h = new Heroi();
        h.nom = "Ana";
        h.vida = 100;
        h.punts = 0;

        boolean eixir = false;
        while (!eixir && h.viu()) {
            System.out.println("1. Atacar   2. Curar-se   0. Eixir");
            int opcio = teclat.nextInt();

            if (opcio == 1) {
                h.atacar();
                mostrar(h);
            } else if (opcio == 2) {
                h.curar();
                mostrar(h);
            } else if (opcio == 0) {
                eixir = true;
            } else {
                System.out.println("Opció incorrecta");
            }
        }

        if (!h.viu()) {
            System.out.println("Has caigut!");
        }
        System.out.println("Fi de la partida. Punts finals: " + h.punts);
    }
}`,
          entrada: '1\n2\n1\n0\n',
          sortida: `1. Atacar   2. Curar-se   0. Eixir
Ana | 85/100 ######## | 10 punts
1. Atacar   2. Curar-se   0. Eixir
Ana | 100/100 ########## | 10 punts
1. Atacar   2. Curar-se   0. Eixir
Ana | 85/100 ######## | 20 punts
1. Atacar   2. Curar-se   0. Eixir
Fi de la partida. Punts finals: 20`,
          perque: 'El `while` té **dos** motius per acabar: que l\'usuari isca o que el jugador es quede sense vida. Els límits (vida entre 0 i 100) es controlen **dins dels mètodes del Heroi**: així cap part del programa pot deixar la vida en -40.'
        },
        pista: 'Els límits de vida posa\'ls dins dels mètodes (`curar`, `atacar`): el programa de fora no ha de saber les regles.'
      },
      {
        id: 'ex7-4', titol: 'Agenda de contactes', dificultat: 'repte', temps: '40 min',
        enunciat: 'Fes una agenda amb un array de 10 contactes (classe `Contacte` amb `nom` i `telefon`) que permeta: **afegir** un contacte a la primera casella buida, **llistar** els que hi ha (sense mostrar les buides), **buscar** pel nom i **comptar** quants n\'hi ha.\n\nCompte: l\'agenda pot estar mig buida. Un contacte «buit» és una casella que val `null`.',
        solucio: {
          titol: 'Agenda.java',
          text: `import java.util.Scanner;

class Contacte {
    String nom;
    String telefon;

    public String text() {
        return nom + " → " + telefon;
    }
}

public class Agenda {

    public static int comptar(Contacte[] agenda) {
        int quants = 0;
        for (int i = 0; i < agenda.length; i++) {
            if (agenda[i] != null) {
                quants++;
            }
        }
        return quants;
    }

    public static void llistar(Contacte[] agenda) {
        if (comptar(agenda) == 0) {
            System.out.println("L'agenda està buida.");
            return;
        }
        for (int i = 0; i < agenda.length; i++) {
            if (agenda[i] != null) {
                System.out.println((i + 1) + ". " + agenda[i].text());
            }
        }
    }

    public static boolean afegir(Contacte[] agenda, Contacte c) {
        for (int i = 0; i < agenda.length; i++) {
            if (agenda[i] == null) {
                agenda[i] = c;
                return true;               // s'ha pogut afegir
            }
        }
        return false;                      // no hi ha lloc
    }

    public static void buscar(Contacte[] agenda, String nom) {
        for (int i = 0; i < agenda.length; i++) {
            if (agenda[i] != null && agenda[i].nom.equalsIgnoreCase(nom)) {
                System.out.println("Trobat: " + agenda[i].text());
                return;
            }
        }
        System.out.println("No tinc cap contacte que es diga " + nom);
    }

    public static Contacte crea(String nom, String telefon) {
        Contacte c = new Contacte();
        c.nom = nom;
        c.telefon = telefon;
        return c;
    }

    public static void main(String[] args) {
        Contacte[] agenda = new Contacte[10];

        System.out.println("Contactes: " + comptar(agenda));
        llistar(agenda);

        afegir(agenda, crea("Ana", "600111222"));
        afegir(agenda, crea("Bruno", "611333444"));
        afegir(agenda, crea("Carla", "622555666"));

        System.out.println("Contactes: " + comptar(agenda));
        llistar(agenda);
        buscar(agenda, "carla");
        buscar(agenda, "Zeus");
    }
}`,
          sortida: `Contactes: 0
L'agenda està buida.
Contactes: 3
1. Ana → 600111222
2. Bruno → 611333444
3. Carla → 622555666
Trobat: Carla → 622555666
No tinc cap contacte que es diga Zeus`,
          perque: 'Ací el protagonista és **`null`**: les caselles buides. Cada mètode comprova `agenda[i] != null` abans de tocar res, i `afegir` aprofita la primera casella lliure. També hem usat `equalsIgnoreCase` perquè buscar «carla» trobe «Carla».'
        },
        pista: 'Fes el mètode `comptar` primer: si saps comptar els que hi ha, ja saps com recórrer l\'agenda amb seguretat.'
      }
    ]
  },

  reptes: {
    reptes: [
      {
        titol: 'El teu programa, de veritat',
        blocs: [
          { p: 'Tria **un** d\'estos problemes i construeix-lo aplicant les sis etapes del tema. No val començar a escriure codi: primer el pla i les dades, en paper.' },
          { llista: [
            '**Control de gastos:** demana els gastos del mes i digues el total, la mitjana, el més gran i quant has gastat de més si superes els 100 €.',
            '**Càlcul de notes de SMX:** guarda les notes de cada mòdul i calcula la nota mitjana, quants mòduls aproves i si passes de curs.',
            '**Lliga de videojocs:** partits amb dos equips i resultat; calcula els punts de cada equip (3 si guanya, 1 si empata) i mostra la classificació.',
            '**La teua playlist:** cançons amb títol i duració en segons; mostra la duració total en minuts i segons i la cançó més llarga.',
            '**Simulador de temperatura:** temperatures de la setmana; mitjana, màxima, mínima i quants dies ha gelat (per davall de 0).'
          ] },
          { p: 'Requisits mínims del projecte: **almenys quatre mètodes** amb un bon nom, un `main` que es llija com un resum, un menú amb bucle i un cas estrany comprovat (llista buida, valor 0 o element que no existix).' },
          { p: '**Entrega:** el codi, el pla inicial (les parts que vas decidir) i dos línies explicant què provaria un company per buidar-te la llista.' }
        ],
        ampliacions: [
          'Guarda les dades en un array d\'objectes en compte de variables soltes.',
          'Afig una opció més al menú sense tocar els mètodes que ja funcionen.',
          'Fes que el programa complica sol la llista per vore si aguanta amb 20 elements.'
        ]
      },
      {
        titol: 'Detectiu de codi',
        blocs: [
          { p: 'Este programa funciona «de vegades». Troba-li els **tres problemes**: un de dades, un de mètodes i un de límits. Escriu-los i arregla\'ls.' },
          { codi: {
            titol: 'Detectiu.java',
            etiqueta: 'TROBA\'LS',
            text: `public class Detectiu {

    public static double mitjana(int[] valors) {
        double suma = 0;
        for (int i = 0; i < valors.length; i++) {
            suma = suma + valors[i];
        }
        return suma / valors.length;
    }

    public static int maxim(int[] valors) {
        int mesAlt = 0;
        for (int i = 0; i < valors.length; i++) {
            if (valors[i] > mesAlt) {
                mesAlt = valors[i];
            }
        }
        return mesAlt;
    }

    public static void main(String[] args) {
        int[] proves = {-4, -9, -2};
        System.out.println("Mitjana: " + mitjana(proves));
        System.out.println("Màxim: " + maxim(proves));
    }
}`
          } },
          { p: 'Pistes del detectiu: quin és el màxim d\'un conjunt de números negatius? Què passa si l\'array està buit? I quin número divideix realment la mitjana?' },
          { p: '**Bonus:** fes que el programa no esclate mai amb un array buit.' }
        ]
      }
    ]
  },

  errors: {
    entradeta: 'Els errors d\'este tema no són de sintaxi: són d\'organització. Són els que fan que un programa siga fàcil o impossible de millorar.',
    errors: [
      {
        titol: 'Escriure-ho tot dins del main',
        mal: {
          titol: 'TotAlMain.java',
          text: `public static void main(String[] args) {
    int[] notes = {6.5, 4.0, 8.25};
    double suma = 0;
    for (int i = 0; i < notes.length; i++) {
        suma = suma + notes[i];
    }
    System.out.println("Mitjana: " + suma / notes.length);
    for (int i = 0; i < notes.length; i++) {
        if (notes[i] >= 5) {
            System.out.println("Aprovat: " + notes[i]);
        }
    }
    // i encara falta el màxim, el mínim, la qualificació...
}`,
          missatge: 'Compila i funciona… però no es pot provar per parts ni reutilitzar.'
        },
        que: 'El programa funciona, però tot està barrejat en un bloc llarg.',
        perque: 'Quan una part falla, no saps quina és. I per a provar només la mitjana, has d\'executar-ho tot.',
        detectar: 'Mira el `main`: si té més de 20-30 línies o més d\'un `for`, segurament hi ha parts que haurien de ser mètodes.',
        corregir: 'Cada cosa que el programa sap fer, un mètode. El `main` només crida mètodes.',
        bo: {
          titol: 'AmbMetodes.java',
          text: `public static void main(String[] args) {
    int[] notes = {6.5, 4.0, 8.25};
    mostrarMitjana(notes);
    mostrarAprovats(notes);
}` }
      },
      {
        titol: 'Barrejar mostrar amb calcular',
        mal: {
          titol: 'MitjanaQueImprimix.java',
          text: `public static void mitjana(double[] notes) {
    double suma = 0;
    for (int i = 0; i < notes.length; i++) {
        suma = suma + notes[i];
    }
    System.out.println("Mitjana: " + suma / notes.length);   // no torna res!
}`,
          missatge: 'El mètode es diu mitjana, però no torna cap número: no el podem usar en cap càlcul.'
        },
        que: 'El mètode mostra la mitjana per pantalla i no la torna.',
        perque: 'Un mètode que mostra no servix per a calcular: si demà volem comparar la mitjana amb 5, no podem.',
        detectar: 'Pregunta: **algú més necessitarà este resultat?** Si la resposta és sí, ha de tornar un valor.',
        corregir: 'El càlcul torna el número (`return`), i la impressió es fa al `main` o en un altre mètode.',
        bo: {
          titol: 'Mitjana.java',
          text: `public static double mitjana(double[] notes) {
    double suma = 0;
    for (int i = 0; i < notes.length; i++) {
        suma = suma + notes[i];
    }
    return suma / notes.length;
}` }
      },
      {
        titol: 'Provar amb dades massa grans',
        mal: {
          titol: 'Prova40.java',
          text: `int[] punts = {120, 95, 180, 210, 45, 88, 132, 99, 175, 61,
                // ... i 30 més
};
System.out.println(totalPunts(punts));   // esperes 4185, però ix 4100`,
          missatge: 'Esperat: 4185 · Obtingut: 4100  (i no saps on està el problema)'
        },
        que: 'Es prova el mètode amb 40 dades i el resultat no quadra.',
        perque: 'Amb tantes dades no pots saber quin element falla ni recórrer-ho a mà.',
        detectar: 'Si no pots calcular el resultat esperat **mentalment**, la prova és massa gran.',
        corregir: 'Prova primer amb 2 o 3 dades (1, 2, 3 → 6). Si ix bé, passa a dades grans.',
        bo: {
          titol: 'ProvaXicoteta.java',
          text: `int[] proves = {1, 2, 3};
System.out.println(totalPunts(proves));   // ha de dir 6` }
      },
      {
        titol: 'Canviar moltes coses quan no funciona',
        mal: {
          titol: 'Desesperacio.java',
          text: `// El programa diu que el màxim és 0 i no sabem per què.
// Canviem el bucle a while, traiem el mètode, fem l'array de 5...
// ...i ara falla en tres llocs distints i no sabem com tornar arrere.`,
          missatge: 'error: cannot find symbol · variable mesAlt (i no saps quina versió funciona)'
        },
        que: 'S\'han canviat diverses coses alhora buscant la solució.',
        perque: 'Quan canvia tot alhora, no se sap què ha arreglat ni què ha trencat el programa.',
        detectar: 'Si has fet tres canvis i encara no has executat el programa, ja t\'has passat.',
        corregir: 'Un canvi → una prova. Si millora, guarda la versió; si empitjora, torna arrere i pensa.',
        bo: {
          titol: 'Metode.java',
          text: `// 1) Comprove que al mètode li arriben les dades:
//    System.out.println("rep " + valors.length + " valors");
// 2) Només quan estiga clar, corregisc una sola línia i torne a provar.` }
      }
    ]
  },

  resum: {
    entradeta: 'Un programa gran és un conjunt de parts menudes que funcionen. Estes són les idees que has de recordar.',
    idees: [
      'Els programes es construïxen **per etapes**, no d\'un colp: entendre, dividir, decidir dades, esquelet, omplir i provar.',
      'La **llista de parts** és el mapa: cada part serà un mètode.',
      'Les **dades es decideixen abans** d\'escriure codi: variable, array o objecte.',
      'L\'**esquelet** ha de compilar i executar-se encara que no faça res de profit.',
      'Una part, una prova: mai no faces dos canvis sense executar.',
      'Si un mètode mostra per pantalla, no pot tornar el resultat: **calcular i mostrar són coses distintes**.',
      'El `main` ha de ser curt i llegir-se com un resum del programa.',
      'El menú amb `while` i `switch` fa que el programa servixca per a treballar de veritat.',
      'Els casos estranys (llista buida, `null`, valor 0, no trobat) formen part del programa.',
      'Quan no funciona: busca **quina part** és la culpable, no tot el programa.'
    ]
  },

  autoavaluacio: {
    entradeta: 'Nou preguntes per comprovar si saps construir un programa, no només escriure codi. Contesta-les totes abans de vore les solucions.',
    preguntes: [
      {
        pregunta: 'Quin és l\'orde correcte de les etapes per a construir un programa?',
        opcions: [
          'a) Escriure el codi, provar, pensar el problema i millorar.',
          'b) Entendre el problema i dividir-lo, decidir les dades, fer l\'esquelet, omplir part a part i millorar.',
          'c) Fer el menú, escriure els mètodes i canviar-ho tot fins que compile.'
        ],
        resposta: 'b) Entendre i dividir → dades → esquelet → omplir i provar → millorar.',
        perque: 'És l\'orde que permet treballar sense bloquejar-se: sempre saps en quina part estàs i com comprovar-la.'
      },
      {
        pregunta: 'Per a què servix escriure l\'esquelet amb els mètodes buits abans d\'omplir-los?',
        resposta: 'Per **assegurar l\'estructura**: si el programa buit compila i s\'executa, ja sabem que està ben muntat. Després només cal omplir els forats un a un.',
        perque: 'Així els errors de sintaxi de l\'esquelet es troben quan hi ha poc codi, no al final amb tot escrit.'
      },
      {
        pregunta: 'Este programa, què mostrarà per pantalla?',
        codi: {
          titol: 'Pregunta.java',
          text: `public static void main(String[] args) {
    int[] punts = {10, 20, 30};
    int total = 0;
    for (int i = 0; i < punts.length; i++) {
        total = total + punts[i];
    }
    System.out.println(total / punts.length);
}`
        },
        resposta: '20',
        perque: 'La suma val 60 i hi ha 3 elements: 60 / 3 = 20. Com que `total` i `punts.length` són `int`, la divisió dona un `int` exacte.'
      },
      {
        pregunta: 'Per què un mètode que calcula la mitjana no hauria d\'imprimir per pantalla? Expliqueu-ho amb un exemple.',
        resposta: 'Perquè llavors no podem **reutilitzar** el resultat: si mostra la mitjana i no la torna, no podem comprovar si l\'alumne aprova, ni comparar mitjanes, ni guardar-la.',
        perque: 'Calcular i mostrar són responsabilitats distintes. El càlcul torna un valor; qui el necessita decidix com mostrar-lo.'
      },
      {
        pregunta: 'Quina diferència hi ha entre un mètode `void` i un que torna un valor, a l\'hora de construir un programa gran?',
        resposta: 'El `void` fa una faena i no deixa resultat (mostrar, dibuixar); el que torna un valor produïx una dada que el programa pot seguir usant.',
        perque: 'Quan planifiques les parts, saber quines tornen valor és el que et permet encadenar-les: una part usa el resultat de l\'altra.'
      },
      {
        pregunta: 'Tenim un array de 10 caselles i només n\'hem omplit 3. Per què cal comprovar `array[i] != null` quan el recorrem?',
        resposta: 'Perquè les caselles no omplides d\'un array d\'objectes **valen `null`**, i si demanem les dades d\'una casella buida el programa s\'atura amb un `NullPointerException`.',
        perque: 'Un array no sap quants elements «de veritat» hi ha: eixa informació l\'has de controlar tu.'
      },
      {
        pregunta: 'Un company diu: «el meu programa falla, canviat la condició del bucle, trauré el mètode i faré l\'array més gran a la vegada». Què li recomanaries?',
        resposta: 'Que faça **un canvi i una prova** cada vegada. Si canvia tres coses alhora no sabrà quina arregla el problema i quina el trenca.',
        perque: 'És el mètode professional de depuració: canvis xicotets, comprovar sempre, guardar la versió que funciona.'
      },
      {
        pregunta: 'Escriu (en pseudocodi o en valencià) el pla d\'un programa que guarda les notes de 5 alumnes i diu quants aproven i quina és la nota mitjana dels aprovats.',
        resposta: 'Parts: `mitjana(double[])` → double; `aprovats(double[])` → int; `mitjanaAprovats(double[])` → double; `mostrar(...)` → void; `main` que crida tot.',
        perque: 'El detall important és **separar «comptar aprovats» de «calcular la mitjana dels aprovats»**: la segona ha de tornar 0 o un missatge especial si no hi ha cap aprovat (no es pot dividir per zero).'
      },
      {
        pregunta: 'Per què l\'últim pas és «millorar» i no «acabar»? Què sol millorar-se en un programa que ja funciona?',
        resposta: 'Perquè un programa que funciona encara pot fallar amb casos estranys, tindre missatges poc clars o codi repetit. Es milloren els **casos límits**, els missatges a l\'usuari i la netedat del codi.',
        perque: 'La diferència entre un programa d\'exercici i un programa útil està quasi sempre en eixa última volta.'
      }
    ]
  },

  diapositives: {
    objectiu: 'Saber convertir un problema en un programa: dividir-lo en parts, escollir les dades, construir-lo per etapes i provar cada etapa.',
    index: [
      'El problema: tot dins del main',
      'El mètode de treball (6 etapes)',
      'Del problema a la llista de parts',
      'Escollir les dades',
      'L\'esquelet que compila',
      'Una part, una prova',
      'El menú: el programa no s\'acaba',
      'Trobar l\'error: busca la part',
      'Millorar quan ja funciona'
    ],
    blocs: [
      {
        tipus: 'concepte',
        titol: 'Hui no hi ha sintaxi nova',
        bullets: [
          'Ja sabem variables, decisions, bucles, arrays, mètodes i objectes',
          'El que falta és saber ajuntar-ho',
          'Els programes grans es construïxen per etapes',
          'La diferència no és el codi: és el mètode'
        ],
        notes: 'Dir-ho clar al principi: hui s\'apren a treballar, no a escriure codi nou.'
      },
      {
        tipus: 'esquema',
        titol: 'Les sis etapes',
        flux: ['Entendre', 'Dividir', 'Dades', 'Esquelet', 'Omplir i provar', 'Millorar'],
        nota: 'Sempre les mateixes, tant per a un exercici de classe com per a un joc professional.'
      },
      {
        tipus: 'concepte',
        titol: 'La llista de parts és el mapa',
        bullets: [
          'Cada cosa que el programa sap fer → un mètode',
          'Es decideix en paper, abans de programar',
          'Quan et bloques, tornes a la llista',
          'La pregunta: què li entra i què ha de tornar?'
        ],
        notes: 'Escriure-la a la pissarra amb el gestor del torneig.'
      },
      {
        tipus: 'comparacio',
        titol: 'Dades: què trie?',
        esquerra: { titol: 'Un sol valor', bullets: ['Variable simple', 'total, comptador, resposta', 'int, double, String, boolean'] },
        dreta: { titol: 'Moltes dades', bullets: ['Array (o array d\'objectes)', 'Dades que van juntes → classe', 'Es recorre amb un bucle'] }
      },
      {
        tipus: 'codi',
        titol: 'L\'esquelet que compila',
        codi: 'public static int totalPunts(Jugador[] jugadors) {\n    return 0;      // provisional\n}\n\npublic static void main(String[] args) {\n    System.out.println("Estructura preparada.");\n}',
        sortida: 'Estructura preparada.',
        notes: 'Escriure-ho en directe i executar-ho: compila i funciona, encara que no faça res.'
      },
      {
        tipus: 'prediccio',
        titol: 'Una part, una prova',
        codi: 'int[] proves = {120, 95, 180};\nSystem.out.println(totalPunts(proves));',
        pregunta: 'Quin resultat esperem? Com ho comprovem?',
        notes: 'Fer-los calcular mentalment: 395. I preguntar què faríem si ix 390.'
      },
      {
        tipus: 'esquema',
        titol: 'El main llegit com un resum',
        flux: ['mostrarTots()', 'totalPunts()', 'millorJugador()', 'afegirPunts()'],
        nota: 'Si algú llig el main i entén què fa el programa, les parts estan ben triades.'
      },
      {
        tipus: 'codi',
        titol: 'El menú',
        codi: 'boolean eixir = false;\nwhile (!eixir) {\n    System.out.println("1. Mostrar  2. Sumar  0. Eixir");\n    int opcio = teclat.nextInt();\n    if (opcio == 0) eixir = true;\n    else if (opcio == 1) mostrarTots(jugadors);\n}',
        sortida: 'El programa no s\'acaba fins que l\'usuari vol.',
        notes: 'Recordar el bucle infinit: la variable ha de canviar dins del bucle.'
      },
      {
        tipus: 'concepte',
        titol: 'Quan alguna cosa falla',
        bullets: [
          'Quina part és la culpable?',
          'Li arriben bé les dades? (println provisional)',
          'Què torna exactament?',
          'Amb quines dades falla? (prova amb poques)'
        ],
        notes: 'Insistir: un canvi, una prova.'
      },
      {
        tipus: 'activitat',
        titol: 'Ara et toca a tu',
        enunciat: 'Escriu el pla (la llista de parts) d\'un programa que guarda les teues notes de SMX i diu la mitjana, si passes de curs i quin mòdul et costa més.',
        temps: '10 min',
        pistes: ['Cada part ha de tindre un nom i un resultat clar', 'Quines dades necessites: un array? una classe?'],
        notes: 'Corregir en veu alta dos o tres plans: discutir els noms i els tipus de retorn.'
      },
      {
        tipus: 'pregunta',
        titol: 'Pensem un moment',
        pregunta: 'Per què és millor provar el mètode amb {1, 2, 3} que amb les 40 dades reals del programa?'
      },
      {
        tipus: 'codi',
        titol: 'Els casos estranys',
        codi: 'int[] cap = {};                       // array buit\nSystem.out.println(totalPunts(cap));   // hauria de dir 0\n\nJugador[] buit = new Jugador[4];       // tot null\nmostrarTots(buit);                     // no ha d\'esclatar',
        sortida: '0',
        notes: 'Presentar els casos estranys com el que són: la diferència entre un exercici i un programa de debò.'
      }
    ],
    resum: [
      'Els programes es construïxen per etapes, no d\'un colp.',
      'La llista de parts és el mapa del programa.',
      'Les dades es decideixen abans d\'escriure codi.',
      'L\'esquelet ha de compilar i executar-se.',
      'Una part, una prova: un canvi, una prova.',
      'Calcular i mostrar són coses distintes.',
      'El main és un resum, no el programa sencer.',
      'Els casos estranys formen part del programa.'
    ],
    seguent: 'Tema 8 · Programar en l\'era de la IA'
  }
};
