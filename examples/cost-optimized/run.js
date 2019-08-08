'use strict'

const db = require('./../../db')
const optimizedAddFamily = require('./family.add')
const optimizedAddVacation = require('./family.add')

// Which tests to run?
async function runTests () {
	await optimizedAddFamily()
	await optimizedAddVacation()
}

// One error handler to catch them all…
function onError (err) {
	console.error('[ERROR]', err)
	process.exit(1)
}

// Finally run tests
db.connect.then(() => {
	runTests()
		.then(db.disconnect)
		.catch(onError)
})
