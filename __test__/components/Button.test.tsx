import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from '../../components/Button'

test('should render button type text', () => {
    render(<Button type="text">Read more</Button>)
    expect(screen.getByRole('button', { name: 'Read more' })).toHaveClass('bg-none px-0')
})

test('should render button type primary', () => {
    render(<Button type="primary">Read more</Button>)
    expect(screen.getByRole('button', { name: 'Read more' })).toHaveClass(
        'xs:text-xxs sm:text-xxs rounded-0 bg-black text-white px-8 md:py-4 py-2 font-bold'
    )
})

test('should render button type outline', () => {
    render(<Button type="outline">Read more</Button>)
    expect(screen.getByRole('button', { name: 'Read more' })).toHaveClass(
        'xs:text-xxs sm:text-xxs btn bg-white rounded-default border-2 border-black-80 text-black-80'
    )
})

test('should render button type rounded', () => {
    render(<Button type="rounded">Read more</Button>)
    expect(screen.getByRole('button', { name: 'Read more' })).toHaveClass(
        'xs:text-xxs sm:text-xxs btn rounded-default bg-black-80 text-white'
    )
})
