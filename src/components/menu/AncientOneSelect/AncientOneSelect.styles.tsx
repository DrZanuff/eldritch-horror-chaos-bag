import styled from 'styled-components'

export const AncientOneSelectContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const FieldsConstainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`

export const StageBox = styled.div`
  display: flex;
  min-width: 220px;
  height: 180px;
  border: 2px solid white;
  background-color: #694f825c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin: 0 10px 10px;
  padding: 10px;
`
