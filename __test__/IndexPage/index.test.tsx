import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import IndexPage from '../../features/IndexPage/index'
import { mostPopular } from '../mock/mostPopularResponse'
import { fullContent } from '../mock/searchResonse'
import { RecoilRoot } from 'recoil'
import { searchStore } from '@stores/index'

test('should renders all components in IndexPage when isSearch = false', () => {
    render(
        <RecoilRoot initializeState={(snap) => snap.set(searchStore, false)}>
            <IndexPage
                searchResponse={fullContent}
                mostPopularResponse={mostPopular}
                search="computer"
            />
        </RecoilRoot>
    )
    expect(screen.getByRole('heading', { name: 'The Most Popular' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Today' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'This week' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'This month' })).toBeInTheDocument()
})

test('should renders search component when isSearch = true', () => {
    render(
        <RecoilRoot initializeState={(snap) => snap.set(searchStore, true)}>
            <IndexPage
                searchResponse={fullContent}
                mostPopularResponse={mostPopular}
                search="computer"
            />
        </RecoilRoot>
    )
    expect(screen.getByRole('search-container')).toBeInTheDocument()
})
