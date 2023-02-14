import styled from 'styled-components'

export const TokenDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
export const TokenTitle = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;

  > h2 {
    font-size: 20px;
    margin: 0 0 10px;
    font-family: 'Birmingham';
    font-weight: bold;
  }
`

interface ColumnProps {
  flex?: number
}

export const Column = styled.div<ColumnProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: ${({ flex }) => (flex ? flex : '1')};
`
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const DescriptionTitle = styled.h3`
  font-size: 18px;
  margin: 0px 0px 10px;

  font-family: 'Birmingham';
  font-weight: bold;
`
export const TokenImageContainer = styled.div`
  display: flex;
  width: 75px;
  height: 75px;

  img {
    width: 75px;
    height: 75px;
    object-fit: contain;
  }
`

export const Box = styled.div`
  display: flex;
  padding: 5px;
  box-sizing: border-box;
  border: 2px solid purple;
  border-radius: 8px;
  text-align: center;
  justify-content: center;
  height: 150px;
  min-height: 150px;
  background-color: #5f005f57;
  backdrop-filter: blur(2px);
  color: white;

  width: 380px;
  height: 200px;

  @media (max-width: 1024px) {
    font-size: 14px;
    font-weight: bold;
  }
`
