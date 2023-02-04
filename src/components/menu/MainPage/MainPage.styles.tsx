import styled from 'styled-components'

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100%;
  border: 4px solid #36200c;
  padding: 10px;
  border-radius: 15px;
  margin-top: 20px;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0 30px;

  > h1 {
    margin: 0 0 20px;
  }
`
export const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
`
