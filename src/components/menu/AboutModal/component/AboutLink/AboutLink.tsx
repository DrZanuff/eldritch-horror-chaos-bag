import type { AboutLinkProps } from './AboutLink.types'
import * as S from './AboutLink.styles'

export function AboutLink({ href, text }: AboutLinkProps) {
  return (
    <S.AboutLinkContainer href={href} target="_blank">
      {text}
    </S.AboutLinkContainer>
  )
}
