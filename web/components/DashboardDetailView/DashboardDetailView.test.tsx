import { render, screen } from '@testing-library/react'
import DashboardDetailView from './DashboardDetailView'

describe('DashboardDetailView', () => {
    it('renders a dashboard detail view', () => {
        const dashboard = {
            id: 1,
            createdAt: '2021-10-01',
            updatedAt: '2021-10-02',
            title: 'Stubbed Dashboard 1',
          }

        render(<DashboardDetailView dashboard={dashboard} />)

        expect(screen.getByText('Title: Stubbed Dashboard 1')).toBeVisible()
        expect(screen.getByText('Created At: 1st October 2021')).toBeVisible()
        expect(screen.getByText('Last Updated: 2nd October 2021')).toBeVisible()
    })
})
