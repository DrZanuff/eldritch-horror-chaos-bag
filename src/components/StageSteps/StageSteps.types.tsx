import { StagesType } from '../../data/ancientOnes/ancientOnes.types'

export interface StageStepsProps {
  stages: StagesType[]
  displayCurrentSate?: boolean
  currentStage?: number
}

export type MythosColors = 'yellow' | 'green' | 'blue'
