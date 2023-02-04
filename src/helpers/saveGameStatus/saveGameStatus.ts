import { SaveGame } from './saveGameStatus.types'

export function saveGameStatus({
  ancientOne,
  lastToken,
  playerCount,
  stage,
  tokenBag,
  tokensTaken
}: SaveGame) {
  const saveGame = {
    ancientOne,
    lastToken,
    playerCount,
    stage,
    tokenBag,
    tokensTaken
  }

  localStorage.setItem('saveGame', JSON.stringify(saveGame))
}
