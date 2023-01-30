import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RecoilRoot } from 'recoil'
import { MainPage } from './MainPage'

describe('Render main elements at the page', () => {
  render(
    <RecoilRoot>
      <MainPage />
    </RecoilRoot>
  )
  const user = userEvent.setup()

  it('should render all elements', () => {
    const logo = screen.getByRole('heading', { name: /eldritch horror chaos bag/i })
    const aoSelect = screen.getByTestId('ao-select')
    const playerSelect = screen.getByTestId('player-select')
    const startButton = screen.getByRole('button', { name: /start new game/i })
    const continueButton = screen.getByRole('button', { name: /continue/i })
    const aboutabout = screen.getByTestId('about')

    expect(logo).toBeInTheDocument()
    expect(aoSelect).toBeInTheDocument()
    expect(playerSelect).toBeInTheDocument()
    expect(startButton).toBeInTheDocument()
    expect(continueButton).toBeInTheDocument()
    expect(aboutabout).toBeInTheDocument()
  })
})
