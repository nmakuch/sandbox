import Head from 'next/head'
import React from 'react';
import styles from '../styles/Buttons.module.css'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Buttons</title>
                    <meta name="description" content="A space for testing Canada.ca buttons" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <header className={styles.buttonsHeader}>
                    <div className={styles.container}>
                        <a className="back" href="/">Go back</a>
                    </div>
                </header>

                <main className={styles.buttonsMain}>
                    <div className={styles.container}>
                        <section className={styles.buttonsSection}>
                            <h1>Buttons</h1>
                            <p>Here is a list of buttons we currently know the token values for. Here we can test the <b>:active</b>, <b>:hover</b> and <b>:focus</b> states together. Sometimes it's harder to visualize these things working together in figma.</p>
                        </section>

                        <section className={styles.buttonsSection}>
                            <h2>Primary button</h2>
                            <button className={styles.primary}>Primary Button</button> <br />
                        </section>

                        <section className={styles.buttonsSection}>
                            <h2>Secondary button</h2>
                            <button className={styles.secondary}>Secondary Button</button>
                        </section>

                        <section className={styles.buttonsSection}>
                            <h2>Danger button</h2>
                            <button className={styles.danger}>Danger Button</button>
                        </section>

                        <section className={styles.buttonsSection}>
                            <h2>Danger button outline</h2>
                            <button className={styles.dangerOutline}>Danger Button</button>
                        </section>

                        <section className={styles.buttonsSection}>
                            <h2>Supertask button</h2>
                            <button className={styles.super}>Supertask Button</button>
                        </section>

                        <section className={styles.buttonsSection}>
                            <h2>Text-only Button</h2>
                            <a tabIndex="0" className={styles.textOnly}>Text-only Button</a>
                        </section>

                        <section className={styles.buttonsSection}>
                            <h2>Disabled button</h2>
                            <button aria-disabled="true" className={styles.primary}>Disabled Primary Button</button>
                        </section>
                    </div>
                </main>

                <footer>
                </footer>
            </div>
        )
    }
}

export default Home;
