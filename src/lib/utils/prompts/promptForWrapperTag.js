const inquirer = require('inquirer')
const { createComponent } = require('../generators/createComponent')
const { getCurrentPath } = require('../getCurrentPath')

module.exports = ({ path, name, packages }) => {
	inquirer
		.prompt([
			{
				name: 'wrapper',
				message: 'What html tag should the wrapper tag be?\n',
			},
		])
		.then(({ wrapper }) => {
			createComponent({
				path: `${getCurrentPath()}/${path}`,
				name,
				type: 'functional',
				wrapper,
				packages,
			})
		})
}
