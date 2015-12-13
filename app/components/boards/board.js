var mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs');

var BoardSchema = new mongoose.Schema({
	owner: String,
	title: String,
	collaborators: [],

	columns: [
		{
			title: String,
			tasks:
			[
				{
					title: String,
					content: [String]
				}
			]
		}
	]
});

module.exports = mongoose.model('Board', BoardSchema);