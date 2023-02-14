import { useCallback, useEffect, useState } from 'react'
import { AncientOneSelect } from '../AncientOneSelect'
import { About } from '../About'
import { Button } from '@mui/material'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import {
  currentAncientOne,
  currentPlayersNumber,
  currentStage,
  gameState,
  openModalSceneAtom,
  tokenBagContext
} from '../../../atoms/mainAtoms'
import { setUpTokenBag } from '../../../helpers/setupTokenBag'
import { loadGameStatus } from '../../../helpers/loadGameStatus'
import { Confirmation } from '../Confirmation'
import { AboutModal } from '../AboutModal'
import * as S from './MainPage.styles'
import { ModalComponent } from '../../_modal/ModalComponent'

export function MainPage() {
  const chanteToGamePage = useSetRecoilState(gameState)
  const setTokenBag = useSetRecoilState(tokenBagContext)
  const playerCount = useRecoilValue(currentPlayersNumber)
  const ancientOne = useRecoilValue(currentAncientOne)
  const setStage = useSetRecoilState(currentStage)
  const { openModal } = useRecoilValue(openModalSceneAtom)

  const [isContinueDisabled, setIsContinueDisabled] = useState(true)
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false)

  const handleCloseConfirmationModal = useCallback(() => {
    setDisplayConfirmationModal(false)
  }, [])

  const handleStartGameButton = useCallback(() => {
    setDisplayConfirmationModal(true)
  }, [])

  const handleStartGame = useCallback(() => {
    const tokensArray = setUpTokenBag(0, playerCount, ancientOne)
    setTokenBag(tokensArray)
    setStage(0)
    localStorage.clear()

    chanteToGamePage('game')
  }, [chanteToGamePage, playerCount, ancientOne])

  const handleContinueGame = useCallback(() => {
    chanteToGamePage('game')
  }, [chanteToGamePage])

  useEffect(() => {
    const save = loadGameStatus()
    console.log('DBG: MainPage', { save })
    if (!!save) {
      setIsContinueDisabled(false)
    }
  }, [])

  const isSetUpNotReady = ancientOne.name === 'none' || playerCount.name === 'none'

  return (
    <>
      <S.MainPageContainer data-testid="menu-page">
        <S.TitleContainer>
          <h1>Eldritch Horror</h1>
          <h1>Chaos Bag</h1>
        </S.TitleContainer>
        <AncientOneSelect />
        <S.ButtonsContainer>
          <Button
            variant="contained"
            color="error"
            disabled={isSetUpNotReady}
            onClick={handleStartGameButton}>
            Start New Game
          </Button>
          <Button
            variant="contained"
            color="secondary"
            disabled={isContinueDisabled}
            onClick={handleContinueGame}>
            Continue
          </Button>

          <Button
            variant="contained"
            color="warning"
            sx={{
              width: '100px',
              margin: '0 auto'
            }}
            onClick={() => openModal(<AboutModal />)}>
            About
          </Button>
        </S.ButtonsContainer>
        <About />
      </S.MainPageContainer>
      {displayConfirmationModal && (
        <ModalComponent
          component={
            <Confirmation
              handleClose={handleCloseConfirmationModal}
              handleConfirm={handleStartGame}
            />
          }
          handleCloseModalComponent={handleCloseConfirmationModal}
          width={'350px'}
          height={'180px'}
          applySizeForMobile
        />
      )}
    </>
  )
}
