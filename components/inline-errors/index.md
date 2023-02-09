# Inline errors

## Estructura i comportament (HTML) dels inline errors
Per fer que els inline errors siguin accessibles hem de tenir en compte 4 coses:
- Comunicar a l'usuari que la informació introduïda al camp no és vàlida (amb un color vermell i un text per l'usuari visual i amb `aria-invalid="true"` per l'usuari no visual.
- Comunicar a l'usuari no visual que ha aparegut un error a la pàgina (amb una live region, en aquest cas amb `role="alert"`.
- Comunicar a l'usuari no visual la relació entre l'error i el camp (amb l'atribut `aria-describedby`).
- Comunicar a tots tipus d'usuaris perquè s'ha produït un error amb text (seria el text que reemplaçaria "Això és un error"). Per exemple: "Aquest camp és obligatori".

En aquest cas s'ha optat per tenir un `<span>` vuit per introduir l'error, però també seria vàlid fer ser un altre tipus d'element com un `<div>` o injectar directament l'element amb JavaScript. Sigui com sigui el que s'ha de respectar són les 4 premisses anteriors. Per exemple:

```html
<div style="width: 30%; margin: auto;">
    <form>
        <label class="text-p-16" for="name">Nom complert</label>
        <input class="field text-p-16" type="text" id="name" name="name" autocomplete="name" aria-describedby="error-name">
        <span class="error text-p-14 p-error" id="error-name" role="alert"></span>
    </form>
</div>
```
Pel que fa al comportament, haurem de modificar l'atribut aria-invalid de l'input a més d'injectar els errors.

## [Exemple de Inline Error](../../web/components-sample/inline-errors.html)
**NOTA:** Aquest component d'exemple està preparat perquè sempre doni error escrivint. Només no dona error si s'escriu la paraula "correcte". Evidentment, aquesta manera de gestionar els errors no és correcta des d'un punt de vista d'usabilitat i d'accessibilitat. Els errors haurien d'aparèixer en intentar enviar el formulari o en canviar de camp, mai quan l'usuari està escrivint.