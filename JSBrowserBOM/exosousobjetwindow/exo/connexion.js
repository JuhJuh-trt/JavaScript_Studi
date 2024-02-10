let open = document.createElement('button'); // création d'un button
open.innerHTML = "connexion"; // nom du bouton
document.body.appendChild(open);
open.addEventListener('click', () => {
  window.location.assign('http://127.0.0.1:5501/JSBrowserBOM/exosousobjetwindow/exo/traitement.html');
});

const dateExp = new Date();
dateExp.setHours(dateExp.getHours() + 1); //nous ajoutons 1 minute à la date

//nous interrogeons l’utilisateur sur son username et son mdp avec window.prompt()

const username = prompt("Identifiant :");
const mdp = prompt("Mot de passe :");
const name = prompt('Nom')

//creation des cookies

document.cookie = `username=${username} ; expires=${dateExp.toUTCString()}`;
document.cookie = `mdp=${mdp} ; expires=${dateExp.toUTCString()}`;
document.cookie = `name=${name} ; expires=${dateExp.toUTCString()}`;

console.log(document.cookie);

