'use strict'

require('dotenv').config()

const conn = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/`
	+ process.env.DB_NAME							// database must be created separately via Azure Portal or CLI
	+ '?ssl=true&replicaSet=globaldb' // SSL flag required for connection to be established

module.exports = {
	connectionString: conn,
	host: process.env.DB_HOST,
	options: {
		auth: {
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD
		},
		useNewUrlParser: true
	}
}
