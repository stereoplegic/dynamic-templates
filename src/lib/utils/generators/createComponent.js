const fs = require('fs')
const getTypeOfComponent = require('../getTypeOfComponent')
const errorHandling = require('../errorHandling')
const { fileSuccess, componentSuccess } = require('../messages')
const recursiveMkdir = require('../recursive-mkdir')
const createTest = require('./createTest')

exports.createComponent = ({
	path,
	name,
	type,
	wrapper,
	packages,
	classMethods,
	functionMethods,
}) => {
	const pathToCreate = `${path}/${name}`

	try {
		recursiveMkdir(pathToCreate)

		const component = getTypeOfComponent({
			name,
			type,
			wrapper,
			packages,
			classMethods,
			functionMethods,
		})
		const newFile = `${path}/${name}/index.jsx`

		fs.writeFileSync(newFile, component)

		if (fs.existsSync(newFile)) {
			fileSuccess(name)
		}

		createTest({ path, name })

		return componentSuccess(path)
	} catch (err) {
		return errorHandling(err)
	}
}
