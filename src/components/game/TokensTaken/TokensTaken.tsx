import { v4 } from 'uuid'
import type { TokensTakenProps } from './TokensTaken.types'
import * as S from './TokensTaken.styles'

export function TokensTaken({ tokens }: TokensTakenProps) {
  return (
    <S.TokensTakenContainer data-testid="tokens-taken">
      <h3>TokensTaken</h3>
      <S.TokensList>
        {tokens.map((token) => (
          <S.TokenContainer name={token.name} key={v4()}></S.TokenContainer>
        ))}
      </S.TokensList>
    </S.TokensTakenContainer>
  )
}
