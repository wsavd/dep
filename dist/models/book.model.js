'use strict';

var mongoose = require('mongoose');

var BookSchema = mongoose.Schema({

	releaseDate: {
		type: Date
	}
});

var Book = module.exports = mongoose.model('Book', BookSchema);