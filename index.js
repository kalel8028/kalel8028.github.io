var express = require('express');
var server = express();
server.get('/.well-known/apple-app-site-association', function(request, response) {
  response.sendFile(__dirname +  '/apple-app-site-association');
});

// HOME PAGE
server.get('/home', function(request, response) {
  response.sendFile(__dirname +  '/home.html');
});

// ABOUT PAGE
server.get('/about', function(request, response) {
  response.sendFile(__dirname +  '/about.html');
});
server.listen(80);
