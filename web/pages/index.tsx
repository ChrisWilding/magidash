import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Dashboards: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MagiDash</title>
        <meta name="description" content="MagiDash for all your dashboard needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          MagiDash Dashboards
        </h1>

        <p className={styles.description}>Our mission is to empower people in corporations to have one place to visualise any data relevant to their job. As such, we create rich and flexible dashboarding tools which will integrate seamlessly with any data source and present the data in many different formats. </p>

      <p>Check out these awesome <Link href="/dashboards"><a>dashboards</a></Link></p>
      </main>

      <footer className={styles.footer}>
        MagiDash is a demo application by&nbsp;<a href="https://github.com/ChrisWilding">ChrisWilding</a>
      </footer>
    </div>
  )
}

export default Dashboards
