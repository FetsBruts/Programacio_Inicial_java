# Guia docent · Optativa SMX — Introducció a la Programació amb Java

**Material creat per Agustín Gil - IES La Vereda 2026**
Llicència [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.ca)

---

## 1. Què és este curs

Una optativa d'iniciació real a la programació per a alumnat de
**Sistemes Microinformàtics i Xarxes** que **no ha programat mai res**.
L'objectiu no és ensenyar molta sintaxi de Java: és que l'alumnat acabe
pensant *«sé agafar un problema, dividir-lo en passos i convertir-lo en un
programa»*. Java és l'eina amb què aprenem a fer-ho.

| Dada | Valor |
|---|---|
| Durada | Tema 0 + 9 sessions de 3 h ≈ **27 h lectives** |
| Nivell | Iniciació absoluta (0 coneixements previs) |
| Llenguatge | Java |
| Materials | Pàgina web per tema + PDF d'estudi + PowerPoint de classe |
| Avaluació | Pràctica de classe 35 %, projectes 30 %, autoavaluació i actitud 15 %, prova pràctica 20 % |

### Per què Java

Perquè és un llenguatge **estricte i explícit**: obliga a dir el tipus de cada
dada i a escriure el codi d'una manera ordenada. Eixa exigència, que al
principi és una molèstia, ajuda a entendre què està passant. A més, és un
llenguatge que encara es fa servir molt en el món professional i en el
desenvolupament d'aplicacions i serveis.

---

## 2. Objectius generals

En acabar el curs, l'alumnat hauria de ser capaç de:

1. **Analitzar** un problema senzill i descompondre'l en passos.
2. **Guardar i manipular** informació amb variables dels tipus bàsics.
3. **Escriure condicions** i prendre decisions dins d'un programa.
4. **Repetir** tasques amb bucles i saber quan cal un `while` o un `for`.
5. **Treballar amb col·leccions** de dades (arrays) i recórrer-les.
6. **Dividir un programa en mètodes** i reutilitzar codi.
7. **Crear classes i objectes** senzills amb atributs i mètodes.
8. **Construir un programa complet** de principi a fi, provar-lo i millorar-lo.
9. **Utilitzar la IA** com a assistent de programació sense deixar d'entendre
   el codi.
10. **Explicar** què fa el seu codi i per què el codi d'un altre (o d'una IA)
    està bé o està malament.

---

## 3. Mapa del curs

| Tema | Contingut | Bloc | Durada |
|---|---|---|---|
| 0 | Què és programar? | Punt de partida | Introducció curta |
| 1 | Variables i dades | Pensament de programador | 3 h |
| 2 | Decisions (`if`, `else`, condicions) | Pensament de programador | 3 h |
| 3 | Bucles (`while`, `for`) | Pensament de programador | 3 h |
| 4 | Arrays i dades | Pensament de programador | 3 h |
| 5 | Mètodes i modularitat | Pensament de programador | 3 h |
| 6 | Classes i objectes | POO intuitiva | 3 h |
| 7 | Construcció d'un programa complet | Construcció | 3 h |
| 8 | Programar en l'era de la IA | Programació real | 3 h |
| 9 | Cap a on va la programació? | Programació real | 3 h |

### Per què este orde

- **Temes 0-5:** pràcticament tot és *pensament de programador*: guardar dades,
  decidir, repetir, treballar amb moltes dades i dividir el problema.
- **Tema 6:** la POO arriba quan ja hi ha eines per entendre-la (variables,
  decisions, bucles, arrays i —sobretot— **mètodes**).
- **Temes 8-9:** connecten el que s'ha aprés amb la programació real de 2026:
  assistents d'IA, APIs, núvol, IoT, agents…

---

## 4. Normes de progresió de continguts (molt important)

Estes normes eviten el pitjor error possible: **ensenyar alguna cosa abans
d'hora i que l'alumnat perda el fil**.

