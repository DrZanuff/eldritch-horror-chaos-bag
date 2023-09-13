import { useIntl } from 'react-intl'
import isEmpty from 'lodash/isEmpty'
import type { TokenDescriptionProps } from './TokenDescription.types'
import * as S from './TokenDescription.styles'

export function TokenDescription({ token }: TokenDescriptionProps) {
  const { formatMessage } = useIntl()

  const descriptionId = token?.descriptionId || 'empty'
  const id = token?.id || 'empty'

  return (
    <S.TokenDescriptionContainer>
      <S.Column>
        <S.TokenTitle>{token && <h2>{formatMessage({ id })}</h2>}</S.TokenTitle>
        <S.TokenImageContainer>
          {token?.icon && <img src={token?.icon} alt={token?.name} />}
        </S.TokenImageContainer>
      </S.Column>
      <S.Column flex={3}>
        <S.DescriptionTitle>{formatMessage({ id: 'description_header' })}</S.DescriptionTitle>
        <S.DescriptionContainer>
          <S.Box>
            {!isEmpty(token) && (
              <>
                <p
                  role="article"
                  dangerouslySetInnerHTML={{ __html: formatMessage({ id: descriptionId }) }}></p>
              </>
            )}
          </S.Box>
        </S.DescriptionContainer>
      </S.Column>
    </S.TokenDescriptionContainer>
  )
}
