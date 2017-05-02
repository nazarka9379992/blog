var express = require ('express');
var app = express ();
var _ = require ('underscore');
var fs = require ('fs');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'));
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('node_modules/bootstrap'));
app.set('view engine', 'ejs');




app.listen(3000);