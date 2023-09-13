import { Link } from '@mui/material'
import * as S from './About.styles'
import { useIntl } from 'react-intl'

export function About() {
  const { formatMessage } = useIntl()

  return (
    <S.AboutContainer data-testid="about">
      <Link
        underline="always"
        href="https://boardgamegeek.com/thread/2890913/mythos-phase-chaos-bag-variant"
        target="_blank">
        {formatMessage({ id: 'how_to_play' })}
      </Link>
      <span>
        Developed by{' '}
        <Link underline="always" href="https://github.com/DrZanuff" target="_blank">
          DrZanuff
        </Link>
      </span>
    </S.AboutContainer>
  )
}
