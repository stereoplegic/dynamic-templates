const inquirer = require('inquirer')
const promptForWrapperTag = require('./promptForWrapperTag')
const { errorMessage } = require('../messages')

module.exports = (packages) => {
	inquirer
		.prompt([
			{
				name: 'path',
				message:
					'Type a path from the current working directory for component placement.\n',
			},
			{
				name: 'name',
				message: "What is your component's name?\n",
			},
		])
		.then(({ path, name }) => {
			if (!path || !name) {
				errorMessage('Path or Name are not defined, Please try again.')
			} else {
				return promptForWrapperTag({ path, name, packages })
			}
		})
}
