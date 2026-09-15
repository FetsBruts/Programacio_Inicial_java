/* ==========================================================================
   TEMA 2 · Prendre decisions  —  contingut de la pàgina
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   · sortida = eixida real (es comprova amb  node eines/prova-codi-java.mjs 2 )
   · sortidaMostrada = el que es mostra quan el programa demana dades
   ========================================================================== */
globalThis.TEMA = {
  n: 2,
  titol: 'Prendre decisions',
  subtitol: 'Que el programa decidisca per si mateix',
  durada: '3 hores de classe',

  hero: {
    etiqueta: 'Tema 2 · Sessió de 3 hores',
    entradeta: 'Un programa que sempre fa el mateix servix de poc. Ara aprendrem a fer que decidisca: si l\'usuari té 18 anys, si la contrasenya és correcta, si la nota arriba al 5…',
    meta: [
      '⏱ 3 hores',
      '📦 Fase 1 · Pensament de programador',
      '🧩 Necessites: Temes 0 i 1',
      '❓ La pregunta clau: quina condició ha de complir-se?'
    ]
  },

  introduccio: {
    titol: 'Una situació per començar',
    emoji: '🎟️',
    blocs: [
      { p: 'Un cinema vol calcular el preu de l\'entrada: si tens menys de 6 anys, **gratis**; si tens entre 6 i 17, **6 euros**; dels 18 als 64, **9 euros**; i si tens 65 o més, **5 euros**.' },
      { p: 'Amb el que sabem fins ara hauríem d\'escriure un programa per a cada cas, i no sabríem quin executar. El programa ha de **decidir** ell tot sol, mirant l\'edat que li donem.' },
      { p: 'Ací comença la part més divertida de programar: fer que el programa pregunte, compare i trie. I hi ha **una pregunta** que et faràs tota la vida de programador: *«quina condició s\'ha de complir perquè passe açò?»*' }
    ],
    plan: [
      ['30-40 min', 'Explicació i demos'],
      ['60-75 min', 'Programació guiada'],
      ['60-75 min', 'Exercicis'],
      ['15-30 min', 'Repàs i repte']
    ],
    prerequisits: [
      'Crear variables i guardar-hi valors (Tema 1).',
      'Llegir dades pel teclat amb `Scanner`.',
      'Entendre la diferència entre enters i decimals.'
    ]
  },

  objectius: {
    intro: 'En acabar esta sessió has de saber fer estes coses:',
    llista: [
      'Comparar dos valors amb `==`, `!=`, `<`, `>`, `<=` i `>=`.',
      'Escriure un `if` i un `else` i saber què fa cada part.',
      'Encadenar diversos casos amb `else if` en l\'orde correcte.',
      'Combinar condicions amb `&&`, `||` i `!`.',
      'Comparar textos correctament (amb `equals`, no amb `==`).',
      'Fer menús i opcions amb `switch`.'
    ]
  },

  teoria: {
    titol: 'Teoria, poc a poc',
    entradeta: 'Una idea → un exemple. I sempre la mateixa pregunta: quina condició ha de complir-se?',
    blocs: [
      { h3: '1. Comparar dos valors' },
      { p: 'Per decidir, primer hem de saber comparar. Una comparació **no** dona un número: dona **vertader o fals** (`true` / `false`), que és justament el tipus `boolean` que vam vore en el tema anterior.' },
      { taula: {
        cap: ['Operador', 'Es llig', 'Exemple', 'Resultat'],
        files: [
          ['`==`', 'és igual a', '`5 == 5`', '`true`'],
          ['`!=`', 'és diferent de', '`5 != 3`', '`true`'],
          ['`>`', 'és més gran que', '`4 > 9`', '`false`'],
          ['`<`', 'és més menut que', '`4 < 9`', '`true`'],
          ['`>=`', 'és més gran o igual que', '`5 >= 5`', '`true`'],
          ['`<=`', 'és més menut o igual que', '`7 <= 5`', '`false`']
        ]
      } },
      { codi: {
        titol: 'Comparacions.java',
        etiqueta: 'COMPARAR',
        text: `public class Comparacions {
    public static void main(String[] args) {
        int edat = 16;

        boolean major = edat >= 18;          // guardem el resultat en un boolean
        System.out.println(major);            // false
        System.out.println(edat == 16);       // true
        System.out.println(edat != 16);       // false
    }
}`,
        sortida: `false
true
false`
      } },
      { nota: { tipus: 'important', text: '**`=` no és el mateix que `==`.** Un sol igual (`=`) **guarda** un valor dins d\'una variable. Dos iguals (`==`) **comparen**. Confondre\'ls és l\'error número u d\'este tema, i Java no sempre t\'avisa!' } },

      { h3: '2. El primer if' },
      { p: 'Un `if` és una pregunta que fem al programa: *si la condició és vertadera, faça açò; si no, res*.' },
      { codi: {
        titol: 'Aprovat.java',
        etiqueta: 'IF',
        text: `public class Aprovat {
    public static void main(String[] args) {
        double nota = 7.5;

        if (nota >= 5) {
            System.out.println("Estàs aprovat!");
        }

        System.out.println("Fi del programa.");
    }
}`,
        sortida: `Estàs aprovat!
Fi del programa.`
      } },
      { p: 'Fixa\'t en tres coses de la sintaxi: la condició va **entre parèntesis**, el codi que s\'executa si es complix va **entre claus**, i el contingut de les claus està **indentat** per vore-ho clarament.' },
      { nota: { tipus: 'tip', text: 'La pregunta que sempre ens fem: **quina condició ha de complir-se perquè passe açò?** Ací la resposta és `nota >= 5`. Si no sabem respondre eixa pregunta, encara no hem pensat bé el problema.' } },

      { h3: '3. I si no es complix: else' },
      { p: '`else` vol dir «si no». Amb `if` i `else` cobrim els dos camins possibles: un o l\'altre, mai els dos.' },
      { codi: {
        titol: 'AprovatOSuspes.java',
        etiqueta: 'IF / ELSE',
        text: `public class AprovatOSuspes {
    public static void main(String[] args) {
        double nota = 4.25;

        if (nota >= 5) {
            System.out.println("Aprovat");
        } else {
            System.out.println("Suspés");
        }
    }
}`,
        sortida: 'Suspés'
      } },
      { p: 'Mira el parèntesi de tancament de la condició: **no porta punt i coma**. Si li\'n posem, el `if` es queda sense cos i el programa fa una cosa estranya sense donar error. Ho tenim en l\'apartat d\'errors.' },

      { h3: '4. Més de dos camins: else if' },
      { p: 'Quan hi ha més de dos casos, s\'encadenen les preguntes. Java les mira **en orde** i entra en la primera que es complica.' },
      { codi: {
        titol: 'Notes.java',
        etiqueta: 'ELSE IF',
        text: `public class Notes {
    public static void main(String[] args) {
        double nota = 8.5;

        if (nota < 5) {
            System.out.println("Insuficient");
        } else if (nota < 7) {
            System.out.println("Suficient o Bé");
        } else if (nota < 9) {
            System.out.println("Notable");
        } else {
            System.out.println("Excel·lent");
        }
    }
}`,
        sortida: 'Notable'
      } },
      { nota: { tipus: 'avis', text: '**L\'orde importa.** Si començarem per `nota < 9`, un 4.5 també compliria la condició i mai no arribaríem a mirar si és un insuficient. Sempre es posen primer les condicions **més concretes** (les més estretes) i al final la més àmplia.' } },

      { h3: '5. Combinar condicions' },
      { p: 'A vegades cal que es complisquen dos coses alhora, o que en baste una. Per a això tenim els operadors lògics.' },
      { taula: {
        cap: ['Operador', 'Es llig', 'És vertader quan…'],
        files: [
          ['`&&`', 'I (a més a més)', 'les **dos** condicions es complixen'],
          ['`||`', 'O', 'es complix **almenys una** de les dos'],
          ['`!`', 'No', 'la condició **no** es complix']
        ]
      } },
      { codi: {
        titol: 'Combinades.java',
        etiqueta: 'CONDICIONS COMBINADES',
        text: `public class Combinades {
    public static void main(String[] args) {
        int edat = 16;
        boolean teCarnet = false;

        System.out.println(edat >= 18 && teCarnet);   // pot conduir? false
        System.out.println(edat >= 18 || teCarnet);   // alguna cosa?   false
        System.out.println(!teCarnet);                // no té carnet?  true

        boolean adolescent = edat >= 13 && edat <= 19;
        System.out.println(adolescent);               // true
    }
}`,
        sortida: `false
false
true
true`
      } },
      { nota: { tipus: 'important', text: 'En Java **no es pot escriure** `13 <= edat <= 19`, encara que en matemàtiques es faça així. Cal escriure les dos comparacions i unir-les amb `&&`: `edat >= 13 && edat <= 19`.' } },

      { h3: '6. Comparar textos: equals' },
      { p: 'Ací hi ha una trampa molt famosa. Per comparar dos textos **no** es fa servir `==`, sinó el mètode `equals()`:' },
      { codi: {
        titol: 'Contrasenya.java',
        etiqueta: 'EQUALS',
        text: `import java.util.Scanner;

public class Contrasenya {
    public static void main(String[] args) {
        String clauGuardada = "1234";
        Scanner teclat = new Scanner(System.in);

        System.out.print("Contrasenya: ");
        String clauEscrita = teclat.next();

        System.out.println(clauEscrita == clauGuardada);        // false! ensurt
        System.out.println(clauEscrita.equals(clauGuardada));   // true, segur
    }
}`,
        entrada: '1234\n',
        sortida: `Contrasenya: false
true`,
        sortidaMostrada: `Contrasenya: 1234
false
true`
      } },
      { p: 'Sí, has llegit bé: la primera línia dona `false` encara que els dos textos diguen exactament el mateix. `==` compara si són *el mateix objecte* (i el text que arriba pel teclat sempre és un objecte nou), mentres que `equals` compara si *contenen el mateix text*. Nosaltres sempre volem el segon.' },
      { nota: { tipus: 'tip', text: 'Regla fàcil de recordar: **els textos es comparen amb `equals`**. Sempre. I si no ens importen les majúscules, hi ha `equalsIgnoreCase("hola")`.' } },

      { h3: '7. Menús: switch' },
      { p: 'Quan totes les decisions depenen de **un sol valor** i són opcions numerades (un menú, per exemple), hi ha una manera més ordenada d\'escriure-ho: `switch`.' },
      { codi: {
        titol: 'Menu.java',
        etiqueta: 'SWITCH',
        text: `public class Menu {
    public static void main(String[] args) {
        int opcio = 2;

        switch (opcio) {
            case 1:
                System.out.println("Nova partida");
                break;
            case 2:
                System.out.println("Carregar partida");
                break;
            case 3:
                System.out.println("Opcions");
                break;
            default:
                System.out.println("Opció desconeguda");
        }
    }
}`,
        sortida: 'Carregar partida'
      } },
      { p: 'El `switch` compara el valor amb cada `case` i entra en el que coincidix. El `break` fa que s\'acabe eixe cas; i `default` és el cas «si no coincidix cap altre».' },
      { nota: { tipus: 'info', text: 'Si t\'oblides un `break`, Java continua executant els casos següents. És un error clàssic i es veu de seguida en l\'eixida: ixen diversos missatges. Les versions noves de Java tenen una manera d\'escriure-ho sense `break`, però de moment ens quedem amb esta, que funciona en totes les versions.' } },

      { h3: '8. if dins d\'un if' },
      { p: 'Es poden ficar decisions dins de decisions. Es diu *niar* i és perfectament vàlid, però si n\'hi ha moltes el codi es fa difícil de seguir. De moment, prova-ho amb dos nivells com a màxim.' },
      { codi: {
        titol: 'Niat.java',
        etiqueta: 'IF NIAT',
        text: `public class Niat {
    public static void main(String[] args) {
        int edat = 20;
        boolean teEntrada = true;

        if (edat >= 18) {
            if (teEntrada) {
                System.out.println("Endavant, pots passar.");
            } else {
                System.out.println("Primer compra l'entrada.");
            }
        } else {
            System.out.println("Ho sent, per a majors de 18 anys.");
        }
    }
}`,
        sortida: 'Endavant, pots passar.'
      } },
      { nota: { tipus: 'tip', text: 'Moltes vegades un `if` niat es pot escriure en una sola condició: `if (edat >= 18 && teEntrada)`. És més curt i es llix millor. Sempre que pugues, uneix les condicions amb `&&`.' } }
    ]
  },

  exemples: {
    titol: 'Exemples explicats pas a pas',
    entradeta: 'Cada exemple: què volem aconseguir, el codi, què apareix per pantalla i per què funciona.',
    blocs: [
      { h3: 'Exemple 1 · Major o menor d\'edat' },
      { p: '**Què volem?** Que el programa diga si una persona pot entrar en una web de contingut per a adults.' },
      { codi: {
        titol: 'Edats.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Edats {
    public static void main(String[] args) {
        int edat = 15;

        if (edat >= 18) {
            System.out.println("Pots entrar: ets major d'edat.");
        } else {
            System.out.println("Ho sent, cal tindre 18 anys.");
            System.out.println("Et falten " + (18 - edat) + " anys.");
        }
    }
}`,
        sortida: `Ho sent, cal tindre 18 anys.
Et falten 3 anys.`
      } },
      { p: '**Per què funciona:** la condició és `edat >= 18`. Com que 15 no és major ni igual que 18, la condició és falsa i s\'executa el bloc de l\'`else`. I dins d\'eixe bloc pugem calcular quants anys falten: 18 − 15.' },

      { h3: 'Exemple 2 · El preu de l\'entrada' },
      { p: '**Què volem?** El cinema de la introducció: quatre tarifes segons l\'edat. Fixa\'t en l\'orde de les condicions.' },
      { codi: {
        titol: 'Cinema.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Cinema {
    public static void main(String[] args) {
        int edat = 70;

        if (edat < 6) {
            System.out.println("Entrada gratuïta");
        } else if (edat < 18) {
            System.out.println("Entrada: 6 euros");
        } else if (edat < 65) {
            System.out.println("Entrada: 9 euros");
        } else {
            System.out.println("Entrada: 5 euros (jubilats)");
        }
    }
}`,
        sortida: 'Entrada: 5 euros (jubilats)'
      } },
      { p: '**Per què funciona:** les condicions van **de menor a major** i s\'aprofiten les unes de les altres. Quan arribem a l\'última, encara que posa només `else`, ja sabem que l\'edat és 65 o més, perquè totes les anteriors han sigut falses.' },

      { h3: 'Exemple 3 · El nivell d\'un videojoc' },
      { p: '**Què volem?** Traduir els punts d\'un jugador al seu nivell, amb la paraula corresponent.' },
      { codi: {
        titol: 'Nivell.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Nivell {
    public static void main(String[] args) {
        int punts = 2450;

        String nivell;
        if (punts < 1000) {
            nivell = "principiant";
        } else if (punts < 2500) {
            nivell = "intermedi";
        } else {
            nivell = "expert";
        }

        System.out.println("Amb " + punts + " punts, el teu nivell és " + nivell + ".");
    }
}`,
        sortida: 'Amb 2450 punts, el teu nivell és intermedi.'
      } },
      { p: '**Per què funciona:** ací no mostrem res dins del `if`: **decidim un valor i el guardem**. És un patró molt útil: fer les decisions primer i mostrar el resultat una sola vegada al final.' },

      { h3: 'Exemple 4 · L\'accés amb contrasenya' },
      { p: '**Què volem?** Demanar una contrasenya i deixar passar només si encerta. Ací es veu per què cal `equals`.' },
      { codi: {
        titol: 'Acces.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `import java.util.Scanner;

public class Acces {
    public static void main(String[] args) {
        String clauCorrecta = "patata123";
        Scanner teclat = new Scanner(System.in);

        System.out.print("Contrasenya: ");
        String clau = teclat.next();

        if (clau.equals(clauCorrecta)) {
            System.out.println("Accés concedit. Benvingut!");
        } else {
            System.out.println("Contrasenya incorrecta.");
        }
    }
}`,
        entrada: 'patata123\n',
        sortida: 'Contrasenya: Accés concedit. Benvingut!',
        sortidaMostrada: `Contrasenya: patata123
Accés concedit. Benvingut!`
      } },
      { p: '**Per què funciona:** `clau.equals(clauCorrecta)` compara el contingut dels dos textos. Si haguerem escrit `clau == clauCorrecta`, el programa diria sempre «incorrecta» encara que l\'usuari l\'encertara.' },
      { nota: { tipus: 'tip', text: 'Bonus de seguretat: mai no s\'ha d\'escriure dins del codi una contrasenya de veritat. Ací ho fem per aprendre, però recorda-ho: el codi el pot llegir tothom.' } },

      { h3: 'Què apareixerà per pantalla?' },
      { p: 'Este és el parany del punt i coma. Pensa què ix abans d\'executar.' },
      { prediccio: {
        id: 'pred-punticoma',
        titol: 'Pensa abans d\'executar',
        fitxer: 'Parany.java',
        text: `int edat = 12;
if (edat >= 18);
{
    System.out.println("Pots conduir");
}`,
        sortida: `Pots conduir`,
        perque: 'El `;` al final de la línia del `if` fa que el `if` no tinga cos: la condició es comprova i es descarta. El bloc de davall de les claus s\'executa SEMPRE, tinga l\'edat que tinga. És un error que no dona cap missatge i costa molt de trobar: per això no hem de posar mai `;` darrere d\'un `if`.'
      } }
    ]
  },

  guiada: {
    titol: 'Programació guiada: ho fem junts',
    entradeta: 'Construïm un programa que valora una nota i diu la qualificació oficial, amb els trams ben ordenats. Pas a pas, com sempre.',
    passos: [
      {
        titol: 'Lliguem el problema i traiem les condicions',
        blocs: [
          { p: 'La nota oficial a Formació Professional funciona així: menys de 5 és **Insuficient**; de 5 a menys de 6, **Suficient**; de 6 a menys de 7, **Bé**; de 7 a menys de 9, **Notable**; i 9 o més, **Excel·lent**.' },
          { preguntaClasse: 'Quantes condicions necessitem? I en quin orde les hem de posar?' },
          { p: 'Tenim quatre trams i un cas final. L\'orde natural és de menor a major: `nota < 5`, `nota < 6`, `nota < 7`, `nota < 9` i, si cap s\'ha complit, ja sabem que és 9 o més → **Excel·lent**.' }
        ]
      },
      {
        titol: 'La primera versió, amb dos trams',
        blocs: [
          { p: 'Com sempre, comencem pel més simple i el provem: aprovat o suspés.' },
          { codi: {
            titol: 'Qualificacio.java',
            etiqueta: 'PAS 2',
            text: `import java.util.Scanner;

public class Qualificacio {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Escriu la nota: ");
        double nota = teclat.nextDouble();

        if (nota < 5) {
            System.out.println("Insuficient");
        } else {
            System.out.println("Aprovat");
        }
    }
}`,
            entrada: '6.5\n',
            sortida: 'Escriu la nota: Aprovat',
            sortidaMostrada: `Escriu la nota: 6.5
Aprovat`
          } }
        ]
      },
      {
        titol: 'Afegim els trams intermedis',
        blocs: [
          { p: 'Ara encadenem els `else if`. **L\'orde és el que fa que funcione**: cada condició només pot ser vertadera si les anteriors són falses.' },
          { codi: {
            titol: 'Qualificacio.java',
            etiqueta: 'PAS 3',
            text: `import java.util.Scanner;

public class Qualificacio {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Escriu la nota: ");
        double nota = teclat.nextDouble();

        if (nota < 5) {
            System.out.println("Insuficient");
        } else if (nota < 6) {
            System.out.println("Suficient");
        } else if (nota < 7) {
            System.out.println("Bé");
        } else if (nota < 9) {
            System.out.println("Notable");
        } else {
            System.out.println("Excel·lent");
        }
    }
}`,
            entrada: '8.75\n',
            sortida: 'Escriu la nota: Notable',
            sortidaMostrada: `Escriu la nota: 8.75
Notable`
          } },
          { preguntaClasse: 'I si posàrem primer `nota < 9`? Què passaria amb una nota de 4.5?' }
        ]
      },
      {
        titol: 'Provem-ho amb casos límit',
        blocs: [
          { p: 'Els casos límit són els que estan just en la frontera: 4.99, 5.0, 5.99, 6.0, 8.99, 9.0. Sempre es proven: és on solen aparéixer els errors.' },
          { taula: {
            cap: ['Nota', 'Què ha d\'eixir', 'Per què'],
            files: [
              ['`4.99`', 'Insuficient', 'És més menuda que 5'],
              ['`5.0`', 'Suficient', 'No complix `< 5`, però sí `< 6`'],
              ['`8.99`', 'Notable', 'No complix `< 7`, però sí `< 9`'],
              ['`9.0`', 'Excel·lent', 'No complix cap condició → `else`']
            ]
          } },
          { nota: { tipus: 'tip', text: 'Regla d\'or: **prova sempre el valor just de la frontera**. Si el programa funciona amb 8.99 i amb 9.0, les fronteres estan bé.' } }
        ]
      },
      {
        titol: 'Trenquem-lo a propòsit',
        blocs: [
          { p: 'Provem tres coses i apuntem què passa:' },
          { llista: [
            'Una nota de **12** → diu Excel·lent, i està mal dit: hauríem d\'haver comprovat abans que la nota està entre 0 i 10.',
            'Una nota de **−3** → diu Insuficient, i tampoc no és correcte.',
            'Una **lletra** → `InputMismatchException`, com en el tema anterior.'
          ], numerada: true },
          { p: 'Comprovem-ho i decidim: afegiríem una comprovació al principi que diga «això no és una nota». Eixa idea — **comprovar les dades abans de treballar amb elles** — és una de les coses que distingix un programa amateur d\'un de bo. I ho farem més avant amb més ferramentes.' },
          { codi: {
            titol: 'Qualificacio.java',
            etiqueta: 'PAS 5 · MILLORA',
            text: `import java.util.Scanner;

public class Qualificacio {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Escriu la nota: ");
        double nota = teclat.nextDouble();

        if (nota < 0 || nota > 10) {
            System.out.println("Eixa nota no és possible: ha d'estar entre 0 i 10.");
        } else if (nota < 5) {
            System.out.println("Insuficient");
        } else if (nota < 6) {
            System.out.println("Suficient");
        } else if (nota < 7) {
            System.out.println("Bé");
        } else if (nota < 9) {
            System.out.println("Notable");
        } else {
            System.out.println("Excel·lent");
        }
    }
}`,
            entrada: '12\n',
            sortida: "Escriu la nota: Eixa nota no és possible: ha d'estar entre 0 i 10.",
            sortidaMostrada: `Escriu la nota: 12
