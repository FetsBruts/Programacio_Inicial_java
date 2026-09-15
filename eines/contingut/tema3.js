/* ==========================================================================
   TEMA 3 · Repetir: els bucles  —  contingut de la pàgina
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   · sortida = eixida real (es comprova amb  node eines/prova-codi-java.mjs 3 )
   ========================================================================== */
globalThis.TEMA = {
  n: 3,
  titol: 'Repetir: els bucles',
  subtitol: 'Fer que el programa repetisca coses sense escriure-les mil vegades',
  durada: '3 hores de classe',

  hero: {
    etiqueta: 'Tema 3 · Sessió de 3 hores',
    entradeta: 'Escriure «Hola» cinc vegades és fàcil. Escriure\'l 1.000 vegades, o comptar les notes de tota la classe, ja no. Per a això existeixen els bucles: la primera superpotència de veritat d\'un programa.',
    meta: [
      '⏱ 3 hores',
      '📦 Fase 1 · Pensament de programador',
      '🧩 Necessites: Temes 0, 1 i 2',
      '❓ La pregunta clau: quantes voltes, i quan pare?'
    ]
  },

  introduccio: {
    titol: 'Una situació per començar',
    emoji: '🎮',
    blocs: [
      { p: 'Un videojoc mostra la paraula **GAME OVER** i fa un compte enrere: 3… 2… 1… Fins ara ho hauríem d\'escriure així:' },
      { codi: {
        titol: 'GameOver.java',
        etiqueta: 'SENSE BUCLE',
        text: `System.out.println("GAME OVER");
System.out.println("3");
System.out.println("2");
System.out.println("1");
System.out.println("Fi");`,
        sortida: `GAME OVER
3
2
1
Fi`
      } },
      { p: 'Funciona… per a un compte de 3. I si volem comptar des de 100? I si volem demanar la contrasenya **fins que l\'usuari l\'encerta**? No sabem quantes voltes farà! Escriure 100 línies no és programar.' },
      { p: 'Els programes de veritat **no repeteixen codi**: fan que el codi es repetisca. Esta és la idea d\'este tema: el **bucle** (o *bucle*, en anglés *loop*).' }
    ],
    plan: [
      ['30-40 min', 'Explicació i demos'],
      ['60-75 min', 'Programació guiada'],
      ['60-75 min', 'Exercicis'],
      ['15-30 min', 'Repàs i repte']
    ],
    prerequisits: [
      'Crear variables i canviar-ne el valor.',
      'Llegir dades pel teclat amb `Scanner`.',
      'Fer comparacions i escriure un `if` (Tema 2).'
    ]
  },

  objectius: {
    intro: 'En acabar esta sessió has de saber fer estes coses:',
    llista: [
      'Escriure un bucle `while` amb la seua condició.',
      'Escriure un bucle `for` quan sé quantes voltes vull.',
      'Usar un **comptador** i un **acumulador** dins d\'un bucle.',
      'Saber quan s\'acaba un bucle i per què (condició d\'eixida).',
      'Reconéixer un **bucle infinit** i arreglar-lo.',
      'Triar entre `while` i `for` segons el problema.'
    ]
  },

  teoria: {
    titol: 'Teoria, poc a poc',
    entradeta: 'Una idea → un exemple. I dues preguntes sempre: quantes voltes fa? i quan para?',
    blocs: [
      { h3: '1. El bucle while' },
      { p: '`while` significa «mentres». Es llig així: *mentres la condició siga vertadera, repeteix el que hi ha dins de les claus*.' },
      { codi: {
        titol: 'Comptar.java',
        etiqueta: 'WHILE',
        text: `public class Comptar {
    public static void main(String[] args) {
        int i = 1;

        while (i <= 5) {
            System.out.println("Volta número " + i);
            i = i + 1;
        }

        System.out.println("Fi. He contat fins a " + (i - 1));
    }
}`,
        sortida: `Volta número 1
Volta número 2
Volta número 3
Volta número 4
Volta número 5
Fi. He contat fins a 5`
      } },
      { p: 'Fixa\'t en les tres peces que **sempre** té un bucle:' },
      { llista: [
        'Una variable que canvia: `i` (es diu **comptador**).',
        'Una condició que al principi és vertadera: `i <= 5`.',
        'Una línia que acosta la condició a fer-se falsa: `i = i + 1`.'
      ], numerada: true },
      { nota: { tipus: 'important', text: 'Si falta la tercera peça, el bucle **no s\'acaba mai**. Eixe és el famós *bucle infinit*. El programa no dona cap error: es queda pensant per sempre i l\'has de parar a la força.' } },

      { h3: '2. Comptadors: i = i + 1' },
      { p: 'Un comptador és una variable que guarda quantes voltes hem fet. Es pot canviar de tres maneres:' },
      { taula: {
        cap: ['S\'escriu', 'Què fa', 'Quan el fem servir'],
        files: [
          ['`i = i + 1`', 'suma 1 (es veu tot el procés)', 'per entendre-ho'],
          ['`i++`', 'suma 1 (forma curta)', 'és el més habitual'],
          ['`i--`', 'resta 1', 'per comptar enrere'],
          ['`i = i + 2`', 'suma 2', 'per anar de dos en dos']
        ]
      } },
      { codi: {
        titol: 'Coet.java',
        etiqueta: 'COMPTE ENRERE',
        text: `public class Coet {
    public static void main(String[] args) {
        int i = 3;

        while (i > 0) {
            System.out.println(i);
            i--;
        }

        System.out.println("Despeguem!");
    }
}`,
        sortida: `3
2
1
Despeguem!`
      } },
      { nota: { tipus: 'tip', text: 'La condició s\'ha de llegir com un *permís per continuar*: `i > 0`. Quan arriba a 0, el permís desapareix i el bucle para. El valor que fa que pare es diu **condició d\'eixida**.' } },

      { h3: '3. Acumuladors: sumar dins del bucle' },
      { p: 'Un acumulador és una variable que va **acumulant** un valor a cada volta: una suma, un total de punts, un producte… És la base de tots els comptes que faràs en programació.' },
      { codi: {
        titol: 'Suma.java',
        etiqueta: 'ACUMULADOR',
        text: `public class Suma {
    public static void main(String[] args) {
        int suma = 0;              // comença a zero, SEMPRE fora del bucle

        for (int i = 1; i <= 10; i++) {
            suma = suma + i;
        }

        System.out.println("La suma del 1 al 10 és " + suma);
    }
}`,
        sortida: "La suma del 1 al 10 és 55"
      } },
      { p: 'Comprovem-ho a mà: 1 + 2 + 3 + … + 10 = 55. El acumulador va guardant el total volta a volta: després de la primera 1, després 3, després 6, després 10, i aixina fins a 55.' },
      { nota: { tipus: 'important', text: 'L\'acumulador s\'inicialitza **abans** del bucle i s\'actualitza **dins**. Un error clàssic és crear-lo dins del bucle: llavors es perd el total de cada volta i només guardarem l\'últim valor.' } },

      { h3: '4. El bucle for: quan sabem quantes voltes' },
      { p: 'Si sabem quantes voltes volem fer, hi ha una manera més curta i ordenada. El `for` té les tres peces del bucle escrites totes juntes al principi:' },
      { p: '`for (comença; mentre es complisca; què canvie en cada volta)`' },
      { codi: {
        titol: 'Taula.java',
        etiqueta: 'FOR',
        text: `public class Taula {
    public static void main(String[] args) {
        int numero = 7;

        for (int i = 1; i <= 5; i++) {
            int resultat = numero * i;
            System.out.println(numero + " x " + i + " = " + resultat);
        }
    }
}`,
        sortida: `7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35`
      } },
      { p: 'Compara\'ls i veuràs que fan el mateix, però el `for` ho diu tot d\'una vegada:' },
      { taula: {
        cap: ['Pregunta', 'Amb while', 'Amb for'],
        files: [
          ['On comença el comptador?', '`int i = 1;` (fora)', '`for (int i = 1;`'],
          ['Quina és la condició?', '`while (i <= 5)`', '`; i <= 5;`'],
          ['Què canvia a cada volta?', '`i++;` (dins)', '`i++)`'],
          ['Quant viu la variable `i`?', 'Fins al final del programa', 'Només dins del bucle']
        ]
      } },
      { nota: { tipus: 'tip', text: 'Regla pràctica: **si sé quantes voltes → `for`**. Si depén d\'una condició que no controle (una contrasenya, una resposta de l\'usuari) → **`while`**.' } },

      { h3: '5. Bucles que depenen de l\'usuari' },
      { p: 'Moltes vegades no sabem quantes voltes farem: depén del que faça l\'usuari. Ací el `while` és el rei. Este programa demana la contrasenya fins que s\'encerta:' },
      { codi: {
        titol: 'ClauCorrecta.java',
        etiqueta: 'WHILE + SCANNER',
        text: `import java.util.Scanner;

public class ClauCorrecta {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        String clau = "";

        while (!clau.equals("java2026")) {
            System.out.print("Contrasenya: ");
            clau = teclat.next();
        }

        System.out.println("Endavant, pots entrar!");
    }
}`,
        entrada: 'hola\n1234\njava2026\n',
        sortida: `Contrasenya: Contrasenya: Contrasenya: Endavant, pots entrar!`,
        sortidaMostrada: `Contrasenya: hola
Contrasenya: 1234
Contrasenya: java2026
Endavant, pots entrar!`
      } },
      { p: 'Fixa\'t que la variable `clau` es crea **abans** del bucle amb un text buit (`""`), perquè la condició puga comprovar-se la primera vegada.' },
      { nota: { tipus: 'info', text: 'Hem escrit `!clau.equals("java2026")`, que es llig «mentres la clau NO siga java2026». L\'operador `!` del tema anterior és molt útil en les condicions dels bucles.' } },

      { h3: '6. Pistes per a l\'usuari i break' },
      { p: 'Quan el bucle espera una resposta correcta, és molt important **dir a l\'usuari què està passant**. I quan volem eixir d\'un bucle enmig, tenim `break`: «ix del bucle ara mateix».' },
      { codi: {
        titol: 'Divisor.java',
        etiqueta: 'BREAK',
        text: `public class Divisor {
    public static void main(String[] args) {
        int numero = 31431;
        int divisor = 2;

        while (true) {
            if (numero % divisor == 0) {
                System.out.println("El divisor més menut és " + divisor);
                break;      // ja el tenim: no cal seguir buscant
            }
            divisor = divisor + 1;
        }
    }
}`,
        sortida: 'El divisor més menut és 3'
      } },
      { p: '`while (true)` significa «per sempre». El bucle para quan arriba al `break`. Este patró es fa servir molt: buscar alguna cosa fins a trobar-la i, quan la trobem, eixir.' },
      { nota: { tipus: 'avis', text: '`while (true)` **sense cap `break`** és un bucle infinit segur. Si el fas servir, assegura\'t que hi ha almenys un camí que el puga aturar.' } },

      { h3: '7. I si el bucle no fa cap volta?' },
      { p: 'El cos d\'un bucle pot executar-se zero vegades. Depén sempre de la condició.' },
      { codi: {
        titol: 'ZeroVoltes.java',
        etiqueta: 'ZERO VOLTES',
        text: `public class ZeroVoltes {
    public static void main(String[] args) {
        int i = 1;

        while (i > 10) {
            System.out.println("Açò no s'escriu mai");
            i++;
        }

        System.out.println("El programa continua normalment");
    }
}`,
        sortida: 'El programa continua normalment'
      } },
      { nota: { tipus: 'avis', text: 'Si el programa «no fa res» i esperaves que contara alguna cosa, mira bé la condició del bucle: pot ser que la primera comprovació ja siga falsa.' } },

      { h3: '8. Bucles infinits: què fer' },
      { p: 'Si el teu programa es queda penjat i no acaba, probablement és un bucle infinit. **No espantes**: es para i es repara.' },
      { llista: [
        'Per a parar-lo: en l\'editor, botó de *Stop* (quadradet roig). A la terminal: `Ctrl + C`.',
        'Sempre sol ser la mateixa causa: el **comptador no canvia mai**, o canvia en la direcció equivocada.'
      ] },
      { p: 'Este codi no acaba mai: falta la línia que canvia `i`. El pots escriure per vore-ho, però **no l\'executes**: es queda penjat.' },
      { codi: {
        titol: 'Infinit.java',
        etiqueta: 'NO ES COMPILA·NO L\'EXECUTES',
        mal: true,
        text: `int i = 1;
while (i <= 5) {
    System.out.println("Soc l'Infinito");
}`
      } },
      { nota: { tipus: 'important', text: 'Protocol sempre que un programa es penja: (1) para\'l, (2) mira la condició, (3) mira si la variable de la condició canvia dins del bucle, (4) arregla-ho i torna a executar.' } }
    ]
  },

  exemples: {
    titol: 'Exemples explicats pas a pas',
    entradeta: 'Cada exemple: què volem aconseguir, el codi, què apareix per pantalla i per què funciona.',
    blocs: [
      { h3: 'Exemple 1 · La suma de punts del joc' },
      { p: '**Què volem?** Un joc fa 5 partides i dóna punts en cada una. Volem el total i la mitjana. Sense bucles, açò serien 5 `nextInt()` seguits.' },
      { codi: {
        titol: 'Punts.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `import java.util.Scanner;

public class Punts {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        int total = 0;

        for (int partida = 1; partida <= 5; partida++) {
            System.out.print("Punts de la partida " + partida + ": ");
            int punts = teclat.nextInt();
            total = total + punts;
        }

        double mitjana = total / 5.0;
        System.out.println("Total: " + total + " punts");
        System.out.println("Mitjana per partida: " + mitjana);
    }
}`,
        entrada: '120\n95\n180\n60\n145\n',
        sortida: `Punts de la partida 1: Punts de la partida 2: Punts de la partida 3: Punts de la partida 4: Punts de la partida 5: Total: 600 punts
Mitjana per partida: 120.0`,
        sortidaMostrada: `Punts de la partida 1: 120
Punts de la partida 2: 95
Punts de la partida 3: 180
Punts de la partida 4: 60
Punts de la partida 5: 145
Total: 600 punts
Mitjana per partida: 120.0`
      } },
      { p: '**Per què funciona:** el comptador `partida` va de l\'1 al 5. Cada volta llegim un valor i el sumem a `total`. Quan el bucle acaba, `total` té la suma de les cinc partides.' },
      { nota: { tipus: 'tip', text: 'Fixa\'t en el `5.0`: dividir un `int` entre un `int` dona un `int` (i perdria els decimals). Com al tema 1: si volem decimals, almenys un dels dos valors ha de ser `double`.' } },

      { h3: 'Exemple 2 · Estalviar per al mòbil' },
      { p: '**Què volem?** Cada setmana estalviem 15 €. Quantes setmanes calen per arribar a 100 €? No sabem el número de voltes: `while`.' },
      { codi: {
        titol: 'Estalvi.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Estalvi {
    public static void main(String[] args) {
        int diners = 0;
        int setmanes = 0;

        while (diners < 100) {
            diners = diners + 15;
            setmanes++;
        }

        System.out.println("Calen " + setmanes + " setmanes.");
        System.out.println("Al final tindrem " + diners + " euros.");
    }
}`,
        sortida: `Calen 7 setmanes.
Al final tindrem 105 euros.`
      } },
      { p: '**Per què funciona:** el bucle seguix mentres no arribem als 100 €. Cada volta suma 15 € i augmenta el comptador. Al final, amb 105 €, la condició `diners < 100` ja és falsa i el bucle para.' },
      { nota: { tipus: 'tip', text: 'Observa que ens passem de 100 €. Quan el que volem és **passar** un llindar, el bucle sempre acaba «una mica més enllà». Si vols el primer valor que supera el llindar, això mateix és el correcte.' } },

      { h3: 'Exemple 3 · Nota mitjana de la classe (sense arrays!)' },
      { p: '**Què volem?** Saber quantes notes es van llegint i la seua mitjana, sense saber quantes n\'hi haurà. Utilitzarem un valor especial per a acabar: el -1.' },
      { codi: {
        titol: 'MitjanaClasse.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `import java.util.Scanner;

public class MitjanaClasse {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        double suma = 0;
        int quantes = 0;

        System.out.print("Nota (-1 per acabar): ");
        double nota = teclat.nextDouble();

        while (nota != -1) {
            suma = suma + nota;
            quantes++;
            System.out.print("Nota (-1 per acabar): ");
            nota = teclat.nextDouble();
        }

        if (quantes > 0) {
            System.out.println("Hi ha " + quantes + " notes.");
            System.out.println("La mitjana és " + (suma / quantes));
        } else {
            System.out.println("No has escrit cap nota.");
        }
    }
}`,
        entrada: '6\n7\n4\n9\n-1\n',
        sortida: `Nota (-1 per acabar): Nota (-1 per acabar): Nota (-1 per acabar): Nota (-1 per acabar): Nota (-1 per acabar): Hi ha 4 notes.
La mitjana és 6.5`,
        sortidaMostrada: `Nota (-1 per acabar): 6
Nota (-1 per acabar): 7
Nota (-1 per acabar): 4
Nota (-1 per acabar): 9
Nota (-1 per acabar): -1
Hi ha 4 notes.
La mitjana és 6.5`
      } },
      { p: '**Per què funciona:** llegim la primera nota **abans** del bucle i una més al final de cada volta. Quan arriba el -1, el bucle s\'atura. El `-1` es diu **valor sentinella**: un valor que no és una dada real i que només servix per a dir «ja està».' },
      { nota: { tipus: 'avis', text: 'Amb el sentinella hem de tindre compte de no sumar-lo mai: per això el comprovem **abans** d\'entrar al cos del bucle. Si el sumarem, la mitjana estaria mal calculada.' } },

      { h3: 'Exemple 4 · Control de candidats a un portallengües' },
      { p: '**Què volem?** Acceptar candidats per al portallengües de la classe, i parar quan un dels candidats no complisca el requisit de nota. Un `for` que es deté enmig amb `break`.' },
      { codi: {
        titol: 'Portallengues.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `import java.util.Scanner;

public class Portallengues {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        int acceptats = 0;

        for (int candidat = 1; candidat <= 5; candidat++) {
            System.out.print("Nota del candidat " + candidat + ": ");
            double nota = teclat.nextDouble();

            if (nota < 7) {
                System.out.println("Candidat " + candidat + ": no passa el tall.");
                break;
            }

            acceptats++;
            System.out.println("Candidat " + candidat + ": acceptat!");
        }

        System.out.println("Candidats acceptats: " + acceptats);
    }
}`,
        entrada: '9\n8\n6.5\n',
        sortida: `Nota del candidat 1: Candidat 1: acceptat!
Nota del candidat 2: Candidat 2: acceptat!
Nota del candidat 3: Candidat 3: no passa el tall.
Candidats acceptats: 2`,
        sortidaMostrada: `Nota del candidat 1: 9
Candidat 1: acceptat!
Nota del candidat 2: 8
Candidat 2: acceptat!
Nota del candidat 3: 6.5
Candidat 3: no passa el tall.
Candidats acceptats: 2`
      } },
      { p: '**Per què funciona:** el `break` fa que el bucle acabe immediatament. Les voltes 4 i 5 no es fan. I com que `acceptats` es va guardant fora de les decisions, al final tenim el compte correcte.' },
      { nota: { tipus: 'info', text: 'Fixa\'t que este programa **no usa arrays**: guardem el compte, no les notes. Sempre que pugues, guarda només el que necessites.' } },

      { h3: 'Quantes voltes es fan?' },
      { p: 'Llig el codi i pensa quantes línies apareixeran i amb quins números. Després comprova-ho.' },
      { prediccio: {
        id: 'pred-parells',
        titol: 'Pensa abans d\'executar',
        fitxer: 'Parells.java',
        text: `for (int i = 0; i < 6; i++) {
    if (i % 2 == 0) {
        System.out.println(i);
    }
}`,
        sortida: `0
2
4`,
        perque: 'El bucle fa 6 voltes (0, 1, 2, 3, 4, 5) perquè comença en 0 i la condició és `i < 6`. Dins, només s\'escriuen els que tenen residu 0 en dividir per 2: el 0, el 2 i el 4. El 6 no entra perquè el bucle ja ha parat.'
      } }
    ]
  },

  guiada: {
    titol: 'Programació guiada: ho fem junts',
    entradeta: 'Farem el joc d\'endevinar el número secret. Primer amb una sola pregunta, després amb el bucle, després amb pistes i finalment amb un límit d\'intents.',
    passos: [
      {
        titol: 'El problema, en paraules',
        blocs: [
          { p: 'El programa pensa un número (del 1 al 100). L\'usuari ha d\'endevinar-lo. El programa ha de: preguntar, comprovar, donar una pista (*més gran* o *més menut*), tornar a preguntar, comptar els intents i felicitar quan s\'encerta.' },
          { preguntaClasse: 'Sabem quantes voltes farà? Per què?' },
          { p: '**No ho sabem**: l\'usuari pot encertar-ho a la primera o necessitar huit intents. Per tant, `while`. I la condició serà «mentres la prova siga diferent del número secret».' }
        ]
      },
      {
        titol: 'Primera versió: una sola pregunta',
        blocs: [
          { p: 'Com sempre, comencem pel més simple possible: preguntem una vegada i comprovem. Encara sense bucle.' },
          { codi: {
            titol: 'Endevinalla.java',
            etiqueta: 'PAS 2',
            text: `import java.util.Scanner;

public class Endevinalla {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        int secret = 42;

        System.out.print("El meu número (1-100): ");
        int prova = teclat.nextInt();

        if (prova == secret) {
            System.out.println("Correcte!");
        } else {
            System.out.println("No! Torna-ho a provar.");
        }
    }
}`,
            entrada: '30\n',
            sortida: 'El meu número (1-100): No! Torna-ho a provar.',
            sortidaMostrada: `El meu número (1-100): 30
No! Torna-ho a provar.`
          } }
        ]
      },
      {
        titol: 'Afig el bucle while',
        blocs: [
          { p: 'Ara volem que torne a preguntar. Afegim el `while`: mentres la prova siga distint del secret, pregunta un\'altra vegada.' },
          { codi: {
            titol: 'Endevinalla.java',
            etiqueta: 'PAS 3',
            text: `import java.util.Scanner;

public class Endevinalla {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        int secret = 42;

        System.out.print("El meu número (1-100): ");
        int prova = teclat.nextInt();

        while (prova != secret) {
            System.out.print("No! Torna-ho a provar: ");
            prova = teclat.nextInt();
        }

        System.out.println("Correcte! El número era el " + secret + ".");
    }
}`,
            entrada: '30\n55\n42\n',
            sortida: 'El meu número (1-100): No! Torna-ho a provar: No! Torna-ho a provar: Correcte! El número era el 42.',
            sortidaMostrada: `El meu número (1-100): 30
