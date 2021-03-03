import React from 'react'
import dynamic from 'next/dynamic'
import { mostPopular } from '@services/index'
import { IndexType } from '@interfaces/index'

const IndexApp = dynamic(() => import('@features/IndexPage'))

const IndexPage: React.FC<IndexType> = ({ resp }: IndexType) => {
    return <IndexApp resp={resp} />
}

export default IndexPage

export async function getStaticProps() {
    const resp = await mostPopular()
    return {
        props: { resp }
    }
}
