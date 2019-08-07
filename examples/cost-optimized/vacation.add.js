'use strict'
const Vacation = require('./vacation.model')

const vacation = new Vacation({
	name: "Honolulu",
	country: "USA"
 })

//  vacation.save((err, saveVacay) => {
//  })

function addVacation () {
	return new Promise((resolve, reject) => {
		vacation.save((err, res) => {
			if (err) reject(err)
			if (res) {
				console.log('[INFO] New Family saved', JSON.stringify(res))
				resolve(res)
			}
		})
	})
}

module.exports = addVacation