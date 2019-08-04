'use strict'
const mongoose = require('mongoose')
const config = require('./config')

/**
 * Check for existing connection before attempting to connect.
 * See ready states in Mongoose API
 * https://mongoosejs.com/docs/api.html#connection_Connection-readyState
 */
const connect = new Promise((resolve, reject) => {
	if (mongoose.connection.readyState === 1) {
		resolve(mongoose.connection)	// return existing connecting
	} else if (mongoose.connection.readyState === 2) {
		mongoose.connection.on('connected', () => resolve(mongoose.connection)) // wait for connect to finish
	} else {
		// connect
		mongoose.connect(config.connectionString, config.options)
		.then((res) => {
			console.log('[INFO] Connected to', config.connectionString)
			resolve(res)
		}).catch((err) => {
			console.log(`[ERROR] - could not connect to ${config.connectionString}`)
			console.log(err)
			reject(err)
			process.exit(1)
		})
	}
})

process.on('SIGINT', () => {
	mongoose.connection.close(() => {
		console.log('[WARNING] disconnecting due to application termination...')
		process.exit(1)
	})
})

module.exports = connect