import { atom, selector } from 'recoil'
import { FilterDateRangeType } from '@interfaces/index'

const filterDateRangeStore = atom<FilterDateRangeType>({
    key: 'filterTableStore',
    default: 'Today'
})

const filterRangeSelector = selector<FilterDateRangeType>({
    key: 'filterTableSelector',
    set: ({ set }, newValue) => set(filterDateRangeStore, newValue),
    get: ({ get }) => get(filterDateRangeStore)
})

export { filterRangeSelector, filterDateRangeStore }
