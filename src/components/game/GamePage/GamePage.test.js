import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RecoilRoot } from 'recoil'
import { GamePage } from './GamePage'

describe('Render game page elements', () => {
  render(
    <RecoilRoot>
      <GamePage />
    </RecoilRoot>
  )
  const user = userEvent.setup()

  it('should render all elements', () => {
    const quitButton = screen.getByRole('button', { name: /quit/i })
    const getTokenButton = screen.getByRole('button', { name: /get token/i })
    const stages = screen.getByTestId('stages')
    const description = screen.getByRole('article')
    const tokensTaken = screen.getByTestId('tokens-taken')

    expect(quitButton).toBeInTheDocument()
    expect(getTokenButton).toBeInTheDocument()
    expect(stages).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(tokensTaken).toBeInTheDocument()
  })
})
