const inquirer = require('inquirer')
const promptForPathAndName = require('../prompts/promptForPathAndName')

const promptForImports = () => {
	console.log('imports functionality coming soon...')
	return promptForPathAndName()
}

module.exports = () => {
	inquirer
		.prompt([
			{
				type: 'confirm',
				name: 'hasImports',
				message: 'Do you want to add imports?',
			},
		])
		.then(({ hasImports = false }) => {
			if (hasImports) {
				return promptForImports()
			} else {
				return promptForPathAndName()
			}
		})
}
