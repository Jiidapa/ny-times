import axios from 'axios'
import { MostPopularResponse } from '@interfaces/index'

const { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_API_KEY } = process.env
const most_popular_service = async (value: string): Promise<any> => {
    try {
        const amount = value === 'Today' ? 1 : value === 'This week' ? 7 : 30
        const URL = `${NEXT_PUBLIC_API_URL}/svc/mostpopular/v2/viewed/${amount}.json?api-key=${NEXT_PUBLIC_API_KEY}`
        const res = await axios.get(URL)
        const responsrData: MostPopularResponse = res.data
        return responsrData
    } catch (error) {
        console.error(error)
    }
}

export { most_popular_service }
