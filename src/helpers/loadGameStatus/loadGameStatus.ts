import type { LoadResponse, SaveGame } from './loadGameStatus.types'

export function loadGameStatus(): LoadResponse {
  const save = localStorage.getItem('saveGame')

  console.log('DBG: loadGameStatus', { save })

  if (!!save) {
    const saveGame: SaveGame = JSON.parse(save)
    console.log('DBG: loadGameStatus - parsedJSON', { saveGame })

    return saveGame
  }

  return undefined
}
