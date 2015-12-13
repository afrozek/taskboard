var express = require('express'),
	app = express(),
	config = require('./config.js');

//node_modules dependencies
var mongoose = require('mongoose'),
	bodyParser = require('body-parser');

//Allow use of static assets (css/bower files)
app.use(express.static(__dirname + '/public'));

//Use body-parser for req.body in POST requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//connect to database
mongoose.connect(config.db);

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

var auth = require('./app/components/auth')(app, express);
app.use('/api/auth', auth);

var users = require('./app/components/users')(app, express);
app.use('/api/users', users);

var boards = require('./app/components/boards')(app, express);
app.use('/api/todos', boards);

app.get('*', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(config.port);