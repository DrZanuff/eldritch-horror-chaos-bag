import styled, { css } from 'styled-components'
import type { TokenNames } from './TokensTaken.types'

export const TokensTakenContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  font-family: 'Birmingham';
  font-weight: bold;
`
export const TokensList = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  height: 125px;
  max-height: 125px;
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

  img {
    object-fit: contain;
    width: 50px;
    height: 50px;
  }

  @media (max-width: 1024px) {
    width: 35px;
    height: 35px;

    img {
      object-fit: contain;
      width: 35px;
      height: 35px;
    }
  }

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
