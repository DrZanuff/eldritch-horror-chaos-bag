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

type TokenDescriptionIds =
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

type TokenIds =
  | 'omen'
  | 'clue'
  | 'gate'
  | 'surge'
  | 'game_reckoning'
  | 'player_reckoning'
  | 'yellow_mythos'
  | 'green_mythos'
  | 'blue_mythos'
  | 'empty_bag'

export interface Token {
  name: TokenNames
  icon: string
  descriptionId: TokenDescriptionIds
  id: TokenIds
}
