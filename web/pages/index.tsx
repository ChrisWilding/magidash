import type { NextPage } from 'next'
import Link from 'next/link'

import Container from '../components/Container'

import styles from '../styles/Home.module.css'

const Dashboards: NextPage = () => {
  return (
    <Container title="MagiDash" description="MagiDash for all your dashboard needs">
      <p className={styles.description}>
        Our mission is to empower people in corporations to have one place to visualise any data relevant to their job.
        As such, we create rich and flexible dashboarding tools which will integrate seamlessly with any data source and
        present the data in many different formats.{' '}
      </p>

      <p>
        Check out these awesome{' '}
        <Link href="/dashboards">
          <a>dashboards</a>
        </Link>
      </p>
    </Container>
  )
}

export default Dashboards
