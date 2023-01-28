import { useCallback } from 'react'
import { Button } from '@mui/material'
import { Stages } from '../../Stages'
import { TokensTaken } from '../TokensTaken'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
import { gameState } from '../../../atoms/mainAtoms'
import type { GamePageProps } from './GamePage.types'
import * as S from './GamePage.styles'

export function GamePage({ value }: GamePageProps) {
  const changePageToMenu = useSetRecoilState(gameState)

  const handleBackToMenu = useCallback(() => {
    changePageToMenu('menu')
  }, [changePageToMenu])

  return (
    <S.GamePageContainer data-testid="game-page">
      <Button variant="contained" color="error" onClick={handleBackToMenu}>
        Quit
      </Button>
      <S.Row>
        <Button variant="contained">Get Token</Button>
        <Stages />
      </S.Row>
      <h2>Description</h2>
      <p role="article">{'currentTokenDescription'}</p>
      <TokensTaken />
    </S.GamePageContainer>
  )
}
