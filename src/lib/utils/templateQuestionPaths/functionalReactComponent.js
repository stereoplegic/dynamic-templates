const promptForPathAndName = require('../prompts/promptForPathAndName')
const promptForComponentImports = require('../prompts/promptForComponentImports')
const promptToInitImports = require('../prompts/promptToInitImports')
const { successMessage } = require('../messages')

const createMultipleImports = ({ hasImports, packages }) => {
	const cachedImports = Object.assign({}, packages)

	if (hasImports) {
		promptForComponentImports({}).then(
			({ package, isNamed, imports, hasMultiple }) => {
				if (hasMultiple) {
					cachedImports[package] = { imports, isNamed }
					return createMultipleImports({
						hasImports: hasMultiple,
						packages: cachedImports,
					})
				} else {
					cachedImports[package] = { imports, isNamed }

					successMessage('Imports successfully attached to Component')
					return promptForPathAndName(cachedImports)
				}
			},
		)
	} else {
		return promptForPathAndName()
	}
}

module.exports = () =>
	promptToInitImports().then(({ hasImports = false }) => {
		createMultipleImports({ hasImports, packages: {} })
	})
