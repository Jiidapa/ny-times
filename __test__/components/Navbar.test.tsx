import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Navbar from '../../components/Navbar'
import { RecoilRoot } from 'recoil'

test('should render navbar', () => {
    render(
        <RecoilRoot>
            <Navbar />
        </RecoilRoot>
    )
    expect(screen.getByRole('logo-icon'))
})
