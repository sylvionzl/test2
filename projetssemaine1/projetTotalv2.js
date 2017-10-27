var productList = [
  {
    nom : "pull",
    prix : 75,
    taille : "L",
    quantite : 1,
  },
  {
    nom : "tshirt",
    prix : 23,
    taille : "S",
    quantite : 3,
  },
  {
    nom : "bermuda",
    prix : 34,
    taille : "XS",
    quantite : 2,
  }
];

var total = function(tableau)
{
    var n = tableau.length;
    var sousTotal = [0];
      for (var i=0; i<n; i++) {
        sousTotal [i] = tableau[i].prix * tableau[i].quantite
      }
    var somme = 0;
      for(i=0; i<n; i++) {
          somme += sousTotal[i];
      }
        return somme
}

console.log(total(productList));
