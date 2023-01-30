import { closeModalSceneAtom } from '../../../atoms/mainAtoms'
import { useRecoilValue } from 'recoil'
import { ModalComponent } from '../../_modal/ModalComponent'
import type { AboutModalProps } from './AboutModal.types'
import * as S from './AboutModal.styles'

const AboutContent = () => {
  return (
    <S.AboutModalContainer data-testid="about-modal">
      <h1>About Content</h1>
    </S.AboutModalContainer>
  )
}

export function AboutModal({ value }: AboutModalProps) {
  const { closeModal } = useRecoilValue(closeModalSceneAtom)

  return <ModalComponent handleCloseModalComponent={closeModal} component={<AboutContent />} />
}
