'use strict'
const Vacation = require('./vacation.model')

const vacation = new Vacation({
	name: "Honolulu",
	country: "USA"
 })

function addVacation () {
	return new Promise((resolve, reject) => {
		vacation.save((err, res) => {
			if (err) reject(err)
			if (res) {
				console.log('[INFO] New VacationDestination saved', JSON.stringify(res))
				resolve(res)
			}
		})
	})
}

module.exports = addVacation