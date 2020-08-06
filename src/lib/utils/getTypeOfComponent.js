const classComponent = require('../templates/classComponent')
const { functional } = require('../templates/functional')

module.exports = ({ type, name, wrapper, packages }) => {
	switch (type) {
		case 'class':
			return classComponent({ name, wrapper, packages })
		default:
			return functional({ name, wrapper, packages })
	}
}
