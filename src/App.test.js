import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { logRoles } from '@testing-library/dom'
import App from './App.tsx'
import { RecoilRoot } from 'recoil'

describe('Control the application flow', () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  )

  const user = userEvent.setup()

  it('should render initially the menu screen', () => {
    const mainPage = screen.getByTestId('menu-page')

    expect(mainPage).toBeInTheDocument()
  })

  it('should be able to start the game', async () => {
    const { container } = render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    )
    // logRoles(container)

    const playButton = screen.getByRole('button', { name: /start new game/i })

    await user.click(playButton)

    const gamePage = screen.getByTestId('game-page')

    expect(gamePage).toBeInTheDocument()
  })

  it('should be able to return to the menu page', async () => {
    render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    )

    const playButton = screen.getByRole('button', { name: /start new game/i })

    await user.click(playButton)

    const quitButton = screen.getByRole('button', { name: /quit/i })

    await user.click(quitButton)

    const menuPage = screen.getByTestId('menu-page')

    expect(menuPage).toBeInTheDocument()
  })
})
