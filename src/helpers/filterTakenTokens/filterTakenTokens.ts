import { Token, TokenNames } from './filterTakenTokens.types'

export function filterTakenTokens(tokensTaken: Token[], tokenListOptions: TokenNames[]) {
  const leftOutTokens = tokensTaken.filter((token) => !tokenListOptions.includes(token.name))

  const backToBagTokens = tokensTaken.filter((token) => tokenListOptions.includes(token.name))

  return { leftOutTokens, backToBagTokens }
}
