# Modal dialog
El component de modal és probablement un dels components amb què més cura hem d'anar perquè sigui accessible. Ha de tenir una sèrie d'atributs i un comportament determinat. La modal és un component que s'ha d'obrir per petició de l'usuari fent clic a un botó i l'usuari ha d'interactuar amb aquest component (omplint camps o fent clic en enllaços per exemple) i pot tancar-lo amb un altre botó.

## Estructura (HTML) del component modal dialog

Com a estructura agafarem la del exemple (enllaçat al final d'aquest document) per aclarir els atributs que ha de tenir: 

* El `<div>` que conté la modal ha de tenir els següents atributs: 
    - `role='dialog'`
    - `aria-modal='true'`
    - `aria-labelledby` amb l'id del títol de la modal    
    - `aria-describedby` amb l'id de l'element que descriu la modal (per exemple un `<p>`).
* Per altra banda, veurem al comportament de la modal que necessitarem altres atributs perquè el comportament sigui el correcte. 

```html
<div class="modal-overlay"></div>
<button id="open-modal" class="open-modal secondary">Accedir sense identitat digital</button>
<div id="login-modal" class="login-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description" aria-hidden="true">
    <div class="close-modal-container">
        <button class="close-modal" id="close-modal" tabindex="-1">
            <span class="material-icons sr-only">Tancar</span>
            <span class="material-icons" aria-hidden="true">close</span>
        </button>
    </div>
    <h1 class="title-m" id="modal-title">Accés sense identitat digital</h1>
    <p class="text-p-18" id="modal-description">Introdueix les dades adreçades a la notificació</p>
    <form>
        <fieldset aria-labelledby="id-document">
            <div class="field-legend">
                <legend class="text-p-16" id="id-document">Document identificatiu</legend>
                <a href="#" class="text-p-14" tabindex="-1">Quin document</a>
              </div>
            <div class="select-input">
                <label for="select-id-document" class="sr-only">Tipus de document</label>
                <select id="select-id-document" class="field" tabindex="-1">
                    <option value="vat">VAT</option>                        </select>
                <label for="number-id-document" class="sr-only">Número de document (12345678A)</label>
                <input class="field" type="text" id="number-id-document" tabindex="-1" placeholder="12345678A">
            </div>
        </fieldset>
        <fieldset aria-labelledby="id-person">
            <div class="field-legend">
                <legend class="text-p-16" id="id-person">Document de la persona vinculada</legend>
                 <a href="#" class="text-p-14" tabindex="-1">Quina persona</a>
            </div>
             <div class="select-input">
                <label for="select-id-person" class="sr-only">Tipus de document</label>
                <select id="select-id-person" class="field" tabindex="-1">
                    <option value="nif">NIF</option>
                </select>
                <label for="number-id-person" class="sr-only">Número de document (12345678A)</label>
                <input class="field" type="text" id="number-id-person" tabindex="-1" placeholder="12345678A">
            </div>
        </fieldset>         
    </form>
    <button class="send-code primary" aria-describedby="send-description" tabindex="-1">Envia’m un codi</button>
    <div id="send-description">
        <p class="text-p-14">T'enviarem un missatge de text amb un codi de verificació de sis dígits al mòbil o al correu electrònic introduït.</p>
        <h2 class="text-p-16 p-semibold">Els codis d’un sol ús tenen les següents característiques:</h2>
        <ul>
            <li class="text-p-16">Només es poden fer servir per accedir al sistema que l’està sol·licitant.</li>
            <li class="text-p-16">Tenen una vigència temporal limitada (en general de 30 minuts).</li>
            <li class="text-p-16">Només es poden fer servir en una transacció.</li>
            <li class="text-p-16">Són d’ús personal i intransferible.</li>
        </ul>
    </div>
</div>
```

## Comportament del component

En relació amb el comportament de la modal hem de tenir en compte què:
* La modal no pot rebre focus mentre estigui tancada (ni el seu contingut)
* El focus ha de quedar atrapat a dintre de la modal fins que l'usuari decideixi tancar-la

Per això, si fem servir `display:none` no hi ha problema perquè amb aquesta manera d'ocultar l'element tant la modal com tot el seu contingut quedaran amagats tant visualment com per les tecnologies d'assistència.

Si es fan servir altres maneres d'ocultar la modal, com en el cas de l'exemple (per requeriments d'animacions de CSS per exemple), haurem d'ocultar la modal també per les tecnologies d'assistència quan aquesta estigui tancada: 

* Haurà de tenir un atribut `aria-hidden='true'`que canviarà a false quan es faci clic al botó per obrir la modal.
* Tots els elements focusables de l'interior de la modal hauran de tenir un `tabindex='-1'` que haurà de canviar per un `tabindex='0'` quan es faci clic al botó per obrir la modal.
* Quan es tanqui la modal s'haurà de tornar als valors inicials. 

Finalment, s'haurà de fer servir un script per atrapar el focus a dintre de la modal [com el de l'exemple](../../web/src/js/modal-dialogs.js).

## Estils i Design System d'AOC

En relació amb els estils s'ha de tenir en compte que per fer l'efecte de difuminat a tot el contingut de la web menys a la modal, s'ha fet servir un `<div>` sense contingut amb la classe `.modal-overlay`.

## [Exemple de modal-dialog](../../web/components-sample/modal-dialog.html).