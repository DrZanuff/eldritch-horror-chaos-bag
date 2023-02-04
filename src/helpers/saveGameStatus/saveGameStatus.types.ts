import type { Token } from '../../data/tokens/token.types'
import type { AncientOneType } from '../../data/ancientOnes/ancientOnes.types'
import type { PlayerCountReference } from '../../data/playerCountReference/playerCountReference.types'

export interface SaveGame {
  lastToken?: Token
  tokenBag: Token[]
  tokensTaken: Token[]
  ancientOne: AncientOneType
  playerCount: PlayerCountReference
  stage: number
}
