let open = document.createElement('button'); // création d'un button
open.innerHTML = "google"; // nom du bouton
document.body.appendChild(open);
open.addEventListener('click', () => {
  let lien = window.prompt("Quel site atteindre ?", "google");
    window.open(`https://www.${lien}.com`);
});

"4"

// let open = document.createElement('button');
// open.innerHTML = "open";
// document.body.appendChild(open);
// open.addEventListener('click', () => {
//   let lien = window.prompt("Quel Url atteindre ?", "https://www.google.fr");
//     window.open(lien);
// });

"3"

// let close = document.createElement('button');
// close.innerHTML = "close";
// document.body.appendChild(close);
// close.addEventListener('click', () => {
//   window.close();
// })

"2"

// let button = document.createElement('button');
// button.innerHTML = "button";
// document.body.appendChild(button);
// button.addEventListener('click', () => {
//   window.open("https://www.google.com", 'width=500, height=500 left=200, top=200');
// })

"1"
// const button = document.getElementById("bouton");

// button.addEventListener('click', () => {
//   let nom = prompt("Quel est votre nom ?", 'Peter');
//   console.log("Bienvenue " + nom);
// });