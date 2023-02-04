import { Button } from '@mui/material'
import type { ConfirmationProps } from './Confirmation.types'
import * as S from './Confirmation.styles'

export function Confirmation({ handleClose, handleConfirm }: ConfirmationProps) {
  return (
    <S.ConfirmationContainer>
      <h3>This will overwrite previous save game.</h3>
      <h3>Do you want to proceed?</h3>
      <S.RowButtons>
        <Button variant="contained" color="info" onClick={handleClose}>
          No
        </Button>
        <Button variant="contained" color="error" onClick={handleConfirm}>
          Yes
        </Button>
      </S.RowButtons>
    </S.ConfirmationContainer>
  )
}
