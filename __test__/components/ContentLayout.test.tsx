import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import LayoutSection from '../../components/ContentLayout'
import { data } from '../mock/groupPopularData'

test('should renders content layout', () => {
    const { getByText } = render(<LayoutSection name={data.name} value={data.value} />)
    expect(getByText('U.S.')).toBeInTheDocument()
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute(
        'src',
        'https://static01.nyt.com/images/2021/03/04/us/politics/04new-washington-briefing-barnett/merlin_182056404_17fb14d1-410b-4a64-baa2-cd5b1acc46fa-mediumThreeByTwo440.jpg'
    )
    expect(
        getByText(
            'The man who put his feet up on a desk in Pelosi’s office during the Capitol riot throws a tantrum in court.'
        )
    ).toBeInTheDocument()
})
