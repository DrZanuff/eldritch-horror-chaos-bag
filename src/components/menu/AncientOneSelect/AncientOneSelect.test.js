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

  it('should be able to select ancient ones from the list and display stages', async () => {
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

      const firstStageStepYellow = screen.getByTestId(/yellow-step-1/i)
      const firstStageStepGreen = screen.getByTestId(/green-step-1/i)
      const firstStageStepBlue = screen.getByTestId(/blue-step-1/i)

      const secondStageStepYellow = screen.getByTestId(/yellow-step-2/i)
      const secondStageStepGreen = screen.getByTestId(/green-step-2/i)
      const secondStageStepBlue = screen.getByTestId(/blue-step-2/i)

      const thirdStageStepYellow = screen.getByTestId(/yellow-step-3/i)
      const thirdStageStepGreen = screen.getByTestId(/green-step-3/i)
      const thirdStageStepBlue = screen.getByTestId(/blue-step-3/i)

      expect(firstStageStepYellow.textContent).toBe(String(ao.stages[0].yellow))
      expect(firstStageStepGreen.textContent).toBe(String(ao.stages[0].green))
      expect(firstStageStepBlue.textContent).toBe(String(ao.stages[0].blue))

      expect(secondStageStepYellow.textContent).toBe(String(ao.stages[1].yellow))
      expect(secondStageStepGreen.textContent).toBe(String(ao.stages[1].green))
      expect(secondStageStepBlue.textContent).toBe(String(ao.stages[1].blue))

      expect(thirdStageStepYellow.textContent).toBe(String(ao.stages[2].yellow))
      expect(thirdStageStepGreen.textContent).toBe(String(ao.stages[2].green))
      expect(thirdStageStepBlue.textContent).toBe(String(ao.stages[2].blue))
    })
  })
})
