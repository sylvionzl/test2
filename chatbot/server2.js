var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index2');
});

io.on('connection', function(socket)
{
  console.log('a user connected');

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
   });

  socket.on('chat message', function(msg){
    //io.emit('chat message', msg);
      if (msg.search(/bonjour/) != -1 || msg.search(/hello/) != -1) {
      io.emit('chat message', "Bonjour");
      io.emit('chat message', "Choisissez votre thème : cinéma ou voyage");
      }
      else if (msg.search(/cinéma/) != -1) {
          io.emit('chat message', "Choisissez : films à l'affiche ou séances");
      }
      else {
      io.emit('chat message', "je n'ai pas compris");
      }
      //else {
        //io.emit('chat message', "Vous pourriez dire bonjour !!!");
      //}
   });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


http.listen(8080, function () {
  console.log("Server listening on port 8080");
});
