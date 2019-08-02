'use strict'
const mongoose = require('mongoose')
const config = require('./config')

mongoose.connect(config.connectionString, config.options)
	.then((res) => {
		console.log(`[Connected] to ${config.host}`)
		mongoose.disconnect().then(() => console.log('[Disconnected] bye bye'))

	}).catch((err) => {
		console.log(`[Error] - could not connect to ${config.connectionString}`)
		console.log(err)
		process.exit(1)
	})


process.on('SIGINT', () => {
	mongoose.connection.close(() => {
		console.log('[Terminated] disconnecting due to application termination...')
		process.exit(0)
	})
})
