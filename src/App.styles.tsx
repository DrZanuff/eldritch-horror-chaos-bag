import styled from 'styled-components'

export const AppContainer = styled.div`
  position: relative;
  z-index: 2;
  background-color: #5f5f5f3e;
  display: flex;
  justify-content: center;
`
export const Background = styled.div`
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  height: 100svh;
  top: 0;
  left: 0;
  overflow: hidden;

  img {
    width: 100vw;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    img {
      width: 100%;
      height: 100vh;
      height: 100svh;
    }
  }
`
