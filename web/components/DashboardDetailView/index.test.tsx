import { render, screen } from '@testing-library/react'
import useSWR from 'swr'

import DashboardDetailView from '.'

jest.mock('swr')

const mockUseSWR = useSWR as jest.MockedFunction<typeof useSWR>

describe('DashboardDetailView', () => {

  it('renders a loading message ', async () => {
    const response = {
        data: null,
        error: null,
      } as ReturnType<typeof useSWR>
    mockUseSWR.mockImplementationOnce((_id) => response);

    render(<DashboardDetailView id={1} />)

    expect(screen.getByText('Loading a beautiful dashboard, hang tight ...')).toBeVisible()
  })

  it('renders an error message on error', async () => {
    const response = {
        data: null,
        error: new Error('bang!'),
      } as ReturnType<typeof useSWR>
    mockUseSWR.mockImplementationOnce((_id) => response);

    render(<DashboardDetailView id={1} />)

    expect(screen.getByText('Sorry, something went wrong retrieving the dashboard')).toBeVisible()
  })

  it('renders the dashboard detail view', async () => {
    const response = {
        data: {
              id: 1,
              createdAt: '2021-10-01',
              updatedAt: '2021-10-02',
              title: 'A Test Dashboard',
            },

        error: null,
      } as ReturnType<typeof useSWR>
    mockUseSWR.mockImplementationOnce((id) => {
      expect(id).toEqual(1)
      return response
    });

    render(<DashboardDetailView id={1} />)

    expect(screen.getByText('Title: A Test Dashboard')).toBeVisible()
  })
})
