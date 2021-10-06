import { FunctionComponent } from 'react'

import useSWR from 'swr'

import fetcher from '../../services/fetcher'
import DashboardDetailView from './DashboardDetailView'

type Props = {
    id: number
}

const DashboardTableContainer: FunctionComponent<Props> = ({ id }) => {
  const { data, error } = useSWR(`/api/dashboards/${id}`, fetcher)

  if (error) return <div>Sorry, something went wrong retrieving the dashboard</div>
  if (!data) return <div>Loading a beautiful dashboard, hang tight ...</div>

  return <DashboardDetailView dashboard={data} />
}

export default DashboardTableContainer
