import type { AncientOneSelectProps } from './AncientOneSelect.types'
import * as S from './AncientOneSelect.styles'

export function AncientOneSelect({ value }: AncientOneSelectProps) {
  return (
    <S.AncientOneSelectContainer data-testid="ao-select">
      <h1>AncientOneSelect</h1>
      <h2>{value}</h2>
    </S.AncientOneSelectContainer>
  )
}
