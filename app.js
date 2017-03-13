var express = require('express');
var app = express();

app.get('/', function(req,res) {
	res.render("home.ejs");
});

app.get('/fallinlovewith/:thing', function(req,res) {
	var car = req.params.thing;
	res.render('dream.ejs', {car})
})
app.listen(3000);