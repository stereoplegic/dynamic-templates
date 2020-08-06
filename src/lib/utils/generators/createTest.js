const fs = require('fs')
const { errorMessage, fileSuccess } = require('../messages')
const testTemplate = require('../../templates/test')

module.exports = ({ path, name }) => {
	const file = `${path}/${name}/index.test.js`
	try {
		fs.writeFileSync(file, testTemplate({ component: name }))

		if (fs.existsSync(file)) {
			fileSuccess(`${name}.test`)
		}
	} catch (err) {
		if (err) {
			errorMessage('Error creating test file, try again or add manually.')
		}
	}
}
