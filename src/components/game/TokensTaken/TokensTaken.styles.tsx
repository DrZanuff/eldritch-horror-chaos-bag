import styled, { css } from 'styled-components'
import type { TokenNames } from './TokensTaken.types'

export const TokensTakenContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TokensList = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  max-height: 200px;
  overflow-y: auto;
`
interface TolKenContainerProps {
  name: TokenNames
}

export const TokenContainer = styled.div<TolKenContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  ${({ name }) => {
    function getColor(tokenName: TokenNames) {
      if (tokenName === 'Omen') return 'black'
      if (tokenName === 'Clue') return 'green'
      if (tokenName === 'Gate') return 'purple'
      if (tokenName === 'Surge') return 'brown'
      if (tokenName === 'Game Reckoning') return 'red'
      if (tokenName === 'Player Reckoning') return 'salmon'
      if (tokenName === 'Yellow Mythos') return 'yellow'
      if (tokenName === 'Green Mythos') return 'darkgreen'
      if (tokenName === 'Blue Mythos') return 'blue'
      return 'white'
    }

    const tokenColor = getColor(name)

    return css`
      border: 2px solid ${tokenColor};
      background-color: ${tokenColor};
    `
  }}
`
