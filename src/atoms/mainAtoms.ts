import { atom } from 'recoil'

type stateTypes = 'menu' | 'game'

export const gameState = atom<stateTypes>({
  key: 'gameState',
  default: 'menu'
})
