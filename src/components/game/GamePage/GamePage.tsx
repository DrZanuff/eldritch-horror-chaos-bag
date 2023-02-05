import { useCallback, useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { TouchApp, RestartAlt } from '@mui/icons-material'
import { StageSteps } from '../../StageSteps'
import { TokensTaken } from '../TokensTaken'
import { useSetRecoilState, useRecoilState } from 'recoil'
import {
  currentAncientOne,
  gameState,
  currentStage,
  tokenBagContext,
  currentPlayersNumber
} from '../../../atoms/mainAtoms'
import { setUpTokenBag } from '../../../helpers/setupTokenBag'
import { checkForMythosToken } from '../../../helpers/checkForMythosToken'
import { saveGameStatus } from '../../../helpers/saveGameStatus'
import { loadGameStatus } from '../../../helpers/loadGameStatus'
import type { Token } from './GamePage.types'
import * as S from './GamePage.styles'
import { TokenDescription } from '../TokenDescription'

export function GamePage() {
  const changePageToMenu = useSetRecoilState(gameState)
  const [stage, setStage] = useRecoilState(currentStage)
  const [tokenBag, setTokenBag] = useRecoilState(tokenBagContext)
  const [ancientOne, setAncientOne] = useRecoilState(currentAncientOne)
  const [playerCount, setPlayerCount] = useRecoilState(currentPlayersNumber)

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

    setTokensTaken(() => newTokensTaken)
    setTokenBag(() => newTokensBag)
    lasTokenTaken && setLastToken(() => lasTokenTaken)

    saveGameStatus({
      ancientOne,
      lastToken,
      playerCount,
      stage,
      tokenBag,
      tokensTaken
    })
  }, [tokenBag, tokensTaken, ancientOne, playerCount, stage, lastToken])

  useEffect(() => {
    const save = loadGameStatus()
    if (!!save) {
      setStage(save?.stage || 0)
      setAncientOne(save.ancientOne)
      setPlayerCount(save.playerCount)
      save.lastToken && setLastToken(save.lastToken)
      setTokenBag(save.tokenBag)
      setTokensTaken(save.tokensTaken)
    }
  }, [])

  const handleBackToMenu = useCallback(() => {
    changePageToMenu('menu')
  }, [changePageToMenu])

  return (
    <S.GamePageContainer data-testid="game-page">
      <S.TopContainer>
        <Button variant="contained" color="error" onClick={handleBackToMenu}>
          Back to Menu
        </Button>
      </S.TopContainer>
      <S.Row>
        <S.ButtonWraper>
          {tokenBag.length > 0 ? (
            <Button
              variant="contained"
              onClick={getToken}
              size="large"
              endIcon={<TouchApp fontSize={'large'} />}
              sx={{ width: '70%' }}>
              Get Token
            </Button>
          ) : (
            <Button
              variant="contained"
              color="warning"
              onClick={resetTokenBag}
              size="large"
              endIcon={<RestartAlt fontSize={'large'} />}
              sx={{ width: '70%' }}>
              Reset Token Bag
            </Button>
          )}
          <S.MessageDisplayContainer>
            {tokenBag.length === 0 && <span>Bag is empty.. Advance Omen by one (1)</span>}
          </S.MessageDisplayContainer>
        </S.ButtonWraper>
        <S.StageBox>
          {stage < 3 ? (
            <StageSteps
              stages={[ancientOne.stages[stage]]}
              displayCurrentSate
              currentStage={stage}
            />
          ) : (
            <span>Endeless Stage!</span>
          )}
        </S.StageBox>
      </S.Row>
      <TokenDescription token={lastToken} />
      <TokensTaken tokens={tokensTaken} />
    </S.GamePageContainer>
  )
}
