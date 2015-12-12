var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
	title: { type: String, required: true },
	owner: { type: String, required: true },
});

module.exports = mongoose.model('Todo', TodoSchema);