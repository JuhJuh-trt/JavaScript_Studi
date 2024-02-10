//nous déterminons la date d'expiration

let dateExp = new Date();

dateExp.setHours(dateExp.getHours() + 1);

//Nous définissons les constantes username et mdp sur la valeur de retour de prompts

const username = window.prompt("Identifiant :");

const mdp = window.prompt("Mot de passe :");

//Nous créons nos cookies

document.cookie = `username=${username}; expires=${dateExp.toUTCString()}`;

document.cookie = `mdp=${mdp}; expires=${dateExp.toUTCString()}`;

console.log(document.cookie);

//création du bouton

let connexion = document.createElement('button');

connexion.innerHTML = "connexion";

document.body.appendChild(connexion);

//redirection quand le bouton connexion est cliqué

connexion.addEventListener('click', () => {window.location.assign('../html/traitement.html')});