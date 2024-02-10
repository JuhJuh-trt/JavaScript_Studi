//récupération des cookies et création d'un objet user qui stockera l'username et le mdp

let tableauCookies = document.cookie.split("; ");


let cookies = new Array();

tableauCookies.forEach((ligne) => {
    cookies.push(ligne.split('='));
})

let user = {
    identifiant: "",
    mdp: ""
};

//recherche dans le tableau créé de l'username et du mdp

cookies.forEach((ligne) => {
  if (ligne[0] == "username") {
    user.identifiant = ligne[1];
  } else if (ligne[0] == "mdp") {
    user.mdp = ligne[1];
  }
})

console.log(user);

//création du bouton

const espace_user = document.createElement('button');

espace_user.innerHTML = "Espace utilisateur";

document.body.appendChild(espace_user);

//condition et redirection

espace_user.addEventListener('click', () => {
    if(user.identifiant == 'TonyStark' && user.mdp == "starktower") {
        window.open('../html/connected.html', 'connected', 'width=400, height=400');
    }
    else {
        window.open('../html/incorrect.html', 'incorrect', 'width=400, height=400');
    }
})