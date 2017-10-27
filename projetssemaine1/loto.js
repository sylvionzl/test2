var compteur = 0;

var loto = function(nombre)
{
  var win = Math.round(Math.random()*100 + 1)
  var result = " "
    if(nombre == win) {
    result = "Gagné";
   compteur=0;
    }
    else {
      if(nombre>win) {
        result = "Perdu...Vous avez tapé trop haut";
        ++compteur;
      }
      else {
        result = "Perdu...Vous avez tapé trop bas";
        ++compteur;
      }
    }
  return result
}
console.log(loto(8));
console.log(compteur);
