import type { NextPage } from 'next'
import Head from 'next/head'
import useSWR from 'swr'
import styles from '../../styles/Home.module.css'
import Footer from '../../components/Footer'

import fetcher from '../../services/fetcher'
import DashboardTable from '../../components/DashboardTable'
import Container from '../../components/Container'

const Dashboards: NextPage = () => {
  const { data, error } = useSWR('/api/dashboards', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Container title="MagiDash Dashboards" description="A table of MagiDash dashboards">
      <DashboardTable dashboards={data} />
    </Container>
  )
}

export default Dashboards
