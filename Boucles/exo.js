const list = [24, 67, 18];

let resultat = "";

for (nb of list) {
    resultat += "Multiples de " + nb + " : ";
    let compteur = 1;
    while (compteur <= nb) {
        if(nb % compteur == 0) {
        resultat += compteur + ", ";
        }
        compteur++;
    }
    resultat += "\n \n";
}

console.log(resultat);

//

const liste = [24, 67,18];

let result = "";

for (nbe of liste) {
    result += "Multiples de " + nbe + " : ";
    for (let compt = 1; compt <= nbe; compt ++) {
        if (nbe % compt == 0) {
            result += compt + ", ";
        }
    }
}

console.log(resultat);
