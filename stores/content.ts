import { atom, selector } from 'recoil'
import { Result } from '@interfaces/index'

const contentStore = atom<Result>({
    key: 'contentStore',
    default: {}
})

const contentSelector = selector<Result>({
    key: 'contentSelector',
    set: ({ set }, newValue) => set(contentStore, newValue),
    get: ({ get }) => get(contentStore)
})

export { contentSelector, contentStore }
