var http = require("http");
var url = require("url");
var querystring = require("querystring");
var productList = [
  {
    nom : "pull",
    prix : "75€",
    taille : "L",
  },
  {
    nom : "tshirt",
    prix : "23€",
    taille : "S",
  },
  {
    nom : "bermuda",
    prix : "34€",
    taille : "XS",
  }
];

var server = http.createServer(
  function(req, res) {

      res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"} );

      for (var i=0; i<productList.length; i++) {
      res.write(productList[i].nom+"<br>"+productList[i].prix+"<br>"+productList[i].taille+"<br>");
      }

      res.end();
  }
);

server.listen(8080);
