import { loadingState } from '@stores/index'
import React from 'react'
import ReactLoading from 'react-loading'
import { useRecoilValue } from 'recoil'

const Loading = () => {
    const isLoading = useRecoilValue(loadingState)

    return (
        <>
            {isLoading ? (
                <div className="loading-container">
                    <ReactLoading type="bubbles" color="#000" height={100} width={100} />
                </div>
            ) : null}
        </>
    )
}

export default Loading