No! Torna-ho a provar: 55
No! Torna-ho a provar: 42
Correcte! El número era el 42.`
          } },
          { preguntaClasse: 'Per què hem hagut de canviar el `if` per un `while`? Què guanyem?' }
        ]
      },
      {
        titol: 'Ara donem pistes',
        blocs: [
          { p: 'Dir només «No!» és molt frustrant. Un bon programa ajuda l\'usuari. Si la prova és menuda, el secret és **més gran**; si és major, el secret és **més menut**.' },
          { codi: {
            titol: 'Endevinalla.java',
            etiqueta: 'PAS 4',
            text: `import java.util.Scanner;

public class Endevinalla {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        int secret = 42;

        System.out.print("El meu número (1-100): ");
        int prova = teclat.nextInt();

        while (prova != secret) {
            if (prova < secret) {
                System.out.print("El meu és més gran. Torna-ho a provar: ");
            } else {
                System.out.print("El meu és més menut. Torna-ho a provar: ");
            }
            prova = teclat.nextInt();
        }

        System.out.println("Correcte! El número era el " + secret + ".");
    }
}`,
            entrada: '30\n60\n42\n',
            sortida: 'El meu número (1-100): El meu és més gran. Torna-ho a provar: El meu és més menut. Torna-ho a provar: Correcte! El número era el 42.',
            sortidaMostrada: `El meu número (1-100): 30
