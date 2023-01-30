import { ReactNode, useEffect } from 'react'
import {
  currentModalSceneAtom,
  openModalSceneAtom,
  closeModalSceneAtom
} from '../../../atoms/mainAtoms'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { motion, useAnimationControls } from 'framer-motion'
import * as S from './Modal.styles'

export function Modal() {
  const controls = useAnimationControls()
  const [currentModalScene, setCurrentModalScene] = useRecoilState(currentModalSceneAtom)
  const setOpenModalScene = useSetRecoilState(openModalSceneAtom)
  const setCloseModalScene = useSetRecoilState(closeModalSceneAtom)

  async function openModal(component: ReactNode) {
    setCurrentModalScene(component)
    await controls.start({
      display: 'flex',
      opacity: 1
    })
  }

  async function closeModal() {
    await controls.start({
      opacity: 0
    })
    await controls.start({
      display: 'none'
    })
    setCurrentModalScene(null)
  }

  useEffect(() => {
    setOpenModalScene({ openModal })
    setCloseModalScene({ closeModal })
  }, [])

  return (
    <S.ModalContainer>
      <motion.div animate={controls} initial={{ display: 'none', opacity: '0' }}>
        {currentModalScene}
      </motion.div>
    </S.ModalContainer>
  )
}
