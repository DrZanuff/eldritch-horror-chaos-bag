import { IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import type { ModalComponentProps } from './ModalComponent.types'
import * as S from './ModalComponent.styles'

export function ModalComponent({
  handleCloseModalComponent,
  component,
  width,
  height,
  applySizeForMobile
}: ModalComponentProps) {
  return (
    <>
      <S.ModalComponentContainerBackground />
      <S.ModalComponentContainer>
        <S.ModalComponent width={width} height={height} applySizeForMobile={applySizeForMobile}>
          <S.ModalComponentContent>{component}</S.ModalComponentContent>
          <IconButton
            sx={{ position: 'absolute', top: '0px', right: '0px' }}
            onClick={() => handleCloseModalComponent()}>
            <Close />
          </IconButton>
        </S.ModalComponent>
      </S.ModalComponentContainer>
    </>
  )
}
