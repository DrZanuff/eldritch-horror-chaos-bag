import { useCallback, useState } from 'react'
import { Button } from '@mui/material'
import { StageSteps } from '../../StageSteps'
import { TokensTaken } from '../TokensTaken'
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil'
import {
  currentAncientOne,
  gameState,
  currentStage,
  tokenBagContext,
  currentPlayersNumber
} from '../../../atoms/mainAtoms'
import { setUpTokenBag } from '../../../helpers/setupTokenBag'
import { checkForMythosToken } from '../../../helpers/checkForMythosToken'
import type { Token } from './GamePage.types'
import * as S from './GamePage.styles'
import { TokenDescription } from '../TokenDescription'

export function GamePage() {
  const changePageToMenu = useSetRecoilState(gameState)
  const [stage, setStage] = useRecoilState(currentStage)
  const [tokenBag, setTokenBag] = useRecoilState(tokenBagContext)
  const ancientOne = useRecoilValue(currentAncientOne)
  const playerCount = useRecoilValue(currentPlayersNumber)

  const [tokensTaken, setTokensTaken] = useState<Token[]>([])
  const [lastToken, setLastToken] = useState<Token>({} as Token)

  const resetTokenBag = useCallback(() => {
    const newStage = stage + 1
    setStage(() => newStage)
    setTokenBag(() => setUpTokenBag(newStage, playerCount, ancientOne))
    setTokensTaken([])
  }, [stage, playerCount, ancientOne])

  const getToken = useCallback(() => {
    const tempTokenBag = [...tokenBag]
    const tempTokensTake = [...tokensTaken]

    const lasTokenTaken = tempTokenBag.pop()
    lasTokenTaken && tempTokensTake.unshift(lasTokenTaken)

    const { tokensBag: newTokensBag, tokensTaken: newTokensTaken } = checkForMythosToken(
      lasTokenTaken,
      tempTokenBag,
      tempTokensTake
    )

    setTokensTaken(newTokensTaken)
    setTokenBag(newTokensBag)
    lasTokenTaken && setLastToken(lasTokenTaken)
  }, [tokenBag, tokensTaken])

  console.log('DBG:', { tokenBag, lastToken, tokensTaken })

  const handleBackToMenu = useCallback(() => {
    changePageToMenu('menu')
  }, [changePageToMenu])

  return (
    <S.GamePageContainer data-testid="game-page">
      <Button variant="contained" color="error" onClick={handleBackToMenu}>
        Quit
      </Button>
      <S.Row>
        {tokenBag.length > 0 ? (
          <Button variant="contained" onClick={getToken}>
            Get Token
          </Button>
        ) : (
          <>
            <span>Bag is empty.. Advance Omen by one (1)</span>
            <Button variant="contained" onClick={resetTokenBag}>
              Reset Token Bag
            </Button>
          </>
        )}
        {stage < 2 ? (
          <StageSteps stages={[ancientOne.stages[stage]]} />
        ) : (
          <span>Endeless Stage!</span>
        )}
      </S.Row>
      <TokenDescription token={lastToken} />
      <TokensTaken tokens={tokensTaken} />
    </S.GamePageContainer>
  )
}