Eixa nota no és possible: ha d'estar entre 0 i 10.`
          } }
        ]
      }
    ]
  },

  mini: {
    intro: 'Activitats molt curtes per agafar soltura amb les condicions.',
    exercicis: [
      {
        id: 'mini1', titol: 'Vertader o fals?', dificultat: 'facil', temps: '2 min',
        enunciat: 'Sense executar-lo, digues què mostrarà cada línia. Després comprova-ho.',
        codi: {
          titol: 'Pregunta.java',
          text: `int a = 7;
System.out.println(a > 5);
System.out.println(a == 7);
System.out.println(a != 7);`
        },
        solucio: {
          titol: 'Solucio.java',
          text: `int a = 7;
System.out.println(a > 5);    // true
System.out.println(a == 7);   // true
System.out.println(a != 7);   // false`,
          sortida: `true
true
false`,
          perque: 'Les comparacions donen sempre `true` o `false`. El primer: 7 és més gran que 5. El segon: 7 és igual a 7. El tercer: 7 no és diferent de 7, per tant és fals.'
        }
      },
      {
        id: 'mini2', titol: 'Pot conduir?', dificultat: 'facil', temps: '3 min',
        enunciat: 'Crea una variable amb una edat i mostra «Pot conduir» si és 18 o més, i «No pot conduir» si no.',
        solucio: {
          titol: 'Conduir.java',
          text: `public class Conduir {
    public static void main(String[] args) {
        int edat = 17;

        if (edat >= 18) {
            System.out.println("Pot conduir");
        } else {
            System.out.println("No pot conduir");
        }
    }
}`,
          sortida: 'No pot conduir',
          perque: 'La condició `edat >= 18` inclou el 18 exactament gràcies al signe `>=` (major **o igual**). Si haguerem posat `>`, una persona de 18 anys justos no podria conduir.'
        }
      },
      {
        id: 'mini3', titol: 'Parell o senar', dificultat: 'mitjana', temps: '3 min',
        enunciat: 'Utilitza el residu (`%`) i un `if` per dir si un número és parell o senar.',
        solucio: {
          titol: 'Parell.java',
          text: `public class Parell {
    public static void main(String[] args) {
        int numero = 7;

        if (numero % 2 == 0) {
            System.out.println("És parell");
        } else {
            System.out.println("És senar");
        }
    }
}`,
          sortida: 'És senar',
          perque: 'Si el residu de dividir per 2 és zero, el nombre és parell. És la primera cosa útil que fem amb l\'operador `%` del tema anterior.'
        }
      },
      {
        id: 'mini4', titol: 'Troba l\'error', dificultat: 'mitjana', temps: '3 min',
        enunciat: 'Este programa no compila. Copia\'l, llig el missatge i arregla\'l.',
        codi: {
          titol: 'Trencat.java',
          mal: true,
          text: `int nota = 6;
if (nota = 5) {
    System.out.println("Justet");
}`
        },
        pista: 'Mira els operadors de comparació. N\'hi ha un que és per assignar i un altre per comparar.',
        solucio: {
          titol: 'Arreglat.java',
          text: `int nota = 5;
if (nota == 5) {
    System.out.println("Justet");
}`,
          perque: 'Amb un sol `=` estem intentant **guardar** el 5 dins de `nota`, i el resultat d\'una assignació és un número, no un vertader/fals. El `if` espera un `boolean`: per això Java dona error `incompatible types`. Amb `==` sí que comparem.',
          sortida: 'Justet'
        }
      },
      {
        id: 'mini5', titol: 'Escriu la condició', dificultat: 'mitjana', temps: '3 min',
        enunciat: 'Volem comprovar si una edat està entre 13 i 19 anys (els dos inclosos). Escriu la condició correcta en Java.',
        solucio: {
          titol: 'Condicio.java',
          text: `int edat = 16;

if (edat >= 13 && edat <= 19) {
    System.out.println("És adolescent");
}`,
          sortida: 'És adolescent',
          perque: 'En Java no es pot escriure `13 <= edat <= 19`. Cal fer les dos comparacions i unir-les amb `&&`: que siga 13 o més **i** 19 o menys.'
        }
      },
      {
        id: 'mini6', titol: 'La contrasenya correcta', dificultat: 'mitjana', temps: '4 min',
        enunciat: 'Demana una paraula a l\'usuari i digues si coincidix amb la contrasenya «hola123».',
        exemple: { entrada: 'Escriu la contrasenya: hola123', sortida: 'Contrasenya correcta' },
        solucio: {
          titol: 'Clau.java',
          text: `import java.util.Scanner;

public class Clau {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Escriu la contrasenya: ");
        String clau = teclat.next();

        if (clau.equals("hola123")) {
            System.out.println("Contrasenya correcta");
        } else {
            System.out.println("Contrasenya incorrecta");
        }
    }
}`,
          entrada: 'hola123\n',
          sortida: 'Escriu la contrasenya: Contrasenya correcta',
          sortidaMostrada: `Escriu la contrasenya: hola123
Contrasenya correcta`,
          perque: 'Els textos sempre es comparen amb `equals`. Si hages escrit `clau == "hola123"`, el programa hauria dit «incorrecta» encara que l\'usuari l\'encertara.'
        }
      },
      {
        id: 'mini7', titol: 'El menú del joc', dificultat: 'mitjana', temps: '4 min',
        enunciat: 'Demana un número de l\'1 al 3 i mostra què s\'ha triat: 1 → «Nova partida», 2 → «Carregar», 3 → «Opcions». Si és una altra cosa, «Opció no vàlida».',
        exemple: { entrada: 'Tria una opció: 2', sortida: 'Carregar partida' },
        solucio: {
          titol: 'MenuJoc.java',
          text: `import java.util.Scanner;

public class MenuJoc {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Tria una opció: ");
        int opcio = teclat.nextInt();

        switch (opcio) {
            case 1:
                System.out.println("Nova partida");
                break;
            case 2:
                System.out.println("Carregar partida");
                break;
            case 3:
                System.out.println("Opcions");
                break;
            default:
                System.out.println("Opció no vàlida");
        }
    }
}`,
          entrada: '2\n',
          sortida: 'Tria una opció: Carregar partida',
          sortidaMostrada: `Tria una opció: 2
Carregar partida`,
          perque: 'Amb `switch` el codi queda més pla i més fàcil de llegir que amb tres `else if`. No t\'oblides dels `break`: si en falta un, s\'executen també els casos següents.'
        }
      }
    ]
  },

  principals: {
    intro: 'Quatre exercicis complets. Recorda: primer pensa quina condició ha de complir-se, després escriu el codi.',
    exercicis: [
      {
        id: 'ex1', titol: 'Aprovat o suspés', dificultat: 'facil', temps: '12 min',
        enunciat: 'Demana una nota (pot tindre decimals) i mostra «Aprovat» si és 5 o més i «Suspés» si no. Afig també quant punts falten per aprovar quan estiga suspés.',
        exemple: { entrada: 'Nota: 4.25', sortida: 'Suspés\nEt falten 0.75 punts per aprovar.' },
        solucio: {
          titol: 'Nota.java',
          text: `import java.util.Scanner;

public class Nota {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Nota: ");
        double nota = teclat.nextDouble();

        if (nota >= 5) {
            System.out.println("Aprovat");
        } else {
            System.out.println("Suspés");
            System.out.println("Et falten " + (5 - nota) + " punts per aprovar.");
        }
    }
}`,
          entrada: '4.25\n',
          sortida: `Nota: Suspés
Et falten 0.75 punts per aprovar.`,
          sortidaMostrada: `Nota: 4.25
Suspés
Et falten 0.75 punts per aprovar.`,
          perque: 'La resta `5 - nota` es fa només quan estem en el bloc de l\'`else`, és a dir, només quan realment ha suspés. Este és un bon exemple de com les decisions ens estalvien càlculs inútils.'
        },
        pista: 'La resta per saber què falta es fa dins del bloc de l\'`else`, no fora.'
      },
      {
        id: 'ex2', titol: 'El control d\'accés del videojoc', dificultat: 'mitjana', temps: '20 min',
        enunciat: 'Demana un nom d\'usuari i una contrasenya. L\'accés s\'ha de concedir només si l\'usuari és «admin» **i** la contrasenya és «java2026». Si l\'usuari és correcte però la contrasenya no, digues «Contrasenya incorrecta». Si l\'usuari ja està mal, digues «Usuari desconegut».',
        exemple: {
          entrada: "Usuari: admin\nContrasenya: 1234",
          sortida: "Contrasenya incorrecta"
        },
        solucio: {
          titol: 'Control.java',
          text: `import java.util.Scanner;

public class Control {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Usuari: ");
        String usuari = teclat.next();

        System.out.print("Contrasenya: ");
        String clau = teclat.next();

        if (!usuari.equals("admin")) {
            System.out.println("Usuari desconegut");
        } else if (clau.equals("java2026")) {
            System.out.println("Accés concedit. Endavant!");
        } else {
            System.out.println("Contrasenya incorrecta");
        }
    }
}`,
          entrada: 'admin\n1234\n',
          sortida: `Usuari: Contrasenya: Contrasenya incorrecta`,
          sortidaMostrada: `Usuari: admin
Contrasenya: 1234
Contrasenya incorrecta`,
          perque: 'Els dos textos es comparen amb `equals` i l\'operador `!` invertix el resultat de la comparació de l\'usuari. L\'orde de les comprovacions és lògic: primer mirem si l\'usuari existix, i només si existix passem a comprovar la contrasenya.'
        },
        pista: 'L\'operador `!` davant de `usuari.equals("admin")` significa «si NO és admin».'
      },
      {
        id: 'ex3', titol: 'El preu de l\'entrada del cinema', dificultat: 'mitjana', temps: '20 min',
        enunciat: 'Demana l\'edat i mostra el preu segons els quatre trams: menys de 6 anys, gratis; de 6 a 17 anys, 6 euros; de 18 a 64 anys, 9 euros; 65 o més, 5 euros. A més, quan el client siga menor d\'edat, mostra també un missatge que diga que pot demanar el descompte de família nombrosa.',
        exemple: { entrada: 'Edat: 16', sortida: 'Entrada: 6 euros\nPots demanar el descompte de família nombrosa.' },
        solucio: {
          titol: 'Cinema.java',
          text: `import java.util.Scanner;

public class Cinema {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Edat: ");
        int edat = teclat.nextInt();

        if (edat < 6) {
            System.out.println("Entrada gratuïta");
                } else if (edat < 18) {
            System.out.println("Entrada: 6 euros");
        } else if (edat < 65) {
            System.out.println("Entrada: 9 euros");
        } else {
            System.out.println("Entrada: 5 euros");
        }

        if (edat < 18) {
            System.out.println("Pots demanar el descompte de família nombrosa.");
        }
    }
}`,
          entrada: '16\n',
          sortida: `Edat: Entrada: 6 euros
Pots demanar el descompte de família nombrosa.`,
          sortidaMostrada: `Edat: 16
Entrada: 6 euros
Pots demanar el descompte de família nombrosa.`,
          perque: 'L\'escala de trams de preu va amb `else if` perquè **són exclusions**: només un dels quatre preus pot ser el bo. El descompte de família nombrosa, en canvi, és una condició **independent** del preu, i per això va en un `if` a banda i no dins de la cadena.'
        },
        pista: 'Escriu les condicions de menor a major i deixa l\'`else` per a l\'últim tram. El missatge del descompte és un `if` independent, fora de la cadena.' 
      },
      {
        id: 'ex4', titol: 'La màquina de begudes', dificultat: 'repte', temps: '25 min',
        enunciat: 'Fes el menú de la màquina de begudes amb `switch`: 1 → Aigua (1 euro), 2 → Suc (1.50 euros), 3 → Cafè (1.20 euros), 4 → Refresc (1.80 euros). Després demana els diners que introdueix l\'usuari i digues si en té prou i quants diners li falten o li sobren.',
        exemple: {
          entrada: 'Tria una beguda: 2\nDiners introduïts: 1.0',
          sortida: "Has triat Suc (1.5 euros)\nEt falten 0.5 euros"
        },
        solucio: {
          titol: 'Maquina.java',
          text: `import java.util.Scanner;

public class Maquina {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Tria una beguda: ");
        int opcio = teclat.nextInt();

        double preu;
        String nom;

        switch (opcio) {
            case 1:
                nom = "Aigua";
                preu = 1.00;
                break;
            case 2:
                nom = "Suc";
                preu = 1.50;
                break;
            case 3:
                nom = "Cafè";
                preu = 1.20;
                break;
            case 4:
                nom = "Refresc";
                preu = 1.80;
                break;
            default:
                nom = "";
                preu = 0;
                System.out.println("Eixa opció no existix.");
        }

        if (preu > 0) {
            System.out.println("Has triat " + nom + " (" + preu + " euros)");

            System.out.print("Diners introduïts: ");
            double diners = teclat.nextDouble();

            if (diners >= preu) {
                System.out.println("Gràcies! El teu canvi és " + (diners - preu) + " euros");
            } else {
                System.out.println("Et falten " + (preu - diners) + " euros");
            }
        }
    }
}`,
          entrada: '2\n1.0\n',
          sortida: `Tria una beguda: Has triat Suc (1.5 euros)
Diners introduïts: Et falten 0.5 euros`,
          sortidaMostrada: `Tria una beguda: 2
Has triat Suc (1.5 euros)
Diners introduïts: 1.0
Et falten 0.5 euros`,
          perque: 'El `switch` ens servix per triar el producte i guardar-ne el nom i el preu. Després, amb un `if` anidat, tornem a decidir segons els diners. Fixa\'t que llegim els diners **després** del menú: si l\'opció no existix, no té sentit demanar-los. Els nombres decimals s\'escriuen amb punt: 1.0.'
        },
        pista: 'Guarda el preu en una variable dins de cada `case` i, al final, fes les comprovacions dels diners fora del `switch`.'
      }
    ]
  },

  reptes: {
    reptes: [
      {
        titol: 'L\'any de traspàs',
        blocs: [
          { p: 'Un any és de traspàs (té 366 dies) si es complixen estes condicions: és divisible per 4, **excepte** si és divisible per 100; però si és divisible per 400, **sí** que és de traspàs.' },
          { p: 'Demana un any i digues si és de traspàs o no. El repte està a combinar bé els operadors `%`, `&&` i `||`.' }
        ],
        ampliacions: [
          'Comprovar-ho amb els anys 2000, 1900, 2024 i 2026.',
          'Dir també quants dies té el mes de febrer d\'eixe any.'
        ]
      },
      {
        titol: 'El joc de les tres preguntes',
        blocs: [
          { p: 'Fes un programa que faça tres preguntes a l\'usuari (les que vulgues) i que comprove les respostes. Al final ha de dir quantes n\'ha encertat de tres i un missatge diferent segons el resultat: 3 → «perfecte», 2 → «molt bé», 1 → «cal repassar», 0 → «tornem a començar».' },
          { p: 'Necessitaràs una variable per comptar els encerts i sumar-li 1 cada vegada que s\'encerta. I recorda que els textos es comparen amb `equals`.' }
        ],
        ampliacions: [
          'Que les respostes no distingisquen majúscules de minúscules (`equalsIgnoreCase`).',
          'Que al final es mostre també un percentatge d\'encerts (encerts / 3 × 100).'
        ]
      }
    ]
  },

  errors: {
    entradeta: 'Els errors habituals d\'este tema. Alguns no donen missatge d\'error: ixen malament i ja està. Eixos són els perillosos.',
    errors: [
      {
        titol: 'Confondre = amb ==',
        mal: { titol: 'Mal.java', text: `int nota = 6;\nif (nota = 5) {\n    System.out.println("Justet");\n}`, missatge: 'error: incompatible types: int cannot be converted to boolean\n        if (nota = 5) {' },
        bo: { titol: 'Be.java', text: `int nota = 6;\nif (nota == 5) {\n    System.out.println("Justet");\n}` },
        que: 'Hem escrit un sol igual dins de la condició.',
        perque: 'Un sol `=` **guarda** un valor i dona com a resultat un número; el `if` necessita un `boolean`. Dos iguals (`==`) **comparen** i donen `true` o `false`.',
        detectar: 'El missatge diu `int cannot be converted to boolean`, i assenyala la línia de la condició.',
        corregir: 'Posa els dos iguals: `nota == 5`. Consell per a la vida: **si el compilador es queixa d\'una comparació, mira els iguals**.'
      },
      {
        titol: 'Punt i coma darrere del if (no dona error!)',
        mal: { titol: 'Mal.java', text: `int edat = 12;\nif (edat >= 18);\n{\n    System.out.println("Pots conduir");\n}` },
        bo: { titol: 'Be.java', text: `int edat = 12;\nif (edat >= 18) {\n    System.out.println("Pots conduir");\n}` },
        que: 'El programa mostra «Pots conduir» a una persona de 12 anys, i no dona cap missatge d\'error.',
        perque: 'El `;` ha deixat el `if` sense cos: la condició es comprova i es descarta. Les claus que venen després són un bloc solt, que s\'executa sempre.',
        detectar: 'No hi ha error de compilació: s\'ha de detectar **provant el programa** amb un valor que NO hauria de passar. És l\'error més perillós de tots.',
        corregir: 'Lleva el `;` i queda\'t amb les claus: `if (condicio) { ... }`.'
      },
      {
        titol: 'Comparar textos amb ==',
        mal: { titol: 'Mal.java', text: `String clau = teclat.next();\nif (clau == "hola") {\n    System.out.println("Endavant");\n}` },
        bo: { titol: 'Be.java', text: `String clau = teclat.next();\nif (clau.equals("hola")) {\n    System.out.println("Endavant");\n}` },
        que: 'El programa diu que la contrasenya és incorrecta encara que l\'usuari l\'escriga bé.',
        perque: 'Amb els textos, `==` compara si són *el mateix objecte*, no si diuen el mateix. Un text que arriba pel teclat mai no és el mateix objecte que un text escrit dins del codi.',
        detectar: 'El programa compila i funciona, però les comparacions de text sempre donen fals. I no hi ha cap missatge d\'error.',
        corregir: 'Fes servir `equals`: `clau.equals("hola")`. Si no importen les majúscules: `clau.equalsIgnoreCase("hola")`.'
      },
      {
        titol: 'L\'orde dels else if',
        mal: { titol: 'Mal.java', text: `if (edat < 65) {\n    System.out.println("Entrada: 9 euros");\n} else if (edat < 6) {\n    System.out.println("Gratis");\n}` },
        bo: { titol: 'Be.java', text: `if (edat < 6) {\n    System.out.println("Gratis");\n} else if (edat < 65) {\n    System.out.println("Entrada: 9 euros");\n}` },
        que: 'Un xiquet de 3 anys ha de pagar 9 euros i no arriba mai al cas «gratis».',
        perque: 'Java mira els `else if` **en orde** i entra en el primer que es complica. Si la condició més àmplia va primera, es menja tots els casos.',
        detectar: 'Prova el programa amb els casos extrems. Si un cas «impossible» eix, l\'orde està mal posat.',
        corregir: 'Ordena les condicions de la més concreta a la més general (de menor a major, si són trams d\'edat o de punts).'
      },
      {
        titol: 'Condicions encadenades com en matemàtiques',
        mal: { titol: 'Mal.java', text: `if (13 <= edat <= 19) {`, missatge: 'error: bad operand types for binary operator \'<=\'\n        if (13 <= edat <= 19) {' },
        bo: { titol: 'Be.java', text: `if (edat >= 13 && edat <= 19) {` },
        que: 'Hem escrit la condició com la diríem en matemàtiques.',
        perque: 'En Java, `13 <= edat` ja dona un resultat (`true` o `false`), i no es pot comparar eixe resultat amb 19. Cal escriure les dos comparacions.',
        detectar: 'El missatge parla d\'operadors que no es poden usar junts.',
        corregir: 'Uneix les dos comparacions amb `&&`: `edat >= 13 && edat <= 19`.'
      },
      {
        titol: 'Oblidar les claus i pensar que afecten més línies',
        mal: { titol: 'Mal.java', text: `if (nota >= 5)\n    System.out.println("Aprovat");\n    System.out.println("Enhorabona!");` },
        bo: { titol: 'Be.java', text: `if (nota >= 5) {\n    System.out.println("Aprovat");\n    System.out.println("Enhorabona!");\n}` },
        que: 'El segon missatge s\'escriu sempre, haja aprovat o no.',
        perque: 'Sense claus, el `if` només controla **la primera línia** que té davall. La segona ja no depén de la condició.',
        detectar: 'Compila sense errors, però el missatge apareix en casos que no toquen. Es detecta provant.',
        corregir: 'Posa claus sempre, encara que dins només hi haja una línia. Estalvia este error i fa el codi més llegible.'
      }
    ]
  },

  resum: {
    entradeta: 'Les idees que has d\'endur-te d\'este tema.',
    idees: [
      'Les comparacions (`==`, `!=`, `<`, `>`, `<=`, `>=`) donen sempre **`true` o `false`**.',
      '`=` guarda un valor; `==` compara. Confondre\'ls és l\'error més habitual.',
      '`if` fa una cosa si es complix la condició; `else` fa l\'altra.',
      '`else if` encadenen casos i es miren **en orde**: del més concret al més general.',
      '`&&` cal que es complisquen les dos coses; `||` en basta una; `!` invertix.',
      'Els textos es comparen amb **`equals`**, mai amb `==`.',
      '`switch` va bé per a menús i opcions; no t\'oblides dels `break`.',
      'La pregunta clau sempre: **quina condició ha de complir-se perquè passe açò?**'
    ]
  },

  autoavaluacio: {
    entradeta: 'Nou preguntes. Pensa-les abans de mirar la solució.',
    preguntes: [
      {
        pregunta: 'Quina diferència hi ha entre `=` i `==`?',
        opcions: [
          'No hi ha cap diferència.',
          '`=` guarda un valor en una variable i `==` compara dos valors.',
          '`=` compara i `==` guarda.'
        ],
        resposta: 'b) `=` guarda i `==` compara.',
        perque: 'Un sol igual assigna (guarda); dos iguals comparen i donen `true` o `false`. Per això dins d\'un `if` sempre van dos iguals.'
      },
      {
        pregunta: 'Què mostrarà este programa?',
        codi: { titol: 'Pregunta.java', text: `int x = 10;\nif (x > 5) {\n    System.out.println("Gran");\n} else {\n    System.out.println("Petit");\n}` },
        resposta: '`Gran`',
        perque: 'La condició `x > 5` és vertadera perquè 10 és més gran que 5. Quan la condició es complix, s\'executa el bloc del `if` i mai el de l\'`else`.'
      },
      {
        pregunta: 'Amb què es comparen dos textos en Java?',
        opcions: ['`==`', '`equals()`', '`>`'],
        resposta: 'b) `equals()`',
        perque: 'Amb textos, `==` compara si són el mateix objecte, no si diuen el mateix. El mètode `equals()` compara el contingut.'
      },
      {
        pregunta: 'Escriu la condició per comprovar si una nota està aprovada (5 o més) i a més no arriba a 7.',
        resposta: '`nota >= 5 && nota < 7`',
        perque: 'Han de complir-se les dos coses alhora, per tant s\'unixen amb `&&`. Fixa\'t que el 7 queda fora (`<`) i el 5 entra (`>=`).'
      },
      {
        pregunta: 'Este programa hauria de dir «Pots passar» només a majors de 18 anys. Funciona?',
        codi: { titol: 'Pregunta.java', text: `int edat = 15;\nif (edat >= 18);\n{\n    System.out.println("Pots passar");\n}` },
        resposta: 'No: el punt i coma després del `if` fa que el missatge s\'escriga sempre.',
        perque: 'El punt i coma tanca el `if` sense cos. El bloc de les claus passa a ser codi solt. És perillós perquè **no dona cap error**: només es detecta provant el programa.'
      },
      {
        pregunta: 'Quina diferència hi ha entre `&&` i `||`?',
        resposta: '`&&` necessita que es complisquen les dos condicions; `||` en necessita només una.',
        perque: 'Es llig `&&` com «i» i `||` com «o». Exemple: per a entrar al cine amb descompte cal ser menor **i** vindre acompanyat; per a agafar el bus, tindre targeta **o** diners en efectiu.'
      },
      {
        pregunta: 'Què mostrarà este programa?',
        codi: { titol: 'Pregunta.java', text: `int opcio = 3;\nswitch (opcio) {\n    case 1:\n        System.out.println("U");\n    case 3:\n        System.out.println("Tres");\n        break;\n    default:\n        System.out.println("Altre");\n}` },
        resposta: '`Tres`',
        perque: 'La coincidència és el `case 3`, que té `break` i s\'acaba. Si al `case 3` li faltara el `break`, s\'executaria també el `default` i eixiria «Tres» i «Altre».'
      },
      {
        pregunta: 'Este codi compila? Per què?',
        codi: { titol: 'Pregunta.java', text: `int edat = 16;\nif (13 <= edat <= 19) {\n    System.out.println("Adolescent");\n}` },
        resposta: 'No compila: en Java no es poden encadenar comparacions així.',
        perque: '`13 <= edat` ja dona `true` o `false`, i no es pot comparar eixe resultat amb 19. Cal escriure `edat >= 13 && edat <= 19`.'
      },
      {
        pregunta: 'Volem un programa que diga si un any és de traspàs. Escriu la condició completa (divisible per 4, però no per 100, excepte si és divisible per 400).',
        resposta: '`(any % 4 == 0 && any % 100 != 0) || any % 400 == 0`',
        perque: 'Els parèntesis agrupen la primera part («divisible per 4 i no per 100») i després la segona excepció («o divisible per 400»). Sense els parèntesis, `&&` i `||` es barregen i el resultat no és el que volem. Comprovem-ho amb 2000 (sí), 1900 (no), 2024 (sí) i 2026 (no).'
      }
    ]
  },

  /* ------------------------------------------------------- DIAPOSITIVES */
  diapositives: {
    objectiu: 'Fer programes que prenguen decisions: comparar, combinar condicions i triar entre diversos camins.',
    index: [
      'Comparar valors',
      'El primer if',
      'if / else / else if',
      'Combinar condicions (&& || !)',
      'Comparar textos amb equals',
      'Menús amb switch',
      'Errors que no avisen',
      'Practiquem'
    ],
    blocs: [
      {
        tipus: 'concepte',
        titol: 'La pregunta clau',
        bullets: [
          '«Quina condició ha de complir-se perquè passe açò?»',
          'Si no sabem respondre-la, encara no hem pensat el problema',
          'Una comparació dona sempre true o false',
          'Amb eixe true o false el programa decideix'
        ],
        notes: 'Fer la pregunta en veu alta cada vegada que plantegem un cas nou.'
      },
      {
        tipus: 'comparacio',
        titol: 'Els operadors de comparació',
        esquerra: { titol: 'Igualtat', bullets: ['== és igual a', '!= és diferent de', 'Compte: = guarda, == compara'] },
        dreta: { titol: 'Ordre', bullets: ['> més gran que', '< més menut que', '>= i <= inclouen el valor'] }
      },
      {
        tipus: 'codi',
        titol: 'El primer if',
        codi: 'double nota = 7.5;\n\nif (nota >= 5) {\n    System.out.println("Estàs aprovat!");\n}',
        sortida: 'Estàs aprovat!',
        notes: 'Remarcar els parèntesis de la condició i les claus del cos. I que NO porta punt i coma darrere.'
      },
      {
        tipus: 'codi',
        titol: 'if i else',
        codi: 'if (nota >= 5) {\n    System.out.println("Aprovat");\n} else {\n    System.out.println("Suspés");\n}',
        sortida: 'Suspés',
        notes: 'Preguntar: què passa si nota val 5.0 exactament?'
      },
      {
        tipus: 'esquema',
        titol: 'Els trams del cinema',
        flux: ['Gratis: < 6', '6 €: 6-17', '9 €: 18-64', '5 €: 65+'],
        nota: 'S\'encadenen amb else if i es miren en orde, del més concret al més general.'
      },
      {
        tipus: 'codi',
        titol: 'Combinar condicions',
        codi: 'int edat = 16;\nboolean teCarnet = false;\n\nSystem.out.println(edat >= 18 && teCarnet);\nSystem.out.println(!teCarnet);\n\nboolean adolescent = edat >= 13 && edat <= 19;\nSystem.out.println(adolescent);',
        sortida: 'false\ntrue\ntrue',
        notes: 'Insistir: en Java no es pot escriure 13 <= edat <= 19.'
      },
      {
        tipus: 'codi',
        titol: 'Comparar textos: equals',
        codi: 'String clauEscrita = "1234";\nString clauGuardada = "1234";\n\nSystem.out.println(clauEscrita == clauGuardada);\nSystem.out.println(clauEscrita.equals(clauGuardada));',
        sortida: 'false\ntrue',
        notes: 'Impacte garantit. Repetir-ho: els textos es comparen amb equals, sempre.'
      },
      {
        tipus: 'codi',
        titol: 'Menús amb switch',
        codi: 'switch (opcio) {\n    case 1:\n        System.out.println("Nova partida");\n        break;\n    case 2:\n        System.out.println("Carregar partida");\n        break;\n    default:\n        System.out.println("Opció desconeguda");\n}',
        sortida: 'Carregar partida',
        notes: 'Provocar l\'error d\'oblidar un break perquè vegen què passa.'
      },
      {
        tipus: 'activitat',
        titol: 'Ara et toca a tu',
        enunciat: 'Fes un programa que demane una nota i diga la qualificació: Insuficient, Suficient, Bé, Notable o Excel·lent.',
        temps: '15 min',
        pistes: ['Les condicions van de menor a major', 'Prova els valors de la frontera: 4.99, 5.0, 9.0'],
        notes: 'Passar per les taules comprovant l\'orde dels else if.'
      },
      {
        tipus: 'pregunta',
        titol: 'Pensem un moment',
        pregunta: 'Per què hi ha errors que no donen cap missatge? Com els detectaríem?'
      }
    ],
    resum: [
      'Comparar amb == != < > <= >= dona true o false.',
      '= guarda i == compara: no els confongues!',
      'if / else decideixen entre dos camins.',
      'else if encadenen casos, i es miren en orde.',
      '&& calen les dos; || en basta una; ! invertix.',
      'Els textos es comparen amb equals.',
      'switch per a menús; recorda els break.',
      'Els errors que no avisen es troben provant el programa.'
    ],
    seguent: 'Tema 3 · Repetir: els bucles'
  }
};
