var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
//var routes = require('./routes')(app);


app.use('/', function (req, res) { res.sendFile(path.resolve(process.cwd(), 'app', 'index.html')) });

http.createServer(app).listen(3000, function () { console.log('Server now listening on port 3000') });
