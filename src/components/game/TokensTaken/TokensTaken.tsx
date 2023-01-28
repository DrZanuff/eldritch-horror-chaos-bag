import type { TokensTakenProps } from './TokensTaken.types'
import * as S from './TokensTaken.styles'

export function TokensTaken({ value }: TokensTakenProps) {
  return (
    <S.TokensTakenContainer data-testid="tokens-taken">
      <h1>TokensTaken</h1>
      <h2>{value}</h2>
    </S.TokensTakenContainer>
  )
}
