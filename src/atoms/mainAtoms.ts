import { atom } from 'recoil'

type stateTypes = 'menu' | 'game'

export const gameState = atom<stateTypes>({
  key: 'gameState',
  default: 'menu'
})

import { ReactNode } from 'react'

export type CurrentModalSceneTypeAtom = ReactNode

export interface OpenModalSceneInterfaceAtom {
  openModal: (component: ReactNode) => void
}

export interface CloseModalSceneInterfaceAtom {
  closeModal: () => void
}

export const currentModalSceneAtom = atom<CurrentModalSceneTypeAtom>({
  key: 'currentModalSceneAtom',
  default: null
})

export const openModalSceneAtom = atom<OpenModalSceneInterfaceAtom>({
  key: 'openModalSceneAtom',
  default: {
    openModal: () => {}
  }
})

export const closeModalSceneAtom = atom<CloseModalSceneInterfaceAtom>({
  key: 'closeModalSceneAtom',
  default: {
    closeModal: () => {}
  }
})

import type { AncientOneType } from '../data/ancientOnes/ancientOnes.types'

export const currentAncientOne = atom<AncientOneType>({
  key: 'currentAncientOne',
  default: {
    name: '',
    stages: []
  } as AncientOneType
})

import type { PlayerCountReference } from '../data/playerCountReference/playerCountReference.types'

export const currentPlayersNumber = atom<PlayerCountReference>({
  key: 'currentPlayersNumber',
  default: {
    clues: 0,
    name: '',
    players: 0,
    portals: 0,
    surges: 0
  }
})
