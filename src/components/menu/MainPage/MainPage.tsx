import { useCallback } from 'react'
import { AncientOneSelect } from '../AncientOneSelect'
import { PlayerCountSelect } from '../PlayerCountSelect'
import { About } from '../About'
import { Button } from '@mui/material'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import {
  currentAncientOne,
  currentPlayersNumber,
  gameState,
  tokenBagContext
} from '../../../atoms/mainAtoms'
import { setUpTokenBag } from '../../../helpers/setupTokenBag'
import * as S from './MainPage.styles'

export function MainPage() {
  const chanteToGamePage = useSetRecoilState(gameState)
  const setTokenBag = useSetRecoilState(tokenBagContext)
  const playerCount = useRecoilValue(currentPlayersNumber)
  const ancientOne = useRecoilValue(currentAncientOne)

  const handleStartGame = useCallback(() => {
    const tokensArray = setUpTokenBag(0, playerCount, ancientOne)

    setTokenBag(tokensArray)
    chanteToGamePage('game')
  }, [chanteToGamePage, playerCount, ancientOne])

  const handleContinueGame = useCallback(() => {
    chanteToGamePage('game')
  }, [chanteToGamePage])

  const isSetUpNotReady = ancientOne.name === 'none' || playerCount.name === 'none'

  return (
    <S.MainPageContainer data-testid="menu-page">
      <h1>Eldritch Horror Chaos Bag</h1>
      <AncientOneSelect />
      <PlayerCountSelect />
      <Button variant="contained" disabled={isSetUpNotReady} onClick={handleStartGame}>
        Start New Game
      </Button>
      <Button variant="contained" disabled onClick={handleContinueGame}>
        Continue
      </Button>
      <About />
    </S.MainPageContainer>
  )
}
