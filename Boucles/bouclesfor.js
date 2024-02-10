let nombreMax = 50;

let liste = "";

for (let i = 1; i <= nombreMax; i ++) {
    if (i % 4 == 0) {
        liste += i + " est un multiple de 4";
        liste += "\n";
        for (let a = 1; a <= 15; a ++ ) {
            liste += "-";
        }
        liste += "\n";
    }
}

console.log(liste)

// let tableau = ["valeur 1", "valeur 2"];
// Chaque élément du tableau est accessible via son index, sachant que le premier élément du tableau à pour index 0, le second 1, le troisième 2, etc.
// tableau[1] = "valeur 2";

const nombre = 10;

let table = [];

for (let i = 1; i <= 10; i ++) {
    let resultat = nombre * i;
    table.push(resultat);
} 

console.log(table[7]) // 80 = 10 + (10 * 7) parce que table[0] = 10, table[1] = 10 + (10 * 1) = 20, etc...

//for ... in

let animation = new Animation();

for (let i in animation) {
    console.log(i);
}

let tableau = ["Apple", "HP", "Acer"];

for (let i in tableau) { //les 2 console log a la suite ça va afficher chaque premiere valeur de console log puis recommencer au premier console log pour la 2eme valeur
    console.log(tableau[i]); //ca va afficher la valeur de i
    console.log(i); //ca va afficher l'index des valeurs 1,2 ou 3
    console.log(tableau[i], i) //va afficher la valeur de i suivi de son index
}

//for ... of

let tablo = ["Apple", "HP", "Acer"];

let marques = "";

for (let i of tablo) {
    marques += i + ", ";
}

console.log (marques);

//for of est le seul a etre utilisé pour un tableau (array) car il va chercher les valeurs et propriétes initialement écrite dans les [], alors que for in ajouterais des propriétes et valeurs écrites en dehors commme :
// tablo.proprietes = "test";

//exo 1
let nombres = "";

nb = 120;

for (let i = nb; i <= 130; i++) {
    nombres += nb + " ";
    nb ++ ;
}

console.log (nombres);

//exo2
let total = 0;

let prix = [27, 36, 89, 18, 25];

for (let i of prix) {
    total += i;
}

console.log (total);

//exo 3

let nombr = 8;

let multiples = "";

//for (let i = 1; i <= (8*20); i ++) {
//    if (i % 8 == 0) {
//        multiples += i + " ";
//    }
//}

for (let i = 1; i <= 20; i ++) {
    multiples += (nombr * i) + " ";
}

console.log (multiples);

//exo 4

let marqu = ["Apple", "Acer", "HP", "Packard-Bell"];

for (let i of marqu) {
    if (i == "Apple" || i == "Dell" || i == "HP" || i == "Microsoft") {
        console.log("La marque est valide")
    }
    else {
        console.log("La marque n'est pas valide")
    }
}

//exo 5

let ordinateur = new Object();

ordinateur.ram = 256;

ordinateur.stockage = 512;

for (let i in ordinateur) {
    console.log(i + " = " + ordinateur[i])
}


