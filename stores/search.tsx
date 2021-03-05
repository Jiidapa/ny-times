import { atom, selector } from 'recoil'

export const searchStore = atom<boolean>({
    key: 'searchStore',
    default: false
})

export const searchSelector = selector<boolean>({
    key: 'searchSelector',
    set: ({ set }, newValue) => set(searchStore, newValue),
    get: ({ get }) => get(searchStore)
})
