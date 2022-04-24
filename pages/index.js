import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '../src/Home/home'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="utf-8"/>
        <meta name="author" content="Softnio"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content=""/>
        {/* Fav Icon */}
        <link rel="shortcut icon" href="images/favicon.png"/>
        {/* Site Title */}
        <title>Genox - Creative Agency &amp; Digital Web Agency Multipurpose HTML Template</title>
      </Head>
      <HomePage />
    </div>
  )
}
