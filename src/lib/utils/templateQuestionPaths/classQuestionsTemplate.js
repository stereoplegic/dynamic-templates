const createMultipleImports = require('../createMultipleImports')
const promptToInitImports = require('../prompts/promptToInitImports')

module.exports = () =>
	promptToInitImports().then(({ hasImports = false }) => {
		createMultipleImports({ hasImports, packages: {}, type: 'class' })
	})
