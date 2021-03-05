import { MostPopularResponse } from '@interfaces/index'
import lodash from 'lodash'

export const groupSection = (value: MostPopularResponse) => {
    const result = lodash.groupBy(value.results, 'section')
    let groupList = []
    for (const [key, value] of Object.entries(result)) {
        const section = {
            name: key,
            value
        }
        groupList.push(section)
    }

    return groupList
}
