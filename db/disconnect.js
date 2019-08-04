'use strict'

const mongoose = require('mongoose')

module.exports = function () {
	mongoose.disconnect()
		.then((res) => console.log('[INFO] Disconnected, bye bye'))
}
