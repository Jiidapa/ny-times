import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Loading from '../../components/Loading'
import { RecoilRoot } from 'recoil'
import { loadingState } from '../../stores'

test('should render loading when isLoading = true', () => {
    render(
        <RecoilRoot initializeState={(snap) => snap.set(loadingState, true)}>
            <Loading />
        </RecoilRoot>
    )
    expect(screen.getByRole('loading-container')).toBeInTheDocument()
})

test('should hide loading when isLoading = false', () => {
    render(
        <RecoilRoot initializeState={(snap) => snap.set(loadingState, false)}>
            <Loading />
        </RecoilRoot>
    )
    expect(screen.queryByRole('loading-container')).not.toBeInTheDocument()
})
