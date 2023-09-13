import { GamePage } from './components/game/GamePage'
import { MainPage } from './components/menu/MainPage'
import { useRecoilValue } from 'recoil'
import { gameState } from './atoms/mainAtoms'
import { IntlProvider } from 'react-intl'
import { messages } from './data/messages'
import { languageContext } from './atoms/mainAtoms'
import * as S from './App.styles'
import './App.css'

function App() {
  const currentPage = useRecoilValue(gameState)
  const language = useRecoilValue(languageContext)

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <S.AppContainer>
        <S.Background>
          <img src="/background.jpg" alt="" />
        </S.Background>
        {currentPage === 'menu' ? <MainPage /> : <GamePage />}
      </S.AppContainer>
    </IntlProvider>
  )
}

export default App
