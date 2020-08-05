module.exports = ({name}) => `import React, { Component } from 'react';
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
            <section>
            {/* Place component details here */}
            </section>
        )
    }
}

${name}.propTypes = {

}

export default ${name};
`;