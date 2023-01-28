# Accordion

Per fer accordions bàsics, hem d'indicar la mateixa informació que estem indicant visualment als usuaris no visuals. Per fer-ho, haurem de fer servir els següents atributs:  
* `aria-expanded` per indicar si el accordion està obert o tancat. Per defecte, tindrà un valor de `false` i quan fem clic al botó per obrir-ho aquest valor haurà de canviar a `true`. En el cas, de l'e-notum, que el primer accordion està desplegat aquest tindrà un valor per defecte de `true`.

Per tant, l'estructura bàsica d'un accordion hauria de ser similar a:

```html
<div class="accordion">
    <button class="accordion-button aoc-border" aria-expanded="false">
        <h3>Com es pot saber que s'ha rebut una notificació electrònica?</h3>
        <span class="material-icons" aria-hidden="true">expand_more</span>
    </button>
    <div class="accordion-content">
        <p>S’enviarà un avís a l’adreça de correu electrònic o al número de mòbil que es va facilitar a l’organisme que emet la notificació. Per defecte, se t’enviarà un recordatori  a la meitat del termini, excepte en el casos en que l’ens emissor de la notificació hagi definit un termini personalitzat en l’enviament.</p>
        <button class="secondary">Més informació</button>
    </div>
</div>
```

## Estils visuals 

En l'àmbit visual hem de tenir en compte que la icona ha de canviar quan es fa el toggle. A més el color, d'hover ha de ser el primary-main-color que estigui definit. La gestió dels estils dels borders que canvien amb el toggle la fem amb la classe `.aoc-border`. 

## [Exemple d'accordion seguint el DS](../../web/components-sample/accordions.html)



