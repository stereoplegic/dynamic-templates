const createHtmlFile = require('../generators/createHtmlFile')
const htmlQuestionQuery = require('../prompts/promptForHtmlData')

module.exports = () =>
	htmlQuestionQuery({}).then(({ title, multiplePages, page, path }) => {
		if (multiplePages) {
			createHtmlFile({ title, page, path })
			return htmlQuestionQuery({ title, multiplePages })
		} else return createHtmlFile({ title, page, path })
	})
