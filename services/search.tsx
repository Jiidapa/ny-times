import axios from 'axios'
import { SearchResponse } from '@interfaces/index'

const { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_API_KEY } = process.env
const search_service = async (value: string): Promise<any> => {
    try {
        const URL = `${NEXT_PUBLIC_API_URL}/svc/search/v2/articlesearch.json?q=${value}&api-key==${NEXT_PUBLIC_API_KEY}`
        const res = await axios.get(URL)
        const responsrData: SearchResponse = res.data
        return responsrData
    } catch (error) {
        console.error(error)
    }
}

export { search_service }
