'use strict'
const mongoose = require('mongoose')

const Family = mongoose.model('Family', new mongoose.Schema({
	lastName: String,
	parents: [{
		familyName: String,
		firstName: String,
		gender: String
	}],
	children: [{
		familyName: String,
		firstName: String,
		gender: String,
		grade: Number
	}],
	pets:[{
		givenName: String
	}],
	address: {
		country: String,
		state: String,
		city: String
	}
}))

module.exports = Family