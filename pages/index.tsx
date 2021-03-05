import React from 'react'
import dynamic from 'next/dynamic'
import { most_popular_service, search_service } from '@services/index'
import { IndexType } from '@interfaces/index'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { loadingSelector } from '@stores/index'

const IndexApp = dynamic(() => import('@features/IndexPage'))

const IndexPage: React.FC<IndexType> = ({
    searchResponse,
    mostPopularResponse,
    search
}: IndexType) => {
    const router = useRouter()
    const setLoading = useSetRecoilState(loadingSelector)

    useEffect(() => {
        const handleRouteChange = () => {
            setLoading(true)
        }
        router.events.on('routeChangeStart', handleRouteChange)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    useEffect(() => {
        const routeChangeComplete = () => {
            setLoading(false)
        }
        router.events.on('routeChangeComplete', routeChangeComplete)
        return () => {
            router.events.off('routeChangeComplete', routeChangeComplete)
        }
    }, [])
    return (
        <IndexApp
            searchResponse={searchResponse}
            mostPopularResponse={mostPopularResponse}
            search={search}
        />
    )
}

export default IndexPage

export async function getServerSideProps({ query }: any) {
    let searchResponse = {}
    const { filter_date, search } = query
    const mostPopularResponse = await most_popular_service(filter_date)
    const searchValue = search || ''
    console.log('searchValue ', searchValue)
    if (searchValue !== '' && searchValue !== undefined) {
        searchResponse = await search_service(search)
    }

    return {
        props: { searchResponse, mostPopularResponse, search: searchValue }
    }
}
