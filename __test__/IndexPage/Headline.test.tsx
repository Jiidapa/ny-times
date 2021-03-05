import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Headline from '../../features/IndexPage/Headline'

test('should renders text header', () => {
    render(<Headline />)
    expect(screen.getByRole('heading', { name: 'The Most Popular' })).toBeInTheDocument()
})
