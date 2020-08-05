const fs = require('fs')
const { getCurrentPath } = require('./getCurrentPath')
const errorHandling = require('./errorHandling')
const htmlTemplate = require('../templates/html')
const recursiveMkdir = require('./recursive-mkdir')

module.exports = ({ path, title, page }) => {
	const strippedPage = page.replace('.html', '')
	const fullPath = `${getCurrentPath()}/${path}`.replace('//', '/')

	try {
		recursiveMkdir(fullPath)

		const component = htmlTemplate({ title })
		const newFile = `${fullPath}/${strippedPage}.html`

		fs.writeFileSync(newFile, component)
	} catch (err) {
		return errorHandling(err)
	}
}
