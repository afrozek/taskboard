var mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs');

var BoardSchema = new mongoose.Schema({
	owner: { type: String, required: true },
	title: { type: String, required: true },
	collaborators: [String],

	columns: [
		{
			title: { type: String, required: true },
			tasks:
			[
				{
					title: String,
					content: []
				}
			]
		}
	]
});

module.exports = mongoose.model('Board', BoardSchema);