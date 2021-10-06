import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import Container from '../../components/Container'
import DashboardDetailView from '../../components/DashboardDetailView'

const Dashboards: NextPage = () => {
    const router = useRouter()
  const { pid } = router.query
  let id = 1
  if (typeof pid === "string") {
      id = parseInt(pid, 10)
  }

  return (
    <Container title="MagiDash Dashboards" description="Dashboard details">
      <DashboardDetailView id={id} />
    </Container>
  )
}

export default Dashboards
