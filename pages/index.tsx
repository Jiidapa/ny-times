import Button from '@components/Button'
import React from 'react'

const IndexPage: React.FC = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-purple-300 font-bold flex-col">
            <div>
                <h1>Hi next.js 🎉</h1>
            </div>
            <Button type="primary">test</Button>
        </div>
    )
}

export default IndexPage
