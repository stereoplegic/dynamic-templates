const inquirer = require('inquirer')

module.exports = () =>
	inquirer.prompt([
		{
			type: 'confirm',
			name: 'hasImports',
			message: 'Do you want to add imports?',
		},
	])
