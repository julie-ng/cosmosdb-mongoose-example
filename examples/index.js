'use strict'
const db = require('./../db')
const countSimpleFamilies = require('./simple/families.count')
const simpleExample = require('./simple/family.add')

// Which tests to run?
async function runTests () {
	await countSimpleFamilies()
	await simpleExample()
	await countSimpleFamilies()
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
