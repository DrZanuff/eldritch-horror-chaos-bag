import type { StageStepsProps } from './StageSteps.types'
import * as S from './StageSteps.styles'

export function StageSteps({ stages }: StageStepsProps) {
  return (
    <S.StageStepsContainer data-testid="stages">
      <h3>Stages</h3>
      {stages.map((stage, idx) => (
        <S.StepContainer key={idx}>
          <span>Step {idx + 1}</span>
          <S.Step mythosColors="yellow" data-testid={`yellow-step-${idx + 1}`}>
            {stage.yellow}
          </S.Step>
          <S.Step mythosColors="green" data-testid={`green-step-${idx + 1}`}>
            {stage.green}
          </S.Step>
          <S.Step mythosColors="blue" data-testid={`blue-step-${idx + 1}`}>
            {stage.blue}
          </S.Step>
        </S.StepContainer>
      ))}
    </S.StageStepsContainer>
  )
}
