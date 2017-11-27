
var express = require("express"); 
var body_parser = require('body-parser');
var app = express(); 

var port = process.env.PORT || 8000;
app.use(body_parser.urlencoded({extended:true}));

app.get('/', function(req, res) { 
	res.send('Geeky Theory probando express.js'); 
});
app.post('/prueba', function(req, res) { 
 console.log(req.body);
 console.log(req.body.nombre);

 console.log("Manueliito Probando parametros de entrada......");
 res.send('Geeky Theory probando express.js en /prueba'); 
});
 app.listen(port);
 console.log("levantando server con express");


