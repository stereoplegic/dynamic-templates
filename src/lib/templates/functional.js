module.exports = ({ name, wrapper, packages = {}, functionMethods = [] }) => {
	const packagesArray = []

	for (const key in packages) {
		if (packages[key].isNamed) {
			packagesArray.push(`import { ${packages[key].imports} } from '${key}'\n`)
		} else {
			packagesArray.push(`import ${packages[key].imports} from '${key}'\n`)
		}
	}

	return `import React${
		functionMethods.length && `, { ${functionMethods.join(', ')}} `
	} from 'react';
// import { } from 'prop-types';
${packagesArray.join('')}

const ${name} = (props) => {
    return (
        <${wrapper || 'section'}>
            {/* add component text here */}
        </${wrapper || 'section'}>
    )
};

${name}.propTypes = {

};

export default ${name};
`
}
