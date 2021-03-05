import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import FilterByDateRange from '../../features/IndexPage/FilterByDateRange'

test('should renders today filter button', () => {
    render(<FilterByDateRange />)
    expect(screen.getByRole('button', { name: 'Today' })).toBeInTheDocument()
})

test('should renders this week filter button', () => {
    render(<FilterByDateRange />)
    expect(screen.getByRole('button', { name: 'This week' })).toBeInTheDocument()
})

test('should renders this month filter button', () => {
    render(<FilterByDateRange />)
    expect(screen.getByRole('button', { name: 'This month' })).toBeInTheDocument()
})
