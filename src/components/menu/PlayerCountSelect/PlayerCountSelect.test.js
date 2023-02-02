import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import userEvent from '@testing-library/user-event'
import { PlayerCountSelect } from './PlayerCountSelect'
import { playerCountReferenceList } from '../../../data/playerCountReference'

describe('Number of Players select should work', () => {
  it('should render the select with the options', async () => {
    render(
      <RecoilRoot>
        <PlayerCountSelect />
      </RecoilRoot>
    )

    const user = userEvent.setup()

    const select = screen.getByRole('button', { name: /select number of players/i })

    expect(select).toBeInTheDocument()

    await user.click(select)

    const options = screen.getAllByRole('option')

    expect(options.length).toBe(playerCountReferenceList.length)

    options.forEach((option, idx) => {
      expect(option.textContent === playerCountReferenceList[idx].name)
    })
  })

  it('should be able to select number of players from the list and display number of player tokens', async () => {
    render(
      <RecoilRoot>
        <PlayerCountSelect />
      </RecoilRoot>
    )
    const user = userEvent.setup()

    const select = screen.getByRole('button', { name: /select number of players/i })

    await user.click(select)

    playerCountReferenceList.forEach(async (playerCount) => {
      const option = screen.getByRole('option', { name: playerCount.name })

      await user.click(option)

      const playerSelect = screen.getByRole('button', { name: playerCount.name })

      expect(playerSelect.textContent).toBe(playerCount.name)

      const player = screen.getByTestId('players')
      const clues = screen.getByTestId('clues')
      const portals = screen.getByTestId('portals')
      const surges = screen.getByTestId('surges')

      expect(player.textContent).toBe(String(playerCount.players))
      expect(clues.textContent).toBe(String(playerCount.clues))
      expect(portals.textContent).toBe(String(playerCount.portals))
      expect(surges.textContent).toBe(String(playerCount.surges))
    })
  })
})
