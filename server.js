
var express = require("express"); 
var app = express(); 
var port = process.env.PORT || 8000;
app.get('/', function(req, res) { 
	res.send('Geeky Theory probando express.js'); 
});
app.get('/prueba', function(req, res) {
 res.send('Geeky Theory probando express.js en /prueba'); 
});
 app.listen(port);
 console.log("levantando server con express");


