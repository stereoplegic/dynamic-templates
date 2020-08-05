#!/usr/bin/env node
const yargs = require('yargs')
const inquirer = require('inquirer')
const templateQuestionPaths = require('./lib/utils/templateQuestionPaths')

yargs.command({
	command: 'create',
	describe: 'Create a react component',
	handler: () => {
		inquirer
			.prompt([
				{
					type: 'list',
					name: 'template',
					message: 'Which type of template would you like to create?',
					choices: [
						'Functional Component (React)',
						'Class Component (React)',
						'HTML',
						'CSS',
						'JS Helpers File',
						'Styled Component List',
					],
				},
			])
			.then(({ template }) => {
				return templateQuestionPaths(template)
			})
	},
})

yargs.parse()
