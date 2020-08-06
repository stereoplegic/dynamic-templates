const promptForPathAndName = require('./prompts/promptForPathAndName')
const promptForComponentImports = require('./prompts/promptForComponentImports')
const { successMessage } = require('./messages')

const createMultipleImports = ({ hasImports, packages = {}, type }) => {
	const cachedImports = Object.assign({}, packages)

	if (hasImports) {
		promptForComponentImports({}).then(
			({ package, isNamed, imports, hasMultiple }) => {
				if (hasMultiple) {
					cachedImports[package] = { imports, isNamed }
					return createMultipleImports({
						hasImports: hasMultiple,
						packages: cachedImports,
						type,
					})
				} else {
					cachedImports[package] = { imports, isNamed }

					successMessage('\n** Imports successfully attached to Component **\n')
					return promptForPathAndName({ packages: cachedImports, type })
				}
			},
		)
	} else {
		return promptForPathAndName({ packages, type })
	}
}

module.exports = createMultipleImports
