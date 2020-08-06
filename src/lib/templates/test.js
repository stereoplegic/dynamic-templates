module.exports = ({ component }) => {
	return `import React from 'react'
import { render } from '@testing-library/react'
import ${component} from './${component.toLowerCase()}'

const initialProps = {
    // place intial props for component to render
}

const Component = (props) => render(<${component} {...props} />)

describe('<${component} />', () => {
    test('should render without crashing', () => {
        const rendered = Component(initialProps)

        expect(rendered).not.toBeNull()
    })
})
`
}
