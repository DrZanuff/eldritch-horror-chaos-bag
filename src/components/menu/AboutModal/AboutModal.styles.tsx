import styled from 'styled-components'

export const AboutModalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #141414da;
  backdrop-filter: blur(4px);
  padding: 10px;
  border-radius: 15px;
`
export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  p {
    width: 100%;
  }
`