El meu és més gran. Torna-ho a provar: 60
El meu és més menut. Torna-ho a provar: 42
Correcte! El número era el 42.`
          } },
          { p: 'Fixa\'t que els `if` estan **dins** del bucle: cada volta es tornen a comprovar les pistes. Un `if` dins d\'un bucle és el patró més habitual que existeix.' }
        ]
      },
      {
        titol: 'Comptem els intents i limitem-los a 5',
        blocs: [
          { p: 'Un joc sense límit és massa fàcil (o massa llarg). Afegim un comptador d\'intents i parem als 5.' },
          { codi: {
            titol: 'Endevinalla.java',
            etiqueta: 'PAS 5',
            text: `import java.util.Scanner;

public class Endevinalla {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        int secret = 42;
        int intents = 0;
        int prova = 0;

        while (prova != secret && intents < 5) {
            intents++;
            System.out.print("Intent " + intents + ". El meu número (1-100): ");
            prova = teclat.nextInt();

            if (prova < secret) {
                System.out.println("El meu és més gran que eixe.");
            } else if (prova > secret) {
                System.out.println("El meu és més menut que eixe.");
            }
        }

        if (prova == secret) {
            System.out.println("Correcte! Has encertat en " + intents + " intents.");
        } else {
            System.out.println("S'han acabat els intents. El número era el " + secret + ".");
        }
    }
}`,
            entrada: '50\n20\n35\n42\n',
            sortida: `Intent 1. El meu número (1-100): El meu és més menut que eixe.
