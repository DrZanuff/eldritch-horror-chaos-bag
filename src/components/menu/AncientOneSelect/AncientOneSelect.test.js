import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AncientOneSelect } from './AncientOneSelect'
import { ancientOneList } from '../../../data/ancientOnes'

describe('Ancient One select should work', () => {
  it('should render the select with the options', () => {
    render(<AncientOneSelect />)

    const select = screen.getByRole('button', { name: /select an ancient one/i })

    expect(select).toBeInTheDocument()
  })
})
