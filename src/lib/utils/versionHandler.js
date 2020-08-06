const chalk = require('chalk')
const figlet = require('figlet')

const versionHandler = async () => {
	const packageJSON = require('../../../package.json')

	await figlet(
		`dynamic`,
		{
			horizontalLayout: 'fitted',
			verticalLayout: 'fitted',
		},
		(err, data) => {
			if (err) {
				console.log('Something went wrong...')
				console.dir(err)
				return
			}
			console.log(chalk.bold.green(data))
			figlet(
				`-templates`,
				{
					horizontalLayout: 'fitted',
					verticalLayout: 'fitted',
				},
				(err, data) => {
					if (err) {
						console.log('Something went wrong...')
						console.dir(err)
						return
					}
					console.log(chalk.bold.green(data))
					console.log(chalk.bold.yellow(`version: ${packageJSON.version}`))
				},
			)
		},
	)
}

module.exports = versionHandler
