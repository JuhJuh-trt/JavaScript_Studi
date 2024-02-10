const date = new Date(2023, 11, 1, 10, 14, 10, 58);

"getFullYear()"

console.log(date.getFullYear()); // 2023
date.setFullYear(2024);
console.log(date.getFullYear()); //2024

"getMonth()"

console.log(date.getMonth()); //11
date.setMonth(9);
console.log(date.getMonth()); //9

"getDate()"

console.log(date.getDate()); //1
date.setDate(12);
console.log(date.getDate()); //12

"getDay()"

console.log(date.getDay()); //5

"getTime()"

console.log(date.getTime()); //1701422050058

"getHours()"

console.log(date.getHours()); //10
date.setHours(11);
console.log(date.getHours()); //11

"getMinutes()"

console.log(date.getMinutes()); //14
date.setMinutes(1);
console.log(date.getMinutes()); //1

"getSeconds()"

console.log(date.getSeconds()); //10
date.setSeconds(1);
console.log(date.getSeconds()); //1

"Exemple"

console.log(date.getHours() + " heures, " + date.getMinutes() + " minutes.");

function formatHour (dt) {
    return (`${dt.getHours()} heures, ${dt.getMinutes()} minutes environ.`);
}
console.log(formatHour(date));

"Execice 1"

class Evenement {
    constructor(date, evenement) {
        this.date = date;
        this.evenement = evenement;
    }

    getResume() {
        console.log(`${dt.getDate()}/${dt.getMonth()} : ${this.evenement}`)
    }
}

const dt = new Date(2023, 10, 20);

const event = new Evenement(dt, "rdv medical");

event.getResume(); //appel de la méthode

"Exercice 2"

const date1 = new Date (2023, 10, 2);

date1.setFullYear(2024);

console.log(date1.toLocaleDateString());

"Exercice 3"

const date2 = new Date ("2023-12-01T14:30:00+04:00");

console.log(date2.getUTCHours());

"Exercice 4"

class Event {

    titre;
    description;
    date;

    constructor(titre, description, date) {
        this.titre = titre;
        this.description = description;
        this.date = new Date(date); 
    }

    getEven() {
        let option = this.date.toLocaleDateString("fr-FR"); // format de date francais
        console.log(`------ ${option} ------ \nTitre de l'évènement : ${this.titre} \nDescription : ${this.description}`);
    }
}

const eve = new Event("Hello", "c'est facile", "2023-01-17T12:30:00+02:00")

eve.getEven();