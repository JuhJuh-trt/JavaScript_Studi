"Exemple 1"

let str_primi = "mandarine" ;

let str_obj = new String(str_primi) ;

console.log (typeof str_primi) ; // string
console.log (typeof str_obj) ; // object

"Exemple 2"

let str = 'abcd';

console.log(str.length); // 4
console.log("efghidq".length); // 7

"Exemple 3"

let ster = 'C\'est un exemple d\'utilisation de l\'échappement de caractères';
//Dans cet exemple, nous avons échappé les apostrophes en les précédant d'un caractère backslash. Cela permet à JavaScript de reconnaître que ces caractères font partie de la chaîne de caractères, et non pas de la syntaxe du langage.

"Exemple 4"

const stra = "iuh\'zefpj";
console.log(stra[0]); //i
console.log(stra[3]); //z
console.log(stra[4]); //'

"Exemple 5"

let str1 = "Chaîne de caractères primitive entre doubles quotes" 
let str2 = 'Chaîne de caractères primitive entre simples quotes';
let str3 = `Chaîne de caractères primitive entre backticks`;
let str4 = new String("Chaîne de caractères"); //objet String

"Exemple 6" //array est forcément un objet

let utilisateurs = ['John', 'Peter', 'Chris'] ;

console.log(utilisateurs[1]); // affiche "Peter"

//Il est aussi possible d’appeler le constructeur array pour construire un tableau :
let utlisateurs = new Array('John', 'Peter', 'Chris');

"Exemple 7"

let tableau = ['a', 'b', 'c'];
let autreTableau = tableau.push('d', 'e');
console.log(autreTableau); // 5
console.log(tableau); // ['a', 'b', 'c', 'd', 'e']
console.log(typeof tableau); //objet

"Exemple 8" // slice() et split()

let historique = new String("(réf : 775533) commandé le 25/03/2020 10 sacs riz");
console.log(historique.slice(7, 13)); // 775533 (index 7 ( compris) et 13 (non compris))
console.log(historique.split("")); //['(', 'r', 'é', 'f', ' ', ':', ' ', '7', '7', '5', '5', '3', '3', ')', ' ', 'c', 'o', 'm', 'm', 'a', 'n', 'd', 'é', ' ', 'l', 'e', ' ', '2', '5', '/', '0', '3', '/', '2', '0', '2', '0', ' ', '1', '0', ' ', 's', 'a', 'c', 's', ' ', 'r', 'i', 'z']

"Exemple 9"

let concat = 'Hello ' + ' World !';
console.log(concat) ; // Hello World !
let nom = "Paul";
let age = 44;
console.log('Je m\’appelle ' + nom + ', et j\’ai ' + age + ' ans.'); // Je m'appelle Paul, et j'ai 44 ans.

"Exemple 10" // charAt()

let chaine = new String('Comment ça fonctionne ?');
let index = 4;
console.log(`Le caractère à l’index ${index} est ${chaine.charAt(index)}`); // Le caractère à l’index 4 est e
// index = 0 donne "C"

"Exemple 11" // indexOf()

let chaine1 = 'Le renard brun et rapide saute par-dessus le chien endormi.';
let chaine2 = 'chien';
let chaine3 = chaine1.indexOf(chaine2) ;
console.log(chaine1.split(""));
console.log(chaine1.split(" ")); // ['Le', 'renard', 'brun', 'et', 'rapide', 'saute', 'par-dessus', 'le', 'chien', 'endormi.']
console.log(`l’index du ${chaine2} à partir du commencement est ${chaine3}`); // l’index du chien à partir du commencement est 45
// grace a split on se rend compte que le c de chien est a l'index 45

"Exemple 12" // push() et pop()

let chiffre = ['un', 'deux', 'trois', 'quatre', 'quinze'];
for (let element of chiffre) {
    console.log(element); //Nous utilisons le mot clé « of » pour parcourir chaque valeur du tableau.
}

let monTableau = ['Paris', 'Marseille', 'Lyon', 'Bordeaux', 'Toulouse'];
monTableau.push('Lille', 'Strasbourg');
monTableau.pop();
console.log (monTableau); //Nous pouvons voir que push() permet d’ajouter des éléments tandis que pop() supprime le dernier élément.

"Exemple 13" // shift() et unshift()

let nombres = [1, 2, 3, 4];
nombres.shift();
console.log(nombres); //2,3,4
nombres.unshift(0);
console.log(nombres);//0,2,3,4
// Le principe est assez simple, unshift() permet de rajouter un élément au début du tableau tandis que shift() supprime le premier élément du tableau.

"Exemple 14" //Autres manipulations possibles avec les méthodes split(), length, toString()

// Crée une chaîne de caractères contenant les noms des villes séparées par des virgules
let mesDonnees = 'Paris, Londres, Berlin, Rome, Madrid';

// Utilise la méthode split() pour transformer la chaîne en un tableau en se basant sur le séparateur (la virgule suivie d'un espace)
let monTableau1 = mesDonnees.split(', ');

// Affiche la longueur du tableau (le nombre d'éléments)
console.log(monTableau1.length);

// Affiche la chaîne de caractères initiale (mesDonnees)
console.log(mesDonnees);

// Affiche le tableau créé à partir de la chaîne de caractères (monTableau)
console.log(monTableau1);

// Affiche le premier élément du tableau (l'index 0)
console.log(monTableau1[0]);

// Affiche le dernier élément du tableau (l'index égal à la longueur du tableau moins 1)
console.log(monTableau1[monTableau1.length - 1]);

// Utilise la méthode join() pour fusionner les éléments du tableau en une nouvelle chaîne de caractères (myNewString)
let myNewString = monTableau1.join(', ');
console.log(myNewString);

// Crée un tableau contenant les noms des joueurs
let nomsDesJoueurs = ["Neymar", "Kylian", "Cristiano", "Lionel"];

// Utilise la méthode toString() pour convertir le tableau des noms des joueurs en une chaîne de caractères
console.log(nomsDesJoueurs.toString());

"Exemple 15" // tableau multidimensionnel

let voitures = [["Peugeot", "208"], ["Renault", "Clio"]];
console.log(voitures[1][0]); //"Renault"