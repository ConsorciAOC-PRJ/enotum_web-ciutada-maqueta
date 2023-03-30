# Animacions CSS
Per fer les animacions fem servir la llibreria Animate.css Funciona de manera molt automàtica, només hem de tenir clar com instal·lar-la i com fer-la servir.

## Llibreria que fem servir per les animacions amb CSS
Les instruccions d'instalació estan a la [documentació de la llibreria](https://animate.style/). Tenim bàsicament dues opcions.
- Instal·lar-la amb npm per tenir els arxius.
- Afegir un `<link>` i fer-la servir via CDN.

En el cas d'instal·lar-la amb npm (és com està fet a la maqueta) després només cal importar l'arxiu CSS. En el cas de la maqueta, per exemple:

```html
 <link rel="stylesheet" href="./node_modules/animate.css/animate.min.css">
```

## Com funcionen? Exemple de com afegir animacions
Fer les animacions és molt fàcil perquè es fan amb classes al codi HTML que estan també a la [documentació](https://animate.style/).

Un exemple bàsic de com està fet el menú lateral del meu espai que té una animació quan apareix:
- Primer de tot, fem el mecanisme amb JavaScript com faríem normalment (per exemple amb display block/none amb una classe show en aquest cas).
- Al codi HTML del component, hem d'afegir les classes que necessitem per fer l'animació que volem. En aquest cas són: animate__animated animate__slideInLeft animate__faster.
    - La classe animate__animated sempre l'hem d'afegir perquè és la classe bàsica de la llibreria. 
    - Després, afegim la classe amb l'animació en aquest cas és animate__slideInLeft
    - La classe animate__faster el que fa és que l'animació sigui més ràpida, és un modificador de l'animació.

El component quedaria així: 

```html
<div class="main-menu menu-content animate__animated animate__slideInLeft animate__faster">
</div>
```

I amb aixó ja ho tenim funcionant. 

