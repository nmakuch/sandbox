import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NM Sandbox</title>
        <meta name="description" content="A place to test stuff I'm working on" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          NM Sandbox
        </h1>

        <p className={styles.description}>
          A place to test stuff I'm working on
        </p>

        <div className={styles.grid}>
          <a href="/buttons" className={styles.card}>
            <h2>Button states</h2>
            <p>Testing button states for <b>Canada.ca</b></p>
          </a>

          <a href="/select" className={styles.card}>
            <h2>Select</h2>
            <p>A select component for <b>Canada.ca</b></p>
          </a>

          <a href="/text-inputs" className={styles.card}>
            <h2>Text inputs</h2>
            <p>Testing text inputs for <b>Canada.ca</b></p>
          </a>

          <a href="/textarea" className={styles.card}>
            <h2>Textarea</h2>
            <p>Testing textarea for <b>Canada.ca</b></p>
          </a>
        </div>

        <div className={styles.grid}>
          <a href="/radio-buttons" className={styles.card}>
            <h2>Radio Buttons</h2>
            <p>Testing radio buttons for <b>Canada.ca</b></p>
          </a>

          <a href="/checkboxes" className={styles.card}>
            <h2>Checkboxes</h2>
            <p>Testing checkboxes for <b>Canada.ca</b></p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