Intent 2. El meu número (1-100): El meu és més gran que eixe.
Intent 3. El meu número (1-100): El meu és més gran que eixe.
Intent 4. El meu número (1-100): Correcte! Has encertat en 4 intents.`,
            sortidaMostrada: `Intent 1. El meu número (1-100): 50
El meu és més menut que eixe.
Intent 2. El meu número (1-100): 20
El meu és més gran que eixe.
Intent 3. El meu número (1-100): 35
El meu és més gran que eixe.
Intent 4. El meu número (1-100): 42
Correcte! Has encertat en 4 intents.`
          } },
          { p: 'La condició del bucle ara té **dos motius per parar**: encertar o quedar-se sense intents. S\'unixen amb `&&`: el bucle continua només si encara no s\'ha encertat **i** queden intents.' },
          { p: 'I si no s\'encerta mai? Provem-ho amb cinc números que fallen:' },
          { codi: {
            titol: 'Endevinalla.java',
            etiqueta: 'PAS 5 · CAS DE FALLAR',
            text: `// Mateix programa de dalt, amb estes dades:
// 1, 2, 3, 4, 5  →  cap coincidix amb el 42`,
            entrada: '1\n2\n3\n4\n5\n',
            sortidaMostrada: `Intent 1. El meu número (1-100): 1
El meu és més gran que eixe.
Intent 2. El meu número (1-100): 2
...
Intent 5. El meu número (1-100): 5
El meu és més gran que eixe.
S'han acabat els intents. El número era el 42.`
          } },
          { preguntaClasse: 'Quina d\'estes dos condicions s\'examina primer: `prova != secret` o `intents < 5`? Passaria res si les canviem d\'orde?' }
        ]
      },
      {
        titol: 'Proves finals i millores',
        blocs: [
          { p: 'Un programa no està acabat fins que el proves amb casos estranys. Estos són els d\'este joc:' },
          { taula: {
            cap: ['Què proves', 'Què ha de passar'],
            files: [
              ['Encertar a la primera', 'Ha de dir «Has encertat en 1 intents»'],
              ['Fallar cinc vegades', 'Ha de dir el número i acomiadar-se'],
              ['Un número fora de l\'1-100', 'El programa no avisa: això és una millora pendent'],
              ['Escriure una lletra', '`InputMismatchException` (com en el tema 1)']
            ]
          } },
          { p: 'I ací van tres millores que pots fer tu: comprovar que el número estiga entre 1 i 100, dir si la prova és *molt* lluny (*«fred!»*) o *prop* (*«calent!»*), i deixar que l\'usuari trie la dificultat segons els intents.' },
          { nota: { tipus: 'tip', text: 'Millorar un programa que ja funciona és **el millor exercici de programació** que hi ha: no comences de zero i has d\'entendre bé el que tens. Fes-ho sempre.' } }
        ]
      }
    ]
  },

  mini: {
    intro: 'Activitats molt curtes per agafar soltura amb els bucles. Escriu-les i executa-les.',
    exercicis: [
      {
        id: 'mini1', titol: 'De l\'1 al 5 amb while', dificultat: 'facil', temps: '3 min',
        enunciat: 'Escriu un `while` que mostre els números de l\'1 al 5, cadascun en una línia.',
        solucio: {
          titol: 'UnACinc.java',
          text: `public class UnACinc {
    public static void main(String[] args) {
        int i = 1;

        while (i <= 5) {
            System.out.println(i);
            i++;
        }
    }
}`,
          sortida: `1
2
3
4
5`,
          perque: 'Les tres peces del bucle: el comptador `i` comença en 1, la condició és `i <= 5` i el comptador augmenta amb `i++` a cada volta.'
        }
      },
      {
        id: 'mini2', titol: 'Compte enrere de 10 a 1', dificultat: 'facil', temps: '3 min',
        enunciat: 'Fes un compte enrere del 10 a l\'1 amb un bucle i després mostra «Fi».',
        solucio: {
          titol: 'Enrere.java',
          text: `public class Enrere {
    public static void main(String[] args) {
        int i = 10;

        while (i >= 1) {
            System.out.println(i);
            i--;
        }

        System.out.println("Fi");
    }
}`,
          sortida: `10
9
8
7
6
5
4
3
2
1
Fi`,
          perque: 'Per comptar enrere, la condició mira cap avall (`i >= 1`) i el comptador disminuïx (`i--`). Si t\'oblides el `i--`, el bucle no s\'acaba mai.'
        }
      },
      {
        id: 'mini3', titol: 'La taula del 4', dificultat: 'facil', temps: '4 min',
        enunciat: 'Mostra la taula de multiplicar del 4, de l\'1 al 10, amb un `for`.',
        exemple: { entrada: '(no demana dades)', sortida: '4 x 1 = 4\n4 x 2 = 8\n...\n4 x 10 = 40' },
        solucio: {
          titol: 'TaulaQuatre.java',
          text: `public class TaulaQuatre {
    public static void main(String[] args) {
        int numero = 4;

        for (int i = 1; i <= 10; i++) {
            System.out.println(numero + " x " + i + " = " + (numero * i));
        }
    }
}`,
          sortida: `4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
4 x 10 = 40`,
          perque: 'Com que sabem exactament quantes voltes volem (10), fem servir `for`. El número de fora (`numero`) no canvia mai; el de dins (`i`) és el comptador.'
        }
      },
      {
        id: 'mini4', titol: 'Suma els parells', dificultat: 'mitjana', temps: '5 min',
        enunciat: 'Suma tots els números parells de l\'1 al 20 i mostra el total.',
        exemple: { entrada: '(no demana dades)', sortida: 'La suma és 110' },
        solucio: {
          titol: 'SumaParells.java',
          text: `public class SumaParells {
    public static void main(String[] args) {
        int suma = 0;

        for (int i = 1; i <= 20; i++) {
            if (i % 2 == 0) {
                suma = suma + i;
            }
        }

        System.out.println("La suma és " + suma);
    }
}`,
          sortida: 'La suma és 110',
          perque: 'L\'acumulador `suma` es crea fora del bucle. Dins, el `if` decidix si el número és parell (residu 0) i només llavors el sumem. 2+4+6+…+20 = 110.'
        }
      },
      {
        id: 'mini5', titol: 'Quantes voltes?', dificultat: 'mitjana', temps: '3 min',
        enunciat: 'Sense executar, digues quantes voltes fa este bucle i què apareix per pantalla. Després comprova-ho.',
        codi: {
          titol: 'Voltes.java',
          text: `int i = 3;
while (i <= 12) {
    System.out.println(i);
    i = i + 3;
}`
        },
        solucio: {
          titol: 'VoltesSolucio.java',
          text: `int i = 3;
while (i <= 12) {
    System.out.println(i);
    i = i + 3;
}`,
          sortida: `3
6
9
12`,
          perque: 'El comptador va de 3 en 3: 3, 6, 9, 12 i 15. Quan arriba a 15, la condició `i <= 12` ja és falsa i el bucle para. Per tant, **4 voltes** i s\'escriuen els quatre números.'
        }
      },
      {
        id: 'mini6', titol: 'Troba l\'error: el bucle que no para', dificultat: 'mitjana', temps: '4 min',
        enunciat: 'Este bucle hauria de mostrar els números de l\'1 al 3 i no ho fa (ni tan sols acaba). Troba l\'error i arregla\'l.',
        codi: {
          titol: 'Trencat.java',
          mal: true,
          text: `int i = 1;
while (i <= 3) {
    System.out.println(i);
}`
        },
        pista: 'Quina de les tres peces del bucle falta?',
        solucio: {
          titol: 'Arreglat.java',
          text: `int i = 1;
while (i <= 3) {
    System.out.println(i);
    i++;
}`,
          sortida: `1
2
3`,
          perque: 'Faltava la peça que acosta la condició a fer-se falsa: `i++`. Sense ella, `i` sempre val 1, la condició sempre és vertadera i el bucle no acaba mai. Es diu **bucle infinit**.'
        }
      },
      {
        id: 'mini7', titol: 'Demana números fins a un 0', dificultat: 'mitjana', temps: '8 min',
        enunciat: 'Demana números a l\'usuari i mostra la suma. El programa ha d\'acabar quan l\'usuari escriga un 0 (i no comptar eixe 0).',
        exemple: { entrada: 'Número: 5\nNúmero: 10\nNúmero: 0', sortida: 'La suma és 15' },
        solucio: {
          titol: 'SumaFinsZero.java',
          text: `import java.util.Scanner;

public class SumaFinsZero {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        int suma = 0;

        System.out.print("Número: ");
        int numero = teclat.nextInt();

        while (numero != 0) {
            suma = suma + numero;
            System.out.print("Número: ");
            numero = teclat.nextInt();
        }

        System.out.println("La suma és " + suma);
    }
}`,
          entrada: '5\n10\n0\n',
          sortida: 'Número: Número: Número: La suma és 15',
          sortidaMostrada: `Número: 5
Número: 10
Número: 0
La suma és 15`,
          perque: 'El 0 és el **valor sentinella**: no és una dada, és la senyal d\'acabar. Per això el comprovem en la condició del bucle i no el sumem mai. Llegim un número abans del bucle i un més al final de cada volta.'
        }
      }
    ]
  },

  principals: {
    intro: 'Quatre exercicis complets. Pensa primer: quantes voltes? quan para?',
    exercicis: [
      {
        id: 'ex1', titol: 'La taula de multiplicar que demana l\'usuari', dificultat: 'facil', temps: '15 min',
        enunciat: 'Demana un número i mostra\'n la taula de multiplicar completa (de l\'1 al 10), amb el format `7 x 3 = 21`.',
        exemple: { entrada: 'Número: 3', sortida: '3 x 1 = 3\n3 x 2 = 6\n...\n3 x 10 = 30' },
        solucio: {
          titol: 'TaulaDemanada.java',
          text: `import java.util.Scanner;

public class TaulaDemanada {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Número: ");
        int numero = teclat.nextInt();

        for (int i = 1; i <= 10; i++) {
            System.out.println(numero + " x " + i + " = " + (numero * i));
        }
    }
}`,
          entrada: '3\n',
          sortida: `Número: 3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30`,
          sortidaMostrada: `Número: 3
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30`,
          perque: 'El `for` fa exactament 10 voltes: des de l\'1 fins al 10 inclòs. La multiplicació es fa dins del `println`, però podríem guardar-la en una variable; les dos maneres estan bé.'
        },
        pista: 'El comptador del `for` és el segon número de la multiplicació (`i`), no el que demanes a l\'usuari.'
      },
      {
        id: 'ex2', titol: 'Parells i senars de l\'1 al 20', dificultat: 'mitjana', temps: '20 min',
        enunciat: 'Comptant de l\'1 al 20, digues quants números parells hi ha, quants senars i quant sumen tots els parells.',
        exemple: { entrada: '(no demana dades)', sortida: 'Parells: 10\nSenars: 10\nSuma dels parells: 110' },
        solucio: {
          titol: 'ParellsSenars.java',
          text: `public class ParellsSenars {
    public static void main(String[] args) {
        int parells = 0;
        int senars = 0;
        int sumaParells = 0;

        for (int i = 1; i <= 20; i++) {
            if (i % 2 == 0) {
                parells++;
                sumaParells = sumaParells + i;
            } else {
                senars++;
            }
        }

        System.out.println("Parells: " + parells);
        System.out.println("Senars: " + senars);
        System.out.println("Suma dels parells: " + sumaParells);
    }
}`,
          sortida: `Parells: 10
Senars: 10
Suma dels parells: 110`,
          perque: 'Tenim **tres** variables que s\'actualitzen dins del bucle: dos comptadors i un acumulador. Les tres es creen abans del bucle. El `else` s\'encarrega dels senars, que només es compten.'
        },
        pista: 'Necessites tres variables i un `if` dins del bucle. Les tres variables es creen abans del `for`.'
      },
      {
        id: 'ex3', titol: 'Endevina el número', dificultat: 'mitjana', temps: '25 min',
        enunciat: 'El programa pensa el número 25. L\'usuari ha d\'endevinar-lo. A cada intent, el programa diu «més gran» o «més menut» i finalment diu en quants intents s\'ha encertat. No hi ha límit d\'intents.',
        exemple: {
          entrada: "Intenta-ho (1-100): 50\nIntenta-ho (1-100): 12\nIntenta-ho (1-100): 25",
          sortida: "El meu és més menut.\nEl meu és més gran.\nCorrecte! Has encertat en 3 intents."
        },
        solucio: {
          titol: 'Endevina.java',
          text: `import java.util.Scanner;

public class Endevina {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        int secret = 25;
        int intents = 0;

        System.out.print("Intenta-ho (1-100): ");
        int prova = teclat.nextInt();

        while (prova != secret) {
            intents++;

            if (prova < secret) {
                System.out.println("El meu és més gran.");
            } else {
                System.out.println("El meu és més menut.");
            }

            System.out.print("Intenta-ho (1-100): ");
            prova = teclat.nextInt();
        }

        System.out.println("Correcte! Has encertat en " + (intents + 1) + " intents.");
    }
}`,
          entrada: '50\n12\n25\n',
          sortida: `Intenta-ho (1-100): El meu és més menut.
Intenta-ho (1-100): El meu és més gran.
Intenta-ho (1-100): Correcte! Has encertat en 3 intents.`,
          sortidaMostrada: `Intenta-ho (1-100): 50
El meu és més menut.
Intenta-ho (1-100): 12
El meu és més gran.
Intenta-ho (1-100): 25
Correcte! Has encertat en 3 intents.`
        },
        pista: 'Compta els intents **fallits** dins del bucle i, quan acabes, suma-li 1 (el que ha encertat). Així el compte és exacte.'
      },
      {
        id: 'ex4', titol: 'La guardiola', dificultat: 'repte', temps: '25 min',
        enunciat: 'Demana a l\'usuari quant estalvia cada setmana i quant vol aconseguir. Mostra setmana a setmana quant porta estalviat, fins a arribar a l\'objectiu. Al final, digues quantes setmanes han calgut i si s\'ha passat o no de l\'objectiu. Si l\'estalvi setmanal és 0 o negatiu, avisa i no comences el bucle.',
        exemple: {
          entrada: 'Quant estalvies cada setmana? 30\nQuant vols aconseguir? 100',
          sortida: "Setmana 1: portes 30 euros\nSetmana 2: portes 60 euros\nSetmana 3: portes 90 euros\nSetmana 4: portes 120 euros\nHas aconseguit l'objectiu en 4 setmanes.\nT'has passat 20 euros."
        },
        solucio: {
          titol: 'Guardiola.java',
          text: `import java.util.Scanner;

public class Guardiola {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Quant estalvies cada setmana? ");
        double setmanal = teclat.nextDouble();

        System.out.print("Quant vols aconseguir? ");
        double objectiu = teclat.nextDouble();

        if (setmanal <= 0) {
            System.out.println("Si no estalvies res, no avancem mai. Revisa les dades.");
        } else {
            double diners = 0;
            int setmanes = 0;

            while (diners < objectiu) {
                diners = diners + setmanal;
                setmanes++;
                System.out.println("Setmana " + setmanes + ": portes " + diners + " euros");
            }

            System.out.println("Has aconseguit l'objectiu en " + setmanes + " setmanes.");

            if (diners > objectiu) {
                System.out.println("T'has passat " + (diners - objectiu) + " euros.");
            } else {
                System.out.println("Has encertat just!");
            }
        }
    }
}`,
          entrada: '30\n100\n',
          sortida: `Quant estalvies cada setmana? Quant vols aconseguir? Setmana 1: portes 30.0 euros
Setmana 2: portes 60.0 euros
Setmana 3: portes 90.0 euros
Setmana 4: portes 120.0 euros
Has aconseguit l'objectiu en 4 setmanes.
T'has passat 20.0 euros.`,
          sortidaMostrada: `Quant estalvies cada setmana? 30
Quant vols aconseguir? 100
Setmana 1: portes 30.0 euros
Setmana 2: portes 60.0 euros
Setmana 3: portes 90.0 euros
Setmana 4: portes 120.0 euros
Has aconseguit l'objectiu en 4 setmanes.
T'has passat 20.0 euros.`
        },
        pista: 'El comptador de setmanes i l\'acumulador de diners van junts dins del bucle. La comprovació de «passat o just» es fa DESPRÉS del bucle.'
      }
    ]
  },

  reptes: {
    reptes: [
      {
        titol: 'La nota mitjana de la classe',
        blocs: [
          { p: 'Demana les notes de tota la classe fins que l\'usuari escriga -1. Al final ha de mostrar: quantes notes s\'han escrit, la mitjana, la nota més alta i la més baixa.' },
          { p: 'El repte està en què no pots guardar totes les notes (encara no hem après arrays): has de calcular el màxim i el mínim **sobre la marxa**, comparant cada nota amb la que ja tens guardada.' },
          { p: 'Pensa com començaries el màxim i el mínim... Si els inicialitzes a 0, què passa si totes les notes són més grans que 0? Quina seria la primera nota vàlida per iniciar-los?' }
        ],
        ampliacions: [
          'Afig quants aprovats i quants suspesos hi ha.',
          'Calcula quin percentatge d\'aprovats hi ha (sense oblidar els decimals).',
          'Ordre extra: mostra la nota mitjana arredonida a 2 decimals.'
        ]
      },
      {
        titol: 'El banc que cobra interessos',
        blocs: [
          { p: 'Una persona té 500 € en un banc que li paga un 3 % d\'interessos cada any. Escriu un programa que mostre com evolucionen els diners any a any i digues quants anys calen perquè arribe a 1.000 €.' },
          { p: 'Un 3 % s\'obté multiplicant per 1.03. Comença amb un `for` de 10 anys per vore l\'evolució i, després, canvia\'l per un `while` que pare quan arribe als 1.000 €.' },
          { p: 'Quan l\'acabes, prova-ho amb un interés del 0 % o negatiu. Què passa? Com hauries de protegir el programa?' }
        ],
        ampliacions: [
          'Que el programa demane el capital inicial, l\'interés i l\'objectiu.',
          'Mostra els diners amb dos decimals.',
          'Compara el resultat de guardar 100 € cada any a més a més dels interessos.'
        ]
      }
    ]
  },

  errors: {
    entradeta: 'Els errors habituals d\'este tema. Hem classificat els perillosíssims (els que pengen el programa) i els lògics (els que donen un resultat equivocat).',
    errors: [
      {
        titol: 'Oblidar d\'incrementar el comptador → bucle infinit',
        mal: { titol: 'Mal.java', text: `int i = 1;\nwhile (i <= 5) {\n    System.out.println(i);\n}` },
        bo: { titol: 'Be.java', text: `int i = 1;\nwhile (i <= 5) {\n    System.out.println(i);\n    i++;\n}` },
        que: 'El programa no acaba mai i ompli la pantalla de números 1.',
        perque: 'La variable `i` de la condició no canvia mai. La condició `i <= 5` sempre és vertadera i el bucle no té manera de parar.',
        detectar: 'El programa no acaba, la pantalla no para de créixer i has de parar-lo amb el botó *Stop* o `Ctrl + C`.',
        corregir: 'Assegura\'t que **alguna cosa dins del bucle acosta la condició a fer-se falsa**: `i++`. Regla: abans d\'executar, llig el bucle i pregunta\'t «què farà que pare?».'
      },
      {
        titol: 'Punt i coma darrere del while (no dona error!)',
        mal: { titol: 'Mal.java', text: `int i = 1;\nwhile (i <= 5);\n{\n    System.out.println(i);\n    i++;\n}` },
        bo: { titol: 'Be.java', text: `int i = 1;\nwhile (i <= 5) {\n    System.out.println(i);\n    i++;\n}` },
        que: 'El programa es queda penjat i no escriu res de res. I no dona cap error de compilació.',
        perque: 'El `;` deixa el `while` amb el cos buit: comprova la condició infinitament sense fer res, i mai no arriba a executar les claus de davall.',
        detectar: 'Compila bé però no acaba ni mostra res. És el mateix parany que ja vam vore amb el `if` en el tema anterior.',
        corregir: 'Lleva el `;` de darrere de la condició. Norma pràctica: després de `while (condició)` **sempre** ve una clau `{`.'
      },
      {
        titol: 'Inicialitzar l\'acumulador dins del bucle',
        mal: { titol: 'Mal.java', text: `for (int i = 1; i <= 5; i++) {\n    int suma = 0;\n    suma = suma + i;\n    System.out.println(suma);\n}` },
        bo: { titol: 'Be.java', text: `int suma = 0;\nfor (int i = 1; i <= 5; i++) {\n    suma = suma + i;\n    System.out.println(suma);\n}` },
        que: 'En compte de 1, 3, 6, 10, 15, mostra 1, 2, 3, 4, 5. L\'acumulador «s\'oblida» del que havia sumat abans.',
        perque: 'Si creem la variable dins del bucle, es torna a crear a cada volta amb el valor 0. No és un error de Java: és un error de disseny, i el programa compila perfectament.',
        detectar: 'La suma final no és la que esperaves. Sempre sol ser un problema de **on està creada** la variable.',
        corregir: 'Les variables que es volen guardar mentre el bucle roda es creen **abans** del bucle. Dins només s\'actualitzen.'
      },
      {
        titol: 'Comptar una volta de més o de menys',
        mal: { titol: 'Mal.java', text: `for (int i = 1; i < 5; i++) {\n    System.out.println("Volta " + i);\n}` },
        bo: { titol: 'Be.java', text: `for (int i = 1; i <= 5; i++) {\n    System.out.println("Volta " + i);\n}` },
        que: 'El primer bucle fa 4 voltes quan en volem 5.',
        perque: 'Amb `<` el número 5 no entra mai. Per comptar de l\'1 al 5 inclòs, la condició ha de ser `i <= 5`.',
        detectar: 'Compta les línies de l\'eixida i compara-les amb les que esperaves. És l\'error número u amb els bucles.',
        corregir: 'Regla pràctica: si el comptador **comença en 0**, la condició és `< N`; si **comença en 1**, és `<= N`.'
      },
      {
        titol: 'Condició del while que ja és falsa de bon principi',
        mal: { titol: 'Mal.java', text: `int i = 1;\nwhile (i > 10) {\n    System.out.println(i);\n    i++;\n}\nSystem.out.println("Açò s'escriu sempre");` },
        bo: { titol: 'Be.java', text: `int i = 1;\nwhile (i < 10) {\n    System.out.println(i);\n    i++;\n}\nSystem.out.println("Fi");` },
        que: 'El programa no mostra ni un número i pareix que «no faça res».',
        perque: 'La primera comprovació de la condició (`1 > 10`) ja és falsa, i el cos del bucle no s\'executa mai.',
        detectar: 'El programa acaba massa ràpid i sense eixida. Mira la condició i pensa si el primer valor la complix.',
        corregir: 'Corregeix la condició perquè siga vertadera al principi. Si el bucle pot fer zero voltes i això és correcte, considera afegir un missatge per a l\'usuari.'
      },
      {
        titol: 'Comparar textos amb == en la condició del bucle',
        mal: { titol: 'Mal.java', text: `String clau = "";\nwhile (clau != "java") {\n    System.out.print("Contrasenya: ");\n    clau = teclat.next();\n}` },
        bo: { titol: 'Be.java', text: `String clau = "";\nwhile (!clau.equals("java")) {\n    System.out.print("Contrasenya: ");\n    clau = teclat.next();\n}` },
        que: 'El bucle no s\'acaba **mai**, ni tan sols quan l\'usuari escriu la contrasenya correcta. Bucle infinit.',
        perque: 'Amb textos, `!=` compara si són objectes diferents, i el text del teclat sempre és un objecte nou. Per això la condició és sempre vertadera.',
        detectar: 'Demanes la contrasenya bé i el programa no reacciona: torna a preguntar sempre. Comparació de text + bucle = compte!',
        corregir: 'Fes servir `!clau.equals("java")`. **Els textos es comparen amb `equals`**, dins i fora dels bucles.'
      }
    ]
  },

  resum: {
    entradeta: 'Les idees que has d\'endur-te d\'este tema.',
    idees: [
      'Un **bucle** repetix codi: no escrivim mai el mateix mil vegades.',
      '`while` repetix **mentres** la condició siga vertadera.',
      '`for` és per quan sabem quantes voltes volem.',
      'Tot bucle té tres peces: valor inicial, condició i canvi del comptador.',
      'Sense el canvi del comptador → **bucle infinit** (`Ctrl + C` per a parar-lo).',
      'Un **comptador** (`i++`) compta voltes; un **acumulador** (`suma = suma + x`) guarda totals.',
      'Els acumuladors i comptadors es creen **fora** del bucle.',
      '`break` servix per a eixir del bucle quan ja tenim el que buscàvem.',
      'Un bucle pot fer **zero voltes** si la condició ja és falsa.'
    ]
  },

  autoavaluacio: {
    entradeta: 'Nou preguntes. Pensa-les abans de mirar la solució.',
    preguntes: [
      {
        pregunta: 'Quantes voltes fa este bucle?',
        codi: { titol: 'Pregunta.java', text: `for (int i = 1; i <= 4; i++) {\n    System.out.println(i);\n}` },
        resposta: '4 voltes: s\'escriuen 1, 2, 3 i 4.',
        perque: 'La condició és `i <= 4`, és a dir, fins a 4 inclòs. Comença en 1, així que fa 4 voltes.'
      },
      {
        pregunta: 'Quina diferència hi ha entre `while` i `for`?',
        opcions: [
          'No hi ha cap diferència, fan exactament el mateix codi.',
          '`for` és per quan sabem quantes voltes volem; `while`, quan depén d\'una condició.',
          '`while` només servix per a comptar.'
        ],
        resposta: 'b) `for` per a voltes conegudes i `while` per a condicions que no controlem.',
        perque: 'Els dos poden fer la mateixa faena, però el `for` ho diu tot en una línia (on comença, fins quan, com canvia). Quan sabem el número de voltes, queda més clar.'
      },
      {
        pregunta: 'Què és un bucle infinit?',
        resposta: 'Un bucle del qual el programa no pot eixir mai perquè la seua condició no arriba a ser falsa.',
        perque: 'Normalment passa perquè falta canviar la variable de la condició. El programa compila bé, però es queda penjat: cal parar-lo amb el botó *Stop* o `Ctrl + C`.'
      },
      {
        pregunta: 'Este bucle no acaba mai. Per què?',
        codi: { titol: 'Pregunta.java', text: `int i = 1;\nwhile (i <= 3) {\n    System.out.println(i);\n}` },
        resposta: 'Falta `i++` dins del bucle, així que `i` sempre val 1.',
        perque: 'La condició `i <= 3` sempre és vertadera perquè `i` no canvia mai. Cal afegir la línia que incrementa el comptador perquè el bucle puga acabar.'
      },
      {
        pregunta: 'Escriu un bucle que sume els números de l\'1 al 5 i mostre el total.',
        resposta: '`int suma = 0; for (int i = 1; i <= 5; i++) { suma = suma + i; } System.out.println(suma);`',
        perque: 'La variable `suma` és l\'acumulador: es crea **abans** del bucle amb el valor 0 i dins del bucle va sumant el comptador. El resultat és 15.'
      },
      {
        pregunta: 'Quantes voltes fa este bucle i què s\'escriu?',
        codi: { titol: 'Pregunta.java', text: `int i = 2;\nwhile (i < 10) {\n    System.out.println(i);\n    i = i + 2;\n}` },
        resposta: 'Fa 4 voltes i s\'escriuen 2, 4, 6 i 8.',
        perque: 'El comptador va de 2 en 2. Quan val 10, la condició `i < 10` ja no es complix (el 10 no entra) i el bucle para. Per això no s\'escriu el 10.'
      },
      {
        pregunta: 'Per què l\'acumulador s\'ha de crear fora del bucle?',
        resposta: 'Perquè si es crea dins, es torna a posar a zero a cada volta i es perd el total acumulat.',
        perque: 'Una variable creada dins del bucle naix i mor en cada volta. Si volem recordar el total entre voltes, ha de nàixer abans i viure mentres el bucle treballa.'
      },
      {
        pregunta: 'Què fa exactament `break` dins d\'un bucle?',
        opcions: [
          'Fa un descans d\'un segon i continua.',
          'Eix del bucle immediatament.',
          'Torna a començar el bucle des del principi.'
        ],
        resposta: 'b) Eix del bucle immediatament.',
        perque: 'Quan `break` s\'executa, el bucle acaba i el programa continua en la línia següent, sense fer cap volta més. És molt útil per a buscar alguna cosa i parar quan la trobem.'
      },
      {
        pregunta: 'Volem demanar números fins que l\'usuari escriga un 0, i sumar-los tots (el 0 no compta). Escriu el bucle.',
        resposta: '`int suma = 0; int n = teclat.nextInt(); while (n != 0) { suma = suma + n; n = teclat.nextInt(); }`',
        perque: 'El 0 és el valor **sentinella**: només indica que cal acabar. Per això la condició del bucle el detecta abans de sumar-lo. Si el sumàrem dins del bucle, el resultat seria incorrecte.'
      }
    ]
  },

  /* ------------------------------------------------------- DIAPOSITIVES */
  diapositives: {
    objectiu: 'Fer que el programa repetisca codi: comptar, acumular i parar en el moment correcte.',
    index: [
      'Per què necessitem bucles?',
      'El bucle while',
      'Comptadors i acumuladors',
      'El bucle for',
      'Bucles que depenen de l\'usuari',
      'break: eixir quan toca',
      'Bucles infinits',
      'Practiquem'
    ],
    blocs: [
      {
        tipus: 'concepte',
        titol: 'Per què bucles?',
        bullets: [
          'Sense bucles: escriure el mateix 5, 100 o 1.000 vegades',
          'Amb bucles: escrivim la repetició UNA volta',
          'El programa repetix el codi per nosaltres',
          'Preguntes clau: quantes voltes? i quan para?'
        ],
        notes: 'Fer la comparació: 3 línies escrites a mà enfront d\'un bucle que conta fins a 100.'
      },
      {
        tipus: 'esquema',
        titol: 'Anatomia d\'un bucle',
        flux: ['Comptador inicial', 'Condició', 'Cos del bucle', 'Canvi del comptador', 'Fi'],
        nota: 'Les tres peces: valor inicial, condició i canvi. Si falta l\'última → bucle infinit.'
      },
      {
        tipus: 'codi',
        titol: 'El primer while',
        codi: 'int i = 1;\n\nwhile (i <= 5) {\n    System.out.println("Volta " + i);\n    i = i + 1;\n}',
        sortida: 'Volta 1\nVolta 2\nVolta 3\nVolta 4\nVolta 5',
        notes: 'Contar en veu alta les voltes amb la classe. Preguntar què passa si llevem i = i + 1.'
      },
      {
        tipus: 'codi',
        titol: 'Comptador i acumulador',
        codi: 'int suma = 0;              // acumulador, FORA del bucle\n\nfor (int i = 1; i <= 10; i++) {\n    suma = suma + i;       // dins: s\'actualitza\n}\n\nSystem.out.println("La suma és " + suma);',
        sortida: 'La suma és 55',
        notes: 'Insistir en la diferència: el comptador compta voltes, l\'acumulador guarda un total.'
      },
      {
        tipus: 'comparacio',
        titol: 'while o for?',
        esquerra: { titol: 'while', bullets: ['No sé quantes voltes', 'Depén de l\'usuari', 'Depén d\'una condició', 'Exemple: contrasenya'] },
        dreta: { titol: 'for', bullets: ['Sé quantes voltes', 'Comptador amb inici i fi', 'Tot en una línia', 'Exemple: taula del 7'] }
      },
      {
        tipus: 'codi',
        titol: 'Bucles que esperen l\'usuari',
        codi: 'String clau = "";\n\nwhile (!clau.equals("java2026")) {\n    System.out.print("Contrasenya: ");\n    clau = teclat.next();\n}\n\nSystem.out.println("Endavant!");',
        sortida: 'Contrasenya: hola\nContrasenya: java2026\nEndavant!',
        notes: 'Recordar: els textos es comparen amb equals. Amb == el bucle no acabaria mai.'
      },
      {
        tipus: 'codi',
        titol: 'break: eixir quan ja el tenim',
        codi: 'while (true) {\n    if (numero % divisor == 0) {\n        System.out.println("El divisor és " + divisor);\n        break;\n    }\n    divisor++;\n}',
        sortida: 'El divisor és 3',
        notes: 'while (true) sense break = bucle infinit segur.'
      },
      {
        tipus: 'activitat',
        titol: 'Ara et toca a tu',
        enunciat: 'Fes un programa que demane notes fins que l\'usuari escriga -1 i mostre la mitjana.',
        temps: '15 min',
        pistes: ['Necessites un acumulador i un comptador', 'El -1 no es suma mai', 'Compte: divideix entre un double'],
        notes: 'Recordar que encara no tenim arrays: no cal guardar totes les notes, només la suma i quantes n\'hi ha.'
      },
      {
        tipus: 'pregunta',
        titol: 'Pensem un moment',
        pregunta: 'Per què creus que un bucle infinit no dona cap error de compilació? Com el podríem detectar abans d\'executar-lo?'
      }
    ],
    resum: [
      'Els bucles repetixen codi sense escriure\'l mil vegades.',
      'while: mentres la condició siga vertadera.',
      'for: quan sabem quantes voltes volem.',
      'Tres peces: inici, condició i canvi del comptador.',
      'Comptador compta voltes; acumulador guarda totals.',
      'Acumuladors i comptadors es creen fora del bucle.',
      'break eix del bucle; sense ell, while (true) no para mai.',
      'Un bucle pot fer zero voltes: depén de la condició.'
    ],
    seguent: 'Tema 4 · Guardar moltes dades: els arrays'
  }
};
