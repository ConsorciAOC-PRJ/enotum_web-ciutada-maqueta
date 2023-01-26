# Banner de notificació

Els banners de notificació funcionen com a element que ens permet comunicar a l'usuari una informació rellevant en un moment determinat o en un context. Per fer-los accessibles és important comunicar aquesta informació a tots els tipus d'usuaris.

## Estructura i comportament (HTML) dels banners de notificació

En aquest sentit, el que hem de tenir en compte per l'accessibilitat és afegir l'atribut `role="alert"` que serà l'encarregat de comunicar el paper que juga aquest missatge a la pàgina. El codi quedaria així: 

```html
<div class="notification-banner error" role="alert">
    <div class="notification-header">
        <p class="text-p-16 p-semibold p-white">Important</p>
    </div>
    <div class="notification-body">
        <p class="text-p-18 p-semibold p-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. <a href="#">Enllaç</a></p>
        <p class="text-p-14 p-dark">Lorem ipsum dolor sit amet, consectetur <a href="#">adipiscing elit</a>, sed do eiusmod tempor.</p>
    </div>
</div>
```

## Estils i Design System d'AOC

Per fer servir el DS d'AOC definit pel projecte e-notum la clau està en fer servir els estils predefinits amb les classes i variables de SASS. Els colors de notificació estàn definits a l'arxiu `_vars` i els estils propis del component a `sass/components/_notification-banner`.

Els colors del banner canvien fent referència als colors definits al DS que es troben a `_vars`. 

**[Enllaç al component amb un exemple](../../web/components-sample/notification-banner.html)**