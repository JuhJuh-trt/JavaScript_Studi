let nombre = new Number(5216);

//Number = type
//nombre = instance de Number
//Number() = constructeur du type Number

console.log(Number.MAX_VALUE) //propriété statique
console.log(Number.isInteger(1)) //méthode statique
console.log(nombre.valueOf()) //méthode d'instance

//Les méthodes statiques s’appellent donc via le nom du type (dans cet exemple Number), tandis que les méthodes d’instance sont appelées via la référence de l’instance (dans cet exemple nombre).

"Exemple 1"

let monObjet = new Object();

"Il est aussi possible de créer un objet sans appeler directement le constructeur Object() :"
let monoObjet = {/*définition des propriétés*/} ;

"Exemple 2"

//Nous créons un objet en enveloppant la valeur "undefined"

let moObjet = new Object();

//On crée 2 propriétés dans notre objet

moObjet = {
    nom:"mon objet",
    caracteristiques:"aucune"
};

//Quelques méthodes statiques

console.log(Object.keys(moObjet)); //renvoie les clés des propriétés définies
console.log(Object.values(moObjet)); //renvoie les valeurs des propriétés définies
console.log(Object.entries(moObjet)); //renvoie les paires clés/valeurs des propriétés définies

//Quelques méthodes d'instance

console.log(moObjet.valueOf()); //renvoie la valeur primitive de l'objet, donc l'objet même
console.log(moObjet.toString()); //renvoie une chaîne représentant l'objet
console.log(moObjet.hasOwnProperty("nom")); //renvoie un booléen si l'objet a la propriété passée comme argument. Ne prend pas en compte les propriétés héritées "par défaut" du prototype Object.prototype 

"Exemple 3" // L'objet Boolean

//Nous créons un Boolean en enveloppant la valeur "true"

let monObjet1 = new Boolean(true);

//Quelques méthodes d'instance héritées de Boolean.prototype

console.log(monObjet1.valueOf()); //renvoie la valeur enveloppée
console.log(monObjet1.toString()); // renvoie une chaîne contenant la valeur enveloppée

//Quelques méthodes statiques de Object :

//Ces méthodes renvoient un tableau vide car nous n'avons défini aucune propriété
console.log(Object.keys(monObjet1)); //renvoie les clés des propriétés définies
console.log(Object.values(monObjet1)); //renvoie les valeurs des propriétés définies
console.log(Object.entries(monObjet1)); //renvoie les paires clé/valeur des propriétés définies

"Exemple 4" // L'objet Number

//Nous créons un Number en enveloppant la valeur "12467"

let monObjet2 = new Number(12467.28);

//Quelques méthodes statiques

console.log(Number.isInteger(16)); //renvoie un booléen indiquant si le nombre est un entier
console.log(Number.isSafeInteger(121152172716642751675821627)); //renvoie un booléen indiquant si le nombre est un entier représentable de manière safe avec Number
console.log(Number.parseFloat("16278.12")); //convertit une chaîne en nombre à virgule flottante

//Une méthode d'instance

console.log(monObjet2.toFixed(1)); //renvoie une chaîne contenant la valeur du nombre arrondi avec un nombre de chiffres décimaux passés comme argument 
console.log(monObjet2.valueOf()); //renvoie la valeur primitive stockée dans l'objet
console.log(monObjet2.toString()); //renvoie une chaîne contenant la valeur primitive stockée dans l'objet

console.log(Object.getOwnPropertyNames(Number.prototype)); //pour avoir les propriétes

let a = new Number(1);
console.log(a.valueOf()); // 1
console.log(a.toString()); // 1
console.log(typeof a.valueOf()); // number
console.log(typeof a.toString()); // string


"Exemple 5" // L'objet String

let monObjet3 = new String("chaîne de caractères"); 

console.log(Object.keys(monObjet3));
console.log(Object.values(monObjet3)); 

//Un exemple de méthode statique

