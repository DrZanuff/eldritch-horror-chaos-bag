import styled from 'styled-components'

export const GamePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
  height: 100%;
  box-shadow: 0 0 0 3px #36200c;
  padding: 10px;
  border-radius: 15px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
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
export const MessageDisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 50px;
`
export const StageBox = styled.div`
  display: flex;
  min-width: 220px;
  height: 100px;
  border: 4px solid burlywood;
  background-color: #fee296;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin: 0 10px 10px;
  padding: 10px;
`
