exports.functional = ({ name }) => `import React from 'react';
// import { } from 'prop-types';

const ${name} = (props) => {
    return (
        <section>
            {/* add component text here */}
        </section>
    )
};

${name}.propTypes = {

};

export default ${name};
`;