class NomDeLaClasse {
  //définition des propriétés
}

"Exemple 1"

class Ordinateur {

  //déclaration des propriétés qui seront définies comme propriétés d'instance dans le constructeur (facultatif mais bonne pratique)
  marque;
  ram;
  stockage;

  //définition des propriétés statiques 
  static OBJETS_PRIS_EN_CHARGE = "ordinateurs";

  //définition de propriétés de classe
  type = "laptop";
  clavier = "azerty";

  //définition du constructeur
  constructor(marque, ram, stockage) {
    this.marque = marque;
    this.ram = ram;
    this.stockage = stockage;
  }

}

let monOrdi = new Ordinateur("Apple", 8, 512);
let monOrdi2 = new Ordinateur("HP", 16, 256);

console.log(monOrdi.marque); //Apple
console.log(monOrdi2.marque); //HP
console.log(monOrdi.type) ; //"laptop"
console.log(monOrdi2.type) ; //"laptop"

console.log(Ordinateur.OBJETS_PRIS_EN_CHARGE); //ordinateurs

"Exemple 2"

class Telephone {

  static TYPE_TELEPHONE = "smartphone";

  bluetooth = true; // propriété de classe

  constructor(stockage, ram, appPhoto,) {
    this.stockage = stockage;
    this.ram = ram;
    this.appPhoto = appPhoto;
  }
}

console.log(Telephone.TYPE_TELEPHONE);

const telephone1 = new Telephone(64, 4, 12);
const telephone2 = new Telephone(128, 3, 12);

console.log(telephone1.stockage); // 64
console.log(telephone2.stockage); // 128

console.log(telephone1.bluetooth); // true car hérité
console.log(telephone2.bluetooth); // true car hérité

"Exercice 1"

class Voiture {
  static ROUES = 4;

  constructor(marque, modele, annee) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
  }
}

const voiture1 = new Voiture('Renault', 'Clio', 2020);

console.log(voiture1.marque + " à " + Voiture.ROUES + " roues");

"Exercice 2"

class Rectangle {

  constructor(longueur, largeur) {
    this.largeur = largeur;
    this.longueur = longueur;
  }
}

const rectangle1 = new Rectangle(10, 5);
console.log(rectangle1.largeur); 

"Exercice 3"

class Telephone2 {
  constructor(marque, modele, ram) {
    this.marque = marque;
    this.modele = modele;
    this.ram = ram;
  }
}

const t1 = new Telephone2('Apple', 'Iphone11', 4)
console.log(t1.ram);