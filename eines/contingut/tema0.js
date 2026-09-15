/* ==========================================================================
   TEMA 0 · Què és programar?  —  contingut de la pàgina
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   Este fitxer és la font: amb `node eines/genera-temes.mjs 0` es generen
   temes/tema0.html i assets/js/diapositives/tema0.js
   ========================================================================== */
globalThis.TEMA = {
  n: 0,
  titol: 'Què és programar?',
  subtitol: 'El primer contacte: instruccions, codi font i el nostre «Hola món!»',
  durada: 'Sessió curta d\'introducció',

  hero: {
    etiqueta: 'Tema 0 · Introducció al curs',
    entradeta: 'Abans de saber escriure codi cal entendre què és programar: donar instruccions ordenades a un ordinador. En esta sessió escriurem i executarem el nostre primer programa de veritat.',
    meta: [
      '⏱ Sessió curta',
      '🚀 Primer contacte',
      '⌨️ Escriurem codi des del minut zero',
      '☕ Java'
    ]
  },

  introduccio: {
    titol: 'Una situació per començar',
    emoji: '⏰',
    blocs: [
      { p: '**Sona el despertador del mòbil.** I si el mòbil tinguera una alarma que sona cada dia a les 7:00, però només si l\'endemà tens classe? Algú ha hagut d\'escriure, pas a pas, què ha de fer el telèfon: *mira l\'hora*, *mira el calendari*, *si demà hi ha classe, sona*.' },
      { p: 'Això és programar. Un programa no és màgia ni intel·ligència: són **instruccions ordenades** que algú ha pensat abans. Si canvies l\'orde, o si t\'oblides una instrucció, el resultat canvia.' },
      { p: 'Durant 10 sessions aprendrem a escriure eixes instruccions en **Java**. Començarem per un programa que només escriu un missatge per pantalla i acabarem construint programes amb dades, decisions, bucles i objectes.' }
    ],
    plan: [
      ['10-15 min', 'Què significa programar'],
      ['15-20 min', 'Del codi font al programa'],
      ['20-25 min', 'El nostre «Hola món!»'],
      ['10 min', 'Repte de tancament']
    ],
    prerequisits: [
      'Cap coneixement de programació. Comencem de zero.',
      'Un ordinador amb navegador web (els primers dies no cal instal·lar res).',
      'Ganes de provar coses i de trencar-les per vore què passa.'
    ]
  },

  objectius: {
    intro: 'En acabar esta sessió has de saber explicar i fer estes coses:',
    llista: [
      'Explicar amb les teues paraules què és programar i què és un programa.',
      'Reconéixer què és el codi font i per a què servix un compilador.',
      'Escriure i executar un programa senzill que mostre text per pantalla.',
      'Modificar un programa perquè faça una altra cosa.',
      'Llegir un missatge d\'error bàsic i trobar què falta.'
    ]
  },

  teoria: {
    titol: 'Teoria, poc a poc',
    entradeta: 'Cada idea va amb un exemple. No cal memoritzar res: cal entendre-ho.',
    blocs: [
      { h3: '1. Programar és donar ordres ordenades' },
      { p: 'Una recepta de cuina és un programa: si canvies l\'orde de les passes, ix malament. La diferència és que ací qui executa les instruccions és un ordinador, que és molt ràpid però **no entén res si no li ho diem exactament**.' },
      { p: 'Un ordinador no endevina. Si li demanes «fes la mitjana de les notes», no sap fer-ho. Cal dir-li: *demana les notes*, *suma-les*, *dividix per quantes n\'hi ha*, *mostra el resultat*.' },
      { llista: [
        '**Pensar** el problema: què volem aconseguir?',
        '**Dividir-lo** en passos xicotets i ordenats.',
        '**Escriure** eixos passos en un llenguatge que l\'ordinador entenga.',
        '**Provar** si funciona i corregir el que faça falta.'
      ] },

      { h3: '2. Què és un programa' },
      { p: 'Un programa és un conjunt d\'instruccions guardades en un fitxer que l\'ordinador pot executar. Quan l\'executes, les instruccions es fan **en orde**, una darrere d\'una altra, de dalt a baix.' },
      { nota: { tipus: 'info', text: 'Nota mental: si el programa fa una cosa que no esperàvem, normalment és perquè **l\'orde de les instruccions** no és el que pensàvem.' } },

      { h3: '3. Un llenguatge de programació' },
      { p: 'Per escriure eixes instruccions fem servir un **llenguatge de programació**: un idioma artificial amb regles. Nosaltres farem servir **Java**.' },
      { p: 'Per què Java? Perquè és molt estés (aplicacions, servidors, Android, videojocs), perquè té una comunitat enorme on buscar ajuda i, sobretot, perquè és **estricte**: t\'obliga a dir de quin tipus és cada dada. Eixa exigència, que al principi molesta, ajuda a entendre què està passant dins del programa. És un idioma més per aprendre, i els idiomes s\'aprenen practicant.' },

      { h3: '4. Del codi font al programa' },
      { p: 'Quan escrivim, el que tenim és **codi font**: les instruccions escrites per nosaltres (`HolaMon.java`). L\'ordinador entén este codi directament? No. Cal traduir-lo.' },
      { graella: [
        { emoji: '📝', titol: 'Codi font', text: 'El que escrivim nosaltres: `HolaMon.java`. Es pot llegir, se li poden posar comentaris i es pot corregir.' },
        { emoji: '⚙️', titol: 'Compilació', text: 'Un programa anomenat **compilador** revisa el codi i el traduïx. Si hi ha un error, s\'atura i ens avisa.' },
        { emoji: '📦', titol: 'Fitxer executable', text: 'El resultat de compilar. Ja no el llegim nosaltres: el llegix la màquina virtual de Java.' },
        { emoji: '▶️', titol: 'Execució', text: 'La **màquina virtual** (JVM) executa eixe fitxer i fa les instruccions. Ací veiem el resultat.' }
      ], columnes: 4 },
      { nota: { tipus: 'tip', text: 'Si el compilador s\'atura, no passa res: **ens està ajudant**. Ens diu la línia on s\'ha perdut i què no entén. Revisar eixe missatge és part del treball.' } },

      { h3: '5. Com executem el programa' },
      { p: 'Hi ha dos camins, i els dos són vàlids: **en línia** (escrius el codi al navegador i polses «Executar») o **al teu ordinador** (instal·les Java i un editor). El codi que escriurem és exactament el mateix en tots dos casos.' },
      { p: 'Els primers dies fem servir un entorn en línia: no caldrà instal·lar res i podrem provar coses des del mateix navegador.' },

      { h3: '6. El nostre primer programa' },
      { p: 'Mira\'l bé: només hi ha una instrucció que fa faena, la de dins. Les altres són la **carcassa** que Java necessita per arrancar.' },
      { codi: {
        titol: 'HolaMon.java',
        etiqueta: 'EL PRIMER PROGRAMA',
        text: `public class HolaMon {
    public static void main(String[] args) {
        System.out.println("Hola món!");
    }
}`,
        sortida: 'Hola món!'
      } },
      { p: '`System.out.println("...")` vol dir, en llenguatge de persones: *«System, trau (out) per pantalla i imprimeix una línia (println) amb este text»*. El text va sempre **entre cometes dobles**.' },
      { p: 'S\'acaba amb un **punt i coma** (`;`). En Java, cada instrucció s\'acaba amb `;`, com un punt al final d\'una frase. Si l\'oblides, el compilador s\'atura ahí mateix i t\'ho diu.' },
      { notatecnica: 'Les línies `public class HolaMon {` i `public static void main(String[] args) {` (i les dos claus `}`) són la carcassa del programa. Ja arribarem més avant a entendre-les.' },

      { h3: '7. El nom del fitxer té normes' },
      { p: 'El fitxer ha de dir-se igual que la classe pública que hi ha dins. Si la classe és `HolaMon`, el fitxer serà `HolaMon.java`. Si els canviem de nom, Java no el troba.' },
      { nota: { tipus: 'avis', text: 'Java distingix **majúscules i minúscules**: `System`, `String` i `HolaMon` comencen amb majúscula per conveni, i `println` va tot en minúscules. Escriure `Println` o `system` no funciona.' } }
    ]
  },

  exemples: {
    titol: 'Exemples explicats pas a pas',
    entradeta: 'Cada exemple: què volem aconseguir, el codi, què apareix per pantalla i per què funciona.',
    blocs: [
      { h3: 'Exemple 1 · Un missatge de benvinguda' },
      { p: '**Què volem?** Que el programa ens salude pel nostre nom.' },
      { codi: {
        titol: 'Benvinguda.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Benvinguda {
    public static void main(String[] args) {
        System.out.println("Hola! Sóc el teu primer programa.");
        System.out.println("Em diuen Java i estic aprenent amb tu.");
    }
}`,
        sortida: `Hola! Sóc el teu primer programa.
Em diuen Java i estic aprenent amb tu.`
      } },
      { p: '**Per què funciona:** cada `println` escriu una línia i, en acabar, baixa a la següent. Si haguérem escrit `print` (sense `ln`), tot eixiria enganxat en una sola línia.' },

      { h3: 'Exemple 2 · Una targeta de presentació' },
      { p: '**Què volem?** Presentar-nos amb diverses línies, com si fora una fitxa.' },
      { codi: {
        titol: 'Presentacio.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Presentacio {
    public static void main(String[] args) {
        System.out.println("=== FITXA DE L'ALUMNE ===");
        System.out.println("Nom:   Ana");
        System.out.println("Curs:  SMX");
        System.out.println("Nivell: principiant absolut");
    }
}`,
        sortida: `=== FITXA DE L'ALUMNE ===
Nom:   Ana
Curs:  SMX
Nivell: principiant absolut`
      } },
      { p: '**Per què funciona:** l\'apòstrof dins del text no dona problemes, però hem d\'anar amb compte amb les **cometes dobles**: si volem escriure una cometa dins del text, hem d\'escriure-la com a `\\"`.' },

      { h3: 'Exemple 3 · Un dibuix fet amb text' },
      { p: '**Què volem?** Dibuixar una cosa amb caràcters, com es fa als videojocs antics. Ací es veu molt bé que l\'orde de les instruccions és el que crea la forma.' },
      { codi: {
        titol: 'Dibuix.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Dibuix {
    public static void main(String[] args) {
        System.out.println("   *   ");
        System.out.println("  ***  ");
        System.out.println(" ***** ");
        System.out.println("*******");
        System.out.println("   |   ");
    }
}`,
        sortida: `   *
  ***
 *****
*******
   |`
      } },
      { p: '**Per què funciona:** cada línia té una quantitat d\'espais diferent davant de l\'asterisc. Eixos espais són els que fan que la forma crèixca cap als costats.' },

      { h3: 'Què apareixerà per pantalla?' },
      { p: 'Pensa-ho abans d\'executar. Fixa\'t sobretot en la tercera línia.' },
      { prediccio: {
        id: 'pred-tema0',
        titol: 'Pensa abans d\'executar',
        fitxer: 'Comptador.java',
        text: `public class Comptador {
    public static void main(String[] args) {
        System.out.println("Nivell 1");
        System.out.println("Nivell 1 + 1");
    }
}`,
        sortida: `Nivell 1
Nivell 1 + 1`,
        perque: 'Java no fa les operacions que estan dins de les cometes: allí tot és **text**. Perquè sumara de veritat, no podríem posar les cometes al voltant de l\'operació.'
      } }
    ]
  },

  guiada: {
    titol: 'Programació guiada: ho fem junts',
    entradeta: 'Escrivim el nostre primer programa des de zero, pas a pas. No mirem la solució: la construïm.',
    passos: [
      {
        titol: 'Pensem què volem fer i com es diu el fitxer',
        blocs: [
          { p: 'Volem un programa que es diga **ElMeuPrimerPrograma** i que ens salude, diga el curs i ens desitge sort.' },
          { preguntaClasse: 'Si la classe es dirà `ElMeuPrimerPrograma`, com s\'haurà de dir el fitxer?' },
          { p: 'El fitxer serà **`ElMeuPrimerPrograma.java`**. Ací ja hem après la primera norma de Java.' }
        ]
      },
      {
        titol: 'Escrivim la carcassa buida i comprovem que arranca',
        blocs: [
          { p: 'Dins de la carcassa no hi ha res encara. Provem-ho: un programa buit **no fa res i no dona error**. Si donara error, sabríem que el problema està en la carcassa.' },
          { codi: {
            titol: 'ElMeuPrimerPrograma.java',
            etiqueta: 'PAS 2',
            text: `public class ElMeuPrimerPrograma {
    public static void main(String[] args) {
        // ací dins escriurem les nostres instruccions
        // les dues barres fan que Java no llija la línia
    }
}`
          } }
        ]
      },
      {
        titol: 'Afegim la primera instrucció',
        blocs: [
          { p: 'Una sola línia, i la provem. Sempre: una cosa, provar, i continuar.' },
          { codi: {
            titol: 'ElMeuPrimerPrograma.java',
            etiqueta: 'PAS 3',
            text: `public class ElMeuPrimerPrograma {
    public static void main(String[] args) {
        System.out.println("Bon dia! Soc el teu programa.");
    }
}`,
            sortida: 'Bon dia! Soc el teu programa.'
          } },
          { preguntaClasse: 'I si llevem el punt i coma? Provem-ho, a vore què diu el compilador.' }
        ]
      },
      {
        titol: 'Afegim més instruccions i cuidem l\'aspecte',
        blocs: [
          { p: 'Ara afegim les altres dos línies. Els espais i els salts de línia **no** afecten el resultat: escrivim el codi de manera que es llija bé.' },
          { codi: {
            titol: 'ElMeuPrimerPrograma.java',
            etiqueta: 'PAS 4',
            text: `public class ElMeuPrimerPrograma {
    public static void main(String[] args) {
        System.out.println("Bon dia! Soc el teu programa.");
        System.out.println("Este curs aprenem a programar en Java.");
        System.out.println("Esperem que t'ho passes bé!");
    }
}`,
            sortida: `Bon dia! Soc el teu programa.
Este curs aprenem a programar en Java.
Esperem que t'ho passes bé!`
          } },
          { p: 'La indentació (els espais del començament de cada línia) no és obligatòria per a Java, però ens ajuda a vore què hi ha dins de què.' }
        ]
      },
      {
        titol: 'Trenquem-lo a propòsit',
        blocs: [
          { p: 'Últim pas i el més important: provoca errors. Lleva una cometa, canvia una majúscula, borra un parèntesi. Llig què diu el compilador cada vegada.' },
          { codi: {
            titol: 'Error provocat',
            etiqueta: 'PROVEM',
            mal: true,
            text: `System.out.println("Bon dia!);
        }`,
            missatge: `error: unclosed string literal
        System.out.println("Bon dia!);
                           ^
error: ';' expected
2 errors`
          } },
          { p: 'El compilador ens diu **unclosed string literal**: «tens una cadena de text sense tancar». I assenyala amb `^` exactament el lloc on s\'ha perdut. Saber llegir eixa fletxa és mig treball de programador.' }
        ]
      }
    ]
  },

  mini: {
    intro: 'Activitats molt curtes: un minut o dos cada una. Es fan a classe mateix.',
    exercicis: [
      {
        id: 'mini1', titol: 'Canvia el missatge', dificultat: 'facil', temps: '1 min',
        enunciat: 'Escriu un programa que mostre per pantalla el teu nom.',
        solucio: {
          titol: 'ElMeuNom.java',
          text: `public class ElMeuNom {
    public static void main(String[] args) {
        System.out.println("Ana");
    }
}`,
          sortida: 'Ana',
          perque: 'Has canviat només el text que hi ha entre cometes. La carcassa és la mateixa de sempre.'
        }
      },
      {
        id: 'mini2', titol: 'Tres línies', dificultat: 'facil', temps: '2 min',
        enunciat: 'Mostra tres línies: el teu nom, el teu curs i el teu institut.',
        solucio: {
          titol: 'TresLinies.java',
          text: `public class TresLinies {
    public static void main(String[] args) {
        System.out.println("Nom: Ana");
        System.out.println("Curs: SMX");
        System.out.println("Institut: IES La Vereda");
    }
}`,
          sortida: `Nom: Ana
Curs: SMX
Institut: IES La Vereda`,
          perque: 'Cada `println` escriu una línia nova. Amb tres instruccions, tres línies.'
        }
      },
      {
        id: 'mini3', titol: 'Una cara', dificultat: 'facil', temps: '2 min',
        enunciat: 'Dibuixa una cara amb caràcters del teclat (ulls, nas i boca).',
        solucio: {
          titol: 'Cara.java',
          text: `public class Cara {
    public static void main(String[] args) {
        System.out.println("  o   o  ");
        System.out.println("    ^    ");
        System.out.println("  \\\\___/  ");
    }
}`,
          sortida: `  o   o
    ^
  \\___/`,
          perque: 'La barra invertida `\\` és especial en Java: per a escriure una barra de veritat n\'hem de posar dos.'
        }
      },
      {
        id: 'mini4', titol: 'Sense salts de línia', dificultat: 'facil', temps: '2 min',
        enunciat: 'Prova de canviar `println` per `print` en dos instruccions i mira què passa. Després explica la diferència.',
        solucio: {
          titol: 'SenseSalt.java',
          text: `public class SenseSalt {
    public static void main(String[] args) {
        System.out.print("SMX ");
        System.out.print("2026");
    }
}`,
          sortida: 'SMX 2026',
          perque: '`print` no baixa de línia; `println` sí. Amb `print`, el que escriguem després continua en la mateixa línia.'
        }
      },
      {
        id: 'mini5', titol: 'Troba l\'error', dificultat: 'mitjana', temps: '2 min',
        enunciat: 'Este codi no funciona. Copia\'l, troba l\'error i arregla\'l.',
        solucio: {
          titol: 'Arreglat.java',
          text: `public class Arreglat {
    public static void main(String[] args) {
        System.out.println("Hola");
        System.out.println("Adéu");
    }
}`,
          sortida: `Hola
Adéu`,
          perque: 'Falten dos punts i coma. El compilador s\'atura en la primera línia que no acaba amb `;` i ens assenyala on.'
        },
        pista: 'Mira el final de cada línia que fa faena. Totes haurien d\'acabar igual.',
        codi: {
          titol: 'Trencat.java',
          mal: true,
          text: `public class Trencat {
    public static void main(String[] args) {
        System.out.println("Hola")
        System.out.println("Adéu");
    }
}`
        }
      }
    ]
  },

  principals: {
    intro: 'Tres exercicis complets. Escriu-los sencers, executeu-los i, si donen error, llig el missatge abans de mirar la solució.',
    exercicis: [
      {
        id: 'ex1', titol: 'El meu programa de presentació', dificultat: 'facil', temps: '15 min',
        enunciat: 'Crea un programa que escriga per pantalla: el teu nom, la teua edat, el teu joc o sèrie preferida i una frase que t\'agrade. Cada cosa en una línia, i el nom en la primera.',
        solucio: {
          titol: 'SocJo.java',
          text: `public class SocJo {
    public static void main(String[] args) {
        System.out.println("Em dic Ana");
        System.out.println("Tinc 16 anys");
        System.out.println("El meu joc preferit és Minecraft");
        System.out.println("Aprenc a programar perquè vull fer els meus propis jocs.");
    }
}`,
          sortida: `Em dic Ana
Tinc 16 anys
El meu joc preferit és Minecraft
Aprenc a programar perquè vull fer els meus propis jocs.`,
          perque: 'Cada línia és una instrucció. Fixa\'t que el text va sempre entre cometes dobles i que cada instrucció acaba en `;`.'
        },
        pista: 'Un `println` per cada línia que vulgues mostrar.'
      },
      {
        id: 'ex2', titol: 'Un cartell de benvinguda de la teua classe', dificultat: 'facil', temps: '20 min',
        enunciat: 'Fes un «cartell» fet amb text: una línia de guions a dalt, el nom de la classe, el curs i una línia de guions davall. Després envolta\'l amb asteriscs als costats.',
        exemple: {
          entrada: '(el programa no demana res: només mostra el cartell)',
          sortida: `*************************
*  SMX — 2026 · LA VEREDA  *
*************************`
        },
        solucio: {
          titol: 'Cartell.java',
          text: `public class Cartell {
    public static void main(String[] args) {
        System.out.println("***************************");
        System.out.println("*   SMX — 2026 · LA VEREDA *");
        System.out.println("***************************");
        System.out.println("*   Benvinguts a classe!   *");
        System.out.println("***************************");
    }
}`,
          sortida: `***************************
*   SMX — 2026 · LA VEREDA *
***************************
*   Benvinguts a classe!   *
***************************`,
          perque: 'Els asteriscs i els espais es compten a mà: per això el text queda alineat. Per a alinear columnes cal comptar caràcters.'
        },
        pista: 'Compta els caràcters de cada línia perquè totes tinguen la mateixa llargària.'
      },
      {
        id: 'ex3', titol: 'El programa que fa preguntes', dificultat: 'mitjana', temps: '20 min',
        enunciat: 'Escriu un programa que mostre tres preguntes i, davall de cada una, la resposta correcta. L\'objectiu no és demanar res a l\'usuari encara: és practicar moltes línies de text i fixar-se en l\'ordre.',
        exemple: {
          entrada: '(no demana dades encara)',
          sortida: `Pregunta: Quant és 2 + 2?  →  4
Pregunta: Quina és la capital de França?  →  París
Pregunta: Quantes hores té un dia?  →  24`
        },
        solucio: {
          titol: 'Preguntes.java',
          text: `public class Preguntes {
    public static void main(String[] args) {
        System.out.println("Pregunta: Quant és 2 + 2?  →  4");
        System.out.println("Pregunta: Quina és la capital de França?  →  París");
        System.out.println("Pregunta: Quantes hores té un dia?  →  24");
    }
}`,
          sortida: `Pregunta: Quant és 2 + 2?  →  4
Pregunta: Quina és la capital de França?  →  París
Pregunta: Quantes hores té un dia?  →  24`,
          perque: 'La fletxa `→` és un caràcter més: es pot escriure directament. Els accents també funcionen si el fitxer es guarda amb codificació UTF-8.'
        },
        pista: 'Cada pregunta i la seua resposta poden anar en la mateixa línia, separades per una fletxa i espais.'
      }
    ]
  },

  reptes: {
    reptes: [
      {
        titol: 'El logo de la teua marca',
        blocs: [
          { p: 'Inventa una marca (pot ser de roba, de videojocs, de música o de menjar) i dibuixa el seu logo amb caràcters de text. Ha de tindre com a mínim 6 línies i, si pot ser, alguna forma simètrica.' },
          { p: 'Quan el tingues, prova de canviar-li el color de fons... no es pot encara! Apunta-ho: ho farem en el Tema 1 amb el nom del company.' }
        ],
        ampliacions: [
          'Fes dos logos distints en el mateix programa, separats per una línia en blanc.',
          'Afig-li un «copyright» amb el nom de la marca.'
        ]
      },
      {
        titol: 'El robot de benvinguda',
        blocs: [
          { p: 'Escriu un programa que parega un robot saludant: que diga hola, que pregunte com estàs i que conteste ell mateix en tres o quatre línies.' },
          { p: 'No hi ha solució: l\'important és que l\'orde de les línies tinga sentit, com una conversa.' }
        ],
        ampliacions: [
          'Que el robot parle dos idiomes: primer en valencià i després en anglés.',
          'Que faça un dibuix del robot abans de parlar.'
        ]
      }
    ]
  },

  errors: {
    entradeta: 'Estos errors apareixeran segur. Llig-los abans de programar: quan els veges, sabràs què passa.',
    errors: [
      {
        titol: 'Falta el punt i coma',
        mal: { titol: 'Mal.java', text: `System.out.println("Hola")`, missatge: "error: ';' expected\n        System.out.println(\"Hola\")\n                              ^" },
        bo: { titol: 'Be.java', text: `System.out.println("Hola");` },
        que: 'Java s\'ha trobat una instrucció que no acaba en `;` i no sap si ja ha acabat o si falta una cosa més.',
        perque: 'Cada instrucció de Java ha d\'acabar en punt i coma. És la manera com Java sap on acaba una ordre i on comença la següent.',
        detectar: 'El missatge diu `\';\' expected` i assenyala amb `^` el lloc exacte. Sol ser la línia que hi ha just damunt.',
        corregir: 'Posa el `;` al final de la instrucció. Si la instrucció ocupa dos línies, va al final de la segona.'
      },
      {
        titol: 'Text sense tancar (cometes)',
        mal: { titol: 'Mal.java', text: `System.out.println("Bon dia!);`, missatge: 'error: unclosed string literal\n        System.out.println("Bon dia!);\n                           ^' },
        bo: { titol: 'Be.java', text: `System.out.println("Bon dia!");` },
        que: 'Java ha trobat l\'inici del text (amb `"`) però no ha trobat on acaba.',
        perque: 'Una cadena de text sempre va entre **dos** cometes dobles. Si només n\'hi ha una, Java continua buscant fins al final de la línia i es perd.',
        detectar: 'El missatge diu `unclosed string literal` («cadena de text sense tancar»).',
        corregir: 'Tanca la cometa: `"Bon dia!"`. Comprova que sigue **recta** (`"`), i no una cometa «tipogràfica» (`“`), que el teclat del mòbil posa de vegades i que Java no entén.'
      },
      {
        titol: 'El nom del fitxer no és el de la classe',
        mal: { titol: 'Programa.java', text: `public class ElMeuPrograma {
    public static void main(String[] args) {
        System.out.println("Hola");
    }
}`, missatge: 'error: class ElMeuPrograma is public, should be declared in a file named ElMeuPrograma.java' },
        bo: { titol: 'ElMeuPrograma.java', text: `public class ElMeuPrograma {
    public static void main(String[] args) {
        System.out.println("Hola");
    }
}` },
        que: 'La classe es diu `ElMeuPrograma` però el fitxer es diu `Programa.java`.',
        perque: 'Java busca el codi pel nom del fitxer. Si no coincidixen, no el troba.',
        detectar: 'El missatge ho diu clarament: `should be declared in a file named ...`.',
        corregir: 'Canvia el nom del fitxer perquè siga igual que la classe pública, amb la mateixa majúscula i tot: `ElMeuPrograma.java`.'
      },
      {
        titol: 'Majúscules i minúscules',
        mal: { titol: 'Mal.java', text: `system.out.println("Hola");`, missatge: 'error: package system does not exist' },
        bo: { titol: 'Be.java', text: `System.out.println("Hola");` },
        que: 'Hem escrit `system` en minúscula.',
        perque: 'Java és sensible a les majúscules: `System` i `system` són dos noms distints, i el segon no existix.',
        detectar: 'El compilador diu que no troba `package system` o que no pot resoldre el símbol.',
        corregir: 'Escriu-ho igual que sempre: `System.out.println(...)`, amb `S` majúscula en `System` i tot `println` en minúscules.'
      }
    ]
  },

  resum: {
    entradeta: 'Si pots explicar estes sis idees amb les teues paraules, el tema està apamat.',
    idees: [
      '**Programar** és donar instruccions ordenades a l\'ordinador perquè resolga un problema.',
      'Un **programa** és un fitxer amb instruccions que es fan dalt a baix, en orde.',
      'El **codi font** el llegim nosaltres; el **compilador** el traduïx i la **màquina virtual** l\'executa.',
      '`System.out.println("...")` mostra una línia de text per pantalla; `print` no baixa de línia.',
      'Cada instrucció acaba en `;` i els textos van entre **cometes dobles**.',
      'Java distingix majúscules i minúscules, i el fitxer ha de dir-se igual que la classe pública.',
      'Un missatge d\'error no és un fracàs: ens diu la línia i què no ha entés. Cal llegir-lo.'
    ]
  },

  autoavaluacio: {
    entradeta: 'Nou preguntes per comprovar si ho tens clar. No estan ordenades per dificultat: pensa la resposta abans de mirar-la.',
    preguntes: [
      {
        pregunta: 'Què és programar?',
        opcions: [
          'Escriure molt de text en un fitxer.',
          'Donar instruccions ordenades a l\'ordinador perquè resolga un problema.',
          'Instal·lar programes a l\'ordinador.'
        ],
        resposta: 'b) Donar instruccions ordenades a l\'ordinador.',
        perque: 'Programar és pensar la solució d\'un problema i escriure-la en passos ordenats, en un llenguatge que l\'ordinador entenga.'
      },
      {
        pregunta: 'Quina d\'estes instruccions mostra correctament un text per pantalla?',
        opcions: [
          '`System.out.println(Hola);`',
          '`System.out.println("Hola");`',
          '`System.out.println("Hola")`'
        ],
        resposta: 'b) `System.out.println("Hola");`',
        perque: 'El text va entre cometes dobles i la instrucció acaba en punt i coma. La primera opció no compila perquè `Hola` no és una variable; la tercera, perquè falta el `;`.'
      },
      {
        pregunta: 'Què fa el compilador?',
        opcions: [
          'Executa el programa.',
          'Traduïx el codi font i avisa si hi ha errors.',
          'Guarda el fitxer.'
        ],
        resposta: 'b) Traduïx el codi font i avisa si hi ha errors.',
        perque: 'El compilador traduïx el que hem escrit a un format que entén la màquina virtual. Si troba alguna cosa mal escrita, s\'atura i ens assenyala on.'
      },
      {
        pregunta: 'Escriu (mentalment) què apareixerà per pantalla si executes este programa.',
        codi: {
          titol: 'Comptar.java',
          text: `System.out.println("Nivell 2");
System.out.println("Nivell 2 + 1");`
        },
        resposta: 'Dues línies: `Nivell 2` i `Nivell 2 + 1`.',
        perque: 'Tot el que està entre cometes és text: la suma no es fa. Si volguérem sumar de veritat, no podríem posar les cometes al voltant de l\'operació.'
      },
      {
        pregunta: 'Per què el compilador diu «unclosed string literal»?',
        codi: {
          titol: 'Trencat.java',
          text: `System.out.println("Adéu);`
        },
        resposta: 'Perquè falta la cometa que tanca el text.',
        perque: 'Java necessita saber on comença i on acaba el text: per això hi ha dos cometes. Si en falta una, continua buscant i es perd.'
      },
      {
        pregunta: 'Si el fitxer es diu `Practica.java` i dins la classe es diu `Practica1`, què passarà?',
        resposta: 'Que no compilarà: si la classe és pública, el fitxer ha de dir-se igual.',
        perque: 'El missatge serà semblant a *class Practica1 is public, should be declared in a file named Practica1.java*. La solució és fer coincidir els dos noms.'
      },
      {
        pregunta: 'Quina diferència hi ha entre `print` i `println`?',
        resposta: '`println` escriu el text i baixa de línia; `print` escriu el text i es queda en la mateixa línia.',
        perque: '`ln` ve de *line*, línia. Amb `print` podem construir una línia amb diverses instruccions.'
      },
      {
        pregunta: 'Ordena mentalment estes passes del treball d\'un programador i digues quina va PRIMER: escriure codi / provar el programa / pensar el problema / dividir-lo en passos.',
        resposta: 'Primer pensar el problema i dividir-lo en passos; després escriure el codi; i finalment provar-lo.',
        perque: 'Escriure codi sense haver pensat el problema és el camí més ràpid per a equivocar-se. Primer les idees, després el teclat.'
      },
      {
        pregunta: 'Un company diu: «el meu programa no funciona, segur que Java està roín». Què comprovaries primer?',
        resposta: 'Els errors típics: punt i coma, cometes, el nom del fitxer i les majúscules de `System` i `println`.',
        perque: 'Gairebé tots els errors del principi són d\'eixos quatre tipus, i el compilador ens diu en quina línia mirar. Sempre es llig el missatge abans de tocar res.'
      }
    ]
  },

  /* ------------------------------------------------------- DIAPOSITIVES */
  diapositives: {
    objectiu: 'Entendre què és programar, què és un programa i escriure el nostre primer programa en Java.',
    index: [
      'Què és programar',
      'Què és un programa',
      'El codi font i el compilador',
      'El nostre «Hola món!»',
      'Com es modifica un programa',
      'Activitats'
    ],
    blocs: [
      {
        tipus: 'concepte',
        titol: 'Programar és donar ordres ordenades',
        bullets: [
          'Un ordinador no endevina: cal dir-li exactament què ha de fer',
          'Les instruccions es fan en orde, de dalt a baix',
          'Si canvies l\'orde, canvia el resultat',
          'Abans de programar: pensar i dividir el problema en passos'
        ],
        notes: 'Posa l\'exemple de la recepta de cuina o de l\'alarma del mòbil.'
      },
      {
        tipus: 'esquema',
        titol: 'Del que escrivim al que s\'executa',
        flux: ['Codi font', 'Compilador', 'Fitxer executable', 'Màquina virtual'],
        nota: 'Si el compilador s\'atura, ens està avisant d\'un error: llegim el missatge.'
      },
      {
        tipus: 'codi',
        titol: 'El nostre primer programa',
        codi: 'public class HolaMon {\n    public static void main(String[] args) {\n        System.out.println("Hola món!");\n    }\n}',
        sortida: 'Hola món!',
        notes: 'Escriure-ho davant de la classe, no copiar-ho. I després canviar el text.'
      },
      {
        tipus: 'concepte',
        titol: 'Què fa cada part',
        bullets: [
          'System.out.println → mostra una línia per pantalla',
          'El text va entre cometes dobles',
          'Cada instrucció acaba amb punt i coma (;)',
          'La resta és la carcassa que Java necessita per arrancar'
        ],
        notes: 'Avisa que la carcassa no cal entendre-la encara.'
      },
      {
        tipus: 'prediccio',
        titol: 'Pensem abans d\'executar',
        codi: 'System.out.println("Nivell 1");\nSystem.out.println("Nivell 1 + 1");',
        pregunta: 'Què apareixerà per pantalla?',
        notes: 'Deixar que contesten. La clau: dins de les cometes tot és text.'
      },
      {
        tipus: 'activitat',
        titol: 'Ara et toca a tu',
        enunciat: 'Escriu un programa que mostre el teu nom, la teua edat i una frase que t\'agrade. Cada cosa en una línia.',
        temps: '15 min',
        pistes: ['Un println per línia', 'El text va entre cometes dobles'],
        notes: 'Passar per les taules i vore els primers errors: cometes i punts i coma.'
      },
      {
        tipus: 'concepte',
        titol: 'Errors que veuràs segur',
        bullets: [
          "';' expected → falta un punt i coma",
          'unclosed string literal → falta tancar les cometes',
          'El fitxer ha de dir-se igual que la classe pública',
          'Java distingix majúscules i minúscules'
        ],
        notes: 'Provocar els errors en directe davant de la classe.'
      },
      {
        tipus: 'pregunta',
        titol: 'Pensem un moment',
        pregunta: 'Si el programa fa exactament el que li diem, per què de vegades no fa el que volem?'
      }
    ],
    resum: [
      'Programar és donar instruccions ordenades a l\'ordinador.',
      'El codi font el traduïx el compilador; la màquina virtual l\'executa.',
      'System.out.println("...") mostra una línia de text.',
      'Cada instrucció acaba en «;» i els textos van entre cometes dobles.',
      'El fitxer ha de dir-se igual que la classe pública.',
      'Els missatges d\'error ens diuen on mirar: llegir-los és part del treball.'
    ],
    seguent: 'Tema 1 · Variables: guardar informació'
  }
};
