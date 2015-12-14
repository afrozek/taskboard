var mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs');

var BoardSchema = new mongoose.Schema({
	owner: { type: String, required: true },
	title: { type: String, required: true },
	collaborators: [],

	columns: []
});

module.exports = mongoose.model('Board', BoardSchema);