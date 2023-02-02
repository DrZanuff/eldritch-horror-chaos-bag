import styled from 'styled-components'
import type { MythosColors } from './StageSteps.types'

export const StageStepsContainer = styled.div`
  display: flex;
  background-color: beige;
  padding: 10px;
  border-radius: 20px;
  flex-direction: column;
  gap: 10px;
  min-height: 80px;
`
export const StepContainer = styled.div`
  display: flex;
  gap: 10px;
`

export interface StepProps {
  mythosColors: MythosColors
}

export const Step = styled.div<StepProps>`
  display: flex;
  background-color: ${({ mythosColors }) => {
    if (mythosColors === 'yellow') {
      return 'yellow'
    }

    if (mythosColors === 'green') {
      return 'green'
    }

    return 'blue'
  }};
`
