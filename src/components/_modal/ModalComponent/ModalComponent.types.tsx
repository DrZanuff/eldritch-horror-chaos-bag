import { ReactElement } from 'react'

export interface ModalComponentProps {
  handleCloseModalComponent: () => void
  component: ReactElement
  width?: string
  height?: string
  applySizeForMobile?: boolean
  renderBackground?: boolean
}
