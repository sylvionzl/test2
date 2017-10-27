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
var sousTotal = [0];

for (var i=0; i<productList.length; i++) {
  sousTotal [i] = productList[i].prix * productList[i].quantite
  }

console.log(sousTotal);

var total = function(tableau)
{
        var n = tableau.length;
        var somme = 0;
        for(i=0; i<n; i++) {
          somme += tableau[i];
        }
        return somme
}

console.log(total(sousTotal));
