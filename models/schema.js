var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	title: {
		type: String,
		trim: true,
		required: true
	},

	url: {
		type: String,
		trim: true,
		required: true
	}
})

var schemaExport = mongoose.model('Articles', schema);
module.exports = schemaExport;
