import { atom, selector } from 'recoil'
import { Content } from '@interfaces/index'

const contentStore = atom<Content>({
    key: 'contentStore',
    default: {}
})

const contentSelector = selector<Content>({
    key: 'contentSelector',
    set: ({ set }, newValue) => set(contentStore, newValue),
    get: ({ get }) => get(contentStore)
})

export { contentSelector, contentStore }
