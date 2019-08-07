'use strict'
const Family = require('./family.model')

const family = new Family({
	lastName: "Volum",
	parents: [
		{ firstName: "Thomas" },
		{ firstName: "Mary Kay" }
	],
	children: [
		{ firstName: "Ryan", gender: "male", grade: 8 },
		{ firstName: "Patrick", gender: "male", grade: 7 }
	],
	pets: [
		{ givenName: "Blackie" }
	],
	address: { country: "USA", state: "WA", city: "Seattle" }
 })

//  family.save((err, saveFamily) => {
// 	console.log("Saved: " + JSON.stringify(saveFamily));
//  });

function addFamily () {
	return new Promise((resolve, reject) => {
		family.save((err, res) => {
			if (err) reject(err)
			if (res) {
				console.log('[INFO] New Family saved', JSON.stringify(res))
				resolve(res)
			}
		})
	})
}

module.exports = addFamily
