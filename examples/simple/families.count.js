'use strict'
const Family = require('./family.model')

const countFamilies = function () {
	return new Promise((resolve, reject) => {
		Family.countDocuments((err, count) => {
			if (err) reject(err)
			if (Number.isInteger(count)) {
				console.log('[INFO] Number of Families:', count)
				resolve(count)
			} else {
				resolve('[WARN] `count` is not an integer')
			}
		})
	})
}

module.exports = countFamilies
