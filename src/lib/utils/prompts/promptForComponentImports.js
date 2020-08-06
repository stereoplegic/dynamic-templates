const inquirer = require('inquirer')

module.exports = ({ package, imports, isNamed, hasMultiple = true }) => {
	if (hasMultiple) {
		return inquirer.prompt([
			{
				name: 'package',
				message: 'What package would you like to import?\n',
			},
			{
				name: 'isNamed',
				message: 'Are imports named functions?\n',
				type: 'confirm',
			},
			{
				name: 'imports',
				message: 'What method(s) do you want to import?\n',
			},
			{
				type: 'confirm',
				name: 'hasMultiple',
				message: 'Do you have multiple imports?\n',
			},
		])
	} else {
		return { package, imports, isNamed, hasMultiple }
	}
}
