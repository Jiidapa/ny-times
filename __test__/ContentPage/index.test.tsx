import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContentPage from '../../features/ContentPage'
import { RecoilRoot } from 'recoil'
import { contentStore } from '../../stores/index'
import { contentFromPopularMockData, contentFromSearch } from '../mock/contentData'

test('should renders content details from most popular data', () => {
    const { getByText } = render(
        <RecoilRoot initializeState={(snap) => snap.set(contentStore, contentFromPopularMockData)}>
            <ContentPage />
        </RecoilRoot>
    )
    expect(getByText('U.S.')).toBeInTheDocument()
    expect(
        getByText(
            'The man who put his feet up on a desk in Pelosi’s office during the Capitol riot throws a tantrum in court.'
        )
    ).toBeInTheDocument()
    expect(
        getByText(
            'Richard Barnett yelled at the judge and his own lawyers that it wasn’t “fair” that he was still in jail weeks after his arrest.'
        )
    ).toBeInTheDocument()

    const image = screen.getByRole('content-banner-image')
    expect(image).toHaveAttribute(
        'src',
        'https://static01.nyt.com/images/2021/03/04/us/politics/04new-washington-briefing-barnett/merlin_182056404_17fb14d1-410b-4a64-baa2-cd5b1acc46fa-mediumThreeByTwo440.jpg'
    )

    expect(screen.getByRole('button', { name: 'Read more' })).toBeInTheDocument()
})

test('should renders content details from search data', () => {
    const { getByText } = render(
        <RecoilRoot initializeState={(snap) => snap.set(contentStore, contentFromSearch)}>
            <ContentPage />
        </RecoilRoot>
    )
    expect(getByText('Smarter Living')).toBeInTheDocument()
    expect(getByText('How to Manage Your Privacy While Gaming')).toBeInTheDocument()
    expect(
        getByText(
            'Like most always-connected devices, the Sony PlayStation 5, Microsoft Xbox Series X and S, and Nintendo Switch gather and share data with advertising partners.'
        )
    ).toBeInTheDocument()

    const image = screen.getByRole('content-banner-image')
    expect(image).toHaveAttribute(
        'src',
        'https://static01.nyt.com/images/2021/03/03/smarter-living/wirecutter/03sl-gameconsole-slide-TVKL/03sl-gameconsole-slide-TVKL-articleLarge-v2.jpg'
    )

    expect(screen.getByRole('button', { name: 'Read more' })).toBeInTheDocument()
})
