import { playerCountReferenceList } from '../../../data/playerCountReference/playerCountReference'
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import { currentPlayersNumber } from '../../../atoms/mainAtoms'
import { useRecoilState } from 'recoil'
import type { SelectChangeEvent } from './PlayerCountSelect.types'
import * as S from './PlayerCountSelect.styles'

export function PlayerCountSelect() {
  const label = 'Select Number of Players'

  const [playerCount, setPlayerCount] = useRecoilState(currentPlayersNumber)

  const handlePlayerCountChange = (event: SelectChangeEvent) => {
    const players = playerCountReferenceList.find((count) => count.name == event.target.value)
    setPlayerCount(players || { name: '', clues: 0, players: 0, portals: 0, surges: 0 })
  }

  return (
    <S.PlayerCountSelectContainer data-testid="player-select">
      <FormControl fullWidth>
        <InputLabel id="select-players">{label}</InputLabel>
        <Select
          labelId="select-players"
          id="select-players"
          label={label}
          value={playerCount.name}
          onChange={handlePlayerCountChange}>
          {playerCountReferenceList.map((count) => (
            <MenuItem key={count.name} value={count.name}>
              {count.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </S.PlayerCountSelectContainer>
  )
}
