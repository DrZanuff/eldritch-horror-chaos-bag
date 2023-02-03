export type TokenNames =
  | 'Omen'
  | 'Clue'
  | 'Gate'
  | 'Surge'
  | 'Game Reckoning'
  | 'Player Reckoning'
  | 'Yellow Mythos'
  | 'Green Mythos'
  | 'Blue Mythos'

export interface Token {
  name: TokenNames
  description: string
  icon: string
}
