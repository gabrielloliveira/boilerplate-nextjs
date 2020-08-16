import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /boilerplate/i })
    ).toBeInTheDocument()
  })
  it('should render colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#030518' })
  })
})