| Moment | NO introduir encara | Sí que es pot usar |
|---|---|---|
| Tema 0 | variables, condicions… | `System.out.println()`, la carcassa `main` |
| Tema 1 | arrays, mètodes, objectes | tipus bàsics, operadors, `Scanner`, concatenació |
| Tema 2 | bucles, arrays | comparacions, operadors lògics, `if`, `switch` senzill |
| Tema 3 | arrays, mètodes | `while`, `for`, comptadors, acumuladors |
| Tema 4 | classes, col·leccions avançades | arrays, índexs, recorreguts, `String` útil |
| Tema 5 | classes pròpies | mètodes, paràmetres, `return`, `void` |
| Tema 6 | herència, interfícies, polimorfisme | classe, objecte, atributs, mètodes, constructor |
| Temes 7-9 | excepcions complexes, lambdes, streams, genèrics | tot l'anterior, aplicat |

Si en un tema cal escriure una estructura que l'alumnat encara no entén
(per exemple `public static void main(String[] args)`), es diu
literalment:

> «De moment no necessitem entendre esta part; ja arribarem més avant.»

I es continua. Sense explicacions innecessàries que desanimen.

---

## 5. Com és una sessió de 3 hores

| Temps | Moment | Què passa |
|---|---|---|
| 30-45 min | Explicació i demos | Es planteja una situació, una idea i un exemple executat al projector |
| 60-75 min | Programació guiada | El programa es construïx pas a pas entre tots |
| 60-75 min | Exercicis | Mini exercicis i exercicis principals amb solucions per comparar |
| 15-30 min | Repàs i repte | Resum visual, autoavaluació i repte obert |

**Ajustaments habituals**

- Si el grup arranca a poc a poc: dedica menys temps a la teoria i més a la
  programació guiada. La teoria ja està escrita a la web.
- Si el grup va ràpid: allarga la programació guiada amb variants («i si
  l'usuari escriu…?») abans de passar als reptes.
- Regla pràctica: **si al final de la sessió la majoria no ha escrit codi
  propi, el ritme va massa ràpid**.

---

## 6. Estructura de cada tema (11 apartats)

1. **Introducció** — una situació o pregunta que done sentit al tema.
2. **Què aprendrem?** — entre 3 i 6 objectius amb llenguatge d'alumnat.
3. **Teoria** — una idea → un exemple. Mai murs de teoria.
4. **Exemples explicats pas a pas** — codi comentat + eixida + per què.
5. **Programació guiada** — el programa es construïx per passos, amb
   preguntes per a classe.
6. **Mini exercicis** — de 4 a 8 activitats molt curtes (1-2 min).
7. **Exercicis principals («Fes el programa»)** — de 3 a 5, de menor a major
   dificultat, amb solució.
8. **Reptes** — problemes oberts, **sense botó de solució**.
9. **Errors habituals** — què ha passat, per què, com detectar-ho, com corregir.
10. **Resum visual** — de 5 a 10 idees per recordar.
11. **Autoavaluació** — 9 preguntes (3 fàcils, 3 intermèdies, 3 per pensar),
    sense indicar quina és quina.

---

## 7. Metodologia

- **Predir abans d'executar.** Davant de cada exemple es pregunta «què
  apareixerà per pantalla?». És el moment on es detecta si s'ha entès.
- **L'error com a contingut.** Es provoquen errors a propòsit per llegir el
  missatge del compilador i aprendre a buscar la causa.
- **Programació guiada en veu alta.** Pensa en veu alta: «ací necessite
  guardar…», «i si l'usuari escriu una altra cosa?», «provem-ho, a vore què
  passa».
- **Explica-ho amb les teues paraules.** Cada idea s'ha de poder explicar
  sense mirar el codi. Si no es pot explicar, no s'ha entès.
- **Treball per parelles** en els exercicis: una persona escriu i l'altra
  revisa i pregunta. Cada 15 minuts canvien.
- **Codi llegit en veu alta.** Llegir un fragment sencer abans d'escriure'l
  ajuda a l'alumnat que encara llig poc codi.

---

## 8. Avaluació

| Instrument | Pes | Què es mira |
|---|---|---|
| Pràctica de classe | 35 % | Exercicis fets a l'aula, funcionant i explicats |
| Projectes de tema | 30 % | El repte final, sobretot del Tema 4 en avant |
| Autoavaluació i actitud | 15 % | Preguntes d'autoavaluació, participació, ajuda als companys |
| Prova pràctica final | 20 % | Un programa senzill fet a l'ordinador, amb apunts si cal |

### Rúbrica del repte final

| Nivell | Descripció |
|---|---|
| Excel·lent | Funciona, està dividit en passos, provat amb casos distints i ben explicat |
| Bé | Funciona en els casos principals; algun detall millorable |
| En procés | Funciona a mitges; cal més pràctica amb l'estructura del tema |
| A repassar | No funciona o no s'entén el codi: es repetix la programació guiada |

**Criteris que pesen sempre:** noms de variables clars, codi comentat on cal,
casos límit provats, capacitat d'explicar el codi, i ús crític de la IA (si
s'ha usat, s'ha de saber justificar i millorar).

