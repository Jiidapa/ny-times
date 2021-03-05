import dayjs from 'dayjs'
import dayOfYear from 'dayjs/plugin/dayOfYear'
dayjs.extend(dayOfYear)

const calculateDayAmountOfTheYear = () => {
    const day = 1
    const month = 11 // months are 0-based when using the object constructor
    const year = dayjs().year()
    const concatDate = dayjs(`${year}-${month}-${day}`)
    const amountDays = dayjs(concatDate).dayOfYear()
    return amountDays
}

export const calculateDay = (date: string) => {
    const now = dayjs()
    const diffMinute = now.diff(date, 'minutes')
    const diffHour = now.diff(date, 'hours')
    const diffDay = now.diff(date, 'days')
    const diffWeek = now.diff(date, 'weeks')
    const diffMonth = now.diff(date, 'months')
    const diffYear = now.diff(date, 'years')
    const thisMonth = now.daysInMonth()
    const dayAmount = calculateDayAmountOfTheYear()

    let result = ''
    if (diffDay > dayAmount) {
        result = `${diffYear} ${diffYear === 1 ? 'year ago' : 'years ago'}`
    } else if (diffDay > thisMonth) {
        result = `${diffMonth} ${diffMonth === 1 ? 'month ago' : 'months ago'}`
    } else if (diffDay > 7) {
        result = `${diffWeek} ${diffWeek === 1 ? 'week ago' : 'weeks ago'}`
    } else if (diffDay !== 0) {
        result = `${diffDay} ${diffDay === 1 ? 'day ago' : 'days ago'}`
    } else if (diffMinute < 60) {
        result = `${diffMinute} ${diffMinute === 1 ? 'minute ago' : 'minutes ago'}`
    } else if (diffHour < 24) {
        result = `${diffHour} ${diffHour === 1 ? 'hour ago' : 'hours ago'}`
    }

    return result
}
