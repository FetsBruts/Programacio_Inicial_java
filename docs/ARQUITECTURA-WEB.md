# Arquitectura de la web del curs

Document tècnic intern. **Material creat per Agustín Gil - IES La Vereda 2026 · CC BY-NC 4.0.**

---

## 1. Principis tècnics

1. **Sense frameworks i sense «build».** HTML5, CSS modern i JavaScript
   modern (vanilla). No hi ha Node, ni npm, ni bundlers perquè el material
   funcione.
2. **S'ha d'obrir fent doble clic.** Qualsevol pàgina ha de funcionar amb
   `file://` (sense servidor). Per això no es fa servir `fetch()`, ni mòduls
   ES (`import`), ni rutes absolutes.
3. **Tot el que és compartit viu en `assets/`.** Cap tema duplica estils ni
   codi comú.
4. **Les dades del curs tenen una única font de veritat:**
   `assets/js/dades-curs.js`. Publicar un tema és canviar dos camps allà.
5. **Accessibilitat i respecte per l'usuari:** contrast alt, focus visible,
   `prefers-reduced-motion`, estats `aria-*`, textos alternatius.
6. **Impressió ben pensada:** el PDF s'obté amb `window.print()` i regles CSS
   específiques, sense generar fitxers intermedis.

### Navegadors

Provat amb navegadors moderns (Chrome/Edge/Firefox/Safari actuals).
El JavaScript usa `IntersectionObserver` i `localStorage` **amb comprovacions**:
si el navegador no els té (o el navegador bloqueja `localStorage` en
`file://`, com fa Chrome), la pàgina continua funcionant sense eixes millores.

---

## 2. Estructura de carpetes

```
Programacio_Inicial_java/
├── index.html                     Pàgina índex del curs (mapa, metodologia, avaluació)
├── temes/
│   └── temaN.html                 Una pàgina per tema (es creen tema a tema)
├── assets/
│   ├── css/
│   │   ├── base.css               Sistema de disseny: tokens i components comuns
│   │   ├── tema.css               Pàgina de tema: capçalera, menú lateral, exercicis…
│   │   ├── curs.css               Pàgina índex: portada, mapa, avaluació, ruta del curs
│   │   └── print.css              Regles d'impressió (manual docent en PDF)
│   ├── img/
│   │   ├── favicon.svg
│   │   └── idea-al-programa.svg   Il·lustració de la portada
│   ├── js/
│   │   ├── dades-curs.js          Font única de veritat (temes, autoria, llicència)
│   │   ├── resaltat.js            Resaltat de sintaxi Java (sense llibreries)
│   │   ├── plantilla-tema.js      Motor de les pàgines de tema
│   │   ├── portada.js             Motor de la pàgina índex
│   │   ├── pptx.js                Generador de PowerPoint (PptxGenJS)
│   │   └── diapositives/
│   │       ├── _PLANTILLA.js      Plantilla de diapositives d'un tema
│   │       └── temaN.js           Diapositives del tema N (es creen tema a tema)
│   └── vendor/
│       ├── README.md
│       └── pptxgen.bundle.js      PptxGenJS 4.0.1 + JSZip (còpia local, MIT)
├── eines/
│   ├── plantilla-tema.html        Plantilla interna per crear temes/temaN.html
│   ├── prova-pptx.mjs             Comprovació/exportació de PPTX des de Node
│   └── prova-pagines.mjs          Comprovació automàtica de les pàgines (opcional)
├── docs/
│   ├── GUIA-DOCENT.md
│   └── ARQUITECTURA-WEB.md
├── LICENCIA.md
└── README.md
```

---

## 3. Ordre de càrrega dels scripts

Tots els `script` han d'anar **al final del `<body>`** i en este orde:

```html
<script src="../assets/js/resaltat.js"></script>        <!-- 1. pintar el codi -->
<script src="../assets/js/dades-curs.js"></script>      <!-- 2. dades del curs -->
<script src="../assets/js/diapositives/temaN.js"></script> <!-- 3. (opcional) diapositives -->
<script src="../assets/js/plantilla-tema.js"></script>  <!-- 4. motor de la pàgina -->
<script src="../assets/js/pptx.js"></script>            <!-- 5. generador de PPTX -->
```

Els fitxers de diapositives **només definixen dades** (`window.DIAPOSITIVES_TEMA`),
per això van abans del motor.

---

## 4. Sistema de disseny

### Tokens (`assets/css/base.css` → `:root`)

