# Loader/spinner
Tenim dos tipus de components per indicar la pàgina on el component s'està carregant.
## Loader
El loader és l'animació dels tres punts que pugen i baixen i està feta amb CSS a [loader.scss](../../web/src/sass/components/_loader.scss).
## Progress bar
La barra de progrés es fa amb la llibreria progressbar.js. L'exemple de com aplicar-la està a [progress-bar-sample.js](../../web/src/js/progress-bar-sample.js).
## Consideracions d'accessibilitat
Hem d'afegir el `role="status"` al contenidor de l'animació. A més a més, hem d'afegir el `role="img"` a l'element on fem l'animació i un `aria-label="Carregant"` per indicar la mateixa informació que s'està indicant visualment. 

El component antic de càrrega segueix a [old-loader.html](../../web/components/old-loader.html) per si és necessari fer-ho servir en el futur.


## [Exemple de Loader/spinner](../../web/components-sample/loader.html)