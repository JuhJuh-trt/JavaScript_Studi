function nomDeLaFonction(paramètres) {
    instructions;
}

"Exemple"
let nombre = 100; 

function calcDouble() {
    let double = nombre * 2;
    console.log("Le double du nombre " + nombre + " est " + double);
}

calcDouble();

nombre = 40; // marche avec let mais pas avec const car on ne peut pas changer la valeur de const

calcDouble();

"Exemple2"

function calcDoubl(nb) {
    let double = nb * 2;
    console.log("Le double du nombre " + nb + " est " + double);
}

calcDoubl(100); //Le double du nombre 100 est 200

calcDoubl(40); //Le double du nombre 40 est 80

"Exemple 3"

function perimetreRectangle(largeur, longueur) {
    let perimetre = 2 * largeur + 2 * longueur;
    console.log("Le perimetre du rectangle est de " + perimetre + " cm2");
}

perimetreRectangle(4, 5);

perimetreRectangle(2, 4);

perimetreRectangle(1, 2);

perimetreRectangle(18, 20);

"Exemple 4"

function perimetrRectangle(largeur, longueur) {
    let perimetr = 2 * largeur + 2 * longueur;
    return perimetr;
}

console.log(perimetrRectangle(4, 5));

console.log(perimetrRectangle(2, 4));

console.log(perimetrRectangle(1, 2));

console.log("Le Perimetre du rectangle est de " + perimetrRectangle(18, 20) + "cm2");

"Exemple 5"

function aire(rayon, type) {
    if (type == "cercle") {
        return (Math.PI * (rayon ** 2));
    }
    else if (type == "sphere") {
        return (4 * Math.PI * (rayon ** 2));
    }
    else {
        return 0;
    }
} 

console.log(aire(4, "cercle"));

console.log(aire(4, "sphere"));

console.log(aire(4, "cercl"));

"Exemple 6"

function carre (nb) {
    if (nb > 100) {
        return 0;
    }
    let c = nb ** 2;
    console.log("Le carré est " + c)
    return c;
    console.log("Le carré est " + c) // cette ligne ne sera jamais exécuté car le return coupe juste avant
}

console.log(carre (5));

console.log(carre(500)); // return 0

"Exemple 7"

let racine = function racineCarree (nombre) {
    return Math.sqrt(nombre); // permet de calculer la racine carrée d'un nombre
}

console.log (racine(9));

"Exo 1"

function calcHypotenuse(a , b) {
    let hypotenuse = Math.sqrt((a ** 2) + (b ** 2));
    return hypotenuse;
}

console.log("Hypotenuse : " + calcHypotenuse(10, 11));

"Exo 2"

let stock = 4029;

let solde = 0;

function benef (vendu, pu) {
    stock -= vendu;
    let chiffre = pu * vendu;
    solde += chiffre;
    return chiffre;
}

function magasin() {
    let message = "Stock du magasin : " + stock + " produits" + "\n" + "Solde total : " + solde + " euros";
    console.log (message);
    return message;
}

console.log(benef(104, 10.5) + " €")

console.log(stock);

console.log(solde);

magasin();