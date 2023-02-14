import { GamePage } from './components/game/GamePage'
import { MainPage } from './components/menu/MainPage'
import { useRecoilValue } from 'recoil'
import { gameState } from './atoms/mainAtoms'
import * as S from './App.styles'
import './App.css'

function App() {
  const currentPage = useRecoilValue(gameState)

  return (
    <S.AppContainer>
      <S.Background>
        <img src="/src/assets/background.jpg" alt="" />
      </S.Background>
      {currentPage === 'menu' ? <MainPage /> : <GamePage />}
    </S.AppContainer>
  )
}

export default App
