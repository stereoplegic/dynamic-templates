const inquirer = require('inquirer')

module.exports = ({ title = '', multiplePages = true, page, path }) => {
	if (multiplePages) {
		return inquirer.prompt([
			{
				name: 'page',
				message: 'What is the file name of this html page?\n',
			},
			{
				name: 'title',
				message: 'What is the title of this html page?\n',
			},
			{
				name: 'path',
				message: 'What is the path from the current directory for this file?\n',
			},
			{
				type: 'confirm',
				name: 'multiplePages',
				message: 'Do you want to create another page?',
			},
		])
	} else {
		return { title, multiplePages, page, path }
	}
}
