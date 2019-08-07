'use strict'
const mongoose = require('mongoose')
const config = require('./base.config')
const baseModel = require('./base.model')

const VacationDestination = baseModel.discriminator('VacationDestinationsType', new mongoose.Schema({
	name: String,
	country: String
}, config))

module.exports = VacationDestination