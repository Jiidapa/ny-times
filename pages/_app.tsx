import type { AppProps } from 'next/app'
import '@styles/globals.css'
import { RecoilRoot } from 'recoil'
import Navbar from '@components/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Head>
                <title>New York Times | Most Popular</title>
                <link rel="icon" type="image/x-icon" href="https://i.ibb.co/h7thckz/favicon.png" />
            </Head>
            <div className="h-screen xs:px-4 xs:py-6 sm:px-4 sm:py-6 py-16 px-20">
                <Navbar />
                <Component {...pageProps} />
            </div>
        </RecoilRoot>
    )
}

export default MyApp
