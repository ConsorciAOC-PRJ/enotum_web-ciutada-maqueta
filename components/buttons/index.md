# Botons

## Estructura i comportament (HTML) dels botons

Primer de tot, hem de tenir en compte que un botó és un element que **dispara una acció a la mateixa pàgina a la qual estem**. Per aquest element l'etiqueta d'HTML indicada és sempre `<button>`.

Com a la pràctica ens podem trobar amb diferents situacions i limitacions per part de la tecnologia, a continuació contemplem tres possibilitats per construir botons i com fer-ho de manera accessible:

1. Fent servir l'etiqueta `<button>`. 
    * Com que és la manera nativa de construir un element d'aquest tipus l'element ja funcionarà nativament com a botó.
    ```html
    <button>Exemple de botó</button>
    ```
2. A partir d'un enllaç `<a>`.
    * Haurem d'afegir el `role="button"` d'Aria i un `tabindex="0"` (perquè com que no tindrà href, no rebrà el focus per defecte).
    ```html
    <a role="button" tabindex="0">
        Exemple de botó
    </a>
    ```
3. A partir d'un element com `<div>` o `<span>`.
    * Haurem d'afegir el `role="button"` d'Aria i un `tabindex="0"` (perquè aquests elements no reben el focus per defecte).

**Important**: S'ha de tenir en compte que si es fa servir un element no natiu per construir un botó, s'haurà de fer servir el mètode preventDefault() de JavaScript per prevenir el comportament natiu de la barra d'espai i de la tecla enter i que funcionin per activar les funcions del botó.

A més, hem de tenir en compte, independentment de l'opció que hàgim de fer servir: 

* Si el comportament del botó és **obrir o tancar algun element desplegable**, hem d'afegir l'atribut `aria-expanded` que haurà de tenir un valor `false` per defecte i canviar a `true` quan l'element desplegable s'obri. Si el text del botó no canvia és correcta aquesta opció. Si el text del botó canvia, per exemple, inicialment és "Mostrar més anuncis" i en clicar-lo, el text passa a ser "ocultar anuncis", llavors no s'ha d'aplicar `aria-expanded`.
* Si el comportament del botó és del tipus **interruptor** (toggle), aquest haurà de tenir un valor d'`aria-pressed` amb valor `false` per defecte que haurà de canviar a `true`  quan s'activi el botó. Si el text del botó no canvia sigui quin sigui l'estat, cal `aria-pressed`. Si el text del botó canvia per especificar quina acció farà, no cal especificar l'estat pressed. Per exemple, un botó "play" si canvia a "pausa", no requereix `aria-pressed`. Si l'etiqueta sempre indica "play", llavors si que es necessari transmetre l'estat amb `aria-pressed` true/false.
* Respecte a les **icones** dels botons definits al design system d'AOC, aquestes icones només aporten informació precisament sobre aquests estats que ja estem comunicant amb els atributs d'ARIA o sigui que s'han d'amagar per lector de pantalla. Per fer-ho, s'hauran d'implementar amb CSS o fer servir `aria-hidden="true"` en el cas que estiguin implementats amb HTML. En el cas d'AOC, com fem servir els Material Icons de Google hauríem de fer servir `aria-hidden="true"` al `<span>` amb la icona que anirà a dintre del botó. Hi ha un mixin (center-btn-icon a _buttons.scss) preparat per centrar la icona amb el text.

### Botó disabled d'AOC

És important que quan un botó visualment estigui amb els estils de "disabled", s'ha d'indicar també aquesta informació de manera no visual:
* En el cas de fer servir l'element natiu `<button>` és suficient amb afegir l'atribut disabled.
* En el cas d'elements que no accepten aquest atribut farem servir `aria-disabled="true"`.

## Estils i Design System d'AOC

Hi ha un mixin preparat (_buttons.scss) per aplicar els estils directament amb totes les variacions del Design System. A la funció @include li hem de passar 4 valors:  
1. $type: primary / secondary / terciary / warning
2. $state: active / disabled ('active' per defecte)
3. $btn-size: normal / small ('normal' per defecte)
4. $color-mode: light / dark ('light' per defecte)

## [Exemples amb els diferents botons del DS](../../web/components-sample/buttons.html)