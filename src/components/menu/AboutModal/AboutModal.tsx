import {
  EldritchHorrorLink,
  JosipLink,
  ThreadLink,
  PDFLink,
  ArkhamHorrorLink,
  FGGLink,
  WikiLink
} from './component/Links'
import * as S from './AboutModal.styles'
import { useIntl } from 'react-intl'

export function AboutModal() {
  const { formatMessage } = useIntl()

  return (
    <S.AboutModalContainer data-testid="about-modal">
      <S.AboutContent>
        <h2>{formatMessage({ id: 'about_modal_header' })}</h2>
        <p>
          {formatMessage({ id: 'about_modal_p1' })} <EldritchHorrorLink />.{' '}
          {formatMessage({ id: 'about_modal_p2' })} <JosipLink />.{' '}
          {formatMessage({ id: 'about_modal_p3' })}
          <ul>
            <li>
              <ThreadLink />
            </li>
            <li>
              <PDFLink />
            </li>
          </ul>
        </p>
        <p>
          {formatMessage({ id: 'about_modal_p4' })} <ArkhamHorrorLink />.
        </p>
        <p>{formatMessage({ id: 'about_modal_p5' })}</p>
        <h2>{formatMessage({ id: 'about_modal_sub_header_2' })}</h2>
        <p>{formatMessage({ id: 'about_modal_p6' })}</p>
        <h2>{formatMessage({ id: 'about_modal_sub_header_3' })}</h2>
        <p>{formatMessage({ id: 'about_modal_p7' })}</p>
        <h2>{formatMessage({ id: 'about_modal_sub_header_4' })}</h2>
        <p>
          {formatMessage({ id: 'about_modal_p8' })}
          <FGGLink />. {formatMessage({ id: 'about_modal_p9' })}
          <WikiLink />.
        </p>
      </S.AboutContent>
    </S.AboutModalContainer>
  )
}
