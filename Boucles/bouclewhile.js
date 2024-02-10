let nombre = 1;

while (nombre <= 10) {
    console.log ("Le nombre est : " + nombre);
    nombre += 2;
    nombre -=0.5;
}

console.log (nombre)

// Comme vous avez pu le voir, lorsque l'on utilise un while, le programme commence par vérifier la condition puis, si l’expression conditionnelle renvoie true, il lance une première itération de la boucle, sinon, aucune itération n’est lancée.

let cv = 100;

while (cv > 100 && cv <= 110) {
    console.log ("La voiture a " + cv + " cv");
    cv ++;
} // Le programme vérifie l’expression cv > 100 && cv <= 110 et, étant donné qu’elle renvoie false, alors aucune itération de la boucle n’est opérée.

let ch = 100;

do {
    console.log ("La voiture a " + ch + " ch");
    ch ++;
} while (ch > 100 && ch <= 110);

//

let a = 110;

while (a >= 100 && a <= 150) {
    console.log(a);
    a += 10;

    if (a == 130) {
        continue;
    }
    else if (a == 140) {
        break;
    }
    console.log("nv");
}

console.log("fini");

// 

let b = 1;

while (b <= 10) {
    b ++;
    if (a ==8) {
        continue;
    }
    console.log("Le nombre est un " + b); // 8 n'apparait pas parce que a b == 8 on continue en revenant au debut sans faire le consolelog
}

//

let marques = ["BMW", "Peugeot", "Audi", "Renault"];

for (marque of marques) {
    console.log ("La voiture est une " + marque);
    if (marque == "Peugeot" || marque == "Renault") {
        continue;// si on avait mis break, a la valeur peugeot, on serait sortit de la boucle et la console afficherait test
    }
    console.log("C'est une marque de luxe");
}
console.log("test")

// Exo 1

let nombr = 28;
let compteur = 1;

while ((nombr * compteur) < 200 ) {
    console.log(nombr * compteur);
    compteur ++;
}

// Exo 2

let prix = 100;
let tabPrix = [];

do {
    tabPrix.push(prix);
    prix ++;
} while (prix > 100 && prix <= 110);

console.log(tabPrix[2]);

// Exo 3

let pri = 101;
let tabPri = [];

while (pri > 100 && pri <= 110) {
    tabPri.push(pri);
    if (pri == 108) {
        break;
    }
    pri ++;
}

console.log(tabPrix[8]);

// Exo 4 

let compter = 0;

let nombres = "";

while (compter < 20) {
    nombres += compter + " ";
    compter ++;
    
}

console.log (nombres);

// Exo 5

let numbr = 15;

let compt = 1;

while (compt < numbr) {
    if (compt % 2 == 0) {
        console.log(compt + " est un multiple de 2");
    }
    else {
        console.log(compt + " n'est pas un mutiple de 2")
    }
    compt ++;
}

"Dans ce cours, nous avons parlé des boucles en JavaScript. Les boucles permettent de réitérer des instructions, ce qui évite d’avoir à écrire toutes les itérations une par une. Il existe plusieurs boucles dans de nombreux langages de programmation, que l’on retrouve en JavaScript."

"Tout d’abord, on retrouve la boucle for qui est, en règle générale, utilisée lorsque, juste avant la première itération de la boucle, le nombre d’itérations est fixé. On peut l’utiliser en spécifiant 3 paramètres : l’initialisation d’un compteur, la condition et l’incrémentation du compteur. On peut aussi l’utiliser avec le mot clé in permettant de parcourir les propriétés d’un objet et le mot clé of permettant de parcourir les valeurs d’un objet étirable, par exemple les valeurs des éléments d’un tableau."

"Nous avons ensuite la boucle while qui, quant à elle, est en général utilisée quand le nombre d’itérations dépend des instructions présentes dans le corps de la boucle. Elle est donc utilisée quand, juste avant la première itération, le nombre total d’itérations n’est pas fixé. Il faut simplement spécifier une condition en paramètre qui permettra d’exécuter les itérations de la boucle tant que cette condition renvoie true."

"Le système do/while permet d’opérer une première itération de la boucle avant que la condition soit contrôlée."

"Le mot clé break permet de stopper l’exécution d’une boucle et de passer aux instructions suivantes (après la boucle). Le mot clé continue permet d’interrompre une itération de la boucle à un endroit donné pour passer directement à l’itération suivante."

"Enfin, un point auquel il faut constamment veiller est celui d’éviter absolument les boucles infinies qui font planter le programme."