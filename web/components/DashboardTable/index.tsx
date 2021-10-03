import { FunctionComponent } from 'react'

import useSWR from 'swr'

import fetcher from '../../services/fetcher'
import DashboardTable from './DashboardTable'

const DashboardTableContainer: FunctionComponent = () => {
  const { data, error } = useSWR('/api/dashboards', fetcher)

  if (error) return <div>Sorry, something went wrong retrieving the dashboards</div>
  if (!data) return <div>Loading some beautiful dashboards, hang tight ...</div>

  return <DashboardTable dashboards={data} />
}

export default DashboardTableContainer
