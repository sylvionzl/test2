
// Import des modules
var http = require("http");
var url  = require("url");
var querystring = require("querystring");


// Création d'une variable productList contenant une liste
// d'objets JS representant des articles.
var productList = [
  {
    nom : "pull",
    taille: "xs",
    prix: 50,
    quantite: 10
  },
   {
    nom : "tshirt",
    taille: "l",
    prix: 35,
    quantite: 0
  },
  {
    nom : "casquette",
    taille: "m",
    prix: 25,
    quantite: 0
  }
];


// Initialisation du serveur Web grace à l'execution
// de la méthode "createServer()" de l'objet "http".
// Un copie de cette création est retourné" par "créateServer()" puis
// stocké dans une variable nomée "server"
var server = http.createServer(

  // Fonction qui sera exécutée automatiquement
  // a chaque fois que le serveur reçoit une
  // demande de la part d'un navigateur.
  // La fonction reçoit deux variables (ici "req" et "res")
  // nous permettant d'avoir un accés à un objet representant la question
  // envoyée par le navigateur et une autre representant la réponse à envoyer au navigateur
  function(req, res) {

    // L'URL qui corespond à la question envoyée par le navigateur
    // est contenue dans la propriétée "req.url"
    // On passe cette valeur à la méthode "url.parse()" pour la décortiquer
    // On accede ensuite à la propriétée "query" du résultat retrouné par "url.parse()"
    // pour la stocker dans la variable urlQuery;
    var urlQuery  = url.parse(req.url).query;
    // urlQuery corespond à la chaine de caractère de l'URL située apres le "?"
    // Nous souhaitons décortiquer encore plus cette partie afin de la
    // rendre exploitable encore plus facilement.
    // On va utiliser et passer la valeur de "urlQuery" à la méthode "querystring.parse()"
    // et ensuite récuperer le résultat dans une variable "params"
    var params = querystring.parse(urlQuery);

    // On envoie des information d'en tête au navigateur grace la méthode "res.writeHead()"
    // Ces informations servent au navigateur uniquement pour lui informer que la réponse sera au format HTML encodé en UTF-8 (gestion des caractères accentués)
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

    // On test si la valeur de la propriété "params.action" est égale à la valeur "add"
    if(params.action == "add") {
      // On ajoute au tableau todoList l'objet "params" qui corespond à l'ensemble des propriétés
      // et valeurs envoyées par le navigateur via l'URL. Si dans l'URL nous envoyons
      // les proporiétés nom, taille et prix, l'objet "params" aura alors la même structure qu'un objet
      // present dans le tableau productList
      productList.push(params);
    }

    // On test si la valeur de la propriété "params.action" est égale à la valeur "update"
    if(params.action == "update") {
      // On test si la valeur de la propriété "params.property" est égale à la valeur "prix"
      if(params.property == "prix") {
        // On accede à un élément du tableau qui corespond à la position envoyée
        // via l'URL via la proporiété "params.position". Puis on on remplace l'ancienne valeur de "prix" par la valeur
        // de la proporiété "params.value"
        productList[params.position].prix = params.value;
      }

      // On test si la valeur de la propriété "params.property" est égale à la valeur "nom"
      if(params.property == "nom") {
        // Même technique que pour mettre à jour le prix.
        // On accede à un élément du tableau qui corespond à la position envoyée via "params.position", et on on
        // remplace l'ancienne valeur de "nom" par la valeur de la proporiété "params.value"
        productList[params.position].nom = params.value;
      }

      // On test si la valeur de la propriété "params.property" est égale à la valeur "taille"
      if(params.property == "taille") {
        // idem que pour les deux autres propriétés, cette fois si on cible la propriété "taille"
        productList[params.position].taille = params.value;
      }
      if(params.property == "quantite") {
        productList[params.position].quantite++;
      }
    }

    // Lecture du tableau "productList":
    // On boucle en initialisant le compteur i à 0. On test ensuite à chaque tours de boucle si la valeur du compteur i est inferieur à taille du tableau productList
    // et on définit que le compteur i augmente de +1 à chauqe tours de boucle
    for(var i=0; i<productList.length; i++) {
      // On accede à l'élément situé à la position i (valeur du compteur) et lit chacunes des
      // propriétés de l'article (nom, taille, prix) pour les
      // envoyer au navigateur grace à la méthode res.write();
      res.write(productList[i].nom+" / "+productList[i].taille+" / "+productList[i].prix+" / "+productList[i].quantite+" / <span id='"+i+"'>salut les amis</span> <br> ");

    }

    //On valide l'envoi des informations vers le navigateur
    res.end();
  }
);

// On demande au serveur d'écouter
// sur le port 80
server.listen(8080);
