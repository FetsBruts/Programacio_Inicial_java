/* ==========================================================================
   TEMA 6 · Classes i objectes  —  contingut de la pàgina
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   · sortida = eixida real (es comprova amb  node eines/prova-codi-java.mjs 6 )
   ========================================================================== */
globalThis.TEMA = {
  n: 6,
  titol: 'Classes i objectes',
  subtitol: 'Dades i accions que viatgen juntes: el meu primer «jugador» de veritat',
  durada: '3 hores de classe (tema llarg: millor en dos dies)',

  hero: {
    etiqueta: 'Tema 6 · Sessió de 3 hores',
    entradeta: 'Fins ara teníem dades per un costat i mètodes per un altre. Una classe ho ajunta: un motlle per a crear coses (un jugador, un mòbil, un compte) que porten les seues dades i saben fer les seues accions.',
    meta: [
      '⏱ 3 hores (o dos dies)',
      '📦 Fase 2 · Estructurar el programa',
      '🧩 Necessites: Temes 0 a 5',
      '❓ La pregunta clau: de què està fet i què sap fer?'
    ]
  },

  introduccio: {
    titol: 'Una situació per començar',
    emoji: '🎮',
    blocs: [
      { p: 'Volem fer un joc senzill amb tres jugadors. Amb el que sabem, cada jugador necessita les seues variables: `nom1`, `vida1`, `punts1`, `nom2`, `vida2`, `punts2`…' },
      { codi: {
        titol: 'VariablesSoles.java',
        etiqueta: 'DADES SEPARADES',
        text: `String nom1 = "Ana";
int vida1 = 100;
int punts1 = 0;

String nom2 = "Bruno";
int vida2 = 80;
int punts2 = 150;

// i si volem curar el jugador 1? Caldrà una funció per cada u...
// i per a mostrar-lo? I per a pujar-lo de nivell?`
      } },
      { p: 'El problema no és escriure-ho: el problema és que les dades **d\'un mateix jugador estan escampades** en variables distintes. Si un dia afegim un jugador 4, hem de canviar el programa en molts llocs.' },
      { p: 'A més, hi ha coses que **van sempre juntes**: la vida i la puntuació són de l\'Ana, no del Bruno. Eixa unió és el que ens falta.' },
      { p: 'La solució és crear un **motlle**: una **classe** que diga «un jugador té un nom, una vida, una puntuació i un nivell, i sap atacar, curar-se i pujar de nivell». Després farem **objectes** concrets amb eixe motlle: l\'Ana, el Bruno, la Carla. Cadascun amb les seues dades.' }
    ],
    plan: [
      ['30-40 min', 'Explicació i demos'],
      ['60-75 min', 'Programació guiada'],
      ['60-75 min', 'Exercicis'],
      ['15-30 min', 'Repàs i repte']
    ],
    prerequisits: [
      'Mètodes amb paràmetres i `return` (Tema 5).',
      'Arrays per a guardar molts elements (Tema 4).',
      'Bucles i condicions (Temes 2 i 3).'
    ]
  },

  objectius: {
    intro: 'En acabar esta sessió has de saber fer estes coses:',
    llista: [
      'Explicar amb les teues paraules què és una classe i què és un objecte.',
      'Escriure una classe amb els seus **atributs**.',
      'Crear objectes amb **`new`** i accedir a les seues dades amb el punt.',
      'Escriure **mètodes d\'objecte** que treballen amb les dades d\'eixe objecte.',
      'Escriure un **constructor** per a donar els valors inicials.',
      'Guardar objectes dins d\'un array i recórrer-los amb un bucle.'
    ]
  },

  teoria: {
    titol: 'Teoria, poc a poc',
    entradeta: 'Una idea → un exemple. I sempre la mateixa pregunta: quines dades té, i què sap fer?',
    blocs: [
      { h3: '1. La classe és el motlle' },
      { p: 'Una **classe** és la descripció d\'una cosa: quines dades tindrà i què sabrà fer. No és la cosa: és el motlle per a fabricar-la.' },
      { codi: {
        titol: 'Jugador.java',
        etiqueta: 'EL MOTLLE',
        text: `public class Jugador {
    String nom;        // atributs: les dades que tindrà cada jugador
    int vida;
    int puntuacio;
    int nivell;

    // ...i més avall els mètodes: el que sap fer
}`
      } },
      { p: 'A dins de la classe, les variables es diuen **atributs**. Escriure la classe **no crea cap jugador**: només diu com seran.' },
      { p: 'Pensa-ho així: el motlle de fer galletes no és una galleta. Amb un motlle pots fer-ne trenta, i cadascuna tindrà la seua forma de xocolate.' },
      { codi: {
        titol: 'Motlle.java',
        etiqueta: 'COM ES VEURIA',
        text: `    CLASSE (el motlle)              OBJECTES (coses fetes amb el motlle)
   +---------------------+         +-------------------------------+
   |  Jugador            |         |  ana        bruno      carla  |
   |  ------------------ |         |  nom        nom        nom    |
   |  nom:    String     |  --->   |  vida       vida       vida   |
   |  vida:   int        |         |  puntuacio  puntuacio  puntuacio
   |  puntuacio: int     |         |  nivell     nivell     nivell |
   |  nivell: int        |         +-------------------------------+
   |                     |          cadascun amb les SEUES dades
   |  atacar()           |
   |  curar(int)         |
   |  pujarNivell()      |
   +---------------------+`
      } },

      { h3: '2. Crear un objecte amb new' },
      { p: 'Per a crear un jugador de veritat es fa servir `new`. La variable `ana` guarda l\'objecte, i s\'arriba a les seues dades amb un **punt**.' },
      { codi: {
        titol: 'Jugador.java',
        etiqueta: 'PRIMER OBJECTE',
        text: `public class Jugador {
    String nom;
    int vida;

    public static void main(String[] args) {
        Jugador ana = new Jugador();   // creem un jugador
        ana.nom = "Ana";               // li posem les dades
        ana.vida = 100;

        Jugador bruno = new Jugador(); // i un altre, independent
        bruno.nom = "Bruno";
        bruno.vida = 80;

        System.out.println(ana.nom + " té " + ana.vida + " de vida.");
        System.out.println(bruno.nom + " té " + bruno.vida + " de vida.");
    }
}`,
        sortida: `Ana té 100 de vida.
Bruno té 80 de vida.`
      } },
      { p: 'Fixa\'t en la línia `Jugador ana = new Jugador();`. Es llig: «`ana` serà un `Jugador`, i el fabrique amb `new`». Després `ana.nom` és el nom d\'**este** jugador, i `bruno.nom` el de l\'altre: **cada objecte té les seues pròpies dades**.' },
      { nota: { tipus: 'important', text: 'Un dels avantatges grans d\'este tema: si hui afegim la Carla, el codi no canvia gens. `Jugador carla = new Jugador();` i ja està. Amb variables soltes, afegir un jugador obligaria a tocar tot el programa.' } },

      { h3: '3. Els mètodes de l\'objecte (sense static!)' },
      { p: 'Ací està la diferència més important amb el tema anterior: els mètodes d\'una classe **no porten `static`**, i per això poden treballar amb les dades de l\'objecte que els crida.' },
      { codi: {
        titol: 'Jugador.java',
        etiqueta: 'MÈTODES DE L\'OBJECTE',
        text: `public class Jugador {
    String nom;
    int vida;
    int puntuacio;

    public void atacar() {
        System.out.println(nom + " llança un atac!");
        puntuacio = puntuacio + 10;      // este atribut és d'ESTE objecte
    }

    public void mostra() {
        System.out.println(nom + " · vida: " + vida + " · punts: " + puntuacio);
    }

    public static void main(String[] args) {
        Jugador ana = new Jugador();
        ana.nom = "Ana";
        ana.vida = 100;

        ana.atacar();
        ana.atacar();
        ana.mostra();
    }
}`,
        sortida: `Ana llança un atac!
Ana llança un atac!
Ana · vida: 100 · punts: 20`
      } },
      { p: 'Dins de `atacar()` escrivim `nom` i `puntuacio` sense posar `ana.` davant. Java sap que són els atributs **de l\'objecte que ha rebut la crida**: si cridem `ana.atacar()`, són els de l\'Ana; si cridem `bruno.atacar()`, els del Bruno.' },
      { nota: { tipus: 'important', text: 'Regla per a no confondre\'s mai més: `static` = «no necessite cap objecte» (com els mètodes del tema 5 i `main`); sense `static` = «soc un mètode d\'un objecte concret i treballe amb les seues dades». Per això els mètodes del `Jugador` no porten `static`.' } },

      { h3: '4. El constructor: donar els valors inicials' },
      { p: 'Escriure quatre línies per a preparar cada jugador és incomodo. El **constructor** és un mètode especial que s\'executa **automàticament** en crear l\'objecte amb `new`, i servix per a deixar-lo a punt.' },
      { codi: {
        titol: 'Jugador.java',
        etiqueta: 'CONSTRUCTOR',
        text: `public class Jugador {
    String nom;
    int vida;
    int puntuacio;
    int nivell;

    public Jugador(String nom) {      // es diu igual que la classe i no té tipus de retorn
        this.nom = nom;
        this.vida = 100;
        this.puntuacio = 0;
        this.nivell = 1;
    }

    public void mostra() {
        System.out.println(nom + " · vida: " + vida + " · punts: " + puntuacio + " · nivell: " + nivell);
    }

    public static void main(String[] args) {
        Jugador ana = new Jugador("Ana");
        Jugador bruno = new Jugador("Bruno");

        ana.mostra();
        bruno.mostra();
    }
}`,
        sortida: `Ana · vida: 100 · punts: 0 · nivell: 1
Bruno · vida: 100 · punts: 0 · nivell: 1`
      } },
      { p: 'Tres detalls del constructor:' },
      { llista: [
        'El nom és **exactament** el de la classe: `Jugador`.',
        '**No porta tipus de retorn**: ni `void`, ni `int`, ni res.',
        'S\'executa sol quan fem `new Jugador("Ana")`: nosaltres no el cridem mai directament.'
      ], numerada: true },
      { p: 'I què és això de `this.nom`? `this` vol dir «este objecte». Com que el paràmetre es diu igual que l\'atribut, amb `this.nom` li diem a Java que guarde el valor en **l\'atribut** del mateix objecte. Sense `this` estaria assignant el paràmetre a si mateix.' },
      { nota: { tipus: 'tip', text: 'Si t\'embolica, pots canviar el nom del paràmetre: `public Jugador(String nomNou) { nom = nomNou; }`. Funciona igual i no cal `this`. Molta gent ho fa així quan comença.' } },

      { h3: '5. Fer que l\'objecte faça coses útils' },
      { p: 'Ara completem el jugador amb les accions del joc. Este és el motlle que farem servir en la resta del tema.' },
      { codi: {
        titol: 'Jugador.java',
        etiqueta: 'MOTLLE COMPLET',
        text: `public class Jugador {
    String nom;
    int vida;
    int puntuacio;
    int nivell;

    public Jugador(String nom) {
        this.nom = nom;
        this.vida = 100;
        this.puntuacio = 0;
        this.nivell = 1;
    }

    public void atacar() {
        System.out.println(nom + " llança un atac!");
        puntuacio = puntuacio + 10;
    }

    public void curar(int quantitat) {
        vida = vida + quantitat;
        if (vida > 100) {
            vida = 100;
        }
        System.out.println(nom + " es cura " + quantitat + " punts. Vida: " + vida);
    }

    public void pujarNivell() {
        nivell++;
        puntuacio = puntuacio + 50;
        System.out.println(nom + " ha pujat al nivell " + nivell + "!");
    }

    public void mostra() {
        System.out.println(nom + " · nivell " + nivell + " · vida " + vida + " · punts " + puntuacio);
    }

    public static void main(String[] args) {
        Jugador ana = new Jugador("Ana");

        ana.atacar();
        ana.atacar();
        ana.curar(30);
        ana.pujarNivell();
        ana.mostra();
    }
}`,
        sortida: `Ana llança un atac!
Ana llança un atac!
Ana es cura 30 punts. Vida: 100
Ana ha pujat al nivell 2!
Ana · nivell 2 · vida 100 · punts 70`
      } },
      { p: 'Comprovem el compte a mà: dos atacs són 20 punts, la curació deixa la vida a 100 (perquè ja en tenia 100 i el límit és 100), i pujar de nivell suma 50 punts: 20 + 50 = 70. **El programa diu el mateix.**' },
      { nota: { tipus: 'tip', text: 'Fixa\'t en el límit de la curació: `if (vida > 100) { vida = 100; }`. Eixa protecció és dins del mètode, i així qualsevol programa que use el `Jugador` tindrà el límit sense haver de recordar-lo. **Els objectes s\'encarreguen de les seues regles.**' } },

      { h3: '6. Cada objecte va a la seua' },
      { p: 'Dos objectes de la mateixa classe compartixen el motlle, però **no** les dades. Este és el dibuix mental que has de tindre clar:' },
      { codi: {
        titol: 'DosObjectes.java',
        etiqueta: 'DOS OBJECTES',
        text: `Jugador ana = new Jugador("Ana");
Jugador bruno = new Jugador("Bruno");

ana.atacar();

// ana:   nom="Ana"    vida=100  punts=10  nivell=1
// bruno: nom="Bruno"  vida=100  punts=0   nivell=1
//        els punts de l'Ana NO han canviat els del Bruno`
      } },
      { nota: { tipus: 'avis', text: 'Molta gent es pensa que `Jugador ana = new Jugador("Ana"); Jugador copia = ana;` crea una còpia. **No la crea**: els dos noms apunten al mateix objecte, i si el canvies per un costat, el veus canviat per l\'altre. Si vols dos objectes iguals, cal fer `new` dos vegades.' } },

      { h3: '7. Un array d\'objectes' },
      { p: 'I ara ajuntem tot el que hem après: si un joc té molts jugadors, es guarden en un **array d\'objectes** i es recorren amb un bucle.' },
      { codi: {
        titol: 'Equip.java',
        etiqueta: 'ARRAY + OBJECTES',
        text: `public class Jugador {
    String nom;
    int vida;
    int puntuacio;

    public Jugador(String nom) {
        this.nom = nom;
        this.vida = 100;
        this.puntuacio = 0;
    }

    public void atacar() {
        puntuacio = puntuacio + 10;
    }

    public void mostra() {
        System.out.println(nom + " (" + puntuacio + " punts)");
    }

    public static void main(String[] args) {
        Jugador[] equip = new Jugador[3];

        equip[0] = new Jugador("Ana");
        equip[1] = new Jugador("Bruno");
        equip[2] = new Jugador("Carla");

        for (int i = 0; i < equip.length; i++) {
            equip[i].atacar();
            equip[i].atacar();
            equip[i].mostra();
        }
    }
}`,
        sortida: `Ana (20 punts)
Bruno (20 punts)
Carla (20 punts)`
      } },
      { p: 'Cada casella de l\'array guarda **un objecte sencer**, no un número. I per a cridar el seu mètode: `equip[i].atacar()`. Es llig de dins cap a fora: `equip[i]` és el jugador, i `.atacar()` el que li demanem.' },
      { nota: { tipus: 'info', text: 'Com vam vore en el Tema 4, les caselles d\'un array de números comencen valent 0. Les d\'un **array d\'objectes** comencen valent `null`, que vol dir «no hi ha cap objecte ací». Si intentes cridar un mètode d\'una casella `null`, el programa s\'atura amb `NullPointerException`. Per això sempre s\'omplin abans de recórrer.' } },

      { h3: '8. I l\'encapsulació?' },
      { p: 'Hem fet els atributs públics perquè siga senzill: qualsevol part del programa pot escriure `ana.vida = 10000;`. Un programa de veritat no ho permet: amaga les dades i obliga a passar pel mètode, que és qui coneix les regles.' },
      { codi: {
        titol: 'MésEndavant.java',
        etiqueta: 'PER A MÉS ENDAVANT',
        text: `private int vida;      // ningú no pot tocar la vida des de fora

public int getVida() {
    return vida;       // per a consultar-la
}

public void curar(int quantitat) {   // i per a modificar-la, amb les regles
    ...
}`
      } },
      { nota: { tipus: 'només-ensenyament', text: 'Estes paraules (`private`, `getVida()`) són la **manera professional** de fer-ho, i les vorem en el proper mòdul. **Ací no les necessitem**: amb els atributs públics n\'hi ha prou per a entendre què és una classe. Però convé que sàpigues que existix, i que en els programes de veritat les dades solen estar protegides.' } }
    ]
  },

  exemples: {
    titol: 'Exemples explicats pas a pas',
    entradeta: 'Cada exemple: què volem aconseguir, el codi, què apareix per pantalla i per què funciona.',
    blocs: [
      { h3: 'Exemple 1 · El mòbil i la seua bateria' },
      { p: '**Què volem?** Modelar un mòbil: marca, bateria i les accions de carregar-lo i usar-lo. És un exemple que es veu de seguida a la pantalla.' },
      { codi: {
        titol: 'Mobil.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Mobil {
    String marca;
    String model;
    int bateria;
    boolean engegat;

    public Mobil(String marca, String model) {
        this.marca = marca;
        this.model = model;
        this.bateria = 100;
        this.engegat = false;
    }

    public void engegar() {
        engegat = true;
        System.out.println(marca + " " + model + " engegat.");
    }

    public void usar(int minuts) {
        if (!engegat) {
            System.out.println("Primer cal engegar el mòbil!");
            return;
        }

        bateria = bateria - minuts;
        if (bateria < 0) {
            bateria = 0;
            System.out.println("El mòbil s'ha quedat sense bateria!");
        } else {
            System.out.println("Usat " + minuts + " minuts. Bateria: " + bateria + "%");
        }
    }

    public void carregar() {
        bateria = 100;
        System.out.println("Bateria al 100%.");
    }

    public static void main(String[] args) {
        Mobil meu = new Mobil("Samsung", "Galaxy A55");

        meu.engegar();
        meu.usar(30);
        meu.usar(80);
        meu.carregar();
        meu.usar(10);
    }
}`,
        sortida: `Samsung Galaxy A55 engegat.
Usat 30 minuts. Bateria: 70%
El mòbil s'ha quedat sense bateria!
Bateria al 100%.
Usat 10 minuts. Bateria: 90%`
      } },
      { p: '**Per què funciona:** l\'atribut `engegat` guarda l\'estat del mòbil, i el mètode `usar` el consulta **abans** de fer res. Este és el patró que fa que els objectes siguen útils: les seues regles viuen dins dels seus mètodes.' },
      { nota: { tipus: 'info', text: 'Hem usat `return;` sense valor per a eixir del mètode abans d\'hora. En un mètode `void`, `return;` servix per a dir «ja està, ací acaba». Ho has vist en el tema anterior amb `break` dins d\'un bucle: la mateixa idea.' } },

      { h3: 'Exemple 2 · El compte de la targeta' },
      { p: '**Què volem?** Un compte amb titular i saldo, que permeta ingressar i traure diners, però **sense poder-se quedar en negatiu**.' },
      { codi: {
        titol: 'Compte.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Compte {
    String titular;
    double saldo;

    public Compte(String titular, double saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    public void ingressar(double quantitat) {
        saldo = saldo + quantitat;
        System.out.println("Ingressats " + quantitat + " euros. Saldo: " + saldo);
    }

    public void retirar(double quantitat) {
        if (quantitat > saldo) {
            System.out.println("No hi ha prou diners! Saldo: " + saldo);
        } else {
            saldo = saldo - quantitat;
            System.out.println("Retirats " + quantitat + " euros. Saldo: " + saldo);
        }
    }

    public static void main(String[] args) {
        Compte meu = new Compte("Ana", 50.0);

        meu.ingressar(25.0);
        meu.retirar(60.0);
        meu.retirar(200.0);
    }
}`,
        sortida: `Ingressats 25.0 euros. Saldo: 75.0
Retirats 60.0 euros. Saldo: 15.0
No hi ha prou diners! Saldo: 15.0`
      } },
      { p: '**Per què funciona:** la comprovació del saldo està **dins** del mètode `retirar`. Cap programa que use el `Compte` pot deixar-lo en negatiu, encara que s\'equivoque, perquè la regla no està en el programa principal: està en el propi objecte.' },
      { nota: { tipus: 'tip', text: 'Este és el sentit profund de la programació orientada a objectes: que cada cosa protegisca les seues regles. Si demà volem un altre tipus de compte (juvenil, estalvi), farem una altra classe amb les seues regles, i el programa principal no caldrà tocar-lo massa.' } },

      { h3: 'Exemple 3 · Un equip de jugadors' },
      { p: '**Què volem?** Crear un equip de quatre jugadors i esbrinar qui té més punts. Es juntes tot: classe, array, bucle i decisió.' },
      { codi: {
        titol: 'Equip.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Equip {
    String nom;
    int punts;

    public Equip(String nom) {
        this.nom = nom;
        this.punts = 0;
    }

    public void sumarPunts(int quants) {
        punts = punts + quants;
    }

    public static void main(String[] args) {
        Equip[] equip = {
            new Equip("Ana"),
            new Equip("Bruno"),
            new Equip("Carla"),
            new Equip("Dani")
        };

        equip[0].sumarPunts(120);
        equip[1].sumarPunts(95);
        equip[2].sumarPunts(180);
        equip[3].sumarPunts(60);

        int maxim = equip[0].punts;
        int indexMillor = 0;

        for (int i = 1; i < equip.length; i++) {
            if (equip[i].punts > maxim) {
                maxim = equip[i].punts;
                indexMillor = i;
            }
        }

        for (int i = 0; i < equip.length; i++) {
            System.out.println(equip[i].nom + ": " + equip[i].punts + " punts");
        }
        System.out.println("El millor és " + equip[indexMillor].nom + " amb " + maxim + " punts.");
    }
}`,
        sortida: `Ana: 120 punts
Bruno: 95 punts
Carla: 180 punts
Dani: 60 punts
El millor és Carla amb 180 punts.`
      } },
      { p: '**Per què funciona:** l\'array guarda objectes i es recorre amb un `for`. Per a buscar el millor, guardem la **posició** (`indexMillor`) i així podem traure el nom de l\'objecte guanyador. És el mateix patró de l\'aspirant del Tema 4, però amb objectes.' },
      { nota: { tipus: 'tip', text: 'L\'array d\'objectes es pot crear de dos maneres: amb `new Equip[4]` i anar omplint caselles, o directament amb les claus i un `new` en cada lloc, com ací. Les dos són correctes; la segona està bé quan ja saps quants elements i quins són.' } },

      { h3: 'Exemple 4 · Un torn de combat' },
      { p: '**Què volem?** Fer un torn de combat entre dos jugadors: un ataca i l\'altre es cura. Fixa\'t en com els objectes recorden el seu estat.' },
      { codi: {
        titol: 'Combat.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Combat {
    String nom;
    int vida;

    public Combat(String nom, int vida) {
        this.nom = nom;
        this.vida = vida;
    }

    public void rebreDany(int dany) {
        vida = vida - dany;
        if (vida < 0) {
            vida = 0;
        }
        System.out.println(nom + " rep " + dany + " de dany. Vida: " + vida);
    }

    public void curar(int quantitat) {
        vida = vida + quantitat;
        if (vida > 100) {
            vida = 100;
        }
        System.out.println(nom + " es cura " + quantitat + ". Vida: " + vida);
    }

    public static void main(String[] args) {
        Combat ana = new Combat("Ana", 100);
        Combat bruno = new Combat("Bruno", 100);

        ana.rebreDany(35);
        bruno.rebreDany(60);
        bruno.curar(40);
        ana.rebreDany(80);
    }
}`,
        sortida: `Ana rep 35 de dany. Vida: 65
Bruno rep 60 de dany. Vida: 40
Bruno es cura 40. Vida: 80
Ana rep 80 de dany. Vida: 0`
      } },
      { p: '**Per què funciona:** cada objecte guarda la seua vida, i les proteccions (no baixar de 0, no passar de 100) estan dins dels mètodes. El programa principal només diu què passa, no com es calcula.' },

      { h3: 'Quants punts té cadascú?' },
      { p: 'Pensa què apareix per pantalla abans d\'executar. És la prova de si entens què és un objecte.' },
      { prediccio: {
        id: 'pred-objectes',
        titol: 'Pensa abans d\'executar',
        fitxer: 'DosJugadors.java',
        text: `public class DosJugadors {
    String nom;
    int vida;

    public DosJugadors(String nom, int vida) {
        this.nom = nom;
        this.vida = vida;
    }

    public void ferDany(int dany) {
        vida = vida - dany;
    }

    public static void main(String[] args) {
        DosJugadors ana = new DosJugadors("Ana", 100);
        DosJugadors bruno = new DosJugadors("Bruno", 100);

        ana.ferDany(30);

        System.out.println("Ana: " + ana.vida);
        System.out.println("Bruno: " + bruno.vida);
    }
}`,
        sortida: `Ana: 70
Bruno: 100`,
        perque: 'La vida del Bruno no canvia perquè és un atribut **seu**. `vida` dins del mètode vol dir «la vida de l\'objecte que ha rebut la crida», i la crida l\'ha rebuda l\'Ana. Si volguérem fer dany al Bruno, faríem `bruno.ferDany(...)`.'
      } }
    ]
  },

  guiada: {
    titol: 'Programació guiada: ho fem junts',
    entradeta: 'Construirem el nostre joc: primer el motlle, després un objecte, després els mètodes, el constructor, i al final un equip sencer en un array.',
    passos: [
      {
        titol: 'El motlle del joc',
        blocs: [
          { p: 'Pensem què és un jugador per a nosaltres: **nom**, **vida**, **puntuació** i **nivell**. I què sap fer: **atacar**, **curar-se** i **pujar de nivell**.' },
          { taula: {
            cap: ['Què té (atributs)', 'Tipus', 'Valor inicial'],
            files: [
              ['`nom`', '`String`', 'el que li donem'],
              ['`vida`', '`int`', '100'],
              ['`puntuacio`', '`int`', '0'],
              ['`nivell`', '`int`', '1']
            ]
          } },
          { taula: {
            cap: ['Què sap fer (mètodes)', 'Què fa'],
            files: [
              ['`atacar()`', 'suma 10 punts'],
              ['`curar(int quantitat)`', 'recupera vida, com a màxim fins a 100'],
              ['`pujarNivell()`', 'puja de nivell i suma 50 punts'],
              ['`mostra()`', 'mostra l\'estat del jugador']
            ]
          } },
          { preguntaClasse: 'Per què `curar` necessita una dada i `atacar` no?' }
        ]
      },
      {
        titol: 'Un objecte amb les seues dades',
        blocs: [
          { p: 'Comença amb el motlle el més simple possible: només els atributs i `main`, on creem un jugador i li posem les dades.' },
          { codi: {
            titol: 'Jugador.java',
            etiqueta: 'PAS 2',
            text: `public class Jugador {
    String nom;
    int vida;
    int puntuacio;
    int nivell;

    public static void main(String[] args) {
        Jugador ana = new Jugador();

        ana.nom = "Ana";
        ana.vida = 100;
        ana.puntuacio = 0;
        ana.nivell = 1;

        System.out.println("Jugador: " + ana.nom);
        System.out.println("Vida: " + ana.vida);
        System.out.println("Nivell: " + ana.nivell);
    }
}`,
            sortida: `Jugador: Ana
Vida: 100
Nivell: 1`
          } },
          { p: 'Compila i executa. Després canvia les dades del `main` i torna a executar: estàs creant objectes distints amb el mateix motlle.' }
        ]
      },
      {
        titol: 'Els primers mètodes del jugador',
        blocs: [
          { p: 'Ara li donem al jugador la capacitat d\'atacar i de mostrar el seu estat. **Sense `static`**: este mètode pertany a un jugador concret.' },
          { codi: {
            titol: 'Jugador.java',
            etiqueta: 'PAS 3',
            text: `public class Jugador {
    String nom;
    int vida;
    int puntuacio;
    int nivell;

    public void atacar() {
        System.out.println(nom + " llança un atac!");
        puntuacio = puntuacio + 10;
    }

    public void mostra() {
        System.out.println("--- " + nom + " ---");
        System.out.println("Vida: " + vida);
        System.out.println("Puntuació: " + puntuacio);
        System.out.println("Nivell: " + nivell);
    }

    public static void main(String[] args) {
        Jugador ana = new Jugador();
        ana.nom = "Ana";
        ana.vida = 100;
        ana.puntuacio = 0;
        ana.nivell = 1;

        ana.atacar();
        ana.atacar();
        ana.atacar();
        ana.mostra();
    }
}`,
            sortida: `Ana llança un atac!
Ana llança un atac!
Ana llança un atac!
--- Ana ---
Vida: 100
Puntuació: 30
Nivell: 1`
          } },
          { p: 'Tres atacs són 30 punts. Fixa\'t que dins de `atacar` no hem escrit `ana.puntuacio`: hem escrit `puntuacio`, i Java ja sap de qui és.' }
        ]
      },
      {
        titol: 'Curar-se i pujar de nivell',
        blocs: [
          { p: '`curar` necessita saber quants punts de vida es recuperen, així que porta un paràmetre. I porta una protecció perquè la vida no puge de 100.' },
          { codi: {
            titol: 'Jugador.java',
            etiqueta: 'PAS 4',
            text: `public class Jugador {
    String nom;
    int vida;
    int puntuacio;
    int nivell;

    public void atacar() {
        System.out.println(nom + " llança un atac!");
        puntuacio = puntuacio + 10;
    }

    public void curar(int quantitat) {
        vida = vida + quantitat;
        if (vida > 100) {
            vida = 100;
        }
        System.out.println(nom + " es cura " + quantitat + " punts. Vida: " + vida);
    }

    public void pujarNivell() {
        nivell++;
        puntuacio = puntuacio + 50;
        System.out.println(nom + " ha pujat al nivell " + nivell + "!");
    }

    public static void main(String[] args) {
        Jugador ana = new Jugador();
        ana.nom = "Ana";
        ana.vida = 60;
        ana.puntuacio = 0;
        ana.nivell = 1;

        ana.curar(25);
        ana.curar(50);
        ana.pujarNivell();
    }
}`,
            sortida: `Ana es cura 25 punts. Vida: 85
Ana es cura 50 punts. Vida: 100
Ana ha pujat al nivell 2!`
          } },
          { preguntaClasse: 'Per què la segona curació deixa la vida a 100 i no a 135?' }
        ]
      },
      {
        titol: 'El constructor: menys línies i menys oblits',
        blocs: [
          { p: 'Escriure quatre línies cada vegada que creem un jugador és perillós: si un dia ens oblidem de posar la vida, el jugador tindrà 0 de vida i no ens n\'adonarem.' },
          { p: 'El constructor ho resol: es diu igual que la classe, no té tipus de retorn i s\'executa sol en fer `new`.' },
          { codi: {
            titol: 'Jugador.java',
            etiqueta: 'PAS 5',
            text: `public class Jugador {
    String nom;
    int vida;
    int puntuacio;
    int nivell;

    public Jugador(String nom) {
        this.nom = nom;
        this.vida = 100;
        this.puntuacio = 0;
        this.nivell = 1;
    }

    public void atacar() {
        puntuacio = puntuacio + 10;
    }

    public void mostra() {
        System.out.println(nom + " · nivell " + nivell + " · vida " + vida + " · punts " + puntuacio);
    }

    public static void main(String[] args) {
        Jugador ana = new Jugador("Ana");
        Jugador bruno = new Jugador("Bruno");

        ana.atacar();
        ana.mostra();
        bruno.mostra();
    }
}`,
            sortida: `Ana · nivell 1 · vida 100 · punts 10
Bruno · nivell 1 · vida 100 · punts 0`
          } },
          { p: 'Mira les dos últimes línies: l\'Ana té 10 punts i el Bruno 0. **Cada objecte guarda les seues dades.** El constructor ha deixat els dos iguals de vida i nivell, però després l\'Ana ha atacat i això només ha canviat l\'Ana.' }
        ]
      },
      {
        titol: 'L\'equip: un array de jugadors',
        blocs: [
          { p: 'Ara que tenim el motlle, afegir jugadors és trivial. Els guardem en un array i fem que tots ataquen amb un bucle.' },
          { codi: {
            titol: 'Equip.java',
            etiqueta: 'PAS 6',
            text: `public class Equip {
    String nom;
    int punts;

    public Equip(String nom) {
        this.nom = nom;
        this.punts = 0;
    }

    public void atacar() {
        punts = punts + 10;
    }

    public void mostra() {
        System.out.println(nom + ": " + punts + " punts");
    }

    public static void main(String[] args) {
        Equip[] equip = new Equip[3];

        equip[0] = new Equip("Ana");
        equip[1] = new Equip("Bruno");
        equip[2] = new Equip("Carla");

        System.out.println("Torn de combat!");
        for (int i = 0; i < equip.length; i++) {
            equip[i].atacar();
            equip[i].atacar();
            equip[i].mostra();
        }
    }
}`,
            sortida: `Torn de combat!
Ana: 20 punts
Bruno: 20 punts
Carla: 20 punts`
          } },
          { nota: { tipus: 'important', text: 'Recorda què guanyem: si demà volem 8 jugadors, només canviem el número de l\'array i afegim els `new Equip(...)`. El bucle i els mètodes no es toquen. **Este és el motiu pel qual existixen les classes.**' } }
        ]
      },
      {
        titol: 'Proves, casos límit i millores',
        blocs: [
          { p: 'Un programa amb objectes es prova provant els objectes:' },
          { taula: {
            cap: ['Què provem', 'Què ha de passar'],
            files: [
              ['Crear dos jugadors i atacar només un', 'Només canvia la puntuació d\'eixe'],
              ['Curar-se amb la vida plena', 'La vida no passa de 100'],
              ['Curar-se amb la vida a 0', 'Recupera vida correctament'],
              ['Accedir a una casella de l\'array sense omplir', '`NullPointerException`: no hi ha objecte'],
              ['Imprimir l\'objecte sencer', 'Ix `Equip@1b6d3586`: per això tenim `mostra()`']
            ]
          } },
          { p: 'I les millores que pots fer tu: un mètode `rebreDany(int)` que baixe la vida, un mètode `estaViu()` que torne `boolean`, que l\'atac faça un dany aleatori, i un mètode `guanyador(Equip altre)` que diga qui va guanyant.' }
        ]
      }
    ]
  },

  mini: {
    intro: 'Activitats curtes per a agafar la mecànica: motlle, objecte, mètode i constructor.',
    exercicis: [
      {
        id: 'mini1', titol: 'El cotxe', dificultat: 'facil', temps: '6 min',
        enunciat: 'Crea una classe `Cotxe` amb els atributs `marca` (text) i `km` (enter). Crea dos cotxes, posa\'ls-hi dades i mostra\'ls.',
        exemple: { entrada: '(no demana dades)', sortida: 'Seat Ibiza amb 12000 km\nToyota Corolla amb 45000 km' },
        solucio: {
          titol: 'Cotxe.java',
          text: `public class Cotxe {
    String marca;
    int km;

    public static void main(String[] args) {
        Cotxe primer = new Cotxe();
        primer.marca = "Seat Ibiza";
        primer.km = 12000;

        Cotxe segon = new Cotxe();
        segon.marca = "Toyota Corolla";
        segon.km = 45000;

        System.out.println(primer.marca + " amb " + primer.km + " km");
        System.out.println(segon.marca + " amb " + segon.km + " km");
    }
}`,
          sortida: `Seat Ibiza amb 12000 km
Toyota Corolla amb 45000 km`,
          perque: 'La classe és el motlle (`Cotxe`), i `primer` i `segon` són dos objectes fets amb eixe motlle. Cadascun guarda la seua marca i els seus quilòmetres.'
        }
      },
      {
        id: 'mini2', titol: 'Que el cotxe conduïsca', dificultat: 'facil', temps: '6 min',
        enunciat: 'Afig a la classe anterior un mètode `conduir(int quants)` que sume quilòmetres a `km` i mostre els quilòmetres totals.',
        solucio: {
          titol: 'CotxeConduit.java',
          text: `public class CotxeConduit {
    String marca;
    int km;

    public void conduir(int quants) {
        km = km + quants;
        System.out.println(marca + " ha conduït " + quants + " km. Total: " + km + " km");
    }

    public static void main(String[] args) {
        CotxeConduit cotxe = new CotxeConduit();
        cotxe.marca = "Seat Ibiza";
        cotxe.km = 12000;

        cotxe.conduir(150);
        cotxe.conduir(90);
    }
}`,
          sortida: `Seat Ibiza ha conduït 150 km. Total: 12150 km
Seat Ibiza ha conduït 90 km. Total: 12240 km`,
          perque: 'El mètode no porta `static` perquè ha de treballar amb els atributs de l\'objecte. `km` dins del mètode és el del cotxe que ha rebut la crida, i el valor es guarda per al pròxim ús.'
        }
      },
      {
        id: 'mini3', titol: 'Amb constructor', dificultat: 'facil', temps: '6 min',
        enunciat: 'Reescriu la classe `Cotxe` perquè tinga un constructor `Cotxe(String marca, int km)` i crea\'n dos amb una sola línia cadascun.',
        exemple: { entrada: '(no demana dades)', sortida: 'Seat Ibiza · 12000 km\nToyota Corolla · 45000 km' },
        solucio: {
          titol: 'Cotxe2.java',
          text: `public class Cotxe2 {
    String marca;
    int km;

    public Cotxe2(String marca, int km) {
        this.marca = marca;
        this.km = km;
    }

    public static void main(String[] args) {
        Cotxe2 primer = new Cotxe2("Seat Ibiza", 12000);
        Cotxe2 segon = new Cotxe2("Toyota Corolla", 45000);

        System.out.println(primer.marca + " · " + primer.km + " km");
        System.out.println(segon.marca + " · " + segon.km + " km");
    }
}`,
          sortida: `Seat Ibiza · 12000 km
Toyota Corolla · 45000 km`,
          perque: 'El constructor s\'executa sol en fer `new Cotxe2(...)`. `this.marca = marca` guarda en l\'atribut del mateix objecte el valor que arriba pel paràmetre. I ara és impossible oblidar-se de posar les dades: Java no et deixa crear el cotxe sense elles.'
        }
      },
      {
        id: 'mini4', titol: 'El mòbil que es queda sense bateria', dificultat: 'mitjana', temps: '8 min',
        enunciat: 'Fes una classe `Mobil` amb `marca` i `bateria` (comença a 100). Afig `usar(int minuts)` que baixe la bateria, però que no baixe de 0 i avise quan s\'acaba.',
        exemple: { entrada: '(no demana dades)', sortida: 'Usat 30 minuts. Bateria: 70%\nUsat 90 minuts. Bateria: 0%\nEl mòbil s\'ha quedat sense bateria!' },
        solucio: {
          titol: 'Mobil.java',
          text: `public class Mobil {
    String marca;
    int bateria;

    public Mobil(String marca) {
        this.marca = marca;
        this.bateria = 100;
    }

    public void usar(int minuts) {
        bateria = bateria - minuts;

        if (bateria <= 0) {
            bateria = 0;
            System.out.println("Usat " + minuts + " minuts. Bateria: 0%");
            System.out.println("El mòbil s'ha quedat sense bateria!");
        } else {
            System.out.println("Usat " + minuts + " minuts. Bateria: " + bateria + "%");
        }
    }

    public static void main(String[] args) {
        Mobil meu = new Mobil("Samsung");

        meu.usar(30);
        meu.usar(90);
    }
}`,
          sortida: `Usat 30 minuts. Bateria: 70%
Usat 90 minuts. Bateria: 0%
El mòbil s'ha quedat sense bateria!`,
          perque: 'La protecció està dins del mètode: primer es resta i després es comprova si ha baixat de 0. Així la bateria mai no serà negativa, i el missatge d\'avís apareix només quan toca.'
        }
      },
      {
        id: 'mini5', titol: 'Troba l\'error: l\'objecte que no existix', dificultat: 'mitjana', temps: '6 min',
        enunciat: 'Este programa no compila. Copia\'l, llig el missatge i arregla\'l.',
        codi: {
          titol: 'Trencat.java',
          mal: true,
          text: `public class Cotxe {
    String marca;
    int km;

    public void conduir(int quants) {
        km = km + quants;
    }

    public static void main(String[] args) {
        Cotxe cotxe;
        cotxe.conduir(100);
    }
}`
        },
        pista: 'Una variable de tipus classe no és cap objecte encara. Què li falta?',
        solucio: {
          titol: 'Arreglat.java',
          text: `public class Cotxe {
    String marca = "Seat";
    int km = 0;

    public void conduir(int quants) {
        km = km + quants;
    }

    public static void main(String[] args) {
        Cotxe cotxe = new Cotxe();
        cotxe.conduir(100);

        System.out.println(cotxe.marca + " ha fet " + cotxe.km + " km");
    }
}`,
          sortida: 'Seat ha fet 100 km',
          perque: '`Cotxe cotxe;` només diu «esta variable serà un cotxe», però no en crea cap. Sense `new Cotxe()` no hi ha objecte, i el compilador avisa: «The local variable cotxe may not have been initialized».'
        }
      },
      {
        id: 'mini6', titol: 'Troba l\'error: el constructor que no existix', dificultat: 'mitjana', temps: '6 min',
        enunciat: 'Este programa tampoc no compila. Per què?',
        codi: {
          titol: 'Trencat.java',
          mal: true,
          text: `public class Jugador {
    String nom;
    int vida;

    public Jugador(String nom) {
        this.nom = nom;
        this.vida = 100;
    }

    public static void main(String[] args) {
        Jugador ana = new Jugador();
        System.out.println(ana.nom);
    }
}`
        },
        pista: 'Quants paràmetres té el constructor? I quants n\'hi ha a la crida amb new?',
        solucio: {
          titol: 'Arreglat.java',
          text: `public class Jugador {
    String nom;
    int vida;

    public Jugador(String nom) {
        this.nom = nom;
        this.vida = 100;
    }

    public static void main(String[] args) {
        Jugador ana = new Jugador("Ana");
        System.out.println("El jugador és " + ana.nom + " i té " + ana.vida + " de vida.");
    }
}`,
          sortida: 'El jugador és Ana i té 100 de vida.',
          perque: 'En el moment que escrivim un constructor amb paràmetres, Java ja no crea el constructor buit. Per això `new Jugador()` no existix i el missatge és «The constructor Jugador() is undefined». O li passem el nom, o escrivim també un constructor sense paràmetres.'
        }
      },
      {
        id: 'mini7', titol: 'Dos noms, un objecte?', dificultat: 'repte', temps: '8 min',
        enunciat: 'Executa este programa i explica el resultat. Quantes caixes de dades hi ha de veritat?',
        codi: {
          titol: 'DosNoms.java',
          text: `Jugador ana = new Jugador("Ana");
Jugador altre = ana;

altre.vida = 42;

System.out.println("ana.vida = " + ana.vida);
System.out.println("altre.vida = " + altre.vida);`
        },
        solucio: {
          titol: 'DosNoms.java',
          text: `public class DosNoms {
    String nom;
    int vida;

    public DosNoms(String nom) {
        this.nom = nom;
        this.vida = 100;
    }

    public static void main(String[] args) {
        DosNoms ana = new DosNoms("Ana");
        DosNoms altre = ana;          // ATENCIÓ: açò NO és una còpia

        altre.vida = 42;

        System.out.println("ana.vida = " + ana.vida);
        System.out.println("altre.vida = " + altre.vida);
    }
}`,
          sortida: `ana.vida = 42
altre.vida = 42`,
          perque: 'Només hi ha **un** objecte. `altre = ana` no copia l\'objecte: fa que els dos noms apunten al mateix. Per això canviar la vida per un costat es veu per l\'altre. **Si vols dos objectes, cal `new` dos vegades.** (Ací la classe es diu `DosNoms` perquè el programa es puga executar tot sol.)'
        }
      }
    ]
  },

  principals: {
    intro: 'Quatre exercicis complets. Tots tenen la mateixa idea: pensar el motlle, després els objectes.',
    exercicis: [
      {
        id: 'ex1', titol: 'La classe Mòbil', dificultat: 'facil', temps: '20 min',
        enunciat: 'Fes una classe `Mobil` amb `marca`, `model` i `bateria` (enter, comença a 100). Afig els mètodes `usar(int minuts)` (que baixa la bateria i no la deixa negativa), `carregar()` (que la deixa a 100) i `mostra()` (que escriu l\'estat). Crea dos mòbils i fes-los coses distintes.',
        exemple: {
          entrada: '(no demana dades)',
          sortida: 'Samsung Galaxy A55 · 100%\nUsat 40 min: queden 60%\nCarregat: 100%'
        },
        solucio: {
          titol: 'Mobil.java',
          text: `public class Mobil {
    String marca;
    String model;
    int bateria;

    public Mobil(String marca, String model) {
        this.marca = marca;
        this.model = model;
        this.bateria = 100;
    }

    public void usar(int minuts) {
        bateria = bateria - minuts;
        if (bateria < 0) {
            bateria = 0;
        }
        System.out.println("Usat " + minuts + " min: queden " + bateria + "%");
    }

    public void carregar() {
        bateria = 100;
        System.out.println("Carregat: " + bateria + "%");
    }

    public void mostra() {
        System.out.println(marca + " " + model + " · " + bateria + "%");
    }

    public static void main(String[] args) {
        Mobil meu = new Mobil("Samsung", "Galaxy A55");
        Mobil vell = new Mobil("Xiaomi", "Redmi 9");

        meu.mostra();
        meu.usar(40);
        meu.carregar();

        vell.usar(250);
        vell.mostra();
    }
}`,
          sortida: `Samsung Galaxy A55 · 100%
Usat 40 min: queden 60%
Carregat: 100%
Usat 250 min: queden 0%
Xiaomi Redmi 9 · 0%`,
          perque: 'El constructor deixa la bateria a 100 per als dos mòbils, però després cadascun viu la seua vida: el meu s\'ha carregat i el vell s\'ha quedat sense bateria. Els objectes no es barregen entre ells.'
        },
        pista: 'Tot el que fa el mòbil va en mètodes de la classe (sense `static`), i `main` només crea els objectes i els diu coses.'
      },
      {
        id: 'ex2', titol: 'El compte del joc d\'estalvi', dificultat: 'mitjana', temps: '25 min',
        enunciat: 'Fes una classe `Compte` amb `titular` (text) i `saldo` (double). Afig `ingressar(double)`, `retirar(double)` (que no permeta quedar-se en negatiu) i `mostra()`. Crea dos comptes i fes operacions en els dos.',
        exemple: {
          entrada: '(no demana dades)',
          sortida: 'Ana: 75.0 euros\nRetirats 60.0 euros. Queden 15.0 euros\nNo hi ha prou diners!'
        },
        solucio: {
          titol: 'Compte.java',
          text: `public class Compte {
    String titular;
    double saldo;

    public Compte(String titular, double saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    public void ingressar(double quantitat) {
        saldo = saldo + quantitat;
        System.out.println("Ingressats " + quantitat + " euros. Saldo: " + saldo);
    }

    public void retirar(double quantitat) {
        if (quantitat > saldo) {
            System.out.println("No hi ha prou diners! Saldo: " + saldo);
        } else {
            saldo = saldo - quantitat;
            System.out.println("Retirats " + quantitat + " euros. Queden " + saldo + " euros");
        }
    }

    public void mostra() {
        System.out.println(titular + ": " + saldo + " euros");
    }

    public static void main(String[] args) {
        Compte meu = new Compte("Ana", 50.0);
        Compte germa = new Compte("Bruno", 120.0);

        meu.ingressar(25.0);
        meu.mostra();
        meu.retirar(60.0);
        meu.retirar(200.0);

        germa.retirar(20.0);
        germa.mostra();
    }
}`,
          sortida: `Ingressats 25.0 euros. Saldo: 75.0
Ana: 75.0 euros
Retirats 60.0 euros. Queden 15.0 euros
No hi ha prou diners! Saldo: 15.0
Retirats 20.0 euros. Queden 100.0 euros
Bruno: 100.0 euros`,
          perque: 'El mètode `retirar` té la regla del saldo dins seu, així que el compte no pot quedar-se en negatiu facen el que facen des de fora. I els dos comptes són independents: el que li passa a un no li passa a l\'altre.'
        },
        pista: 'La comprovació de si hi ha prou diners va **dins** del mètode `retirar`, no en `main`.'
      },
      {
        id: 'ex3', titol: 'L\'equip del torneig', dificultat: 'mitjana', temps: '30 min',
        enunciat: 'Fes una classe `Jugador` amb `nom`, `punts` i `nivell` (constructor: punts a 0 i nivell a 1), amb els mètodes `guanyarPartida(int punts)` (que suma i puja de nivell cada 100 punts), `mostra()` i `estaPerDamuntDe(Jugador altre)` que torne un `boolean`. Crea un equip de 4 jugadors en un array, juga unes partides i mostra qui va primer.',
        exemple: {
          entrada: '(no demana dades)',
          sortida: 'Ana: 150 punts · nivell 2\nBruno: 90 punts · nivell 1\n...\nVa primer: Ana'
        },
        solucio: {
          titol: 'Jugador.java',
          text: `public class Jugador {
    String nom;
    int punts;
    int nivell;

    public Jugador(String nom) {
        this.nom = nom;
        this.punts = 0;
        this.nivell = 1;
    }

    public void guanyarPartida(int quants) {
        punts = punts + quants;

        while (punts >= nivell * 100) {
            nivell++;
            System.out.println(nom + " puja al nivell " + nivell + "!");
        }
    }

    public boolean estaPerDamuntDe(Jugador altre) {
        return punts > altre.punts;
    }

    public void mostra() {
        System.out.println(nom + ": " + punts + " punts · nivell " + nivell);
    }

    public static void main(String[] args) {
        Jugador[] equip = {
            new Jugador("Ana"),
            new Jugador("Bruno"),
            new Jugador("Carla"),
            new Jugador("Dani")
        };

        equip[0].guanyarPartida(150);
        equip[1].guanyarPartida(90);
        equip[2].guanyarPartida(240);
        equip[3].guanyarPartida(40);

        for (int i = 0; i < equip.length; i++) {
            equip[i].mostra();
        }

        Jugador primer = equip[0];
        for (int i = 1; i < equip.length; i++) {
            if (equip[i].estaPerDamuntDe(primer)) {
                primer = equip[i];
            }
        }

        System.out.println("Va primer: " + primer.nom + " amb " + primer.punts + " punts");
    }
}`,
          sortida: `Ana puja al nivell 2!
Carla puja al nivell 2!
Carla puja al nivell 3!
Ana: 150 punts · nivell 2
Bruno: 90 punts · nivell 1
Carla: 240 punts · nivell 3
Dani: 40 punts · nivell 1
Va primer: Carla amb 240 punts`,
          perque: 'Un mètode d\'un objecte pot rebre **un altre objecte** com a paràmetre: `estaPerDamuntDe(Jugador altre)`. Dins es compara `punts` (el meu) amb `altre.punts` (el seu). I el bucle `while` de la pujada de nivell es repetix si algú guanya molts punts de colp.'
        },
        pista: 'Per al primer lloc, guarda **un jugador** com a candidat (`Jugador primer = equip[0];`), i compara\'l amb els altres cridant `estaPerDamuntDe`.'
      },
      {
        id: 'ex4', titol: 'Combat per torns', dificultat: 'repte', temps: '35 min',
        enunciat: 'Fes una classe `Lluitador` amb `nom` i `vida` (constructor amb les dos dades). Afig `atacar(Lluitador altre, int dany)` que baixe la vida de l\'altre, `estaViu()` que torne un `boolean` i `mostra()`. Escriu un `main` que simule un combat per torns entre dos lluitadors amb atacs de dany variable, i que acabe quan un dels dos es quede sense vida.',
        exemple: {
          entrada: '(no demana dades)',
          sortida: "Torn 1: Ana ataca Bruno\nBruno té 75 de vida\n...\nHa guanyat Ana!"
        },
        solucio: {
          titol: 'Lluitador.java',
          text: `public class Lluitador {
    String nom;
    int vida;

    public Lluitador(String nom, int vida) {
        this.nom = nom;
        this.vida = vida;
    }

    public void atacar(Lluitador altre, int dany) {
        System.out.println(nom + " ataca " + altre.nom + " i li fa " + dany + " de dany");
        altre.rebreDany(dany);
    }

    public void rebreDany(int dany) {
        vida = vida - dany;
        if (vida < 0) {
            vida = 0;
        }
        System.out.println(nom + " té " + vida + " de vida");
    }

    public void curar(int quantitat) {
        vida = vida + quantitat;
        if (vida > 100) {
            vida = 100;
        }
        System.out.println(nom + " es cura i té " + vida + " de vida");
    }

    public boolean estaViu() {
        return vida > 0;
    }

    public static void main(String[] args) {
        Lluitador ana = new Lluitador("Ana", 100);
        Lluitador bruno = new Lluitador("Bruno", 100);

        int torn = 1;
        while (ana.estaViu() && bruno.estaViu()) {
            System.out.println("--- Torn " + torn + " ---");

            if (torn % 2 == 1) {
                ana.atacar(bruno, 35);
            } else {
                bruno.atacar(ana, 40);
            }

            torn++;
        }

        if (ana.estaViu()) {
            System.out.println("Ha guanyat " + ana.nom + "!");
        } else {
            System.out.println("Ha guanyat " + bruno.nom + "!");
        }
    }
}`,
          sortida: `--- Torn 1 ---
Ana ataca Bruno i li fa 35 de dany
Bruno té 65 de vida
--- Torn 2 ---
Bruno ataca Ana i li fa 40 de dany
Ana té 60 de vida
--- Torn 3 ---
Ana ataca Bruno i li fa 35 de dany
Bruno té 30 de vida
--- Torn 4 ---
Bruno ataca Ana i li fa 40 de dany
Ana té 20 de vida
--- Torn 5 ---
Ana ataca Bruno i li fa 35 de dany
Bruno té 0 de vida
Ha guanyat Ana!`,
          perque: 'Ací els objectes col·laboren: `ana.atacar(bruno, 35)` fa que l\'Ana mire el Bruno i li baixe la vida. Els objectes es passen entre ells com a paràmetres i es modifiquen els uns als altres. El bucle `while` s\'atura quan un dels dos ja no està viu.'
        },
        pista: 'Fes primer la classe amb els mètodes i proveu-la amb un parell de crides escrites a mà. Després munta el bucle del combat.'
      }
    ]
  },

  reptes: {
    reptes: [
      {
        titol: 'La mascota virtual',
        blocs: [
          { p: 'Crea una classe `Mascota` amb `nom`, `fam`, `energia` i `felicitat` (les tres comencen a 50). Afig els mètodes `menjar()`, `dormir()`, `jugar()` i `passarElTemps()` (que fa que baixen les tres necessitats una mica).' },
          { p: 'Després munta un `main` que simule 5 torns: en cada torn, l\'usuari tria què fer i el programa ho aplica i mostra l\'estat de la mascota. Au, i que no es muiga de fam!' },
          { p: 'El repte de veritat és **pensar les regles**: què passa si la fam arriba a 100? I si l\'energia arriba a 0? Les regles han d\'estar dins dels mètodes de la mascota, no en el `main`.' }
        ],
        ampliacions: [
          'Afig un mètode `estaTrista()` que torne un `boolean`.',
          'Que la mascota baixe de nivell d\'ànim si se la deixa dos torns sense menjar.',
          'Mostrar barres de progrés amb `#` per a cada necessitat.'
        ]
      },
      {
        titol: 'La botiga de videojocs',
        blocs: [
          { p: 'Crea una classe `Videojoc` amb `titol`, `preu`, `venuts` i `estoc`. Afig mètodes `vendre(int quants)` (que comprove que hi ha estoc i avise si no n\'hi ha prou), `rebaixar(double percentatge)` i `taquilla()` que torne quants diners ha generat.' },
          { p: 'Després munta una botiga amb **un array de videojocs** i fes un petit menú: mostrar el catàleg, vendre unitats d\'un joc, rebaixar un joc i veure la taquilla total.' },
          { p: 'Quan l\'acabes, intenta vendre més unitats de les que tens. El programa ha de defendre\'s: eixa defensa ha d\'estar **dins** del mètode `vendre`, i no en el menú.' }
        ],
        ampliacions: [
          'Afig `esRentable()` que torne si les vendes han superat una quantitat.',
          'Troba el joc més venut recorrent l\'array.',
          'Mostra el valor total de l\'estoc que queda (preu × estoc, sumat).'
        ]
      }
    ]
  },

  errors: {
    entradeta: 'Els errors d\'este tema són d\'una pista que et deixa clar de què va: la mateixa paraula «static» apareix en la meitat.',
    errors: [
      {
        titol: 'Oblidar el new',
        mal: { titol: 'Mal.java', text: `public class Cotxe {\n    String marca;\n\n    public void arrancar() {\n        System.out.println(marca + " arranca");\n    }\n\n    public static void main(String[] args) {\n        Cotxe cotxe;          // falta el new!\n        cotxe.arrancar();\n    }\n}`, missatge: 'error: The local variable cotxe may not have been initialized\n        cotxe.arrancar();\n        ^^^^^' },
        bo: { titol: 'Be.java', text: `public class Cotxe {\n    String marca = "Seat";\n\n    public void arrancar() {\n        System.out.println(marca + " arranca");\n    }\n\n    public static void main(String[] args) {\n        Cotxe cotxe = new Cotxe();\n        cotxe.arrancar();\n    }\n}` },
        que: 'El programa no compila: el compilador diu que la variable «pot ser que no s\'haja inicialitzat».',
        perque: 'Escriure `Cotxe cotxe;` només declara la variable: no fabrica cap objecte. Sense `new`, no hi ha res a què cridar el mètode.',
        detectar: 'Missatge `The local variable cotxe may not have been initialized`, i assenyala la crida.',
        corregir: 'Crea l\'objecte: `Cotxe cotxe = new Cotxe();`. Este error és company de viatge: et passarà moltíssimes vegades al principi.'
      },
      {
        titol: 'Cridar el mètode des de la classe en compte de l\'objecte',
        mal: { titol: 'Mal.java', text: `public class Jugador {\n    String nom = "Ana";\n\n    public void atacar() {\n        System.out.println(nom + " ataca!");\n    }\n\n    public static void main(String[] args) {\n        Jugador.atacar();   // ERROR\n    }\n}`, missatge: 'error: Cannot make a static reference to the non-static method atacar() from the type Jugador\n        Jugador.atacar();\n        ^^^^^^^^^^^^^^^^' },
        bo: { titol: 'Be.java', text: `public class Jugador {\n    String nom = "Ana";\n\n    public void atacar() {\n        System.out.println(nom + " ataca!");\n    }\n\n    public static void main(String[] args) {\n        Jugador ana = new Jugador();\n        ana.atacar();\n    }\n}` },
        que: 'El programa no compila.',
        perque: '`atacar()` no és estàtic: no es pot cridar «des de la classe», perquè no sabríem de quin jugador és el nom ni la vida. Cal un objecte concret.',
        detectar: 'Missatge `Cannot make a static reference to the non-static method`. La paraula clau és **static**.',
        corregir: 'Crea un objecte amb `new` i crida el mètode des d\'ell: `ana.atacar();`.'
      },
      {
        titol: 'Posar static en un mètode que usa els atributs',
        mal: { titol: 'Mal.java', text: `public class Jugador {\n    String nom = "Ana";\n\n    public static void saluda() {\n        System.out.println("Hola, " + nom);   // ERROR\n    }\n}`, missatge: 'error: Cannot make a static reference to the non-static field nom\n        System.out.println("Hola, " + nom);\n                                ^^^' },
        bo: { titol: 'Be.java', text: `public class Jugador {\n    String nom = "Ana";\n\n    public void saluda() {\n        System.out.println("Hola, " + nom);\n    }\n}` },
        que: 'El programa no compila i assenyala l\'atribut.',
        perque: 'Un mètode `static` no pertany a cap objecte, així que no pot saber de quin jugador és el `nom`. Els atributs són d\'un objecte concret i necessiten un mètode no estàtic per a accedir-hi.',
        detectar: 'Missatge `Cannot make a static reference to the non-static field nom`.',
        corregir: 'Lleva el `static` al mètode. **Regla de la casa:** `static` només per a `main` i per a mètodes que no toquen cap atribut.'
      },
      {
        titol: 'Cridar el constructor amb paràmetres que no existixen',
        mal: { titol: 'Mal.java', text: `public class Jugador {\n    String nom;\n\n    public Jugador(String nom) {\n        this.nom = nom;\n    }\n\n    public static void main(String[] args) {\n        Jugador ana = new Jugador();   // ERROR: falta el text\n    }\n}`, missatge: 'error: The constructor Jugador() is undefined\n        Jugador ana = new Jugador();\n                      ^^^^^^^^^^^^' },
        bo: { titol: 'Be.java', text: `public class Jugador {\n    String nom;\n\n    public Jugador(String nom) {\n        this.nom = nom;\n    }\n\n    public static void main(String[] args) {\n        Jugador ana = new Jugador("Ana");\n    }\n}` },
        que: 'El programa no compila: eixe constructor no existix.',
        perque: 'Quan escrivim un constructor amb paràmetres, Java ja no crea el constructor buit. Per això `new Jugador()` deixa d\'existir.',
        detectar: 'Missatge `The constructor Jugador() is undefined`: fixa\'t en els parèntesis, diu quina forma de constructor has demanat.',
        corregir: 'Passa-li els arguments que demana (`new Jugador("Ana")`) o escriu també un constructor sense paràmetres, si vols permetre les dos maneres.'
      },
      {
        titol: 'Imprimir l\'objecte sencer',
        mal: { titol: 'Mal.java', text: `Jugador ana = new Jugador("Ana");\nSystem.out.println(ana);` },
        bo: { titol: 'Be.java', text: `Jugador ana = new Jugador("Ana");\nana.mostra();   // o System.out.println(ana.nom + " té " + ana.vida)` },
        que: 'En compte de les dades del jugador apareix una cosa com `Jugador@1b6d3586`.',
        perque: '`println` no sap què mostrar d\'un objecte, així que escriu el nom de la classe i una «matrícula» interna. Igual que passava amb els arrays en el Tema 4.',
        detectar: 'Eixida amb el nom de la classe seguit de `@` i números i lletres.',
        corregir: 'Escriu un mètode `mostra()` que presente les dades com vulgues, i crida\'l. (Els programes professionals fan que el `println` de l\'objecte funcione bé; això es veu més avant.)'
      },
      {
        titol: 'Accedir a un atribut com si fóra de la classe',
        mal: { titol: 'Mal.java', text: `public class Jugador {\n    int vida = 100;\n\n    public static void main(String[] args) {\n        System.out.println(Jugador.vida);   // ERROR\n    }\n}`, missatge: 'error: Cannot make a static reference to the non-static field Jugador.vida\n        System.out.println(Jugador.vida);\n                           ^^^^^^^^^^^^' },
        bo: { titol: 'Be.java', text: `public class Jugador {\n    int vida = 100;\n\n    public static void main(String[] args) {\n        Jugador ana = new Jugador();\n        System.out.println(ana.vida);\n    }\n}` },
        que: 'El programa no compila.',
        perque: 'La vida no és de la classe, és de cada jugador. Com que no has creat cap jugador, Java no sap de qui és eixa vida.',
        detectar: 'Missatge `Cannot make a static reference to the non-static field Jugador.vida`.',
        corregir: 'Crea un objecte i consulta el seu atribut: `ana.vida`. Si el que vols són dades compartides per tota la classe, eixes sí que poden ser `static` — ho veurem més avant.'
      }
    ]
  },

  resum: {
    entradeta: 'Les idees que has d\'endur-te d\'este tema.',
    idees: [
      'Una **classe** és el motlle: diu quines dades tindrà una cosa i què sabrà fer.',
      'Un **objecte** és una cosa concreta feta amb eixe motlle, i es crea amb **`new`**.',
      'Els **atributs** són les dades de l\'objecte; cada objecte té els seus.',
      'Els **mètodes de l\'objecte** no porten `static` i treballen amb els atributs d\'eixe objecte.',
      'El **constructor** es diu igual que la classe, no té tipus de retorn i s\'executa sol amb `new`.',
      '`this.nom` significa «l\'atribut `nom` d\'este objecte».',
      'S\'arriba a les dades i als mètodes amb el **punt**: `ana.vida`, `ana.atacar()`.',
      'Els objectes es guarden en **arrays** i es recorren amb bucles: `equip[i].atacar()`.',
      '`static` = no necessite cap objecte; sense `static` = soc d\'un objecte.',
      'els objectes s\'encarreguen de les seues regles: el límit de vida, el saldo, l\'estoc…'
    ]
  },

  autoavaluacio: {
    entradeta: 'Nou preguntes. Pensa-les abans de mirar la solució.',
    preguntes: [
      {
        pregunta: 'Quina diferència hi ha entre una classe i un objecte?',
        opcions: [
          'Són el mateix i es poden usar indistintament.',
          'La classe és el motlle; l\'objecte és una cosa concreta feta amb eixe motlle.',
          'L\'objecte és el motlle i la classe és la cosa creada.'
        ],
        resposta: 'b) La classe és el motlle i l\'objecte és una cosa concreta.',
        perque: 'La classe `Jugador` descriu com és qualsevol jugador. Amb `new` fabriquem objectes concrets: l\'Ana, el Bruno, la Carla. La classe no té vida ni punts; cada objecte sí.'
      },
      {
        pregunta: 'Què fa esta línia: `Jugador ana = new Jugador("Ana");`?',
        resposta: 'Crea un objecte nou de la classe `Jugador`, executant el constructor amb «Ana», i el guarda en la variable `ana`.',
        perque: '`new` fabrica l\'objecte i crida el constructor, que deixa les dades preparades. La variable `ana` guarda l\'objecte per a poder usar-lo.'
      },
      {
        pregunta: 'Per què els mètodes de `Jugador` **no** porten `static`?',
        resposta: 'Perquè treballen amb les dades d\'un objecte concret, i necessiten saber de quin jugador són la vida i la puntuació.',
        perque: 'Un mètode `static` no pertany a cap objecte i no pot accedir als atributs. Com que `atacar()` ha de modificar la puntuació del jugador que rep la crida, ha de ser un mètode d\'objecte.'
      },
      {
        pregunta: 'Què mostra este programa?',
        codi: { titol: 'Pregunta.java', text: `Jugador a = new Jugador("Ana");\nJugador b = new Jugador("Ana");\n\na.vida = 50;\n\nSystem.out.println(a.vida);\nSystem.out.println(b.vida);` },
        resposta: 'Mostra `50` i `100`.',
        perque: 'Amb dos `new` hi ha **dos objectes** distints, encara que es diguen igual i tinguen el mateix nom. Canviar la vida d\'un no afecta l\'altre.'
      },
      {
        pregunta: 'Què passarà amb este codi?',
        codi: { titol: 'Pregunta.java', text: `Jugador a = new Jugador("Ana");\nJugador b = a;\n\nb.vida = 10;\n\nSystem.out.println(a.vida);` },
        resposta: 'Mostra `10` perquè `a` i `b` apunten al **mateix** objecte.',
        perque: '`Jugador b = a;` no copia l\'objecte: copia l\'adreça on està. Els dos noms són el mateix jugador. Per a tindre dos objectes distints cal fer `new` dos vegades.'
      },
      {
        pregunta: 'Escriu un constructor per a una classe `Mobil` amb els atributs `marca` i `bateria`, que deixa la bateria a 100.',
        resposta: '`public Mobil(String marca) { this.marca = marca; this.bateria = 100; }`',
        perque: 'El constructor porta el nom de la classe i no té tipus de retorn. S\'executa sol en fer `new Mobil("Samsung")`.'
      },
      {
        pregunta: 'Tenim `Jugador[] equip = new Jugador[3];` i volem que tots ataquen. Escriu el bucle.',
        resposta: '`for (int i = 0; i < equip.length; i++) { equip[i].atacar(); }`',
        perque: 'Cada casella guarda un objecte sencer. Es recorre com qualsevol array i es crida el mètode de cada objecte amb `equip[i].atacar()`.'
      },
      {
        pregunta: 'Este codi no compila. Per què?',
        codi: { titol: 'Pregunta.java', text: `public class Jugador {\n    String nom = "Ana";\n\n    public static void saluda() {\n        System.out.println("Hola, " + nom);\n    }\n}` },
        resposta: 'Perquè un mètode `static` no pot accedir a l\'atribut `nom`, que és d\'un objecte.',
        perque: 'El missatge és `Cannot make a static reference to the non-static field nom`. Si llevem el `static` del mètode `saluda`, funciona: llavors sí que pertany a un objecte i pot llegir el seu `nom`.'
      },
      {
        pregunta: 'On ha d\'estar la regla «la vida no pot ser més de 100»: en el `main` o dins del mètode `curar`? Per què?',
        resposta: 'Dins del mètode `curar` de la classe, perquè així la regla es complica sempre, en qualsevol programa que use la classe.',
        perque: 'Si la regla estiguera en el `main`, cada programa que usara el `Jugador` hauria de recordar-la. Posant-la dins de l\'objecte, l\'objecte es protegix ell mateix: açò és l\'avantatge principal de les classes.'
      }
    ]
  },

  /* ------------------------------------------------------- DIAPOSITIVES */
  diapositives: {
    objectiu: 'Agrupar dades i accions en classes i crear objectes que recorden el seu estat i protegixen les seues regles.',
    index: [
      'El problema de les dades soltes',
      'Classe: el motlle',
      'Objectes amb new',
      'Mètodes sense static',
      'El constructor',
      'Cada objecte, les seues dades',
      'Arrays d\'objectes',
      'Practiquem'
    ],
    blocs: [
      {
        tipus: 'concepte',
        titol: 'Dades que van juntes',
        bullets: [
          'nom1, vida1, punts1, nom2, vida2, punts2...',
          'Les dades d\'un jugador estan escampades',
          'Afegir un jugador = tocar mig programa',
          'Solució: un motlle que agrupa dades i accions'
        ],
        notes: 'Escriure les 6 variables a la pissarra i preguntar com afegiríem el jugador 5.'
      },
      {
        tipus: 'esquema',
        titol: 'El motlle i les coses fetes amb ell',
        flux: ['CLASSE Jugador', 'atributs: nom, vida, punts, nivell', 'mètodes: atacar, curar, pujarNivell', 'OBJECTES: ana, bruno, carla'],
        nota: 'La classe no és cap jugador: és la descripció. Els objectes són els jugadors de veritat, cadascun amb les seues dades.'
      },
      {
        tipus: 'codi',
        titol: 'El primer objecte',
        codi: 'Jugador ana = new Jugador();\nana.nom = "Ana";\nana.vida = 100;\n\nSystem.out.println(ana.nom + " té " + ana.vida + " de vida.");',
        sortida: 'Ana té 100 de vida.',
        notes: 'El punt és la porta: ana.nom és el nom d\'eixe jugador concret.'
      },
      {
        tipus: 'codi',
        titol: 'Mètodes de l\'objecte (sense static)',
        codi: 'public void atacar() {\n    System.out.println(nom + " llança un atac!");\n    puntuacio = puntuacio + 10;\n}\n\n// a main:\nana.atacar();',
        sortida: 'Ana llança un atac!',
        notes: 'Dins del mètode, nom i puntuacio són de l\'objecte que rep la crida. Insistir: sense static.'
      },
      {
        tipus: 'codi',
        titol: 'El constructor',
        codi: 'public Jugador(String nom) {\n    this.nom = nom;\n    this.vida = 100;\n    this.puntuacio = 0;\n    this.nivell = 1;\n}\n\n// i a main:\nJugador ana = new Jugador("Ana");',
        sortida: 'Ana · vida: 100 · punts: 0 · nivell: 1',
        notes: 'Es diu igual que la classe, no té tipus de retorn i s\'executa sol amb new.'
      },
      {
        tipus: 'comparacio',
        titol: 'Cada objecte va a la seua',
        esquerra: { titol: 'ana', bullets: ['nom = "Ana"', 'vida = 100', 'punts = 10'] },
        dreta: { titol: 'bruno', bullets: ['nom = "Bruno"', 'vida = 100', 'punts = 0'] }
      },
      {
        tipus: 'codi',
        titol: 'Un array d\'objectes',
        codi: 'Jugador[] equip = new Jugador[3];\nequip[0] = new Jugador("Ana");\nequip[1] = new Jugador("Bruno");\nequip[2] = new Jugador("Carla");\n\nfor (int i = 0; i < equip.length; i++) {\n    equip[i].atacar();\n    equip[i].mostra();\n}',
        sortida: 'Ana (20 punts)\nBruno (20 punts)\nCarla (20 punts)',
        notes: 'Cada casella guarda un objecte sencer. Es recorre amb un for com en el Tema 4.'
      },
      {
        tipus: 'activitat',
        titol: 'Ara et toca a tu',
        enunciat: 'Fes la classe Mobil (marca, model, bateria) amb els mètodes usar(int), carregar() i mostra(), i crea dos mòbils amb històries distintes.',
        temps: '20 min',
        pistes: ['Atributs primer, constructor després, mètodes al final', 'La bateria no pot ser negativa', 'Prova els dos objectes per separat'],
        notes: 'Comprovar amb les taules que els dos objectes no es barregen.'
      },
      {
        tipus: 'pregunta',
        titol: 'Pensem un moment',
        pregunta: 'Per què creus que és millor que la regla «no passar de 100 de vida» estiga dins del mètode curar i no en el programa principal?'
      }
    ],
    resum: [
      'Classe = motlle; objecte = cosa concreta creada amb new.',
      'Atributs: les dades de cada objecte.',
      'Mètodes de l\'objecte: sense static.',
      'Constructor: es diu com la classe i s\'executa amb new.',
      'this.nom = l\'atribut d\'este objecte.',
      'El punt arriba a les dades i als mètodes: ana.vida, ana.atacar().',
      'Arrays d\'objectes + bucle per a treballar amb molts.',
      'Cada objecte protegix les seues regles.'
    ],
    seguent: 'Tema 7 · Un programa complet'
  }
};
