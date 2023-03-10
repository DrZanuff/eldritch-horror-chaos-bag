import { Link } from '@mui/material'
import * as S from './About.styles'

export function About() {
  return (
    <S.AboutContainer data-testid="about">
      <Link
        underline="always"
        href="https://boardgamegeek.com/thread/2890913/mythos-phase-chaos-bag-variant"
        target="_blank">
        How to play
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
