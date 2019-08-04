'use strict'
const Family = require('./family.schema')

const countFamilies = function () {
	return new Promise((resolve, reject) => {
		Family.countDocuments((err, count) => {
			if (err) reject(err)
			if (count) {
				console.log('[INFO] Number of Families:', count)
				resolve(count)
			}
		})
	})
}

module.exports = countFamilies
