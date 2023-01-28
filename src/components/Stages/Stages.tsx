import type { StagesProps } from './Stages.types'
import * as S from './Stages.styles'

export function Stages({ value }: StagesProps) {
  return (
    <S.StagesContainer data-testid="stages">
      <h1>Stages</h1>
      <h2>{value}</h2>
    </S.StagesContainer>
  )
}
