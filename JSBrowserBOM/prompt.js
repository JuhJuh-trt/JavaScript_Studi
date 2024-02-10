const button = document.getElementById("bouton");

button.addEventListener('click', () => {
  let mot = window.prompt("Quel mot afficher ?", "mot de votre choix");
  window.alert(mot);
});