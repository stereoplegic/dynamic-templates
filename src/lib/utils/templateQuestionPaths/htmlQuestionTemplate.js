const inquirer = require('inquirer')
const createHtmlFile = require('../createHtmlFile')

const htmlQuestionQuery = ({
	title = '',
	multiplePages = true,
	page,
	path,
}) => {
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

module.exports = () =>
	htmlQuestionQuery({}).then(({ title, multiplePages, page, path }) => {
		if (multiplePages) {
			createHtmlFile({ title, page, path })
			return htmlQuestionQuery({ title, multiplePages })
		} else return createHtmlFile({ title, page, path })
	})
