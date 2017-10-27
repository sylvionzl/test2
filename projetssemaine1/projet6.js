var http = require("http");
var url = require("url");
var querystring = require("querystring");
var productList = [
  {
    nom : "pull",
    prix : "75€",
    taille : "L",
    quantite : "0",
  },
  {
    nom : "tshirt",
    prix : "23€",
    taille : "S",
    quantite : "0",
  },
  {
    nom : "bermuda",
    prix : "34€",
    taille : "XS",
    quantite : "0",
  }
];
var server = http.createServer(

  function(req, res) {

    var urlQuery  = url.parse(req.url).query;
    var params = querystring.parse(urlQuery);

    console.log(urlQuery);
    console.log(params);

    if(params.action == "add") {
      if((params.nom != undefined & params.nom != null) & (params.prix != undefined & params.prix != null) & (params.taille != undefined & params.taille != null) & (params.quantite != undefined & params.quantite != null) & (params.action != undefined & params.action != null)) {
        productList.push(params);
      }
    }

    else if(params.action == "delete") {
      productList.splice(params.position, 1);
    }

    else if(params.action == "modify" & params.position != undefined & params.position != null) {
      if(params.nom != undefined & params.nom != null) {
        productList[params.position].nom = params.nom;
      }
      if(params.prix != undefined & params.prix != null) {
          productList[params.position].prix = params.prix;
      }
      if(params.taille != undefined & params.taille != null) {
        productList[params.position].taille = params.taille;
      }
      if(params.quantite != undefined & params.quantite != null) {
       productList[params.position].quantite = params.quantite;
      }
    }
            res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"} );

            for (var i=0; i<productList.length; i++) {
              res.write(productList[i].nom+"<br>"+productList[i].prix+"<br>"+productList[i].taille+"<br>"+productList[i].quantite+" / <span id='"+i+"'><a href=\"./?action=delete&position="+i+"\"><img src='https://www.cepos.fr/client/cache/produit/399_______cp_237_noir_ecoline_600.png' alt='SUPP' height='10px' width='10px' /></a></span> <br> ");

            }

            res.end();
     }
        );

        server.listen(8080);
