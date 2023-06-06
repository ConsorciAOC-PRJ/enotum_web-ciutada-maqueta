# Filtres
Per fer els filtres i la seva accessibilitat, hem de distingir entre el codi que fem servir per l'estructura (HTML), el comportament (JS) i els estils (SCSS). A cada secció hi ha una llista amb els arxius que es fan servir. Hem de tenir en compte la modal amb tots els filtres i les variacions del component a mobile.
## Estructura i comportament (HTML) dels filtres
Aquest és el codi d'exemple que es fa servir a l'exemple enllaçat al final d'aquest document: 

```html
  <div class="filter-container" id="filter-1">
    <div class="btn-container">
        <button class="btn-filter" aria-expanded="false">
            <span id="filter-1-name">Emissor</span>
            <span class="material-icons filter-icon" aria-hidden="true">expand_more</span>
        </button>
    </div>
    <div class="filter-content" role="group" aria-labelledby="filter-1-name">
        <div class="filter-header">
            <h2 class="title-xs">Emissor</h2>
            <button class="text-p-16 link-grey btn-filter-rmv">Restaurar</button>
        </div>
        <div class="filter-main">
            <div class="search-bar">
                <input type="text" placeholder="Cercar emissor">
                <button>
                    <span class="sr-only">Cerca</span>
                    <span class="material-icons" aria-hidden="true">search</span>
                </button>
            </div>
            <ul class="custom-rb-container">
                <li>
                    <input type="radio" id="tots" value="Tots" name="emissor">
                    <label for="tots" class="custom-rb-label">
                        <span class="material-icons custom-rb" aria-hidden="true">radio_button_checked</span>
                        <span class="text-p-16 p-dark">Altres no relacionats</span>
                    </label>
                </li>
                <li>
                    <input type="radio" id="badalona" value="Badalona" name="emissor">
                    <label for="badalona" class="custom-rb-label">
                        <span class="material-icons custom-rb" aria-hidden="true">radio_button_unchecked</span>
                        <span class="text-p-16 p-dark">Ajuntament Badalona</span>
                    </label>
                </li>
            </ul>
        </div>
        <div class="filter-footer">
            <button class="terciary-s">Cancel·lar</button>
            <button class="primary-s-rm" onclick="applyFilter('filter-1')">Mostrar resultats</button>
        </div>
    </div>
</div>
```
Per motius d'accessibilitat, tot i que sembla que el botó pels filtres és només un component, en realitat són dos botons. Això és perquè no es pot tenir el botó "d'esborrar" a dintre d'un altre botó perquè els usuaris que naveguen amb tecnologies d'assistència no podrien fer-los servir. Per això, hi ha un contenidor per al filtre i a aquest contenidor tenim el botó per obrir i tancar el filtre i també el botó per esborrar el filtre.

A més, hem d'afegir l'atribut `role="group"` i l'atribut `aria-labelledby` amb l'id del `<span>` que conté el nom del filtre (a dins del botó).

Pel que fa al comportament, el comportament bàsic dels filtres està a: [filters.js](../../web/src/js/filters.js). Tenim una funció per gestionar els filtres i una per aplicar els filtres i per esborrar-los.

A més, hem de tenir en compte que hi ha una modal amb tots els filtres tant a desktop com a mobile. Aquesta modal es gestiona com la resta de modals del web amb: [modal-dialog.js](../../web/src/js/modal-dialog.js).

Per últim, a mobile s'ha de fer que en fer scroll, en arribar als filtres, s'han de quedar fixats a la pantalla. Aquest exemple de comportament està fet a: [fixed-filers.js](../../web/src/js/fixed-filers.js).
## Estils i Design System d'AOC
Respecte als estils, tenim un arxiu per l'estil dels filtres i un altre per la modal amb tots els filtres. A la pàgina on s'apliquen, també s'han d'aplicar estils perquè quedi tot integrat. Es pot veure com estan aplicats a la pàgina de la bústia.

- [filters.scss](../../web/src/sass/components/_filters.scss)
- [filters_modal.scss](../../web/src/sass/components/_filters_modal.scss)
- [postbox.scss](../../web/src/sass/pages/_postbox.scss)

## [Exemples de filtres](../../web/components-sample/filters.html)