var express    = require('express');
var app        = express();
var port       = process.env.PORT || 8080;
var router     = express.Router();
//var Time       = require('./models/time');
var mongoose   = require('mongoose');
var ejs        = require('ejs');
var db       = require('./models');


app.set('view engine', ejs);


app.get('/', function(req, res) {
	var now = new Date();
	var thing = db.Time.create({ time : now});
	// thing.save();
	console.log("thing!: ", thing);
	//var timeResult = db.Time.find();
	db.Time.find(function (err, times) {
	  if (err) return console.error(err);
	  console.log(times);
	  res.render("index.ejs", {time : times});
	});
	//console.log("Time result" , timeResult);
	//console.log("Maybe time::::: ", timeResult.schema.paths.time)
});

// app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);