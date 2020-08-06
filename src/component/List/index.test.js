import React from 'react'
import { render } from '@testing-library/react'
import List from './list'

const initialProps = {
    // place intial props for component to render
}

const Component = (props) => render(<List {...props} />)

describe('<List />', () => {
    test('should render without crashing', () => {
        const rendered = Component(initialProps)

        expect(rendered).not.toBeNull()
    })
})
