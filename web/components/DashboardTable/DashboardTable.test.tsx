import { render, screen } from '@testing-library/react'
import DashboardTable from './DashboardTable'

describe('DashboardTable', () => {
  it('renders a header, and a row for every dashboard', async () => {
    const dashboards = [
      {
        id: 1,
        createdAt: '2021-10-01',
        updatedAt: '2021-10-01',
        title: 'A Test Dashboard',
      },
      {
        id: 2,
        createdAt: '2021-10-01',
        updatedAt: '2021-10-02',
        title: 'Another Test Dashboard',
      },
    ]

    render(<DashboardTable dashboards={dashboards} />)

    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(3)
    expect(screen.getByText('A Test Dashboard')).toBeVisible()
    expect(screen.getByText('Another Test Dashboard')).toBeVisible()

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2)

    links.forEach((link, index) => {
      expect(link.getAttribute('href')).toEqual(`/dashboards/${index + 1}`)
    })
  })

  it('renders the createdAt and updatedAt dates in the expected format', async () => {
    const dashboards = [
      {
        id: 1,
        createdAt: '2021-10-01',
        updatedAt: '2021-10-02',
        title: 'A Test Dashboard',
      },
    ]

    render(<DashboardTable dashboards={dashboards} />)

    const rows = screen.getAllByRole('row')

    expect(screen.getByText('1st October 2021')).toBeVisible()
    expect(screen.getByText('2nd October 2021')).toBeVisible()
  })
})
