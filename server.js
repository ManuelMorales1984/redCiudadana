var express = requiere('express');
var mongose = requiere('mongose');
var app = express();


app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.methodPverride());
	app.use(express.router());

});

app.get('/nelo',function(req, res){
	res.send('Hola, Mundo !!!');
});

app.listen(5000);
console.log("Incializando");
