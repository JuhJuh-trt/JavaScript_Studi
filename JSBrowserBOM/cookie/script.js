let destination = document.getElementById('destination');

const forward = document.getElementById('forward');

destination.addEventListener('click', () => {
    destination = window.location.assign('destination.html');
});

forward.addEventListener('click', () => {
    window.history.forward();
});

window.alert(window.history.length);

//création d’un objet Date pour créer une date d’expiration :

const dateExp = new Date();
dateExp.setMonth(dateExp.getMonth() + 1); //nous ajoutons 1 mois à la date

//nous interrogeons l’utilisateur sur son username et son mdp avec window.prompt()

const username = prompt("Username");
const mdp = prompt("Mot de passe");
const name = prompt('Nom')

//creation des cookies

document.cookie = `username=${username} ; expires=${dateExp.toUTCString()}`;
document.cookie = `mdp=${mdp} ; expires=${dateExp.toUTCString()}`;
document.cookie = `name=${name} ; expires=${dateExp.toUTCString()}`;