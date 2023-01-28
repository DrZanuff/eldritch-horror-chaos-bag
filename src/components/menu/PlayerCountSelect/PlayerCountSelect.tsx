import type { PlayerCountSelectProps } from './PlayerCountSelect.types'
import * as S from './PlayerCountSelect.styles'

export function PlayerCountSelect({ value }: PlayerCountSelectProps) {
  return (
    <S.PlayerCountSelectContainer data-testid="player-select">
      <h1>PlayerCountSelect</h1>
      <h2>{value}</h2>
    </S.PlayerCountSelectContainer>
  )
}
