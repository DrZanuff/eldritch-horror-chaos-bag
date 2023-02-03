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
import { filterTakenTokens } from '../../../helpers/filterTakenTokens'
import type { Token } from './GamePage.types'
import * as S from './GamePage.styles'
import { shuffle } from 'lodash'

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

  const checkMythos = useCallback(() => {
    if (lastToken?.name === 'Yellow Mythos') {
      const { backToBagTokens, leftOutTokens } = filterTakenTokens(tokensTaken, [
        'Omen',
        'Player Reckoning',
        'Game Reckoning',
        'Gate'
      ])
      setTokensTaken(leftOutTokens)
      setTokenBag((prev) => shuffle([...prev, ...backToBagTokens]))
      return
    }

    if (lastToken?.name === 'Green Mythos') {
      const { backToBagTokens, leftOutTokens } = filterTakenTokens(tokensTaken, [
        'Omen',
        'Surge',
        'Clue'
      ])

      setTokensTaken(leftOutTokens)
      setTokenBag((prev) => shuffle([...prev, ...backToBagTokens]))
      return
    }

    if (lastToken?.name === 'Blue Mythos') {
      const { backToBagTokens, leftOutTokens } = filterTakenTokens(tokensTaken, ['Clue'])

      setTokensTaken(leftOutTokens)
      setTokenBag((prev) => shuffle([...prev, ...backToBagTokens]))
    }
  }, [lastToken])

  const getToken = useCallback(() => {
    const newTokenBag = [...tokenBag]

    const tokenTaken = newTokenBag.pop()

    setTokensTaken((prev) => {
      if (tokenTaken) {
        prev.unshift(tokenTaken)
      }

      return prev
    })

    setTokenBag(() => newTokenBag)
    setLastToken(tokenTaken)
    checkMythos()
  }, [tokenBag, tokensTaken, checkMythos])

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
        <StageSteps stages={[ancientOne.stages[stage]]} />
      </S.Row>
      <div>{lastToken && <h2>{lastToken.name}</h2>}</div>
      <h3>Description</h3>
      <div>
        {lastToken && (
          <p role="article" dangerouslySetInnerHTML={{ __html: lastToken.description }}></p>
        )}
      </div>
      <TokensTaken />
    </S.GamePageContainer>
  )
}
