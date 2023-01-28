import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'

describe('Render main elements at the page', () => {
  render(<About />)
  const user = userEvent.setup()

  it('should render all  about elements', () => {
    const aboutButton = screen.getByRole('button', { name: /about/i })
    const rulesLink = screen.getByRole('link', { name: /how to play/i })
    const devLink = screen.getByRole('link', { name: /drzanuff/i })
  })
})
