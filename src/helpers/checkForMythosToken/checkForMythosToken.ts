import { filterTakenTokens } from '../filterTakenTokens'
import { shuffle } from 'lodash'
import { Token } from './checkForMythosToken.types'

export function checkForMythosToken(
  lastToken: Token | undefined,
  tokensBag: Token[],
  tokensTaken: Token[]
) {
  console.log('DBG: lastToken', { lastToken })
  if (!lastToken) {
    return { tokensBag, tokensTaken }
  }

  if (lastToken?.name === 'Yellow Mythos') {
    const { backToBagTokens, leftOutTokens } = filterTakenTokens(tokensTaken, [
      'Omen',
      'Player Reckoning',
      'Game Reckoning',
      'Gate'
    ])

    const shuffledTokenBag = shuffle([...tokensBag, ...backToBagTokens])
    return { tokensBag: shuffledTokenBag, tokensTaken: leftOutTokens }
  }

  if (lastToken?.name === 'Green Mythos') {
    const { backToBagTokens, leftOutTokens } = filterTakenTokens(tokensTaken, [
      'Omen',
      'Surge',
      'Clue'
    ])

    const shuffledTokenBag = shuffle([...tokensBag, ...backToBagTokens])
    return { tokensBag: shuffledTokenBag, tokensTaken: leftOutTokens }
  }

  if (lastToken?.name === 'Blue Mythos') {
    const { backToBagTokens, leftOutTokens } = filterTakenTokens(tokensTaken, ['Clue'])

    const shuffledTokenBag = shuffle([...tokensBag, ...backToBagTokens])
    return { tokensBag: shuffledTokenBag, tokensTaken: leftOutTokens }
  }

  return { tokensBag, tokensTaken }
}
