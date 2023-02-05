import styled from 'styled-components'

export const TokenDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 8px;
`
export const TokenTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 5px;

  > h2 {
    margin: 0 0 10px;
  }
`
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    font-size: 14px;
    margin: 0px;
  }
`

export const Box = styled.div`
  display: flex;
  padding: 5px;
  border: 2px solid purple;
  border-radius: 8px;
  text-align: center;
  justify-content: center;
  height: 150px;
  background-color: purple;
  color: white;

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`