---

## 9. Materials i entorn

- **Entorn de treball:** el material no imposa cap ferramenta. El programa
  s'escriu igual en un **entorn en línia** (navegador, sense instal·lar res) que
  en un **entorn d'escriptori** amb el **JDK de Java 21 (LTS)** o superior. Els
  IDE més utilitzats: IntelliJ IDEA, Visual Studio Code, Eclipse, Apache NetBeans
  i BlueJ (didàctic). La decisió de quin es fa servir a l'aula és del professor.
- **Carpeta de treball:** una carpeta per tema (`tema1/`) i un fitxer per
  exercici, amb el nom de la classe pública (`Exercici3Notes.java`).

---

## 10. Com s'usen els tres formats

| Format | Per a què | Com s'obté |
|---|---|---|
| **Pàgina web** | Estudiar i practicar. Conté tot el tema, solucions i autoavaluació | Obrir `temes/temaN.html` |
| **PDF** | Manual d'estudi i còpia en paper per a qui ho preferixca | Botó **Imprimir PDF** |
| **PowerPoint** | Projectar i explicar a classe | Botó **Crear PowerPoint** |

**El PDF inclou** teoria, exemples, programació guiada, resum i **les tres
primeres preguntes d'autoavaluació amb la solució**. **No inclou** els
exercicis «Fes el programa», els reptes ni les preguntes 4-9 (així el manual
servix per a treballar sobre paper sense regalar les respostes).

**El PowerPoint no és la web copiada**: cada diapositiva té poc text, lletra
gran, codi gran i preguntes per llançar a classe.

---

## 11. Com modificar o afegir un tema (per al professorat)

**El contingut no es toca mai a `temes/temaN.html`**: eixe fitxer es genera.
Cada tema s'escriu una sola volta, com a dades, en `eines/contingut/temaN.js`.

1. **Edita el contingut** a `eines/contingut/temaN.js` (text, exemples,
   exercicis, errors, resum i diapositives). L'esquema dels blocs està
   documentat al capdamunt del mateix fitxer i a `docs/ARQUITECTURA-WEB.md`.
2. **Genera la pàgina i les diapositives:**
   `node eines/genera-temes.mjs N` → escriu `temes/temaN.html` i
   `assets/js/diapositives/temaN.js`. El generador **valida** el contingut
   (11 apartats, 3-6 objectius, 4-8 mini exercicis, 3-5 exercicis principals,
   almenys un repte, 3 errors, exactament 9 preguntes d'autoavaluació,
   5-10 idees de resum, diapositives presents).
3. **Publica'l** a `assets/js/dades-curs.js`: posa la ruta en `fitxer` i canvia
   `estat` a `'publicat'`. L'índex, el mapa i el menú lateral s'actualitzen
   sols.
