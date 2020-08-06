import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'

const initialProps = {
    // place intial props for component to render
}

const Component = (props) => render(<Button {...props} />)

describe('<Button />', () => {
    test('should render without crashing', () => {
        const rendered = Component(initialProps)

        expect(rendered).not.toBeNull()
    })
})
