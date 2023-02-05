import { ancientOneList } from '../../../data/ancientOnes'
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import { currentAncientOne } from '../../../atoms/mainAtoms'
import { useRecoilState } from 'recoil'
import { StageSteps } from '../../StageSteps'
import type { SelectChangeEvent } from './AncientOneSelect.types'
import * as S from './AncientOneSelect.styles'
import { PlayerCountSelect } from '../PlayerCountSelect'

export function AncientOneSelect() {
  const label = 'Select an Ancient One'

  const [ancientOne, setAncientOne] = useRecoilState(currentAncientOne)

  const handleAncientOneChange = (event: SelectChangeEvent) => {
    const ancientOne = ancientOneList.find((ao) => ao.name == event.target.value)
    setAncientOne(ancientOne || { name: '', stages: [] })
  }

  return (
    <S.AncientOneSelectContainer data-testid="ao-select">
      <S.FieldsConstainer>
        <FormControl fullWidth>
          <InputLabel id="select-ao">{label}</InputLabel>
          <Select
            labelId="select-ao"
            id="select-ao"
            label={label}
            sx={{ width: '100%' }}
            value={ancientOne.name}
            onChange={handleAncientOneChange}>
            {ancientOneList.map((ao) => (
              <MenuItem key={ao.name} value={ao.name}>
                {ao.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <PlayerCountSelect />
      </S.FieldsConstainer>

      <S.StageBox>
        {ancientOne.name === 'none' ? null : (
          <StageSteps stages={ancientOne.stages} displayCurrentSate={false} />
        )}
      </S.StageBox>
    </S.AncientOneSelectContainer>
  )
}
