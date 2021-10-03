import type { NextPage } from 'next'

import Container from '../../components/Container'
import DashboardTable from '../../components/DashboardTable'

const Dashboards: NextPage = () => {
  return (
    <Container title="MagiDash Dashboards" description="A table of MagiDash dashboards">
      <DashboardTable />
    </Container>
  )
}

export default Dashboards
