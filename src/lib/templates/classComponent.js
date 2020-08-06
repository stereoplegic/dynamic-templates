module.exports = ({ name, wrapper = 'section', packages = {} }) => {
	const packagesArray = []

	for (const key in packages) {
		if (packages[key].isNamed) {
			packagesArray.push(`import { ${packages[key].imports} } from '${key}'\n`)
		} else {
			packagesArray.push(`import ${packages[key].imports} from '${key}'\n`)
		}
	}
	return `import React, { Component } from 'react';
// import { } from 'prop-types';
${packagesArray.join('')}

class ${name} extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    render(props) {
        return (
            <${wrapper}>
            {/* Place component details here */}
            </${wrapper}>
        )
    }
}

${name}.propTypes = {

}

export default ${name};
`
}
