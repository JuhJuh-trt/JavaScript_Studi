const date = new Date(); // date et heure actuelle dans une chaîne
const date1 = new Date(2023, 11, 1, 10, 14); // année, mois, jour, heure, minute
"ne pas oublier que les mois sont comptez de \"0 a 12\" donc 11 représente décembre"
const date2 = new Date(2023, 11, 1, 10, 14, 10, 58); // année, mois, jour, heures, minutes, secondes, millisecondes
const date3 = new Date(2023, 11, 1); // sans heures de notifier donc par defaut (00:00:00)
const date4 = new Date("2023-01-17T12:30:00+02:00") // format ISO 8601
const date5 = new Date("Tue Jan 17 2023 11:30:00 GMT+0100") // représentation textuelle valide

console.log(date.toString()); 
console.log(date1.toString()); 
console.log(date2.toString()); 
console.log(date3.toString()); 
console.log(date4.toString()); 
console.log(date5.toString()); 

"Methode Statique"

console.log(Date.now()); // nombre de millisecondes écoulées depuis le 1er janvier 1970 à 00:00:00 UTC.
console.log(Date.UTC(2023, 11, 1, 10, 14, 10, 58)); 
console.log(Date.parse("2023-11-17T12:30:00+02:00"));

"Methode d'instance de conversion"

console.log(date.toDateString()); // Thu Jan 04 2024
console.log(date.toTimeString()); // 09:01:33 GMT+0100 (heure normale d’Europe centrale)
console.log(date.toISOString()); // 2024-01-04T08:01:24.809Z
console.log(date.toUTCString()); // Thu, 04 Jan 2024 08:01:09 GMT

"Methode valueOf()"

console.log(date.valueOf()); // correspond au nombre de millisecondes écoulées depuis le 1er janvier 1970 à 00:00:00 UTC

"Formater une date"

console.log(date.toLocaleDateString()); // 04/01/2024
console.log(date.toLocaleTimeString()); // 09:05:10
console.log(date.toLocaleString()); // 04/01/2024 09:05:10

console.log(date.toLocaleDateString("fr-CA")); // 2024-01-04
console.log(date.toLocaleTimeString("fr-CA")); // 09 h 05 min 10 s
console.log(date.toLocaleString("fr-CA")); // 2024-01-04 09 h 05 min 10 s

"weekday" // : pour définir si le jour de la semaine doit être affiché comme un texte complet (par ex, "lundi") ou en abrégé (par ex, "lun").
"year" // : pour définir si l'année doit être affichée en format numérique à 2 ou 4 chiffres, ou format complet (par ex, "2023").
"month" // : pour définir si le mois doit être affiché en texte complet (par ex, "mars") ou en abrégé (par ex, "mar").
"day" // : pour définir si le jour doit être affiché en format numérique avec ou sans zéro devant (par exemple, "01" ou "1").
"hour" // : pour définir si l'heure doit être affichée avec le format 12 ou 24 heures.
"minute" // : pour définir si les minutes doivent être affichées avec ou sans zéro devant (par exemple, "08" ou "8").
"second" // : pour définir si les secondes doivent être affichées avec ou sans zéro devant (par exemple, "08" ou "8").
"timeZoneName" // : pour afficher le nom de la zone horaire (par exemple, "heure d'été d'Europe centrale").

let options = {day: 'numeric', weekday: 'short', month: 'long', year: 'numeric'};

console.log(date.toLocaleDateString("fr-FR", options)); // jeu. 4 janvier 2024
// "fr-FR" est le parametres locales, qui affiche l'heure suivant le format demandé, ici en fr francais
let options2 = {day: 'numeric'}

console.log(date.toLocaleDateString("fr-FR", options2)); // 4

"Exemple 1"

const datex = new Date("2023-01-17T09:30:00");
let option = {weekday:'long', day:'2-digit', month:'2-digit', year:'numeric', hour:'numeric', minute: '2-digit',timeZoneName:'long'};
let formatedDateTime = datex.toLocaleString("fr-Ca", option);

console.log(formatedDateTime); // mardi 2023-01-17 09 h 30 heure normale de l’Europe centrale

"Prototype"

console.log(Object.getOwnPropertyNames(Date.prototype));