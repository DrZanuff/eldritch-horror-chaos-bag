import { ancientOneList } from '../../../data/ancientOnes'
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import { currentAncientOne } from '../../../atoms/mainAtoms'
import { useRecoilState } from 'recoil'
import { get } from 'lodash'
import type { AncientOneType, SelectChangeEvent } from './AncientOneSelect.types'
import * as S from './AncientOneSelect.styles'

export function AncientOneSelect() {
  const label = 'Select an Ancient One'

  const [ancientOnes, setAncientOne] = useRecoilState(currentAncientOne)

  const handleAncientOneChange = (event: SelectChangeEvent) => {
    const ancientOne = ancientOneList.find((ao) => ao.name == event.target.value)
    setAncientOne(ancientOne || { name: '', stages: [] })
  }

  return (
    <S.AncientOneSelectContainer data-testid="ao-select">
      <FormControl fullWidth>
        <InputLabel id="select-ao">{label}</InputLabel>
        <Select
          labelId="select-ao"
          id="select-ao"
          label={label}
          value={ancientOnes.name}
          onChange={handleAncientOneChange}>
          {ancientOneList.map((ao) => (
            <MenuItem key={ao.name} value={ao.name}>
              {ao.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </S.AncientOneSelectContainer>
  )
}
