import { atom, selector } from 'recoil'

export const loadingState = atom<boolean>({
  key: 'loadingState',
  default: false
})

export const loadingSelector = selector<boolean>({
  key: 'loadingSelector',
  set: ({ set }, newValue) => set(loadingState, newValue),
  get: ({ get }) => get(loadingState)
})
