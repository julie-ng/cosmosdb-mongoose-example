'use strict'
const db = require('./../db')
const countSimpleFamilies = require('./simple/families.count')
const simpleExample = require('./simple/family.add')

const optimizedAddFamily = require('./cost-optimized/family.add')
const optimizedAddVacation = require('./cost-optimized/family.add')

// Which tests to run?
async function runTests () {
	console.log('')

	console.log('[INFO] ----- Simple Examples -----')
	await countSimpleFamilies()
	await simpleExample()
	await countSimpleFamilies()
	console.log('')

	console.log('[INFO] ----- Cost Optimized Examples -----')
	await optimizedAddFamily()
	await optimizedAddVacation()
	console.log('')
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
