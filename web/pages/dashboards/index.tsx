import type { NextPage } from 'next'
import Head from 'next/head'
import useSWR from 'swr'
import styles from '../../styles/Home.module.css'
import Footer from '../../components/Footer'

import fetcher from '../../services/fetcher'
import DashboardTable from '../../components/DashboardTable'

const Dashboards: NextPage = () => {
  const { data, error } = useSWR('/api/dashboards', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div className={styles.container}>
      <Head>
        <title>MagiDash | Dashboards</title>
        <meta name="description" content="MagiDash dashboards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>MagiDash Dashboards</h1>

        <DashboardTable dashboards={data} />
      </main>

      <Footer />
    </div>
  )
}

export default Dashboards
