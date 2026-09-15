/* ==========================================================================
   TEMA 4 · Arrays: guardar moltes dades  —  contingut de la pàgina
   Material creat per Agustín Gil · IES La Vereda 2026 · CC BY-NC 4.0
   · sortida = eixida real (es comprova amb  node eines/prova-codi-java.mjs 4 )
   ========================================================================== */
globalThis.TEMA = {
  n: 4,
  titol: 'Arrays: guardar moltes dades',
  subtitol: 'Una fila de caselles numerades per a totes les notes, punts o temperatures',
  durada: '3 hores de classe',

  hero: {
    etiqueta: 'Tema 4 · Sessió de 3 hores',
    entradeta: 'Trenta notes de classe no poden ser trenta variables. Un array és una fila de caselles numerades que es recorre amb un bucle: juntes, les dos idees del tema anterior i d\'este es convertixen en una màquina de fer comptes.',
    meta: [
      '⏱ 3 hores',
      '📦 Fase 1 · Pensament de programador',
      '🧩 Necessites: Temes 0 a 3',
      '❓ La pregunta clau: quina és la posició de cada dada?'
    ]
  },

  introduccio: {
    titol: 'Una situació per començar',
    emoji: '📋',
    blocs: [
      { p: 'Volem un programa que demane les notes de sis companys i després diga la mitjana, la més alta, la més baixa i quantes persones han aprovat.' },
      { p: 'Amb el que sabem fins ara podríem fer-ho, però mira com queda:' },
      { codi: {
        titol: 'SisNotes.java',
        etiqueta: 'SENSE ARRAYS',
        text: `double nota1 = 6.5;
double nota2 = 4.0;
double nota3 = 8.5;
double nota4 = 5.0;
double nota5 = 7.5;
double nota6 = 3.5;

// per a cada càlcul, una línia:
double suma = nota1 + nota2 + nota3 + nota4 + nota5 + nota6;
double mitjana = suma / 6;
// i per al màxim i el mínim... quina faena!`
      } },
      { p: 'I si foren **30** companys? I si foren 300? Este codi no s\'aguanta. El problema és que cada dada necessita el seu propi nom, i nosaltres no podem inventar-se\'n tants.' },
      { p: 'La solució és guardar totes les dades en **una sola variable amb moltes caselles**: un **array**. Cada casella té un número (la seua **posició**) i el bucle recorre totes les caselles una darrere l\'altra.' }
    ],
    plan: [
      ['30-40 min', 'Explicació i demos'],
      ['60-75 min', 'Programació guiada'],
      ['60-75 min', 'Exercicis'],
      ['15-30 min', 'Repàs i repte']
    ],
    prerequisits: [
      'Fer bucles amb `while` i `for` (Tema 3).',
      'Comparar valors i prendre decisions amb `if` (Tema 2).',
      'Les variables i els tipus de dades (Tema 1).'
    ]
  },

  objectius: {
    intro: 'En acabar esta sessió has de saber fer estes coses:',
    llista: [
      'Crear un array i saber quantes caselles té.',
      'Guardar i llegir dades en una posició concreta.',
      'Recórrer un array amb un `for` de la primera a l\'última casella.',
      'Calcular sumes, mitjanes, màxims i mínims d\'un array.',
      'Comptar i buscar valors dins d\'un array.',
      'Fer servir els mètodes útils dels textos (`length`, `charAt`, `equals`…).'
    ]
  },

  teoria: {
    titol: 'Teoria, poc a poc',
    entradeta: 'Una idea → un exemple. I una pregunta que no para: quina casella estic tocant ara?',
    blocs: [
      { h3: '1. Una fila de caselles' },
      { p: 'Un **array** (`vector`, en català) és una variable que guarda **molts valors del mateix tipus**, un darrere l\'altre, i cada valor té un número de posició.' },
      { p: 'Pensa-ho com els calaixos d\'una taula: el calaix 0, el calaix 1, el calaix 2… Es crea així:' },
      { codi: {
        titol: 'CrearArray.java',
        etiqueta: 'CREAR',
        text: `int[] notes = new int[5];   // un array de 5 enters

System.out.println("Té " + notes.length + " caselles");

notes[0] = 7;      // guardem
System.out.println(notes[0]);   // llegim
System.out.println(notes[3]);   // encara no l'hem tocat: val 0`,
        sortida: `Té 5 caselles
7
0`
      } },
      { p: 'Tres coses importants:' },
      { llista: [
        'El tipus va amb claudàtors: `int[]` significa «array d\'enters».',
        '`new int[5]` **crea** l\'array amb 5 caselles.',
        'Les caselles d\'un array de números comencen sempre amb el valor **0**. No estan buides: valen 0.'
      ], numerada: true },
      { codi: {
        titol: 'Dibuix.java',
        etiqueta: 'COM ES VEURIA',
        text: `int[] notes = new int[5];

//  índex:    0    1    2    3    4
//  valor:    0    0    0    0    0
//           (5 caselles → índexs del 0 al 4)`
      } },
      { nota: { tipus: 'important', text: '**La primera casella és la 0 i l\'última és `length - 1`.** Si l\'array té 5 caselles, els índexs són 0, 1, 2, 3 i 4. El 5 no existix! És l\'error més típic d\'este tema.' } },

      { h3: '2. Guardar amb la manera curta' },
      { p: 'Si ja sabem els valors des del principi, no cal crear l\'array buit: es pot escriure directament entre claus.' },
      { codi: {
        titol: 'ManeraCurta.java',
        etiqueta: 'VALORS INICIALS',
        text: `int[] punts = {120, 95, 180, 60, 145};
String[] noms = {"Ana", "Bruno", "Carla"};

System.out.println(punts[2]);       // 180
System.out.println(noms[0]);        // Ana
System.out.println(punts.length);   // 5`,
        sortida: `180
Ana
5`
      } },
      { nota: { tipus: 'tip', text: 'Les dos maneres són igual de correctes. Si els valors els posa l\'usuari, fem `new int[quants]`; si els escrivim nosaltres al codi, podem fer servir les claus.' } },

      { h3: '3. Recórrer un array amb un for' },
      { p: 'Ací està la màgia: un array i un bucle encaixen perfectament. El comptador del bucle es convertix en l\'**índex** de la casella.' },
      { codi: {
        titol: 'Recorrer.java',
        etiqueta: 'RECÓRRER',
        text: `public class Recorrer {
    public static void main(String[] args) {
        int[] punts = {120, 95, 180, 60, 145};

        for (int i = 0; i < punts.length; i++) {
            System.out.println("Jugador " + (i + 1) + ": " + punts[i] + " punts");
        }
    }
}`,
        sortida: `Jugador 1: 120 punts
Jugador 2: 95 punts
Jugador 3: 180 punts
Jugador 4: 60 punts
Jugador 5: 145 punts`
      } },
      { p: 'Llig-lo en veu alta: *«per a i des de 0 mentres i siga menut que la quantitat de caselles, augmenta i»*. Dins s\'accedix a `punts[i]`, que va canviant de casella a cada volta.' },
      { p: 'I per què posem `i + 1` en el missatge? Perquè l\'índex 0 és el **primer** jugador, i als humans ens agrada comptar des de l\'1. El programa compta des de 0, la pantalla des d\'1.' },
      { nota: { tipus: 'important', text: 'La condició del bucle és **`i < array.length`** (menut, **sense** l\'igual). Si escrius `i <= array.length`, quan `i` arribe a 5 buscaràs la casella 5 d\'un array de 5 caselles i el programa fallarà.' } },

      { h3: '4. La manera curta de recórrer: for-each' },
      { p: 'Quan volem **tots** els valors i no ens importa la posició, hi ha una manera més curta. Es diu *for-each* i es llig «per a cada».' },
      { codi: {
        titol: 'ForEach.java',
        etiqueta: 'FOR-EACH',
        text: `public class ForEach {
    public static void main(String[] args) {
        String[] noms = {"Ana", "Bruno", "Carla"};

        // per a cada text (que direm nom) de la llista noms:
        for (String nom : noms) {
            System.out.println(nom);
        }
    }
}`,
        sortida: `Ana
Bruno
Carla`
      } },
      { taula: {
        cap: ['Si…', 'Fem servir'],
        files: [
          ['Necessite la posició (índex)', '`for (int i = 0; i < a.length; i++)`'],
          ['Només vull els valors', '`for (int valor : a)`'],
          ['Vull omplir l\'array des del teclat', '`for` amb índex, perquè cal assignar a `a[i]`'],
          ['Vull modificar les caselles', '`for` amb índex']
        ]
      } },
      { nota: { tipus: 'info', text: 'El *for-each* només servix per a **llegir**. Amb ell no es pot guardar res en l\'array, perquè no tenim el número de la casella.' } },

      { h3: '5. Omplir un array des del teclat' },
      { p: 'El patró clàssic: el bucle demana una dada i la guarda directament en la casella.' },
      { codi: {
        titol: 'Omplir.java',
        etiqueta: 'SCANNER + ARRAY',
        text: `import java.util.Scanner;

public class Omplir {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        double[] notes = new double[5];

        for (int i = 0; i < notes.length; i++) {
            System.out.print("Nota " + (i + 1) + ": ");
            notes[i] = teclat.nextDouble();
        }

        double suma = 0;
        for (int i = 0; i < notes.length; i++) {
            suma = suma + notes[i];
        }

        System.out.println("Mitjana: " + (suma / notes.length));
    }
}`,
        entrada: '6\n7\n6\n9\n8\n',
        sortida: `Nota 1: Nota 2: Nota 3: Nota 4: Nota 5: Mitjana: 7.2`,
        sortidaMostrada: `Nota 1: 6
Nota 2: 7
Nota 3: 6
Nota 4: 9
Nota 5: 8
Mitjana: 7.2`
      } },
      { p: 'Fixa\'t que hi ha **dos bucles**: un per a omplir i un altre per a calcular. Es podrien juntar, però separats es lligen millor i és el que fan quasi tots els programes de veritat.' },

      { h3: '6. Màxim i mínim: el mètode de l\'aspirant' },
      { p: 'Volem saber el valor més gran d\'un array. La idea: **el primer element és el campió**, i després cada altre valor li intenta prendre el títol.' },
      { codi: {
        titol: 'MaxIMin.java',
        etiqueta: 'MÀXIM I MÍNIM',
        text: `public class MaxIMin {
    public static void main(String[] args) {
        int[] punts = {120, 95, 180, 60, 145};

        int maxim = punts[0];
        int minim = punts[0];

        for (int i = 1; i < punts.length; i++) {
            if (punts[i] > maxim) {
                maxim = punts[i];
            }
            if (punts[i] < minim) {
                minim = punts[i];
            }
        }

        System.out.println("La millor partida: " + maxim + " punts");
        System.out.println("La pitjor partida: " + minim + " punts");
    }
}`,
        sortida: `La millor partida: 180 punts
La pitjor partida: 60 punts`
      } },
      { p: 'Dos detalls que fan que funcione:' },
      { llista: [
        'El campió comença sent la **primera** casella (`punts[0]`), no 0 ni un número inventat.',
        'El bucle comença en `i = 1`, perquè la casella 0 ja l\'hem mirada en inicialitzar.'
      ], numerada: true },
      { nota: { tipus: 'avis', text: 'Si inicialitzes el màxim a 0 i tots els valors de l\'array foren negatius (per exemple temperatures d\'un congelador), el programa diria que el màxim és 0, i seria mentida. Per això comencem sempre amb `array[0]`.' } },

      { h3: '7. Buscar un valor dins de l\'array' },
      { p: 'Buscar costa el mateix: recórrer i preguntar. Quan el trobem, guardem la posició i podem parar amb `break`.' },
      { codi: {
        titol: 'Buscar.java',
        etiqueta: 'BUSCAR',
        text: `public class Buscar {
    public static void main(String[] args) {
        String[] noms = {"Ana", "Bruno", "Carla", "Dani"};
        String buscat = "Carla";

        boolean trobat = false;

        for (int i = 0; i < noms.length; i++) {
            if (noms[i].equals(buscat)) {
                System.out.println("Trobat a la posició " + i);
                trobat = true;
                break;
            }
        }

        if (!trobat) {
            System.out.println("No està a la llista");
        }
    }
}`,
        sortida: 'Trobat a la posició 2'
      } },
      { p: 'El patró de la **variable bandera**: comença `false`, es posa `true` quan trobem el que busquem. Al final, mirem la bandera per saber què ha passat.' },

      { h3: '8. El text també és una fila de caràcters' },
      { p: 'Un `String` es comporta molt paregut a un array: cada posició és una **lletra** (un `char`). Per a treballar amb textos, hi ha unes quantes ferramentes que has de conéixer.' },
      { codi: {
        titol: 'Ferramentes.java',
        etiqueta: 'MÈTODES DE STRING',
        text: `public class Ferramentes {
    public static void main(String[] args) {
        String text = "Programar en Java";

        System.out.println(text.length());            // quantes lletres? (amb parèntesis!)
        System.out.println(text.charAt(0));           // la lletra de la posició 0
        System.out.println(text.toUpperCase());       // tot en majúscules
        System.out.println(text.toLowerCase());       // tot en minúscules
        System.out.println(text.substring(0, 9));     // un tros: de la 0 a la 9 (la 9 no entra)
        System.out.println(text.contains("Java"));    // conté este tros?
        System.out.println(text.indexOf("Java"));     // en quina posició està?
    }
}`,
        sortida: `17
P
PROGRAMAR EN JAVA
programar en java
Programar
true
13`
      } },
      { p: 'La llista de les més útils, per a tindre-la a mà:' },
      { taula: {
        cap: ['S\'escriu', 'Fa', 'Exemple'],
        files: [
          ['`text.length()`', 'quantes lletres té (**amb** parèntesis)', '`"Hola".length()` → 4'],
          ['`text.charAt(2)`', 'la lletra de la posició 2', '`"Hola".charAt(2)` → `l`'],
          ['`text.equals(altre)`', 'si diuen exactament el mateix', '`"Hola".equals("hola")` → `false`'],
          ['`text.equalsIgnoreCase(altre)`', 'sense importar majúscules', '`"Hola".equalsIgnoreCase("hola")` → `true`'],
          ['`text.substring(a, b)`', 'el tros de la posició `a` a la `b` (sense incloure `b`)', '`"Hola".substring(1, 3)` → `ol`'],
          ['`text.toUpperCase()`', 'tot en majúscules', '`"Hola".toUpperCase()` → `HOLA`'],
          ['`text.contains("ol")`', 'si conté este tros', '`"Hola".contains("ol")` → `true`'],
          ['`text.indexOf("l")`', 'la posició on està', '`"Hola".indexOf("l")` → 2'],
          ['`text.trim()`', 'lleva espais del principi i del final', '`" Hola ".trim()` → `Hola`']
        ]
      } },
      { nota: { tipus: 'important', text: '**`length` en un array, `length()` en un text.** Són parents però no són iguals: l\'array guarda el seu número de caselles en una propietat sense parèntesis, i el text t\'ho diu amb un mètode amb parèntesis. Confondre-ho dona un error de compilació.' } },

      { h3: '9. Veure un array sencer d\'una vegada' },
      { p: 'Si intentes mostrar un array sencer, apareix una cosa rara. Prova-ho:' },
      { codi: {
        titol: 'Raro.java',
        etiqueta: 'OJO AMB AÇÒ',
        text: `int[] punts = {120, 95, 180};
System.out.println(punts);      // què és eixe text estrany?`,
        sortidaMostrada: `[I@1b6d3586`
      } },
      { p: 'Eixe `[I@1b6d3586` no són els teus números: és la «matrícula» de l\'array en la memòria. Per a vore el contingut hi ha una ferramenta de Java que fa la faena:' },
      { codi: {
        titol: 'AmbArrays.java',
        etiqueta: 'ARRAYS.TOSTRING',
        text: `import java.util.Arrays;

public class AmbArrays {
    public static void main(String[] args) {
        int[] punts = {120, 95, 180};
        System.out.println(Arrays.toString(punts));
    }
}`,
        sortida: '[120, 95, 180]'
      } },
      { nota: { tipus: 'nomes-ensenyament', text: '`Arrays.toString(...)` és una utilíssima de Java. **De moment no necessitem entendre aquesta part** (`import`, `java.util`, els punts…); ja arribarem a ella més avant. Per ara, copia-la tal qual quan vulgues vore un array sencer en una prova.' } }
    ]
  },

  exemples: {
    titol: 'Exemples explicats pas a pas',
    entradeta: 'Cada exemple: què volem aconseguir, el codi, què apareix per pantalla i per què funciona.',
    blocs: [
      { h3: 'Exemple 1 · Les temperatures de la setmana' },
      { p: '**Què volem?** Les temperatures dels 7 dies, la mitjana i si ha fet fred o calor.' },
      { codi: {
        titol: 'Temperatures.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Temperatures {
    public static void main(String[] args) {
        double[] temp = {21.5, 23.0, 19.5, 25.0, 27.5, 24.0, 22.5};

        double suma = 0;
        for (int i = 0; i < temp.length; i++) {
            suma = suma + temp[i];
            System.out.println("Dia " + (i + 1) + ": " + temp[i] + " graus");
        }

        double mitjana = suma / temp.length;
        System.out.println("Temperatura mitjana: " + mitjana + " graus");
    }
}`,
        sortida: `Dia 1: 21.5 graus
Dia 2: 23.0 graus
Dia 3: 19.5 graus
Dia 4: 25.0 graus
Dia 5: 27.5 graus
Dia 6: 24.0 graus
Dia 7: 22.5 graus
Temperatura mitjana: 23.285714285714285 graus`
      } },
      { p: '**Per què funciona:** el bucle recorre les set caselles. Dins fem **dos treballs alhora**: sumar a l\'acumulador i mostrar el dia, perquè el bucle només passa una vegada per davall.' },
      { nota: { tipus: 'tip', text: 'Eixe `23.285714285714285` es llig fatal. Mès avant aprendrem a arredonir-ho, però tu ja pots deixar-ho bonic: `Math.round(mitjana * 100) / 100.0` el deixa amb dos decimals. Prova-ho!' } },

      { h3: 'Exemple 2 · Quants han superat la mitjana?' },
      { p: '**Què volem?** Saber quants alumnes estan per damunt de la mitjana de la classe. Cal recórrer l\'array dues vegades: primer per a calcular la mitjana, després per a comptar.' },
      { codi: {
        titol: 'PerDamunt.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class PerDamunt {
    public static void main(String[] args) {
        double[] notes = {5.5, 8.0, 4.5, 9.0, 6.5, 3.0, 7.0};

        double suma = 0;
        for (int i = 0; i < notes.length; i++) {
            suma = suma + notes[i];
        }
        double mitjana = suma / notes.length;

        int perDamunt = 0;
        for (int i = 0; i < notes.length; i++) {
            if (notes[i] > mitjana) {
                perDamunt++;
            }
        }

        System.out.println("Mitjana de la classe: " + mitjana);
        System.out.println("Per damunt de la mitjana: " + perDamunt + " alumnes");
    }
}`,
        sortida: `Mitjana de la classe: 6.214285714285714
Per damunt de la mitjana: 4 alumnes`
      } },
      { p: '**Per què funciona:** hi ha **dos recorreguts**. El primer només acumula (no podem comparar amb la mitjana abans de conéixer-la). El segon compara cada nota amb eixa mitjana i les compta.' },
      { nota: { tipus: 'info', text: 'Alguna cosa més gran que 6,21 és 8, 9, 6.5 i 7: quatre alumnes. Comprovem que el programa diu el mateix... i sí, diu 4. **Comprovar a mà el que ha de donar el programa** és el que separa un programador d\'algú que escriu codi i espera que passe.' } },

      { h3: 'Exemple 3 · Comptar vocals d\'una paraula' },
      { p: '**Què volem?** Dir quantes vocals té una paraula. Un text és una fila de lletres, així que es recorre igual que un array.' },
      { codi: {
        titol: 'Vocals.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Vocals {
    public static void main(String[] args) {
        String paraula = "videoconsola";
        int vocals = 0;

        for (int i = 0; i < paraula.length(); i++) {
            char lletra = paraula.charAt(i);

            if (lletra == 'a' || lletra == 'e' || lletra == 'i' || lletra == 'o' || lletra == 'u') {
                vocals++;
            }
        }

        System.out.println("La paraula " + paraula + " té " + vocals + " vocals.");
    }
}`,
        sortida: 'La paraula videoconsola té 6 vocals.'
      } },
      { p: '**Per què funciona:** anàlisi de `videoconsola` → v-**i**-d-**e-o**-c-**o**-n-s-**o**-l-**a** = 6 vocals. Cada lletra es compara amb les cinc vocals. Com que `char` es compara amb `==` (és un caràcter simple, no un text), ací sí podem fer servir `==`.' },
      { nota: { tipus: 'tip', text: 'Les lletres simples (tipus `char`) es comparen amb `==` i van **entre cometes simples**: `\'a\'`. Els textos van entre cometes dobles i es comparen amb `equals`. Una cometa, un caràcter; dos cometes, un text.' } },

      { h3: 'Exemple 4 · Quantes vegades apareix cada nota' },
      { p: '**Què volem?** Comptar quantes vegades apareix un valor dins d\'un array. Recorreguem l\'array sencer i comptem les coincidències, sense parar.' },
      { codi: {
        titol: 'Repeticions.java',
        etiqueta: 'EXEMPLE EXPLICAT',
        text: `public class Repeticions {
    public static void main(String[] args) {
        int[] daus = {3, 5, 3, 1, 3, 6, 5};
        int buscat = 3;
        int vegades = 0;

        for (int i = 0; i < daus.length; i++) {
            if (daus[i] == buscat) {
                vegades++;
            }
        }

        System.out.println("El " + buscat + " ha eixit " + vegades + " vegades.");
    }
}`,
        sortida: 'El 3 ha eixit 3 vegades.'
      } },
      { p: '**Per què funciona:** ací **no** hi ha `break`, perquè volem comptar-les totes. En l\'exemple de buscar un nom sí que en tenia, perquè només ens interessava el primer que apareixia. La pregunta és sempre: *«quan tinga el resultat, he de seguir mirant?»*' },

      { h3: 'Quantes voltes fa i què suma?' },
      { p: 'Llig el codi amb atenció i pensa el resultat abans d\'executar-lo.' },
      { prediccio: {
        id: 'pred-index',
        titol: 'Pensa abans d\'executar',
        fitxer: 'Suma.java',
        text: `int[] numeros = {4, 8, 15, 16};
int suma = 0;

for (int i = 1; i < numeros.length; i++) {
    suma = suma + numeros[i];
}

System.out.println(suma);`,
        sortida: `39`,
        perque: 'El bucle comença en `i = 1`, no en 0! Per tant no suma el 4. Els valors sumats són 8 + 15 + 16 = 39. És el mateix patró que hem fet servir per al màxim i el mínim, on el primer element es mira fora del bucle.'
      } }
    ]
  },

  guiada: {
    titol: 'Programació guiada: ho fem junts',
    entradeta: 'Farem el rànquing d\'un torneig de videojocs: cinc jugadors, els seus punts, el total, el millor, el pitjor i qui està per damunt de la mitjana.',
    passos: [
      {
        titol: 'El problema i les dades',
        blocs: [
          { p: 'Tenim 5 jugadors amb estos punts: **120, 95, 180, 60 i 145**. Volem vore el rànquing, el total, la mitjana, el millor i el pitjor, i quants jugadors superen la mitjana.' },
          { preguntaClasse: 'Quantes caselles necessita l\'array i quin serà l\'índex de l\'última?' },
          { p: 'Cinc caselles → índexs del **0 al 4**. I com que no hi ha noms de jugadors, els direm *Jugador 1* … *Jugador 5* sumant 1 a l\'índex.' }
        ]
      },
      {
        titol: 'Primer: mostrar el rànquing',
        blocs: [
          { p: 'Com sempre, comencem pel més simple: crear l\'array i mostrar-lo numerat.' },
          { codi: {
            titol: 'Ranking.java',
            etiqueta: 'PAS 2',
            text: `public class Ranking {
    public static void main(String[] args) {
        int[] punts = {120, 95, 180, 60, 145};

        for (int i = 0; i < punts.length; i++) {
            System.out.println("Jugador " + (i + 1) + ": " + punts[i] + " punts");
        }
    }
}`,
            sortida: `Jugador 1: 120 punts
Jugador 2: 95 punts
Jugador 3: 180 punts
Jugador 4: 60 punts
Jugador 5: 145 punts`
          } },
          { nota: { tipus: 'tip', text: 'Prova de canviar `i < punts.length` per `i <= punts.length` i executa-ho. Veuràs l\'error més típic dels arrays. Després torna-ho a deixar bé.' } }
        ]
      },
      {
        titol: 'Total i mitjana',
        blocs: [
          { p: 'Ara afegim un acumulador. Podem calcular-ho tot en el **mateix bucle** de mostrar, però ho fem en un de nou per vore-ho clar.' },
          { codi: {
            titol: 'Ranking.java',
            etiqueta: 'PAS 3',
            text: `public class Ranking {
    public static void main(String[] args) {
        int[] punts = {120, 95, 180, 60, 145};

        for (int i = 0; i < punts.length; i++) {
            System.out.println("Jugador " + (i + 1) + ": " + punts[i] + " punts");
        }

        int total = 0;
        for (int i = 0; i < punts.length; i++) {
            total = total + punts[i];
        }

        System.out.println("Total del torneig: " + total + " punts");
        System.out.println("Mitjana per jugador: " + (total / (double) punts.length) + " punts");
    }
}`,
            sortida: `Jugador 1: 120 punts
Jugador 2: 95 punts
Jugador 3: 180 punts
Jugador 4: 60 punts
Jugador 5: 145 punts
Total del torneig: 600 punts
Mitjana per jugador: 120.0 punts`
          } },
          { p: 'La divisió porta `(double)` davant: convertix la quantitat de jugadors en un número decimal perquè la mitjana no perda els decimals.' },
          { nota: { tipus: 'només-ensenyament', text: '`.length` és un `int`. Si dividim `int / int`, Java dona un `int` (i perdríem els decimals). El `(double)` convertix el valor a decimal. **De moment no cal entendre aquesta part a fons**; queda\'t amb la idea: *quan dividisques, assegura\'t que un dels dos costats és decimal*.' } }
        ]
      },
      {
        titol: 'El millor i el pitjor',
        blocs: [
          { p: 'Apliquem el mètode de l\'aspirant: el primer jugador és el campió provisional i tots els altres li intenten prendre el títol.' },
          { codi: {
            titol: 'Ranking.java',
            etiqueta: 'PAS 4',
            text: `public class Ranking {
    public static void main(String[] args) {
        int[] punts = {120, 95, 180, 60, 145};

        int maxim = punts[0];
        int minim = punts[0];

        for (int i = 1; i < punts.length; i++) {
            if (punts[i] > maxim) {
                maxim = punts[i];
            }
            if (punts[i] < minim) {
                minim = punts[i];
            }
        }

        System.out.println("Millor jugador: " + maxim + " punts");
        System.out.println("Pitjor jugador: " + minim + " punts");
    }
}`,
            sortida: `Millor jugador: 180 punts
Pitjor jugador: 60 punts`
          } },
          { preguntaClasse: 'Per què el bucle comença en 1 i no en 0?' }
        ]
      },
      {
        titol: 'Quants jugadors superen la mitjana',
        blocs: [
          { p: 'Este és el càlcul de dos passades: primer la mitjana (ja el tenim) i després un bucle que compta.' },
          { codi: {
            titol: 'Ranking.java',
            etiqueta: 'PAS 5',
            text: `public class Ranking {
    public static void main(String[] args) {
        int[] punts = {120, 95, 180, 60, 145};

        int total = 0;
        for (int i = 0; i < punts.length; i++) {
            total = total + punts[i];
        }
        double mitjana = total / (double) punts.length;

        int perDamunt = 0;
        for (int i = 0; i < punts.length; i++) {
            if (punts[i] > mitjana) {
                perDamunt++;
            }
        }

        System.out.println("Mitjana: " + mitjana + " punts");
        System.out.println("Per damunt de la mitjana: " + perDamunt + " jugadors");
    }
}`,
            sortida: `Mitjana: 120.0 punts
Per damunt de la mitjana: 2 jugadors`
          } },
          { p: 'Comprovem-ho a mà: per damunt de 120 estan 180 i 145 → **2 jugadors**. Quadra.' }
        ]
      },
      {
        titol: 'Ara amb dades que escriu l\'usuari',
        blocs: [
          { p: 'El mateix programa, però amb els punts llegits pel teclat. Este és el patró que faràs servir centenars de vegades: **omplir un array amb un bucle i després recórrer-lo**.' },
          { codi: {
            titol: 'Ranking.java',
            etiqueta: 'PAS 6',
            text: `import java.util.Scanner;

public class Ranking {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        int[] punts = new int[5];

        for (int i = 0; i < punts.length; i++) {
            System.out.print("Punts del jugador " + (i + 1) + ": ");
            punts[i] = teclat.nextInt();
        }

        int total = 0;
        for (int i = 0; i < punts.length; i++) {
            total = total + punts[i];
        }

        System.out.println("Total del torneig: " + total + " punts");
        System.out.println("Mitjana per jugador: " + (total / (double) punts.length) + " punts");
    }
}`,
            entrada: '120\n95\n180\n60\n145\n',
            sortida: `Punts del jugador 1: Punts del jugador 2: Punts del jugador 3: Punts del jugador 4: Punts del jugador 5: Total del torneig: 600 punts
Mitjana per jugador: 120.0 punts`,
            sortidaMostrada: `Punts del jugador 1: 120
Punts del jugador 2: 95
Punts del jugador 3: 180
Punts del jugador 4: 60
Punts del jugador 5: 145
Total del torneig: 600 punts
Mitjana per jugador: 120.0 punts`
          } },
          { taula: {
            cap: ['Què provem', 'Què ha de passar'],
            files: [
              ['Els cinc mateixos punts', 'Total 600 i mitjana 120'],
              ['Tots els punts iguals (100)', 'Mitjana 100 i màxim = mínim'],
              ['Un jugador amb 0 punts', 'Ha de funcionar: el 0 és un valor com qualsevol altre'],
              ['Punts negatius', 'El màxim pot ser 0 o negatiu: per això el campió comença en `punts[0]`']
            ]
          } },
          { p: 'I les millores que pots fer tu: que tot el rànquing es mostre al final en orde d\'entrada, que diga quants jugadors han quedat per davall de la mitjana, i que el programa demane primer quants jugadors hi haurà.' }
        ]
      }
    ]
  },

  mini: {
    intro: 'Activitats molt curtes. Totes es poden fer amb una desena de línies.',
    exercicis: [
      {
        id: 'mini1', titol: 'Primera i última casella', dificultat: 'facil', temps: '4 min',
        enunciat: 'Crea un array de 4 temperatures i mostra la primera i l\'última fent servir `length`.',
        exemple: { entrada: '(no demana dades)', sortida: 'La primera: 18.5\nL\'última: 24.0' },
        solucio: {
          titol: 'PrimeriUltima.java',
          text: `public class PrimeriUltima {
    public static void main(String[] args) {
        double[] temp = {18.5, 21.0, 19.5, 24.0};

        System.out.println("La primera: " + temp[0]);
        System.out.println("L'última: " + temp[temp.length - 1]);
    }
}`,
          sortida: `La primera: 18.5
L'última: 24.0`,
          perque: 'L\'última casella **no** és `temp[temp.length]` (eixa no existix), sinó `temp[temp.length - 1]`: si hi ha 4 caselles, l\'última és la 3.'
        }
      },
      {
        id: 'mini2', titol: 'La llista numerada', dificultat: 'facil', temps: '4 min',
        enunciat: 'Guarda 4 noms en un array i mostra\'ls numerats de l\'1 al 4.',
        exemple: { entrada: '(no demana dades)', sortida: '1. Ana\n2. Bruno\n3. Carla\n4. Dani' },
        solucio: {
          titol: 'Llista.java',
          text: `public class Llista {
    public static void main(String[] args) {
        String[] noms = {"Ana", "Bruno", "Carla", "Dani"};

        for (int i = 0; i < noms.length; i++) {
            System.out.println((i + 1) + ". " + noms[i]);
        }
    }
}`,
          sortida: `1. Ana
2. Bruno
3. Carla
4. Dani`,
          perque: 'L\'índex comença en 0, però per a mostrar-lo a les persones sumem 1. Eixa diferència entre «el número de la casella» i «el número que veu l\'usuari» és constant en programació.'
        }
      },
      {
        id: 'mini3', titol: 'Suma i mitjana', dificultat: 'mitjana', temps: '5 min',
        enunciat: 'Amb l\'array `{4, 7, 9, 6, 8}`, mostra el total i la mitjana.',
        exemple: { entrada: '(no demana dades)', sortida: 'Total: 34\nMitjana: 6.8' },
        solucio: {
          titol: 'SumaMitjana.java',
          text: `public class SumaMitjana {
    public static void main(String[] args) {
        int[] notes = {4, 7, 9, 6, 8};

        int total = 0;
        for (int i = 0; i < notes.length; i++) {
            total = total + notes[i];
        }

        System.out.println("Total: " + total);
        System.out.println("Mitjana: " + (total / (double) notes.length));
    }
}`,
          sortida: `Total: 34
Mitjana: 6.8`,
          perque: 'L\'acumulador es crea abans del bucle i s\'actualitza dins. La divisió porta `(double)` perquè la mitjana tinga decimals: 34 / 5 = 6.8.'
        }
      },
      {
        id: 'mini4', titol: 'El número més gran', dificultat: 'mitjana', temps: '5 min',
        enunciat: 'Troba i mostra el número més gran de l\'array `{23, 8, 45, 12, 30}`.',
        exemple: { entrada: '(no demana dades)', sortida: 'El més gran és 45' },
        solucio: {
          titol: 'MesGran.java',
          text: `public class MesGran {
    public static void main(String[] args) {
        int[] numeros = {23, 8, 45, 12, 30};

        int maxim = numeros[0];
        for (int i = 1; i < numeros.length; i++) {
            if (numeros[i] > maxim) {
                maxim = numeros[i];
            }
        }

        System.out.println("El més gran és " + maxim);
    }
}`,
          sortida: 'El més gran és 45',
          perque: 'El campió provisional és el primer element i el bucle comença en 1. Comparar-lo amb si mateix no canvia res, però començar en 0 sí que funciona; la diferència és que estalviem una comparació inútil.'
        }
      },
      {
        id: 'mini5', titol: 'Comptar els parells', dificultat: 'mitjana', temps: '5 min',
        enunciat: 'Compta quants números parells hi ha en l\'array `{5, 8, 12, 7, 20, 3}`.',
        exemple: { entrada: '(no demana dades)', sortida: 'Hi ha 3 números parells' },
        solucio: {
          titol: 'ComptaParells.java',
          text: `public class ComptaParells {
    public static void main(String[] args) {
        int[] numeros = {5, 8, 12, 7, 20, 3};
        int parells = 0;

        for (int i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 == 0) {
                parells++;
            }
        }

        System.out.println("Hi ha " + parells + " números parells");
    }
}`,
          sortida: 'Hi ha 3 números parells',
          perque: 'Parells: 8, 12 i 20. El comptador `parells` s\'incrementa només quan el residu (`%`) és 0. Fixa\'t que no fem `break`: volem comptar-los tots.'
        }
      },
      {
        id: 'mini6', titol: 'Troba l\'error', dificultat: 'mitjana', temps: '5 min',
        enunciat: 'Este programa hauria de sumar les 4 notes i no funciona. Copia\'l, executa\'l, llig el missatge i arregla\'l.',
        codi: {
          titol: 'Trencat.java',
          mal: true,
          text: `int[] notes = {5, 6, 7, 8};
int suma = 0;

for (int i = 0; i <= notes.length; i++) {
    suma = suma + notes[i];
}
System.out.println(suma);`
        },
        pista: 'Quants índexs té un array de 4 caselles? Fins a quin número pot arribar `i`?',
        solucio: {
          titol: 'Arreglat.java',
          text: `int[] notes = {5, 6, 7, 8};
int suma = 0;

for (int i = 0; i < notes.length; i++) {
    suma = suma + notes[i];
}
System.out.println(suma);`,
          sortida: '26',
          perque: 'Amb `i <= notes.length`, quan `i` val 4 (igual que la quantitat de caselles) el programa busca la casella 4, que no existix, i llancça `ArrayIndexOutOfBoundsException`. La condició correcta és `i < notes.length`.'
        }
      },
      {
        id: 'mini7', titol: 'El millor temps de la cursa', dificultat: 'repte', temps: '10 min',
        enunciat: 'Demana 4 temps d\'una cursa (en segons) i mostra el millor temps i la mitjana.',
        exemple: {
          entrada: 'Temps 1: 12.5\nTemps 2: 11.8\nTemps 3: 13.2\nTemps 4: 12.0',
          sortida: 'Millor temps: 11.8 segons\nMitjana: 12.375 segons'
        },
        solucio: {
          titol: 'Cursa.java',
          text: `import java.util.Scanner;

public class Cursa {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        double[] temps = new double[4];

        for (int i = 0; i < temps.length; i++) {
            System.out.print("Temps " + (i + 1) + ": ");
            temps[i] = teclat.nextDouble();
        }

        double millor = temps[0];
        double suma = 0;
        for (int i = 0; i < temps.length; i++) {
            if (temps[i] < millor) {
                millor = temps[i];
            }
            suma = suma + temps[i];
        }

        System.out.println("Millor temps: " + millor + " segons");
        System.out.println("Mitjana: " + (suma / temps.length) + " segons");
    }
}`,
          entrada: '12.5\n11.8\n13.2\n12.0\n',
          sortida: `Temps 1: Temps 2: Temps 3: Temps 4: Millor temps: 11.8 segons
Mitjana: 12.375 segons`,
          sortidaMostrada: `Temps 1: 12.5
Temps 2: 11.8
Temps 3: 13.2
Temps 4: 12.0
Millor temps: 11.8 segons
Mitjana: 12.375 segons`,
          perque: 'Atenció: en una cursa el **millor** temps és el més **menut**, així que la comparació és `<`. Ací hem fet la cerca del mínim. I com que el bucle aprofita per a sumar, hem fet les dos coses en un sol recorregut.'
        }
      }
    ]
  },

  principals: {
    intro: 'Quatre exercicis complets. Pensa primer: quantes caselles? quin recorregut?',
    exercicis: [
      {
        id: 'ex1', titol: 'Les notes de la classe', dificultat: 'facil', temps: '20 min',
        enunciat: 'Demana 6 notes i mostra: totes les notes numerades, la mitjana, la nota més alta, la més baixa i quantes persones han aprovat (5 o més).',
        exemple: {
          entrada: 'Nota 1: 6\nNota 2: 7\nNota 3: 3\nNota 4: 9\nNota 5: 5\nNota 6: 8',
          sortida: 'Mitjana: 6.333333333333333\nMés alta: 9.0\nMés baixa: 3.0\nAprovats: 5'
        },
        solucio: {
          titol: 'NotesClasse.java',
          text: `import java.util.Scanner;

public class NotesClasse {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);
        double[] notes = new double[6];

        for (int i = 0; i < notes.length; i++) {
            System.out.print("Nota " + (i + 1) + ": ");
            notes[i] = teclat.nextDouble();
        }

        double suma = 0;
        double maxima = notes[0];
        double minima = notes[0];
        int aprovats = 0;

        for (int i = 0; i < notes.length; i++) {
            suma = suma + notes[i];

            if (notes[i] > maxima) {
                maxima = notes[i];
            }
            if (notes[i] < minima) {
                minima = notes[i];
            }
            if (notes[i] >= 5) {
                aprovats++;
            }
        }

        System.out.println("Mitjana: " + (suma / notes.length));
        System.out.println("Més alta: " + maxima);
        System.out.println("Més baixa: " + minima);
        System.out.println("Aprovats: " + aprovats);
    }
}`,
          entrada: '6\n7\n3\n9\n5\n8\n',
          sortida: `Nota 1: Nota 2: Nota 3: Nota 4: Nota 5: Nota 6: Mitjana: 6.333333333333333
Més alta: 9.0
Més baixa: 3.0
Aprovats: 5`,
          sortidaMostrada: `Nota 1: 6
Nota 2: 7
Nota 3: 3
Nota 4: 9
Nota 5: 5
Nota 6: 8
Mitjana: 6.333333333333333
Més alta: 9.0
Més baixa: 3.0
Aprovats: 5`,
          perque: 'Un sol bucle pot fer quatre faenes alhora: sumar, buscar el màxim, buscar el mínim i comptar aprovats. El màxim i el mínim comencen en `notes[0]` i el bucle els actualitza quan toca.'
        },
        pista: 'Pots fer-ho tot en un sol bucle si crees les variables abans. Les notes de 5 o més s\'aproven: `>= 5`.'
      },
      {
        id: 'ex2', titol: 'Buscar un nom', dificultat: 'mitjana', temps: '20 min',
        enunciat: 'Guarda 6 noms en un array. Demana un nom a l\'usuari i digues si està a la llista i en quina posició (comptant des de l\'1, com faria una persona). Si hi ha més d\'una coincidència, mostra totes les posicions.',
        exemple: {
          entrada: 'Nom a buscar: Carla',
          sortida: 'Carla està a la posició 3.'
        },
        solucio: {
          titol: 'BuscarNom.java',
          text: `import java.util.Scanner;

public class BuscarNom {
    public static void main(String[] args) {
        String[] noms = {"Ana", "Bruno", "Carla", "Dani", "Eva", "Carla"};
        Scanner teclat = new Scanner(System.in);

        System.out.print("Nom a buscar: ");
        String buscat = teclat.next();

        boolean trobat = false;

        for (int i = 0; i < noms.length; i++) {
            if (noms[i].equalsIgnoreCase(buscat)) {
                System.out.println(buscat + " està a la posició " + (i + 1) + ".");
                trobat = true;
            }
        }

        if (!trobat) {
            System.out.println(buscat + " no està a la llista.");
        }
    }
}`,
          entrada: 'Carla\n',
          sortida: `Nom a buscar: Carla està a la posició 3.
Carla està a la posició 6.`,
          sortidaMostrada: `Nom a buscar: Carla
Carla està a la posició 3.
Carla està a la posició 6.`,
          perque: 'Com que volem **totes** les posicions, no hi ha `break`. La variable bandera `trobat` servix per a saber, al final, si no hem mostrat res. I `equalsIgnoreCase` fa que no importen les majúscules: «CARLA» també es trobaria.'
        },
        pista: 'Sense `break` perquè poden haver-hi repetits. La variable `trobat` es posa a `true` dins del `if`.'
      },
      {
        id: 'ex3', titol: 'Analitzador de paraules', dificultat: 'mitjana', temps: '25 min',
        enunciat: 'Demana una paraula i mostra: quantes lletres té, la primera, l\'última, quants caràcters en majúscula tindria i quantes vocals té.',
        exemple: {
          entrada: 'Escriu una paraula: musculacio',
          sortida: 'Lletres: 10\nPrimera: m\nÚltima: o\nEn majúscules: MUSCULACIO\nVocals: 5'
        },
        solucio: {
          titol: 'Analitzador.java',
          text: `import java.util.Scanner;

public class Analitzador {
    public static void main(String[] args) {
        Scanner teclat = new Scanner(System.in);

        System.out.print("Escriu una paraula: ");
        String paraula = teclat.next();

        int vocals = 0;
        for (int i = 0; i < paraula.length(); i++) {
            char lletra = Character.toLowerCase(paraula.charAt(i));

            if (lletra == 'a' || lletra == 'e' || lletra == 'i' || lletra == 'o' || lletra == 'u') {
                vocals++;
            }
        }

        System.out.println("Lletres: " + paraula.length());
        System.out.println("Primera: " + paraula.charAt(0));
        System.out.println("Última: " + paraula.charAt(paraula.length() - 1));
        System.out.println("En majúscules: " + paraula.toUpperCase());
        System.out.println("Vocals: " + vocals);
    }
}`,
          entrada: 'musculacio\n',
          sortida: `Escriu una paraula: Lletres: 10
Primera: m
Última: o
En majúscules: MUSCULACIO
Vocals: 5`,
          sortidaMostrada: `Escriu una paraula: musculacio
Lletres: 10
Primera: m
Última: o
En majúscules: MUSCULACIO
Vocals: 5`,
          perque: 'Un text es recorre igual que un array: `charAt(i)` per a cada posició. L\'última lletra és `length() - 1`. Com que `musculacio` no té accents, cada lletra és una posició.'
        },
        pista: 'Per a la primera lletra, `charAt(0)`; per a l\'última, `charAt(paraula.length() - 1)`. Per a les vocals, un bucle amb un `if`.'
      },
      {
        id: 'ex4', titol: 'La travessa de set dies', dificultat: 'repte', temps: '30 min',
        enunciat: 'Guarda les temperatures de 7 dies (una per dia) en un array, i els noms dels dies en un altre array. Després mostra: la llista amb el dia i la temperatura, la mitjana, els dies que han estat per damunt de la mitjana i el dia més càlid i el més fred amb el seu nom.',
        exemple: {
          entrada: 'Dilluns: 21\nDimarts: 19.5\nDimecres: 24\nDijous: 26.5\nDivendres: 23\nDissabte: 18\nDiumenge: 20',
          sortida: 'Mitjana: 21.714285714285715\nPer damunt de la mitjana: 3 dies\nMés càlid: Dijous amb 26.5\nMés fred: Dissabte amb 18.0'
        },
        solucio: {
          titol: 'Travessa.java',
          text: `import java.util.Scanner;

public class Travessa {
    public static void main(String[] args) {
        String[] dies = {"Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"};
        double[] temp = new double[7];
        Scanner teclat = new Scanner(System.in);

        for (int i = 0; i < dies.length; i++) {
            System.out.print(dies[i] + ": ");
            temp[i] = teclat.nextDouble();
        }

        double suma = 0;
        int indexCalor = 0;
        int indexFred = 0;

        for (int i = 0; i < temp.length; i++) {
            suma = suma + temp[i];

            if (temp[i] > temp[indexCalor]) {
                indexCalor = i;
            }
            if (temp[i] < temp[indexFred]) {
                indexFred = i;
            }
        }

        double mitjana = suma / temp.length;
        System.out.println("Mitjana: " + mitjana);

        int perDamunt = 0;
        for (int i = 0; i < temp.length; i++) {
            if (temp[i] > mitjana) {
                perDamunt++;
            }
        }
        System.out.println("Per damunt de la mitjana: " + perDamunt + " dies");

        System.out.println("Més càlid: " + dies[indexCalor] + " amb " + temp[indexCalor]);
        System.out.println("Més fred: " + dies[indexFred] + " amb " + temp[indexFred]);
    }
}`,
          entrada: '21\n19.5\n24\n26.5\n23\n18\n20\n',
          sortida: `Dilluns: Dimarts: Dimecres: Dijous: Divendres: Dissabte: Diumenge: Mitjana: 21.714285714285715
Per damunt de la mitjana: 3 dies
Més càlid: Dijous amb 26.5
Més fred: Dissabte amb 18.0`,
          sortidaMostrada: `Dilluns: 21
Dimarts: 19.5
Dimecres: 24
Dijous: 26.5
Divendres: 23
Dissabte: 18
Diumenge: 20
Mitjana: 21.714285714285715
Per damunt de la mitjana: 3 dies
Més càlid: Dijous amb 26.5
Més fred: Dissabte amb 18.0`,
          perque: 'La clau és guardar **la posició**, no el valor: `indexCalor` i `indexFred` són índexs, i així podem traure el nom del dia de l\'altre array. Eixa parella d\'arrays que es corresponen («arrays paral·lels») es fa servir moltíssim.'
        },
        pista: 'En compte de guardar el màxim, guarda la **posició** del màxim (`indexCalor = i`) i després consulta els dos arrays amb eixa posició.'
      }
    ]
  },

  reptes: {
    reptes: [
      {
        titol: 'La llista de la compra',
        blocs: [
          { p: 'Crea un array de 10 textos per als productes de la compra. El programa demana productes fins que l\'usuari escriu `fi` o fins que s\'ompliga l\'array. Al final ha de mostrar la llista numerada i dir quants productes hi ha.' },
          { p: 'El repte és que **no saps quants productes escriurà l\'usuari**: necessites una variable que compte quants n\'has guardat, comprovar que no t\'has passat de l\'última casella i usar eixa variable com a condició del bucle.' },
          { p: 'Pregunta\'t: què ha de passar si l\'usuari vol afegir un producte número 11? I si escriu directament `fi` sense res més?' }
        ],
        ampliacions: [
          'Comprovar que el producte no estiga ja a la llista abans d\'afegir-lo.',
          'Permetre esborrar un producte pel seu número (idea: desplaçar els següents una casella cap arrere).',
          'Mostrar la llista en orde alfabètic... amb les ferramentes que encara no coneixem, no es pot. Guarda-ho per al Tema 6.'
        ]
      },
      {
        titol: 'L\'histograma dels daus',
        blocs: [
          { p: 'Guarda en un array les 12 tirades d\'un dau i, després, compta quantes vegades ha eixit cada valor de l\'1 al 6. El resultat ha de ser un *histograma*: per a cada valor, una línia amb tantes estrelletes com vegades ha eixit.' },
          { p: 'Exemple del que volem: `1: **` vol dir que l\'1 ha eixit dos vegades. El truc és que les tirades d\'un valor sempre estaran entre 1 i 6: si l\'array de comptadors té 7 caselles, la tirada 3 es compta en `comptadors[3]` sense cap `if`.' },
          { p: 'Pensa primer com ompliries l\'array de comptadors sense cap `if`, i després com faries les estrelletes (un bucle dins d\'un altre).' }
        ],
        ampliacions: [
          'Que les tirades les genere el programa (per exemple, amb `(int) (Math.random() * 6) + 1`).',
          'Mostrar el percentatge de cada valor amb un decimal.',
          'Fer el dibuix amb barres de `#` de llargària proporcional al número de tirades.'
        ]
      }
    ]
  },

  errors: {
    entradeta: 'Els errors d\'este tema són molt fàcils de detectar si saps què buscar: quasi tots parlen de posicions.',
    errors: [
      {
        titol: 'Buscar una casella que no existix',
        mal: { titol: 'Mal.java', text: `int[] notes = new int[5];\nnotes[0] = 7;\nSystem.out.println(notes[5]); // no existix!` },
        bo: { titol: 'Be.java', text: `int[] notes = new int[5];\nnotes[0] = 7;\nSystem.out.println(notes[4]); // l'última és length - 1` },
        que: 'El programa compila bé, però en executar-lo es para i mostra un missatge llarg amb `ArrayIndexOutOfBoundsException`.',
        perque: 'L\'array té 5 caselles amb índexs del **0 al 4**. La casella 5 no existix, i Java no et deixa accedir a memòria que no és teua.',
        detectar: '`Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5`: el missatge diu ben clar quin índex havies demanat i quantes caselles hi ha.',
        corregir: 'L\'última casella d\'un array és sempre `array.length - 1`. Si necessites un número fix, comprova que estiga dins del rang.'
      },
      {
        titol: 'Recórrer fins a length inclòs (i <= length)',
        mal: { titol: 'Mal.java', text: `int[] notes = {5, 6, 7, 8};\nint suma = 0;\n\nfor (int i = 0; i <= notes.length; i++) {  // ERROR\n    suma = suma + notes[i];\n}` },
        bo: { titol: 'Be.java', text: `int[] notes = {5, 6, 7, 8};\nint suma = 0;\n\nfor (int i = 0; i < notes.length; i++) {\n    suma = suma + notes[i];\n}` },
        que: 'El programa suma les quatre notes correctament… i després es para amb `ArrayIndexOutOfBoundsException: Index 4 out of bounds for length 4`.',
        perque: 'Amb `<=` el bucle fa una volta de més: `i` arriba a valdre el número de caselles, i eixa casella no existix.',
        detectar: 'El programa funciona bé durant un moment i falla just al final. Si l\'error apareix *després* d\'un resultat correcte, quasi sempre és un `<=` que hauria de ser `<`.',
        corregir: 'Per a recórrer arrays, la condició correcta és **`i < array.length`**. Memoritza-ho com una fórmula.'
      },
      {
        titol: 'length amb parèntesis en un array',
        mal: { titol: 'Mal.java', text: `int[] notes = new int[5];\nint quants = notes.length();\nSystem.out.println(quants);`, missatge: 'error: Cannot invoke length() on the array type int[]\n        int quants = notes.length();\n                      ^^^^^^^^^^^^^^' },
        bo: { titol: 'Be.java', text: `int[] notes = new int[5];\nint quants = notes.length;\nSystem.out.println(quants);` },
        que: 'El programa no compila.',
        perque: 'En un array, `length` és una dada que ja porta dins (sense parèntesis). Els parèntesis són per als mètodes, i el text (`String`) sí que té un mètode `length()`.',
        detectar: 'El missatge diu `Cannot invoke length() on the array type int[]`. També passa al revés: escriure `text.length` en un text dona `length cannot be resolved or is not a field`.',
        corregir: 'Regla: **array → `length`** (sense parèntesis); **text → `length()`** (amb parèntesis).'
      },
      {
        titol: 'Crear l\'array sense new',
        mal: { titol: 'Mal.java', text: `int[] notes;\nnotes[0] = 5;\nSystem.out.println(notes[0]);`, missatge: 'error: The local variable notes may not have been initialized\n        notes[0] = 5;\n        ^^^^^\n(2 errors)' },
        bo: { titol: 'Be.java', text: `int[] notes = new int[5];\nnotes[0] = 5;\nSystem.out.println(notes[0]);` },
        que: 'El programa no compila i assenyala la línia on guardem el valor.',
        perque: '`int[] notes;` només diu «este nom serà un array d\'enters», però **no crea les caselles**. Sense `new`, no hi ha res on guardar.',
        detectar: 'El missatge parla de «may not have been initialized» (pot ser que no s\'haja inicialitzat).',
        corregir: 'Cal crear l\'array: `int[] notes = new int[5];` (o omplir-lo directament amb `{...}`).'
      },
      {
        titol: 'Mostrar l\'array sencer amb un println',
        mal: { titol: 'Mal.java', text: `int[] punts = {120, 95, 180};\nSystem.out.println(punts);` },
        bo: { titol: 'Be.java', text: `import java.util.Arrays;\n\nint[] punts = {120, 95, 180};\nSystem.out.println(Arrays.toString(punts)); // [120, 95, 180]` },
        que: 'En compte dels números, apareix una cosa estranya com `[I@1b6d3586`.',
        perque: '`println` no sap recórrer arrays: el que escriu és la «matrícula» interna de l\'objecte. No és un error del programa, però no és el que volem.',
        detectar: 'Eixida que comença per `[` i porta una `@` amb números i lletres. Si vas de pressa ni ho notes!',
        corregir: 'O bé fas un bucle per a mostrar cada casella, o bé uses `System.out.println(Arrays.toString(array))` per a vore-ho tot d\'una vegada.'
      },
      {
        titol: 'Numerar els missatges amb l\'índex directament',
        mal: { titol: 'Mal.java', text: `String[] noms = {"Ana", "Bruno", "Carla"};\n\nfor (int i = 0; i < noms.length; i++) {\n    System.out.println(i + " - " + noms[i]); // mostra «0 - Ana»\n}` },
        bo: { titol: 'Be.java', text: `String[] noms = {"Ana", "Bruno", "Carla"};\n\nfor (int i = 0; i < noms.length; i++) {\n    System.out.println((i + 1) + " - " + noms[i]); // «1 - Ana»\n}` },
        que: 'El programa funciona, però la llista comença en «0 - Ana» i als usuaris els pareix un error.',
        perque: 'L\'índex intern comença en 0, però les persones comptem des d\'1. El programa no està mal: està mal explicat a l\'usuari.',
        detectar: 'Ho veus directament en l\'eixida quan el primer element és el 0. És un error de **presentació**, no de càlcul.',
        corregir: 'Suma 1 en el missatge: `(i + 1)`. I recorda\'t que `noms[i]` **no** canvia: la casella seguix sent la `i`.'
      }
    ]
  },

  resum: {
    entradeta: 'Les idees que has d\'endur-te d\'este tema.',
    idees: [
      'Un **array** guarda molts valors del mateix tipus en caselles numerades.',
      'Es crea amb `new`: `int[] notes = new int[5];` (5 caselles) o amb `{...}`.',
      'Els índexs van del **0** fins a **`length - 1`**. El primer és el 0!',
      'Es recorre amb un `for`: `for (int i = 0; i < array.length; i++)`.',
      'El *for-each* (`for (int x : array)`) servix per a llegir-ho tot sense índex.',
      'Array i bucle junts: sumes, mitjanes, màxims, mínims, comptadors i cerques.',
      'El màxim i el mínim comencen en `array[0]` i el bucle comença en 1.',
      'Els textos també es recorren: `length()`, `charAt(i)`, `substring`, `equals`, `contains`.',
      '`array.length` **sense** parèntesis; `text.length()` **amb** parèntesis.'
    ]
  },

  autoavaluacio: {
    entradeta: 'Nou preguntes. Pensa-les abans de mirar la solució.',
    preguntes: [
      {
        pregunta: 'Quantes caselles té `int[] notes = new int[6];` i quin és l\'índex de l\'última?',
        resposta: 'Té 6 caselles i l\'última és l\'índex 5.',
        perque: 'El número entre claudàtors és la quantitat de caselles. Com que els índexs comencen en 0, les caselles són 0, 1, 2, 3, 4 i 5: la última és `length - 1`.'
      },
      {
        pregunta: 'Amb quin índex s\'accedix a la primera casella d\'un array?',
        opcions: ['Amb l\'1', 'Amb el 0', 'Depén de com s\'haja creat'],
        resposta: 'b) Amb el 0.',
        perque: 'En Java (i en quasi tots els llenguatges) la primera posició d\'un array és la 0. Per això, per a mostrar la llista a persones, sumem 1 en el missatge.'
      },
      {
        pregunta: 'Què mostra este codi?',
        codi: { titol: 'Pregunta.java', text: `int[] edats = {14, 15, 16};\nSystem.out.println(edats.length);\nSystem.out.println(edats[1]);` },
        resposta: 'Mostra `3` i `15`.',
        perque: '`edats.length` és 3 (les tres caselles) i `edats[1]` és la **segona** casella, perquè la primera és la 0. Este segon detall és el que més costa al principi.'
      },
      {
        pregunta: 'Com s\'escriu correctament el bucle per recórrer un array de nom `notes`?',
        opcions: [
          '`for (int i = 0; i <= notes.length; i++)`',
          '`for (int i = 0; i < notes.length; i++)`',
          '`for (int i = 1; i <= notes.length; i++)`'
        ],
        resposta: 'b) `for (int i = 0; i < notes.length; i++)`',
        perque: 'L\'índex comença a 0 i ha d\'arribar fins a `length - 1`: per això la condició és `<` (menut), no `<=`. La tercera opció es deixaria la primera casella i es passaria de la última.'
      },
      {
        pregunta: 'Este codi falla en executar-se. Per què?',
        codi: { titol: 'Pregunta.java', text: `int[] notes = {5, 6, 7, 8};\nint suma = 0;\n\nfor (int i = 0; i <= notes.length; i++) {\n    suma = suma + notes[i];\n}` },
        resposta: 'Perquè el bucle intenta llegir la casella 4, que no existix (l\'array va de la 0 a la 3).',
        perque: 'Amb `<=` el bucle fa una volta de més. Apareix `ArrayIndexOutOfBoundsException: Index 4 out of bounds for length 4`. La condició correcta és `i < notes.length`.'
      },
      {
        pregunta: 'Per què el màxim d\'un array s\'inicialitza amb `array[0]` i no amb 0?',
        resposta: 'Perquè si tots els valors de l\'array foren negatius (per exemple temperatures sota zero), el 0 seria un resultat fals.',
        perque: 'El primer element sempre és un valor real de l\'array, així que servix de campió provisional sempre. Començar amb 0 dona resultats incorrectes amb arrays de números negatius.'
      },
      {
        pregunta: 'Escriu el codi que compta quantes notes d\'un array `notes` estan aprovades (5 o més).',
        resposta: '`int aprovats = 0; for (int i = 0; i < notes.length; i++) { if (notes[i] >= 5) { aprovats++; } }`',
        perque: 'El comptador es crea abans del bucle i s\'incrementa només quan es complix la condició. Sense `break`: volem comptar-les totes.'
      },
      {
        pregunta: 'Este codi compila? Per què?',
        codi: { titol: 'Pregunta.java', text: `int[] notes = new int[5];\nint quants = notes.length();` },
        resposta: 'No compila: en un array, `length` va **sense** parèntesis.',
        perque: 'El missatge és `Cannot invoke length() on the array type int[]`. Els parèntesis són per al `length()` del text (`String`). Array = `length`; text = `length()`.'
      },
      {
        pregunta: 'Què fa `charAt(2)` sobre el text `"Hola"` i per què no es pot fer servir `==` per a comparar textos complets?',
        resposta: '`charAt(2)` torna `l` (la tercera lletra, perquè es comença a comptar en 0). Els textos complets es comparen amb `equals` perquè amb `==` es compara si són el mateix objecte, no si diuen el mateix.',
        perque: 'Cada posició d\'un text és un `char`, i els `char` sí que es comparen amb `==` perquè són lletres simples. Els `String` són objectes i necessiten `equals`.'
      }
    ]
  },

  /* ------------------------------------------------------- DIAPOSITIVES */
  diapositives: {
    objectiu: 'Guardar moltes dades en caselles numerades i recórrer-les amb bucles per a calcular el que vulguem.',
    index: [
      'Per què arrays?',
      'Crear i accedir',
      'Índexs: del 0 al length-1',
      'Recórrer amb for i for-each',
      'Omplir des del teclat',
      'Màxims, mínims i cerques',
      'Els textos també es recorren',
      'Practiquem'
    ],
    blocs: [
      {
        tipus: 'concepte',
        titol: 'El problema de les mil variables',
        bullets: [
          '30 notes no poden ser 30 variables',
          'Un array: una variable amb moltes caselles',
          'Cada casella té un número: la seua posició',
          'Array + bucle = màquina de calcular'
        ],
        notes: 'Escriure 6 variables a la pissarra i preguntar com ho faríem amb 300.'
      },
      {
        tipus: 'esquema',
        titol: 'Índexs: del 0 al length-1',
        flux: ['[0] → 120', '[1] → 95', '[2] → 180', '[3] → 60', '[4] → 145'],
        nota: '5 caselles = índexs del 0 al 4. El 5 no existix: ArrayIndexOutOfBoundsException.'
      },
      {
        tipus: 'codi',
        titol: 'Crear i recórrer',
        codi: 'int[] punts = {120, 95, 180, 60, 145};\n\nfor (int i = 0; i < punts.length; i++) {\n    System.out.println("Jugador " + (i + 1) + ": " + punts[i]);\n}',
        sortida: 'Jugador 1: 120\nJugador 2: 95\nJugador 3: 180\nJugador 4: 60\nJugador 5: 145',
        notes: 'Insistir en i < length (sense igual). Provocar l\'error de canviar <= per vore què passa.'
      },
      {
        tipus: 'codi',
        titol: 'Omplir amb el teclat',
        codi: 'double[] notes = new double[5];\n\nfor (int i = 0; i < notes.length; i++) {\n    System.out.print("Nota " + (i + 1) + ": ");\n    notes[i] = teclat.nextDouble();\n}',
        sortida: 'Nota 1: 6\nNota 2: 7\nNota 3: 6\nNota 4: 9\nNota 5: 8',
        notes: 'El patró es repetix sempre: un bucle per a omplir i un altre per a calcular.'
      },
      {
        tipus: 'codi',
        titol: 'L\'aspirant al títol de màxim',
        codi: 'int maxim = punts[0];\n\nfor (int i = 1; i < punts.length; i++) {\n    if (punts[i] > maxim) {\n        maxim = punts[i];\n    }\n}',
        sortida: 'La millor partida: 180 punts',
        notes: 'Preguntar: per què no comencem amb 0? Què passaria amb temperatures negatives?'
      },
      {
        tipus: 'comparacio',
        titol: 'for o for-each?',
        esquerra: { titol: 'for amb índex', bullets: ['Necessite la posició', 'Vull omplir o canviar caselles', 'Vull comparar amb la següent'] },
        dreta: { titol: 'for-each', bullets: ['Només vull llegir els valors', 'Codi més curt', 'No puc guardar res dins'] }
      },
      {
        tipus: 'codi',
        titol: 'Els textos es recorren igual',
        codi: 'String paraula = "videoconsola";\nint vocals = 0;\n\nfor (int i = 0; i < paraula.length(); i++) {\n    char lletra = paraula.charAt(i);\n    if (lletra == \'a\' || lletra == \'e\' || lletra == \'i\'\n            || lletra == \'o\' || lletra == \'u\') {\n        vocals++;\n    }\n}',
        sortida: 'La paraula videoconsola té 6 vocals.',
        notes: 'char amb cometes simples: els char es comparen amb ==, els textos amb equals.'
      },
      {
        tipus: 'activitat',
        titol: 'Ara et toca a tu',
        enunciat: 'Demana 6 notes, guarda-les en un array i mostra la mitjana, la més alta i la més baixa.',
        temps: '15 min',
        pistes: ['Un bucle per a omplir', 'Un altre per a calcular', 'El màxim i el mínim comencen en notes[0]'],
        notes: 'Passar per les taules comprovant que el bucle comença en 0 i acaba en length-1.'
      },
      {
        tipus: 'pregunta',
        titol: 'Pensem un moment',
        pregunta: 'Per què creus que el primer índex d\'un array és el 0 i no l\'1? Quines conseqüències té quan mostrem dades a l\'usuari?'
      }
    ],
    resum: [
      'Un array guarda molts valors del mateix tipus.',
      'Es crea amb new o amb {valors}.',
      'Índexs del 0 fins a length-1.',
      'Es recorre amb for: i < array.length.',
      'for-each per a llegir; for amb índex per a omplir.',
      'Sumes, mitjanes, màxim i mínim amb un bucle.',
      'Cerca: variable bandera i break.',
      'array.length sense parèntesis; text.length() amb parèntesis.'
    ],
    seguent: 'Tema 5 · Mètodes: reutilitzar el codi'
  }
};