| Grup | Variables |
|---|---|
| Blaus | `--blau-950 … --blau-100` (fosc → clar) |
| Cian | `--ciano-600/500/400/200/100` |
| Taronja | `--taronja-600/500/400/200/100` |
| Funcionals | `--verd-*`, `--roig-*`, `--groc-*` |
| Neutres | `--blanc`, `--paper`, `--paper-2`, `--tinta`, `--tinta-suau`, `--vora` |
| Tipografia | `--font-text`, `--font-codi`, `--mida-*`, `--interlineat` |
| Espaiat | `--esp-1 … --esp-8` |
| Formes i ombres | `--radi*`, `--ombra*` |
| Altres | `--amplaria-max`, `--transicio`, `--z-capcalera` |

**Regla:** els fitxers de tema **no** redefinixen colors ni tipografia; només
composen components.

### Components de `base.css`

- Estructura: `.contenidor`, `.seccio` (`--suau`, `--fosca`), `.etiqueta-seccio`, `.entradeta`
- Graelles: `.graella`, `.graella--2`, `.graella--4`, `.fila`, `.pila`
- Targetes i xipets: `.targeta` (`--interactiva`), `.pastilla` (`--ciano/--taronja/--verd/--roig/--blau`)
- Botons: `.boto` (`--primari`, `--ciano`, `--taronja`, `--clar`, `--fantasma`, `--petit`, `--gran`, `--ampla`, `--solucio`), `.boto-icona`
- Nota informativa: `.nota` (`--info`, `--tip`, `--avis`, `--important`, `--exit`) i `.nota-notecnica` (per a estructures de Java que encara no toca entendre)
- Codi: `pre.codi` (+ `data-titol`, `data-etiqueta`), `.bloc-codi`, `.consola`, `.tok-*`
- Taules: `.taula-embolcall`, `table.taula`
- Altres: `.acordio`, `.solucio`, `.pas`, `.pregunta-classe`, `.prediccio`, `figure.figura`, `.llista-objectius`, `.llista-netejada`, `.llista-punts`, `.revela`, `.tornar-dalt`, `.no-imprimible`, `.només-impressio`

### Components de `tema.css`

`.capcalera` (+ `__interior`, `__marca`, `__logo`, `__accions`, `__meta`),
`.barra-progres`, `.disposicio`, `.menu-lateral`, `.indice-intern`,
`.llista-temes-mini`, `.overlay-menu`, `.hero-tema`, `.situacio`,
`.prerequisits`, `.plan-sessio`, `.concepte` (+ `__idea`), `.exercici`
(+ `--mini`, `__cap`, `__num`, `__titol`, `__enunciat`, `__accions`),
`.marca-fet`, `.pista`, `.repte`, `.error-habitual`, `.missatge-error`,
`.resum-visual`, `.llista-autoavaluacio`, `.navegacio-temes`,
`.targeta-tema-nav`, `.peu`, `.llicencia`, `.avis-toast`.

### Components de `curs.css`

`.portada` (+ `__graella`, `__etiqueta`, `__entradeta`, `__accions`, `__dades`,
`__imatge`), `.principis`/`.principi`, `.llista-temes`/`.targeta-tema`,
`.plan-temporal`, `.pestanyes`/`.pestanya`/`.panel-pestanya`,
`.bloc-avaluacio`, `.barra-avaluacio`, `.ruta`/`.ruta__fase`/`.ruta__passos`/`.ruta__pas`.

---

## 5. Contracte d'una pàgina de tema

El motor `plantilla-tema.js` espera estos elements (tots opcionals, però si hi
són, els usa):

| Element | Per a què |
|---|---|
| `body[data-tema="N"]` | Identifica el tema (progrés, navegació, localStorage) |
| `<section data-nav="01 · Introducció">` | Genera l'índex intern i ressalta la secció activa |
| `#indice-intern` | Contenidor de l'índex intern |
| `#llista-temes-mini` | Llista de temes del curs (menú lateral) |
| `#navegacio-temes` | Targetes «tema anterior / tema següent» |
| `#progres-exercicis` (> `span` + `#progres-exercicis-text`) | Comptador d'exercicis marcats |
| `.barra-progres > span` | Barra de progrés de lectura |
| `#tornar-dalt` | Botó per tornar a dalt |
| `[data-menu-toggle]` + `.overlay-menu` | Menú lateral en mòbil (`body.menu-obert`) |
| `[data-imprimir]` | Botó «Imprimir PDF» |
| `[data-pptx]` | Botó «Crear PowerPoint» |
| `#portada-impressio` | Portada del PDF (`[data-camp]` s'omplin sols) |
| `.peu-impressio` | Peu de pàgina que es repetix en el PDF |
| `pre.codi` amb `data-titol` / `data-etiqueta` | Bloc de codi amb capçalera i botó de copiar |

### Interaccions declaratives

```html
<!-- Mostrar / ocultar la solució -->
<button class="boto boto--solucio" data-solucio="ex1"
        data-text-mostrar="Mostrar solució" data-text-ocultar="Ocultar solució">…</button>
<div class="solucio" id="ex1" hidden>…</div>

<!-- Pista (sense solució) -->
<button data-pista="pista1">Vore una pista</button>
<div class="pista" id="pista1" hidden>…</div>

<!-- Marca personal d'exercici fet (es guarda al navegador) -->
<label class="marca-fet"><input type="checkbox" data-fet="ex1"> Fet</label>
```

Els blocs de codi s'escriuen així (les entitats HTML són obligatòries per a
`<`, `>` i `&`):

