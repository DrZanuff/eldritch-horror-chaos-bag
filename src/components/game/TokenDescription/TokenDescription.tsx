import type { TokenDescriptionProps } from './TokenDescription.types'
import * as S from './TokenDescription.styles'

export function TokenDescription({ token }: TokenDescriptionProps) {
  return (
    <S.TokenDescriptionContainer>
      <S.TokenTitle>{token && <h2>{token.name}</h2>}</S.TokenTitle>
      <S.DescriptionContainer>
        <h3>Description</h3>
        <S.Box>
          {token && <p role="article" dangerouslySetInnerHTML={{ __html: token.description }}></p>}
        </S.Box>
      </S.DescriptionContainer>
    </S.TokenDescriptionContainer>
  )
}
