import { playerCountReferenceList } from '../../../data/playerCountReference/playerCountReference'
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import { currentPlayersNumber } from '../../../atoms/mainAtoms'
import { useRecoilState } from 'recoil'
import { useIntl } from 'react-intl'
import type { SelectChangeEvent } from './PlayerCountSelect.types'
import * as S from './PlayerCountSelect.styles'

export function PlayerCountSelect() {
  const { formatMessage } = useIntl()
  const label = formatMessage({ id: 'select_players' })

  const [playerCount, setPlayerCount] = useRecoilState(currentPlayersNumber)

  const handlePlayerCountChange = (event: SelectChangeEvent) => {
    const players = playerCountReferenceList.find((count) => count.name == event.target.value)
    setPlayerCount(
      players || { name: '', id: 'empty', clues: 0, players: 0, portals: 0, surges: 0 }
    )
  }

  return (
    <S.PlayerCountSelectContainer data-testid="player-select">
      <FormControl fullWidth>
        <InputLabel id="select-players">{label}</InputLabel>
        <Select
          labelId="select-players"
          id="select-players-input"
          size="small"
          label={label}
          value={playerCount.name}
          onChange={handlePlayerCountChange}>
          {playerCountReferenceList.map((count) => (
            <MenuItem key={count.name} value={count.name}>
              {formatMessage({ id: count.id })}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </S.PlayerCountSelectContainer>
  )
}
