const inquirer = require('inquirer')
const fuzzy = require('fuzzy')
const promptForLifeCycleMethods = require('./promptForLifeCycleMethods')
const htmlTags = require('../constants/html-tags')

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))

const searchTags = (_, input) => {
	input = input || ''
	return new Promise(function (resolve) {
		setTimeout(function () {
			var fuzzyResult = fuzzy.filter(input, htmlTags)
			resolve(
				fuzzyResult.map(function (el) {
					return el.original
				}),
			)
		}, 300)
	})
}

module.exports = ({ path, name, packages, type }) => {
	inquirer
		.prompt([
			{
				type: 'autocomplete',
				name: 'wrapper',
				message: 'What html tag should the wrapper tag be?\n',
				source: searchTags,
			},
		])
		.then(({ wrapper }) => {
			return promptForLifeCycleMethods({ path, name, packages, type })
		})
}
