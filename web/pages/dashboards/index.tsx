import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

const Dashboards: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MagiDash | Dashboards</title>
        <meta name="description" content="MagiDash dashboards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          MagiDash Dashboards
        </h1>

      </main>

      <footer className={styles.footer}>
        MagiDash is a demo application by&nbsp;<a href="https://github.com/ChrisWilding">ChrisWilding</a>
      </footer>
    </div>
  )
}

export default Dashboards
