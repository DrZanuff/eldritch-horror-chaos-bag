import type { TokenDescriptionProps } from './TokenDescription.types'
import * as S from './TokenDescription.styles'

export function TokenDescription({ token }: TokenDescriptionProps) {
  return (
    <S.TokenDescriptionContainer>
      <S.Column>
        <S.TokenTitle>{token && <h2>{token?.name?.toUpperCase()}</h2>}</S.TokenTitle>
        <S.TokenImageContainer>
          {token?.icon && <img src={token?.icon} alt={token?.name} />}
        </S.TokenImageContainer>
      </S.Column>
      <S.Column flex={3}>
        <S.DescriptionTitle>DESCRIPTION</S.DescriptionTitle>
        <S.DescriptionContainer>
          <S.Box>
            {token && (
              <p role="article" dangerouslySetInnerHTML={{ __html: token.description }}></p>
            )}
          </S.Box>
        </S.DescriptionContainer>
      </S.Column>
    </S.TokenDescriptionContainer>
  )
}
