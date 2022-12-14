# Grid

Com que el Design System d'AOC està basat en 12 columnes, igual que l'estructura grid de Boostrap, es fa servir aquesta llibreria pel grid.

Per fer-ho, com que només ens interessa el grid i no importar altres parts de Bootstrap que poden afectar a l'accessibilitat, el que es fa és agafar només les parts de Bootstrap que ens interessen.

A **index.scss** està documentat exactament el que s'està fent amb aquest propòsit.

## Estructura i classes de bootstrap

El que es fa amb classes de Bootstrap és maquetar l'estructura de la pàgina amb els diferents elements. És a dir, la idea és minimitzar al màxim la quantitat de CSS custom que s'ha d'afegir. Per fer-ho, farem servir les següents classes de Bootstrap per l'estructura:

* `.container` / `.container-fluid`: Es farà servir una classe o un altre segons si volem que la secció agafi el total de la finestra o que estigui a dintre d'un contenidor. `.container-fluid` només es farà servir quan al disseny s'indiqui amb el fons de color que el contingut agafa tota la pàgina o quan veiem que els elements surten del contenidor, per exemple, a la capçalera. Es pot fer servir un `.container` a dintre d'un `container fluid` si necessitem que el contingut estigui a dintre del contenidor, però que el color de fons agafi tota la finestra.
* `.g-0`: Farem servir aquesta classe a tots els .container, .container-fluid i .row. Aquesta classe treu els gutters de Bootstrap que ens poden donar problemes amb mòbil de scroll horizontal que ens faria fallar criteris com el 1.4.10. Afegirem els paddings que necessitem a mà, el grid només ens dona l'estructura.
* `.row`: Una columna sempre haurà d'estar niada en una fila
* `.col`: Es fan servir les classes .col i totes les seves variants per les columnes
* Finalment, a les `.row` podrem fer servir classes de flexbox per col·locar els elements com `.align-items-center`.

**Farem servir l'estructura: container > row > column.**

**Important**: recordar [no reorganitzar elements visualment sense reorganitzar-los al DOM][1] si és necessari perquè ens pot ocasionar problemes d'accessibilitat. L'ordre visual ha de coincidir amb l'ordre del DOM. 

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility