import axios from 'axios'
import { MostPopularType } from '@interfaces/index'

const { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_API_KEY } = process.env
const mostPopular = async (): Promise<any> => {
    try {
        const URL = `${NEXT_PUBLIC_API_URL}/svc/mostpopular/v2/viewed/1.json?api-key=${NEXT_PUBLIC_API_KEY}`
        const res = await axios.get(URL)
        const responsrData: MostPopularType = res.data
        return responsrData
    } catch (error) {
        console.error(error)
    }
}

export { mostPopular }
