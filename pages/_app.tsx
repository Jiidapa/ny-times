import type { AppProps } from 'next/app'
import '@styles/globals.css'
import { RecoilRoot } from 'recoil'
import Navbar from '@components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <div className="h-screen xs:px-4 xs:py-6 sm:px-4 sm:py-6 py-16 px-20">
                <Navbar />
                <Component {...pageProps} />
            </div>
        </RecoilRoot>
    )
}

export default MyApp
