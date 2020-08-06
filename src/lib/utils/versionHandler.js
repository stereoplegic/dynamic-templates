const chalk = require('chalk')
const figlet = require('figlet')

const versionHandler = () => {
	const packageJSON = require('../../../package.json')

	figlet(
		`${packageJSON.name}`,
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
}

module.exports = versionHandler
