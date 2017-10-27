var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

var clientList = [
  {firstName: "John", lastName : "Doe", email: "john@gmail.com", phone: "0612457845"},
  {firstName: "Don", lastName : "Draper", email: "don@gmail.com", phone: "0654453587"},
  {firstName: "Jon", lastName : "Snow", email: "snow@gmail.com", phone: "0854357845"}
];

app.get('/', function (req, res) {
  res.render('clientList', { clients: clientList});
});

app.get('/delete', function (req, res) {
  clientList.splice(req.query.i, 1);
  res.render('clientList', { clients: clientList});
});

app.get('/add', function (req, res) {
  clientList.push(req.query);
  res.render('clientList', { clients: clientList});
});

app.get('/update', function (req, res) {
  if(req.query.property == "firstName"){
    clientList[req.query.i].firstName = req.query.value;
  }
  if(req.query.property == "lastName"){
    clientList[req.query.i].lastName = req.query.value;
  }
  if(req.query.property == "email"){
    clientList[req.query.i].email = req.query.value;
  }
  if(req.query.property == "phone"){
    clientList[req.query.i].phone = req.query.value;
  }
  res.render('clientList', { clients: clientList});
});


app.listen(8080, function () {
  console.log("Server listening on port 80");
});
