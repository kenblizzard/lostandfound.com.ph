var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
var db = require('./config/db');
var port = process.env.PORT || 8080; 

app.use(bodyParser.json()); 

app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(methodOverride('X-HTTP-Method-Override')); 

app.use(express.static(__dirname + '/public')); 

// routes ==================================================
require('./server/routes')(app); // configure our routes

app.listen(port);               
                   
console.log('Magic happens on port ' + port);
          
exports = module.exports = app;                         
