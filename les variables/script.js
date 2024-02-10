let nombre = 11;

let nombreIncremente = ++ nombre; //l'incrementation est avant le nombre donc quand nombreIncremente sera appelé, sa valeur sera de 12 (1 + 11) car l'incrémentation est avant le nombre

console.log(nombre);
console.log(nombreIncremente);

let valeur = 11;

let valeurIncremente = valeur ++; //l'incrementation est aprés le 'valeur' donc quand valeurIncremente sera appelé, sa valeur sera de 11 soit valeur avant son incrémentation

console.log(valeur);
console.log(valeurIncremente);

let a = 2;
a += 8;
console.log(a); //la valeur sera de 10 c'est comme si on avait fait a = a + 8

let b = 18;
b -= 4;
console.log(b); //la valeur sera de 14 c'est comme si on avait fait b = b - 4

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#op%C3%A9rateurs_daffectation

let nom = "Parker";
let prenom = "Peter";
let nomComplet = prenom + " " + nom; // les guillemets avec un espace dedans ajoute un espace entre les 2 valeurs
console.log(nomComplet);

let surnom = "Peter";
surnom += " Parker"; // il va ajouter a la variables surnom la valeur parker
console.log(surnom);

let d = "Ordinateur";
let e = "Telephone";
let f = "Ordinateur";
console.log(d == e);
console.log (d == f);

//https://www.w3schools.com/js/js_comparisons.asp

console.log("2" > "12")

let marque = "HP";
let modele = "Pavillon";
let stockage = 512;
let ram = 16;
let processeur = "intel core i7";

console.log ((marque == "HP" || marque == "acer") && stockage >= 256 && ram >= 8) // les symboles || representent "ou", && représentent "et", ! veut dire diférrent 
let prix = stockage + (ram * 20 );
const chaine = (marque + " " + modele + ", " + stockage + " GO de stockage, " + ram + " GO de ram, processeur " + processeur + " prix : " + prix + " €" )

console.log (chaine)

EXO

// Variables pour les informations de l'acheteur
// let Nom = "Dupont"; // Nom de l'acheteur (chaîne de caractères)
// let prenom = "Alice"; // Prénom de l'acheteur (chaîne de caractères)
// let adresseLivraison = "123 Rue des Fleurs"; // Adresse de livraison de l'acheteur (chaîne de caractères)
// let adresseFacturation = "456 Avenue des Étoiles"; // Adresse de facturation de l'acheteur (chaîne de caractères)
// let email = "alice.dupont@example.com"; // Adresse e-mail de l'acheteur (chaîne de caractères)
// let téléphone = "0123456789"; // Numéro de téléphone de l'acheteur (chaîne de caractères)