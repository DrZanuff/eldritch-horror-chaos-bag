import styled from 'styled-components'

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 15px;

  background-color: #1f1f1f8a;
  backdrop-filter: blur(4px);

  max-width: 600px;
  width: 100%;
  padding: 2rem;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 5px;
    max-width: 100%;
    margin: 15px;
  }
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0 30px;

  > h1 {
    margin: 0 0 20px;
    text-transform: uppercase;
    font-family: 'Birmingham';
    font-weight: bold;
  }
`
export const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
`
