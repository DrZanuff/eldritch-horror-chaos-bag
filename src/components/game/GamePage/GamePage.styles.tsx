import styled from 'styled-components'

export const GamePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
  height: 100%;
  border-radius: 15px;
  background-color: #1f1f1f8a;
  backdrop-filter: blur(4px);

  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 5px;
    max-width: 100%;
    margin: 15px;
  }
`

export const TopContainer = styled.div`
  display: flex;
  margin: 10px 0 20px;
  justify-content: end;
`

export const Row = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const ButtonWraper = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
export const StageBox = styled.div`
  display: flex;
  min-width: 220px;
  height: 100px;
  border: 2px solid white;
  background-color: #694f825c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin: 0 10px 10px;
  padding: 10px;
`
