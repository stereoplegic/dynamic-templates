const classComponent = require('../templates/classComponent')
const functional = require('../templates/functional')

module.exports = ({
	type,
	name,
	wrapper,
	packages,
	classMethods,
	functionMethods,
}) => {
	switch (type) {
		case 'class':
			return classComponent({ name, wrapper, packages, classMethods })
		default:
			return functional({ name, wrapper, packages, functionMethods })
	}
}
