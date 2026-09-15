/* ==========================================================================
   TEMA 1 · Variables: guardar informació  —  contingut de la pàgina
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0

   NOTA SOBRE LES EIXIDES (molt important per a qui mantinga el material):
     · sortida          → eixida REAL del programa. Es comprova automàticament
                          amb  node eines/prova-codi-java.mjs 1
     · sortidaMostrada  → el que es mostra en la pàgina. Quan el programa demana
                          dades pel teclat, es mostra la sessió d'ús completa
                          (prompt + el que tecleja l'usuari).
     · entrada          → el que s'envia per l'entrada estàndard en la prova.
   ========================================================================== */
globalThis.TEMA = {
  n: 1,
  titol: 'Variables: guardar informació',
  subtitol: 'Les «caixes» on el programa desa les dades',
  durada: '3 hores de classe',

  hero: {
    etiqueta: 'Tema 1 · Sessió de 3 hores',
    entradeta: 'Fins ara el programa sempre deia el mateix. A partir d\'ara guardarà informació: punts, vides, notes, preus, noms… i podrà canviar-la mentre funciona.',
    meta: [
      '⏱ 3 hores',
      '📦 Fase 1 · Pensament de programador',
      '🧩 Necessites: Tema 0',
      '⌨️ 60-75 min programant'
    ]
  },

  introduccio: {
    titol: 'Una situació per començar',
    emoji: '🎮',
    blocs: [
      { p: 'Estàs fent un videojoc. El jugador comença amb **0 punts** i **3 vides**. Mata un enemic i guanya **250 punts**. Rep un colp i perd **una vida**. Arriba a **1500 punts** i puja de nivell.' },
      { p: 'On guarda el programa tot això? El text del Tema 0 estava escrit dins del codi i no canviava mai. Un joc necessita guardar coses que **van canviant**: la puntuació, les vides, el nivell…' },
      { p: 'La solució és una **variable**: una caixa amb un nom on guardem informació, que podem llegir i canviar quan vulguem. És el concepte més important del tema i la base de tot el que vindrà: si no domines les variables, tot el demés costa el doble.' }
    ],
    plan: [
      ['30-40 min', 'Explicació i demos'],
      ['60-75 min', 'Programació guiada'],
      ['60-75 min', 'Exercicis'],
      ['15-30 min', 'Repàs i repte']
    ],
    prerequisits: [
      'Crear i executar un programa en Java (Tema 0).',
      'Mostrar text per pantalla amb `System.out.println()`.',
      'Saber que cada instrucció acaba en `;` i que el fitxer ha de dir-se igual que la classe.'
    ]
  },

  objectius: {
    intro: 'En acabar esta sessió has de saber fer estes coses:',
    llista: [
      'Crear variables dels tipus bàsics: `int`, `double`, `boolean`, `char` i `String`.',
      'Guardar un valor, canviar-lo i mostrar-lo per pantalla.',
      'Fer càlculs amb els operadors `+`, `-`, `*`, `/` i `%`.',
      'Distingir nombres enters i decimals, i saber quan Java «perd» els decimals.',
      'Demanar dades a l\'usuari pel teclat amb `Scanner`.',
      'Escriure missatges que barregen text i variables.'
    ]
  },

  teoria: {
    titol: 'Teoria, poc a poc',
    entradeta: 'Una idea → un exemple. Prova cada exemple mentre el lliges: així no s\'oblida.',
    blocs: [
      { h3: '1. Una variable és una caixa amb nom' },
      { p: 'Imagina una capsa de cartó amb una etiqueta on posa `punts`. Dins de la capsa hi ha un nombre. Si volem canviar la puntuació, traiem el que hi ha i posem una altra cosa. La capsa sempre és la mateixa; el contingut canvia.' },
      { codi: {
        titol: 'PrimeraVariable.java',
        etiqueta: 'LA PRIMERA VARIABLE',
        text: `public class PrimeraVariable {
    public static void main(String[] args) {
        int punts = 0;                 // una caixa que es diu punts i guarda 0
        System.out.println(punts);     // mostrem el que hi ha dins

        punts = 10;                    // canviem el contingut de la caixa
        System.out.println(punts);

        punts = punts + 25;            // el que hi havia dins, més 25
        System.out.println(punts);
    }
}`,
        sortida: `0
10
35`
      } },
      { nota: { tipus: 'tip', text: '`punts = punts + 25;` no és cap broma ni una equació: vol dir **«agafa el valor de dins de la caixa `punts`, suma-li 25 i torna a guardar el resultat a la mateixa caixa»**. És la instrucció que més faràs servir en tota la teua vida de programador.' } },

      { h3: '2. Declarar i assignar' },
      { p: 'Quan creem una variable fem dos coses: **declarar-la** (dir com es diu i de quin tipus és) i **assignar-li** un valor.' },
      { codi: {
        titol: 'Declarar i assignar',
        etiqueta: 'SINTAXI',
        text: `int edat;        // declare: volem una caixa de nombres enters que es diu edat
edat = 16;       // assigne: dins hi guarde el 16

int vides = 3;   // les dos coses a la vegada (el més habitual)`
      } },
      { p: 'La primera part (`int`) és el **tipus** de dada que hi cap a dins. La segona (`edat`) és el **nom**. El `=` es llig «guarda dins» i no és una comparació.' },
      { nota: { tipus: 'avis', text: 'Si declares una variable i no li dones cap valor, **no la pots usar**: Java no sap què hi ha dins i et dirà *variable might not have been initialized*. Sempre és millor donar-li un valor quan la crees.' } },

      { h3: '3. El tipus no es pot canviar' },
      { p: 'Una capsa d\'enters només guarda enters; una de text, només text. Java és **estricte** amb això i no et deixarà barrejar-ho per accident.' },
      { codi: {
        titol: 'UnaVariableNoPotCanviarDeTipus.java',
        etiqueta: 'AIXÒ NO COMPILA',
        mal: true,
        text: `int edat = "setze";`,
        missatge: 'error: incompatible types: String cannot be converted to int'
      } },
      { p: 'Eixe missatge ens diu exactament el problema: estem intentant guardar un text (`String`) dins d\'una caixa de nombres enters (`int`). I tindrá tot el sentit quan penseu: *«i si volem guardar l\'edat com a text per posar-la dins d\'una frase?»* No cal: per a això ja tenim la concatenació.' },

      { h3: '4. Els tipus bàsics' },
      { taula: {
        cap: ['Tipus', 'Què guarda', 'Exemple'],
        files: [
          ['`int`', 'Nombres enters (sense decimals)', '`int edat = 16;`'],
          ['`double`', 'Nombres amb decimals', '`double nota = 7.5;`'],
          ['`boolean`', 'Vertader o fals', '`boolean aprovat = true;`'],
          ['`char`', 'Un sol caràcter', '`char lletra = \'A\';`'],
          ['`String`', 'Text (una cadena de caràcters)', '`String nom = "Ana";`']
        ]
      } },
      { llista: [
        'Nombres per comptar coses (punts, vides, edat, quantitat): `int`.',
        'Nombres que poden tindre decimals (notes, preus, temperatures, alçades): `double`.',
        'Coses que només poden ser sí o no (aprovat, és major d\'edat, té clau): `boolean`.',
        'Una lletra solta (una inicial, una opció de menú): `char`.',
        'Noms, títols, frases: `String`.'
      ] },
      { nota: { tipus: 'info', text: 'Els textos (`String`) van entre **cometes dobles** i els caràcters solts (`char`) entre **cometes simples**: `String resposta = "sí";` però `char inicial = \'A\';`. Confondre-ho és l\'error número u d\'este tema.' } },

      { h3: '5. Com es diuen les variables' },
      { p: 'El nom el tries tu, però hi ha normes i costums: les normes les imposa Java i les costums les imposem nosaltres perquè el codi s\'entenga.' },
      { llista: [
        '**No** pot tindre espais ni accents: `puntsTotals`, no `punts totals` ni `punts_totals_2026`.',
        '**No** pot començar per un número: `nivell1` sí, `1nivell` no.',
        'En Java s\'escriu **camelCase**: primera paraula en minúscula i les següents amb majúscula: `puntsDeVida`, `preuAmbIva`.',
        'El nom ha de dir **què guarda**: `edats`, no `x`. Dins d\'una setmana no te\'n recordaràs.'
      ] },
      { nota: { tipus: 'tip', text: 'Sorpresa: Java **sí que accepta** accents i la `ç` en els noms de variables, però per costum no els fem servir. Escrivim `mitjana` (sense accents) perquè el codi no done mai problemes si l\'obrim en un altre ordinador o el copiem a un altre programa.' } },

      { h3: '6. Els operadors aritmètics' },
      { p: 'Amb les variables podem calcular. Estos són els cinc operadors de sempre:' },
      { taula: {
        cap: ['Operador', 'Què fa', 'Exemple amb `a = 7` i `b = 2`'],
        files: [
          ['`+`', 'Suma', '`a + b` → 9'],
          ['`-`', 'Resta', '`a - b` → 5'],
          ['`*`', 'Multiplicació', '`a * b` → 14'],
          ['`/`', 'Divisió', '`a / b` → 3 (si són enters!)'],
          ['`%`', 'Residu: el que sobra de la divisió', '`a % b` → 1']
        ]
      } },
      { p: 'El **residu** (`%`) pareix estrany però és molt útil: `7 % 2` és 1 perquè 7 dividit per 2 dona 3 i **sobra 1**. Servix, per exemple, per saber si un nombre és parell o per repartir coses en grups.' },

      { h3: '7. Compte amb la divisió entre enters!' },
      { p: 'Ací hi ha un parany que fa caure a tots els principiants. Pensa què apareixerà abans d\'executar:' },
      { prediccio: {
        id: 'pred-divisio',
        titol: 'Què apareixerà per pantalla?',
        fitxer: 'Divisio.java',
        text: `int a = 9;
int b = 2;
System.out.println(a / b);
System.out.println(a % b);
System.out.println(a / 2.0);`,
        sortida: `4
1
4.5`,
        perque: 'Quan els dos costats de la divisió són **enters**, Java fa la divisió entera i **llença la part decimal**: 9/2 dona 4, no 4.5. Si un dels dos és `double` (per exemple `2.0`), el resultat sí que porta decimals. No és un error de Java: és una regla del llenguatge que hem de conéixer.'
      } },
      { nota: { tipus: 'important', text: 'Si vols decimals, **almenys un dels dos nombres ha de ser `double`**. Escriu `9 / 2.0`, o guarda els nombres en variables `double` des del principi. Ensopegar amb açò és tan habitual que té nom propi: *la divisió entera*.' } },

      { h3: '8. Combinar text i variables' },
      { p: 'Per mostrar un resultat amb un missatge, s\'enganxen les peces amb l\'operador `+`. Este procés es diu **concatenació**.' },
      { codi: {
        titol: 'Missatge.java',
        etiqueta: 'CONCATENACIÓ',
        text: `public class Missatge {
    public static void main(String[] args) {
        String nom = "Ana";
        int punts = 350;

        System.out.println("Hola, " + nom + "!");
        System.out.println("Tens " + punts + " punts.");
        System.out.println("La meitat de punts: " + punts / 2);
    }
}`,
        sortida: `Hola, Ana!
Tens 350 punts.
La meitat de punts: 175`
      } },
      { p: 'Quan un dels costats del `+` és un text, l\'altre es convertix en text i s\'enganxen. Per això `"Tens " + punts` dona `Tens 350`.' },
      { nota: { tipus: 'important', text: '**Compte amb l\'orde!** `"Total: " + a + b` **no suma**, enganxa: si `a` és 3 i `b` és 4, mostra `Total: 34`. Si vols sumar de veritat, tanca la suma entre parèntesis: `"Total: " + (a + b)`.' } },

      { h3: '9. Que l\'usuari escriga dades: Scanner' },
      { p: 'Fins ara el programa sempre deia el mateix. Amb `Scanner` el programa pot **demanar dades** i treballar amb elles.' },
      { codi: {
        titol: 'Endevina.java',
        etiqueta: 'LECTURA PER TECLAT',
        text: `import java.util.Scanner;

public class Endevina {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);   // el nostre lector de teclat

        System.out.print("Escriu un número: ");
        int numero = teclat.nextInt();             // espera i guarda el nombre

        System.out.println("Has escrit el " + numero);
    }
}`,
        entrada: '42\n',
        sortida: 'Escriu un número: Has escrit el 42',
        sortidaMostrada: `Escriu un número: 42
Has escrit el 42`
      } },
      { llista: [
        'La primera línia (`import java.util.Scanner;`) va **sempre** a dalt del fitxer, abans de la classe. Es copia tal qual.',
        '`Scanner teclat = new Scanner(System.in);` es crea **una sola vegada**, al principi del `main`. El nom `teclat` el triem nosaltres.'
      ] },
      { notatecnica: 'les línies `import java.util.Scanner;` i `new Scanner(System.in)` formen part del que anomenem *carcassa*: cal escriure-les perquè funcione, però no cal entendre-les encara.' },
      { p: 'Una vegada tenim el lector, podem llegir el que l\'usuari escriu amb estos mètodes:' },
      { taula: {
        cap: ['Mètode', 'Què llig', 'Es guarda en'],
        files: [
          ['`teclat.nextInt()`', 'Un nombre enter', '`int`'],
          ['`teclat.nextDouble()`', 'Un nombre amb decimals', '`double`'],
          ['`teclat.next()`', 'Una paraula (sense espais)', '`String`'],
          ['`teclat.nextLine()`', 'Una línia sencera', '`String`']
        ]
      } },
      { nota: { tipus: 'avis', text: 'Els decimals s\'escriuen amb **punt** (7.5), no amb coma. I si l\'usuari escriu una lletra quan el programa espera un número, el programa s\'atura amb l\'error `InputMismatchException`: ho veurem en l\'apartat d\'errors.' } },
      { nota: { tipus: 'info', text: '¿I si volem llegir una línia sencera amb espais desprès d\'un número? Hi ha un detall famós que ho fa fallar. De moment fem servir `next()` per a una paraula i ho deixem per a més avant; quan ens passe, el tindrem en l\'apartat d\'errors d\'este tema.' } },

      { h3: '10. Un programa complet' },
      { p: 'Ajuntem-ho tot: dades, càlcul i missatge final. Este programa calcula el preu d\'un producte amb IVA.' },
      { codi: {
        titol: 'PreuAmbIva.java',
        etiqueta: 'EXEMPLE COMPLET',
        text: `public class PreuAmbIva {
    public static void main(String[] args) {
        double preu = 20.0;            // preu del producte
        double iva = 0.21;             // 21 % d'IVA

        double total = preu + preu * iva;

        System.out.println("Preu sense IVA: " + preu + " euros");
        System.out.println("IVA (21%):      " + preu * iva + " euros");
        System.out.println("Total a pagar:  " + total + " euros");
    }
}`,
        sortida: `Preu sense IVA: 20.0 euros
IVA (21%):      4.2 euros
Total a pagar:  24.2 euros`
      } },
      { nota: { tipus: 'info', text: 'Fixa\'t que Java escriu `20.0` i `4.2`: **no posa zeros que no calen** i sempre mostra el punt decimal. Més avant aprendrem a arredonir a dos decimals per mostrar diners de veritat.' } }
    ]
  },

  exemples: {
    titol: 'Exemples explicats pas a pas',
    entradeta: 'Cada exemple: què volem aconseguir, el codi, què apareix per pantalla i per què funciona.',
    blocs: [
      { h3: 'Exemple 1 · Els punts d\'una partida' },
      { p: '**Què volem?** Guardar la puntuació i les vides d\'un jugador i vore com canvien després d\'una pantalla.' },
      { codi: {
        titol: 'Partida.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Partida {
    public static void main(String[] args) {
        int punts = 1200;
        int vides = 3;

        punts = punts + 250;      // hem superat una pantalla
        vides = vides - 1;        // ens han tocat

        System.out.println("Punts: " + punts);
        System.out.println("Vides: " + vides);
        System.out.println("Nivell: " + punts / 500);
    }
}`,
        sortida: `Punts: 1450
Vides: 2
Nivell: 2`
      } },
      { p: '**Per què funciona:** `punts + 250` es calcula i el resultat es guarda **a la mateixa variable**. En l\'última línia hi ha una divisió entre enters: 1450 / 500 és 2, perquè la part decimal es perd. Per a este joc ens va bé: el nivell es puja per trams complets.' },

      { h3: 'Exemple 2 · La temperatura' },
      { p: '**Què volem?** Convertir graus Celsius a Fahrenheit. Per a això cal treballar amb decimals, perquè la temperatura no sempre és un nombre rodó.' },
      { codi: {
        titol: 'Temperatura.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Temperatura {
    public static void main(String[] args) {
        double celsius = 21.5;
        double fahrenheit = celsius * 9 / 5 + 32;

        System.out.println(celsius + " graus Celsius són " + fahrenheit + " graus Fahrenheit.");
    }
}`,
        sortida: '21.5 graus Celsius són 70.7 graus Fahrenheit.'
      } },
      { p: '**Per què funciona:** com que `celsius` és `double`, tota l\'operació es fa amb decimals encara que hi haja un `9` i un `5` enters. Si `celsius` haguera sigut `int`, el resultat seria un desastre: `21 * 9 / 5` donaria 37 en compte de 37.8.' },

      { h3: 'Exemple 3 · Els diners que queden' },
      { p: '**Què volem?** Saber quant ens queda després de gastar. I sumar el que hem gastat entre parèntesis, que és un parany habitual.' },
      { codi: {
        titol: 'Cartera.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Cartera {
    public static void main(String[] args) {
        double diners = 20.0;
        double entrepa = 4.75;
        double beguda = 1.25;

        double queda = diners - entrepa - beguda;

        System.out.println("Tens " + diners + " euros.");
        System.out.println("Has gastat " + (entrepa + beguda) + " euros.");
        System.out.println("Et queden " + queda + " euros.");
    }
}`,
        sortida: `Tens 20.0 euros.
Has gastat 6.0 euros.
Et queden 14.0 euros.`
      } },
      { p: '**Per què funciona:** els parèntesis obliguen a fer primer la suma del gastat, i després eixe resultat s\'enganxa al text. Sense parèntesis, eixiria `Has gastat 4.751.25 euros`.' },

      { h3: 'Exemple 4 · La nota mitjana' },
      { p: '**Què volem?** Calcular la mitjana de tres notes. Mira bé l\'eixida: hi ha una cosa que a tots ens sorprén el primer dia.' },
      { codi: {
        titol: 'Mitjana.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Mitjana {
    public static void main(String[] args) {
        double nota1 = 6.0;
        double nota2 = 7.0;
        double nota3 = 8.0;

        double suma = nota1 + nota2 + nota3;
        double mitjana = suma / 3;

        System.out.println("Suma: " + suma);
        System.out.println("Mitjana: " + mitjana);
    }
}`,
        sortida: `Suma: 21.0
Mitjana: 7.0`
      } },
      { p: '**Per què funciona:** la suma dona 21 i la divisió 7, però Java escriu `21.0` i `7.0` perquè les variables són `double`. **No és un error**: és la manera que té Java de dir «este nombre pot tindre decimals».' },
      { nota: { tipus: 'tip', text: 'Pregunta-la a classe: *«i si les notes foren `int` i dividim per `3`?»* La resposta és 7 sense decimals… i amb notes reals (6.5, 7.0, 8.5) l\'arrodoniment cap avall seria un problema de veritat.' } },

      { h3: 'Què apareixerà per pantalla?' },
      { p: 'Pensa-ho abans d\'executar. Ací es veu molt bé com afecta l\'orde de les operacions.' },
      { prediccio: {
        id: 'pred-ordre',
        titol: 'Pensa abans d\'executar',
        fitxer: 'Ordre.java',
        text: `int a = 3;
int b = 4;
System.out.println("Total: " + a + b);
System.out.println("Total: " + (a + b));`,
        sortida: `Total: 34
Total: 7`,
        perque: 'En la primera línia, quan Java troba el `+` entre un text i un número, convertix tot el que ve després en text i l\'enganxa: per això ix 34. Amb els parèntesis, primer es fa la suma i després s\'enganxa el resultat: 7.'
      } }
    ]
  },

  guiada: {
    titol: 'Programació guiada: ho fem junts',
    entradeta: 'Construïm una calculadora de la paga setmanal: demanarà les hores treballades i quant es cobra per hora, i dirà quant es guanya. Pas a pas, provant cada pas.',
    passos: [
      {
        titol: 'Pensem el problema abans de tocar el teclat',
        blocs: [
          { p: 'Sempre igual: primer les idees i després el codi. Estos tres passos els farem servir tota la vida.' },
          { llista: [
            '**Què ha d\'entrar?** Les hores treballades i el preu de cada hora. Les dos coses les sap l\'usuari → `Scanner`.',
            '**Què ha de passar?** Una multiplicació: hores × preu.',
            '**Què ha d\'eixir?** Un missatge amb el resultat.'
          ] },
          { preguntaClasse: 'Les hores poden ser 7.5 (mitja hora)? I el preu, pot ser 12.50 €? Què significa això per als tipus que hem de triar?' },
          { p: 'Si pot haver-hi mitja hora, les dos dades són **`double`**. Si haguérem decidit que només comptem hores senceres, serien `int`. Sempre pensem en les dades abans de programar.' }
        ]
      },
      {
        titol: 'Escrivim el que sí que sabem',
        blocs: [
          { p: 'Carcassa, `Scanner` i les dos preguntes. Ho provem amb unes dades qualsevol per comprovar que llig bé.' },
          { codi: {
            titol: 'CalculadoraPaga.java',
            etiqueta: 'PAS 2',
            text: `import java.util.Scanner;

public class CalculadoraPaga {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Quantes hores has treballat? ");
        double hores = teclat.nextDouble();

        System.out.print("Quant cobres per hora? ");
        double preuHora = teclat.nextDouble();

        System.out.println("Hores: " + hores);
        System.out.println("Preu per hora: " + preuHora);
    }
}`,
            entrada: '7.5\n12.5\n',
            sortida: 'Quantes hores has treballat? Quant cobres per hora? Hores: 7.5\nPreu per hora: 12.5',
            sortidaMostrada: `Quantes hores has treballat? 7.5
Quant cobres per hora? 12.5
Hores: 7.5
Preu per hora: 12.5`
          } }
        ]
      },
      {
        titol: 'Afegim el càlcul',
        blocs: [
          { p: 'Una variable nova per al resultat i una multiplicació. Fixa\'t que la variable la creem damunt del `println`, perquè si no, no existiria.' },
          { codi: {
            titol: 'CalculadoraPaga.java',
            etiqueta: 'PAS 3',
            text: `import java.util.Scanner;

public class CalculadoraPaga {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Quantes hores has treballat? ");
        double hores = teclat.nextDouble();

        System.out.print("Quant cobres per hora? ");
        double preuHora = teclat.nextDouble();

        double total = hores * preuHora;

        System.out.println("Hores: " + hores);
        System.out.println("Preu per hora: " + preuHora);
        System.out.println("Total: " + total + " euros");
    }
}`,
            entrada: '7.5\n12.5\n',
            sortida: 'Quantes hores has treballat? Quant cobres per hora? Hores: 7.5\nPreu per hora: 12.5\nTotal: 93.75 euros',
            sortidaMostrada: `Quantes hores has treballat? 7.5
Quant cobres per hora? 12.5
Hores: 7.5
Preu per hora: 12.5
Total: 93.75 euros`
          } },
          { preguntaClasse: 'Què passaria si haguérem declarat les hores com a `int` i l\'usuari escriu 7.5?' }
        ]
      },
      {
        titol: 'Millorem el missatge final',
        blocs: [
          { p: 'El programa funciona, però el resultat barreja dades i càlcul. Traiem les línies de comprovació i deixem un missatge clar, com faria una aplicació de veritat.' },
          { codi: {
            titol: 'CalculadoraPaga.java',
            etiqueta: 'PAS 4 · VERSIÓ FINAL',
            text: `import java.util.Scanner;

public class CalculadoraPaga {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Quantes hores has treballat? ");
        double hores = teclat.nextDouble();

        System.out.print("Quant cobres per hora? ");
        double preuHora = teclat.nextDouble();

        double total = hores * preuHora;

        System.out.println("Has treballat " + hores + " hores a " + preuHora + " euros/hora.");
        System.out.println("Esta setmana cobraràs " + total + " euros.");
    }
}`,
            entrada: '7.5\n12.5\n',
            sortida: 'Quantes hores has treballat? Quant cobres per hora? Has treballat 7.5 hores a 12.5 euros/hora.\nEsta setmana cobraràs 93.75 euros.',
            sortidaMostrada: `Quantes hores has treballat? 7.5
Quant cobres per hora? 12.5
Has treballat 7.5 hores a 12.5 euros/hora.
Esta setmana cobraràs 93.75 euros.`
          } }
        ]
      },
      {
        titol: 'Trenquem-lo: proves i preguntes',
        blocs: [
          { p: 'Un programa no està acabat fins que l\'hem provat amb casos estranys. Provem estos i apuntem què passa:' },
          { llista: [
            '**0 hores** → total 0.0. Està bé.',
            '**160 hores** → funciona. Compensa comprovar-ho.',
            '**7,5** (amb coma) → el programa s\'atura amb `InputMismatchException`. Java espera un punt!',
            'Una lletra qualsevol → el mateix error, i el programa es tanca.'
          ], numerada: true },
          { p: 'Eixe error de la coma és real i li passa a molta gent: els nombres decimals en Java s\'escriuen amb **punt**. Ho apuntem en el bloc d\'errors i seguim.' },
          { preguntaClasse: 'I si volguérem saber quant es cobra en un mes (4 setmanes i mitja)? Quines línies hi afegiríem?' }
        ]
      }
    ]
  },

  mini: {
    intro: 'Activitats molt curtes: un minut o dos cada una.',
    exercicis: [
      {
        id: 'mini1', titol: 'La teua edat', dificultat: 'facil', temps: '1 min',
        enunciat: 'Crea una variable `int` amb la teua edat i mostra-la amb un missatge.',
        solucio: {
          titol: 'LaMeuaEdat.java',
          text: `public class LaMeuaEdat {
    public static void main(String[] args) {
        int edat = 16;
        System.out.println("Tinc " + edat + " anys.");
    }
}`,
          sortida: 'Tinc 16 anys.',
          perque: 'Has declarat la variable amb el tipus (`int`), li has donat un valor i l\'has mostrada eganxant-la al text.'
        }
      },
      {
        id: 'mini2', titol: 'Les vides que queden', dificultat: 'facil', temps: '2 min',
        enunciat: 'Crea una variable per a les vides d\'un jugador, que comença amb 3. Lleva-li una vida, mostra-la, lleva-li\'n una altra i torna a mostrar-la.',
        solucio: {
          titol: 'Vides.java',
          text: `public class Vides {
    public static void main(String[] args) {
        int vides = 3;
        System.out.println("Vides: " + vides);

        vides = vides - 1;
        System.out.println("Vides: " + vides);

        vides = vides - 1;
        System.out.println("Vides: " + vides);
    }
}`,
          sortida: `Vides: 3
Vides: 2
Vides: 1`,
          perque: 'Sempre la mateixa variable: el que canvia és el valor de dins. Fixa\'t que la instrucció `vides = vides - 1` es repetix dos vegades.'
        }
      },
      {
        id: 'mini3', titol: 'Un preu amb descompte', dificultat: 'facil', temps: '2 min',
        enunciat: 'Un producte costa 80.0 euros i està rebaixat un 25 %. Calcula el preu final i mostra\'l. Consell: un 25 % menys és multiplicar per 0.75.',
        solucio: {
          titol: 'Descompte.java',
          text: `public class Descompte {
    public static void main(String[] args) {
        double preu = 80.0;
        double preuFinal = preu * 0.75;

        System.out.println("Preu: " + preu + " euros");
        System.out.println("Preu amb descompte: " + preuFinal + " euros");
    }
}`,
          sortida: `Preu: 80.0 euros
Preu amb descompte: 60.0 euros`,
          perque: 'Per aplicar un descompte es multiplica pel factor que queda. Un 25 % de descompte deixa el 75 % del preu: 0.75.'
        }
      },
      {
        id: 'mini4', titol: 'Què mostra este programa?', dificultat: 'mitjana', temps: '2 min',
        enunciat: 'Sense executar-lo, pensa què apareixerà per pantalla i explica per què. Després copia\'l i comprova-ho.',
        codi: {
          titol: 'Pregunta.java',
          text: `int cites = 7;
int amics = 2;
System.out.println(cites / amics);
System.out.println(cites % amics);`
        },
        solucio: {
          titol: 'Resposta.java',
          text: `int cites = 7;
int amics = 2;
System.out.println(cites / amics);   // 3
System.out.println(cites % amics);   // 1`,
          sortida: `3
1`,
          perque: 'La divisió entre enters dona 3 (i es perd el 0.5). El residu diu quant sobra: 7 = 2 × 3 + 1, per tant sobra 1. Traduït al món real: 3 cites per persona i en sobra una.'
        }
      },
      {
        id: 'mini5', titol: 'Troba l\'error', dificultat: 'mitjana', temps: '3 min',
        enunciat: 'Este programa no funciona. Copia\'l, mira què diu el compilador i arregla\'l.',
        codi: {
          titol: 'Trencat.java',
          mal: true,
          text: `public class Trencat {
    public static void main(String[] args) {
        punts = 100;
        System.out.println(punts);
    }
}`
        },
        pista: 'El compilador es queixa que no troba cap símbol amb eixe nom. Quina informació li falta a Java per saber què és `punts`?',
        solucio: {
          titol: 'Arreglat.java',
          text: `public class Arreglat {
    public static void main(String[] args) {
        int punts = 100;
        System.out.println(punts);
    }
}`,
          sortida: '100',
          perque: 'Faltava declarar la variable: Java no sabia si `punts` era un nombre, un text o què. Sense el tipus (`int`) no hi hauria ni una capsa on guardar el 100.'
        }
      },
      {
        id: 'mini6', titol: 'El teu nom pel teclat', dificultat: 'facil', temps: '3 min',
        enunciat: 'Demana el nom a l\'usuari (una sola paraula) i saluda\'l pel seu nom.',
        exemple: { entrada: 'Quin és el teu nom? Ana', sortida: 'Hola, Ana! Benvinguda al curs.' },
        solucio: {
          titol: 'Saluda.java',
          text: `import java.util.Scanner;

public class Saluda {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Quin és el teu nom? ");
        String nom = teclat.next();

        System.out.println("Hola, " + nom + "! Benvinguda al curs.");
    }
}`,
          entrada: 'Ana\n',
          sortida: 'Quin és el teu nom? Hola, Ana! Benvinguda al curs.',
          sortidaMostrada: `Quin és el teu nom? Ana
Hola, Ana! Benvinguda al curs.`,
          perque: '`next()` llig una paraula (fins al primer espai) i la guarda en un `String`. Damunt et mostrem la sessió completa: el que escriu l\'usuari i el que respon el programa.'
        }
      },
      {
        id: 'mini7', titol: 'La suma de dos nombres', dificultat: 'mitjana', temps: '4 min',
        enunciat: 'Demana dos nombres enters i mostra la seua suma.',
        exemple: { entrada: 'Primer nombre: 7\nSegon nombre: 5', sortida: 'La suma és 12' },
        solucio: {
          titol: 'Suma.java',
          text: `import java.util.Scanner;

public class Suma {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Primer nombre: ");
        int primer = teclat.nextInt();

        System.out.print("Segon nombre: ");
        int segon = teclat.nextInt();

        System.out.println("La suma és " + (primer + segon));
    }
}`,
          entrada: '7\n5\n',
          sortida: 'Primer nombre: Segon nombre: La suma és 12',
          sortidaMostrada: `Primer nombre: 7
Segon nombre: 5
La suma és 12`,
          perque: 'Fixat en els parèntesis: `"La suma és " + (primer + segon)`. Sense ells, eixiria `La suma és 75`. És l\'error que hem vist en l\'apartat de teoria… i en el qual cau tothom.'
        }
      }
    ]
  },

  principals: {
    intro: 'Quatre exercicis una mica més llargs. Escriu-los sencers, executa\'ls i prova\'ls amb dades diferents abans de mirar la solució.',
    exercicis: [
      {
        id: 'ex1', titol: 'La fitxa personal', dificultat: 'facil', temps: '15 min',
        enunciat: 'Demana a l\'usuari el nom (una paraula), l\'edat (un nombre enter) i l\'alçada en metres (un nombre amb decimals). Després mostra una fitxa amb les tres dades.',
        exemple: {
          entrada: 'Nom: Ana\nEdat: 16\nAlçada (m): 1.63',
          sortida: '--- FITXA ---\nNom: Ana\nEdat: 16 anys\nAlçada: 1.63 m'
        },
        solucio: {
          titol: 'Fitxa.java',
          text: `import java.util.Scanner;

public class Fitxa {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Nom: ");
        String nom = teclat.next();

        System.out.print("Edat: ");
        int edat = teclat.nextInt();

        System.out.print("Alçada (m): ");
        double alcada = teclat.nextDouble();

        System.out.println("--- FITXA ---");
        System.out.println("Nom: " + nom);
        System.out.println("Edat: " + edat + " anys");
        System.out.println("Alçada: " + alcada + " m");
    }
}`,
          entrada: 'Ana\n16\n1.63\n',
          sortida: `Nom: Edat: Alçada (m): --- FITXA ---
Nom: Ana
Edat: 16 anys
Alçada: 1.63 m`,
          sortidaMostrada: `Nom: Ana
Edat: 16
Alçada (m): 1.63
--- FITXA ---
Nom: Ana
Edat: 16 anys
Alçada: 1.63 m`,
          perque: 'Tres tipus distints per a tres dades distintes: `String` per al nom, `int` per a l\'edat i `double` per a l\'alçada. Podem llegir-los seguits sense problema perquè `next()`, `nextInt()` i `nextDouble()` salten els espais i els salts de línia.'
        },
        pista: 'Tres variables, tres mètodes del teclat: `next()`, `nextInt()` i `nextDouble()`.'
      },
      {
        id: 'ex2', titol: 'La botiga de videojocs', dificultat: 'mitjana', temps: '20 min',
        enunciat: 'Una botiga ven claus de videojocs. Demana el preu en cèntims d\'un joc i quants en vol comprar l\'usuari. Calcula el total en cèntims i mostra\'l també en euros (dividint entre 100.0).',
        exemple: {
          entrada: 'Preu en cèntims: 4999\nQuants: 3',
          sortida: 'Total: 14997 cèntims\nEn euros: 149.97 euros'
        },
        solucio: {
          titol: 'Botiga.java',
          text: `import java.util.Scanner;

public class Botiga {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Preu en cèntims: ");
        int preuCentims = teclat.nextInt();

        System.out.print("Quants: ");
        int quantitat = teclat.nextInt();

        int totalCentims = preuCentims * quantitat;

        System.out.println("Total: " + totalCentims + " cèntims");
        System.out.println("En euros: " + totalCentims / 100.0 + " euros");
    }
}`,
          entrada: '4999\n3\n',
          sortida: `Preu en cèntims: Quants: Total: 14997 cèntims
En euros: 149.97 euros`,
          sortidaMostrada: `Preu en cèntims: 4999
Quants: 3
Total: 14997 cèntims
En euros: 149.97 euros`,
          perque: 'Els diners es guarden en cèntims (enters) perquè els `int` són exactes: així no hi ha sorpreses d\'arrodoniment. Només en el moment de mostrar-los dividim entre `100.0` (amb el `.0` perquè volem decimals!) per passar-ho a euros.'
        },
        pista: 'Guarda els diners com a enters i dividix entre `100.0` només per mostrar. Compte a dividir entre `100` sense el `.0`.'
      },
      {
        id: 'ex3', titol: 'El conversor de temperatures', dificultat: 'mitjana', temps: '20 min',
        enunciat: 'Demana una temperatura en graus Celsius i mostra-la convertida a Fahrenheit. La fórmula és: Fahrenheit = Celsius × 9 / 5 + 32.',
        exemple: { entrada: 'Temperatura en Celsius: 30', sortida: '30.0 graus Celsius són 86.0 graus Fahrenheit.' },
        solucio: {
          titol: 'Conversor.java',
          text: `import java.util.Scanner;

public class Conversor {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Temperatura en Celsius: ");
        double celsius = teclat.nextDouble();

        double fahrenheit = celsius * 9 / 5 + 32;

        System.out.println(celsius + " graus Celsius són " + fahrenheit + " graus Fahrenheit.");
    }
}`,
          entrada: '30\n',
          sortida: 'Temperatura en Celsius: 30.0 graus Celsius són 86.0 graus Fahrenheit.',
          sortidaMostrada: `Temperatura en Celsius: 30
30.0 graus Celsius són 86.0 graus Fahrenheit.`,
          perque: 'Com que `celsius` és `double`, tota la fórmula es calcula amb decimals: 30 × 9 = 270, dividit per 5 dona 54.0 i més 32, 86.0. Si hagueres guardat els graus en un `int`, la divisió per 5 et donaria un resultat fals en molts casos.'
        },
        pista: 'Guarda la temperatura en un `double` encara que l\'usuari escriga un nombre rodó.'
      },
      {
        id: 'ex4', titol: 'Quants entrepans puc comprar?', dificultat: 'repte', temps: '25 min',
        enunciat: 'Demana quants euros tens i quant costa un entrepà (les dos coses en euros enters). Digues quants entrepans pots comprar i quants euros et sobraran. No es pot emprar decimals ni condicions: només els operadors `/` i `%`.',
        exemple: {
          entrada: 'Euros que tens: 10\nPreu de l\'entrepà: 3',
          sortida: 'Pots comprar 3 entrepans.\nEt sobraran 1 euros.'
        },
        solucio: {
          titol: 'Entrepans.java',
          text: `import java.util.Scanner;

public class Entrepans {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Euros que tens: ");
        int diners = teclat.nextInt();

        System.out.print("Preu de l'entrepà: ");
        int preu = teclat.nextInt();

        int quants = diners / preu;      // divisió entera: només els sencers
        int sobren = diners % preu;      // el residu: el que no es pot gastar

        System.out.println("Pots comprar " + quants + " entrepans.");
        System.out.println("Et sobraran " + sobren + " euros.");
    }
}`,
          entrada: '10\n3\n',
          sortida: `Euros que tens: Preu de l'entrepà: Pots comprar 3 entrepans.
Et sobraran 1 euros.`,
          sortidaMostrada: `Euros que tens: 10
Preu de l'entrepà: 3
Pots comprar 3 entrepans.
Et sobraran 1 euros.`,
          perque: 'Ací la divisió entera és justament el que volem: 10 / 3 dona 3 perquè **no es pot comprar mig entrepà**. I el residu 10 % 3 dona 1, que són els euros que sobren. Dos operadors, dos resultats útils.'
        },
        pista: 'La divisió entera et diu quants caben i el residu et diu què sobra. Prova-ho amb 10 i 3 a mà: 3 × 3 = 9, i en sobra 1.'
      }
    ]
  },

  reptes: {
    reptes: [
      {
        titol: 'La fitxa del teu personatge',
        blocs: [
          { p: 'Crea un programa que construïsca la fitxa d\'un personatge de videojoc. Ha de demanar el **nom** (una paraula), la **classe** (mag, guerrer, arquer…), els **punts de vida** i l\'**or** que porta.' },
          { p: 'Després ha de calcular i mostrar: el **nivell** del personatge (cada 100 monedes d\'or és un nivell) i quant **or li falta** per al següent nivell.' },
          { p: 'L\'eixida ha de quedar com una fitxa, amb línies alineades i els valors ben col·locats. Pensa quines dades són enters i quines no.' }
        ],
        ampliacions: [
          'Afig una dada més: el pes de l\'equipament en quilograms (amb decimals) i mostra el pes total.',
          'Que el programa calcule també la vida que li queda després de rebre un colp de 25 punts.'
        ]
      },
      {
        titol: 'La calculadora de l\'índex de massa corporal',
        blocs: [
          { p: 'Fes un programa que demane el pes en quilograms (amb decimals) i l\'alçada en metres (amb decimals) i calcule l\'**IMC**, que es calcula així: IMC = pes / (alçada × alçada).' },
          { p: 'Mostra el resultat amb un missatge clar. Prova\'l amb les teues dades i amb dades exagerades (2 metres d\'alçada i 40 kg) i pensa si el resultat et pareix correcte.' },
          { p: 'No fa falta decidir si el resultat és bo o roín: això necessita condicions, i les condicions arriben en el següent tema. Ací només cal calcular i mostrar.' }
        ],
        ampliacions: [
          'Que el programa mostre també quant pesaria la persona si guanyara 5 kg.',
          'Afig la conversió de l\'alçada a centímetres (alçada × 100).'
        ]
      }
    ]
  },

  errors: {
    entradeta: 'Estos són els errors que segur que veuràs. Llig-los abans de programar: quan apareguen, sabràs què passa.',
    errors: [
      {
        titol: 'Usar una variable sense valor',
        mal: {
          titol: 'Mal.java',
          text: `int punts;
System.out.println(punts);`,
          missatge: 'error: variable punts might not have been initialized'
        },
        bo: { titol: 'Be.java', text: `int punts = 0;\nSystem.out.println(punts);` },
        que: 'Hem creat la caixa però l\'hem deixada buida i després hem intentat mostrar què hi ha dins.',
        perque: 'Java no suposa valors: una variable `int` no val 0 per art de màgia, i Java no vol inventar-se\'n un.',
        detectar: 'El missatge diu *might not have been initialized* («pot ser que no se li haja donat valor»).',
        corregir: 'Dona-li un valor quan la declares: `int punts = 0;`. Si encara no saps quin valor tindrà, posa-li zero i canvia\'l després.'
      },
      {
        titol: 'Escriure els decimals amb coma',
        mal: { titol: 'Mal.java', text: `double preu = 4,95;`, missatge: 'error: \',\' expected\n        double preu = 4,95;\n                       ^' },
        bo: { titol: 'Be.java', text: `double preu = 4.95;` },
        que: 'Hem escrit la coma decimal que fem servir quan parlem i quan escrivim a mà.',
        perque: 'En Java (i en la majoria de llenguatges de programació) el separador decimal és el **punt**. La coma té un altre significat: servix per separar coses.',
        detectar: 'El missatge deia literalment `\',\' expected`: Java esperava una coma en un altre lloc perquè no entén eixa.',
        corregir: 'Escriu el punt: `4.95`. I recorda-ho també quan l\'usuari haja d\'escriure decimals pel teclat: 1.63, no 1,63.'
      },
      {
        titol: 'La divisió entera que es mengen els decimals',
        mal: { titol: 'Mal.java', text: `int notes = 21;\ndouble mitjana = notes / 3;` },
        bo: { titol: 'Be.java', text: `int notes = 21;\ndouble mitjana = notes / 3.0;` },
        que: 'Esperàvem 7.0 i el programa… sí, dona 7.0. Però si les notes hagueren sumat 22, hauria donat 7.0 també! (Perquè 22 / 3 = 7 en divisió entera i es perd el 0.333).',
        perque: 'La divisió es decideix abans de guardar el resultat: si els dos nombres són enters, Java fa la divisió entre enters i **llença la part decimal**. Després ja no hi ha res a recuperar.',
        detectar: 'El senyal és un resultat rarament rodó quan esperàvem decimals. Si el resultat sempre és un nombre enter quan no ho hauria de ser, mira els tipus.',
        corregir: 'Fes que almenys un dels dos siga decimal: escriu `3.0`, o guarda el numerador en una variable `double` des del principi.'
      },
      {
        titol: 'Oblidar el tipus de la variable',
        mal: { titol: 'Mal.java', text: `punts = 100;`, missatge: 'error: cannot find symbol\n        punts = 100;\n        ^\n  symbol:   variable punts' },
        bo: { titol: 'Be.java', text: `int punts = 100;` },
        que: 'Hem intentat guardar un valor en una variable que no havíem creat.',
        perque: 'Java necessita saber el nom i el tipus **abans** d\'usar una variable. Si no la troba, diu que no coneix eixe símbol.',
        detectar: 'El missatge diu `cannot find symbol` i assenyala el nom exacte que no troba.',
        corregir: 'Declara-la abans: `int punts = 100;`. Si el nom està ben escrit, mira si l\'has declarada dins d\'una altra part del programa on no arriba.'
      },
      {
        titol: 'Escriure una lletra quan el programa espera un número',
        mal: { titol: 'Mal.java', text: `Scanner teclat = new Scanner(System.in);\nint edat = teclat.nextInt();`, missatge: 'Exception in thread "main" java.util.InputMismatchException\n\tat java.base/java.util.Scanner.throwFor(Scanner.java:939)' },
        bo: { titol: 'Be.java', text: `Scanner teclat = new Scanner(System.in);\nSystem.out.print("Edat: ");\nint edat = teclat.nextInt();   // i l'usuari escriu un número` },
        que: 'L\'usuari ha escrit una lletra o una paraula on el programa esperava un nombre.',
        perque: '`nextInt()` només sap llegir nombres enters. Si el que arriba no és un nombre, llança una excepció i el programa s\'atura.',
        detectar: 'El missatge conté `InputMismatchException`. També passa si escrivim els decimals amb coma en un `nextDouble()`.',
        corregir: 'De moment, assegura\'t d\'escriure el tipus de dada que toca (un nombre enter, amb punt si és decimal). Més avant aprendrem a comprovar-ho perquè el programa no es tanque.'
      },
      {
        titol: 'Confondre cometes dobles i simples',
        mal: { titol: 'Mal.java', text: `String resposta = 'sí';\nchar inicial = "A";`, missatge: `error: incompatible types: char cannot be converted to String\n        String resposta = 'sí';\nerror: incompatible types: String cannot be converted to char\n        char inicial = "A";` },
        bo: { titol: 'Be.java', text: `String resposta = "sí";\nchar inicial = 'A';` },
        que: 'Hem creuat les cometes: text amb cometes simples i caràcter amb cometes dobles.',
        perque: '`char` guarda **un sol caràcter** i va entre cometes simples; `String` guarda **text** i va entre cometes dobles. Són dos tipus distints.',
        detectar: 'El missatge parla de `char cannot be converted to String` (o al revés).',
        corregir: 'Text → cometes dobles (`"sí"`). Un sol caràcter → cometes simples (`\'A\'`).'
      }
    ]
  },

  resum: {
    entradeta: 'Les idees que has d\'endur-te. Si pots explicar-les amb les teues paraules, el tema està apamat.',
    idees: [
      'Una **variable** és una caixa amb nom on guardem un valor que pot canviar.',
      'Per crear-la cal dir-ne el **tipus** i el **nom**: `int punts = 100;`.',
      'Tipus bàsics: `int` (enters), `double` (decimals), `boolean` (sí/no), `char` (un caràcter) i `String` (text).',
      'Els operadors són `+ - * / %`. El residu `%` diu què sobra d\'una divisió.',
      'Si dividixes dos enters, Java **perd els decimals**: escriu `2.0` o guarda els nombres com a `double`.',
      'Amb `+` s\'enganxen text i variables. Compte: `"Total: " + a + b` no suma! Cal `(a + b)`.',
      '`Scanner` permet llegir el que l\'usuari escriu: `nextInt()`, `nextDouble()`, `next()`.',
      'Els decimals s\'escriuen amb **punt** i Java no posa zeros que no calen: mostra `20.0` i `4.2`.'
    ]
  },

  autoavaluacio: {
    entradeta: 'Nou preguntes. Pensa la resposta abans de mirar-la: si l\'encertes, ja tens el tema controlat.',
    preguntes: [
      {
        pregunta: 'Què és una variable?',
        opcions: [
          'Un text que es mostra per pantalla.',
          'Una caixa amb un nom on guardem un valor que pot canviar.',
          'Una ordre que repetix instruccions.'
        ],
        resposta: 'b) Una caixa amb un nom on guardem un valor.',
        perque: 'La variable té un nom i un tipus, guarda un valor i podem canviar eixe valor tantes vegades com vulguem.'
      },
      {
        pregunta: 'Quin tipus faries servir per guardar la nota d\'un examen que pot ser 7.5?',
        opcions: ['`int`', '`double`', '`String`'],
        resposta: 'b) `double`',
        perque: 'Un `int` no pot guardar decimals: 7.5 es convertiria en un error de compilació. La nota va en `double`.'
      },
      {
        pregunta: 'Què mostra este programa per pantalla?',
        codi: { titol: 'Pregunta.java', text: `int vides = 3;\nvides = vides + 2;\nSystem.out.println("Vides: " + vides);` },
        resposta: '`Vides: 5`',
        perque: 'La variable comença valent 3, després es guarda 3 + 2 = 5 en la mateixa variable i finalment es mostra.'
      },
      {
        pregunta: 'Quin és el resultat de `7 / 2` si els dos nombres són enters? I el de `7 % 2`?',
        resposta: '`7 / 2` dona 3 i `7 % 2` dona 1.',
        perque: 'La divisió entre enters es queda amb la part entera i llenga els decimals. El residu (`%`) dona el que sobra: 7 = 2 × 3 + 1.'
      },
      {
        pregunta: 'Volem la mitjana de dos nombres enters que sumen 21 i volem decimals. Quina línia és correcta?',
        opcions: ['`double m = 21 / 2;`', '`double m = 21 / 2.0;`', '`double m = 21 % 2;`'],
        resposta: 'b) `double m = 21 / 2.0;`',
        perque: 'Amb `2.0` la divisió es fa amb decimals i el resultat és 10.5. En la primera opció, Java fa la divisió entre enters (10) i després guarda eixe 10 dins d\'un `double`: ja és massa tard.'
      },
      {
        pregunta: 'Què apareixerà per pantalla?',
        codi: { titol: 'Pregunta.java', text: `int a = 3;\nint b = 4;\nSystem.out.println("Total: " + a + b);` },
        resposta: '`Total: 34`',
        perque: 'Quan el `+` ajunta un text amb un número, tot el que ve després es convertix en text i s\'enganxa. Si volíem la suma, caldria escriure `"Total: " + (a + b)`.'
      },
      {
        pregunta: 'Per què el programa s\'atura amb `InputMismatchException`?',
        codi: { titol: 'Pregunta.java', text: `Scanner teclat = new Scanner(System.in);\nint edat = teclat.nextInt();\n// l'usuari escriu: setze` },
        resposta: 'Perquè l\'usuari ha escrit lletres on el programa esperava un nombre enter.',
        perque: '`nextInt()` només llig nombres enters. També passa si escrius un decimal amb coma: Java espera el punt.'
      },
      {
        pregunta: 'Este programa no compila. Què li falta?',
        codi: { titol: 'Pregunta.java', text: `mitjana = 7.5;\nSystem.out.println(mitjana);` },
        resposta: 'Falta declarar la variable amb el seu tipus: `double mitjana = 7.5;`.',
        perque: 'Java ha de saber el nom i el tipus abans d\'usar una variable. El missatge seria *cannot find symbol: variable mitjana*.'
      },
      {
        pregunta: 'Volem guardar l\'edat d\'una persona que pot tindre 15 anys o 15.5 anys (mig any). Quin tipus tries, i per què?',
        resposta: '`double`, perquè ha de poder guardar decimals.',
        perque: 'Si tries `int` i guardes 15.5, el programa ni tan sols compilarà. Pensar el tipus de cada dada **abans** d\'escriure el codi ens estalvia errors: sempre ens preguntem «pot tindre decimals esta dada?».'
      }
    ]
  },

  /* ------------------------------------------------------- DIAPOSITIVES */
  diapositives: {
    objectiu: 'Entendre què és una variable i saber guardar, canviar i mostrar informació en un programa senzill.',
    index: [
      'Què és una variable',
      'Declarar i assignar',
      'Els tipus bàsics',
      'Operadors aritmètics',
      'La divisió entre enters',
      'Concatenar text',
      'Demanar dades amb Scanner',
      'Practiquem'
    ],
    blocs: [
      {
        tipus: 'concepte',
        titol: 'Una variable és una caixa amb nom',
        bullets: [
          'Té un nom: edat, punts, nota, preu…',
          'Té un tipus: què hi cap a dins',
          'Dins guarda un valor',
          'El valor pot canviar mentre el programa funciona'
        ],
        notes: 'Dibuixar la capsa a la pissarra i canviar-li el contingut davant de la classe.'
      },
      {
        tipus: 'codi',
        titol: 'La primera variable',
        codi: 'int punts = 0;\nSystem.out.println(punts);\npunts = 10;\nSystem.out.println(punts);\npunts = punts + 25;\nSystem.out.println(punts);',
        sortida: '0\n10\n35',
        notes: 'Escriure-ho i executar-ho en directe. Preguntar què valdrà punts cada vegada.'
      },
      {
        tipus: 'comparacio',
        titol: 'Els tipus bàsics',
        esquerra: { titol: 'Nombres', bullets: ['int → enters: 16, 0, -3', 'double → decimals: 7.5, 1.63', 'Per comptar i calcular'] },
        dreta: { titol: 'Altres dades', bullets: ['boolean → true / false', 'char → un caràcter: \'A\'', 'String → text: "Ana"'] }
      },
      {
        tipus: 'codi',
        titol: 'Els operadors',
        codi: 'int a = 7;\nint b = 2;\nSystem.out.println(a + b);   // 9\nSystem.out.println(a - b);   // 5\nSystem.out.println(a * b);   // 14\nSystem.out.println(a / b);   // 3  ← compte!\nSystem.out.println(a % b);   // 1',
        sortida: '9\n5\n14\n3\n1',
        notes: 'Posar molta atenció en la divisió: 7/2 és 3, no 3.5.'
      },
      {
        tipus: 'prediccio',
        titol: 'Pensem abans d\'executar',
        codi: 'int a = 9;\nint b = 2;\nSystem.out.println(a / b);\nSystem.out.println(a / 2.0);',
        pregunta: 'Què apareixerà per pantalla? Són iguals?',
        notes: 'Deixar que voten. La clau: si els dos costats són enters, es perd la part decimal.'
      },
      {
        tipus: 'codi',
        titol: 'Enganxar text i variables',
        codi: 'String nom = "Ana";\nint punts = 350;\nSystem.out.println("Hola, " + nom + "!");\nSystem.out.println("Tens " + punts + " punts.");',
        sortida: 'Hola, Ana!\nTens 350 punts.',
        notes: 'Avisar del parany: "Total: " + a + b no suma, enganxa.'
      },
      {
        tipus: 'codi',
        titol: 'Demanar dades pel teclat',
        codi: 'import java.util.Scanner;\n\nScanner teclat = new Scanner(System.in);\n\nSystem.out.print("Edat: ");\nint edat = teclat.nextInt();\n\nSystem.out.println("Tens " + edat + " anys.");',
        sortida: 'Edat: 16\nTens 16 anys.',
        notes: 'Fer-ho davant de la classe i escriure una lletra per vore l\'InputMismatchException.'
      },
      {
        tipus: 'activitat',
        titol: 'Ara et toca a tu',
        enunciat: 'Fes un programa que demane les hores treballades i el preu per hora (amb decimals) i diga quant es cobrarà en total.',
        temps: '15 min',
        pistes: ['Les dos dades poden tindre decimals: double', 'Multiplica i mostra el resultat amb un missatge'],
        notes: 'Passar per les taules: l\'error més habitual serà la coma decimal o oblidar crear el Scanner.'
      },
      {
        tipus: 'concepte',
        titol: 'Els errors que veuràs segur',
        bullets: [
          'Usar una variable sense valor → might not have been initialized',
          'Escriure 4,95 en compte de 4.95',
          'Dividir dos enters i perdre els decimals',
          'Oblidar el tipus: punts = 100; → cannot find symbol',
          'Escriure lletres on cal un número → InputMismatchException'
        ],
        notes: 'Provocar-los en directe: el compilador és el millor professor.'
      },
      {
        tipus: 'pregunta',
        titol: 'Pensem un moment',
        pregunta: 'Si una variable pot canviar de valor, com sabem quin valor té en cada moment del programa?'
      }
    ],
    resum: [
      'Una variable és una caixa amb nom on guardem un valor.',
      'Cada dada té un tipus: int, double, boolean, char o String.',
      'Assignar amb «=» vol dir «guarda això dins».',
      'Els operadors + - * / % ens deixen calcular.',
      'Divisió de dos enters: es perden els decimals!',
      'Amb «+» s\'enganxen text i variables (compte amb l\'orde).',
      'Scanner servix per llegir el que l\'usuari escriu pel teclat.',
      'Els decimals s\'escriuen amb punt: 7.5'
    ],
    seguent: 'Tema 2 · Prendre decisions'
  }
};
