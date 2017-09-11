const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      bodyParse = require('body-parser'),
      path = require('path'),
      server = require('http').createServer(app),
      io = require('socket.io')(server);

app.use(bodyParse.json());
//init static folders
app.use('/client', express.static('client'));

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen('3000', function(){
	console.log('Connected to http://localhost:3000');
});
