console.log(document.cookie)

let tableauId = document.cookie.split("; ");

console.log(document.cookie);

let identifiants = new Array();

tableauId.forEach((ligne) => {
  let tab = ligne.split("=");
  identifiants.push([tab[0], tab[1]]);
});

console.log(identifiants)

let open = document.createElement('button'); // création d'un button
open.innerHTML = "espace utilisateur"; // nom du bouton
document.body.appendChild(open);
open.addEventListener('click', () => {
    if ((identifiants[0][1]) == "TonyStark" && (identifiants[1][1]) == "starktower") {
      window.open('http://127.0.0.1:5501/JSBrowserBOM/exosousobjetwindow/exo/connected.html', 'connected', 'width=400, height=400');
    }
    else {
      window.open('http://127.0.0.1:5501/JSBrowserBOM/exosousobjetwindow/exo/incorrect.html', 'connected', 'width=400, height=400');
    }
});

console.log(identifiants[2][1])