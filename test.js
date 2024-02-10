class Produit {
constructor(marque, modele, ram, stockage, prix) {
    this.marque = marque;
    this.modele = modele;
    this.ram = ram;
    this.stockage = stockage;
    this.prix = prix;
}

    //marque: new String("Apple"),
    //modele: new String("Iphone 11"),
    //ram: new Number(4),
    //stockage: new Number(128),
    //prix: new Number(500),

    addPrice(montant) {
        return this.prix += montant;
    };

    moinsPrice(montant) {
        return this.prix -= montant;
    };

    affPrice() {
        return this.prix;
    };
}

let ordi1 = new Produit('Apple', 'MacBook', 8, 128, 500)


console.log(ordi1.moinsPrice(40));
console.log(ordi1.addPrice(80));
console.log(ordi1.moinsPrice(40));
console.log(ordi1.affPrice());

