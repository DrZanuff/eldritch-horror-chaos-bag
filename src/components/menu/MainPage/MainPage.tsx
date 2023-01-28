import { useCallback } from 'react'
import { AncientOneSelect } from '../AncientOneSelect'
import { PlayerCountSelect } from '../PlayerCountSelect'
import { About } from '../About'
import { Button } from '@mui/material'
import { useSetRecoilState } from 'recoil'
import { gameState } from '../../../atoms/mainAtoms'
import type { MainPageProps } from './MainPage.types'
import * as S from './MainPage.styles'

export function MainPage({ value }: MainPageProps) {
  const chanteToGamePage = useSetRecoilState(gameState)

  const handleStartGame = useCallback(() => {
    chanteToGamePage('game')
  }, [chanteToGamePage])

  const handleContinueGame = useCallback(() => {
    chanteToGamePage('game')
  }, [chanteToGamePage])

  return (
    <S.MainPageContainer data-testid="menu-page">
      <h1>Eldritch Horror Chaos Bag</h1>
      <AncientOneSelect />
      <PlayerCountSelect />
      <Button variant="contained" onClick={handleStartGame}>
        Start New Game
      </Button>
      <Button variant="contained" disabled onClick={handleContinueGame}>
        Continue
      </Button>
      <About />
    </S.MainPageContainer>
  )
}
