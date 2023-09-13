import type { StageStepsProps } from './StageSteps.types'
import * as S from './StageSteps.styles'
import { useIntl } from 'react-intl'

export function StageSteps({ stages, currentStage = 0, displayCurrentSate }: StageStepsProps) {
  const generateRomanNumbers = (value: number) => {
    if (value === 0) return 'I'
    if (value === 1) return 'II'
    if (value === 2) return 'III'
    return value
  }

  const { formatMessage } = useIntl()

  const label = formatMessage({ id: 'stage' })

  return (
    <S.StageStepsContainer data-testid="stages">
      <h3>{label}s</h3>
      {stages.map((stage, idx) => (
        <S.StepContainer key={idx}>
          {displayCurrentSate === true ? (
            <span>
              {label} {generateRomanNumbers(currentStage)}:
            </span>
          ) : (
            <span>
              {label} {generateRomanNumbers(idx)}:
            </span>
          )}
          <S.Step mythosColors="green" data-testid={`green-step-${idx + 1}`}>
            {stage.green}
          </S.Step>
          <S.Step mythosColors="yellow" data-testid={`yellow-step-${idx + 1}`}>
            {stage.yellow}
          </S.Step>
          <S.Step mythosColors="blue" data-testid={`blue-step-${idx + 1}`}>
            {stage.blue}
          </S.Step>
        </S.StepContainer>
      ))}
    </S.StageStepsContainer>
  )
}
