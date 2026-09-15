# Llibreries externes (còpia local)

En esta carpeta es guarda una còpia de les llibreries que el material necessita
per funcionar **sense internet** (per exemple, en ordinadors de l'aula amb la
xarxa restringida o sense accés a CDN).

## pptxgen.bundle.js

- **Què és:** PptxGenJS 4.0.1, la llibreria que crea els fitxers PowerPoint
  (`.pptx`) des del navegador. El paquet `pptxgen.bundle.js` oficial inclou
  PptxGenJS **i** JSZip (la llibreria que escriu el fitxer comprimit).
- **Per a què:** fa funcionar el botó **«Crear PowerPoint»** de cada tema.
- **Llicència:** MIT · Autor: Brent Ely · <https://github.com/gitbrent/PptxGenJS>
- **Origen:** `https://cdn.jsdelivr.net/npm/pptxgenjs@4.0.1/dist/pptxgen.bundle.js`
- **Com s'usa:** `assets/js/pptx.js` intenta primer el CDN (jsDelivr, després
  unpkg) i, si no hi ha connexió, carrega esta còpia local automàticament.

### Com actualitzar-la

```bash
npm pack pptxgenjs@<nova-versio>
tar xzf pptxgenjs-<nova-versio>.tgz
cp package/dist/pptxgen.bundle.js assets/vendor/pptxgen.bundle.js
```

Després actualitza el número de versió en `assets/js/pptx.js`
(constant `FONTS_LLIBRERIA`) i en este fitxer.

> Nota: el material no necessita Node ni cap servidor per funcionar.
> Estos comandaments són només per al professorat que vullga actualitzar
> la llibreria.
