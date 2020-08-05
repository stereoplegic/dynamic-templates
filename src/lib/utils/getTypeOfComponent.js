const classComponent = require('../templates/classComponent')
const { functional } = require('../templates/functional')

module.exports = ({ type, name, wrapper }) => {
	switch (type) {
		case 'class':
			return classComponent({ name, wrapper })
		default:
			return functional({ name, wrapper })
	}
}