```html
<pre class="codi" data-titol="ElMeuPrograma.java" data-etiqueta="EXEMPLE"><code>if (a &lt; b) {
    System.out.println("a és més menut");
}</code></pre>
```

`plantilla-tema.js` els envolta en `.bloc-codi` i afig la capçalera i el botó
de copiar.

---

## 6. Contracte de la pàgina índex (`index.html`)

| Element | Per a què |
|---|---|
| `#mapa-temes` | Es generen les targetes dels 10 temes des de `dades-curs.js` |
| `#taula-estat tbody` | Taula d'estat del material |
| `[data-pestanya]` + `.panel-pestanya` | Pestanyes «Alumnat / Professorat / Casa / Entorn» |
| `#portada-impressio [data-camp]` | Portada del PDF |
| `[data-autoria]`, `[data-llicencia]` | Text d'autoria i llicència |
| `.barra-progres`, `#tornar-dalt`, `[data-imprimir]` | Igual que en els temes |

---

## 7. Impressió (PDF)

`assets/css/print.css` definix `@page { margin: 1cm; size: auto; }` i:

- **S'imprimix:** portada, introducció, objectius, teoria, exemples, guiada,
  errors habituals, resum i **les 3 primeres preguntes d'autoavaluació**
  (amb la solució oberta).
- **S'oculta:** menú, capçalera, navegació, botons, controls, `#fes-el-programa`
  (exercicis), `#reptes`, les preguntes 4-9 i les solucions dels mini exercicis.
- El codi passa a fons clar amb colors llegibles en paper, i es prohibix el
  tall de blocs (`break-inside: avoid`).
- `.peu-impressio` és un element `position: fixed` que apareix en cada pàgina.

Per a comprovar-ho sense imprimir: obrir la pàgina i usar la vista prèvia del
navegador (Ctrl+P).

---

## 8. Generador de PowerPoint (`pptx.js`)

1. Carrega PptxGenJS 4.0.1: jsDelivr → unpkg → còpia local
   (`assets/vendor/pptxgen.bundle.js`, que inclou JSZip).
2. Crea 16:9 amb dos màsters: `TEMA` (clar) i `FOSC` (blau fosc).
3. Afig les diapositives fixes: portada, autoria i llicència, índex,
   objectiu, resum i tancament.
4. Afig les diapositives del tema (`window.DIAPOSITIVES_TEMA.blocs`).
5. Escriu `TemaN-<titol>.pptx`.

Tipus de bloc disponibles: `concepte`, `codi`, `prediccio`, `esquema`,
`comparacio`, `activitat`, `pregunta`. Si un tipus no existix, s'avisa per
consola i se salta la diapositiva (el generador no es trenca).

Detalls de disseny: títol gran i poques vinyetes; el codi va sobre fons fosc
(`#08142F`) amb tipografia monoespaiada; les mides de lletra s'ajusten
automàticament segons el nombre de línies.

---

## 9. Proves i manteniment

```bash
# Sintaxi de tots els JavaScript
for f in assets/js/*.js assets/js/diapositives/*.js; do node --check "$f"; done

# Generar/comprovar un PowerPoint (també servix per a un tema concret)
node eines/prova-pptx.mjs
node eines/prova-pptx.mjs assets/js/diapositives/tema1.js

# Sintaxi de TOTS els blocs Java del material (necessita java-parser)
npm install            # instal·la java-parser i jsdom (només per a les proves)
node eines/prova-sintaxi-java.mjs
node eines/prova-sintaxi-java.mjs 7 8     # només els temes indicats

# Comprovació de les pàgines (opcional, necessita jsdom)
node eines/prova-pagines.mjs
```

Els blocs que **no són Java** (diagrames, plans en text, altres llenguatges) es
marquen amb `noExecuta: true` al fitxer de contingut; els errors provocats a
propòsit, amb `mal: true`. Així la comprovació de sintaxi pot exigir que tots
els blocs Java restants siguen correctes.

**Manteniment habitual:** l'any, el nom de l'autor o el centre es canvien
només en `assets/js/dades-curs.js` (camp `autoria`); la resta de pàgines els
hereten automàticament.
