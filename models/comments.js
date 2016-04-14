var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema({
	body: String,
 	date: { type: Date, default: Date.now },
 	blogPost: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost' },
 	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Comment', Comment);
