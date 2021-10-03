import { FunctionComponent } from 'react'

import Head from 'next/head'

import Footer from './Footer'
import styles from '../styles/Container.module.css'

type Props = {
  title: string
  description: string
}

const Container: FunctionComponent<Props> = ({ title, description, children }) => (
  <div className={styles.container}>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </main>

    <Footer />
  </div>
)

export default Container
