var http = require('http');

var express = require('express');
var app = express();
var swig = require('swig');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('templates', __dirname + '/templates');


app.get('/home', function (request, response){
	response.render('home');
});


var stream = http.createServer(app);

stream.listen(process.argv[2]);