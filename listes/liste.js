// Création de la liste

let l = [];
l.push(17);
l.push(22);
l.push(4);
l.push(14);
l.push(17);
l.push(16);
l.push(17);
l.push(18);

console.log(l);

// Recherche de l'élement 14

let rep = false;

for ( let i = 0; i < 8; i++ ){
  if (l[i]==14)
  rep = true;
}

console.log(rep);

// Recherche des indices d'apparition de l'element 17

let indices = [];
for (let i = 0; i<8 ; i++){
  if (l[i]==17){
    indices.push(i);
  }
}

console.log(indices);

// recherche d'un minimun dans une liste 

let min = 10000;
let ind_min = -1;


for (let i=0; i<9; i++){
  if (l[i] <= min){
    min = l[i];
    ind_min = i;
  }
}

console.log(min, ind_min);