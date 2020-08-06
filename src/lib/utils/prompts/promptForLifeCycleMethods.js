const inquirer = require('inquirer')
const { createComponent } = require('../generators/createComponent')
const { getCurrentPath } = require('../getCurrentPath')
const { successMessage } = require('../messages')

module.exports = ({ path, name, packages, type, wrapper }) => {
	inquirer
		.prompt([
			{
				type: 'confirm',
				name: 'lifeCycleMethods',
				message: 'Do you want to add life cycle methods?\n',
			},
			{
				type: 'checkbox',
				name: 'classMethods',
				choices: [
					'ComponentDidMount',
					'GetDerivedStateFromProps',
					'ComponentDidUpdate',
					'ShouldComponentUpdate',
					'ComponentWillUnmount',
				],
				when: ({ lifeCycleMethods }) => type === 'class' && lifeCycleMethods,
			},
			{
				type: 'checkbox',
				name: 'functionMethods',
				choices: [
					'useState',
					'useEffect',
					'useContext',
					'useReducer',
					'useMemo',
					'useRef',
				],
				when: ({ lifeCycleMethods }) =>
					type === 'functional' && lifeCycleMethods,
			},
		])
		.then(({ lifeCycleMethods, classMethods = [], functionMethods = [] }) => {
			successMessage(
				`\n** Methods successfully attached to ${name} component **\n`,
			)
			createComponent({
				path: `${getCurrentPath()}/${path}`,
				name,
				type,
				wrapper,
				packages,
				classMethods,
				functionMethods,
			})
		})
}
