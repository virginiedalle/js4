/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;// length = propriété
//Pour donner la taille de la chaîne de caractères.
}
var remplaceECar = function (texte) {
    return texte.replace('e',' ');
//Pour remplacer le 1er e de la chaîne par un espace.
}
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);
//Pour concaténer les 2 chaînes de caractères.
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
//Pour afficher le 5ème caractère de la chaîne.
}
var afficher9Car = function (texte) {
    return texte.substring(0, 9);
//Pour afficher les 9 premiers caractères.
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
//Pour mettre en majuscule la chaîne.
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
//Pour mettre en minuscule la chaîne.
}
var SupprEspaceString = function (texte) {
    return texte.trim();
//Pour supprimer les espaces avant et après la chaîne.
}
var IsString = function (texte) {
    if (typeof texte == 'string'){
    return true;}
//Pour afficher true si le paramètre d'entrée de la fonction est de type string.
}
var AfficherExtensionString = function (texte) {
  var ext = texte.split('.')
    return ext[1];
//Afficher l'extension du fichier.
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;;
//Pour compter le nombre d'espaces dans la chaîne. Length -1 permet de supprimer la dernière partie qui est compté pour avoir UNIQUEMENT le nombre d'espaces.
}
var InverseString = function (texte) {
    return texte.split('').reverse('').join('');
//Pour inverser une chaîne de caractères : On éclate, on inverse, et on joint.
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x,y);
}
//Calculer la puissance d'un nombre par rapport à un autre (x à la puissance y)
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
//Afficher la valeur absolue d'un nombre.
}
var valeurAbsolueArray = function (array) {
  return array.map(Math.abs);
}
  // for (var i = 0 ; i < array.length ; i++) {
  //   var valeurAbsolue = Math.abs(array[i]);
  //   array[i] = valeurAbsolue;
  // }
  //   return array;
  // }
//Afficher les valeurs absolues de plusieurs nombres.
var sufaceCercle = function (rayon) {
    var result = Math.PI * Math.pow(rayon, 2);
    result = Math.round(result);
    return result;
//Calculer la surface d'un cercle en fonction de son rayon. L'arrondir à l'entier le plus proche.
}
var hypothenuse = function (ab, ac) {
  return Math.hypot(ab,ac);
}
//Calculer l'hypothénuse d'un triangle rectangle.
var calculIMC = function (poids, taille) {
  var cIMC = (poids / (Math.pow(taille, 2))).toFixed(2);
    return Number(cIMC);
}
//Calculer l'IMC (Poids / (taille x taille)). Ne gardez que deux chiffres après la virgule.
