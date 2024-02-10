const constructeur = "Ferrari";
const cv = 420;
const portes = 5;
let prix;

if ((constructeur == "Renault" || constructeur == "BMW") && cv <= 150) {
    prix = (cv * 100 + portes * 30);
    console.log ("Prix = " + prix);
}
else if (constructeur == "Peugeot" || constructeur == "BMW") {
    prix = ((cv * 100 + portes *30) + 2000);
    console.log ("Prix taxé = " + prix);
}
else if (constructeur == "Ferrari") {
    if (cv >= 400) {
        prix = ((cv * 100 + portes *30) + 10000);
    }
    else {
        prix = ((cv * 100 + portes * 30) + 4000);
    }
    console.log ("Prix ultra taxé : " + prix);
}

else {
    console.log("La marque " + constructeur + " n'est pas valide");
}

const value = 15.5; // pour des chiffres on met number, mais pour du texte on écrit "texte" et la valeur est string dans le typeof value

console.log (typeof value); 

if (typeof value == "number") {
    console.log ("Value est un nombre");
}

else {
    console.log ("Value n'est pas un nombre");
}

const mmarque = "Nokia";

switch (mmarque) {
    case "Apple":
        console.log("Smartphone haut de gamme avec système IOS");
    break;
    case "Samsung":
        console.log("Smartphone haut de gamme avec système Android");
    break;
    case "Xiaomi":
    case "Huawei":
        console.log("Smartphone bon marché avec système Android");
    break;
    default:
        console.log("Marque non référencée");
    break;
}

let privilege = "redacteur";

let privilegeNb;

switch (privilege) {
    case "administrateur":
        console.log ("Vous êtes l'administrateur");
        privilegeNb = 1;
        break;
    case "redacteur":
        console.log ("Vous êtes un rédacteur");
        privilegeNb = 2;
        break;
    case "visiteur":
    case "utilisateur":
        console.log ("Vous êtes un utilisateur");
        privilegeNb =3;
        break;
    default:
        console.log ("Vous n'avez pas accès a ce site");
        break;
}
console.log (privilegeNb);

const marque = "Microsoft" ;

const processeur = "M3";

const ram = 4;

const stockage = 512;

if ((marque == "Apple" || marque == "Hp" || marque == "Microsoft") && ram >= 4 && stockage >= 256) {
    console.log ("Votre ordinateur est pris en charge");
    if (marque ==  "Apple"){
        switch (processeur) {
            case "I7":
                console.log ("Le temps de réparation est de 25 jours max");
                break;
            case "M1":
                console.log ("Le temps de réparation est de 10 jours max");
                break;
            case "M2":
                console.log ("Le temps de réparation est de 20 jours max");
                break;
            default :
                console.log ("Le temps de réparation est de 35 jours max");
                break;
        }
    }
    else {
        console.log ("Le temps de réparation est de 20 jours max");
}
}

else {
    console.log("Votre ordinateur " + marque + " n'est pas pris en charge.");
}