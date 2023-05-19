# Email
Per fer la maquetació dels emails fem servir una eina que es diu [MJML](https://mjml.io/). Ens soluciona el problema de la dificultat que té maquetar correus perquè siguin compatibles amb el màxim nombre de plataformes i que a més siguin accessibles.

## Com maquetar els emails amb MJML
MJML el que fa és fer servir unes etiquetes pròpies per als diferents elements. Cada etiqueta té uns atributs que es poden fer servir. A més, alguns elements com `<mj-text>` permeten afegir HTML a dintre o sigui que pràcticament podem fer qualsevol cosa que necessitem. A la [documentació oficial de MJML](https://documentation.mjml.io/) estan totes les etiquetes. A més, és interessant saber que es pot descarregar una extensió per VSCode per fer servir MJML directament.

## Com exportar els emails a HTML
Hem d'escollir una de les opcions per fer servir MJML. Fer-lo servir directament al web, instal·lant l'app o l'extensió per VSCode. A qualsevol de les opcions tenim disponible una preview del email i l'opció per exportar a HTML.

## Com garantir l'accessibilitat
El principal obstacle per fer correus accessibles és que per fer la maquetació no funcionen les característiques més noves de CSS com ara Grid o Flexbox i, per això, s'han de fer servir taules per maquetar-los. El problema per l'accessibilitat és que aquestes taules no són "reals", no mostren informació ordenada d'una manera lògica. El que ens aporta aquest framework MJML és que quan s'exporta el correu a HTML ja afegeix el `role="presentation"` a totes les taules que només es fan servir per maquetació i així els lectors de pantalla no les llegeixen com a taules.

Més enllà d'això el que hem de tenir en compte són les característiques generals d'accessibilitat de qualsevol contingut, com ara:
- Que només hi hagi un H1 i que es respecti la jerarquia d'encapçalaments.
- Afegir un text alternatiu a les imatges que aportin informació.
- Fer servir enllaços amb un text que sigui descriptiu.

## [Exemple de email](../../web/email/email.html)