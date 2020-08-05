const chalk = require('chalk')

module.exports = ({ errno, code, path }) => {
	console.log('\n')
	switch (code) {
		case 'EEXIST':
			console.log(chalk.bold.red('File Already Exists: '), chalk.red(path))
			break
		case 'ENOENT':
			console.log(
				chalk.bold.red('No Such File or Directory Exists: '),
				chalk.red(path),
			)
			break
		default:
			console.log(
				chalk.red(`Unknow Error- Error Number: ${errno}, Code: ${code}`),
			)
	}
	console.log('\n')
}
