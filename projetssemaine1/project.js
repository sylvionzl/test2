var http = require("http");
var toDoList = ["rdv chez le médecin",
" chercher colis au point relais",
" dej pro avec John",
" cours de tennis"];
var url = require("url");
var querystring = require("querystring");

var server = http.createServer(
  function(req, res) {

    var urlQuery  = url.parse(req.url).query;
    var params = querystring.parse(urlQuery);

  console.log(urlQuery);
  console.log(params);
  console.log(params.task);
  
  if(params.task != undefined){
    toDoList.push(params.task);
  }

      res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"} );

      for (var i=0; i<toDoList.length; i++) {
      res.write(toDoList[i]+"<br>");
      }

      res.end();
  }
);

server.listen(8080);
