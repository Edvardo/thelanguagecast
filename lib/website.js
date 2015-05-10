var http = require('http');

var express = require('express');
var app = express();
var swig = require('swig');

var router = require('./router.js');



app.get('/home', function (request, response){
	router.getHome(request, response);
});

app.post('/home', function (request, response){
	response.redirect('/video');
});

app.get('/video', function (request, response){
	router.getVideo(request, response);
});

app.get('*', function (request, response){
	response.send("Link not found");
});


var stream = http.createServer(app);

stream.listen(process.argv[2]);