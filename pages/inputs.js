import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Inputs.module.css'

export default function Inputs() {
    return (
        <div>
            <Head>
                <title>Inputs</title>
                <meta name="description" content="A space for testing Canada.ca Inputs" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.InputsHeader}>
                <div className={styles.container}>
                    <a className="back" href="/">Go back</a>
                </div>
            </header>

            <main className={styles.InputsMain}>
                <div className={styles.container}>

                    <section className={styles.InputsSection}>
                        <h1>Inputs</h1>
                        <p>Here are some input styles for proposal. Here we can test the interactive states together. Sometimes it's harder to visualize these things working together in figma.</p>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Text Inputs</h2>
                        <p>Use fixed width inputs for content that has a specific, known length. For example a postal code has 6 characters so the input field should look 6 characters in size, a telephone number has 10 characters and should look 10 characters in size. We can set this width using the size attribute of the input field (size="50" would be 50 characters).</p>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Postal code</label>
                            <p className={styles.hint}>6 character input</p>
                            <input size="6" maxLength="6" className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Phone number</label>
                            <p className={styles.hint}>10 character input</p>
                            <input size="10" maxLength="10" className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>First name</label>
                            <p className={styles.hint}>50 character input</p>
                            <input size="50" maxLength="50" className={styles.input} />
                        </div>

                        <p>If we don't know the character count for an input, we should determine a default width. Some design systems set this to 100% of the container they're in.</p>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Unknown</label>
                            <p className={styles.hint}>Unknown character count</p>
                            <input size="51" maxLength="50" className={styles.inputFull} />
                        </div>

                        <p>We could decide on another percentage value if we want, I'm not sure what the best route to go is.</p>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Disabled Inputs</h2>
                        <p>It's always better to avoid disabling UI elements, but you might get into a situation where there's no other choice. In these cases, make sure the input receives focus as soon as it's enabled or activated.</p>

                        <label className={styles.label}>Disabled input</label>
                        <p className={styles.hint}>20 character input</p>
                        <input size="20" maxLength="20" className={styles.input} disabled />
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Error States</h2>
                        <p>If there's validation attached to our forms we also need to account for what an input looks like if it has not been filled out correctly.</p>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>With a hint message</label>
                            <p className={styles.hint}>10 character limit</p>
                            <input size="10" maxLength="10" className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelError}>With a hint message</label>
                            <p className={styles.hintError}>10 character limit</p>
                            <p className={styles.errorMessage}>This is an error message</p>
                            <input size="10" maxLength="10" className={styles.inputError} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelNoHint}>No hint message</label>
                            <input size="16" maxLength="16" className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelError}>No hint message</label>
                            <p className={styles.errorMessage}>This is an error message</p>
                            <input size="16" maxLength="16" className={styles.inputError} />
                        </div>

                        <p>These would work with an error summary at the top of the page that will have an anchor link pointing at each error in question.</p>
                    </section>

                </div>
            </main>

            <footer>
            </footer>
        </div>
    )
}
