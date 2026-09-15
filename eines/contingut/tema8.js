/* ==========================================================================
   TEMA 8 · Programació en l'era de la IA  —  contingut de la pàgina
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   · Este tema NO ensenya sintaxi nova: ensenya a treballar amb assistents
     d'IA sense deixar de ser el programador que decidix i comprova.
   · sortida = eixida real (es comprova amb  node eines/prova-codi-java.mjs 8 )
   ========================================================================== */
globalThis.TEMA = {
  n: 8,
  titol: 'Programació en l\'era de la IA',
  subtitol: 'La IA escriu codi molt de pressa; el programador decidix, comprova i respon',
  durada: '3 hores de classe',

  hero: {
    etiqueta: 'Tema 8 · Sessió de 3 hores',
    entradeta: 'Hui els assistents d\'intel·ligència artificial escriuen codi en segons. Això no et lleva faena: te\'n dona una altra, i més important. El que et diferencia d\'algú que només copia és saber **què demanar, què comprovar i com arreglar-ho** quan falla.',
    meta: [
      '⏱ 3 hores',
      '🤝 Fase 3 · Treballar amb ferramentes',
      '🧩 Necessites: Temes 0 a 7',
      '❓ La pregunta clau: i si el codi que t\'han donat està mal?'
    ]
  },

  introduccio: {
    titol: 'Una situació per començar',
    emoji: '🤖',
    blocs: [
      { p: 'Última hora del treball de classe. Li demanes a un assistent d\'IA: *«fes-me un programa en Java que calcule la nota mitjana de tres notes i diga si aprova»*. En dos segons tens això:' },
      { codi: {
        titol: 'MitjanaIA.java',
        etiqueta: 'CODI GENERAT PER IA',
        text: `public class MitjanaIA {
    public static void main(String[] args) {
        int n1 = 6;
        int n2 = 7;
        int n3 = 6;

        int mitjana = (n1 + n2 + n3) / 3;
        System.out.println("Mitjana: " + mitjana);

        if (mitjana >= 5) {
            System.out.println("Aprovat");
        } else {
            System.out.println("Suspès");
        }
    }
}`,
        sortida: `Mitjana: 6
Aprovat`
      } },
      { p: 'El programa funciona i la nota pareix bona. Però prova de canviar les notes per decimals: `int n1 = 6.5;` **no compila** (un `int` no pot guardar decimals). I si les deixes en enters, fixa\'t en el detall: la mitjana de `6`, `7` i `6` dona **6** quan hauria de donar **6,33**.' },
      { p: 'Això és el més important d\'este tema: **la IA ha escrit un codi que compila, que s\'executa i que dona un resultat que pareix correcte**. I tot i així està malament per a la meitat dels casos.' },
      { p: 'La IA no és el problema: és una ferramenta boníssima. El problema és usar-la **sense comprovar-la**. Hui aprenem a treballar amb IA com ho fa un programador de veritat: tu pilotant, ella ajudant.' },
      { nota: { tipus: 'important', text: 'La regla del tema, d\'una vegada: **si no saps explicar el codi que t\'han donat, no el pots usar**. El codi que no entens no es pot arreglar quan falle, i algun dia fallarà.' } }
    ],
    plan: [
      ['30-45 min', 'Explicació i demos'],
      ['60-75 min', 'Programació guiada'],
      ['60-75 min', 'Exercicis'],
      ['15-30 min', 'Repàs, repte i autoavaluació']
    ],
    prerequisits: [
      'Tot el curs: variables, decisions, bucles, arrays, mètodes i objectes (Temes 1 a 6).',
      'Saber construir un programa per etapes (Tema 7).',
      'Saber executar un programa i llegir el missatge d\'error.'
    ]
  },

  objectius: {
    intro: 'En acabar esta sessió has de saber fer estes coses:',
    llista: [
      'Explicar què és un **assistent d\'IA per a codi** i què pot fer i què no.',
      'Escriure un **bon prompt**: problema, dades, restriccions i què vols que t\'explique.',
      '**Llegir i comprovar** codi que no has escrit tu, línia a línia i amb valors concrets.',
      'Detectar els **errors típics** del codi generat: divisió de enters, `null`, límits del bucle, mètodes que no existixen.',
      'Provar un programa amb **cas normal, cas límit i cas dolent** abans de donar-lo per acabat.',
      'Usar la IA **amb responsabilitat**: dades personals, honestedat acadèmica i codi que pugues explicar.'
    ]
  },

  teoria: {
    titol: 'Teoria, poc a poc',
    entradeta: 'Hui no hi ha sintaxi nova: hi ha manera de treballar. Una idea → un exemple.',
    blocs: [
      { h3: '1. Què és (i què no és) un assistent d\'IA de codi' },
      { p: 'Un **assistent d\'IA de codi** és un programa que ha llegit quantitats enormes de codi i text, i que **prediu** quina és la resposta més probable a allò que li demanes. Te\'l pots trobar integrat dins de l\'editor o en una pàgina web de conversa.' },
      { p: 'Quan li escrius *«escriu un bucle que sume un array»*, no ha entès res: ha calculat quina combinació de paraules ve normalment darrere d\'eixes. I com que ha vist moltíssim codi, quasi sempre encerta la forma. Però **no comprova res**: no sap si el teu array pot estar buit, ni si les dades són decimals.' },
      { graella: [
        { emoji: '✅', titol: 'Solia encertar', text: 'Estructures típiques (bucles, condicions), explicar un error, comentar codi, generar casos de prova.' },
        { emoji: '⚠️', titol: 'Hem de comprovar', text: 'Qualsevol cosa que depenga de les teues dades, de les regles del teu problema o del teu fitxer.' },
        { emoji: '❌', titol: 'No deu decidir', text: 'Què ha de fer el programa, què és correcte i què no, ni si una entrega està bé.' }
      ] },
      { nota: { tipus: 'info', text: 'Quan la IA inventa alguna cosa que no existix, es diu **al·lucinació**. En codi passa molt: et pot dir que existix un mètode `notes.mitjana()` o `text.reverse()` que **Java no té**. Si el provares, el programa ni tan sols compilaria.' } },

      { h3: '2. Els errors que comet més sovint' },
      { p: 'Estos són els errors que veuràs repetits en codi generat. No cal memoritzar-los: cal tindre\'ls a mà per a **buscar-los sempre**.' },
      { taula: {
        cap: ['Error típic', 'Què passa', 'Com el detectes'],
        files: [
          ['Divisió de enters', '`(a + b) / 2` amb `int` perd els decimals', 'Prova amb notes decimals: 6.5 i 7.0'],
          ['Mètode inventat', 'Et diu `array.suma()` i no existix', 'No compila: llegix el missatge d\'error'],
          ['Ignora el cas buit', 'Dividix per `valors.length` quan val 0', 'Prova amb un array sense elements'],
          ['Compta malament', 'Recorre fins a `<= length` i es passa', 'Prova amb 1 sol element i mira si esclata'],
          ['No comprova `null`', 'Toca una casella buida d\'un array d\'objectes', 'Prova amb un array a mig omplir'],
          ['Compara `String` amb `==`', 'Compara direccions, no contingut', 'Prova dos textos iguals escrits de distintes maneres']
        ]
      } },
      { nota: { tipus: 'avis', text: 'Este últim és el pitjor: el programa compila, s\'executa i **donant valors distints dona el resultat equivocat sense avisar**. Per això sempre es prova amb casos preparats, no només «mira, funciona».' } },

      { h3: '3. Com es demana bé: el prompt' },
      { p: 'Un **prompt** és el text que li escrius. Un prompt curt i vague dona codi genèric; un prompt amb context dona codi que pots usar. Compara:' },
      { codi: {
        titol: 'Prompts.txt',
        etiqueta: 'DOS PROMPTS, DOS RESULTATS',
        noExecuta: true,
        text: `✗ FLUIX
"Fes-me un programa en Java de notes."

(Quines notes? Quantes? Què ha de calcular? Amb quines dades?
 La resposta serà un programa genèric que no és el teu.)

✓ COMPLET
"Escriu un mètode en Java que reba un array de notes decimals (double[])
 i torne la mitjana. Vull que:
  - funcione també amb un array buit (torna 0),
  - use un bucle for,
  - no imprimisca res per pantalla.
 Després explica'm línia a línia què fa i digues-me
 amb quines dades hauria de provar-lo."`
      } },
      { p: 'Tot prompt que val la pena té **quatre parts**: què hi ha (context i dades), què ha de fer (les regles del teu problema), què no pot fer (restriccions) i què vols que t\'explique.' },
      { nota: { tipus: 'tip', text: 'Si no saps explicar què ha de fer el programa, la IA tampoc no ho sabrà. **El prompt és el pla del Tema 7 escrit en valencià**.' } },

      { h3: '4. Com es lligen (i es comproven) codi aliè' },
      { p: 'Quan reps codi que no has escrit, no el llisges «per damunt»: el **traces**. Es tracta d\'agafar paper, triar valors concrets i anar apuntant què val cada variable en cada volta del bucle.' },
      { codi: {
        titol: 'Traça.java',
        etiqueta: 'COM ES FA UNA TRAÇA',
        noExecuta: true,
        text: `Codi (generat):              Traça amb el valor 9:

int doble(int n) {           doble(9):
    return n * 2;                 → torna 18
}

String etiqueta(int n) {     etiqueta(9):
    if (n >= 5) {                 → 9 >= 5 és cert
        return "Aprovat";         → torna "Aprovat"
    }
    return "Suspès";
}`
      } },
      { p: 'I sempre estes **tres proves**, que són el mínim professional:' },
      { graella: [
        { emoji: '1️⃣', titol: 'Cas normal', text: 'Dades típiques: les notes de la classe, la llista del mòbil amb 10 cançons.' },
        { emoji: '2️⃣', titol: 'Cas límit', text: 'Zero elements, un sol element, el valor més gran o més xicotet possible (0, negatiu, llista buida).' },
        { emoji: '3️⃣', titol: 'Cas dolent', text: 'L\'usuari escriu text on esperaves un número, o deixa una casella buida.' }
      ], columnes: 3 },
      { nota: { tipus: 'exit', text: 'Un programa que passa les **tres proves** val més que un programa que «al professor li va funcionar una vegada». Les proves són l\'argument que et protegix.' } },

      { h3: '5. Com ser el pilot (i no el copilot)' },
      { p: 'El flux de treball que et recomanem és este, i sempre amb tu al centre:' },
      { graella: [
        { emoji: '🧠', titol: '1. Pensa el pla', text: 'Què ha de fer, quines parts tindrà, quines dades. Tu, no la IA.' },
        { emoji: '✍️', titol: '2. Escriu-ho tu', text: 'Intenta-ho primer. Encara que no acabe d\'eixir, ja saps què et falta.' },
        { emoji: '🔄', titol: '3. Passa-ho a la IA', text: 'Problema, restriccions i què vols que t\'explique. Un fragment cada vegada.' },
        { emoji: '🧪', titol: '4. Prova-ho tu', text: 'Casos normals, límits i dades dolentes. Tu decidixes si val.' },
        { emoji: '🔧', titol: '5. Arregla i entén', text: 'No pegues codi que no entens: pregunta «per què?» fins que ho sàpigues explicar.' },
        { emoji: '🧼', titol: '6. Fes-ho teu', text: 'Noms i missatges del teu estil, comentaris amb les teues paraules.' }
      ], columnes: 3 },
      { preguntaClasse: 'Si la IA t\'ha escrit el 80 % del codi però tu has decidit el pla, l\'has provat i l\'has arreglat… de qui és el programa? Qui el defensa si no funciona?' },

      { h3: '6. Responsabilitat: privacitat, honestedat i licències' },
      { p: 'Treballar amb IA té límits que no són tècnics sinó de responsabilitat. Estes tres preguntes resolguen quasi tot:' },
      { llista: [
        '**Puc enviar esta informació?** Dades personals de companys, contrasenyes, textos interns del centre o codi privat: no. El que escrius en un xat pot quedar en servidors aliens.',
        '**Puc entregar-ho així?** Si el treball demana que el faces tu, entregar codi d\'un xat és com copiar d\'un company. Si l\'has usat, **digues-ho** i explica què vas demanar i què vas comprovar.',
        '**Puc usar este codi lliurement?** El codi generat pot assemblar-se a codi aliè amb llicència. Per a treball de classe sol ser acceptable amb la cita; per a un producte, no ho doneu mai per suposat.'
      ] },
      { nota: { tipus: 'important', text: 'I una altra que és tècnica: **no instal·les llibreries ni executes orde que no entens** només perquè t\'ho haja dit una IA. Si una ferramenta no l\'autentiques, no l\'executes.' } },

      { h3: '7. Quan NO usar la IA si estàs aprenent' },
      { p: 'Ara mateix estàs aprenent a programar. Este és el criteri perquè la ferramenta t\'ajude en compte de deixar-te arrere:' },
      { taula: {
        cap: ['❌ Et faça malbé', '✅ Et faça millor'],
        files: [
          ['Demanar la solució completa abans d\'intentar-ho', 'Demanar que t\'explique un error que ja t\'has mirat'],
          ['Pegar codi sense llegir-lo', 'Demanar casos de prova, i executar-los tu'],
          ['Demanar «arregla-m\'ho» i no mirar què ha canviat', 'Demanar dues maneres de fer el mateix, i triar-ne una']
        ]
      } },
      { nota: { tipus: 'info', text: 'Regla pràctica per a classe: **primer 10 minuts tu sol**. Després, si continues encallat, pots preguntar. Eixos 10 minuts són els que fan que aprengues a programar i no a demanar.' } }
    ]
  },

  exemples: {
    titol: 'Exemples explicats pas a pas',
    entradeta: 'Tres casos reals de codi generat amb IA. En tots el mateix procediment: llija, executar, traçar, provar i arreglar.',
    blocs: [
      { h3: 'Exemple 1 · La mitjana que ment' },
      { p: '**El prompt que s\'ha escrit:** *«Fes un mètode en Java que calcule la mitjana de tres notes amb decimals i diga si aprova.»*' },
      { codi: {
        titol: 'Mitjana1.java',
        etiqueta: 'COD I GENERAT (AMB ERROR)',
        text: `public class Mitjana1 {

    public static void main(String[] args) {
        double n1 = 6.5;
        double n2 = 7.0;
        double n3 = 6.0;

        int mitjana = (n1 + n2 + n3) / 3;
        System.out.println("Mitjana: " + mitjana);
        System.out.println(mitjana >= 5 ? "Aprovat" : "Suspès");
    }
}`,
        mal: true,
        missatge: 'Mitjana1.java:7: error: incompatible types: possible lossy conversion from double to int'
      } },
      { p: '**Primera passa, sempre: compilar.** El programa ni tan sols arranca: el resultat de sumar decimals és `double` i no es pot desar en un `int`. La IA ha seguit la idea «la nota és un número» però no ha mirat que les dades són decimals.' },
      { p: '**Arreglat:** el tipus de `mitjana` ha de ser `double`, i la divisió ha de ser entre decimals. Ací hi ha el detall que enganya: `(6.5 + 7.0 + 6.0) / 3` funciona, però si algú escriu `/ 3.0` tampoc passa res… i en canvi `(n1 + n2 + n3) / (double) 3` deixa claríssim el que vols.' },
      { codi: {
        titol: 'Mitjana2.java',
        etiqueta: 'ARREGLAT I PROVAT',
        text: `public class Mitjana2 {

    public static double mitjana(double a, double b, double c) {
        return (a + b + c) / 3.0;
    }

    public static void main(String[] args) {
        double m = mitjana(6.5, 7.0, 6.0);
        System.out.println("Mitjana: " + m);
        System.out.println(m >= 5 ? "Aprovat" : "Suspès");

        // proves ràpides de límits
        System.out.println(mitjana(0, 0, 0));      // tot zeros
        System.out.println(mitjana(5, 5, 5));      // just aprovat
    }
}`,
        sortida: `Mitjana: 6.5
Aprovat
0.0
5.0`
      } },
      { p: '**Què hem après:** el tipus de les dades és el primer que s\'ha de comprovar en codi generat. La IA sovint escriu el programa d\'un cas ideal i oblida el tipus real de les teues dades.' },
      { nota: { tipus: 'tip', text: 'Truc per a la mitjana: si els enters els has de convertir a decimals, multiplica la suma per `1.0` o dividix per `3.0`. Escriure el decimal et fa recordar que el resultat és decimal.' } },

      { h3: 'Exemple 2 · El programa que esclata amb una casella buida' },
      { p: '**El prompt:** *«Fes un programa que guarde 5 cançons en un array i mostre les que duren més de 200 segons.»*' },
      { codi: {
        titol: 'Cançons.java',
        etiqueta: 'COD I GENERAT (FUNCIONA SI ESTÀ PLE)',
        text: `public class Cancons {

    public static void main(String[] args) {
        String[] titols = {"Alba", "Nit", "Mar", null, null};
        int[] durades = {210, 180, 240, 0, 0};

        for (int i = 0; i < titols.length; i++) {
            if (durades[i] > 200) {
                System.out.println(titols[i] + " (" + durades[i] + " s)");
            }
        }
    }
}`,
        sortida: `Alba (210 s)
Mar (240 s)`
      } },
      { p: 'Fixa\'t: **funciona!** Mostra les cançons llargues i no dona cap error. El problema apareix quan canviem les dades per un cas real: si la casella 4 tinguera duració 300 i el títol encara no estiguera posat, veuríem `null (300 s)`. I si en compte de `null` hi haguera un índex… pitjor.' },
      { p: 'A més, el codi **no està preparat per a un array buit ni per a una llista variable**: les dades estan escrites a dins del `main`, no arriben per paràmetre. El programa de la IA és una foto fixa, no una ferramenta.' },
      { codi: {
        titol: 'CanconsBo.java',
        etiqueta: 'ARREGLAT AMB MÈTODES I PROVES',
        text: `public class CanconsBo {

    public static void mostrarLlargues(String[] titols, int[] durades, int minim) {
        if (titols.length != durades.length) {
            System.out.println("Dades mal formades: falten durades.");
            return;
        }
        for (int i = 0; i < titols.length; i++) {
            if (titols[i] != null && durades[i] > minim) {
                System.out.println(titols[i] + " (" + durades[i] + " s)");
            }
        }
    }

    public static void main(String[] args) {
        String[] titols = {"Alba", "Nit", "Mar", null, "Sol"};
        int[] durades = {210, 180, 240, 0, 300};

        mostrarLlargues(titols, durades, 200);

        // cas límit: cap cançó
        mostrarLlargues(new String[0], new int[0], 200);
        System.out.println("Fi del programa.");
    }
}`,
        sortida: `Alba (210 s)
Mar (240 s)
Sol (300 s)
Fi del programa.`
      } },
      { p: '**Què hem après:** «funciona» només vol dir «funciona amb les dades que li he posat». Un programa professional comprova les dades que rep i té en compte les caselles buides.' },

      { h3: 'Exemple 3 · El bucle que no acaba mai' },
      { p: '**El prompt:** *«Fes un bucle en Java que vaja demanant notes fins que l\'usuari escriga -1.»*' },
      { codi: {
        titol: 'BucleInfinite.java',
        etiqueta: 'COD I GENERAT (ESBALLA)',
        text: `public static void main(String[] args) {
    Scanner teclat = new Scanner(System.in);
    double suma = 0;
    int comptador = 0;

    System.out.print("Nota (-1 per acabar): ");
    double nota = teclat.nextDouble();

    while (nota != -1) {
        suma = suma + nota;
        comptador++;
    }

    System.out.println("Mitjana: " + (suma / comptador));
}`,
        mal: true,
        missatge: 'El programa es queda dins del bucle per sempre. Cal aturar-lo amb el botó roig de l\'editor.'
      } },
      { p: '**Com es detecta sense executar-lo?** Traçant: si `nota` val 6.5 la primera volta, el bucle fa `suma = 6.5` i torna a comprovar. Com que **`nota` no canvia mai dins del bucle**, la condició sempre és certa. El codi generat ha oblidat el detall que fa funcionar el patró: tornar a demanar la dada.' },
      { codi: {
        titol: 'BucleBo.java',
        etiqueta: 'ARREGLAT I PROVAT',
        text: `import java.util.Scanner;

public class BucleBo {

    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        double suma = 0;
        int comptador = 0;

        System.out.print("Nota (-1 per acabar): ");
        double nota = teclat.nextDouble();

        while (nota != -1) {
            suma = suma + nota;
            comptador++;

            System.out.print("Nota (-1 per acabar): ");
            nota = teclat.nextDouble();
        }

        if (comptador == 0) {
            System.out.println("No has posat cap nota.");
        } else {
            System.out.println("Mitjana: " + (suma / comptador));
        }
    }
}`,
        entrada: `6.5
7.0
-1`,
        sortida: `Mitjana: 6.75`
      } },
      { p: '**Què hem après:** en programació, un bucle necessita que **alguna cosa canvie dins** perquè puga acabar. Quan la IA et done un bucle, primera pregunta: *què canvia ací?* I segona: *i si no hi ha cap dada?*' },
      { nota: { tipus: 'important', text: 'Este és l\'error que més temps fa perdre a classe, perquè el programa no dona cap missatge: simplement es queda pensant. Si et passa, **mira la condició i mira si la seua variable canvia dins del bucle**.' } }
    ]
  },

  guiada: {
    titol: 'Programació guiada: el jutge de la IA',
    entradeta: 'Ens han regalat un mètode «generat per IA» i volem saber si de veritat funciona. Construirem un **programa de proves**: un joc de dades amb el resultat esperat i un avís quan el resultat real no coincidix. Cada pas s\'executa abans de passar al següent.',
    passos: [
      {
        titol: 'Pas 1 · El codi que hem de jutjar',
        blocs: [
          { p: 'Este mètode ens l\'ha donat un assistent. L\'hem d\'avaluar **sense tocar-lo**: si el canviem abans de provar-lo, ja no sabrem si era rovellat o si l\'hem trencat nosaltres.' },
          { codi: {
            titol: 'Estadistica.java',
            etiqueta: 'COD I A JUTJAR',
            text: `public class Estadistica {

    public static double mitjana(int[] valors) {
        int suma = 0;
        for (int i = 0; i < valors.length; i++) {
            suma = suma + valors[i];
        }
        return suma / valors.length;
    }
}`,
            noExecuta: true
          } },
          { preguntaClasse: 'Sense executar-lo: què creus que tornarà `mitjana({6, 7, 6})`? I `mitjana({})`? Apunta la resposta.' },
          { nota: { tipus: 'tip', text: 'Fixar-nos en el tipus de retorn (`double`) i en el tipus de dins (`int suma`, `int[] valors`) ja ens dona la pista del que passarà.' } }
        ]
      },
      {
        titol: 'Pas 2 · El pla del programa de proves',
        blocs: [
          { p: 'Un **programa de proves** no comprova «si funciona»: comprova **cada cas** per separat i ens diu una cosa per cas. El nostre pla:' },
          { codi: {
            titol: 'PlaProves.txt',
            etiqueta: 'EL PLA',
            noExecuta: true,
            text: `1. Un mètode comprovar(nom, obtingut, esperat) → mostra ✔ o ✗
2. Prova 1: cas normal        mitjana({6, 7, 6})        esperat 6.33
3. Prova 2: un sol element    mitjana({8})              esperat 8.0
4. Prova 3: cas límit         mitjana({})               esperat 0.0
5. Un resum final amb quants casos han passat
6. (Després del veredicte) arreglar el mètode i tornar a passar les proves`
          } },
          { p: 'Este patró (dades → resultat esperat → comparar) és el que fan les ferramentes professionals de proves. Ara el fem a mà, amb el que ja sabem, perquè **entenguem què és el que estem comprovant**.' },
          { nota: { tipus: 'info', text: 'Per comparar decimals cal una mica de marge: `6.333333` i `6.33` no són el mateix número exacte. Ho resoldrem amb una ajuda que no necessites entendre encara: si la diferència és menuda, els donarem per iguals. Ja arribarà el moment d\'entendre este detall; de moment, funciona igual.' } }
        ]
      },
      {
        titol: 'Pas 3 · L\'esquelet de les proves',
        blocs: [
          { p: 'Escrivim el mètode de comprovació i el `main` amb les crides, però **encara sense el mètode jutjat**. Així veiem l\'estructura i comprovem que tot compila.' },
          { codi: {
            titol: 'Jutge.java',
            etiqueta: 'PAS 3 · ESQUELET',
            text: `public class Jutge {

    static int passades = 0;
    static int fallades = 0;

    public static void comprovar(String nom, double obtingut, double esperat) {
        if (Math.abs(obtingut - esperat) < 0.01) {
            passades++;
            System.out.println("✔ " + nom + " -> " + obtingut);
        } else {
            fallades++;
            System.out.println("✗ " + nom + " -> esperàvem " + esperat + " i ha donat " + obtingut);
        }
    }

    public static void main(String[] args) {
        System.out.println("Proves de mitjana()");
        // ací aniran les crides (pas 5)
        System.out.println("Passades: " + passades + "  Fallades: " + fallades);
    }
}`,
            sortida: `Proves de mitjana()
Passades: 0  Fallades: 0`
          } },
          { nota: { tipus: 'tip', text: 'Fixat que `comprovar` no decidix res «a ull»: o el marge és menut o no ho és. Les proves han de ser clares i sempre les mateixes, com una balança.' } }
        ]
      },
      {
        titol: 'Pas 4 · Provem el mètode amb casos normals',
        blocs: [
          { p: 'Ara sí: afegim el mètode `mitjana` tal com ens l\'han donat, sense tocar-li ni una lletra, i escrivim la primera prova.' },
          { codi: {
            titol: 'Jutge.java',
            etiqueta: 'PAS 4 · PRIMERA PROVA',
            text: `    public static double mitjana(int[] valors) {
        int suma = 0;
        for (int i = 0; i < valors.length; i++) {
            suma = suma + valors[i];
        }
        return suma / valors.length;
    }

    public static void main(String[] args) {
        int[] notes = {6, 7, 6};                          // cas normal
        comprovar("mitjana de 6, 7 i 6", mitjana(notes), 6.33);

        System.out.println("Passades: " + passades + "  Fallades: " + fallades);
    }`,
            sortida: `✗ mitjana de 6, 7 i 6 -> esperàvem 6.33 i ha donat 6.0
Passades: 0  Fallades: 1`
          } },
          { p: '**Primera troballa.** El programa de proves ha fallat i ens ho ha dit amb el número exacte. La IA no ens hauria avisat d\'això: el seu codi compila i dona un número. Ara sabem **on** buscar: `suma` i `valors.length` són `int`, així que la divisió es fa entre enters i es perd la part decimal.' },
          { preguntaClasse: 'Quin és el mínim canvi possible per arreglar-ho? Es pot fer canviant una sola paraula?' }
        ]
      },
      {
        titol: 'Pas 5 · Arreglem i tornem a provar (i afegim els límits)',
        blocs: [
          { p: 'Canviem el tipus de la suma a `double` — una sola paraula — i aprofitem per afegir els casos límit. **Un canvi i una execució**, com al Tema 7.' },
          { codi: {
            titol: 'Jutge.java',
            etiqueta: 'PAS 5 · ARREGLAT + CASOS LÍMIT',
            text: `    public static double mitjana(int[] valors) {
        double suma = 0;                                    // ← només este canvi
        for (int i = 0; i < valors.length; i++) {
            suma = suma + valors[i];
        }
        return suma / valors.length;
    }

    public static void main(String[] args) {
        comprovar("mitjana de 6, 7 i 6",   mitjana(new int[]{6, 7, 6}),      6.33);
        comprovar("mitjana d'un sol valor", mitjana(new int[]{8}),          8.0);
        comprovar("mitjana amb un negatiu", mitjana(new int[]{-4, 4}),      0.0);

        System.out.println("Passades: " + passades + "  Fallades: " + fallades);
    }`,
            sortida: `✔ mitjana de 6, 7 i 6 -> 6.333333333333333
✔ mitjana d'un sol valor -> 8.0
✔ mitjana amb un negatiu -> 0.0
Passades: 3  Fallades: 0`
          } },
          { p: 'Tres de tres. Però encara falta el cas que ens va ensenyar l\'Exemple 2: **l\'array buit**.' },
          { codi: {
            titol: 'Jutge.java',
            etiqueta: 'PAS 5b · EL CAS LÍMIT QUE FALTAVA',
            text: `    public static void main(String[] args) {
        int[] buit = {};
        comprovar("mitjana sense dades", mitjana(buit), 0.0);

        System.out.println("Passades: " + passades + "  Fallades: " + fallades);
    }`,
            mal: true,
            missatge: 'Exception in thread "main" java.lang.ArithmeticException: / by zero'
          } },
          { p: '`valors.length` val 0 i el programa intenta dividir per zero. **Els casos límit no són teories: són el que passa un dia normal a classe, quan ningú encara ha posat notes.**' },
          { codi: {
            titol: 'Jutge.java',
            etiqueta: 'PAS 5c · DECISIÓ DEL PROGRAMADOR',
            text: `    public static double mitjana(int[] valors) {
        if (valors == null || valors.length == 0) {
            return 0;                 // sense dades no hi ha mitjana: decidim que val 0
        }
        double suma = 0;
        for (int i = 0; i < valors.length; i++) {
            suma = suma + valors[i];
        }
        return suma / valors.length;
    }`,
            noExecuta: true
          } },
          { nota: { tipus: 'important', text: 'Fixat en el detall: la IA no haurà decidit mai «què fem si no hi ha dades». **Eixa decisió és del programador**: tornar 0, tornar -1 o mostrar un avís. La ferramenta no coneix les regles del teu problema.' } }
        ]
      },
      {
        titol: 'Pas 6 · Demanar a la IA com un professional',
        blocs: [
          { p: 'Ara que hem trobat l\'error nosaltres, sí que té sentit usar l\'assistent. Fixa\'t en la diferència entre estos dos prompts:' },
          { codi: {
            titol: 'Prompts2.txt',
            etiqueta: 'PREGUNTAR BÉ',
            noExecuta: true,
            text: `✗ "Arregla'm això."

✓ "Tinc este mètode en Java:
   double mitjana(int[] valors) → retorna suma / valors.length
   amb double suma = 0.
   M'ha passat una ArithmeticException: / by zero quan l'array estava buit.
   Ja ho he arreglat tornant 0 si no hi ha dades.
   Explica'm: (1) per què passava, (2) quines altres decisions
   podria prendre en eixe cas i quines conseqüències tindria cada una.
   No em dones codi nou."
   `
          } },
          { p: 'Amb eixe prompt no estàs demanant que et faça la faena: estàs demanant **que t\'explique una decisió que ja has pres**. Eixes converses són les que et fan millor programador, perquè t\'obliguen a formular bé el problema.' },
          { preguntaClasse: 'Quin prompt li faries perquè t\'ajudara a trobar **nous casos límit** que no has pensat? Què hauries de comprovar després de llegir la seua resposta?' },
          { nota: { tipus: 'exit', text: 'Regla de la sessió: **la IA proposa, les proves decidixen**. Si el resultat no passa les proves, la resposta no val, per molt bé que estiga escrita.' } }
        ]
      }
    ]
  },

  mini: {
    intro: 'Activitats curtes per agafar el costum de dubtar del codi. Dos o tres minuts cada una.',
    exercicis: [
      {
        id: 'mini8-1', titol: 'El prompt fluix', dificultat: 'facil', temps: '3 min',
        enunciat: '**Sense escriure codi:** un company ha escrit este prompt: *«fes-me un programa de notes en Java»*. Escriu-ne la versió completa amb les quatre parts (context i dades, què ha de fer, què no pot fer, què vols que t\'explique).',
        solucio: {
          titol: 'Prompt.txt',
          noExecuta: true,
          text: `Context: sóc alumne de SMX i estic fent un programa en Java amb arrays.
Dades: un array de double amb les notes de 6 alumnes.

Què ha de fer: un mètode que torne la mitjana i un altre que torne
quants han aprovat (nota >= 5).

Restriccions: res de codi nou de llibreries; només el que s'ensenya
en un curs inicial (bucles, condicions, arrays); el mètode no ha
d'imprimir res per pantalla.

Vull saber: per què has escrit cada línia i amb quines dades hauria
de provar-ho perquè fallara si està malament.`,
          perque: 'Les quatre parts són les que convertixen una petició vaga en una petició útil: sense context i sense restriccions, la resposta sempre serà genèrica.'
        },
        pista: 'Pensa primer: què necessita la IA per saber que estàs treballant amb un curs inicial de Java?'
      },
      {
        id: 'mini8-2', titol: 'Caça l\'error del primer colp', dificultat: 'facil', temps: '3 min',
        enunciat: 'Este codi l\'ha generat una IA. **Quin error té** i amb quines dades es veu?',
        codi: {
          titol: 'Preu.java',
          text: `public class Preu {
    public static void main(String[] args) {
        int preu = 1999;   // 19,99 € en cèntims
        int quantitat = 7;
        System.out.println("Total: " + preu * quantitat / 100 + " €");
    }
}`
        },
        exemple: { sortida: 'Total: 139 €' },
        solucio: {
          titol: 'Preu.java',
          text: `// El resultat correcte és 139,93 €, però els càlculs amb int
// perden els decimals:
//   preu * quantitat = 1999 * 7 = 13993 (cèntims)
//   13993 / 100 = 139   ← es perd el ,93

public class Preu {
    public static void main(String[] args) {
        int preuCentims = 1999;
        int quantitat = 7;

        double euros = preuCentims * quantitat / 100.0;
        System.out.println("Total: " + euros + " €");
    }
}`,
          sortida: 'Total: 139.93 €',
          perque: 'És el mateix error de la divisió de enters de tot el tema: es detecta provant amb un cas on la divisió no és exacta. I sempre, sempre, amb un cas on no siga exacta.'
        },
        pista: 'Fes el càlcul a mà amb paper: quants cèntims són 7 vegades 19,99 €?'
      },
      {
        id: 'mini8-3', titol: 'Mètode inventat', dificultat: 'facil', temps: '2 min',
        enunciat: 'La IA t\'ha dit: *«usa `text.reverse()` per a girar el text»*. **Per què no funciona en Java** i què faries tu per a girar un `String`?',
        solucio: {
          titol: 'Girar.java',
          text: `public class Girar {

    public static String girar(String text) {
        String resultat = "";
        for (int i = text.length() - 1; i >= 0; i--) {
            resultat = resultat + text.charAt(i);
        }
        return resultat;
    }

    public static void main(String[] args) {
        System.out.println(girar("hola"));
    }
}`,
          sortida: 'aloh',
          perque: 'En Java, `String` no té cap mètode `reverse()`: això és una al·lucinació de la IA (existix en altres llenguatges). Es detecta compilant: el missatge diu «cannot find symbol». El remei sempre és el mateix: fer-ho amb el que sí sabem (un bucle i `charAt`).'
        },
        pista: 'Compila-ho encara que no t\'ho cregues: l\'error de «cannot find symbol» és la prova.'
      },
      {
        id: 'mini8-4', titol: 'La traça', dificultat: 'mitjana', temps: '4 min',
        enunciat: 'Fes la **traça** (paper i llapis) d\'este codi generat i digues què mostra per pantalla. Després canvia l\'array per `{1, 2}` i torna a fer-la.',
        codi: {
          titol: 'Comptador.java',
          text: `public class Comptador {
    public static void main(String[] args) {
        int[] valors = {3, 1, 4};
        int comptador = 1;

        for (int i = 0; i <= valors.length; i++) {
            comptador = comptador * 2;
        }
        System.out.println("Comptador: " + comptador);
    }
}`
        },
        exemple: { entrada: 'valors = {3, 1, 4}', sortida: 'Comptador: 16' },
        solucio: {
          titol: 'Comptador.java',
          text: `// Amb {3, 1, 4} → length = 3 → el bucle fa 4 voltes (i = 0, 1, 2, 3):
//   1 → 2 → 4 → 8 → 16      → mostra "Comptador: 16"
// Amb {1, 2} → length = 2 → 3 voltes: 1 → 2 → 4 → 8  → mostra 8
//
// El codi NO esclata perquè no usa valors[i], però compta una volta
// de més: el senyal és el <= en compte de <. Amb un array buit
// faria una volta igualment.

public class ComptadorBo {
    public static void main(String[] args) {
        int[] valors = {3, 1, 4};
        int comptador = 1;

        for (int i = 0; i < valors.length; i++) {
            comptador = comptador * 2;
        }
        System.out.println("Comptador: " + comptador);   // 8
    }
}`,
          sortida: 'Comptador: 8',
          perque: 'El límit del bucle és un dels errors més comuns del codi generat. Amb `<=` es fa una volta de més: es detecta provant amb arrays de 0, 1 i 2 elements.'
        },
        pista: 'Compta les voltes a mà i no et refies de la intuïció: apunta el valor de `comptador` en cada volta.'
      },
      {
        id: 'mini8-5', titol: 'Tres proves per a un mètode', dificultat: 'mitjana', temps: '4 min',
        enunciat: 'Tens un mètode `double mitjana(int[] valors)` fet per una IA. Escriu **tres crides de prova**: una normal, una límit i una dolenta. Digues què hauria de passar en cada cas.',
        solucio: {
          titol: 'Proves.java',
          text: `// 1) NORMAL: valors reals de classe
comprovar("normal", mitjana(new int[]{6, 7, 6}), 6.33);

// 2) LÍMIT: el cas que sempre obliden
comprovar("buit", mitjana(new int[]{}), 0.0);        // o el que decidim
comprovar("un sol element", mitjana(new int[]{10}), 10.0);

// 3) DOLENT: dades fora de l'esperat
comprovar("negatius", mitjana(new int[]{-5, 5}), 0.0);
// i, si el mètode rebera text de l'usuari, provar-hi "hola"`,
          perque: 'Cada tipus de prova busca una família d\'errors distinta: el cas normal comprova que fa el que ha de fer, el límit comprova que aguanta, i el dolent comprova que no es trenca amb el que no s\'espera.'
        },
        pista: 'Pregunta\'t: quina dada faria esclatar este mètode si l\'hagueres escrit amb pressa?'
      },
      {
        id: 'mini8-6', titol: 'La resposta que no val', dificultat: 'repte', temps: '5 min',
        enunciat: 'Li pregunten a un assistent d\'IA: *«el meu programa de notes diu que tots aprovem, és correcte?»* i respon: *«Sí, si el programa diu que tots aprovem és que les notes són de 5 o més.»* Explica **per què eixa resposta no val res** i què hauries de comprovar tu.',
        solucio: {
          titol: 'Analisi.txt',
          noExecuta: true,
          text: `La resposta no val perquè la IA no ha vist les notes ni el codi:
només ha repetit la idea "si el programa ho diu, serà veritat".

Què cal comprovar:
1. D'on ixen les notes: les llig de l'usuari o les inventa el codi?
2. Compara amb >= 5 o amb > 5? (un 5 just ha d'aprovar)
3. I si la nota és 4.9? I si l'usuari no ha escrit res?
4. Quantes notes ha lligit de veritat? (comptador)

La conclusió és del programa, no de la IA: sense vore eixes
comprovacions, la resposta és una opinió.`,
          perque: 'La IA no pot validar el teu resultat: només el pot comentar. La validació es fa amb proves, amb traça i mirant les dades reals.'
        },
        pista: 'Pregunta\'t sempre el mateix: què hauria de vore la IA per poder assegurar-ho?'
      }
    ]
  },

  principals: {
    intro: 'Quatre faenes de programador. En totes el mateix orde: **llegir, compilar, traçar, provar amb límits i arreglar**. Escriu tu la resposta abans de mirar la solució.',
    exercicis: [
      {
        id: 'ex8-1', titol: 'Auditoria d\'un programa generat', dificultat: 'facil', temps: '20 min',
        enunciat: 'Este programa el va generar una IA i pareix que funciona: **executa\'l amb la llista de baix i mira què dona de veritat** (no et refies del que diu el text). Troba **tres problemes** —un d\'ordre de recorregut, un de tipus de dades i un de cas límit—, explica\'ls i arregla\'ls. Després prova\'l amb: (a) la llista de l\'exemple, (b) una llista buida, (c) una llista amb un sol element i (d) una llista amb tots els preus negatius.',
        exemple: { entrada: 'preus = {2.50, 1.80, 3.00, 4.20}', sortida: 'Total: 11.5\nMitjana: 2.875\nMés car: 4.2' },
        codi: {
          titol: 'Compra.java',
          text: `public class Compra {

    public static void main(String[] args) {
        double[] preus = {2.50, 1.80, 3.00, 4.20};

        double total = 0;
        double mesCar = 0;

        for (int i = 1; i < preus.length; i++) {
            total = total + preus[i];
            if (preus[i] > mesCar) {
                mesCar = preus[i];
            }
        }

        System.out.println("Total: " + total);
        System.out.println("Mitjana: " + total / preus.length);
        System.out.println("Més car: " + mesCar);
    }
}`
        },
        solucio: {
          titol: 'CompraBo.java',
          text: `public class CompraBo {

    public static double total(double[] preus) {
        double suma = 0;
        for (int i = 0; i < preus.length; i++) {
            suma = suma + preus[i];
        }
        return suma;
    }

    public static double mitjana(double[] preus) {
        if (preus.length == 0) {
            return 0;
        }
        return total(preus) / preus.length;
    }

    public static double mesCar(double[] preus) {
        if (preus.length == 0) {
            return 0;
        }
        double maxim = preus[0];                 // mai començar amb 0 fix
        for (int i = 1; i < preus.length; i++) {
            if (preus[i] > maxim) {
                maxim = preus[i];
            }
        }
        return maxim;
    }

    public static void main(String[] args) {
        double[] preus = {2.50, 1.80, 3.00, 4.20};

        System.out.println("Total: " + total(preus));
        System.out.println("Mitjana: " + mitjana(preus));
        System.out.println("Més car: " + mesCar(preus));

        // proves de límits
        System.out.println("Sense dades: " + total(new double[0]) + " / " + mitjana(new double[0]));
        System.out.println("Tot negatiu: " + mesCar(new double[]{-3.5, -1.2}));
    }
}`,
          sortida: `Total: 11.5
Mitjana: 2.875
Més car: 4.2
Sense dades: 0.0 / 0.0
Tot negatiu: -1.2`,
          perque: 'Els tres problemes: (1) el bucle comença en `i = 1` i es menja el primer preu; (2) no contempla la llista buida (divisió per zero); (3) `mesCar` comença en 0, així que amb preus negatius diria que el més car és 0. A més, tot està dins del `main`: costaria provar-ho per parts.'
        },
        pista: 'Compara el total que dona el codi amb el que tu calcularies a mà abans de tocar res.'
      },
      {
        id: 'ex8-2', titol: 'El jutge dels noms', dificultat: 'mitjana', temps: '25 min',
        enunciat: 'Un assistent d\'IA t\'ha donat este mètode que diu si un nom d\'usuari és vàlid (entre 3 i 10 caràcters i **sense espais**). Escriu **les proves primer** (normal, límit i dolent), executa-les i descobrix el problema. Després arregla el mètode amb el que ja saps i torna a provar.',
        codi: {
          titol: 'NomsUsuari.java',
          text: `public class NomsUsuari {

    public static boolean esValid(String nom) {
        if (nom.length() >= 3 && nom.length() <= 10) {
            return true;
        }
        if (nom.indexOf(" ") == -1) {
            return true;
        }
        return false;
    }
}`
        },
        exemple: {
          entrada: `esValid("ana_99")
esValid("a b")
esValid("")`,
          sortida: `true
true      ← ací està el problema: hauria de ser false
false`
        },
        solucio: {
          titol: 'NomsUsuariBo.java',
          text: `public class NomsUsuariBo {

    public static boolean esValid(String nom) {
        if (nom == null) {
            return false;
        }
        if (nom.length() < 3 || nom.length() > 10) {
            return false;
        }
        if (nom.indexOf(" ") != -1) {
            return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println("ana_99  -> " + esValid("ana_99"));   // true
        System.out.println("abc     -> " + esValid("abc"));      // true (límit)
        System.out.println("ab      -> " + esValid("ab"));       // false (límit)
        System.out.println("a b     -> " + esValid("a b"));      // false (espai)
        System.out.println("12345678901 -> " + esValid("12345678901")); // false
    }
}`,
          sortida: `ana_99  -> true
abc     -> true
ab      -> false
a b     -> false
12345678901 -> false`,
          perque: 'El codi original té **dos if independents** que no es parlen entre ells: «ab» és massa curt però s\'aprova per la segona condició (no té espais), i «a b» té un espai però s\'aprova per la primera (la llargària està dins del rang). Les regles han de ser **exigides totes juntes**, com en la versió arreglada. També faltava comprovar `null`.'
        },
        pista: 'Escriu la llista de casos i el resultat esperat en paper **abans** d\'executar: així el descobriment no és casualitat.'
      },
      {
        id: 'ex8-3', titol: 'Escriure tu primer, comparar després', dificultat: 'mitjana', temps: '25 min',
        enunciat: '**Primer, tu sol (10 min):** escriu un programa que demane 5 temperatures i mostre la mitjana, la més alta i quants dies han gelat (per davall de 0). **Després (10 min):** demana-li-ho a un assistent d\'IA amb un prompt complet i compara les dos versions. Apunta: què ha fet millor la teua, què ha fet millor la seua i què copiaries d\'ella.',
        exemple: { entrada: '4.5  0.0  -2.0  3.5  -0.5', sortida: 'Mitjana: 1.1\nMés alta: 4.5\nDies gelats: 2' },
        solucio: {
          titol: 'Temperatures.java',
          text: `import java.util.Scanner;

public class Temperatures {

    public static double mitjana(double[] temps) {
        double suma = 0;
        for (int i = 0; i < temps.length; i++) {
            suma = suma + temps[i];
        }
        return suma / temps.length;
    }

    public static double mesAlta(double[] temps) {
        double maxima = temps[0];
        for (int i = 1; i < temps.length; i++) {
            if (temps[i] > maxima) {
                maxima = temps[i];
            }
        }
        return maxima;
    }

    public static int diesGelats(double[] temps) {
        int comptador = 0;
        for (int i = 0; i < temps.length; i++) {
            if (temps[i] < 0) {
                comptador++;
            }
        }
        return comptador;
    }

    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        double[] temps = new double[5];

        for (int i = 0; i < temps.length; i++) {
            System.out.print("Temperatura dia " + (i + 1) + ": ");
            temps[i] = teclat.nextDouble();
        }

        System.out.println("Mitjana: " + mitjana(temps));
        System.out.println("Més alta: " + mesAlta(temps));
        System.out.println("Dies gelats: " + diesGelats(temps));
    }
}`,
          entrada: `4.5
0
-2
3.5
-0.5`,
          sortida: `Mitjana: 1.1
Més alta: 4.5
Dies gelats: 2`,
          perque: 'No hi ha una única solució bona: el valor de l\'exercici està en la comparació. En general la IA escriurà un codi més curt i polit, i tu detectaràs millor els límits (dies gelats amb 0, mitjana amb enters, etc.) perquè tu has decidit les regles.'
        },
        pista: 'Al prompt, no oblides les regles del teu problema: «gelat vol dir per davall de 0, i 0 no compta».'
      },
      {
        id: 'ex8-4', titol: 'Fitxa de responsabilitat', dificultat: 'repte', temps: '20 min',
        enunciat: '**Sense codi nou.** Prepara una fitxa d\'una pàgina per a qualsevol treball en què faces servir IA. Ha de respondre a estes set preguntes, amb exemples concrets del treball d\'este tema: (1) quin prompt exacte vas escriure; (2) què et va donar; (3) què vas haver de canviar i per què; (4) com ho vas comprovar; (5) quines dades **no** vas enviar mai; (6) què no entenies i com ho vas resoldre; (7) si el professor et preguntara «explica\'m esta línia», sabries fer-ho?',
        solucio: {
          titol: 'FitxaIA.txt',
          noExecuta: true,
          text: `FITXA D'ÚS DE IA — Treball: ....................................

1. Prompt exacte (copiat, sense retocar)
   → "Escriu un mètode en Java que reba double[] i torne la mitjana,
      sense imprimir res i tornant 0 si l'array està buit."

2. Què em va donar
   → Un mètode correcte però amb suma int (perdia decimals).

3. Què vaig canviar i per què
   → int suma → double suma. Ho vaig detectar amb la prova 6,7,6
     (donava 6.0 en compte de 6.33).

4. Com ho vaig comprovar
   → Jutge amb 4 casos: normal, un element, negatiu i array buit.

5. Dades que NO vaig enviar
   → Noms de companys, notes reals de la classe, cap contrasenya.

6. Què no entenia i com ho vaig resoldre
   → Math.abs(...) < 0.01. Ho vaig preguntar i ho vaig provar
     amb dos números quasi iguals.

7. Puc explicar cada línia?  SÍ / NO
   → Si hi ha cap NO, esborre eixa part i la torne a escriure.`,
          perque: 'La fitxa és la manera honesta de treballar amb IA: deixa constància de què has demanat, què has comprovat i què has après. Si no pots omplir-la amb sinceritat, probablement has entregat faena que no és teua.'
        },
        pista: 'La pregunta 7 és la que decidix si el treball es pot entregar: si la resposta és «no», cal tornar arrere, no amagar-ho.'
      }
    ]
  },

  reptes: {
    reptes: [
      {
        titol: 'El jutge de la classe',
        blocs: [
          { p: 'Fes un programa **Jutge.java** que comprove un mètode d\'un company. El procediment:' },
          { llista: [
            'Intercanvia amb un company un dels programes del Tema 7 (una classe amb dos o tres mètodes).',
            'Escriu **les proves abans** de mirar el codi: per a cada mètode, un cas normal, un cas límit i un cas dolent, amb el resultat que tu esperes.',
            'Executa les proves amb el codi del company. Apunta cada ✗ amb el número obtingut i l\'esperat.',
            '**No li arregles el codi.** Escriu-li un informe de tres línies: què falla, amb quines dades i què hauria de passar.',
            'Passa-li l\'informe i que ho arregle. Quan t\'ho torne, torna a passar el jutge.',
            'Al final: quants errors ha detectat el jutge que a ull no es veien?'
          ] },
          { p: '**Entrega:** el fitxer de proves, l\'informe i el codi final del company amb un comentari seu dient si li va ser útil.' }
        ],
        ampliacions: [
          'Fes que el jutge compte les proves passades i les fallades i al final recorde la que va fallar.',
          'Afig proves per als mètodes que treballen amb `String` (comparar amb `equals`, comprovar `null`).',
          'Fes un rànquing de rigor: quin equip de la classe ha trobat l\'error més difícil?'
        ]
      },
      {
        titol: 'El prompt perfecte (i la seua traïció)',
        blocs: [
          { p: 'La faena: aconseguir que una IA t\'escriga un programa **correcte de veritat** i demostrar que ho és. Has de documentar tot el procés.' },
          { llista: [
            'Tria un programa menut però amb trampa: gestor de notes, comptador de paraules d\'un text, control d\'un torneig, mitjana de temperatures amb dies gelats…',
            'Escriu el prompt amb les quatre parts: context i dades, què ha de fer, restriccions i què vols que t\'explique.',
            'Escriu **les proves abans** d\'executar la resposta de la IA (mínim 4: normal, dos límits i un cas dolent).',
            'Executa, troba **almenys un problema** i arregla\'l tu. Si la resposta és perfecta, busca millor: canvia un tipus, afig un cas extrem, complica les dades.',
            'Fes una segona volta del prompt incloent el que has après: quina diferència hi ha entre el primer prompt i el definitiu?'
          ] },
          { p: '**Entrega:** els dos prompts (el fluix i el bo), les proves, el problema trobat amb el seu número («esperava 6.33 i donava 6.0»), com l\'has arreglat i una conclusió de tres línies: *què fa bé la IA, què no i què has hagut de fer tu*.' }
        ],
        ampliacions: [
          'Demana-li a la IA **dos mètodes distints** per al mateix problema i compara\'ls amb les proves: quin és més curtós, quin més segur?',
          'Deman-li a la IA que t\'escrivisca ella les proves. Comprova si les proves que proposa detectarien el seu propi error. (Sorpresa habitual: no.)',
          'Presenta-ho a classe en 3 minuts: el moment «la IA m\'ha enganyat» és el més instructiu de tots.'
        ]
      }
    ]
  },

  errors: {
    entradeta: 'Els errors d\'este tema no són de sintaxi: són de criteri. Són els que convertixen una ferramenta potent en un mal company de feina.',
    errors: [
      {
        titol: 'Pegar codi sense provar-lo',
        mal: {
          titol: 'Confiat.java',
          text: `// Prompt: "fes un programa que diga si dos textos són iguals"
// Resposta copiada tal qual:

public static void main(String[] args) {
    String a = "Hola";
    String b = "Hola";

    if (a == b) {
        System.out.println("Iguals");
    } else {
        System.out.println("Distints");
    }
}`,
          missatge: 'Mostra «Iguals» … però amb dos textos que vinguen del teclat mostrarà «Distints».'
        },
        que: 'Entregar la primera resposta de la IA sense executar-la amb dades reals.',
        perque: 'El codi generat està pensat per a un cas ideal. Amb `String`, `==` compara direccions de memòria: amb literals funciona per casualitat i amb text llegit per teclat falla.',
        detectar: 'Prova sempre amb dades que vinguen de fora del programa (teclat, fitxer, array omplit per codi): eixes són les que destapen els errors amagats.',
        corregir: 'Executar amb 2-3 casos reals **abans** de donar el codi per bo i canviar `==` per `.equals()` en text.',
        bo: {
          titol: 'Comparat.java',
          text: `public static void main(String[] args) {
    String a = "Hola";
    String b = "Hola";

    if (a.equals(b)) {
        System.out.println("Iguals");
    } else {
        System.out.println("Distints");
    }
}`
        }
      },
      {
        titol: 'No entendre el codi que entres',
        mal: {
          titol: 'Copiat.java',
          text: `public static double mitjana(int[] v) {
    long s = 0;
    for (int x : v) s += x;
    return v.length == 0 ? 0 : (double) s / v.length;
}
// …i a l'examen no saps explicar què és 'long', ni 'x', ni '?'.`,
          missatge: 'El programa funciona; el que falla és l\'alumne: no ho pot defensar ni arreglar.'
        },
        que: 'Entregar codi que no saps explicar línia a línia.',
        perque: 'Quan el codi falle amb les dades d\'un company o del professor, no sabràs ni per on començar. I si demà canvia una regla, no podràs adaptar-lo.',
        detectar: 'Agafa un paper i explica cada línia en veu alta com si fora a classe. Si t\'encalles en qualcuna, eixa línia no és teua.',
        corregir: 'O l\'entens, o la reescrius amb el que sí que saps (bucle `for`, `if`, tipos bàsics). Millor un codi més senzill que pugues defensar.',
        bo: {
          titol: 'Teu.java',
          text: `public static double mitjana(int[] valors) {
    if (valors.length == 0) {
        return 0;
    }
    double suma = 0;
    for (int i = 0; i < valors.length; i++) {
        suma = suma + valors[i];
    }
    return suma / valors.length;
}

// Sense atalls: es pot explicar línia a línia en veu alta.`
        }
      },
      {
        titol: 'Demanar-ho tot a la IA abans d\'intentar-ho',
        mal: {
          titol: 'RutinaDePreguntar.txt',
          text: `Alumne: "fes-me l'exercici 3"
IA: (programa complet)
Alumne: (copia, l'entrega, no aprén res)

I a la tercera setmana: "no sé fer un bucle sol".`,
          missatge: 'És l\'error que més es nota al cap d\'un mes, no el mateix dia.'
        },
        que: 'Convertir la ferramenta en una màquina d\'entregar deures.',
        perque: 'Programar s\'aprén intentant-ho i equivocant-se. Si sempre t\'ho donen fet, la part del cervell que detecta errors no es construïx mai.',
        detectar: 'Si entre el prompt i el codi que entregues han passat menys de deu minuts i no has escrit ni una línia tu, mal senyal.',
        corregir: 'Primer deu minuts emprovar-ho sol (encara que isca mal). Després, demanar que t\'explique o que t\'ajude a trobar l\'error, no que te\'l resolga.',
        bo: {
          titol: 'RutinaQueFunciona.txt',
          text: `1. Llegix l'enunciat i escriu el pla (parts i dades).        ← 5 min
2. Intenta el primer mètode tu.                             ← 10 min
3. Si no ix: prompt amb el que has fet i què t'esperaves.
   "Açò és el que he escrit i dóna este error. Què estic
    confonent? No em dones la solució, guia'm."
4. Arregla-ho tu, executant cada canvi.                     ← 10 min
5. Quan funcione: intenta explicar-ho a un company.`
        }
      },
      {
        titol: 'Enviar informació que no és teua',
        mal: {
          titol: 'PromptRisc.txt',
          text: `"Açò és la llista de notes i els DNI de la meua classe:
 49283721X Ana 8,5   50119283Y Bruno 6,0   ...

 Fes-me un Excel amb les notes mitjanes de cada alumne."`,
          missatge: 'Dades personals de menors enviades a un servidor extern que no controlem.'
        },
        que: 'Posar dades personals, contrasenyes o informació interna del centre en un xat públic.',
        perque: 'Estàs donant informació que no és teua a un sistema que pot guardar-la, reutilitzar-la o vore-la altres persones. La responsabilitat legal és teua, no del xat.',
        detectar: 'Regla del semàfor: nom, cognom, DNI, telèfon, correu, notes reals, contrasenyes o codi privat → **roig**: no s\'envia mai.',
        corregir: 'Substituïx les dades per invents: «alumne1 amb 8.5, alumne2 amb 6.0». El programa funcionarà igual i ningú haurà cedit res.',
        bo: {
          titol: 'PromptSegur.txt',
          text: `"Tinc una llista de noms inventats i notes (alumne1 8.5,
 alumne2 6.0, alumne3 4.5). Escriu-me el codi en Java
 per calcular la mitjana i quants aproven, suposant que
 les dades les tindré jo en un array."

→ Cap dada real ix del centre.`
        }
      }
    ]
  },

  resum: {
    entradeta: 'La IA no et lleva la faena de programar: et canvia la faena. Estes són les idees que has de recordar.',
    idees: [
      'Un **assistent d\'IA** prediu codi a partir de text: encerta molt de sovint i **comprova res** del teu problema.',
      'Pot fer molt de profit: estructures, explicar errors, comentar codi, generar casos de prova.',
      'Els seus errors típics: **divisió de enters**, mètodes **inventats**, `null` oblidat, límit del bucle amb `<=`, `==` amb `String`.',
      'Un **bon prompt** té quatre parts: context i dades, què ha de fer, restriccions i què vols que t\'explique.',
      'El **prompt és el pla** del Tema 7 escrit en valencià: si no saps explicar què ha de fer el programa, la IA tampoc no ho sabrà.',
      'El codi aliè es llija fent **traces** amb paper: valors concrets i què val cada variable en cada volta.',
      'Sempre les **tres proves**: cas normal, cas límit (buit, 0, negatiu) i cas dolent.',
      '**La IA proposa, les proves decidixen**: una resposta que no passa les proves no val, per bé que estiga escrita.',
      'Tu eres el **pilot**: decideixes el pla, arregles i entens. Ella és el copilot.',
      'Amb IA hi ha **regles que no són tècniques**: no enviar dades personals, dir quan has usat IA i no entregar codi que no saps explicar.'
    ]
  },

  autoavaluacio: {
    entradeta: 'Nou preguntes per comprovar si saps treballar amb IA sense deixar de ser programador. Contesta-les totes abans de vore les solucions.',
    preguntes: [
      {
        pregunta: 'Què fa exactament un assistent d\'IA de codi quan li demanes un programa?',
        opcions: [
          'a) Comprova si el programa funcionarà amb les teues dades i t\'avisa dels errors.',
          'b) Prediu quin text és més probable que seguisca al teu prompt, basant-se en molt de codi que ha llegit.',
          'c) Consulta una base de dades de programes correctes i copia el que més s\'assembla.'
        ],
        resposta: 'b) Prediu la resposta més probable a partir del text que li escrius.',
        perque: 'No comprova res i no coneix el teu problema: només sap quina combinació de codi sol aparéixer en una situació com la que li has descrit.'
      },
      {
        pregunta: 'Què és una **al·lucinació** en codi generat per IA?',
        resposta: 'Que s\'invente alguna cosa que no existix: un mètode, una llibreria o un paràmetre. Per exemple `text.reverse()`: això existix en altres llenguatges, però **Java no el té**.',
        perque: 'Es detecta compilant: el missatge d\'error «cannot find symbol» és la prova que eixa part no existeix.'
      },
      {
        pregunta: 'Quines són les quatre parts d\'un prompt que val la pena?',
        resposta: '**Context i dades** (què tinc), **què ha de fer** (les regles del problema), **restriccions** (què no pot usar ni fer) i **què vull que m\'explique** (explicació i proves).',
        perque: 'Sense context la resposta és genèrica; sense restriccions pot usar coses que no hem après; sense explicació no aprenem res.'
      },
      {
        pregunta: 'Este codi l\'ha generat una IA. Què mostrarà per pantalla i què hauria de mostrar?',
        codi: {
          titol: 'Pregunta.java',
          text: `public static void main(String[] args) {
    int total = 7;
    int persones = 2;
    System.out.println("Toca a " + total / persones + " unitats");
}`
        },
        resposta: 'Mostra `Toca a 3 unitats`, però el correcte amb decimals és `3.5`.',
        perque: 'La divisió entre `int` dona un `int`: es perd la part decimal sense cap avís. Es detecta provant amb un cas que no siga exacte.'
      },
      {
        pregunta: 'Escriu les **tres proves** que li faries al mètode `double mitjana(double[] notes)` i digues què busques en cada una.',
        resposta: '**Normal:** notes reals de classe → comprova que fa el càlcul (6, 7, 6 → 6.33). **Límit:** array buit, un sol element, tot zeros → comprova que no esclata (no pot dividir per zero). **Dolent:** notes negatives o valors estranys → comprova que no dona resultats absurds.',
        perque: 'Cada família de proves busca un tipus d\'error distint: el càlcul, els límits i les dades que ningú esperava.'
      },
      {
        pregunta: 'Un company diu: «si la IA m\'ho ha donat, i la IA ha llegit milions de programes, estarà bé». Què li contestaries?',
        resposta: 'Que la IA no ha vist **les seues dades ni les seues regles**: ha vist molt de codi en general. El seu codi compila quasi sempre, però pot estar malament per al problema concret (tipus de dades, límits, regles del centre…). La prova és executar-lo amb els casos preparats.',
        perque: 'La diferència entre «codi plausible» i «codi correcte» la decidixen les proves, no l\'autoritat de qui l\'ha escrit.'
      },
      {
        pregunta: 'Quines dades **no** has d\'enviar mai a un xat d\'IA i què fas si les necessites per explicar el problema?',
        resposta: 'No s\'envien noms, cognoms, DNI, telèfons, correus, notes reals, contrasenyes ni codi privat. Si cal explicar-ho, es **substituïxen per invents** («alumne1», «usuari A», «producte X») que mantinguen l\'estructura del problema.',
        perque: 'La responsabilitat legal i ètica de les dades és teua. Un prompt no és un lloc segur per a informació personal de terceres persones.'
      },
      {
        pregunta: 'Per a què està **especialment bé** usar la IA mentre aprens a programar, i per a què no?',
        resposta: 'Bé: explicar un missatge d\'error que ja has llegit, proposar casos de prova, comentar codi, mostrar dues maneres de fer el mateix. Mal: donar-te la solució d\'un exercici abans d\'intentar-lo, o entregar codi que no saps explicar.',
        perque: 'La ferramenta ajuda quan amplia què entens, i fa mal quan substituïx el teu intent: eixe intent és justament el que t\'ensenya.'
      },
      {
        pregunta: 'La IA t\'ha escrit el 80 % d\'un programa, però tu has decidit el pla, has trobat l\'error, l\'has arreglat i el pots explicar. Què diries si et pregunten «de qui és este programa»? I si l\'hagueres copiat sense entendre\'l?',
        resposta: 'En el primer cas és **teu** (amb una nota honesta de com l\'has fet). En el segon no és teu ni és un treball acadèmic vàlid: has entregat alguna cosa que no pots defensar ni arreglar quan falle.',
        perque: 'El criteri no és quantes línies has escrit, sinó qui decidix, qui comprova i qui respon del resultat.'
      }
    ]
  },

  diapositives: {
    objectiu: 'Treballar amb assistents d\'IA com un programador: demanar bé, comprovar sempre, arreglar i entendre el codi per a poder respondre\'n.',
    index: [
      'La IA no comprova res',
      'Els errors típics del codi generat',
      'El prompt de quatre parts',
      'Lligir codi alié: la traça',
      'Les tres proves',
      'El pilot i el copilot',
      'Privacitat i honestedat',
      'El jutge: proves abans que codi'
    ],
    blocs: [
      {
        tipus: 'concepte',
        titol: 'Un exemple per obrir els ulls',
        bullets: [
          '«Fes un programa de notes en Java» → en 2 segons tenim codi',
          'Compila, s\'executa… i dona 6.0 quan hauria de donar 6.33',
          'El perill no és que falle: és que pareix que funciona',
          'Hui aprenem a comprovar i a decidir'
        ],
        notes: 'Ensenyar la primera diapositiva de codi i preguntar: «veieu res estrany?». Deixar que fallen abans de dir-ho.'
      },
      {
        tipus: 'comparacio',
        titol: 'Què fa i què no fa una IA de codi',
        esquerra: { titol: '✅ Sòlia encertar', bullets: ['Estructures típiques (bucles, if)', 'Explicar un missatge d\'error', 'Generar casos de prova', 'Comentar i ordenar codi'] },
        dreta: { titol: '⚠️ Hem de comprovar', bullets: ['Tot el que depén de les teues dades', 'Els tipus (int vs double)', 'Els límits (buit, 0, null)', 'Les regles del teu problema'] }
      },
      {
        tipus: 'codi',
        titol: 'Al·lucinació: el mètode que no existix',
        codi: 'String text = "hola";\nSystem.out.println(text.reverse());',
        sortida: 'error: cannot find symbol — method reverse()',
        notes: 'En Java, String no té reverse(). Existix en altres llenguatges: eixa és la font de l\'error. El missatge del compilador és la prova.'
      },
      {
        tipus: 'concepte',
        titol: 'Els cinc errors típics',
        bullets: [
          'Divisió de enters: (6+7+6)/3 = 6',
          'Mètodes i llibreries inventades',
          'No comprovar null ni el cas buit',
          'Bucle amb <= length (una volta de més)',
          '== per a comparar String'
        ],
        notes: 'No cal memoritzar-los: els buscarem sempre, un per un, en el codi que rebrem.'
      },
      {
        tipus: 'comparacio',
        titol: 'Dos prompts, dos resultats',
        esquerra: { titol: '✗ Fluix', bullets: ['«Fes-me un programa de notes»', 'Sense dades ni restriccions', 'Resposta genèrica', 'No aprenem res'] },
        dreta: { titol: '✅ Complet', bullets: ['Context i dades', 'Què ha de fer (regles)', 'Què no pot fer', 'Què vull que m\'explique'] }
      },
      {
        tipus: 'esquema',
        titol: 'Les quatre parts del prompt',
        flux: ['Context i dades', 'Què ha de fer', 'Restriccions', 'Què vull aprendre'],
        nota: 'El prompt és el pla del Tema 7 traduït a una conversa.'
      },
      {
        tipus: 'codi',
        titol: 'Lligir codi alié: la traça',
        codi: 'int doble(int n) {\n    return n * 2;\n}\n// traça amb n = 9  →  torna 18',
        sortida: '18',
        notes: 'Sempre amb valors concrets i paper. «M\'ho semble» no és una traça.'
      },
      {
        tipus: 'esquema',
        titol: 'Les tres proves',
        flux: ['Cas normal', 'Cas límit (buit, 0, negatiu)', 'Cas dolent (dada estranya)'],
        nota: 'Si passa les tres, tenim un argument. Si no, tenim una impressió.'
      },
      {
        tipus: 'prediccio',
        titol: 'Traça i endevina',
        codi: 'int[] v = {3, 1, 4};\nint comptador = 1;\nfor (int i = 0; i <= v.length; i++) {\n    comptador = comptador * 2;\n}\nSystem.out.println(comptador);',
        pregunta: 'Quantes voltes fa el bucle i què ix per pantalla? Què hauria d\'eixir amb < en compte de <=?',
        notes: 'Solució: 4 voltes → 16. Amb < en serien 3 voltes → 8. El senyal és el «<= length».'
      },
      {
        tipus: 'esquema',
        titol: 'Pilot i copilot',
        flux: ['Pensa el pla', 'Escriu-ho tu', 'Pregunta un fragment', 'Prova-ho tu', 'Arregla i entén', 'Fes-ho teu'],
        nota: 'Tu decideixes i respones. La IA proposa.'
      },
      {
        tipus: 'codi',
        titol: 'Preguntar quan ja has provat',
        codi: '// ✗ "Arregla\'m això."\n\n// ✓ "Tinc este mètode amb double suma = 0.\n//    M\'ha donat ArithmeticException: / by zero\n//    amb un array buit. Ja torne 0 en eixe cas.\n//    Explica\'m per què passava i quines altres\n//    decisions podria prendre."',
        notes: 'El segon prompt t\'obliga a formular el problema: eixe és l\'aprenentatge.'
      },
      {
        tipus: 'concepte',
        titol: 'Privacitat: la regla del semàfor',
        bullets: [
          '🔴 No s\'envien noms, DNI, telèfons, notes reals, contrasenyes',
          '🟢 Sí que s\'envien dades inventades i codi propi',
          'Substituir no és amagar: és protegir terceres persones',
          'La responsabilitat legal és sempre teua'
        ],
        notes: 'Posar un exemple real de prompt amb «alumne1, alumne2» per a vore com funciona igual de bé.'
      },
      {
        tipus: 'concepte',
        titol: 'Honestedat acadèmica',
        bullets: [
          'Si uses IA, digues-ho: prompt, què et va donar, què vas canviar',
          'No entregues mai codi que no saps explicar',
          'La prova definitiva: «explica\'m esta línia»',
          'Fer trampes amb IA és fàcil de detectar… i deixa de ser útil'
        ],
        notes: 'Explicar la fitxa de responsabilitat de l\'exercici 4: prompt, canvis, proves, què no entenies.'
      },
      {
        tipus: 'activitat',
        titol: 'Ara et toca a tu',
        enunciat: 'Escriu un prompt complet per a un mètode que diga si un nom d\'usuari és vàlid (entre 3 i 10 caràcters i sense espais). Afig les tres proves que li faries abans de creure-te la resposta.',
        temps: '10 min',
        pistes: ['Les quatre parts del prompt', 'Un cas normal, dos límits i un dolent', 'Qui decidix si la resposta val?'],
        notes: 'Corregir dos o tres prompts en veu alta: què els falta? Normalment la part de restriccions i la de proves.'
      },
      {
        tipus: 'pregunta',
        titol: 'Pensem un moment',
        pregunta: 'Si li he dit a la IA tot el que ha de fer del programa, ¿què queda per a mi? I si no li ho he dit bé, qui paga les conseqüències?'
      },
      {
        tipus: 'codi',
        titol: 'El jutge, en tres línies',
        codi: 'comprovar("normal", mitjana(new int[]{6, 7, 6}), 6.33);\ncomprovar("buit",   mitjana(new int[]{}),      0.0);\ncomprovar("negatiu", mitjana(new int[]{-4, 4}),   0.0);',
        sortida: '✔ normal -> 6.333333333333333\n✗ buit -> esperàvem 0.0 i ha donat ArithmeticException',
        notes: 'El jutge no discuteix: dona números. Iixa és la diferència entre opinió i comprovació.'
      },
      {
        tipus: 'pregunta',
        titol: 'L\'última pregunta',
        pregunta: 'El codi de la IA que has arreglat tu, ara de qui és? Què has après arreglant-lo que no hauries après copiant-lo?'
      }
    ],
    resum: [
      'La IA prediu codi: encerta molt i no comprova res del teu problema.',
      'Els errors típics: enters, límits, null, <= length, == amb String.',
      'Bon prompt = context i dades + què ha de fer + restriccions + què vull aprendre.',
      'El codi alié es llija amb traça i paper, no «per damunt».',
      'Tres proves sempre: normal, límit i dolenta.',
      'La IA proposa, les proves decidixen.',
      'Tu eres el pilot: tu decidixes el pla i arregles.',
      'No s\'envien dades personals; si cal, s\'inventen.',
      'Si uses IA, digues-ho i sàpigues explicar cada línia.'
    ],
    seguent: 'Tema 9 · Cap a on va la programació'
  }
};
