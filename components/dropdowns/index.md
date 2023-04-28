# Dropdowns

Per fer dropdowns bàsics com ara el típic desplegable de selecció d'idioma, hem d'indicar la mateixa informació que estem indicant visualment als usuaris no visuals. Per fer-ho, haurem de fer servir els següents atributs:  
* `aria-expanded` per indicar si el desplegable està obert o tancat. Per defecte, tindrà un valor de `false` i quan fem clic al botó per obrir-ho aquest valor haurà de canviar a `true`.
* `aria-current` per indicar quina de les opcions està seleccionada actualment. L'opció seleccionada tindrà un valor de `true` i la resta d'opcions un valor de `false`.

Per tant, l'estructura bàsica d'un dropdown hauria de ser similar a:

```html
<div class="dropdown">
        <button aria-expanded="false">Botó</button>
        <span class="material-icons" aria-hidden="true">arrow_drop_down</span>
    <div class="dropdown-content">
        <ul>
            <li><a href="#" aria-current="true">Opció 1</a></li>
            <li><a href="#"  aria-current="false">Opció 2</a></li>
        </ul>
    </div>
</div>
```

NOTA: A l'exemple s'ha afegit una icona amb `aria-hidden` per exemplificar que a les icones que no aportin informació addicional se les ha d'afegir `aria-hidden`. En aquest cas, la informació que aporta la fletxa l'estaria donant l'atribut `aria-expanded`. 

## Primera opció per defecte: el desplegable d'idioma

En el cas del desplegable d'idioma estem agafant com a nom del botó la primera opció del desplegable. Visualment, estem indicant amb la icona de bola del món que aquest component serveix per canviar d'idioma, però aquesta informació no l'estem donant als usuaris de lector de pantalla.

Per això, hem d'afegir un atribut `aria-label` al botó. Aquest ha de començar igual que el nom del botó però afegirà informació sobre la seva funcionalitat. És a dir, si l'opció per defecte és "CA", el botó tindrà un `aria-label="CA (Català), Selecció d'idioma"`. Aquest `aria-label` haurà de canviar automàticament quan hi hagi un altre idioma seleccionat i el text "Selector d'idioma" haurà de canviar amb l'idioma de la pàgina.

```html
<div class="dropdown">
    <div class="dropdown-button">
        <span class="material-icons" aria-hidden="true">language</span>
        <button class="dropbtn" aria-expanded="false" aria-label="CA (Català), Selecció d'idioma">CA</button>
        <span class="material-icons" aria-hidden="true">arrow_drop_down</span>
    </div>
    <div class="dropdown-content">
        <ul>
            <li><a href="?/ca" class="active" aria-current="true">Català</a></li>
            <li><a href="?/es" class="" aria-current="false">Castellà</a></li>
        </ul>
    </div>
</div>
```

## [Exemple de dropdown](../../web/components-sample/dropdowns.html)