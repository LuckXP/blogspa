var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogPost = new Schema({
	title:{
		type: String,
	},
	postDate: {
		type: Date,
		default: Date.now,
		required: true,
	},
	postBody: {
		type: String,
		required: true,
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId, ref: 'Comment'
	}]
})

module.exports = mongoose.model('BlogPost', BlogPost);