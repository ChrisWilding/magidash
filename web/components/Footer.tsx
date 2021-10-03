import React, { FunctionComponent } from 'react'
import styles from '../styles/Footer.module.css'

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      MagiDash is a demo application by&nbsp;<a href="https://github.com/ChrisWilding">Chris Wilding</a>
    </footer>
  )
}

export default Footer
