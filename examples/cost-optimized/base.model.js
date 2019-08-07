'use strict'
const mongoose = require('mongoose')
const config = require('./base.config')

/**
 * Common Base Model so all items land in 1 collection, optimizing costs.
 * For details, see https://docs.microsoft.com/en-us/azure/cosmos-db/mongodb-mongoose#using-mongoose-discriminators-to-store-data-in-a-single-collection
 */
const baseModel = mongoose.model('Common', new mongoose.Schema({}, config))

module.exports = baseModel