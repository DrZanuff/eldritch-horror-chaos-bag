import { PlayerCountReference } from './playerCountReference.types'

const onePlayer: PlayerCountReference = {
  name: 'One',
  id: 'one',
  players: 1,
  portals: 1,
  clues: 1,
  surges: 1
}

const twoPlayers: PlayerCountReference = {
  name: 'Two',
  id: 'two',
  players: 2,
  portals: 1,
  clues: 1,
  surges: 1
}

const threePlayers: PlayerCountReference = {
  name: 'Three',
  id: 'three',
  players: 3,
  portals: 1,
  clues: 2,
  surges: 2
}

const fourPlayers: PlayerCountReference = {
  name: 'Four',
  id: 'four',
  players: 4,
  portals: 1,
  clues: 2,
  surges: 2
}

const fivePlayers: PlayerCountReference = {
  name: 'Five',
  id: 'five',
  players: 5,
  portals: 2,
  clues: 3,
  surges: 2
}

const sixPlayers: PlayerCountReference = {
  name: 'Six',
  id: 'six',
  players: 6,
  portals: 2,
  clues: 3,
  surges: 2
}

const sevenPlayers: PlayerCountReference = {
  name: 'Seven',
  id: 'seven',
  players: 7,
  portals: 2,
  clues: 4,
  surges: 3
}

const eightPlayers: PlayerCountReference = {
  name: 'Eight',
  id: 'eight',
  players: 8,
  portals: 2,
  clues: 4,
  surges: 3
}

export const playerCountReferenceList: PlayerCountReference[] = [
  onePlayer,
  twoPlayers,
  threePlayers,
  fourPlayers,
  fivePlayers,
  sixPlayers,
  sevenPlayers,
  eightPlayers
]
