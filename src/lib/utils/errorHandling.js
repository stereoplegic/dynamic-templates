const chalk = require('chalk')
const { errorMessage, errorPath } = require('./messages')

module.exports = (error) => {
	const { errno, code, path } = error
	switch (code) {
		case 'EEXIST':
			errorMessage(`File Already Exists: ${code}`)
			errorPath(path)
			break
		case 'ENOENT':
			errorMessage(`No Such File or Directory Exists: ${code}`)
			errorPath(path)
			break
		default:
			console.log(error)
			errorMessage(`Unknow Error- Error Number: ${errno}, Code: ${code}`)
	}
}
