# Introducció a la Programació amb Java

**Optativa SMX** · Cicle Formatiu de Grau Mitjà de Sistemes Microinformàtics i Xarxes

**Material creat per Agustín Gil - IES La Vereda 2026**
Llicència [Creative Commons Reconeixement-NoComercial 4.0 Internacional (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/deed.ca)

---

## Què és

Material complet per a una optativa d'iniciació a la programació amb **Java**,
pensada per a alumnat de 16 anys que **partix de zero**. No és un resum
accelerat de Java: és un curs per aprendre a **pensar com un programador**
(guardar dades, decidir, repetir, treballar amb moltes dades, dividir el
problema) i, quan ja hi ha eines per entendre-la, descobrir la programació
orientada a objectes.

Tot el contingut és en **valencià**.

| | |
|---|---|
| Durada | Tema 0 + 9 sessions de 3 h ≈ **27 h lectives** |
| Llenguatge | Java |
| Format | Pàgines web (estudiar) + PowerPoint (explicar) + PDF (manual) |
| Requisits | Cap. Es pot començar amb un entorn de programació en línia i, més avant, treballar amb el JDK instal·lat a l'ordinador |

---

## Com s'obre

No cal instal·lar res ni aixecar cap servidor:

1. Fes doble clic en **`index.html`** (o arrossega'l al navegador).
2. Des d'allà, entra al tema que toque.

El material està fet amb HTML5, CSS modern i JavaScript modern **sense
frameworks ni procés de construcció**, perquè funcione sempre: a l'aula, a
casa i en un pendrive.

---

## Estructura del curs

| Tema | Contingut | Durada |
|---|---|---|
| 0 | Què és programar? | Introducció |
| 1 | Variables i dades | 3 h |
| 2 | Decisions | 3 h |
| 3 | Bucles | 3 h |
| 4 | Arrays i dades | 3 h |
| 5 | Mètodes i modularitat | 3 h |
| 6 | Classes i objectes | 3 h |
| 7 | Construcció d'un programa complet | 3 h |
| 8 | Programació en l'era de la IA | 3 h |
| 9 | Cap a on va la programació? | 3 h |

Cada tema és una pàgina web amb **11 apartats** (introducció, objectius, teoria,
exemples, programació guiada, mini exercicis, «Fes el programa», reptes, errors
habituals, resum visual i autoavaluació), amb solucions desplegables i
autoavaluació de 9 preguntes. Els reptes **no tenen solució**: l'objectiu és
pensar.

---

## Els tres formats de cada tema

| Botó | Què produïx | Per a qui |
|---|---|---|
| **Imprimir PDF** | Manual d'estudi: teoria, exemples, programació guiada, resum i les 3 primeres preguntes d'autoavaluació amb solució | Alumnat i professorat |
| **Crear PowerPoint** | Presentació per projectar a classe: poc text, lletra gran, codi gran i esquemes | Professorat |
| **Pàgina web** | Tot el tema, amb solucions, pistes i progrés guardat al navegador | Alumnat |

---

## Estructura del repositori

```
index.html              Pàgina índex del curs (mapa, metodologia, avaluació)
temes/                  Una pàgina per tema: temaN.html
assets/css/             base.css (sistema de disseny), tema.css, curs.css, print.css
assets/js/              dades-curs.js (font única de veritat), resaltat.js,
                        plantilla-tema.js, portada.js, pptx.js, diapositives/
assets/img/             Il·lustracions i icona
assets/vendor/          PptxGenJS 4.0.1 (còpia local per a funcionar sense internet)
eines/                  Plantilla de tema i proves (ús intern del professorat)
docs/                   GUIA-DOCENT.md i ARQUITECTURA-WEB.md
```

---

## Estat del material

**Els deu temes estan publicats** (Tema 0 i sessions 1 a 9): pàgina web,
diapositives, manual per a imprimir i autoavaluació de cada un. L'índex i els
menús es construïxen automàticament a partir de `assets/js/dades-curs.js`.

## Comprovacions (per al professorat)

Les pàgines no necessiten Node ni cap dependència: s'obrin directament. Estes
comprovacions són ferramentes de control de qualitat del repositori:

```bash
npm install                          # java-parser + jsdom (només per a proves)
npm run genera -- 9                  # genera temes/tema9.html i les diapositives
npm run prova:sintaxi                # comprova la sintaxi de tots els blocs Java
npm run prova:pagines                # comprova les 11 seccions de cada tema (jsdom)
npm run prova:pptx                   # comprova el generador de PowerPoint
npm run prova:java -- 9              # executa els programes amb un JDK (opcional)
```

Cada tema viu com a **dades** en `eines/contingut/temaN.js`; el generador
`eines/genera-temes.mjs` produïx la pàgina i les diapositives, i valida les
regles de contingut (11 apartats, 9 preguntes d'autoavaluació, 4-8 mini
exercicis, 3-5 exercicis, etc.).

---

## Documentació

- **`docs/GUIA-DOCENT.md`** — guia didàctica: objectius, mapa del curs, normes
  de progressió de continguts, metodologia, avaluació, com afegir un tema nou,
  llista de comprovació de qualitat i atenció a la diversitat.
- **`docs/ARQUITECTURA-WEB.md`** — document tècnic: sistema de disseny,
  components, contractes de les pàgines, impressió i generador de PowerPoint.

---

## Llicència

**CC BY-NC 4.0** — es pot copiar, adaptar i usar amb finalitat educativa
citant l'autoria (Agustín Gil · IES La Vereda 2026) i enllaçant la llicència.
**No** es pot fer servir amb finalitat comercial.

Vegeu [`LICENCIA.md`](LICENCIA.md).
