import { render, screen } from '@testing-library/react'
import useSWR from 'swr'

import DashboardTableContainer from '.'

jest.mock('swr')

const mockUseSWR = useSWR as jest.MockedFunction<typeof useSWR>

describe('DashboardTableContainer', () => {
  it('renders a loading message ', async () => {
    const response = {
      data: null,
      error: null,
    } as ReturnType<typeof useSWR>
    mockUseSWR.mockImplementationOnce(() => response)

    render(<DashboardTableContainer />)

    expect(screen.getByText('Loading some beautiful dashboards, hang tight ...')).toBeVisible()
  })

  it('renders an error message on error', async () => {
    const response = {
      data: null,
      error: new Error('bang!'),
    } as ReturnType<typeof useSWR>
    mockUseSWR.mockImplementationOnce(() => response)

    render(<DashboardTableContainer />)

    expect(screen.getByText('Sorry, something went wrong retrieving the dashboards')).toBeVisible()
  })

  it('renders the dashboard table', async () => {
    const response = {
      data: [
        {
          id: 1,
          createdAt: '2021-10-01',
          updatedAt: '2021-10-02',
          title: 'A Test Dashboard',
        },
      ],
      error: null,
    } as ReturnType<typeof useSWR>
    mockUseSWR.mockImplementationOnce(() => response)

    render(<DashboardTableContainer />)

    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(2)
    expect(screen.getByText('Title')).toBeVisible()
    expect(screen.getByText('Created')).toBeVisible()
    expect(screen.getByText('Last Updated')).toBeVisible()
    expect(screen.getByText('A Test Dashboard')).toBeVisible()
  })
})
