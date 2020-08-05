module.exports = ({
	name,
	wrapper = 'section',
}) => `import React, { Component } from 'react';
// import { } from 'prop-types';

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
