import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import userEvent from '@testing-library/user-event'
import { AncientOneSelect } from './AncientOneSelect'
import { ancientOneList } from '../../../data/ancientOnes'

describe('Ancient One select should work', () => {
  it('should render the select with the options', async () => {
    render(
      <RecoilRoot>
        <AncientOneSelect />
      </RecoilRoot>
    )

    const user = userEvent.setup()

    const select = screen.getByRole('button', { name: /select an ancient one/i })

    expect(select).toBeInTheDocument()

    await user.click(select)

    const options = screen.getAllByRole('option')

    expect(options.length).toBe(ancientOneList.length)

    options.forEach((option, idx) => {
      expect(option.textContent === ancientOneList[idx].name)
    })
  })

  it('should be able to select ancient ones from the list', async () => {
    render(
      <RecoilRoot>
        <AncientOneSelect />
      </RecoilRoot>
    )
    const user = userEvent.setup()

    const select = screen.getByRole('button', { name: /select an ancient one/i })

    await user.click(select)

    ancientOneList.forEach(async (ao) => {
      const option = screen.getByRole('option', { name: ao.name })

      await user.click(option)

      const aoSelect = screen.getByRole('button', { name: ao.name })

      expect(aoSelect.textContent).toBe(ao.name)
    })
  })
})
