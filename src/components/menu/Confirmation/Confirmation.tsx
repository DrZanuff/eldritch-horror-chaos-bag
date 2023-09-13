import { Button } from '@mui/material'
import type { ConfirmationProps } from './Confirmation.types'
import * as S from './Confirmation.styles'
import { useIntl } from 'react-intl'

export function Confirmation({ handleClose, handleConfirm }: ConfirmationProps) {
  const { formatMessage } = useIntl()

  return (
    <S.ConfirmationContainer>
      <h3>{formatMessage({ id: 'overwrite_warning_1' })}</h3>
      <h3>{formatMessage({ id: 'overwrite_warning_2' })}</h3>
      <S.RowButtons>
        <Button variant="contained" color="info" onClick={handleClose}>
          {formatMessage({ id: 'no' })}
        </Button>
        <Button variant="contained" color="error" onClick={handleConfirm}>
          {formatMessage({ id: 'yes' })}
        </Button>
      </S.RowButtons>
    </S.ConfirmationContainer>
  )
}
