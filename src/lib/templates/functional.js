exports.functional = ({ name, wrapper }) => {
    console.log(wrapper)
    return `import React from 'react';
// import { } from 'prop-types';

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
`};