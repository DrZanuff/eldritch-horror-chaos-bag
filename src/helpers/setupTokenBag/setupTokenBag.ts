import {
  blueToken,
  clueToken,
  gameReckoningToken,
  gateToken,
  greenToken,
  omenToken,
  playerReckoningToken,
  surgeToken,
  yellowToken
} from '../../data/tokens'
import { shuffle } from 'lodash'
import { AncientOneType, PlayerCountReference, Token } from './setupTokenBag.types'

function setBaseTokens(
  playerCount: PlayerCountReference,
  yellow: number,
  green: number,
  blue: number
): Token[] {
  let tokensArray: Token[] = []

  const playerTokens = Array<Token>(playerCount.players).fill(playerReckoningToken)
  const clueTokens = Array<Token>(playerCount.clues).fill(clueToken)
  const gateTokens = Array<Token>(playerCount.portals).fill(gateToken)
  const surgeTokens = Array<Token>(playerCount.surges).fill(surgeToken)
  const yellowTokens = Array<Token>(yellow).fill(yellowToken)
  const greenTokens = Array<Token>(green).fill(greenToken)

  tokensArray = [
    ...playerTokens,
    ...clueTokens,
    ...gateTokens,
    ...surgeTokens,
    ...yellowTokens,
    ...greenTokens
  ]

  if (blue > 0) {
    const blueTokens = Array<Token>(blue).fill(blueToken)
    tokensArray = [...tokensArray, ...blueTokens]
  }

  tokensArray = [...tokensArray, omenToken, gameReckoningToken]

  return shuffle(tokensArray)
}

export function setUpTokenBag(
  stage: number,
  playerCount: PlayerCountReference,
  ancientOne: AncientOneType
): Token[] {
  if (stage > 2) {
    return setBaseTokens(playerCount, 0, 0, 0)
  }

  return setBaseTokens(
    playerCount,
    ancientOne.stages[stage].yellow,
    ancientOne.stages[stage].green,
    ancientOne.stages[stage].blue
  )
}
