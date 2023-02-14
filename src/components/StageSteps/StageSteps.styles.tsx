import styled from 'styled-components'
import type { MythosColors } from './StageSteps.types'

export const StageStepsContainer = styled.div`
  display: flex;
  /* padding: 10px; */
  flex-direction: column;
  width: 100%;
  gap: 10px;
  min-height: 80px;

  > h3 {
    margin: 0px 0 10px;
    font-size: 20px;

    font-family: 'Birmingham';
    /* font-weight: bold; */
  }
`
export const StepContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  > span {
    margin-right: 5px;
    line-height: 18px;
    margin-top: 4px;
    text-align: right;
    width: 80px;

    font-family: 'Birmingham';
    font-style: italic;
  }
`

export interface StepProps {
  mythosColors: MythosColors
}

export const Step = styled.div<StepProps>`
  display: flex;
  border: 3px solid white;
  width: 25px;
  height: 18px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: ${({ mythosColors }) => {
    if (mythosColors === 'yellow') {
      return '#b77621'
    }

    if (mythosColors === 'green') {
      return '#204c30'
    }

    return '#3145b3'
  }};
`
