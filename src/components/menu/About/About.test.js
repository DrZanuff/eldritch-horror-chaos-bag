import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RecoilRoot } from 'recoil'
import { About } from './About'
import App from '../../../App'

describe('Render main elements at the page and features', () => {
  render(
    <RecoilRoot>
      <About />
    </RecoilRoot>
  )
  const user = userEvent.setup()

  it('should render all  about elements', () => {
    const aboutButton = screen.getByRole('button', { name: /about/i })
    const rulesLink = screen.getByRole('link', { name: /how to play/i })
    const devLink = screen.getByRole('link', { name: /drzanuff/i })

    expect(aboutButton).toBeInTheDocument()
    expect(rulesLink).toBeInTheDocument()
    expect(devLink).toBeInTheDocument()
  })

  it('should open the modal when clicked', async () => {
    render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    )

    const aboutButton = screen.getByRole('button', { name: /about/i })

    await user.click(aboutButton)
    await new Promise((resolve) => {
      setTimeout(resolve, 500)
    })

    const aboutModal = screen.getByTestId('about-modal')

    expect(aboutModal).toBeInTheDocument()
  })
})
