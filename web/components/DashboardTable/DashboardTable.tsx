import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { Dashboard } from '../../services/dashboardService'
import formatDate from '../../util/formatDate'

export type DashboardProps = {
  dashboards: Dashboard[]
}

const DashboardTable: FunctionComponent<DashboardProps> = ({ dashboards }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Title</td>
          <td>Created</td>
          <td>Last Updated</td>
        </tr>
      </thead>
      <tbody>
        {dashboards.map((dashboard: Dashboard) => (
          <tr key={`dashboard-${dashboard.id}`}>
            <td>{dashboard.title}</td>
            <td>{formatDate(dashboard.createdAt)}</td>
            <td>{formatDate(dashboard.updatedAt)}</td>
            <td>
              <Link href={`/dashboards/${dashboard.id}`}>
                <a>View Details</a>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DashboardTable
