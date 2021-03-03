import type { AppProps } from 'next/app'
import '@styles/globals.css'
import { RecoilRoot } from 'recoil'
import Navbar from '@components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <div className="h-screen py-16 px-20">
                <Navbar />
                <Component {...pageProps} />
            </div>
        </RecoilRoot>
    )
}

export default MyApp
