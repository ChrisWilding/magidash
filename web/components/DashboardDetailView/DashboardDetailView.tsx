import React, { FunctionComponent } from 'react'
import { Dashboard } from '../../services/dashboardService'
import formatDate from '../../util/formatDate'

export type DashboardProps = {
  dashboard: Dashboard
}

const DashboardDetailView: FunctionComponent<DashboardProps> = ({ dashboard }) => {
  return (
    <div>
      <div>
        <span>Title: {dashboard.title}</span>
      </div>
      <div>Created At: {formatDate(dashboard.createdAt)}</div>
      <div>Last Updated: {formatDate(dashboard.updatedAt)}</div>
    </div>
  )
}

export default DashboardDetailView
