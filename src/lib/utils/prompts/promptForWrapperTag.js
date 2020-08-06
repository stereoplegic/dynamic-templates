const inquirer = require('inquirer')
const promptForLifeCycleMethods = require('./promptForLifeCycleMethods')

module.exports = ({ path, name, packages, type }) => {
	inquirer
		.prompt([
			{
				name: 'wrapper',
				message: 'What html tag should the wrapper tag be?\n',
			},
		])
		.then(({ wrapper }) => {
			return promptForLifeCycleMethods({ path, name, packages, type })
		})
}
