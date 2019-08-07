'use strict'
const mongoose = require('mongoose')
const config = require('./base.config')
const baseModel = require('./base.model')

const Family = baseModel.discriminator('FamilyType', new mongoose.Schema({
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
}, config))

module.exports = Family