4. **Comprova-ho:**
   - `npm run prova:sintaxi` — cap bloc Java amb errors de sintaxi.
   - `npm run prova:pagines` — les 11 seccions i els botons de cada tema.
   - `npm run prova:pptx -- assets/js/diapositives/temaN.js`.
   - Obrir la pàgina i vore-LA > **Imprimir PDF** (previsualització).
5. **Repàs final** amb la llista de comprovació de davall.

> Hi ha una via alternativa sense generador: `eines/plantilla-tema.html` es pot
> copiar a `temes/` i editar a mà. Només es recomana per a proves ràpides,
> perquè llavors el tema no passa pels controls automàtics de contingut.

### Llista de comprovació abans de publicar un tema

- [ ] Els 11 apartats hi són, amb els `id` correctes.
- [ ] Entre 3 i 6 objectius, escrits per a l'alumnat.
- [ ] Cada idea nova té un exemple just davall.
- [ ] Tots els blocs de codi s'executen i l'eixida és correcta.
- [ ] El codi va comentat i no usa res que encara no s'haja explicat.
- [ ] Els exemples són pròxims (jocs, notes, música, esports, diners, IA…).
- [ ] Hi ha 4-8 mini exercicis i 3-5 exercicis principals amb solució.
- [ ] Hi ha reptes **sense** botó de solució.
- [ ] Hi ha 9 preguntes d'autoavaluació (3 fàcils, 3 intermèdies, 3 de pensar) amb explicació de la resposta.
- [ ] `npm run prova:sintaxi` dona verd: cap bloc Java amb errors de sintaxi.
- [ ] Els errors habituals inclouen el codi que falla i el codi correcte.
- [ ] El llenguatge és natural i en valencià, sense perdre rigor.
- [ ] S'imprimeix bé: sense talls estranys i amb el codi llegible.
- [ ] El botó **Crear PowerPoint** genera la presentació sense errors.
- [ ] Apareix l'autoria i la llicència a la capçalera i al peu.

---

## 12. Atenció a la diversitat

- **Reforç:** treballa amb els mini exercicis i amb el codi dels exemples
  (modificar-lo és més fàcil que escriure'l de zero). Les pistes dels
  exercicis donen l'empenta sense resoldre'ls.
- **Ampliació:** els reptes i les «ampliacions opcionals» dels exercicis.
  També pot ser ampliació reescriure un exercici amb una altra estructura.
- **Alumnat que s'avança:** se li pot demanar que faça de «revisor»: buscar
  errors en el codi d'un company, explicar una solució a classe o preparar
  casos de prova.
- **Alumnat que s'encalla:** tornar al darrer bloc de codi que entenia i
  avançar des d'allà, sense saltar-se passos.

---

## 13. Errors freqüents a l'aula (i com respondre)

| Situació | Resposta recomanada |
|---|---|
| «No em funciona» sense mirar el missatge | Ensenyar a llegir el missatge del compilador i la línia que assenyala |
| Copien la solució sense llegir-la | Demanar que expliquen en veu alta què fa cada línia abans d'acceptar-la |
| Es queden en blanc davant d'un enunciat | Tornar a la pregunta: «què necessitem guardar?», «què ha de decidir?», «quantes voltes?» |
| Usen IA i no entenen el resultat | Comparar el codi de la IA amb el que sabem fer i demanar una versió pròpia, més simple |
| Volen fer «un joc gran» al Tema 2 | Guardar la idea i apuntar-la per al Tema 7: primer els fonaments |

---

## 14. Referències

- Java: <https://dev.java/> · documentació: <https://docs.oracle.com/en/java/>
- Compilador en línia: <https://www.jdoodle.com/online-java-compiler>
- PptxGenJS (generador de PowerPoint): <https://gitbrent.github.io/PptxGenJS/>
- Llicència del material: <https://creativecommons.org/licenses/by-nc/4.0/deed.ca>
