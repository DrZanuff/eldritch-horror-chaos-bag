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
  | 'Empty Bag'

type TokenIds =
  | 'omen_description'
  | 'clue_description'
  | 'gate_description'
  | 'surge_description'
  | 'game_reckoning_description'
  | 'player_reckoning_description'
  | 'yellow_mythos_description'
  | 'green_mythos_description'
  | 'blue_mythos_description'
  | 'empty_bag_description'
export interface Token {
  name: TokenNames
  icon: string
  id: TokenIds
}
