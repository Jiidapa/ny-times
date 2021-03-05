import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SearchContainer from '../../features/IndexPage/Search'
import { withOutImage, fullContent } from '../mock/searchResonse'

test('should include search icon', () => {
    render(<SearchContainer />)
    expect(screen.getByRole('search-icon')).toBeInTheDocument()
})

test('should render input field', () => {
    const rendered = render(<SearchContainer />)
    const input = rendered.getByPlaceholderText('Type something')
    expect(input).toBeInTheDocument()
})

test('should render section of article', () => {
    const { getByText } = render(<SearchContainer search="computer" searchResponse={fullContent} />)
    expect(getByText(/Smarter Living/i)).toBeInTheDocument()
})

test('should render abstract of article', () => {
    const { getAllByText } = render(
        <SearchContainer search="computer" searchResponse={fullContent} />
    )
    expect(
        getAllByText(
            /Like most always-connected devices, the Sony PlayStation 5, Microsoft Xbox Series X and S, and Nintendo Switch gather and share data with advertising partners./i
        )
    )
})

test('should render snippet of article', () => {
    const { getAllByText } = render(
        <SearchContainer search="computer" searchResponse={fullContent} />
    )
    expect(
        getAllByText(
            /Like most always-connected devices, the Sony PlayStation 5, Microsoft Xbox Series X and S, and Nintendo Switch gather and share data with advertising partners./i
        )
    )
})

test('should render image of article', () => {
    render(<SearchContainer search="computer" searchResponse={fullContent} />)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute(
        'src',
        'https://static01.nyt.com/images/2021/03/03/smarter-living/wirecutter/03sl-gameconsole-slide-TVKL/03sl-gameconsole-slide-TVKL-articleLarge-v2.jpg'
    )
})

test('should render default image when the results of API do not have image with response', () => {
    render(<SearchContainer search="computer" searchResponse={withOutImage} />)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', '/assets/icons/empty-image.png')
})
