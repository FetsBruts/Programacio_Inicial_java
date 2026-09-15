/* ==========================================================================
   TEMA 9 · Cap a on va la programació  —  contingut de la pàgina
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   · Tema de tancament: no ensenya tecnologies, ensenya QUÈ es pot fer amb
     el que ja se sap, QUÈ es queda per sempre i COM es continua aprenent.
   · sortida = eixida real (es comprova amb  node eines/prova-codi-java.mjs 9 )
   ========================================================================== */
/* Classe auxiliar que ja s'ha explicat dins del tema. No es mostra a la pàgina:
   només servix perquè la comprovació automàtica puga compilar i executar els
   trossos de codi de la programació guiada. */
const JOC = {
  titol: 'Joc.java',
  text: `public class Joc {
    String nom;
    int hores;

    Joc(String nom, int hores) {
        this.nom = nom;
        this.hores = hores;
    }
}`
};

globalThis.TEMA = {
  n: 9,
  titol: 'Cap a on va la programació',
  subtitol: 'Les ferramentes canvien cada any; els fonaments que has aprés es queden',
  durada: '3 hores de classe',

  hero: {
    etiqueta: 'Tema 9 · Sessió de 3 hores',
    entradeta: 'Has après a guardar dades, decidir, repetir, recórrer llistes, fer peces, crear objectes, muntar un programa complet i treballar amb IA. Eixes vuit coses no són «de Java»: són **programar**. Hui veurem tot el que pots construir amb elles i com continuar tot sol.',
    meta: [
      '⏱ 3 hores',
      '🚀 Fase 4 · On pots arribar',
      '🧩 Necessites: Temes 0 a 8',
      '❓ La pregunta clau: què vols construir tu?'
    ]
  },

  introduccio: {
    titol: 'Una situació per començar',
    emoji: '📱',
    blocs: [
      { p: 'Pensa en el teu matí d\'avui. Has fet estes coses quasi sense adonar-te:' },
      { llista: [
        'T\'ha sonat la **alarma** del mòbil.',
        'Has mirado el **grup de classe** i el missatge ha arribat al mòbil de tots alhora.',
        'Has escoltat **música** mentre esmorzaves.',
        'Has entrat al **joc** i t\'ha dit que el teu amic està connectat.',
        'Has pagat l\'**autobús** amb el telèfon.',
        'Has mirado el **temps** que farà esta vesprada.'
      ] },
      { p: 'Darrere de cada una d\'eixes coses hi ha **programes**. Programes que parlen amb altres programes, guardant dades i prenent decisions en mil·lisegons, des de servidors que no has vist mai.' },
      { p: 'I ací està la sorpresa: **no hi ha cap idea nova** dins d\'eixos programes. Hi ha variables, condicions, bucles, arrays, mètodes, objectes i persones que han aprés a construir per etapes i a provar el que fan. Exactament el que has aprés tu.' },
      { p: 'Hui no hi ha sintaxi nova ni exercicis de repetició: hui mirarem **on va tot això**, què pots fer amb el que ja saps i com continues aprenent quan el curs s\'acabe. I acabaràs amb un projecte menut, teu i acabat.' },
      { nota: { tipus: 'important', text: 'Queda\'t amb esta idea, que és la de tot el tema: **les ferramentes canvien cada any; els fonaments es queden**. Qui aprén a programar no aprén un programa: aprén a pensar solucions.' } }
    ],
    plan: [
      ['30-40 min', 'Explicació: què hi ha darrere de tot això'],
      ['50-60 min', 'Programació guiada: el teu mini projecte'],
      ['60-75 min', 'Exercicis i reptes'],
      ['20-30 min', 'Resum, ruta personal i autoavaluació']
    ],
    prerequisits: [
      'Tot el curs: variables, decisions, bucles, arrays, mètodes i objectes (Temes 1 a 6).',
      'Saber construir un programa per etapes i provar-lo (Tema 7).',
      'Saber treballar amb un assistent d\'IA sense deixar de comprovar (Tema 8).'
    ]
  },

  objectius: {
    intro: 'En acabar esta sessió has de saber fer estes coses:',
    llista: [
      'Identificar les **tres peces** que hi ha darrere de qualsevol aplicació: la interfície, la lògica i les dades.',
      'Explicar què és una **API** amb les teues paraules i reconéixer-la com un mètode més.',
      'Descriure què es pot construir en les grans **àrees** de la programació i què cal aprendre en cada una.',
      'Defendre que els **fonaments es transferixen** entre llenguatges, àrees i ferramentes.',
      '**Triar** què aprendre després amb criteri: un projecte primer, les ferramentes després.',
      'Acabar un **mini projecte propi** i presentar-lo en tres minuts explicant el codi.'
    ]
  },

  teoria: {
    titol: 'Teoria, poc a poc',
    entradeta: 'No aprenem ferramentes noves: mirem què hi ha darrere de les coses que ja uses i cap a on pots anar.',
    blocs: [
      { h3: '1. Tota aplicació té les mateixes tres peces' },
      { graella: [
        { emoji: '📲', titol: '1. La interfície', text: 'El que es veu i es toca: l\'app del mòbil, la pàgina web, la pantalla del caixer. És la part que parla amb la persona.' },
        { emoji: '⚙️', titol: '2. La lògica', text: 'El programa que decidix: calcular la mitjana, comprovar la contrasenya, sumar punts. Ací està tot el que has aprés.' },
        { emoji: '🗄️', titol: '3. Les dades', text: 'On es guarda tot quan tanques l\'app: la base de dades. Si no hi fora, cada dia començaries de zero.' }
      ] },
      { p: 'Quan polses **Enviar** en un joc, passen sempre les mateixes quatre coses, independentment de qui haja fet l\'app:' },
      { llista: [
        'La **interfície** recull el que has escrit i monta un missatge.',
        'El missatge viatja per **internet** fins a un ordinador que està sempre encés (el servidor).',
        'La **lògica** del servidor comprova i calcula, i guarda el resultat en les **dades**.',
        'Torna la **resposta**: «partida guardada», «usuari o contrasenya incorrectes», els nous punts…'
      ], numerada: true },
      { nota: { tipus: 'info', text: 'Els programes **parlen entre ells** amb peticions i respostes. Quasi tot el que es fa hui en programació és això: una part demana i una altra respon.' } },

      { h3: '2. Una API és un mètode que parla per internet' },
      { p: 'Una **API** és un conjunt de coses que un programa deixa fer a uns altres. En el fons és un mètode com els del Tema 5, però en compte de rebre valors d\'un `main`, els rep per internet.' },
      { codi: {
        titol: 'Dins del programa (Tema 5)',
        etiqueta: 'UN MÈTODE NORMAL',
        text: `public static int totalPunts(Jugador[] jugadors) {
    int suma = 0;
    for (int i = 0; i < jugadors.length; i++) {
        suma = suma + jugadors[i].punts;
    }
    return suma;
}`
      } },
      { codi: {
        titol: 'API.txt',
        etiqueta: 'EL MATEIX, PER A ALTRA GENT',
        noExecuta: true,
        text: `El servici publica una adreça:      GET /torneig/total

Algú ho demana des del seu programa →   GET /torneig/total

El servidor respon amb el resultat →    {"total": 395}

Qui ho demana no sap com està fet dins: només sap què
ha de demanar i què rebrà. Això és una API.`
      } },
      { p: 'I el detall important: dins de l\'API segueix havent un **mètode amb un bucle i un `return`**, com el que has escrit tu. Les API no són màgia: són mètodes amb bona educació.' },

      { h3: '3. Un llenguatge, moltes faenes: el mateix es repeteix' },
      { p: 'Estos quatre trossos fan exactament el mateix —sumar una llista de números— en quatre llenguatges que es fan servir hui a empreses de debò:' },
      { taula: {
        cap: ['Llenguatge', 'Sumar una llista'],
        files: [
          ['Java', '`for (int i = 0; i < v.length; i++) suma += v[i];`'],
          ['Python', '`for x in v:`  `suma += x`'],
          ['JavaScript', '`for (const x of v) suma += x;`'],
          ['Kotlin', '`for (x in v) suma += x`']
        ]
      } },
      { p: 'Canvia la manera d\'escriure-ho, el nom de les coses i els accents… però **les idees són les mateixes**: recórrer una llista, guardar un resultat, decidir amb una condició. Si canvies de llenguatge d\'ací a un any, no comences de zero: comences del capítol dos.' },
      { nota: { tipus: 'tip', text: 'Quan veus codi d\'un altre llenguatge, busca-li les peces: la variable, el `if`, el bucle, la funció. En cinc minuts ja saps llegir-lo encara que no en sapigues escriure.' } },

      { h3: '4. Les grans àrees: què es pot construir' },
      { p: 'Estes són les destinacions més habituals de qui sap programar. **No cal aprendre-les totes**: només saber que existixen i què permeten.' },
      { graella: [
        { emoji: '🌐', titol: 'Web i mòbil', text: 'Pàgines i apps. La lògica s\'escriu al servidor (Java, entre altres) i la interfície al navegador o al mòbil.' },
        { emoji: '🔌', titol: 'APIs i servicis', text: 'Els programes que fan la faena per a altres programes: pagaments, enviaments, xats, reserves.' },
        { emoji: '🎮', titol: 'Videojocs', text: 'Física, estats, puntuacions, enemics. Molts motors i servicis de jocs parlen Java o llenguatges parents.' },
        { emoji: '📊', titol: 'Dades i IA', text: 'Analitzar informació i entrenar models: qui compra què, què passa si… És la base dels recomanadors.' },
        { emoji: '🤖', titol: 'Robòtica i IoT', text: 'Sensors i actuadors: que una casa regule la temperatura o que un robot esquive un obstacle.' },
        { emoji: '🔐', titol: 'Ciberseguretat', text: 'Protegir dades i sistemes: contrasenyes, permisos, atacs, auditories.' },
        { emoji: '☁️', titol: 'Núvol i automatització', text: 'Programes que es reparteixen per centenars d\'ordinadors i fan faena sense ningú davant.' },
        { emoji: '🧠', titol: 'Agents i assistents', text: 'Programes que usen IA per fer tasques llargues: buscar, resumir, organitzar, respondre.' }
      ], columnes: 4 },
      { nota: { tipus: 'avis', text: 'En totes les àrees el primer any es fa el mateix: variables, condicions, bucles, llistes, funcions i objectes. **Canvia el vocabulari, no els fonaments.**' } },

      { h3: '5. El mateix programa en un joc, en un robot i en un servici' },
      { p: 'Fixa\'t com la mateixa idea —decidir amb una condició— apareix en llocs molt distints:' },
      { taula: {
        cap: ['On', 'Què decidix', 'Què canvia', 'Què NO canvia'],
        files: [
          ['Un joc', 'Si l\'enemic ataca o fuig', 'Dibuix, temps real, gràfics', 'La condició i el bucle'],
          ['Un robot', 'Si gira o va endavant', 'Sensors, motors, cables', 'La condició i el bucle'],
          ['Un servici', 'Si el descompte s\'aplica', 'Xarxa, servidors, molta gent alhora', 'La condició i el bucle'],
          ['Una app de salut', 'Si cal avisar un metge', 'Dades sensibles, avisos, legalitat', 'La condició i el bucle']
        ]
      } },
      { nota: { tipus: 'exit', text: 'Quan arribes a una ferramenta nova, la pregunta no és «què he d\'estudiar de nou?», sinó «**què hi ha ací que ja sé?**». Quasi sempre, un 70 % del que cal ja el portes.' } },

      { h3: '6. Les ferramentes canvien, els fonaments es queden' },
      { p: 'Estos nou fonaments no caducaran: porten dècades funcionant i seguiran quan les modes passen. Si els domines, pots aprendre qualsevol llenguatge nou en setmanes.' },
      { llista: [
        'Guardar informació en **variables** amb el tipus correcte.',
        '**Decidir** amb condicions, incloent-hi el cas contrari.',
        '**Repetir** amb bucles sense quedar-se\'n dins per sempre.',
        '**Recórrer llistes** tenint en compte els límits i el cas buit.',
        '**Dividir el problema en parts** i fer-ne funcions o mètodes amb bon nom.',
        '**Modelar** coses del món real amb objectes.',
        '**Provar** amb casos normals, límits i dolents.',
        '**Llegir** codi i missatges d\'error dels altres.',
        '**Treballar en equip**: versions, canvis xicotets, explicar el que has fet.'
      ] },
      { nota: { tipus: 'important', text: 'Pots canviar Java per un altre llenguatge, un altre editor o una altra ferramenta en un cap de setmana. **Canviar de fonaments no es fa en un cap de setmana: ni en un any.**' } },

      { h3: '7. Com es continua aprenent (ruta)' },
      { graella: [
        { emoji: '1️⃣', titol: 'Domina el que ja saps', text: 'Escriu del primer al darrer programa sense mirar. Si te\'n surts, la base és sòlida.' },
        { emoji: '2️⃣', titol: 'Un projecte xicotet i acabat', text: 'Una cosa que t\'agrade, que caps en unes setmanes i que pugues ensenyar acabada.' },
        { emoji: '3️⃣', titol: 'Llig codi dels altres', text: 'Projectes oberts a GitHub. Primer llig, després canvia una cosa menuda i mira què passa.' },
        { emoji: '4️⃣', titol: 'Aprén versions (Git)', text: 'Guardar l\'evolució del codi i treballar en equip deixarà de ser un problema.' },
        { emoji: '5️⃣', titol: 'Documentació i errors', text: 'Llig la documentació oficial i els missatges d\'error. Són la millor escola i no cobren.' },
        { emoji: '6️⃣', titol: 'Compartix i pregunta', text: 'Comunitat, companys, professors. Explicar el que has fet t\'ensenya més que copiar.' }
      ], columnes: 3 },
      { nota: { tipus: 'tip', text: 'El millor senyal que vas bé no és «sé molt»: és «**he acabat un projecte menut**». Projectes acabats, encara que siguen simples, obrin portes.' } },

      { h3: '8. Com triar què aprendre (i què ignorar)' },
      { taula: {
        cap: ['Pregunta', 'Què et diu la resposta'],
        files: [
          ['Què vull construir?', 'El projecte mana. La ferramenta ve després, no al revés'],
          ['Què fa servir la gent que fa això?', 'Mira ofertes de faena i projectes reals, no vídeos de modes'],
          ['Puc tindre alguna cosa funcionant esta setmana?', 'Si no, la tecnologia és massa gran per a començar'],
          ['Per a què serveix el que estic aprenent?', 'Si no ho pots explicar amb un exemple, encara no ha entrat']
        ]
      } },
      { nota: { tipus: 'avis', text: 'Córrer darrere de la ferramenta de moda és la manera més ràpida de no aprendre mai res: cada tres mesos començaries de zero. **El projecte és el que dona sentit a l\'aprenentatge.**' } },

      { h3: '9. Amb el codi també es decidix sobre persones' },
      { p: 'Quan el codi decidix coses de la vida de la gent (una beca, un descompte, un avís mèdic, qui veu què), apareixen responsabilitats que no són tècniques. Estes preguntes hauries de fer-te-les sempre:' },
      { llista: [
        '**Quines dades use?** Les mínimes possibles, i només les que necessite.',
        '**Qui el pot usar i qui no?** Permisos clars i contrasenyes ben gestionades.',
        '**I si s\'equivoca?** Un error del programa no pot deixar algú fora del sistema sense solució.',
        '**Ho pot entendre qui el patix?** Si el programa denega una beca, cal poder explicar per què.',
        '**Qui respon del resultat?** Sempre hi ha una persona responsable: no «ho ha decidit el programa».'
      ] },
      { nota: { tipus: 'important', text: 'La programació no és només un treball: és la manera com es construïx el món on vius. Escriure codi amb cura és una forma de respecte cap als altres.' } }
    ]
  },

  exemples: {
    titol: 'Exemples explicats pas a pas',
    entradeta: 'Tres exemples que obrin portes: una API, un robot i un recomanador. Tots s\'executen amb el que ja saps.',
    blocs: [
      { h3: 'Exemple 1 · Del mètode a l\'API' },
      { p: 'Convertim els mètodes del torneig del Tema 7 en un **servici**: una classe que rep una consulta i respon amb text en format JSON, que és com parlen hui les aplicacions.' },
      { codi: {
        titol: 'ServidorPunts.java',
        etiqueta: 'LA LÒGICA D\'UNA API',
        text: `public class ServidorPunts {

    public static int total(Jugador[] jugadors) {
        int suma = 0;
        for (int i = 0; i < jugadors.length; i++) {
            suma = suma + jugadors[i].punts;
        }
        return suma;
    }

    public static Jugador primer(Jugador[] jugadors) {
        Jugador millor = jugadors[0];
        for (int i = 1; i < jugadors.length; i++) {
            if (jugadors[i].punts > millor.punts) {
                millor = jugadors[i];
            }
        }
        return millor;
    }

    // El cor del servici: rep una consulta i respon un text
    public static String respon(String consulta, Jugador[] jugadors) {
        if (consulta.equals("total")) {
            return "{\\"total\\": " + total(jugadors) + "}";
        }
        if (consulta.equals("primer")) {
            return "{\\"primer\\": \\"" + primer(jugadors).nom + "\\", "
                 + "\\"punts\\": " + primer(jugadors).punts + "}";
        }
        return "{\\"error\\": \\"consulta desconeguda\\"}";
    }

    public static void main(String[] args) {
        Jugador[] jugadors = {
            new Jugador("Ana", 120),
            new Jugador("Bruno", 95),
            new Jugador("Carla", 180)
        };

        System.out.println(respon("total", jugadors));
        System.out.println(respon("primer", jugadors));
        System.out.println(respon("hola", jugadors));
    }
}

class Jugador {
    String nom;
    int punts;

    Jugador(String nom, int punts) {
        this.nom = nom;
        this.punts = punts;
    }
}`,
        sortida: `{"total": 395}
{"primer": "Carla", "punts": 180}
{"error": "consulta desconeguda"}`
      } },
      { p: 'Fixa\'t en què ha canviat i què no: **no hi ha cap idea nova**. Hi ha un `if`, un bucle, un `return` i un `equals`. El que fa «d\'API» és que el resultat és un **text preparat perquè el llija un altre programa** en compte d\'una frase per a una persona.' },
      { nota: { tipus: 'info', text: 'Els textos com `{"total": 395}` es diuen **JSON** i són el format més habitual perquè dos programes es passen dades. De moment no cal que el generes bé del tot: només cal entendre que és text amb estructura, com el que has montat amb concatenació.' } },

      { h3: 'Exemple 2 · El robot que decidix' },
      { p: 'Un robot és un programa amb sensors d\'entrada i motors d\'eixida. La lògica del mig és la que ja saps: condicions i bucles.' },
      { codi: {
        titol: 'Robot.java',
        etiqueta: 'LA LÒGICA D\'UN ROBOT',
        text: `public class Robot {

    public static String decidir(int distancia, boolean obstacle) {
        if (obstacle) {
            return "Gira";
        }
        if (distancia < 20) {
            return "Endavant";
        }
        return "Atura";
    }

    public static void main(String[] args) {
        // Simulem el que llegirien els sensors en cada moment
        int[] distancies = {45, 30, 15, 15, 15};
        boolean[] obstacles = {false, false, false, true, false};

        int girs = 0;
        for (int i = 0; i < distancies.length; i++) {
            String orde = decidir(distancies[i], obstacles[i]);
            if (orde.equals("Gira")) {
                girs++;
            }
            System.out.println("Pàs " + (i + 1) + ": " + orde);
        }
        System.out.println("Girs fets: " + girs);
    }
}`,
        sortida: `Pàs 1: Atura
Pàs 2: Atura
Pàs 3: Endavant
Pàs 4: Gira
Pàs 5: Endavant
Girs fets: 1`
      } },
      { p: 'En un robot de debò, `distancies` i `obstacles` no serien arrays escrits a mà: vindrien dels sensors. Però **el mètode `decidir` seria exactament igual**. Eixa és la part que has aprés i que no canvia.' },
      { nota: { tipus: 'tip', text: 'Si t\'interessa la robòtica o l\'IoT, comença per ací: programa amb valors inventats, comprova que les decisions són correctes i, només després, connecta els sensors de veritat.' } },

      { h3: 'Exemple 3 · El primer recomanador (la llavor de la IA)' },
      { p: 'Els recomanadors que et coneixen tan bé comencen amb una idea molt simple: **comptar quant coincidixen dos usuaris**. Ací tens el cor d\'un recomanador, amb el que ja saps.' },
      { codi: {
        titol: 'Recomanador.java',
        etiqueta: 'LA IDEA, EN 20 LÍNIES',
        text: `public class Recomanador {

    // Tots els gustos ordenats: [acció, esports, música, cuina, viatges]
    public static int coincidencies(boolean[] a, boolean[] b) {
        int quants = 0;
        for (int i = 0; i < a.length && i < b.length; i++) {
            if (a[i] && b[i]) {
                quants++;
            }
        }
        return quants;
    }

    public static String recomanar(boolean[] meus, boolean[] seus, String[] noms) {
        String resultat = "";
        for (int i = 0; i < meus.length && i < seus.length; i++) {
            if (seus[i] && !meus[i]) {
                resultat = resultat + noms[i] + " ";
            }
        }
        if (resultat.equals("")) {
            return "Res nou per a tu.";
        }
        return "Et podria agradar: " + resultat;
    }

    public static void main(String[] args) {
        String[] gustos = {"acció", "esports", "música", "cuina", "viatges"};

        boolean[] jo    = {true,  false, true,  false, false};
        boolean[] amic  = {true,  true,  true,  false, true};

        System.out.println("Coincidències amb l'amic: " + coincidencies(jo, amic));
        System.out.println(recomanar(jo, amic, gustos));
    }
}`,
        sortida: `Coincidències amb l'amic: 2
Et podria agradar: esports viatges `
      } },
      { p: 'Amb dos usuaris és una curiositat; amb **milions** d\'usuaris i gustos, i amb matemàtiques més fines, és el motor de les plataformes de sèries, música i compres. I en la base hi ha això: un bucle, una condició i un array.' },
      { nota: { tipus: 'exit', text: 'Quan t\'expliquen que la IA és un món impossible d\'entrar, recorda este exemple: **tot el gran comença en un bucle ben fet**.' } }
    ]
  },

  guiada: {
    titol: 'Programació guiada: el teu mini projecte, pas a pas',
    entradeta: 'Construirem entre tots un projecte menut i acabat, amb el mètode del Tema 7. Després el personalitzaràs: **una idea teua, el mateix esquema**.',
    passos: [
      {
        titol: 'Pas 1 · Triar la idea (i saber dir "no" a les grans)',
        blocs: [
          { p: 'Perquè un projecte s\'acabe, ha de complir tres regles. Si en falla una, quasi sempre es queda a mitges:' },
          { graella: [
            { emoji: '❤️', titol: 'T\'ha d\'agradar', text: 'Si t\'avorrix, no l\'acabaràs. Ha de ser un tema que t\'interesse de debò.' },
            { emoji: '📦', titol: 'Ha de cabre', text: 'Una sola idea: no «una app del centre». Una llista, un rànquing, un control de gastos.' },
            { emoji: '🔢', titol: 'Ha de tindre dades', text: 'Si no hi ha res a guardar ni res a calcular, no hi ha programa.' }
          ], columnes: 3 },
          { p: 'Per a la classe farem **el rànquing dels meus jocs**: guarda els jocs que tens, les hores jugades i diu el total, el que més has jugat i la mitjana. Tu, després, el convertiràs en la teua llista.' },
          { preguntaClasse: 'Què faríeu perquè este projecte siga «una app del centre» i no s\'acabe mai? Com el dividiríeu en projectes xicotets?' }
        ]
      },
      {
        titol: 'Pas 2 · El pla: parts i dades',
        blocs: [
          { p: 'Primer en paper, com al Tema 7. La llista de parts és el mapa.' },
          { codi: {
            titol: 'PlaRànquing.txt',
            etiqueta: 'EL PLA',
            noExecuta: true,
            text: `1. Guardar els jocs (nom + hores)      →  classe Joc + array
2. Mostrar tots els jocs               →  mostrarTots()
3. Sumar les hores de tots             →  totalHores()
4. Dir quin és el que més he jugat     →  mesJugat()
5. Menú amb opcions i eixida           →  main()`
          } },
          { codi: {
            titol: 'Joc.java',
            etiqueta: 'LES DADES',
            text: `public class Joc {
    String nom;
    int hores;

    Joc(String nom, int hores) {
        this.nom = nom;
        this.hores = hores;
    }
}`
          } },
          { nota: { tipus: 'tip', text: 'Fixat que decidim **dos tipus de dades**: una classe per a «un joc» i un array per a «molts jocs». Igual que al Tema 6: la classe és el motlle, l\'array és la capsa.' } }
        ]
      },
      {
        titol: 'Pas 3 · L\'esquelet que compila',
        blocs: [
          { p: 'Escrivim el `main` amb el menú i les capçaleres dels mètodes amb un retorn provisional. Ha de compilar i executar-se.' },
          { codi: {
            titol: 'Rànquing.java',
            etiqueta: 'PAS 3 · ESQUELET',
            fitxers: [JOC],
            text: `public class Ranquing {

    public static void mostrarTots(Joc[] jocs) {
        System.out.println("(pendent)");
    }

    public static int totalHores(Joc[] jocs) {
        return 0;
    }

    public static Joc mesJugat(Joc[] jocs) {
        return jocs[0];
    }

    public static void main(String[] args) {
        Joc[] jocs = {
            new Joc("Minecraft", 120),
            new Joc("FIFA", 45),
            new Joc("Fortnite", 80)
        };

        System.out.println("1. Mostrar  2. Total  3. El mes jugat  4. Eixir");
        mostrarTots(jocs);
        System.out.println("Total: " + totalHores(jocs));
        System.out.println("Mes jugat: " + mesJugat(jocs).nom);
    }
}`,
            sortida: `1. Mostrar  2. Total  3. El mes jugat  4. Eixir
(pendent)
Total: 0
Mes jugat: Minecraft`
          } },
          { nota: { tipus: 'info', text: 'Encara no fa res de profit i ja ens diu que l\'estructura està bé: l\'array d\'objectes funciona i els mètodes es criden. **Este és el moment de més tranquil·litat del projecte.**' } }
        ]
      },
      {
        titol: 'Pas 4 · Omplim les parts, una a una',
        blocs: [
          { p: 'Ara sí: una part, una execució. Comencem pels dos càlculs, que són els que tenen més perill.' },
          { codi: {
            titol: 'Rànquing.java',
            fitxers: [JOC],            etiqueta: 'PAS 4 · LES PARTS I LA SEUA EIXIDA',
            text: `    public static void mostrarTots(Joc[] jocs) {
        for (int i = 0; i < jocs.length; i++) {
            System.out.println((i + 1) + ". " + jocs[i].nom + " — " + jocs[i].hores + " h");
        }
    }

    public static int totalHores(Joc[] jocs) {
        int suma = 0;
        for (int i = 0; i < jocs.length; i++) {
            suma = suma + jocs[i].hores;
        }
        return suma;
    }

    public static Joc mesJugat(Joc[] jocs) {
        Joc millor = jocs[0];
        for (int i = 1; i < jocs.length; i++) {
            if (jocs[i].hores > millor.hores) {
                millor = jocs[i];
            }
        }
        return millor;
    }`,
            prova: `
    public static void main(String[] args) {
        Joc[] jocs = {
            new Joc("Minecraft", 120),
            new Joc("FIFA", 45),
            new Joc("Fortnite", 80)
        };

        System.out.println("1. Mostrar  2. Total  3. El mes jugat  4. Eixir");
        mostrarTots(jocs);
        System.out.println("Total: " + totalHores(jocs));
        System.out.println("Mes jugat: " + mesJugat(jocs).nom);
    }`,
            sortida: `1. Mostrar  2. Total  3. El mes jugat  4. Eixir
1. Minecraft — 120 h
2. FIFA — 45 h
3. Fortnite — 80 h
Total: 245
Mes jugat: Minecraft`
          } },
          { p: 'Fixa\'t en un detall professional: `mesJugat` **no imprimeix**, torna l\'objecte. Qui el crida decidix què fer-ne. Eixa decisió del Tema 7 és el que permetrà afegir opcions noves sense tocar res.' },
          { preguntaClasse: 'Què passaria si l\'array estiguera buit? Quin dels mètodes fallaria primer i per què?' }
        ]
      },
      {
        titol: 'Pas 5 · Afegir una opció sense rompre res',
        blocs: [
          { p: 'La prova de foc de l\'esquelet: afegim la mitjana d\'hores **sense tocar cap mètode dels que ja funcionen**.' },
          { codi: {
            titol: 'Rànquing.java',
            fitxers: [JOC],
            etiqueta: 'PAS 5 · UNA PART NOVA',
            text: `    public static double mitjana(Joc[] jocs) {
        if (jocs.length == 0) {
            return 0;
        }
        return totalHores(jocs) / (double) jocs.length;
    }

    // …i al main, una línia més (dins del main que ja teníem):
    //     System.out.println("Mitjana: " + mitjana(jocs) + " h per joc");`,
            previ: `
    public static void mostrarTots(Joc[] jocs) {
        for (int i = 0; i < jocs.length; i++) {
            System.out.println((i + 1) + ". " + jocs[i].nom + " — " + jocs[i].hores + " h");
        }
    }

    public static int totalHores(Joc[] jocs) {
        int suma = 0;
        for (int i = 0; i < jocs.length; i++) {
            suma = suma + jocs[i].hores;
        }
        return suma;
    }

    public static Joc mesJugat(Joc[] jocs) {
        Joc millor = jocs[0];
        for (int i = 1; i < jocs.length; i++) {
            if (jocs[i].hores > millor.hores) {
                millor = jocs[i];
            }
        }
        return millor;
    }

`,
            prova: `
    public static void main(String[] args) {
        Joc[] jocs = {
            new Joc("Minecraft", 120),
            new Joc("FIFA", 45),
            new Joc("Fortnite", 80)
        };

        System.out.println("1. Mostrar  2. Total  3. El mes jugat  4. Eixir");
        mostrarTots(jocs);
        System.out.println("Total: " + totalHores(jocs));
        System.out.println("Mes jugat: " + mesJugat(jocs).nom);
        System.out.println("Mitjana: " + mitjana(jocs) + " h per joc");
    }
`,
            sortida: `1. Mostrar  2. Total  3. El mes jugat  4. Eixir
1. Minecraft — 120 h
2. FIFA — 45 h
3. Fortnite — 80 h
Total: 245
Mes jugat: Minecraft
Mitjana: 81.66666666666667 h per joc`
          } },
          { p: 'Este és el senyal que el projecte està ben organitzat: **una part nova és una part nova**, no una reescriptura. Si per a afegir la mitjana hagueres de canviar `totalHores` i `mostrarTots`, l\'esquelet estava mal pensat.' },
          { nota: { tipus: 'tip', text: 'En un projecte de debò, la mitjana es mostraria arredonida a dos decimals. Ho pots deixar així de moment: **primer funciona, després es puleix**.' } }
        ]
      },
      {
        titol: 'Pas 6 · Els límits i les proves',
        blocs: [
          { p: 'Els tres casos de sempre, ara sobre el projecte sencer. Pensa tu què hauria de passar abans d\'executar-ho:' },
          { codi: {
            titol: 'Rànquing.java',
            fitxers: [JOC],
            etiqueta: 'PAS 6 · PROVES',
            text: `        Joc[] buit = {};                                        // cap joc
        Joc[] un = { new Joc("Un sol", 10) };                   // un joc
        Joc[] empat = { new Joc("A", 10), new Joc("B", 10) };   // empat

        mostrarTots(buit);
        System.out.println("Total buit: " + totalHores(buit));
        System.out.println("Mitjana buida: " + mitjana(buit));
        System.out.println("Mes jugat amb un: " + mesJugat(un).nom);
        System.out.println("Mes jugat amb empat: " + mesJugat(empat).nom);`,
            previ: `
    public static void mostrarTots(Joc[] jocs) {
        for (int i = 0; i < jocs.length; i++) {
            System.out.println((i + 1) + ". " + jocs[i].nom + " — " + jocs[i].hores + " h");
        }
    }

    public static int totalHores(Joc[] jocs) {
        int suma = 0;
        for (int i = 0; i < jocs.length; i++) {
            suma = suma + jocs[i].hores;
        }
        return suma;
    }

    public static Joc mesJugat(Joc[] jocs) {
        Joc millor = jocs[0];
        for (int i = 1; i < jocs.length; i++) {
            if (jocs[i].hores > millor.hores) {
                millor = jocs[i];
            }
        }
        return millor;
    }

    public static double mitjana(Joc[] jocs) {
        if (jocs.length == 0) {
            return 0;
        }
        return totalHores(jocs) / (double) jocs.length;
    }
`,
            sortida: `Total buit: 0
Mitjana buida: 0.0
Mes jugat amb un: Un sol
Mes jugat amb empat: A`
          } },
          { p: 'El cas de l\'empat ens fa una pregunta de programador: si dos jocs tenen les mateixes hores, **quin ha de ser «el més jugat»?** El primer que apareix, el darrer, o tots dos? Eixa decisió no la pren Java: la prens tu, i convé anotar-la.' },
          { nota: { tipus: 'important', text: 'Tractar els casos estranys és el que separa un treball de classe d\'una ferramenta que algú podria usar. Si el teu programa no esclata amb una llista buida, ja et pots plantejar ensenyar-lo.' } }
        ]
      },
      {
        titol: 'Pas 7 · Presentar-lo en tres minuts',
        blocs: [
          { p: 'Un projecte que no s\'explica no existix. El guió de la presentació és sempre el mateix i és molt curt:' },
          { llista: [
            '**Què fa** el programa, en una frase (per a qui no l\'ha vist mai).',
            '**Quines parts** té i quines dades guarda (la llista i l\'esquema).',
            '**Una part de codi** que vulgues mostrar, explicant-la línia a línia.',
            '**Una decisió** que vas prendre tu (què passa amb l\'empat, què passa amb la llista buida).',
            '**Una cosa que t\'ha costat** i com la vas resoldre.',
            '**Una cosa que faries amb una setmana més.**'
          ] },
          { preguntaClasse: 'Si t\'han fet el programa amb una IA i no saps explicar una línia, què és millor: amagar-ho o eixir a la pissarra i arreglar-ho davant de tots?' },
          { nota: { tipus: 'exit', text: 'Saber explicar el teu codi és **la competència més valorada** de totes: en un treball, en un examen i en una entrevista. Un programa menut que saps defensar val més que un projecte gran que no entens.' } }
        ]
      }
    ]
  },

  mini: {
    intro: 'Activitats curtes per a pensar on va tot el que has aprés. Dos o tres minuts cada una.',
    exercicis: [
      {
        id: 'mini9-1', titol: 'Les tres capes', dificultat: 'facil', temps: '3 min',
        enunciat: '**Sense codi:** classifica cada element en una de les tres capes (interfície, lògica o dades) i digues per què: (a) el botó blau de «Enviar» d\'una app; (b) el mètode que comprova si la contrasenya és correcta; (c) la taula on es guarden els usuaris; (d) el missatge «Missatge enviat» que apareix a la pantalla; (e) el bucle que suma els punts d\'una partida.',
        solucio: {
          titol: 'Capes.txt',
          noExecuta: true,
          text: `a) Interfície  → es veu i es toca.
b) Lògica      → és el programa que decidix.
c) Dades       → on es guarda tot, encara que tanques l'app.
d) Interfície  → és una resposta que es mostra a la persona.
e) Lògica      → és el càlcul (un bucle amb un return).

Detall: la lògica i les dades viuen quasi sempre al servidor,
i la interfície al dispositiu de qui usa l'app.`,
          perque: 'Quasi tota aplicació es pot descompondre així. Quan entens les capes, entens què estàs menjant en cada moment del projecte.'
        },
        pista: 'Pregunta\'t: això es veu? es calcula? es guarda per a demà?'
      },
      {
        id: 'mini9-2', titol: 'El mateix bucle, quatre llenguatges', dificultat: 'facil', temps: '3 min',
        enunciat: '**Sense executar res:** digues què fa este trossos de codi i què tenen en comú.',
        codi: {
          titol: 'Quatre.txt',
          noExecuta: true,
          text: `Java:        for (int i = 0; i < v.length; i++) suma = suma + v[i];
Python:      for x in v: suma = suma + x
JavaScript:  for (const x of v) suma = suma + x;
Kotlin:      for (x in v) suma = suma + x`
        },
        exemple: { sortida: 'Tots quatre sumen els elements de la llista v' },
        solucio: {
          titol: 'Quatre.txt',
          noExecuta: true,
          text: `Els quatre fan exactament el mateix: recórrer la llista v
i acumular la suma de tots els seus elements en la variable suma.

Què canvia: la manera d'escriure el bucle. Java i JavaScript
porten les claus i el parèntesi; Python i Kotlin escriuen
"per a cada x dins de v" d'una manera més curta.

Què NO canvia: la idea de recórrer una col·lecció i acumular.
El mateix passa amb if, amb les funcions i amb els objectes.`,
          perque: 'Si entens la idea, el llenguatge és només la manera d\'escriure-la. Per això qui sap programar aprén un llenguatge nou molt més de pressa que qui només ha memoritzat sintaxi.'
        },
        pista: 'No mires la sintaxi: mira què passa amb la variable suma.'
      },
      {
        id: 'mini9-3', titol: 'Quina àrea i què caldria aprendre', dificultat: 'mitjana', temps: '4 min',
        enunciat: 'Per a cada idea, digues en quina **àrea** cau i una cosa nova que hauries d\'aprendre per a fer-la de debò: (a) que el meu coet de cartó esquive parets; (b) una pàgina on la meua classe reserve les pistes de bàsquet; (c) que em diga quines sèries m\'agradaran segons les que he vist; (d) un concurs de contrasenyes per a vore qui la té més forta.',
        solucio: {
          titol: 'Areas.txt',
          noExecuta: true,
          text: `a) Robòtica i IoT     → sensors i motors (connectar el món físic).
b) Web i mòbil        → formularis, servidors i una base de dades.
c) Dades i IA         → comparar gustos i aprendre matemàtiques de recomanació.
d) Ciberseguretat     → com es trenquen les contrasenyes i què les fa fortes.

En les quatre: variables, condicions, bucles, llistes, mètodes
i objectes. La resta s'aprenen damunt d'eixa base.`,
          perque: 'Les àrees no demanen fonaments distints: demanen ferramentes i coneixements afegits damunt de la mateixa base.'
        },
        pista: 'Pensa on passa el programa: en un mòbil, en un servidor, en un robot o damunt de moltes dades.'
      },
      {
        id: 'mini9-4', titol: 'Una API en una línia', dificultat: 'mitjana', temps: '4 min',
        enunciat: 'Escriu un mètode `String resumHores(Joc[] jocs)` que torne un text en format JSON amb el total d\'hores, com el de l\'exemple: `{"total": 245}`. Després digues què caldria canviar perquè eixe text aplegara a un mòbil que el demanara per internet.',
        solucio: {
          titol: 'Resum.java',
          text: `public static String resumHores(Joc[] jocs) {
    int total = 0;
    for (int i = 0; i < jocs.length; i++) {
        total = total + jocs[i].hores;
    }
    return "{\\"total\\": " + total + "}";
}

// Perquè arribe a un mòbil caldria:
//   1. un servici encés que escolte peticions d'internet,
//   2. una adreça publicada (per exemple GET /jocs/total),
//   3. cridar este mètode quan arribe la petició,
//   4. enviar el text de tornada com a resposta,
//   5. que el mòbil llija el JSON i el mostre.
// El mètode de dins és el mateix que has escrit tu.`,
          fitxers: [JOC],
          prova: `
    public static void main(String[] args) {
        Joc[] jocs = {
            new Joc("Minecraft", 120),
            new Joc("FIFA", 45),
            new Joc("Fortnite", 80)
        };
        System.out.println(resumHores(jocs));
    }`,
          sortida: '{"total": 245}',
          perque: 'Una API és un mètode amb una adreça i una resposta en text. La lògica no canvia: canvia el transport.'
        },
        pista: 'Comença pel mètode (que ja saps fer) i després pensa en el «viatge» del text.'
      },
      {
        id: 'mini9-5', titol: 'Predicció amb sensors', dificultat: 'mitjana', temps: '4 min',
        enunciat: 'Pensa primer el resultat i després comprova\'l: què mostrarà este programa? Quants girs farà?',
        codi: {
          titol: 'Sensors.java',
          text: `public class Sensors {
    public static String decidir(int distancia, boolean obstacle) {
        if (obstacle) return "Gira";
        if (distancia < 20) return "Endavant";
        return "Atura";
    }

    public static void main(String[] args) {
        int[] distancies = {10, 10, 40, 5};
        boolean[] obstacles = {false, true, false, true};

        int girs = 0;
        for (int i = 0; i < distancies.length; i++) {
            String orde = decidir(distancies[i], obstacles[i]);
            if (orde.equals("Gira")) girs++;
            System.out.println(orde);
        }
        System.out.println("Girs: " + girs);
    }
}`
        },
        exemple: { sortida: 'Endavant\nGira\nAtura\nGira\nGirs: 2' },
        solucio: {
          titol: 'Sensors.txt',
          noExecuta: true,
          text: `Endavant     (distància 10, sense obstacle)
Gira         (obstacle, sense importar la distància)
Atura        (40 no és < 20 i no hi ha obstacle)
Gira         (obstacle)
Girs: 2`,
          perque: 'L\'orde de les condicions importa: la primera comprova l\'obstacle i mana sobre la distància. Si canviàrem l\'orde, el robot intentaria avançar amb una paret davant.'
        },
        pista: 'Vés cas per cas i apunta el resultat; no t\'avances a la segona condició si la primera ja s\'ha complit.'
      },
      {
        id: 'mini9-6', titol: 'La teua ruta', dificultat: 'repte', temps: '5 min',
        enunciat: '**Sense codi:** escriu el teu pla personal per als pròxims sis mesos amb tres punts: (1) un projecte xicotet que vullgues acabar de veritat; (2) una cosa nova que vullques aprendre i per a què et servirà; (3) com comprovaràs d\'ací a un mes que vas endavant. Escriu-lo en primera persona i sense genèrics («aprendre programació» no val).',
        solucio: {
          titol: 'LaMeuaRuta.txt',
          noExecuta: true,
          text: `EXEMPLE (el teu ha de ser el teu)

1. PROJECTE: un programa que guarde els meus entrenaments
   d'atletisme i em diga la mitjana de temps per setmana.
   → El vull acabat i el vull poder ensenyar.

2. APRENDRE: llegir i escriure en un fitxer de text perquè
   no perdre les dades quan tanque el programa.
   → Servix perquè el meu projecte actual oblida tot al tancar.

3. COMPROVACIÓ: dins d'un mes vull tindre la primera part
   (llegir, guardar, mostrar) funcionant sobre 5 entrenaments
   inventats i explicada a un company en 3 minuts.`,
          perque: 'Un objectiu útil és concret, comprovable i teu. Els plans genèrics («aprendre a programar») no es poden complir ni deixar de complir: per això no motiven.'
        },
        pista: 'Un bon objectiu es pot ensenyar: si no pots dir «el dia 15 vull tindre això funcionant», no és un objectiu.'
      }
    ]
  },

  principals: {
    intro: 'Quatre portes distintes, els mateixos fonaments. Fes-les en l\'orde i escriu tu la solució abans de mirar-la: en totes es prova amb casos normals, límits i dolents.',
    exercicis: [
      {
        id: 'ex9-1', titol: 'El servici del rànquing (API)', dificultat: 'facil', temps: '20 min',
        enunciat: 'Construeix una classe `ServeiRanquing` que tinga: `totalHores(Joc[])`, `mesJugat(Joc[])` i un mètode `respon(String consulta, Joc[] jocs)` que torne un text en JSON per a les consultes `"total"` i `"mes jugat"`, i un JSON d\'error per a qualsevol altra. Al `main`, prova les tres consultes i imprimeix-les.',
        exemple: {
          entrada: `respon("total", jocs)
respon("mes jugat", jocs)
respon("hola", jocs)`,
          sortida: `{"total": 245}
{"mes jugat": "Minecraft", "hores": 120}
{"error": "consulta desconeguda"}`
        },
        solucio: {
          titol: 'ServeiRanquing.java',
          text: `public class ServeiRanquing {

    public static int totalHores(Joc[] jocs) {
        int suma = 0;
        for (int i = 0; i < jocs.length; i++) {
            suma = suma + jocs[i].hores;
        }
        return suma;
    }

    public static Joc mesJugat(Joc[] jocs) {
        Joc millor = jocs[0];
        for (int i = 1; i < jocs.length; i++) {
            if (jocs[i].hores > millor.hores) {
                millor = jocs[i];
            }
        }
        return millor;
    }

    public static String respon(String consulta, Joc[] jocs) {
        if (jocs.length == 0) {
            return "{\\"error\\": \\"no hi ha dades\\"}";
        }
        if (consulta.equals("total")) {
            return "{\\"total\\": " + totalHores(jocs) + "}";
        }
        if (consulta.equals("mes jugat")) {
            Joc millor = mesJugat(jocs);
            return "{\\"mes jugat\\": \\"" + millor.nom + "\\", \\"hores\\": "
                 + millor.hores + "}";
        }
        return "{\\"error\\": \\"consulta desconeguda\\"}";
    }

    public static void main(String[] args) {
        Joc[] jocs = {
            new Joc("Minecraft", 120),
            new Joc("FIFA", 45),
            new Joc("Fortnite", 80)
        };

        System.out.println(respon("total", jocs));
        System.out.println(respon("mes jugat", jocs));
        System.out.println(respon("hola", jocs));
    }
}

class Joc {
    String nom;
    int hores;

    Joc(String nom, int hores) {
        this.nom = nom;
        this.hores = hores;
    }
}`,
          sortida: `{"total": 245}
{"mes jugat": "Minecraft", "hores": 120}
{"error": "consulta desconeguda"}`,
          perque: 'El mètode `respon` és el cor: decidix què s\'ha de fer segons el que li demanen i sempre torna un text, encara que la consulta estiga mal escrita. Això és típic dels servicis: **mai no poden quedar-se callats ni esclatar**.'
        },
        pista: 'Fes primer `respon("total")`, després afegix la segona consulta i, al final, el cas de la consulta desconeguda.'
      },
      {
        id: 'ex9-2', titol: 'El robot que no s\'ix del camí (robòtica)', dificultat: 'mitjana', temps: '25 min',
        enunciat: 'Un robot de línia rep en cada pas un valor de sensor (`0` = línia negra, `1` = blanc) i un nivell de bateria. Escriu un mètode `ordre(int sensor, int bateria)` que torne: `"Càrrega"` si la bateria és 15 o menys; `"Dreta"` si el sensor val 0; `"Esquerra"` si val 1; i `"Atura"` si el sensor és un valor estrany. Al `main`, passa-li una llista de 6 lectures i compta quantes voltes ha girat cap a cada costat.',
        exemple: {
          entrada: `sensors  = {0, 1, 0, 0, 1, 0}
bateries = {80, 80, 80, 70, 70, 10}`,
          sortida: `Dreta
Esquerra
Dreta
Dreta
Esquerra
Càrrega
Girs: dreta 3, esquerra 2`
        },
        solucio: {
          titol: 'RobotLínia.java',
          text: `public class RobotLinia {

    public static String ordre(int sensor, int bateria) {
        if (bateria <= 15) {
            return "Càrrega";
        }
        if (sensor == 0) {
            return "Dreta";
        }
        if (sensor == 1) {
            return "Esquerra";
        }
        return "Atura";
    }

    public static void main(String[] args) {
        int[] sensors = {0, 1, 0, 0, 1, 0};
        int[] bateries = {80, 80, 80, 70, 70, 10};

        int drets = 0;
        int esquerres = 0;

        for (int i = 0; i < sensors.length; i++) {
            String orde = ordre(sensors[i], bateries[i]);
            System.out.println(orde);
            if (orde.equals("Dreta")) {
                drets++;
            }
            if (orde.equals("Esquerra")) {
                esquerres++;
            }
        }
        System.out.println("Girs: dreta " + drets + ", esquerra " + esquerres);
    }
}`,
          sortida: `Dreta
Esquerra
Dreta
Dreta
Esquerra
Càrrega
Girs: dreta 3, esquerra 2`,
          perque: 'L\'orde de les comprovacions és part de la solució: primer la seguretat (bateria) i després la conducció. Si el robot derrapa amb la bateria baixa, l\'avís ja no servix de res.'
        },
        pista: 'Prova també amb un sensor que valga 7: què ha de fer el robot davant d\'una lectura impossible?'
      },
      {
        id: 'ex9-3', titol: 'El comprovador de contrasenyes (ciberseguretat)', dificultat: 'mitjana', temps: '25 min',
        enunciat: 'Fes un programa que avalue una contrasenya i li done una força: **dèbil** (menys de 8 caràcters), **normal** (8 o més), **forta** (8 o més amb un número) i **molt forta** (12 o més amb número i majúscula). A més, que compte quants intents fallits porta l\'usuari i avise quan arribe a 3. Prova\'l amb 4 contrasenyes distintes.',
        exemple: {
          entrada: `"hola"
"contrasenya"
"contrasenya1"
"Contrasenya123"`,
          sortida: `dèbil
normal
forta
molt forta
Intents: 4 → compte amb els intents`
        },
        solucio: {
          titol: 'Contrasenyes.java',
          text: `public class Contrasenyes {

    public static boolean teNumero(String text) {
        for (int i = 0; i < text.length(); i++) {
            if (text.charAt(i) >= '0' && text.charAt(i) <= '9') {
                return true;
            }
        }
        return false;
    }

    public static boolean teMajuscula(String text) {
        for (int i = 0; i < text.length(); i++) {
            if (text.charAt(i) >= 'A' && text.charAt(i) <= 'Z') {
                return true;
            }
        }
        return false;
    }

    public static String forca(String text) {
        if (text.length() < 8) {
            return "dèbil";
        }
        if (text.length() >= 12 && teNumero(text) && teMajuscula(text)) {
            return "molt forta";
        }
        if (teNumero(text)) {
            return "forta";
        }
        return "normal";
    }

    public static void main(String[] args) {
        String[] proves = {"hola", "contrasenya", "contrasenya1", "Contrasenya123"};

        for (int i = 0; i < proves.length; i++) {
            System.out.println(forca(proves[i]));
        }

        int intents = proves.length;
        System.out.println("Intents: " + intents);
        if (intents >= 3) {
            System.out.println("Compte amb els intents");
        }
    }
}`,
          sortida: `dèbil
normal
forta
molt forta
Intents: 4
Compte amb els intents`,
          perque: 'Cada regla és una comprovació menuda (`if` dins de mètodes curts) i l\'orde importa: la longitud és el primer filtre i la resta només s\'aplica si es passa. Dividir les regles en mètodes és exactament la feina del Tema 7.'
        },
        pista: 'Comprova els caràcters comparant-los amb `>= \'0\' && <= \'9\'`: no cal cap ferramenta nova.'
      },
      {
        id: 'ex9-4', titol: 'El primer recomanador (dades i IA)', dificultat: 'repte', temps: '25 min',
        enunciat: 'Tres usuaris tenen una llista de gustos (5 categories, `true`/`false`). Fes un programa que diga: (a) quant coincidix cada usuari amb el primer; (b) quin és el més semblant; (c) què li recomanaries a l\'usuari 1 dels gustos que té el més semblant i ell no. Comença amb dades inventades i després prova amb les teues.',
        exemple: {
          entrada: `gustos = {acció, esports, música, cuina, viatges}
u1 = {true,  false, true,  false, false}
u2 = {true,  true,  true,  false, true}
u3 = {false, true,  false, true,  true}`,
          sortida: `Coincidències amb u2: 2
Coincidències amb u3: 0
Més semblant: u2
Recomanació: esports viatges`
        },
        solucio: {
          titol: 'Recomanador.java',
          text: `public class Recomanador {

    public static int coincidencies(boolean[] a, boolean[] b) {
        int quants = 0;
        for (int i = 0; i < a.length && i < b.length; i++) {
            if (a[i] && b[i]) {
                quants++;
            }
        }
        return quants;
    }

    public static String recomanar(boolean[] meus, boolean[] seus, String[] noms) {
        String resultat = "";
        for (int i = 0; i < meus.length && i < seus.length; i++) {
            if (seus[i] && !meus[i]) {
                resultat = resultat + noms[i] + " ";
            }
        }
        if (resultat.equals("")) {
            return "Res nou per a tu.";
        }
        return resultat;
    }

    public static void main(String[] args) {
        String[] gustos = {"acció", "esports", "música", "cuina", "viatges"};

        boolean[] u1 = {true,  false, true,  false, false};
        boolean[] u2 = {true,  true,  true,  false, true};
        boolean[] u3 = {false, true,  false, true,  true};

        int amb2 = coincidencies(u1, u2);
        int amb3 = coincidencies(u1, u3);

        System.out.println("Coincidències amb u2: " + amb2);
        System.out.println("Coincidències amb u3: " + amb3);

        if (amb2 >= amb3) {
            System.out.println("Més semblant: u2");
            System.out.println("Recomanació: " + recomanar(u1, u2, gustos));
        } else {
            System.out.println("Més semblant: u3");
            System.out.println("Recomanació: " + recomanar(u1, u3, gustos));
        }
    }
}`,
          sortida: `Coincidències amb u2: 2
Coincidències amb u3: 0
Més semblant: u2
Recomanació: esports viatges `,
          perque: 'El recomanador no «entén» res: compara llistes i compta. Els grans sistemes de recomanació fan això mateix amb milions de files i matemàtiques més fines, però la idea de base és eixa i ja la saps fer.'
        },
        pista: 'Resol-ho en dos mètodes (`coincidencies` i `recomanar`) i al `main` només decideixes quin és el més semblant.'
      }
    ]
  },

  reptes: {
    reptes: [
      {
        titol: 'El teu mini projecte, acabat i presentat',
        blocs: [
          { p: 'Este és el repte final del curs: **acabar un programa teu** i presentar-lo. No hi ha solució, perquè la solució és la teua idea i les teues decisions.' },
          { llista: [
            'Tria una idea que t\'agrade i que cape en unes setmanes: rànquing de jocs, control de gastos, playlist, entrenaments, notes de SMX, inventari de cartes, cuina…',
            'Segueix el mètode del Tema 7: **pla, dades, esquelet, una part i una prova, casos límits, millorar**.',
            'Requisits mínims: almenys **4 mètodes** amb bon nom, **una classe** pròpia, un `main` que es llija com un resum i els tres casos provats (normal, límit i dolent).',
            'Documenta\'l en un fitxer `Pla.txt`: què fa, quines parts té, quines decisions vas prendre i què faries amb una setmana més.',
            'Prepara la **presentació de 3 minuts** amb el guió del pas 7 de la sessió guiada.'
          ] },
          { p: '**Entrega:** el codi funcionant, el `Pla.txt` i la presentació feta a classe (o un vídeo de 3 minuts si no es pot presentar en directe).' },
          { p: '**Criteris de valoració:** que el programa funcione amb dades de veritat, que es puga explicar línia a línia, que aguante un cas límit i que la presentació siga clara per a qui no l\'ha vist mai.' }
        ],
        ampliacions: [
          'Guarda les dades en un fitxer de text perquè no es perden quan tanques el programa.',
          'Afig un menú amb bucle (`while`) i una opció per a afegir dades noves.',
          'Fes que un company el prove amb dades seues i detecta almenys un problema que no hauries trobat tu.',
          'Fes una versió «en línia»: explica en un full com es convertiria en un servici amb una API com la de l\'exemple 1.'
        ]
      },
      {
        titol: 'Un programa per a ajudar algú de veritat',
        blocs: [
          { p: 'Els programes útils no són els més grans, són els que algú aprofita. Busca un problema real i menut que afecte algú del teu voltant i resol-lo amb un programa senzill.' },
          { llista: [
            '**Busca** el problema: un càlcul que algú fa a mà cada setmana, una llista que sempre es perd, un recompte que sempre es descompta.',
            '**Pregunta** a la persona afectada: què fa exactament, quines dades usa i què li agradaria no haver de fer mai més.',
            '**Escriu** el programa amb els fonaments que tens. Ha de ser tan simple que la persona l\'use sense manual.',
            '**Comprova** amb dades reals seues (sense posar-les mai en un xat d\'IA) i adapta el que calga.',
            '**Entrega\'l** amb una explicació de mitja pàgina per a algú que no programa.'
          ] },
          { p: '**Entrega:** el programa, l\'explicació, i una resposta honesta a tres preguntes: què li va semblar a la persona, què no va funcionar a la primera i què has après que el professor no t\'havia dit.' }
        ],
        ampliacions: [
          'Fes-li una versió amb menú i una altra pensada per a fer-la servir des del mòbil (descriu com).',
          'Mesura quant temps estalvia: quants minuts tardava a mà i quants tarda ara.',
          'Presenta-ho com un cas real a la classe: problema, persona, solució i mesura de l\'estalvi.'
        ]
      }
    ]
  },

  errors: {
    entradeta: 'Errors de qui està començant a mirar més enllà. Els quatre tenen la mateixa arrel: voler córrer abans de caminar.',
    errors: [
      {
        titol: 'Voler aprendre-ho tot alhora',
        mal: {
          titol: 'PlaDeNou.txt',
          text: `PLA PER ALS PRÒXIMS TRES MESOS

1. Java avançat
2. Python
3. JavaScript i React
4. Kotlin per a Android
5. Ciberseguretat
6. Intel·ligència artificial
7. Kotlin i videojocs
8. Núvol i contenidors
9. Una altra cosa que he vist ahir

(Tres setmanes després: nou carpetes a mig fer i cap programa acabat.)`,
          missatge: 'Cada setmana una cosa nova… i cap projecte que arribe a funcionar.'
        },
        que: 'Fer una llista de tecnologies per a aprendre en compte d\'un projecte per a acabar.',
        perque: 'Cada tecnologia té la seua base, la seua sintaxi i la seua ferramenta; si saltes de l\'una a l\'altra, en totes et quedes a la part fàcil. I sense acabar res, no hi ha res que motiva.',
        detectar: 'Si la teua llista té més de dos temes alhora, o si portes dos setmanes sense res que s\'execute, ja és el senyal.',
        corregir: 'Tria **un projecte** i, si de cas, **una** cosa nova per a eixe projecte. Quan el projecte estiga acabat, tria el següent.',
        bo: {
          titol: 'PlaAmbSentit.txt',
          text: `PLA PER ALS PRÒXIMS TRES MESOS

PROJECTE (el que importa): programa de gastos per a mi
  - Setmana 1: llegir i mostrar ✔
  - Setmana 2: total i mitjana ✔
  - Setmana 3: guardar en un fitxer ← cosa nova a aprendre
  - Setmana 4: puleix-ho i presentar-ho ✔

DESPRÉS, si l'he acabat: mire si vull web o mòbil.
UNA COSA CADA VEGADA.`
        }
      },
      {
        titol: 'Copiar codi que és d\'un altre llenguatge',
        mal: {
          titol: 'Barreja.java',
          text: `String[] noms = {"Ana", "Bruno", "Carla"};

int quants = len(noms);                  // açò és Python
String gran = noms[0].toUpperCase();     // Java: es fa amb majúscula
System.out.println(quants + " noms");`,
          missatge: 'error: cannot find symbol — method len(String[])'
        },
        que: 'Copiar una línia que funciona en un altre llenguatge sense adaptar-la.',
        perque: 'Cada llenguatge té les seues ferramentes: `len(noms)` en Python és `noms.length` en Java, i `toUpperCase` existix en Java però `toUpper` en Kotlin. Copiar sense adaptar dona errors o, pitjor, fa coses distintes de les que creus.',
        detectar: 'Si el compilador diu «cannot find symbol» en una línia que pareix de manual, sospita: eixa línia ve d\'un altre llenguatge.',
        corregir: 'Busca com es fa **en Java** i comprova el tipus del resultat. Si no estàs segur, escriu-ho amb el que ja saps (un bucle i un comptador) en compte d\'usar una drecera.',
        bo: {
          titol: 'BenFet.java',
          text: `String[] noms = {"Ana", "Bruno", "Carla"};

int quants = noms.length;                 // la llargària d'un array
String gran = noms[0].toUpperCase();      // passa a majúscules

System.out.println(quants + " noms");     // 3 noms`
        }
      },
      {
        titol: 'Vull fer WhatsApp per a demà',
        mal: {
          titol: 'IdeaMassaGran.txt',
          text: `"Vull fer una app de missatgeria: xat, vídeo, grups, estats,
 trucades, bots, pagaments, versió per a Android i per a iPhone."

Data d'entrega: divendres.

(No s'ha escrit ni la primera línia: no se sap per on començar.)`,
          missatge: 'Un projecte tan gran no comença: s\'abandona.'
        },
        que: 'Triar una idea enorme sense decidir la versió mínima que hauria de funcionar.',
        perque: 'Els projectes grans es fan afegint coses a una versió xicoteta que ja funciona. Si comences per la idea final, no tindràs mai res per a provar ni per a ensenyar.',
        detectar: 'Si la descripció del projecte no cap en una frase i no pots dir què faràs hui, és massa gran.',
        corregir: 'Defineix la **versió mínima**: la cosa més menuda que ja és útil. En un xat podria ser «una pantalla on escrius un missatge i es guarda en una llista»: això ja funciona, ja s\'executa i ja es pot millorar.',
        bo: {
          titol: 'VersioMinima.txt',
          text: `VERSIÓ MÍNIMA (hui)

Una llista de missatges d'un sol usuari:
  - escriure un missatge i guardar-lo
  - veure la llista de missatges
  - comptar quants n'hi ha

Quan això funcione: destinataris, grups, xarxa…
Les funcions grans s'afigen damunt d'alguna cosa que ja funciona.`
        }
      },
      {
        titol: 'Guardar el projecte com a "v3_definitiu_ara_si"',
        mal: {
          titol: 'Carpeta.txt',
          text: `Projecte/
  Ranquing.java
  Ranquing_v2.java
  Ranquing_v2_bona.java
  Ranquing_v3_definitiu.java
  Ranquing_v3_definitiu_ara_si.java
  Ranquing_FINAL.java
  Ranquing_FINAL_amb_ajuda.java
  Ranquing_FINAL_bo.java        ← este és el que funciona

(Dos dies després: cap d'eixos fitxers s'executa sol.)`,
          missatge: 'Tres versions distintes del mateix fitxer i cap manera de saber què va canviar ni de tornar arrere.'
        },
        que: 'Guardar les versions copiant fitxers amb noms nous en compte de controlar les versions.',
        perque: 'Quan alguna cosa deixa de funcionar, no saps què vas canviar; i quan treballes amb algú altre, no sabeu qui ha fet què. Un projecte gran no es pot mantindre així.',
        detectar: 'Si tens dos fitxers iguals amb noms distints, o si dubtes de quin és «el bo», ja tens el problema.',
        corregir: 'Un **sol fitxer** que sempre s\'executa i un **sistema de versions** (com Git) que guarda l\'història de tot el que has fet. Així pots tornar arrere quan calga.',
        bo: {
          titol: 'AmbVersions.txt',
          text: `Projecte/
  Ranquing.java            ← l'únic fitxer, sempre el que funciona

I l'història, guardada pel sistema de versions:

  git add Ranquing.java
  git commit -m "Mostra els jocs i suma les hores"

  git add Ranquing.java
  git commit -m "Afig la mitjana i el cas de llista buida"

(Es pot tornar a qualsevol moment anterior. Sempre hi ha un «bo».)`
        }
      }
    ]
  },

  resum: {
    entradeta: 'Últim resum del curs. Estes deu idees són les que t\'has d\'endur quan tanques els apunts.',
    idees: [
      'Tota aplicació té **tres peces**: interfície, lògica i dades.',
      'Els programes **parlen entre ells** amb peticions i respostes; una **API** és un mètode amb adreça.',
      'El **mateix fonament** servix per a un joc, un robot, un servici web o una app de salut.',
      'Els **fonaments es transferixen** entre llenguatges: canvia la manera d\'escriure-ho, no les idees.',
      'Les àrees més habituals: web i mòbil, APIs, jocs, dades i IA, robòtica i IoT, ciberseguretat, núvol i agents.',
      '**Les ferramentes canvien; els fonaments es queden.** Saber programar no caduca.',
      'Es continua aprenent amb **projectes acabats**, llegint codi dels altres, llegint errors i compartint.',
      'Es tria què aprendre **pel projecte**, no per la moda del mes.',
      'El codi decidix sobre persones: **dades mínimes, permisos clars i responsabilitat** de qui l\'ha escrit.',
      'La competència més valorada és **saber explicar el teu codi**; i el millor senyal de progrés és tindre alguna cosa acabada i teua.'
    ]
  },

  autoavaluacio: {
    entradeta: 'Última autoavaluació del curs. Nou preguntes per a vore si has entés on va tot el que has aprés i què vols fer a partir d\'ara.',
    preguntes: [
      {
        pregunta: 'Quines són les tres peces que té qualsevol aplicació?',
        opcions: [
          'a) L\'ordinador, el mòbil i internet.',
          'b) La interfície, la lògica del programa i les dades.',
          'c) El codi, els errors i les proves.'
        ],
        resposta: 'b) Interfície, lògica i dades.',
        perque: 'La interfície parla amb la persona, la lògica decidix i calcula, i les dades guarden el resultat per a quan tornes. La major part del que has aprés viu en la lògica.'
      },
      {
        pregunta: 'Amb una frase i amb les teues paraules: què és una API?',
        resposta: 'Un conjunt de coses que un programa deixa fer a uns altres; per exemple, un mètode que **es pot cridar des d\'un altre programa per internet** i que respon amb un resultat (moltes voltes, text en format JSON).',
        perque: 'Dins continua havent un mètode amb el seu `return`: el que canvia és com arriba la petició i com torna la resposta.'
      },
      {
        pregunta: 'Si l\'any que ve canvies Java per un altre llenguatge, començaràs de zero?',
        resposta: '**No.** Les idees són les mateixes: variables, condicions, bucles, arrays, mètodes, objectes, provar i dividir el problema. Canvia la manera d\'escriure-ho i el nom d\'algunes ferramentes.',
        perque: 'Per això els fonaments es queden: qui sap programar aprén un llenguatge nou molt més de pressa que qui només ha memoritzat sintaxi.'
      },
      {
        pregunta: 'Açò és el cor d\'un servici. Què mostrarà per pantalla?',
        codi: {
          titol: 'Pregunta.java',
          text: `public static String resum(int[] hores) {
    int total = 0;
    for (int i = 0; i < hores.length; i++) {
        total = total + hores[i];
    }
    return "{\\"total\\": " + total + "}";
}

public static void main(String[] args) {
    System.out.println(resum(new int[]{3, 5, 2}));
}`
        },
        resposta: '`{"total": 10}`',
        perque: 'Suma 3 + 5 + 2 = 10 i el mètode torna un text amb eixa estructura. És el format JSON que els programes es passen entre ells per a entendre\'s.'
      },
      {
        pregunta: 'Vull fer una app per a reservar les pistes del centre. Digues en quines tres peces es dividix i una cosa que hauries d\'aprendre per a cada una.',
        resposta: '**Interfície:** una pantalla o pàgina on triar dia i hora → aprendre formularis i disseny. **Lògica:** comprovar si la pista està lliure, guardar la reserva → això ja el saps fer amb `if`, bucles i mètodes. **Dades:** guardar les reserves per a demà → aprendre bases de dades. I perquè es comuniquen, una **API**.',
        perque: 'Fixat que la peça del mig —la lògica— **ja la saps fer**. El que cal aprendre és el transport (API) i el guardat (base de dades), no els fonaments.'
      },
      {
        pregunta: 'Un company diu: «començaré pel framework de moda i després ja aprendré a programar». Què li contestaries?',
        resposta: 'Que les ferramentes de moda canvien cada pocs mesos i que, sense fonaments, no sabrà ni arreglar un error ni adaptar el codi quan la ferramenta canvie. És millor **un projecte propi, acabat**, amb el que ja sap, i aprendre la ferramenta quan el projecte la demane.',
        perque: 'El criteri és sempre el mateix: primer el «què vull construir», després el «amb què ho construïsc».'
      },
      {
        pregunta: 'T\'encarreguen una app de missatgeria i «l\'has de tindre per a divendres». Què proposes tu?',
        resposta: 'Una **versió mínima que funcione**: una llista de missatges d\'un sol usuari, escriure\'n un, veure\'ls i comptar-los. Amb això ja s\'executa, s\'ensenya i es pot millorar. Després s\'afig destinataris, grups i xarxa, un a un.',
        perque: 'Els projectes grans no comencen grans: comencen funcionant i creixen. Dir «no» a l\'abast és una habilitat professional.'
      },
      {
        pregunta: 'Un programa decidix qui rep una beca. Quines coses hauries de comprovar, a més de que el codi funcione?',
        resposta: 'Amb quines **dades** decidix i si són les mínimes, qui pot vore-les, si la decisió **es pot explicar** a qui l\'ha patida, què passa si s\'equivoca (que hi haja manera de reclamar) i **qui respon** del resultat.',
        perque: 'Quan el codi afecta la vida de persones, la responsabilitat no desapareix darrere del programa: sempre hi ha algú que respon del que fa.'
      },
      {
        pregunta: 'Tanca el curs amb un objectiu: què voldràs tindre acabat d\'ací a tres mesos? Escriu-lo de manera que es puga comprovar si ho has fet o no.',
        resposta: 'Un objectiu útil és concret: *«tindre un programa de control de gastos que guarde les dades en un fitxer i mostrar-lo a classe»*. Comprovable vol dir que un altre pot mirar-ho i dir «sí» o «no», sense interpretacions.',
        perque: 'Els objectius concrets i comprovables es complixen molt més que els genèrics: són els que convertixen el que has aprés en un projecte de debò.'
      }
    ]
  },

  diapositives: {
    objectiu: 'Vore on va tot el que has aprés: quines peces té qualsevol aplicació, què permeten les grans àrees de la programació, què es queda per sempre i com continuar aprenent amb un projecte propi.',
    index: [
      'Les tres peces de tota aplicació',
      'API: mètodes que parlen per internet',
      'El mateix en tots els llenguatges',
      'Les grans àrees',
      'El mateix codi en un joc, un robot i un servici',
      'Els nou fonaments que es queden',
      'Com es continua aprenent',
      'Com triar què aprendre',
      'El codi decidix sobre persones',
      'El teu mini projecte'
    ],
    blocs: [
      {
        tipus: 'concepte',
        titol: 'El teu matí és ple de programes',
        bullets: [
          'L\'alarma, el grup de classe, la música, el joc, l\'autobús, el temps',
          'Darrere hi ha programes que parlen amb altres programes',
          'I no hi ha cap idea nova dins: variables, condicions, bucles, llistes, funcions',
          'Hui mirem on va això i triem el teu camí'
        ],
        notes: 'Començar amb un matí real d\'un alumne i preguntar quants programes hi haurà darrere de cada moment.'
      },
      {
        tipus: 'esquema',
        titol: 'Les tres peces',
        flux: ['Interfície', 'Lògica del programa', 'Dades'],
        nota: 'La interfície parla amb la persona, la lògica decidix, les dades guarden. Tot el que has aprés viu al mig.'
      },
      {
        tipus: 'concepte',
        titol: 'Quan polses «Enviar»',
        bullets: [
          'La interfície munta un missatge',
          'Viatja per internet fins a un servidor',
          'La lògica comprova i calcula; les dades guarden',
          'Torna la resposta: «guardat», «incorrecte», els punts nous…'
        ],
        notes: 'Dibuixar-ho a la pissarra amb quatre fletxes. És la mateixa pel·lícula en tota app.'
      },
      {
        tipus: 'codi',
        titol: 'Una API és un mètode amb adreça',
        codi: 'public static int totalPunts(Jugador[] jugadors) {\n    int suma = 0;\n    for (int i = 0; i < jugadors.length; i++) {\n        suma = suma + jugadors[i].punts;\n    }\n    return suma;\n}',
        sortida: 'GET /torneig/total  →  {"total": 395}',
        notes: 'El mateix mètode que van escriure ells al Tema 5. L\'API només afig el transport.'
      },
      {
        tipus: 'comparacio',
        titol: 'El mateix bucle, en quatre llenguatges',
        esquerra: { titol: 'Amb claus i parèntesi', bullets: ['Java: for (int i = 0; …)', 'JavaScript: for (const x of v)'] },
        dreta: { titol: 'Més curt', bullets: ['Python: for x in v:', 'Kotlin: for (x in v)'] }
      },
      {
        tipus: 'concepte',
        titol: 'Canvia la manera d\'escriure, no la idea',
        bullets: [
          'Recórrer una llista es fa igual a tot arreu',
          'També decidir, repetir, agrupar en funcions i crear objectes',
          'Si canvie de llenguatge, no comence de zero',
          'Comence del capítol dos'
        ],
        notes: 'Convencer-los que el que han aprés és transferible: és el missatge central del tema.'
      },
      {
        tipus: 'esquema',
        titol: 'Les grans àrees',
        flux: ['Web i mòbil', 'APIs', 'Jocs', 'Dades i IA', 'Robòtica i IoT', 'Ciberseguretat', 'Núvol', 'Agents'],
        nota: 'No cal aprendre-les totes: cal saber que existixen i què permeten.'
      },
      {
        tipus: 'comparacio',
        titol: 'Mateixa idea, llocs distints',
        esquerra: { titol: 'Canvia', bullets: ['El dibuix i el temps real en un joc', 'Sensors i motors en un robot', 'Xarxa i molta gent en un servici', 'La legalitat i les dades sensibles'] },
        dreta: { titol: 'No canvia', bullets: ['La condició', 'El bucle', 'Les dades que es guarden', 'Provar i dividir el problema'] }
      },
      {
        tipus: 'codi',
        titol: 'El primer recomanador',
        codi: 'public static int coincidencies(boolean[] a, boolean[] b) {\n    int quants = 0;\n    for (int i = 0; i < a.length; i++) {\n        if (a[i] && b[i]) quants++;\n    }\n    return quants;\n}',
        sortida: 'Coincidències amb u2: 2',
        notes: 'Amb dos usuaris és una curiositat; amb milions i matemàtiques fines és el motor d\'una plataforma.'
      },
      {
        tipus: 'concepte',
        titol: 'Els nou fonaments que es queden',
        bullets: [
          'Variables i tipus · decisions · bucles',
          'Llistes i límits · dividir en parts · objectes',
          'Provar · llegir codi i errors · treballar en equip',
          'Pots canviar de llenguatge o d\'editor en un cap de setmana',
          'Canviar de fonaments no es fa en un any'
        ],
        notes: 'Dir-ho clar: este llistat és el que s\'emporten del curs i no caduca.'
      },
      {
        tipus: 'esquema',
        titol: 'Com es continua aprenent',
        flux: ['Domina el que saps', 'Un projecte xicotet i acabat', 'Llig codi dels altres', 'Aprén Git', 'Documentació i errors', 'Compartix i pregunta'],
        nota: 'El millor senyal de progrés no és «sé molt», és «he acabat un projecte menut».'
      },
      {
        tipus: 'comparacio',
        titol: 'Com triar què aprendre',
        esquerra: { titol: 'Mal senyal', bullets: ['Aprendre la moda del mes', 'Nou temes alhora', 'Tutorials sense acabar mai res', 'Copiar sense entendre'] },
        dreta: { titol: 'Bon senyal', bullets: ['Un projecte que vull acabar', 'Una tecnologia nova per projecte', 'Coses funcionant cada setmana', 'Poder explicar el codi'] }
      },
      {
        tipus: 'pregunta',
        titol: 'Pensem un moment',
        pregunta: 'Per què un programa de 40 línies que saps explicar val més que un de 400 que no entens?'
      },
      {
        tipus: 'concepte',
        titol: 'El codi decidix sobre persones',
        bullets: [
          'Dades mínimes i permisos clars',
          'Si s\'equivoca, hi ha d\'haver manera de reclamar',
          'Cal poder explicar la decisió a qui la patix',
          'Sempre hi ha una persona responsable del programa'
        ],
        notes: 'Exemples reals: beques, descomptes, avisos mèdics, accés a servicis. Breu i clar.'
      },
      {
        tipus: 'activitat',
        titol: 'El teu mini projecte',
        enunciat: 'Tria una idea que t\'agrade, que cape en unes setmanes i que tinga dades. Escriu el pla (parts i dades), l\'esquelet amb el menú i una primera part funcionant. Porta-ho provat amb un cas normal i un cas límit.',
        temps: 'la resta de la sessió',
        pistes: ['Pla, dades, esquelet, una part i una prova', 'Almenys 4 mètodes i una classe pròpia', 'Presentació de 3 minuts explicant el codi'],
        notes: 'Acompanyar-los pel pla: la major part dels projectes que s\'encallen ho fan perquè han triat una idea massa gran.'
      },
      {
        tipus: 'pregunta',
        titol: 'L\'última pregunta del curs',
        pregunta: 'Si dins d\'un any hagueres d\'ensenyar a algú una cosa que has aprés ací, quina seria? I què construiràs amb ella?'
      }
    ],
    resum: [
      'Tota aplicació té interfície, lògica i dades.',
      'Una API és un mètode que parla per internet i respon en text.',
      'Els fonaments són els mateixos en totes les àrees i tots els llenguatges.',
      'Canviar de llenguatge o d\'editor és fàcil; canviar de fonaments, no.',
      'Es continua aprenent amb projectes acabats, llegint codi, errors i documentació.',
      'Es tria què aprendre pel projecte, no per la moda.',
      'El codi decidix sobre persones: dades mínimes i responsabilitat.',
      'Saber explicar el teu codi és la competència més valorada.',
      'El millor final del curs és tindre alguna cosa acabada i teua.'
    ],
    seguent: 'El teu projecte comença ara'
  }
};
