const funcQuestionTemplate = require('./functionalReactComponent')
const classQuestionsTemplate = require('./classQuestionsTemplate')
const htmlQuestionTemplate = require('./htmlQuestionTemplate')
const cssQuestionTemplate = require('./cssQuestionTemplate')
const jsHelpersQuestionTemplate = require('./jsHelpersQuestionTemplate')
const styledComponentListQuestionTemplate = require('./styledComponentQuestionTemplate')

module.exports = (template) => {
	if (template) {
		switch (template) {
			case 'Functional Component (React)':
				return funcQuestionTemplate()
			case 'Class Component (React)':
				return classQuestionsTemplate()
			case 'HTML':
				return htmlQuestionTemplate()
			case 'CSS':
				return cssQuestionTemplate()
			case 'JS Helpers File':
				return jsHelpersQuestionTemplate()
			case 'Styled Component List':
				return styledComponentListQuestionTemplate()
		}
	}
}
