import type { Languages } from '../../../atoms/mainAtoms'
export { Languages }
export type { SelectChangeEvent } from '@mui/material/Select'

export type FlagConversionTable = {
  [K in Languages]: string
}
