import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { loadingSelector } from '@stores/index'

const ContentApp = dynamic(() => import('@features/ContentPage/index'))

const ContentPage: React.FC = () => {
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
    return <ContentApp />
}

export default ContentPage
