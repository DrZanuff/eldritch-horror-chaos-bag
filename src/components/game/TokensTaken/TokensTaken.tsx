import { v4 } from 'uuid'
import type { TokensTakenProps } from './TokensTaken.types'
import * as S from './TokensTaken.styles'
import { useIntl } from 'react-intl'

export function TokensTaken({ tokens }: TokensTakenProps) {
  const { formatMessage } = useIntl()

  return (
    <S.TokensTakenContainer data-testid="tokens-taken">
      <h3>{formatMessage({ id: 'tokens_taken' })}</h3>
      <S.TokensList>
        {tokens.map((token) => (
          <S.TokenContainer name={token.name} key={v4()}>
            <img src={token.icon} alt={token.name} />
          </S.TokenContainer>
        ))}
      </S.TokensList>
    </S.TokensTakenContainer>
  )
}
