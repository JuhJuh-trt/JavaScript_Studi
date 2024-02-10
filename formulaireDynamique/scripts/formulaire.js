export default class Formulaire {

    // définition du construteur

    constructor(id) {
        this.id = id;
        this.formulaireHtml = document.getElementById(this.id);
        this.formdata = new FormData(this.formulaireHtml);
        this.answers = new Array();
    }

    // methode pour récupérer le div parent

    getDiv(id) {
        return document.getElementById(id).parentNode;
    }

    // methode pour récupérer un élément

    getElement (id) {
        return document.getElementById(id);
    }

    // methode permettant de masquer un élément sans animation

    maskChamp (id) {
        this.getDiv(id).classList.add('masque');
        this.getElement(id).required = false ;
    }

    // méthode pour afficher le champ

    showChamp(id) {
        this.getDiv(id).classList.remove('disp');
        this.getDiv(id).classList.add('app');
        this.getElement(id).required = true;
    }

    // methode pour masquer le champ avec animation

    hideChamp(id) {
        this.getDiv(id).classList.remove('app');
        this.getDiv(id).classList.add('disp');
        this.getElement(id).required = false;
    }

    // methode pour savoir si un radio est sélectionné

    isSelected(id, value, action, otherAction) {
        this.formdata = new FormData(this.formulaireHtml);
        if(this.formdata.get(id) == value) {
            action()
        }
        else {
            otherAction()
        }
    }

    // methode pour récupérer les elements de chque input et les ajouter a answer

    getAnswers() {
        this.formdata = new FormData(this.formulaireHtml);
        this.formdata.forEach(
            (value, key) => {
                if(value != "" && value != "on") {
                    this.answers.push([key, value]);
                }
            }
        )
        return this.answers;
    }

    // methode pour afficher dnas un alert les resultats

    affAnswers() {
        let chaine = "Récapitulatif \n\n";
        for (let ligne of this.getAnswers()) {
            chaine += `${ligne [0]} : ${ligne[1]}\n`
        }
        alert(chaine);
    }
}