"Exemple"

const nombre = 154.78;

console.log (typeof nombre); // la console va afficher "number"
// number a une taille limite, et fini par arrondir, pour des valeurs plus grande on utilise bigInt. (n a la fin d'un nombre)

"Exemple 2"

const nombr = 100071992549200345n;

console.log (typeof nombr); // la console affiche " bigint"
// bigint et number de sont pas opérable ensemble (addition, soustraction, etc..)

"Exemple 3"

const variable = true;

console.log(variable); //true

console.log(typeof variable); //boolean

"Exemple 4"

const a = "caractères"

console.log(a); //caractères

console.log(typeof a); //string

"Exemple 5"

let b = "caractères";

b += " écris";

console.log(b); //caractères écris

console.log(typeof b); //string

"Exemple 6"

let sy1 = Symbol("marque");

let sy2 = Symbol("marque");

console.log(sy1); //Symbol(marque) en rouge

console.log(typeof sy1); //symbol

console.log(sy1 === sy2); //false, symbol est unique

"Exemple 7"

let variabl = null;

console.log (variabl); //null

console.log (typeof variabl); //object, c'est un bug javascript pas résolu pour cause de compatibilité

"Exemple 8"

let variable2;

console.log (variable2); //undefined

console.log (typeof variable2); //undefined car valeur non définie ou une propriété inexistante

"Exo 1"

let varable;

switch (typeof varable) {
    case "number":
        console.log ("C'est un nombre");
    break;
    case "bigint" :
        console.log ("C'est un grand entier");
    break;
    case "boolean" :
        console.log ("C'est un boolean");
    break;
    case "string" :
        console.log ("C'est une chaine de caractères");
    break;
    case "symbol" :
        console.log ("C'est un symbole");
    break;
    case "undefined" :
        console.log ("C'est indéfini");
    break;
    default :
        if (varable == null) {
            console.log ("C'est une valeur nulle");
        }
        else {
            console.log ("Ce n'est pas référencé");
        }
    break;
}

