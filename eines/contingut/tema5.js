/* ==========================================================================
   TEMA 5 · Mètodes: reutilitzar el codi  —  contingut de la pàgina
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   · sortida = eixida real (es comprova amb  node eines/prova-codi-java.mjs 5 )
   ========================================================================== */
globalThis.TEMA = {
  n: 5,
  titol: 'Mètodes: reutilitzar el codi',
  subtitol: 'Posar nom a un tros de programa i usar-lo les vegades que calga',
  durada: '3 hores de classe',

  hero: {
    etiqueta: 'Tema 5 · Sessió de 3 hores',
    entradeta: 'Fins ara el codi creix cap avall i cada programa és una sola llista de coses. Els mètodes ens deixen donar un nom als trossos de programa i construïr el programa com qui monta un joc de peces.',
    meta: [
      '⏱ 3 hores',
      '📦 Fase 2 · Estructurar el programa',
      '🧩 Necessites: Temes 0 a 4',
      '❓ La pregunta clau: quines peces té este problema?'
    ]
  },

  introduccio: {
    titol: 'Una situació per començar',
    emoji: '🧱',
    blocs: [
      { p: 'En el tema anterior hem fet un programa que calcula la mitjana d\'un array. Al tema 3 en vam fer un altre que calcula la mitjana de notes llegides pel teclat. I en el tema 2 un altre que diu la qualificació d\'una nota.' },
      { p: 'Hi ha una cosa que no ens ha cridat l\'atenció però que és un problema seriós: **hem escrit el mateix codi una vegada i una altra**. I quan el codi està repetit, qualsevol canvi cal fer-lo en tots els llocs… i sempre se n\'oblida algun.' },
      { codi: {
        titol: 'Repeticio.java',
        etiqueta: 'MATEIX CODI DOS VEGADES',
        text: `// a dins de main, per a les notes de classe:
double suma1 = 0;
for (int i = 0; i < notes.length; i++) {
    suma1 = suma1 + notes[i];
}
double mitjanaNotes = suma1 / notes.length;

// ...i un poc més avall, per als punts del joc:
double suma2 = 0;
for (int i = 0; i < punts.length; i++) {
    suma2 = suma2 + punts[i];
}
double mitjanaPunts = suma2 / punts.length;`
      } },
      { p: 'Són els mateixos càlculs amb noms diferents. I si ens equivocàvem en un? Hauríem d\'arreglar-ho dos vegades.' },
      { p: 'La solució: **guardar eixe tros de programa amb un nom** i usar el nom cada vegada que el necessitem. Es diu **mètode** (o *funció*, en molts llenguatges). Ja els has estat usant tot el temps: `println`, `nextInt`, `length()`, `equals`… són mètodes que algú altre ha escrit per nosaltres!' }
    ],
    plan: [
      ['30-40 min', 'Explicació i demos'],
      ['60-75 min', 'Programació guiada'],
      ['60-75 min', 'Exercicis'],
      ['15-30 min', 'Repàs i repte']
    ],
    prerequisits: [
      'Arrays i bucles per a recórrer-los (Tema 4).',
      'Condicions amb `if` i `else` (Tema 2).',
      'Variables, tipus i operacions (Tema 1).'
    ]
  },

  objectius: {
    intro: 'En acabar esta sessió has de saber fer estes coses:',
    llista: [
      'Escriure un mètode (`public static`) i cridar-lo les vegades que calga.',
      'Passar dades a un mètode amb **paràmetres**.',
      'Traure un resultat d\'un mètode amb **`return`**.',
      'Diferenciar els mètodes `void` dels que tornen un valor.',
      'Passar arrays a un mètode i treballar amb ells.',
      'Dividir un problema gran en mètodes menuts i organitzar-ho des de `main`.'
    ]
  },

  teoria: {
    titol: 'Teoria, poc a poc',
    entradeta: 'Una idea → un exemple. I una pregunta nova: quin nom li posaria a cada peça?',
    blocs: [
      { h3: '1. Un mètode és codi amb nom' },
      { p: 'Un **mètode** és un tros de programa guardat amb un nom, que podem usar quan volem. Este mètode escriu un salud, i anomenem-lo des de `main` tres vegades:' },
      { codi: {
        titol: 'Saluda.java',
        etiqueta: 'EL PRIMER MÈTODE',
        text: `public class Saluda {
    public static void saluda() {
        System.out.println("Hola! Soc un mètode.");
    }

    public static void main(String[] args) {
        saluda();
        saluda();
        saluda();
    }
}`,
        sortida: `Hola! Soc un mètode.
Hola! Soc un mètode.
Hola! Soc un mètode.`
      } },
      { p: 'Fixa\'t en les tres parts del mètode:' },
      { llista: [
        'El **cap**: `public static void saluda()`. Diu com es diu i què torna.',
        'El **cos**: tot el que va entre `{ }`. És el que fa.',
        'La **crida**: `saluda();` des de `main`. Ací és on s\'executa.'
      ], numerada: true },
      { nota: { tipus: 'només-ensenyament', text: '`public static` són dos paraules que de moment escriguem **sempre igual**, tal qual, com una fórmula. **Encara no cal entendre-les**; al Tema 6 vorem què signifiquen i per què `main` també les porta.' } },

      { h3: '2. Mètodes que necessiten dades: paràmetres' },
      { p: 'El mètode anterior sempre diu el mateix. Perquè servisca per a qualsevol cosa, li passem **les dades que necessita** entre els parèntesis. Es diuen **paràmetres**.' },
      { codi: {
        titol: 'SaludaAlgu.java',
        etiqueta: 'PARÀMETRES',
        text: `public class SaludaAlgu {
    public static void saluda(String nom) {
        System.out.println("Hola, " + nom + "!");
    }

    public static void main(String[] args) {
        saluda("Ana");
        saluda("Bruno");
        saluda("Carla");
    }
}`,
        sortida: `Hola, Ana!
Hola, Bruno!
Hola, Carla!`
      } },
      { p: '`String nom` vol dir: «este mètode necessita un text i dins del mètode es dirà `nom`». El valor que li donem en cridar-lo (`"Ana"`) se\'n diu **argument**.' },
      { taula: {
        cap: ['Parlant de…', 'On està', 'Exemple'],
        files: [
          ['Paràmetre', 'En el cap del mètode', '`String nom`'],
          ['Argument', 'En la crida', '`saluda("Ana")`'],
          ['Variable local', 'Dins del cos del mètode', '`int suma = 0;`']
        ]
      } },
      { nota: { tipus: 'tip', text: 'Poden haver-hi diversos paràmetres, separats per comes i **cadascun amb el seu tipus**: `public static double mitjana(double a, double b)`. I es poden passar tants arguments com paràmetres tinga el mètode, ni un més ni un menys.' } },

      { h3: '3. Mètodes que tornen un resultat: return' },
      { p: 'Fins ara els nostres mètodes escriuen coses per pantalla. Però el més útil és que **calculen i ens tornen el resultat**, perquè nosaltres decidim què fem amb ell.' },
      { codi: {
        titol: 'SumaMetode.java',
        etiqueta: 'RETURN',
        text: `public class SumaMetode {
    public static int suma(int a, int b) {
        return a + b;      // ací es torna el resultat
    }

    public static void main(String[] args) {
        int resultat = suma(4, 7);
        System.out.println("4 + 7 = " + resultat);

        System.out.println("10 + 32 = " + suma(10, 32));
    }
}`,
        sortida: `4 + 7 = 11
10 + 32 = 42`
      } },
      { p: 'Tres idees clau d\'este exemple:' },
      { llista: [
        'El cap canvia `void` per **`int`**: «este mètode torna un número enter».',
        '`return` fa **dos treballs**: torna el valor i **acaba el mètode allí mateix**.',
        'El resultat es pot guardar en una variable o usar-lo directament dins d\'una altra operació.'
      ], numerada: true },
      { nota: { tipus: 'important', text: 'Si un mètode diu que torna un `int`, **ha de tornar un `int` en tots els camins possibles**. Vore\'s un `if` sense `else` dins d\'un mètode que ha de tornar alguna cosa és el motiu de l\'error «This method must return a result of type int».' } },

      { h3: '4. void o amb retorn?' },
      { p: 'La diferència és què volem d\'eixe mètode: que **faça** alguna cosa (mostrar, dibuixar, guardar) o que ens **done** un valor.' },
      { codi: {
        titol: 'Calculs.java',
        etiqueta: 'VOID vs RETURN',
        text: `public class Calculs {
    public static void mostraMissatge(String text) {   // no torna res: void
        System.out.println(">>> " + text);
    }

    public static double mitjana(double a, double b) { // torna un double
        return (a + b) / 2;
    }

    public static boolean esParell(int n) {            // torna un boolean
        return n % 2 == 0;
    }

    public static void main(String[] args) {
        mostraMissatge("Comencem");

        System.out.println("Mitjana de 6 i 9: " + mitjana(6, 9));
        System.out.println("El 7 és parell? " + esParell(7));

        if (esParell(8)) {
            mostraMissatge("El 8 sí que és parell");
        }
    }
}`,
        sortida: `>>> Comencem
Mitjana de 6 i 9: 7.5
El 7 és parell? false
>>> El 8 sí que és parell`
      } },
      { p: 'Un mètode que torna `boolean` és especialment útil dins d\'un `if`: `if (esParell(8))` es llig com una frase en valencià. Això fa el codi molt més llegible.' },
      { taula: {
        cap: ['Tipus', 'Què fa', 'Exemple d\'ús'],
        files: [
          ['`void`', 'Fa faena i no torna res', '`mostraMissatge("Hola");`'],
          ['`int` / `double`', 'Torna un número', '`int t = suma(2, 3);`'],
          ['`boolean`', 'Torna vertader o fals', '`if (esParell(8))`'],
          ['`String`', 'Torna un text', '`String n = nomComplet("Ana", "Gil");`'],
          ['`int[]`', 'Torna un array', '`double[] notes = llegirNotes(5);`']
        ]
      } },

      { h3: '5. Cada variable viu dins del seu mètode' },
      { p: 'Una variable creada dins d\'un mètode **només existix allí dins**. Fora no es veu. Esta idea pareix una limitació i és justament el que fa els programes ordenats.' },
      { codi: {
        titol: 'Ambit.java',
        etiqueta: 'ÀMBIT DE LES VARIABLES',
        text: `public class Ambit {
    public static void calcula() {
        int dins = 5;
        System.out.println("Dins del mètode: " + dins);
    }

    public static void main(String[] args) {
        calcula();

        int dins = 99;
        System.out.println("En main: " + dins);

        // System.out.println(dinsDelMetode);  // això NO existix: donaria error
    }
}`,
        sortida: `Dins del mètode: 5
En main: 99`
      } },
      { nota: { tipus: 'important', text: 'Per això `main` i `calcula` poden tindre dos variables amb el **mateix nom** sense cap problema: són dos móns separats. Si un mètode necessita una dada, se li passem per paràmetre o ens la torna amb `return`. Als dos móns només s\'arriba per la porta (els paràmetres i el retorn).' } },

      { h3: '6. Mètodes que treballen amb arrays' },
      { p: 'Els arrays es passen als mètodes igual que qualsevol altra dada. Este és el gran estalvi: els càlculs de mitjana, màxim o mínim es fan una sola vegada i s\'usen sempre.' },
      { codi: {
        titol: 'AmbArray.java',
        etiqueta: 'ARRAY + MÈTODES',
        text: `public class AmbArray {
    public static double mitjana(double[] valors) {
        double suma = 0;
        for (int i = 0; i < valors.length; i++) {
            suma = suma + valors[i];
        }
        return suma / valors.length;
    }

    public static int maxim(int[] valors) {
        int max = valors[0];
        for (int i = 1; i < valors.length; i++) {
            if (valors[i] > max) {
                max = valors[i];
            }
        }
        return max;
    }

    public static void main(String[] args) {
        double[] notes = {6, 7, 6, 9, 8};
        int[] punts = {120, 95, 180, 60};

        System.out.println("Mitjana: " + mitjana(notes));
        System.out.println("Màxim: " + maxim(punts));
    }
}`,
        sortida: `Mitjana: 7.2
Màxim: 180`
      } },
      { p: 'Dins del mètode, l\'array es diu `valors`, i fora es diu `notes` o `punts`. El nom del paràmetre és cosa del mètode: qui el crida només ha de passar-li un array del tipus correcte.' },
      { nota: { tipus: 'info', text: 'Fixat que `mitjana` i `maxim` no escriuen res per pantalla: **només calculen**. Això les fa reutilitzables: a un programa voldrem mostrar la mitjana, a un altre potser comprovar si aprova la classe.' } },

      { h3: '7. Mètodes que criden altres mètodes' },
      { p: 'Un mètode pot usar un altre mètode, i així es construïxen programes com qui monta peces.' },
      { codi: {
        titol: 'Butlleti.java',
        etiqueta: 'MÈTODES QUE ES CRIDEN',
        text: `public class Butlleti {
    public static void linia() {
        System.out.println("----------------------");
    }

    public static void capcalera(String nom) {
        linia();
        System.out.println("BUTLLETÍ DE " + nom.toUpperCase());
        linia();
    }

    public static void main(String[] args) {
        capcalera("Ana");
        System.out.println("Nota: 8.5");
        linia();
    }
}`,
        sortida: `----------------------
BUTLLETÍ DE ANA
----------------------
Nota: 8.5
----------------------`
      } },
      { p: '`capcalera` usa `linia` dos vegades. Si un dia volem una línia més llarga, la canviem **en un sol lloc** i tots els butlletins queden bé. Eixe és el poder dels mètodes.' },

      { h3: '8. Pensar el problema en peces' },
      { p: 'La manera de treballar amb mètodes és pensar el problema en **verbs**: quins passos té i quin nom li donaria a cada pas. És el que es diu dissenyar de dalt a baix.' },
      { p: 'Exemple: «llegir 5 notes i mostrar un informe amb la mitjana, la nota més alta i la qualificació».' },
      { taula: {
        cap: ['Pas (què cal fer)', 'Nom del mètode', 'Què torna'],
        files: [
          ['Demanar les notes pel teclat', '`llegirNotes(int quants)`', '`double[]`'],
          ['Calcular la mitjana', '`mitjana(double[] notes)`', '`double`'],
          ['Trobar la nota més alta', '`maxim(double[] notes)`', '`double`'],
          ['Convertir la nota en text', '`qualificacio(double nota)`', '`String`'],
          ['Escriure l\'informe', '`mostraInforme(double[] notes)`', '`void`']
        ]
      } },
      { p: 'I `main` queda reduït a l\'esquelet del programa: llegir, mostrar. **Cada peça es pot provar per separat**, i si alguna cosa no funciona, ja saps on mirar.' },
      { nota: { tipus: 'tip', text: 'Regla pràctica: si un tros de codi et costa d\'explicar en una frase, probablement hauria de ser un mètode. I si li has de posar un comentari llarg per explicar-lo, **segur** que hauria de ser un mètode.' } }
    ]
  },

  exemples: {
    titol: 'Exemples explicats pas a pas',
    entradeta: 'Cada exemple: què volem aconseguir, el codi, què apareix per pantalla i per què funciona.',
    blocs: [
      { h3: 'Exemple 1 · Conversor de temperatures' },
      { p: '**Què volem?** Convertir graus Celsius a Fahrenheit i al revés. Si la conversió està dins d\'un mètode amb nom, el programa principal queda claríssim.' },
      { codi: {
        titol: 'Conversor.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Conversor {
    public static double celsiusAFahrenheit(double celsius) {
        return celsius * 9 / 5 + 32;
    }

    public static double fahrenheitACelsius(double fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    public static void main(String[] args) {
        System.out.println("0 graus C = " + celsiusAFahrenheit(0) + " F");
        System.out.println("25 graus C = " + celsiusAFahrenheit(25) + " F");
        System.out.println("100 graus C = " + celsiusAFahrenheit(100) + " F");
        System.out.println("La febra (38 C) = " + celsiusAFahrenheit(38) + " F");
        System.out.println("Tornem: " + fahrenheitACelsius(98.6) + " graus C");
    }
}`,
        sortida: `0 graus C = 32.0 F
25 graus C = 77.0 F
100 graus C = 212.0 F
La febra (38 C) = 100.4 F
Tornem: 37.0 graus C`
      } },
      { p: '**Per què funciona:** la fórmula està escrita **una sola vegada** en el seu mètode. Si un dia la volem canviar (o hem escrit 9/5 al revés), hi ha un únic lloc on tocar.' },
      { nota: { tipus: 'tip', text: 'Fixa\'t en la línia del `main`: es llig com si parlàrem. «La febra, 38 graus, quants F són?» → `celsiusAFahrenheit(38)`. Este és el senyal que els mètodes estan ben pensats.' } },

      { h3: 'Exemple 2 · La qualificació, ara amb mètode' },
      { p: '**Què volem?** Convertir una nota numèrica en text (Insuficient, Suficient…). Ho fem dins d\'un mètode que torna un `String`.' },
      { codi: {
        titol: 'Qualificacio.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Qualificacio {
    public static String qualificacio(double nota) {
        if (nota < 5) {
            return "Insuficient";
        } else if (nota < 6) {
            return "Suficient";
        } else if (nota < 7) {
            return "Bé";
        } else if (nota < 9) {
            return "Notable";
        } else {
            return "Excel·lent";
        }
    }

    public static void main(String[] args) {
        System.out.println("4.5 → " + qualificacio(4.5));
        System.out.println("5.5 → " + qualificacio(5.5));
        System.out.println("6.5 → " + qualificacio(6.5));
        System.out.println("8.0 → " + qualificacio(8.0));
        System.out.println("9.5 → " + qualificacio(9.5));
    }
}`,
        sortida: `4.5 → Insuficient
5.5 → Suficient
6.5 → Bé
8.0 → Notable
9.5 → Excel·lent`
      } },
      { p: '**Per què funciona:** cada `return` acaba el mètode immediatament, així que no cal guardar la resposta en una variable. Com que hi ha un `else` final que sempre torna alguna cosa, el mètode **sempre** torna un text: no hi ha cap camí que acabe sense `return`.' },
      { nota: { tipus: 'important', text: 'Esta versió és millor que la del tema 2: ara la qualificació es pot usar per a **qualsevol** nota del programa, i la podem mostrar, guardar o comparar. Un mètode que torna un valor és una peça que es pot usar en qualsevol lloc.' } },

      { h3: 'Exemple 3 · Un gràfic de barres' },
      { p: '**Què volem?** Mostrar un gràfic de les notes fet amb caràcters. Necessitem un mètode que faça una barra de la llargària que li diguem.' },
      { codi: {
        titol: 'Grafic.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Grafic {
    public static void barra(int estrelles) {
        for (int i = 0; i < estrelles; i++) {
            System.out.print("*");
        }
        System.out.println();
    }

    public static void graficDeNotes(int[] notes) {
        for (int i = 0; i < notes.length; i++) {
            System.out.print("Alumne " + (i + 1) + ": ");
            barra(notes[i]);
        }
    }

    public static void main(String[] args) {
        int[] notes = {6, 9, 4, 8, 7};
        graficDeNotes(notes);
    }
}`,
        sortida: `Alumne 1: ******
Alumne 2: *********
Alumne 3: ****
Alumne 4: ********
Alumne 5: *******`
      } },
      { p: '**Per què funciona:** `barra` sap dibuixar una barra de la llargària que li demanem. `graficDeNotes` recorre l\'array i crida `barra` una vegada per alumne, passant-li la seua nota. Les dos peces són independents: podríem usar `barra` en qualsevol altre programa.' },
      { nota: { tipus: 'tip', text: '`System.out.print` (sense `ln`) escriu en la mateixa línia, i el `println()` buit del final de `barra` baixa de línia. La barra es fa amb un bucle `for` on el comptador no s\'usa dins: només conta voltes.' } },

      { h3: 'Exemple 4 · Mètodes que comproven dades' },
      { p: '**Què volem?** Que el programa no accepte notes impossibles. Un mètode que torna `boolean` és la ferramenta perfecta per a preguntar «açò és vàlid?».' },
      { codi: {
        titol: 'Validacio.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Validacio {
    public static boolean esNotaValida(double nota) {
        return nota >= 0 && nota <= 10;
    }

    public static boolean esAprovat(double nota) {
        return nota >= 5;
    }

    public static void main(String[] args) {
        System.out.println("¿6.5 és vàlida? " + esNotaValida(6.5));
        System.out.println("¿12 és vàlida? " + esNotaValida(12));
        System.out.println("¿-3 és vàlida? " + esNotaValida(-3));
        System.out.println("¿4.9 està aprovada? " + esAprovat(4.9));
        System.out.println("¿5.0 està aprovada? " + esAprovat(5.0));
    }
}`,
        sortida: `¿6.5 és vàlida? true
¿12 és vàlida? false
¿-3 és vàlida? false
¿4.9 està aprovada? false
¿5.0 està aprovada? true`
      } },
      { p: '**Per què funciona:** un mètode que torna `boolean` és una **pregunta** amb nom. `esNotaValida(12)` es llig com una pregunta i tornaaa `false`. Amb estes preguntes fetes mètodes, el programa principal queda ple de frases que s\'entenen.' },
      { nota: { tipus: 'tip', text: 'Costum de bo programador: els mètodes que tornen `boolean` es diuen començant per **`es`** o **`te`**: `esParell`, `esAprovat`, `teCarnet`, `esNotaValida`. Qui llig el codi ja sap què torna.' } },

      { h3: 'Què torna este mètode?' },
      { p: 'Llig el mètode amb atenció i pensa el resultat de les tres crides abans d\'executar-lo.' },
      { prediccio: {
        id: 'pred-return',
        titol: 'Pensa abans d\'executar',
        fitxer: 'Misteri.java',
        text: `public class Misteri {
    public static int misteri(int a, int b) {
        if (a > b) {
            return a;
        }
        return b;
    }

    public static void main(String[] args) {
        System.out.println(misteri(3, 9));
        System.out.println(misteri(7, 2));
        System.out.println(misteri(5, 5));
    }
}`,
        sortida: `9
7
5`,
        perque: 'El mètode torna el número més gran dels dos. Quan `a > b` torna `a` i el mètode acaba allí mateix; si no, arriba al segon `return` i torna `b`. Amb 5 i 5 no es complix `a > b` (5 no és més gran que 5), així que torna `b`, que val el mateix: 5.'
      } }
    ]
  },

  guiada: {
    titol: 'Programació guiada: ho fem junts',
    entradeta: 'Farem un analitzador de notes dividit en mètodes: llegir, calcular, qualificar i mostrar. Cada peça, un mètode. I ho provarem peça a peça.',
    passos: [
      {
        titol: 'El problema i el seu esquelet',
        blocs: [
          { p: 'Volem un programa que demane 4 notes, mostre la mitjana, la nota més alta, els aprovats i la qualificació final.' },
          { p: 'Abans d\'escriure res, pensem el programa en verbs i decidim què torna cada peça:' },
          { taula: {
            cap: ['Mètode', 'Què fa', 'Què torna'],
            files: [
              ['`llegirNotes(int quants)`', 'demana les notes pel teclat', '`double[]`'],
              ['`mitjana(double[] notes)`', 'calcula la mitjana', '`double`'],
              ['`maxim(double[] notes)`', 'troba la nota més alta', '`double`'],
              ['`aprovats(double[] notes)`', 'compta les notes de 5 o més', '`int`'],
              ['`qualificacio(double nota)`', 'converteix la nota en text', '`String`'],
              ['`mostraInforme(double[] notes)`', 'escriu l\'informe', '`void`']
            ]
          } },
          { preguntaClasse: 'Quin d\'estos mètodes no necessita tornar res? Per què?' }
        ]
      },
      {
        titol: 'Primer mètode: llegir les notes',
        blocs: [
          { p: 'Comencem pel mètode que demana les dades. Torna un array, i eixa és una idea nova però molt còmoda: **el mètode fabrica l\'array i ens el dóna**.' },
          { codi: {
            titol: 'Analitzador.java',
            etiqueta: 'PAS 2',
            text: `import java.util.Scanner;

public class Analitzador {
    public static double[] llegirNotes(int quants) {
        Scanner teclat = new Scanner(System.in);
        double[] notes = new double[quants];

        for (int i = 0; i < notes.length; i++) {
            System.out.print("Nota " + (i + 1) + ": ");
            notes[i] = teclat.nextDouble();
        }

        return notes;
    }

    public static void main(String[] args) {
        double[] notes = llegirNotes(4);

        System.out.println("He guardat " + notes.length + " notes.");
        System.out.println("La primera és " + notes[0]);
    }
}`,
            entrada: '6\n7\n6\n9\n',
            sortida: `Nota 1: Nota 2: Nota 3: Nota 4: He guardat 4 notes.
La primera és 6.0`,
            sortidaMostrada: `Nota 1: 6
Nota 2: 7
Nota 3: 6
Nota 4: 9
He guardat 4 notes.
La primera és 6.0`
          } },
          { p: 'El paràmetre `int quants` diu quantes notes volem. El `return notes;` torna l\'array ja ple. En `main` ho guardem: `double[] notes = llegirNotes(4);`.' }
        ]
      },
      {
        titol: 'Els càlculs, en mètodes separats',
        blocs: [
          { p: 'Ara els tres càlculs. Fixa\'t que són els del tema anterior, però ben empaquetats: es poden usar en qualsevol programa.' },
          { codi: {
            titol: 'Analitzador.java',
            etiqueta: 'PAS 3',
            text: `public class Analitzador {
    public static double mitjana(double[] notes) {
        double suma = 0;
        for (int i = 0; i < notes.length; i++) {
            suma = suma + notes[i];
        }
        return suma / notes.length;
    }

    public static double maxim(double[] notes) {
        double max = notes[0];
        for (int i = 1; i < notes.length; i++) {
            if (notes[i] > max) {
                max = notes[i];
            }
        }
        return max;
    }

    public static int aprovats(double[] notes) {
        int quants = 0;
        for (int i = 0; i < notes.length; i++) {
            if (notes[i] >= 5) {
                quants++;
            }
        }
        return quants;
    }

    public static void main(String[] args) {
        double[] notes = {6, 7, 6, 9};

        System.out.println("Mitjana: " + mitjana(notes));
        System.out.println("Més alta: " + maxim(notes));
        System.out.println("Aprovats: " + aprovats(notes));
    }
}`,
            sortida: `Mitjana: 7.0
Més alta: 9.0
Aprovats: 4`
          } },
          { nota: { tipus: 'tip', text: 'Prova els mètodes **per separat**: canvia l\'array del `main` per `{2, 3, 1, 4}` i comprova que la mitjana és 2.5, la més alta 4.0 i els aprovats 0. Provar peces menudes és quasi sempre més fàcil que provar el programa sencer.' } }
        ]
      },
      {
        titol: 'La qualificació, un mètode que torna text',
        blocs: [
          { p: 'Ara la peça que convertix la nota en text. Es pot provar tota sola amb notes de la frontera.' },
          { codi: {
            titol: 'Analitzador.java',
            etiqueta: 'PAS 4',
            text: `public class Analitzador {
    public static String qualificacio(double nota) {
        if (nota < 5) {
            return "Insuficient";
        } else if (nota < 6) {
            return "Suficient";
        } else if (nota < 7) {
            return "Bé";
        } else if (nota < 9) {
            return "Notable";
        } else {
            return "Excel·lent";
        }
    }

    public static void main(String[] args) {
        System.out.println("4.99 → " + qualificacio(4.99));
        System.out.println("5.00 → " + qualificacio(5.00));
        System.out.println("8.99 → " + qualificacio(8.99));
        System.out.println("9.00 → " + qualificacio(9.00));
    }
}`,
            sortida: `4.99 → Insuficient
5.00 → Suficient
8.99 → Notable
9.00 → Excel·lent`
          } },
          { p: 'El `else` final és el que fa que el mètode sempre torne un text. Si ens el deixàrem, Java diria: «This method must return a result of type String», perquè hi hauria un camí possible sense `return`.' }
        ]
      },
      {
        titol: 'L\'informe i el main de tres línies',
        blocs: [
          { p: 'Ja tenim totes les peces. Ara un mètode que les cride i fa l\'informe, i un `main` que quede ben curt.' },
          { codi: {
            titol: 'Analitzador.java',
            etiqueta: 'PAS 5',
            text: `import java.util.Scanner;

public class Analitzador {
    public static double[] llegirNotes(int quants) {
        Scanner teclat = new Scanner(System.in);
        double[] notes = new double[quants];

        for (int i = 0; i < notes.length; i++) {
            System.out.print("Nota " + (i + 1) + ": ");
            notes[i] = teclat.nextDouble();
        }
        return notes;
    }

    public static double mitjana(double[] notes) {
        double suma = 0;
        for (int i = 0; i < notes.length; i++) {
            suma = suma + notes[i];
        }
        return suma / notes.length;
    }

    public static double maxim(double[] notes) {
        double max = notes[0];
        for (int i = 1; i < notes.length; i++) {
            if (notes[i] > max) {
                max = notes[i];
            }
        }
        return max;
    }

    public static int aprovats(double[] notes) {
        int quants = 0;
        for (int i = 0; i < notes.length; i++) {
            if (notes[i] >= 5) {
                quants++;
            }
        }
        return quants;
    }

    public static String qualificacio(double nota) {
        if (nota < 5) {
            return "Insuficient";
        } else if (nota < 6) {
            return "Suficient";
        } else if (nota < 7) {
            return "Bé";
        } else if (nota < 9) {
            return "Notable";
        } else {
            return "Excel·lent";
        }
    }

    public static void mostraInforme(double[] notes) {
        double mitjanaClasse = mitjana(notes);

        System.out.println("=== INFORME DE LA CLASSE ===");
        System.out.println("Nombre de notes: " + notes.length);
        System.out.println("Mitjana: " + mitjanaClasse);
        System.out.println("Nota més alta: " + maxim(notes));
        System.out.println("Aprovats: " + aprovats(notes) + " de " + notes.length);
        System.out.println("Qualificació mitjana: " + qualificacio(mitjanaClasse));
        System.out.println("============================");
    }

    public static void main(String[] args) {
        double[] notes = llegirNotes(4);
        mostraInforme(notes);
    }
}`,
            entrada: '6\n7\n6\n9\n',
            sortida: `Nota 1: Nota 2: Nota 3: Nota 4: === INFORME DE LA CLASSE ===
Nombre de notes: 4
Mitjana: 7.0
Nota més alta: 9.0
Aprovats: 4 de 4
Qualificació mitjana: Notable
============================`,
            sortidaMostrada: `Nota 1: 6
Nota 2: 7
Nota 3: 6
Nota 4: 9
=== INFORME DE LA CLASSE ===
Nombre de notes: 4
Mitjana: 7.0
Nota més alta: 9.0
Aprovats: 4 de 4
Qualificació mitjana: Notable
============================`
          } },
          { p: '`main` té **dos línies**. Tota la faena està dins de mètodes amb nom. Si un dia el programa va malament, podem provar cada peça per separat i trobar el problema en minuts.' },
          { nota: { tipus: 'tip', text: 'Dins de `mostraInforme` hem guardat la mitjana en una variable perquè la usem dos vegades (mostrar-la i qualificar-la). Es podria cridar `mitjana(notes)` dos vegades, però llavors el programa tornaria a recórrer l\'array sense necessitat.' } }
        ]
      },
      {
        titol: 'Proves, casos límit i millores',
        blocs: [
          { p: 'El programa funciona, però un bon programador el tortura una mica abans de donar-lo per acabat:' },
          { taula: {
            cap: ['Què provem', 'Què ha de passar'],
            files: [
              ['Notes de la frontera (5, 7, 9)', 'Qualificacions: Suficient, Notable, Excel·lent'],
              ['Totes les notes iguals', 'Mitjana igual a eixa nota i aprovats = tots'],
              ['Una nota de 0', 'Vàlida: és un valor com qualsevol altre'],
              ['Una nota de 12', 'El programa no avisa: podríem afegir `esNotaValida`'],
              ['Un text en compte d\'un número', '`InputMismatchException` (tema 1)']
            ]
          } },
          { p: 'I les millores que pots fer tu: un mètode `esNotaValida(double nota)` que rebutge notes fora del 0-10, un mètode `minim` per a la nota més baixa, quantes notes són suspeses, i que el programa demane quantes notes hi haurà abans de començar.' }
        ]
      }
    ]
  },

  mini: {
    intro: 'Activitats molt curtes, totes amb mètodes.',
    exercicis: [
      {
        id: 'mini1', titol: 'El primer mètode', dificultat: 'facil', temps: '3 min',
        enunciat: 'Escriu un mètode `presentacio()` que escriga el teu nom i el curs, i crida\'l dos vegades des de `main`.',
        solucio: {
          titol: 'Presentacio.java',
          text: `public class Presentacio {
    public static void presentacio() {
        System.out.println("Soc un alumne d'SMX");
        System.out.println("I estic aprenent Java");
    }

    public static void main(String[] args) {
        presentacio();
        presentacio();
    }
}`,
          sortida: `Soc un alumne d'SMX
I estic aprenent Java
Soc un alumne d'SMX
I estic aprenent Java`,
          perque: 'El mètode no necessita cap dada i no torna res (`void`). El codi s\'escriu una vegada i s\'executa dos. Si volem canviar el missatge, es canvia en un sol lloc.'
        }
      },
      {
        id: 'mini2', titol: 'Amb un paràmetre', dificultat: 'facil', temps: '4 min',
        enunciat: 'Fes un mètode `saluda(String nom)` que diga «Hola, X! Què tal?» i crida\'l amb tres noms.',
        solucio: {
          titol: 'Saluda.java',
          text: `public class Saluda {
    public static void saluda(String nom) {
        System.out.println("Hola, " + nom + "! Què tal?");
    }

    public static void main(String[] args) {
        saluda("Marta");
        saluda("Iván");
        saluda("Nerea");
    }
}`,
          sortida: `Hola, Marta! Què tal?
Hola, Iván! Què tal?
Hola, Nerea! Què tal?`,
          perque: '`String nom` és el paràmetre: la dada que el mètode necessita. En cada crida se li passa un argument diferent i el mateix codi funciona per a qualsevol nom.'
        }
      },
      {
        id: 'mini3', titol: 'El quadrat d\'un número', dificultat: 'facil', temps: '4 min',
        enunciat: 'Escriu un mètode `quadrat(int n)` que torne `n * n` i mostra el quadrat de 3, 7 i 12.',
        exemple: { entrada: '(no demana dades)', sortida: 'El quadrat de 3 és 9\nEl quadrat de 7 és 49\nEl quadrat de 12 és 144' },
        solucio: {
          titol: 'Quadrat.java',
          text: `public class Quadrat {
    public static int quadrat(int n) {
        return n * n;
    }

    public static void main(String[] args) {
        System.out.println("El quadrat de 3 és " + quadrat(3));
        System.out.println("El quadrat de 7 és " + quadrat(7));
        System.out.println("El quadrat de 12 és " + quadrat(12));
    }
}`,
          sortida: `El quadrat de 3 és 9
El quadrat de 7 és 49
El quadrat de 12 és 144`,
          perque: 'Com que torna un `int`, el cap porta `int` en compte de `void`. El resultat es pot usar directament dins de la concatenació.'
        }
      },
      {
        id: 'mini4', titol: 'Una pregunta amb nom', dificultat: 'mitjana', temps: '4 min',
        enunciat: 'Escriu un mètode `esMajor(int edat)` que torne si l\'edat és de 18 anys o més, i usa\'l dins d\'un `if` per a dir si una persona pot conduir.',
        exemple: { entrada: '(no demana dades)', sortida: 'Amb 17 anys, no pot conduir.' },
        solucio: {
          titol: 'Major.java',
          text: `public class Major {
    public static boolean esMajor(int edat) {
        return edat >= 18;
    }

    public static void main(String[] args) {
        int edat = 17;

        if (esMajor(edat)) {
            System.out.println("Amb " + edat + " anys, pot conduir.");
        } else {
            System.out.println("Amb " + edat + " anys, no pot conduir.");
        }
    }
}`,
          sortida: 'Amb 17 anys, no pot conduir.',
          perque: 'El mètode torna un `boolean` perquè és una **pregunta**. Comparar l\'edat està dins del mètode, i `main` només llig la pregunta: `if (esMajor(edat))`.'
        }
      },
      {
        id: 'mini5', titol: 'Mostrar un array', dificultat: 'mitjana', temps: '5 min',
        enunciat: 'Escriu un mètode `mostraNoms(String[] noms)` que mostre tots els noms d\'un array, cadascun en una línia.',
        solucio: {
          titol: 'MostraNoms.java',
          text: `public class MostraNoms {
    public static void mostraNoms(String[] noms) {
        for (int i = 0; i < noms.length; i++) {
            System.out.println((i + 1) + ". " + noms[i]);
        }
    }

    public static void main(String[] args) {
        String[] grup = {"Ana", "Bruno", "Carla"};
        mostraNoms(grup);
    }
}`,
          sortida: `1. Ana
2. Bruno
3. Carla`,
          perque: 'És un mètode `void` perquè el seu treball és mostrar, no tornar un valor. El paràmetre és un array de textos, així que el bucle pot recórrer-lo amb `noms.length`.'
        }
      },
      {
        id: 'mini6', titol: 'Troba l\'error: falta el return', dificultat: 'mitjana', temps: '5 min',
        enunciat: 'Este mètode no compila. Copia\'l, llig el missatge i arregla\'l.',
        codi: {
          titol: 'Trencat.java',
          mal: true,
          text: `public static int dobla(int n) {
    System.out.println(n * 2);
}`
        },
        pista: 'El cap del mètode diu que torna un `int`. I el cos, què torna?',
        solucio: {
          titol: 'Arreglat.java',
          text: `public class Dobla {
    public static int dobla(int n) {
        return n * 2;
    }

    public static void main(String[] args) {
        System.out.println("El doble de 5 és " + dobla(5));
    }
}`,
          sortida: 'El doble de 5 és 10',
          perque: 'Un mètode que diu `int` en el cap està obligat a tornar un `int` amb `return`. Escriure-ho amb `println` no servix: això mostra el valor en pantalla, però no el torna. Si el que volem és mostrar-lo, el mètode hauria de ser `void`.'
        }
      },
      {
        id: 'mini7', titol: 'Comptar vocals, ara com a mètode', dificultat: 'repte', temps: '10 min',
        enunciat: 'Escriu un mètode `comptaVocals(String text)` que torne quantes vocals té el text, i usa\'l per a comparar dues paraules.',
        exemple: { entrada: '(no demana dades)', sortida: 'primavera té 4 vocals\nespardenya té 4 vocals' },
        solucio: {
          titol: 'ComptaVocals.java',
          text: `public class ComptaVocals {
    public static int comptaVocals(String text) {
        int vocals = 0;

        for (int i = 0; i < text.length(); i++) {
            char lletra = Character.toLowerCase(text.charAt(i));

            if (lletra == 'a' || lletra == 'e' || lletra == 'i' || lletra == 'o' || lletra == 'u') {
                vocals++;
            }
        }

        return vocals;
    }

    public static void main(String[] args) {
        System.out.println("primavera té " + comptaVocals("primavera") + " vocals");
        System.out.println("espardenya té " + comptaVocals("espardenya") + " vocals");
    }
}`,
          sortida: `primavera té 4 vocals
espardenya té 4 vocals`,
          perque: 'El bucle i el comptador estan dins del mètode, i el resultat ix amb `return`. Ara podem comptar les vocals de qualsevol text, tantes vegades com vullguem, sense tornar a escriure el bucle.'
        }
      }
    ]
  },

  principals: {
    intro: 'Quatre exercicis complets. Pensa sempre: quants mètodes necessite i què torna cadascun?',
    exercicis: [
      {
        id: 'ex1', titol: 'La calculadora', dificultat: 'facil', temps: '20 min',
        enunciat: 'Fes una calculadora amb quatre mètodes: `suma`, `resta`, `multiplica` i `divideix` (tots amb dos `double`). La divisió ha de tornar 0 si el segon número és 0, i el programa ho ha d\'avisar.',
        exemple: {
          entrada: 'Primer número: 10\nSegon número: 4',
          sortida: 'Suma: 14.0\nResta: 6.0\nMultiplicació: 40.0\nDivisió: 2.5'
        },
        solucio: {
          titol: 'Calculadora.java',
          text: `import java.util.Scanner;

public class Calculadora {
    public static double suma(double a, double b) {
        return a + b;
    }

    public static double resta(double a, double b) {
        return a - b;
    }

    public static double multiplica(double a, double b) {
        return a * b;
    }

    public static double divideix(double a, double b) {
        if (b == 0) {
            return 0;
        }
        return a / b;
    }

    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Primer número: ");
        double a = teclat.nextDouble();

        System.out.print("Segon número: ");
        double b = teclat.nextDouble();

        System.out.println("Suma: " + suma(a, b));
        System.out.println("Resta: " + resta(a, b));
        System.out.println("Multiplicació: " + multiplica(a, b));

        if (b == 0) {
            System.out.println("No es pot dividir per zero.");
        } else {
            System.out.println("Divisió: " + divideix(a, b));
        }
    }
}`,
          entrada: '10\n4\n',
          sortida: `Primer número: Segon número: Suma: 14.0
Resta: 6.0
Multiplicació: 40.0
Divisió: 2.5`,
          sortidaMostrada: `Primer número: 10
Segon número: 4
Suma: 14.0
Resta: 6.0
Multiplicació: 40.0
Divisió: 2.5`,
          perque: 'Cada operació viu en el seu mètode, i `main` només demana les dades i mostra els resultats. `divideix` protegix la divisió per zero dins del mètode, i `main` ho avisa a l\'usuari abans de cridar-la.'
        },
        pista: 'Els quatre mètodes tenen la mateixa forma: dos `double` com a paràmetres i un `double` de retorn. El `if` del zero va dins de `divideix`.'
      },
      {
        id: 'ex2', titol: 'El butlletí de notes', dificultat: 'mitjana', temps: '30 min',
        enunciat: 'Demana 5 notes i mostra un butlletí amb: cada nota amb la seua qualificació, la mitjana de la classe, la nota més alta i quants aprovats hi ha. Tot ha d\'estar fet amb mètodes.',
        exemple: {
          entrada: 'Nota 1: 6\nNota 2: 4\nNota 3: 9\nNota 4: 7\nNota 5: 5',
          sortida: '=== BUTLLETÍ ===\nNota 1: 6.0 → Bé\nNota 2: 4.0 → Insuficient\n...\nMitjana: 6.2\nMés alta: 9.0\nAprovats: 4 de 5'
        },
        solucio: {
          titol: 'ButlletiNotes.java',
          text: `import java.util.Scanner;

public class ButlletiNotes {
    public static double[] llegirNotes(int quants) {
        Scanner teclat = new Scanner(System.in);
        double[] notes = new double[quants];

        for (int i = 0; i < notes.length; i++) {
            System.out.print("Nota " + (i + 1) + ": ");
            notes[i] = teclat.nextDouble();
        }
        return notes;
    }

    public static String qualificacio(double nota) {
        if (nota < 5) {
            return "Insuficient";
        } else if (nota < 6) {
            return "Suficient";
        } else if (nota < 7) {
            return "Bé";
        } else if (nota < 9) {
            return "Notable";
        } else {
            return "Excel·lent";
        }
    }

    public static double mitjana(double[] notes) {
        double suma = 0;
        for (int i = 0; i < notes.length; i++) {
            suma = suma + notes[i];
        }
        return suma / notes.length;
    }

    public static double maxim(double[] notes) {
        double max = notes[0];
        for (int i = 1; i < notes.length; i++) {
            if (notes[i] > max) {
                max = notes[i];
            }
        }
        return max;
    }

    public static int aprovats(double[] notes) {
        int quants = 0;
        for (int i = 0; i < notes.length; i++) {
            if (notes[i] >= 5) {
                quants++;
            }
        }
        return quants;
    }

    public static void main(String[] args) {
        double[] notes = llegirNotes(5);

        System.out.println("=== BUTLLETÍ ===");
        for (int i = 0; i < notes.length; i++) {
            System.out.println("Nota " + (i + 1) + ": " + notes[i] + " → " + qualificacio(notes[i]));
        }

        System.out.println("Mitjana: " + mitjana(notes));
        System.out.println("Més alta: " + maxim(notes));
        System.out.println("Aprovats: " + aprovats(notes) + " de " + notes.length);
    }
}`,
          entrada: '6\n4\n9\n7\n5\n',
          sortida: `Nota 1: Nota 2: Nota 3: Nota 4: Nota 5: === BUTLLETÍ ===
Nota 1: 6.0 → Bé
Nota 2: 4.0 → Insuficient
Nota 3: 9.0 → Excel·lent
Nota 4: 7.0 → Notable
Nota 5: 5.0 → Suficient
Mitjana: 6.2
Més alta: 9.0
Aprovats: 4 de 5`,
          sortidaMostrada: `Nota 1: 6
Nota 2: 4
Nota 3: 9
Nota 4: 7
Nota 5: 5
=== BUTLLETÍ ===
Nota 1: 6.0 → Bé
Nota 2: 4.0 → Insuficient
Nota 3: 9.0 → Excel·lent
Nota 4: 7.0 → Notable
Nota 5: 5.0 → Suficient
Mitjana: 6.2
Més alta: 9.0
Aprovats: 4 de 5`,
          perque: 'Cada peça fa una cosa i la fa bé: llegir, qualificar, calcular, mostrar. En `main` es veu l\'estructura del programa en poques línies. Fixa\'t que `qualificacio` s\'usa dins del bucle per a cada nota.'
        },
        pista: 'Fes primer els mètodes de càlcul (que pots provar amb un array escrit per tu) i al final el `main` que ho ajunta tot.'
      },
      {
        id: 'ex3', titol: 'El gràfic de les notes', dificultat: 'mitjana', temps: '25 min',
        enunciat: 'Demana 6 notes (de 0 a 10) i dibuixa un gràfic de barres: una línia per alumne amb tantes estrelles com la seua nota (arredonida a l\'enter més pròxim). Afig al final una línia de `=` de la llargària de la mitjana.',
        exemple: {
          entrada: 'Nota 1: 6\nNota 2: 9\nNota 3: 4',
          sortida: 'Alumne 1: ******\nAlumne 2: *********\nAlumne 3: ****\nMitjana: ======='
        },
        solucio: {
          titol: 'GraficNotes.java',
          text: `import java.util.Scanner;

public class GraficNotes {
    public static void barra(int quantitat) {
        for (int i = 0; i < quantitat; i++) {
            System.out.print("*");
        }
        System.out.println();
    }

    public static double[] llegirNotes(int quants) {
        Scanner teclat = new Scanner(System.in);
        double[] notes = new double[quants];

        for (int i = 0; i < notes.length; i++) {
            System.out.print("Nota " + (i + 1) + ": ");
            notes[i] = teclat.nextDouble();
        }
        return notes;
    }

    public static double mitjana(double[] notes) {
        double suma = 0;
        for (int i = 0; i < notes.length; i++) {
            suma = suma + notes[i];
        }
        return suma / notes.length;
    }

    public static void main(String[] args) {
        double[] notes = llegirNotes(6);

        for (int i = 0; i < notes.length; i++) {
            System.out.print("Alumne " + (i + 1) + ": ");
            barra((int) Math.round(notes[i]));
        }

        System.out.print("Mitjana: ");
        barra((int) Math.round(mitjana(notes)));
    }
}`,
          entrada: '6\n9\n4\n8\n7\n5\n',
          sortida: `Nota 1: Nota 2: Nota 3: Nota 4: Nota 5: Nota 6: Alumne 1: ******
Alumne 2: *********
Alumne 3: ****
Alumne 4: ********
Alumne 5: *******
Alumne 6: *****
Mitjana: *******
`,
          sortidaMostrada: `Nota 1: 6
Nota 2: 9
Nota 3: 4
Nota 4: 8
Nota 5: 7
Nota 6: 5
Alumne 1: ******
Alumne 2: *********
Alumne 3: ****
Alumne 4: ********
Alumne 5: *******
Alumne 6: *****
Mitjana: *******`,
          perquè: '',
          perque: 'El mètode `barra` fa una sola cosa: dibuixar. `Math.round` arredoniXn el decimal a l\'enter més pròxim i el `(int)` el convertix a enter perquè `barra` espera un `int`. Amb la mitjana (6.5) arredonim a 7 estrelles.'
        },
        pista: 'Escriu primer `barra(int quantitat)` i prova-la amb 3 i amb 8. Després ja la pots usar per a cada alumne.'
      },
      {
        id: 'ex4', titol: 'Refactoritza el rànquing del Tema 4', dificultat: 'repte', temps: '30 min',
        enunciat: 'Agafa el programa del rànquing del tema anterior (5 punts, total, mitjana, màxim, mínim i quants per damunt de la mitjana) i dividix-lo en mètodes. `main` no ha de tindre cap bucle ni cap càlcul: només crides a mètodes.',
        exemple: {
          entrada: 'Punts del jugador 1: 120\n...\nPunts del jugador 5: 145',
          sortida: 'Total: 600 punts\nMitjana: 120.0\nMillor: 180 pitjor: 60\nPer damunt de la mitjana: 2'
        },
        solucio: {
          titol: 'RankingMetodes.java',
          text: `import java.util.Scanner;

public class RankingMetodes {
    public static int[] llegirPunts(int quants) {
        Scanner teclat = new Scanner(System.in);
        int[] punts = new int[quants];

        for (int i = 0; i < punts.length; i++) {
            System.out.print("Punts del jugador " + (i + 1) + ": ");
            punts[i] = teclat.nextInt();
        }
        return punts;
    }

    public static int total(int[] valors) {
        int suma = 0;
        for (int i = 0; i < valors.length; i++) {
            suma = suma + valors[i];
        }
        return suma;
    }

    public static double mitjana(int[] valors) {
        return total(valors) / (double) valors.length;
    }

    public static int maxim(int[] valors) {
        int max = valors[0];
        for (int i = 1; i < valors.length; i++) {
            if (valors[i] > max) {
                max = valors[i];
            }
        }
        return max;
    }

    public static int minim(int[] valors) {
        int min = valors[0];
        for (int i = 1; i < valors.length; i++) {
            if (valors[i] < min) {
                min = valors[i];
            }
        }
        return min;
    }

    public static int perDamuntDe(int[] valors, double llindar) {
        int quants = 0;
        for (int i = 0; i < valors.length; i++) {
            if (valors[i] > llindar) {
                quants++;
            }
        }
        return quants;
    }

    public static void main(String[] args) {
        int[] punts = llegirPunts(5);
        double mitjanaPunts = mitjana(punts);

        System.out.println("Total: " + total(punts) + " punts");
        System.out.println("Mitjana: " + mitjanaPunts + " punts");
        System.out.println("Millor: " + maxim(punts) + " punts i pitjor: " + minim(punts) + " punts");
        System.out.println("Per damunt de la mitjana: " + perDamuntDe(punts, mitjanaPunts) + " jugadors");
    }
}`,
          entrada: '120\n95\n180\n60\n145\n',
          sortida: `Punts del jugador 1: Punts del jugador 2: Punts del jugador 3: Punts del jugador 4: Punts del jugador 5: Total: 600 punts
Mitjana: 120.0 punts
Millor: 180 punts i pitjor: 60 punts
Per damunt de la mitjana: 2 jugadors`,
          sortidaMostrada: `Punts del jugador 1: 120
Punts del jugador 2: 95
Punts del jugador 3: 180
Punts del jugador 4: 60
Punts del jugador 5: 145
Total: 600 punts
Mitjana: 120.0 punts
Millor: 180 punts i pitjor: 60 punts
Per damunt de la mitjana: 2 jugadors`,
          perque: 'Cada càlcul té ara el seu nom i `main` es llig com un resum del programa. Fixa\'t que `mitjana` usa `total` dins (un mètode pot usar-ne un altre) i que `perDamuntDe` rep **dos** paràmetres: l\'array i el llindar.'
        },
        pista: 'Comença pels mètodes que ja coneixes (total, maxim, minim) copiant el codi del tema 4, i deixa el `main` per al final.'
      }
    ]
  },

  reptes: {
    reptes: [
      {
        titol: 'El joc de les endevinalles, amb mètodes',
        blocs: [
          { p: 'Fes el joc d\'endevinar el número (Tema 3) dividit en mètodes: un que demane un número vàlid a l\'usuari, un que done la pista («més gran» o «més menut»), un que comprove si s\'ha encertat i un que mostre el resultat final amb els intents.' },
          { p: 'El repte és decidir **què torna** cada mètode: el que demana el número torna un `int`, el de la pista no torna res (`void`, només escriu), el de comprovar torna un `boolean`… Pensar les firmes abans d\'escriure el codi és mitat de la faena.' },
          { p: 'Afig una dificultat: l\'usuari pot triar entre 1 i 10 intents i el programa ha de demanar el nivell en un mètode a banda.' }
        ],
        ampliacions: [
          'Que el número secret es genere sol amb `(int) (Math.random() * 100) + 1`.',
          'Un mètode que torne la temperatura de l\'intent: «calent» si la diferència és menuda, «fred» si és gran.',
          'Comptar les partides guanyades i perdudes i mostrar un resum al final.'
        ]
      },
      {
        titol: 'La biblioteca pròpia de ferramentes',
        blocs: [
          { p: 'Crea una classe `Ferramentes` amb mètodes que pugues reutilitzar en qualsevol programa. Com a mínim: `esParell(int n)`, `maxim(int[] valors)`, `minim(int[] valors)`, `mitjana(int[] valors)`, `comptaVocals(String text)`, `invertix(String text)` (que torne el text del revés) i `esPrimer(int n)`.' },
          { p: 'Després escriu un segon programa que use eixa biblioteca per a tres coses distintes. Eixe és l\'objectiu real del tema: **escriure una vegada i usar sempre**.' },
          { p: '`esPrimer(int n)` és el més interessant: un número és primer si només es pot dividir per 1 i per si mateix. Pensa com ho comprovaries amb un bucle i una variable bandera… i compte amb l\'1 i amb el 2, que són casos especials.' }
        ],
        ampliacions: [
          'Afig `arredona(double valor, int decimals)`.',
          'Afig `conte(int[] valors, int buscat)` que torne `boolean`.',
          'Afig `posicioDe(String[] llista, String buscat)` que torne la posició o -1 si no està.'
        ]
      }
    ]
  },

  errors: {
    entradeta: 'Els errors d\'este tema parlen quasi sempre de tres coses: els tipus, els parèntesis i el return.',
    errors: [
      {
        titol: 'Oblidar el return en un mètode que ha de tornar un valor',
        mal: { titol: 'Mal.java', text: `public static int suma(int a, int b) {\n    System.out.println(a + b);\n}`, missatge: 'error: This method must return a result of type int\n    public static int suma(int a, int b) {\n                  ^^^^^^^^^^^^^^^^^^' },
        bo: { titol: 'Be.java', text: `public static int suma(int a, int b) {\n    return a + b;\n}` },
        que: 'El programa no compila.',
        perque: 'El cap del mètode diu que torna un `int`, però el cos no torna res: només escriu per pantalla. `println` mostra el valor a la persona, però **no el torna** al programa.',
        detectar: 'El missatge és clar: `This method must return a result of type int`. També apareix si el `return` està dins d\'un `if` sense `else` i hi ha un camí que no torna res.',
        corregir: 'Fes servir `return a + b;` si vols tornar el valor, o canvia el cap a `public static void` si el que vols és mostrar-lo. **Les dos coses alhora no es poden**: o es torna un valor o no es torna.'
      },
      {
        titol: 'Passar arguments del tipus equivocat',
        mal: { titol: 'Mal.java', text: `public static int suma(int a, int b) {\n    return a + b;\n}\n\npublic static void main(String[] args) {\n    int r = suma(2.5, 3.5);  // ERROR\n}`, missatge: 'error: The method suma(int, int) in the type Mal is not applicable for the arguments (double, double)\n        int r = suma(2.5, 3.5);\n                ^^^^' },
        bo: { titol: 'Be.java', text: `public static double suma(double a, double b) {\n    return a + b;\n}\n\npublic static void main(String[] args) {\n    double r = suma(2.5, 3.5);\n}` },
        que: 'El programa no compila.',
        perque: 'El mètode espera dos `int` i li passem dos `double`. Java no convertix un `double` a `int` automàticament perquè es perdrien decimals.',
        detectar: 'El missatge diu «not applicable for the arguments» i mostra els tipus que has passat.',
        corregir: 'Canvia els tipus del mètode perquè coincidisquen amb les dades (`double` en compte de `int`), o passa-li enters si el mètode és d\'enters.'
      },
      {
        titol: 'Cridar un mètode amb menys paràmetres dels que demana',
        mal: { titol: 'Mal.java', text: `public static void saluda(String nom) {\n    System.out.println("Hola, " + nom);\n}\n\npublic static void main(String[] args) {\n    saluda();   // ERROR: falta el text\n}`, missatge: 'error: The method saluda(String) in the type Mal is not applicable for the arguments ()\n        saluda();\n        ^^^^^^' },
        bo: { titol: 'Be.java', text: `public static void saluda(String nom) {\n    System.out.println("Hola, " + nom);\n}\n\npublic static void main(String[] args) {\n    saluda("Ana");\n}` },
        que: 'El programa no compila.',
        perque: 'El mètode necessita un text per a funcionar. Sense ell, no sabria a qui saludar.',
        detectar: 'El missatge mostra el mètode amb el seu paràmetre —`saluda(String)`— i els arguments que has passat —`()`, buit—.',
        corregir: 'Passa-li tots els arguments que demana: `saluda("Ana")`. Els parèntesis de la crida han de portar tants valors com paràmetres tinga el cap del mètode.'
      },
      {
        titol: 'Oblidar el static',
        mal: { titol: 'Mal.java', text: `public static void main(String[] args) {\n    saluda();   // ERROR\n}\n\npublic void saluda() {\n    System.out.println("Hola");\n}`, missatge: 'error: Cannot make a static reference to the non-static method saluda() from the type Mal\n        saluda();\n        ^^^^^^' },
        bo: { titol: 'Be.java', text: `public static void main(String[] args) {\n    saluda();\n}\n\npublic static void saluda() {\n    System.out.println("Hola");\n}` },
        que: 'El programa no compila i assenyala la crida.',
        perque: '`main` és un mètode especial: pot cridar directament els mètodes que també siguen estàtics. Als que no ho són, no pot arribar així.',
        detectar: 'Missatge `Cannot make a static reference to the non-static method`.',
        corregir: 'De moment, i fins al Tema 6, posa `static` en **tots** els mètodes de la classe. Al tema següent descobrirem què significa exactament.'
      },
      {
        titol: 'Definir un mètode dins d\'un altre mètode',
        mal: { titol: 'Mal.java', text: `public static void main(String[] args) {\n    System.out.println("Hola");\n\n    public static void saluda() {   // ERROR\n        System.out.println("No es pot ficar ací");\n    }\n}`, missatge: 'error: Syntax error on token "saluda", AnnotationName expected after this token\n    public static void saluda() {\n                     ^^^^^' },
        bo: { titol: 'Be.java', text: `public static void saluda() {\n    System.out.println("Hola desde saluda");\n}\n\npublic static void main(String[] args) {\n    saluda();\n}` },
        que: 'El programa no compila i el missatge parla d\'una «annotation» que no entenem.',
        perque: 'En Java, els mètodes es definixen **un darrere l\'altre**, tots dins de la classe, mai dins del cos d\'un altre mètode.',
        detectar: 'Missatge estrany al principi del mètode definit a dins. Si el missatge no té sentit, mira si et falta una clau `}` per a tancar el mètode anterior.',
        corregir: 'Tanca el mètode amb `}` i definix el nou mètode fora, junt als altres, dins de la classe.'
      },
      {
        titol: 'Esperar que un mètode void done un valor',
        mal: { titol: 'Mal.java', text: `public static void mostra(int n) {\n    System.out.println("Valor: " + n);\n}\n\npublic static void main(String[] args) {\n    int x = mostra(5);   // ERROR: un void no torna res\n}` },
        bo: { titol: 'Be.java', text: `public static void mostra(int n) {\n    System.out.println("Valor: " + n);\n}\n\npublic static void main(String[] args) {\n    mostra(5);\n}` },
        que: 'El programa no compila: no es pot guardar en una variable el resultat d\'un mètode `void`.',
        perque: 'Un `void` no torna res, així que no hi ha res per a guardar. El mètode ja ha fet la seua faena (escriure per pantalla).',
        detectar: 'El missatge parla de «void cannot be converted to int» o paregut, segons el cas.',
        corregir: 'O bé crides el mètode sense guardar res (`mostra(5);`), o bé si vols el valor, canvia el mètode perquè **torne** el valor amb `return` i un tipus en el cap.'
      }
    ]
  },

  resum: {
    entradeta: 'Les idees que has d\'endur-te d\'este tema.',
    idees: [
      'Un **mètode** és un tros de programa amb nom que es pot cridar les voltes que calga.',
      'El **cap** diu com es diu i què torna; el **cos** diu què fa.',
      'Els **paràmetres** són les dades que el mètode necessita; els **arguments** són els valors que li passem.',
      '`void` = no torna res; qualsevol altre tipus = **`return`** que torna un valor d\'eixe tipus.',
      '`return` torna el valor **i acaba el mètode** immediatament.',
      'Si un mètode diu que torna alguna cosa, **tots** els camins han de tornar-la.',
      'Les variables d\'un mètode només existixen dins d\'eixe mètode (àmbit).',
      'Als mètodes es passen arrays com qualsevol altra dada, i es poden tornar arrays.',
      'Un mètode pot cridar altres mètodes: el programa es construïx com un joc de peces.',
      '`main` hauria de ser l\'esquelet: crides a mètodes amb noms que s\'entenen.'
    ]
  },

  autoavaluacio: {
    entradeta: 'Nou preguntes. Pensa-les abans de mirar la solució.',
    preguntes: [
      {
        pregunta: 'Què significa `void` en el cap d\'un mètode?',
        opcions: ['Que el mètode està buit i no fa res', 'Que el mètode no torna cap valor', 'Que el mètode no necessita paràmetres'],
        resposta: 'b) Que el mètode no torna cap valor.',
        perque: 'Un mètode `void` pot fer molta faena (escriure, dibuixar, guardar), però no torna res: no es pot guardar el seu resultat en una variable.'
      },
      {
        pregunta: 'Quantes vegades apareix per pantalla «Hola» amb este codi?',
        codi: { titol: 'Pregunta.java', text: `public static void saluda() {\n    System.out.println("Hola");\n}\n\npublic static void main(String[] args) {\n    saluda();\n    saluda();\n}` },
        resposta: 'Dos vegades.',
        perque: 'El mètode es defineix una vegada i es crida dos. Escriure un mètode **no** l\'executa: només el deixa preparat. S\'executa en el moment de la crida.'
      },
      {
        pregunta: 'Quina diferència hi ha entre paràmetre i argument?',
        resposta: 'El paràmetre està en el cap del mètode (`String nom`); l\'argument és el valor que es passa en la crida (`saluda("Ana")`).',
        perque: 'El paràmetre és el nom que li donem a la dada dins del mètode; l\'argument és la dada concreta de cada crida.'
      },
      {
        pregunta: 'Este mètode no compila. Per què?',
        codi: { titol: 'Pregunta.java', text: `public static int dobla(int n) {\n    System.out.println(n * 2);\n}` },
        resposta: 'Perquè diu que torna un `int`, però no té cap `return`.',
        perque: '`println` mostra el valor en pantalla, però no el torna. El missatge del compilador és `This method must return a result of type int`. Si el que volem és mostrar, el mètode hauria de ser `void`.'
      },
      {
        pregunta: 'Escriu un mètode que torne el número més gran de dos enters.',
        resposta: '`public static int maxim(int a, int b) { if (a > b) { return a; } return b; }`',
        perque: 'Cap dels dos camins es queda sense tornar res: si `a > b` torna `a`, i si no, arriba al `return b`. Els dos `return` són vàlids perquè el mètode diu `int`.'
      },
      {
        pregunta: 'Quina diferència hi ha entre `System.out.println(x);` i `return x;` dins d\'un mètode?',
        resposta: '`println` mostra el valor a la pantalla; `return` torna el valor al programa i acaba el mètode.',
        perque: 'Són dos móns distints: un és per a la persona que usa el programa, l\'altre és perquè el programa puga seguir treballant amb eixe valor.'
      },
      {
        pregunta: 'Este codi dona error. Per què?',
        codi: { titol: 'Pregunta.java', text: `public static void main(String[] args) {\n    int resultat = mostra(5);\n}\n\npublic static void mostra(int n) {\n    System.out.println("Valor: " + n);\n}` },
        resposta: 'Perquè `mostra` és `void` i no torna res, així que no es pot guardar en una variable.',
        perque: 'Si vols el valor per a treballar amb ell, el mètode ha de tornar-lo: `public static int mostra(int n) { return n; }`. Si només vols escriure\'l, crida\'l sense assignar: `mostra(5);`.'
      },
      {
        pregunta: 'Escriu un mètode que calcule la mitjana d\'un array `double[] notes`.',
        resposta: '`public static double mitjana(double[] notes) { double suma = 0; for (int i = 0; i < notes.length; i++) { suma = suma + notes[i]; } return suma / notes.length; }`',
        perque: 'El paràmetre és un array i el mètode torna un `double`. El bucle recorre l\'array amb `notes.length` i el resultat ix amb `return`. Ara este càlcul es pot usar en qualsevol programa.'
      },
      {
        pregunta: 'Per què és bona idea dividir un programa gran en mètodes? Dóna almenys dos motius.',
        resposta: 'Perquè no repetim codi (si cal canviar alguna cosa, es canvia en un sol lloc) i perquè podem provar cada peça per separat i trobar els errors més fàcilment.',
        perque: 'A més, el programa es llig millor: `main` queda com un resum de passos amb noms que s\'entenen. I els mètodes es poden reutilitzar en altres programes.'
      }
    ]
  },

  /* ------------------------------------------------------- DIAPOSITIVES */
  diapositives: {
    objectiu: 'Escriure mètodes per a no repetir codi i construir programes grans a partir de peces menudes i provades.',
    index: [
      'El problema: codi repetit',
      'El primer mètode',
      'Paràmetres i arguments',
      'return: tornar valors',
      'void o amb retorn?',
      'Àmbit de les variables',
      'Mètodes amb arrays',
      'Pensar el problema en peces'
    ],
    blocs: [
      {
        tipus: 'concepte',
        titol: 'Per què mètodes?',
        bullets: [
          'El mateix càlcul, escrit vint vegades',
          'Un canvi → vint llocs on tocar-lo',
          'Solució: donar un nom a cada peça',
          'Ja n\'has usat: println, nextInt, length...'
        ],
        notes: 'Ensenyar dos trossos de codi idèntics al costat i preguntar què passa si cal canviar-los.'
      },
      {
        tipus: 'esquema',
        titol: 'Anatomia d\'un mètode',
        flux: ['public static', 'tipus de retorn', 'nom', '(paràmetres)', '{ cos }'],
        nota: 'El cap diu com es diu i què torna. El cos diu què fa. La crida és on s\'executa.'
      },
      {
        tipus: 'codi',
        titol: 'El primer mètode',
        codi: 'public static void saluda() {\n    System.out.println("Hola! Soc un mètode.");\n}\n\npublic static void main(String[] args) {\n    saluda();\n    saluda();\n}',
        sortida: 'Hola! Soc un mètode.\nHola! Soc un mètode.',
        notes: 'Insistir: definir un mètode no l\'executa. S\'executa en la crida.'
      },
      {
        tipus: 'codi',
        titol: 'Amb paràmetres',
        codi: 'public static void saluda(String nom) {\n    System.out.println("Hola, " + nom + "!");\n}\n\npublic static void main(String[] args) {\n    saluda("Ana");\n    saluda("Bruno");\n}',
        sortida: 'Hola, Ana!\nHola, Bruno!',
        notes: 'Paràmetre = String nom (al cap). Argument = "Ana" (a la crida).'
      },
      {
        tipus: 'codi',
        titol: 'return: tornar un valor',
        codi: 'public static int suma(int a, int b) {\n    return a + b;\n}\n\npublic static void main(String[] args) {\n    int r = suma(4, 7);\n    System.out.println("4 + 7 = " + r);\n    System.out.println("10 + 32 = " + suma(10, 32));\n}',
        sortida: '4 + 7 = 11\n10 + 32 = 42',
        notes: 'return fa dos treballs: torna el valor i acaba el mètode.'
      },
      {
        tipus: 'comparacio',
        titol: 'void o amb retorn?',
        esquerra: { titol: 'void', bullets: ['Fa faena i no torna res', 'Escriure, dibuixar, mostrar', 'No es pot guardar en una variable'] },
        dreta: { titol: 'Amb tipus', bullets: ['Torna un valor', 'int, double, boolean, String, int[]', 'Es pot guardar i usar'] }
      },
      {
        tipus: 'concepte',
        titol: 'Cadascú a sa casa',
        bullets: [
          'Les variables d\'un mètode només existixen dins',
          'Fora del mètode no es veuen',
          'Per això es poden repetir noms sense problema',
          'Portes: paràmetres (entrada) i return (eixida)'
        ],
        notes: 'Dibuixar dos caixes separades a la pissarra: main i el mètode.'
      },
      {
        tipus: 'codi',
        titol: 'Mètodes amb arrays',
        codi: 'public static double mitjana(double[] valors) {\n    double suma = 0;\n    for (int i = 0; i < valors.length; i++) {\n        suma = suma + valors[i];\n    }\n    return suma / valors.length;\n}',
        sortida: 'Mitjana: 7.2',
        notes: 'El càlcul s\'escriu UNA vegada i servix per a qualsevol array de notes, punts o temperatures.'
      },
      {
        tipus: 'activitat',
        titol: 'Ara et toca a tu',
        enunciat: 'Divideix en mètodes un programa que demana 6 notes i mostra la mitjana, la més alta i els aprovats.',
        temps: '20 min',
        pistes: ['Pensa els verbs: llegir, calcular, mostrar', 'Decidix què torna cada mètode', 'main amb poques línies'],
        notes: 'Passar per les taules preguntant: què torna este mètode?'
      },
      {
        tipus: 'pregunta',
        titol: 'Pensem un moment',
        pregunta: 'Si un mètode ha de tornar un valor, i dins té un if sense else, per què pot donar error? Quants camins té eixe mètode?'
      }
    ],
    resum: [
      'Un mètode és codi amb nom que es pot cridar moltes vegades.',
      'Paràmetres: què necessita. Arguments: què li passem.',
      'void = no torna res; altre tipus = return.',
      'return torna el valor i acaba el mètode.',
      'Tots els camins d\'un mètode han de tornar el valor.',
      'Les variables viuen només dins del seu mètode.',
      'Els arrays es passen i es tornen sense problema.',
      'main ha de ser l\'esquelet del programa.'
    ],
    seguent: 'Tema 6 · Classes i objectes'
  }
};