console.log(String.fromCharCode(67, 72, 65, 73, 78, 69)); //renvoie une chaîne composée des caractères "unicode" passés comme arguments, dans cet exemple : "CHAINE"

//Quelques méthodes d'instance
console.log(monObjet3.charAt(4)); //renvoie le caractère de la chaîne stockée ayant l'index passé comme argument
console.log(monObjet3.slice(7, 9)); //renvoie une sous-chaîne de la chaîne d'origine, en utilisant l'index de début et de fin spécifiés

"Exemple 6" // L'objet Array

let monObjet4 = new Array(1, 2); //appel du constructeur en créant un tableau avec deux éléments
let monoObjet4 = []; //utilisation de la syntaxe de tableau

//Une méthode statique

console.log(Array.from("test")); //renvoie un tableau à partir d'un objet itérable ou d'une chaîne de caractères

//Quelques méthodes d'instance

console.log(monObjet4.push(3, 6, 5)); //rajoute un (ou plusieurs) élément à la fin du tableau
console.log(monObjet4.pop()); //supprime le dernier élément du tableau
console.log(monObjet4.unshift(2)); //ajoute un (ou plusieurs) élément au début du tableau
console.log(monObjet4);

"Exemple 7" // L'objet Date

console.log(Object.getOwnPropertyNames(Date.prototype));

let monObjet5 = new Date(); //date actuelle
let date = new Date('2000-12-18T03:24:00'); //date spécifiée

console.log(monObjet5.valueOf()); //Le nombre de millisecondes écoulées entre le premier janvier 1970, minuit UTC et la date en ntemps reel.
console.log(monObjet5.toString());
console.log(date.valueOf());

"Exemple 8" // L'objet Math, Contrairement aux autres objets globaux, Math n'est pas un constructeur. Toutes les propriétés et les méthodes de Math sont statiques.

console.log(Math.sqrt(9)) //renvoie la racine carrée du nombre.
console.log(Math.random()) //renvoie un nombre aléatoire entre 0 et 1
console.log(Math.max(1, 12, 13, 52)) //renvoie le nombre max dans un ensemble de nombres
console.log(Math.min(1, 12, 13, 52)) //renvoie le nombre min dans un ensemble de nombres
console.log(Math.round(26178.516)) //renvoie le nombre arrondi à l'entier le plus proche

"Exemple 9"

console.log(Object.getOwnPropertyNames(Number.prototype));

Number.prototype.message = "Hello World";
Number.prototype.aff = function() {
    console.log("C'est un nombre");
}

let nb = new Number(1);

console.log(nb.message);
nb.aff();

"Exemple 10"

Boolean.prototype.fra = function() {
    if(this.valueOf()) {
        return "vrai";
    
    }
    else {
        return "faux";
    }
}

let b = new Boolean(true);

console.log(b.fra());

// 

let ordinateur = {
    marque : "HP",
    modele : "Pavillon",

    affOrdi: function() {
        console.log(this.marque + " " + this.modele); // console.log(`${this.marque} ${this.modele}`)
    }
}

ordinateur.affOrdi();

//

Number.prototype.carre = function () {
    return this.valueOf() ** 2;
}

let nba = new Number(3);

console.log(nba.carre());

"Exo"

//a revoir, comprend pas comment ça fonctionne, additionne les valeurs sans faire de retour entre temsp dans la correction

let ordi = new Object();

ordi = {
    marque: new String("Apple"),
    modele: new String("Iphone 11"),
    ram: new Number(4),
    stockage: new Number(128),
    prix: new Number(500),

    vAjouté: function (chif) {
        let vA = this.prix + chif;
        return vA;
    },

    vSoustrait: function(chif) {
        return this.prix -= chif;
    },

    vAffiché: function() {
        console.log(this.prix);
    }
}

console.log(ordi.marque.valueOf());
console.log(ordi.ram.valueOf());

console.log(ordi.vAjouté(20));
ordi.vSoustrait(20);
ordi.vAffiché();