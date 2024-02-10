"L'objet screen"

console.log(screen.width);//la largeur de l’écran en pixels,
console.log(screen.height);//la hauteur de l’écran en pixels,
console.log(screen.availWidth);//la largeur disponible de l’écran en pixels, c’est-à-dire la largeur de l’écran moins la barre des tâches et autres éléments de l’interface utilisateur
console.log(screen.availHeight);//la hauteur disponible de l’écran en pixels, c’est-à-dire la hauteur de l’écran moins la barre des tâches et autres éléments de l’interface utilisateur
console.log(screen.colorDepth);//la profondeur de couleur de l’écran en bits
console.log(screen.pixelDepth);//la profondeur de couleur de l’écran en pixels

"L'objet location"

//Affichage de propriétés de window.location (le mot window est facultatif)

console.log(window.location.href);//contient l’URL complète de la page web
console.log(window.location.protocol);//contient le protocole utilisé pour accéder à la page web (par exemple « http : » ou « https : »)
console.log(window.location.host);// contient le nom d’hôte (nom de domaine) de la page web
console.log(window.location.pathname);//contient le chemin d’accès de la page web, sans le nom d’hôte

"Quelques methode de l'objet location"

"location.assign()"//permet de charger la page web dont l’URL est passée comme argument. Il se produit la même chose quand on modifie la valeur de location.href. Elle ajoute la nouvelle URL dans l’historique de navigation.
"location.replace()"//permet de remplacer la page web actuelle par celle dont l’URL est passée comme argument. À la différence de la méthode précédente, la méthode location.replace() remplace l’URL courante par la nouvelle URL dans l’historique du navigateur. Il n’y a donc pas un ajout d’une entrée dans l’historique de navigation, mais un remplacement d’une entrée par une autre.
console.log(location.toString())//permet de récupérer l’URL sous la forme d’une chaîne de caractères.

"L'objet window.history"

history.back()//charge la page précédente dans l’historique du navigateur,
history.forward()//charge la page suivante dans l’historique du navigateur,
history.go(n)//charge la page située n positions dans l’historique du navigateur