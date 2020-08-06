const chalk = require('chalk')

exports.componentSuccess = (path) => {
	console.log(chalk.bold.green('Successfuly Created Component Bundle'))
	console.log(chalk.bold.green('Path: '), chalk.green(path))
}

exports.fileSuccess = (name) =>
	console.log(chalk.yellow(`${name} file successfully created.`))

exports.successMessage = (message) => console.log(chalk.green(message))

exports.errorPath = (path) => console.log(chalk.red(path))

exports.errorMessage = (error) =>
	console.log(chalk.red.inverse('Error: '), chalk.bold.red(error))
