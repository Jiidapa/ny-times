import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Search from '../../components/Search'
import { RecoilRoot } from 'recoil'
import { searchStore } from '../../stores'

test('should render close icon', () => {
    const { getByTestId, queryByTestId } = render(
        <RecoilRoot initializeState={(snap) => snap.set(searchStore, true)}>
            <Search />
        </RecoilRoot>
    )
    expect(getByTestId('close-container')).toBeInTheDocument()
    expect(queryByTestId('search-container')).not.toBeInTheDocument()
})

test('should render search icon', () => {
    const { getByTestId, queryByTestId } = render(
        <RecoilRoot initializeState={(snap) => snap.set(searchStore, false)}>
            <Search />
        </RecoilRoot>
    )
    expect(getByTestId('search-container')).toBeInTheDocument()
    expect(queryByTestId('close-container')).not.toBeInTheDocument()
})
