var http = require("http");
var url = require("url");
var querystring = require("querystring");

var server = http.createServer(
  function(req, res) {

console.log(req.url);
console.log(url.parse(req.url));
console.log(url.parse(req.url).pathname);

    var page = url.parse(req.url).pathname;

    var query  = url.parse(req.url).query;
var params = querystring.parse(query);
  console.log(params);

      res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"} );

if (page == "/") {
  res.write("Home Page");
}
else if (page == "/boutique") {
  res.write("Shop Page :"+params.product +"/"+params.color);
  }
  else {
    res.write("Page not found");
  }
      res.end();
  }
);

server.listen(8080);
