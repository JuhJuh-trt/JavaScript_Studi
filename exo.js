let m = [[6,7,9,10,8,6,7,7,8], [6,5,6,7,8,6,7,6,7], [6,7,8,9,5,8,10,7,7], [7,8,10,8,6,8,9,10,10]];
let tab = ['Jade Dupont', 'Louise Fabre', 'Emma Sanchez', 'Ambre Pastor', 'Alice Arnaud', 'Gabriel Perrin', 'Leo Morin', 'Raphael Blanc', 'Louis Moreau'];
let r = [0,0,0,0];
for (let i = 0; i <= 3; i++){
  for (let j = 0; j <= 8; j++){
    r[i] = r[i] + m[i][j];
    console.log(r[i]);
    }
  }
for (let i = 0; i <= 3; i++){
  r[i] = r[i]/9;
}
console.log("La moyenne est de la qualité des locaux est :" + r[0] + ", celle du temps de travail est de : " + r[1] + ", celle de la relations entre collegues est de : " + r[2] + ", et celle de l'épanouissement personnel dans le travail est de : " + r[3]);

