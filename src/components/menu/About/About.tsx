// import { Button } from '@mui/material'
// import { AboutModal } from '../AboutModal'
// import { openModalSceneAtom } from '../../../atoms/mainAtoms'
// import { useRecoilValue } from 'recoil'
import * as S from './About.styles'

export function About() {
  // const { openModal } = useRecoilValue(openModalSceneAtom)

  return (
    <S.AboutContainer data-testid="about">
      <a
        href="https://boardgamegeek.com/thread/2890913/mythos-phase-chaos-bag-variant"
        target="_blank">
        How to play
      </a>
      {/* <Button variant="contained" color="warning" onClick={() => openModal(<AboutModal />)}>
        About
      </Button> */}
      <span>
        Developed by{' '}
        <a href="https://github.com/DrZanuff" target="_blank">
          DrZanuff
        </a>
      </span>
    </S.AboutContainer>
  )
}
