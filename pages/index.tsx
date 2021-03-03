import React from 'react'
import dynamic from 'next/dynamic'
import { mostPopular } from '@services/index'
import { IndexType } from '@interfaces/index'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { loadingSelector } from '@stores/index'

const IndexApp = dynamic(() => import('@features/IndexPage'))

const IndexPage: React.FC<IndexType> = ({ resp }: IndexType) => {
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
    return <IndexApp resp={resp} />
}

export default IndexPage

export async function getServerSideProps({ query }: any) {
    const { filter_date } = query
    const resp = await mostPopular(filter_date)
    return {
        props: { resp }
    }
}
