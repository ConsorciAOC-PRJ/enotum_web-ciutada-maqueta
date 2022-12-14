# Footer

En el cas del footer, s'ha de tenir en compte que hi ha diferents possibilitats de footer segons l'ens.

En el cas del footer complet, hem de tenir en compte els següents aspectes:
* **L'estructura d'encapçalaments:** com que no hi ha un títol del tipus "Peu de pàgina" tots els encapçalaments del footer pengen del H1 de la pàgina. Per tant, han d'estar construïts com H2
* Les icones, com que són decoratives i no aporten informació han d'anar amb `aria-hidden="true"`. 
```html
<span class="material-icons-outlined" aria-hidden="true">question_answer</span>
```
* Els enllaços estan agrupats en llistes.

## Exemple de footer complet

```html
<footer class="container-fluid g-0">
    <div class="container g-0">
        <div class="row g-0 features-row">
            <div class="col-md">
                <div class="feature-container">
                    <span class="material-icons-outlined" aria-hidden="true">question_answer</span>
                    <div>
                        <h2 class="h-size-4">Els meus drets</h2>
                        <p class="text-p-16-grey">Coneix els teus drets quan et relaciones amb l’administració pública (no inclou persones jurídiques)</p>
                    </div>
                </div>
            </div>
            <div class="col-md">
                <div class="feature-container">
                    <span class="material-icons-outlined" aria-hidden="true">people</span>
                    <div>
                        <h2 class="h-size-4">Recomanador social</h2>
                        <p class="text-p-16-grey">Ajuts socials que t’ofereixen les administracions públiques en funció de la teva situació personal i familiar.</p>
                    </div>
                </div>
            </div>
            <div class="col-md">
                <div class="feature-container">
                    <span class="material-icons-outlined" aria-hidden="true">record_voice_over</span>
                    <div>
                        <h2 class="h-size-4">Atenció ciutadana</h2>
                        <p class="text-p-16-grey">Vegeu les diverses formes de contactar amb l’ajuntament.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row g-0 links-row">
            <div class="col-md">
                <h2 class="links-heading">Seu electrònica</h2>
                <ul>
                    <li><a href="#">Què és la Seu-e</a></li>
                    <li><a href="#">Mapa web</a></li>
                    <li><a href="#">Accessibilitat</a></li>
                    <li><a href="#">Avís legal</a></li>
                </ul>
            </div>
            <div class="col-md">
                <h2 class="links-heading">Tràmits i gestions</h2>
                <ul>
                    <li><a href="#">Catàleg de tràmits</a></li>
                    <li><a href="#">Instància genèrica</a></li>
                    <li><a href="#">Impostos i tributs</a></li>
                    <li><a href="#">Presentar una factura</a></li>
                    <li><a href="#">Presentar una licitació</a></li>
                    <li><a href="#">Tràmits a altres Administracions</a></li>
                </ul>
            </div>
            <div class="col-md">
                <h2 class="links-heading">Govern Obert i transparència</h2>
                <ul>
                    <li><a href="#">Informació publica</a></li>
                    <li><a href="#">Dades Obertes</a></li>
                    <li><a href="#">Indicadors</a></li>
                    <li><a href="#">Darreres actualitzacions</a></li>
                </ul>
            </div>
            <div class="col-md">
                <h2 class="links-heading">Atenció ciutadana</h2>
                <ul>
                    <li><a href="#">Els meus drets</a></li>
                    <li><a href="#">Identitat digital</a></li>
                    <li><a href="#">Contacte</a></li>
                </ul>
            </div>
        </div>
        <div class="row g-0 time-row">
            <div class="col-md-12">
                <p class="text-p-14-grey"><strong>Hora oficial:</strong> 09:55h - 19 novembre 2021</p>
            </div>
        </div>
        <div class="row g-0">
            <div class="col-md-12">
                <div class="logos-container">
                    <img src="assets/logo.png" alt="">
                    <div class="credits-container">
                        <p class="text-p-14-grey">Servei prestat per l’<a href="#">Administració Oberta de Catalunya</a></p>
                        <img src="assets/aoc-logo.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
```