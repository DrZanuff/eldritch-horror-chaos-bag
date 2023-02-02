import { useCallback, useState } from 'react'
import { Button } from '@mui/material'
import { StageSteps } from '../../StageSteps'
import { TokensTaken } from '../TokensTaken'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { currentAncientOne, gameState, currentStage } from '../../../atoms/mainAtoms'
import type { GamePageProps } from './GamePage.types'
import * as S from './GamePage.styles'

export function GamePage({ value }: GamePageProps) {
  const changePageToMenu = useSetRecoilState(gameState)
  const stage = useRecoilValue(currentStage)
  const ancientOne = useRecoilValue(currentAncientOne)

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
        <StageSteps stages={[ancientOne.stages[stage]]} />
      </S.Row>
      <h2>Description</h2>
      <p role="article">{'currentTokenDescription'}</p>
      <TokensTaken />
    </S.GamePageContainer>
  )
}
