"Exemple 1"

class Ordinateur {

  //définition de propriétés statiques
  
  static OBJETS_PRIS_EN_CHARGE = "ordinateurs";
  
  //définition de propriétés de classe
  
  type = "laptop";
  clavier = "azerty";
  
  constructor(marque, ram, stockage) {
    this.marque = marque;
    this.ram = ram;
    this.stockage = stockage;
  }
  
  //définition de méthodes statiques
  
  static definition() {
    console.log("Les ordinateurs sont des machines automatisées permettant le traitement d'informations.")
  }
  
  //définition de méthodes d'instance
  ficheProduit() {
    console.log("Marque : " + this.marque + "\n" + "Mémoire vive : " + this.ram + "\n" + "Stockage : " + this.stockage);
  }

  calcPrice() {
    return this.ram * 100 + this.stockage * 2;
  }

  addRam(value) {
    return this.ram += value;    
  }
}
  
let monOrdi = new Ordinateur("Apple", 8, 512);
let monOrdi2 = new Ordinateur("HP", 16, 256);

monOrdi.ficheProduit();
monOrdi2.ficheProduit();

console.log(monOrdi.calcPrice());
console.log(monOrdi2.calcPrice());

console.log(monOrdi.addRam(8));
  
Ordinateur.definition(); //appel de la méthode statique
//Les ordinateurs sont des machines automatisées permettant le traitement d'informations.

"Exemple 2"

class Salaire {

  constructor(salarie) {
    this.salarie = salarie;
    this.total = 0;
  }

  static isSalaire(objet) {
    return objet.constructor.name == "Salaire"; // retourne true si c'est un objet 
  }

  addMontant(heures, taux) {
    return this.total += heures * taux;
  }

  affSalaire() {
    console.log("Le salarié " + this.salarie + " a gagné " + this.total);
  }
}

const salaire = new Salaire("Peter Parker");

salaire.addMontant(20, 15);
salaire.affSalaire();

let a = new Number(1528);

console.log(Salaire.isSalaire(salaire));

"Exemple 3"

class Oordinateur {

  constructor(marque, modele) {
    this._marque = marque;
    this._modele = modele;
  }

  get marque() {
    return this._marque;
  }

  get modele() {
    return this._modele;
  }

  get modeleComplet() {
    return this._marque + " " + this._modele;
  }

  set marque(value) {
    this._marque = value;
  }

  set modele(value) {
    this._modele = value;
  }

  set modeleComplet(value) {
    let tab = value.split(" ");
    this._marque = tab[0];
    this._modele = tab[1];
  }
}

const oordinateur = new Oordinateur("HP", "PAVILLON");

oordinateur.modeleComplet = "Apple Macbook";

console.log(oordinateur.marque);
console.log(oordinateur.modele);
console.log(oordinateur.modeleComplet);

"Exercice 1"

class Rectangle {
  
  constructor(longueur, largeur) {
    this.longueur = longueur;
    this.largeur = largeur;
  }

  calculerPerimetre() {
    return (this.longueur * 2) + (this.largeur *2);
  }
}

const monRectangle = new Rectangle(10, 8);
console.log(monRectangle.calculerPerimetre());

"Exercice 2 et 3"

class Cercle {
  constructor(rayon) {
    this.rayon = rayon;
  }

  aire() {
    return Math.PI * this.rayon ** 2;
  }

  perimetre() {
    return (2 * Math.PI) * this.rayon;
  }
}


cercle = new Cercle(4);

console.log(cercle.aire());
console.log(cercle.perimetre());

"Exercice 4"

class Produit {
  constructor(marque) {
    this._marque = marque;
  }

  get marque(){
    return this._marque;
  }

  set marque(value) {
    this._marque = value;
  }
}

let produit = new Produit("HP");

produit.marque = "Acer" ;
console.log(produit.marque);

"Exercice 5" 

class Ecouteur {

  marque;
  sansFil;
  price;

  boite = true;
  nbEcouteurs = 2;

  constructor(marque, sansFil, price) {
    //this._marque = marque;
    //this._sansFil = sansFil;
    //this._price = price;

    this.marque = marque;
    this.sansFil = sansFil;
    this.price = price;
  }

  //get marque() {
    //this._marque = marque;
  //}

  //get sansFil() {
    //this._sansFil = sansFil;
  //}

  //get price() {
    //this._price = price;
  //}

  //fiche() {
    //console.log("Marque : " + this._marque + "\n" + "Sans Fil : " + this._sansFil + "\n" + "Prix : " + this._price + " €");
  //}
  fiche() {
    for(let property in this) {
      console.log(property + " : " + this[property]); 
    }
  }
}

const ecouteur1 = new Ecouteur("JBL", true, 250);
const ecouteur2 = new Ecouteur("Sony", false, 300);

ecouteur1.fiche();
ecouteur2.fiche();

"Exercice 6"

class Panier {

  // propriete statique
  
  static contenu = new Array();
  
  //méthodes statiques

  static addToPanier(obj) {
    this.contenu.push(obj); // sa valeur "obj" est une valeur au choix
  }
  
  static rmToPanier(obj) {
    this.contenu.splice(this.contenu.indexOf(obj), 1);
  } //on utilise la méthode splice pour retire 1 item à partir de l'index de l'item ayant pour valeur obj

  static affPanier() {
    for(let produit of this.contenu) {
      console.log (produit.marque);
    }
  }
}

Panier.addToPanier(ecouteur1); //On ajoute l'objet ecouteurs1 du panier
Panier.addToPanier(ecouteur2); //On ajoute l'objet ecouteurs2 du panier
Panier.rmToPanier(ecouteur1);  //On retire écouteur1 du panier
Panier.affPanier(); //On affiche la marque de tous les objets présents dans le panier