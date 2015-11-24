
//==============================================================
// BASE SETUP
//==============================================================

// CALL PACKAGES-----------------------------------------------
	var express = require('express'); // call epxress
	var app = express(); // define app
	var bodyParser = require('body-parser'); // reads post contents
	var morgan = require('morgan'); // logs all requests to console
	var mongoose = require('mongoose'); //ORM 
	var path = require('path');
	var port = 3000;
//CONFIG IMPORT
	//var config = require('./config');

	
	
//==============================================================
// APP CONFIG
//==============================================================
	// use bodyparser to grab info from POST requests
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());

	// handle CORS requests(cross origin resource sharing)
	app.use(function(req,res,next){
		res.setHeader('Access-Control-Allow-Origin','*');
		res.setHeader('Access-Control-Allow-Methods','GET,POST');
		res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,\Authorization');
		next();
	});

// log all requests to console
	app.use(morgan('dev'));


// DB CONNECT
	//mongoose.connect(config.database);

//STATIC FILE LOCATIONS
app.use(express.static(__dirname + '/public'));


//==============================================================
// ROUTES FOR API
//==============================================================

//API ROUTES
//var apiRoutes = require('./app/routes/api')(app,express);
//app.use('/api',apiRoutes);

//CATCHALL : sends all routes not defined to front end
//MUST BE REGISTERED AFTER API ROUTES ABOVE^^
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname + '/public/index.html'));
});



//SERVER START
//===============================

//app.listen(config.port);
app.listen(port)
console.log('Something bout to go down on port: ' + port);





