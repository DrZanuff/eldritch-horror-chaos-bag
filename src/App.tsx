import { GamePage } from './components/game/GamePage'
import { MainPage } from './components/menu/MainPage'
import { useRecoilValue } from 'recoil'
import { gameState } from './atoms/mainAtoms'
import './App.css'

function App() {
  const currentPage = useRecoilValue(gameState)

  return currentPage === 'menu' ? <MainPage /> : <GamePage />
}

export default App
