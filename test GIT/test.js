var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
var clientList = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "0612457845"
  },
   {
     firstName: "Don",
     lastName: "Draper",
     email: "don@gmail.com",
     phone: "0654453587"
  },
  {
    firstName: "Jon",
    lastName: "Snow",
    email: "snow@gmail.com",
    phone: "0854357845"
  }
];

app.get('/', function (req, res) {
  res.render('homepage2410', {clientList});
});

app.get('/ajouter', function (req, res) {
  if (req.query.firstName != undefined && req.query.lastName != undefined && req.query.email != undefined && req.query.phone != undefined) {clientList.push(req.query)};
  res.render('ajouter2610', {clientList});
});

app.get('/supprimer', function (req, res) {
  if (req.query.position != undefined) {clientList.splice(req.query.position, 1)};
  res.render('supprimer2410', {clientList});
});

app.get('/modifier', function (req, res) {
  if (req.query.firstName != undefined) {clientList[req.query.position].firstName = req.query.firstName};
  if (req.query.lastName != undefined) {clientList[req.query.position].lastName = req.query.lastName};
  if (req.query.email != undefined) {clientList[req.query.position].email = req.query.email};
  if (req.query.phone != undefined) {clientList[req.query.position].phone = req.query.phone};
  res.render('modifier2610', {clientList});
});

app.get('/afficher', function (req, res) {
  res.render('afficher', {clientList})
});

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});
