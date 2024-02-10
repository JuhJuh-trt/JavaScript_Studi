"Exemple 1"

let ordi1 = new Object(); //nous construisons notre objet

ordi1 = {
    marque: "HP",
    ram: 8,
    stockage: 256,
    processeur: "Intel",
    demarrage: function() {
        console.log("Démarrage de l'ordinateur");
    },
    extinction: function() {
        console.log("Extinction de l'ordinateur");
    }
}

console.log(ordi1.marque); //HP
console.log(ordi1.ram); //8
ordi1.demarrage(); //Démarrage de l'ordinateur

"Exemple 2"

const nombre = new Number(1426.156)
console.log(nombre);

console.log(Number.MIN_VALUE); //est la valeur minimale qu’un objet Number peut contenir

console.log(Number.MAX_VALUE); //est à l’inverse la valeur maximale qu’un objet Number peut contenir

"Exemple 3"

const a = new Number(18);

const b = new Number(17);

console.log(a + b); //35

console.log (a - b); //1

console.log(a * b); //306

console.log (a % b); //1

function calcProduit(a, b) {
    return a * b
}

console.log(calcProduit(5, 10));

"Number.isNaN()"

//La méthode Number.isNaN() permet de déterminer si la valeur passée en argument est NaN, avec un type Number. Cette version est plus robuste que la méthode de l'objet global isNaN.

function typeOfNaN(x) {
    if (Number.isNaN(x)) {
        return 'Number NaN';
    }
    if (isNaN(x)) {
        return 'NaN';
    }
}

console.log(typeOfNaN('100F')); // Expected output: "NaN"

console.log(typeOfNaN(NaN)); // Expected output: "Number NaN"

"Number.isFinite()"

//La méthode Number.isFinite() permet de déterminer si la valeur fournie est un nombre fini.

console.log(Number.isFinite(1 / 0)); // Expected output: false

console.log(Number.isFinite(10 / 5)); // Expected output: true

console.log(Number.isFinite(0 / 0)); // Expected output: false

"Number.isInteger()"

//La méthode Number.isInteger() permet de déterminer si l'argument est un nombre entier.

function fits(x, y) {
    if (Number.isInteger(y / x)) {
        return 'Fits!';
    }
    return 'Does NOT fit!';
}

console.log(fits(5, 10)); // Expected output: "Fits!"

console.log(fits(5, 11)); // Expected output: "Does NOT fit!"

"Number.isSafeInteger()"

//La méthode Number.isSafeInteger() permet de déterminer si la valeur, passée en argument, est un entier représentable correctement en JavaScript (c'est-à-dire un nombre compris entre -(2^53-1) et 2^53-1).

function warn(x) {
    if (Number.isSafeInteger(x)) {
        return 'Precision safe.';
    }
    return 'Precision may be lost!';
}

console.log(warn(Math.pow(2, 53))); // Expected output: "Precision may be lost!"

console.log(warn(Math.pow(2, 53) - 1)); // Expected output: "Precision safe."

"Exemple 4"

console.log(Object.getOwnPropertyNames(Number.prototype));

"toExponential()"

const nombr = new Number(13578845);

console.log(nombr.toExponential()); //1.3578845e+7

console.log(nombr.toExponential(3)); //1.358e+7

"toString()"

let nombreChaine = nombr.toString();

console.log(nombreChaine); //13578845

console.log(typeof nombreChaine); //string

"valueOf"

let nombreRecup = nombr.valueOf();

console.log(nombreRecup); //13578845

console.log(typeof nombreRecup); //number

"Exemple 5"

let abis = new Number(50);

console.log(abis); // Number 50 parce que c'est un objet

let bbis = new Number(50);

console.log(bbis); // Number 50

console.log(abis + bbis); // 100
// C'est comme si il avait fait :

console.log(abis.valueOf() + bbis.valueOf());

"Exercice 1"

const nombree = new Number(1678);

function entier(nb) {
    return Number.isInteger(nb.valueOf());
}

console.log(entier(nombree));

"Exercice 2"

const nombrb = new Number(3167830918);

function expo(nb) {
    return nombrb.toExponential(4);
}

console.log(expo(nombrb));

"Exercice 3"

const nombrc = new Number(3167830918);

console.log(nombrc.toString().length);

"Exercice 4"

const nombrd = new Number(8909.61892);

console.log(Number.isFinite(nombrb.valueOf()));

"Exercice 5"

const nombreTest = new Number(15267);

function multipleDix(x) {
    if (Number.isInteger(x / 10)) {
        return true;
    }
    return false;
}

console.log(multipleDix(nombreTest.valueOf()));

"Exercice A"

const nombrePrix = new Number(1000);

function prixEntier(pe) {
    if (Number.isInteger(pe.valueOf()) && pe.valueOf() >= 500 && pe.valueOf() <= 1500 && typeof pe == "object") { // type objet a écrire en string
        return console.log("Le prix est valide");
    }
    return console.log("Le prix n'est pas valide");
}

prixEntier(nombrePrix);