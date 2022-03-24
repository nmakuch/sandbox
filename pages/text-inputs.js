import Head from 'next/head'
import styles from '../styles/Inputs.module.css'

export default function Inputs() {
    return (
        <div>
            <Head>
                <title>Text Input</title>
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
                        <h1>Text Inputs</h1>
                        <p>Here are some text input styles for proposal. Here we can test the interactive states together. Sometimes it's harder to visualize these things working together in figma.</p>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Input height</h2>
                        <p>To ensure we have an accessible touch target for our inputs on mobile, we should make sure our inputs are 44px in height at a minimum. The inputs on this page (with padding) are 48px in height.</p>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Input widths</h2>
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

                        <p>
                            If we don't know the character count for an input, the input should span almost the entire container ~ 1 line of text. I've set it to 90% here.
                        </p>
                        <p>
                            Additionally we need to define how wide 1 line of text is.
                            A general rule for <a href="https://practicaltypography.com/line-length.html">line length</a> states that they 
                            should be somewhere between 45-90 characters are easier to read. Overly long lines of text are more cumbersome for the eye to track and lose some legibility.
                        </p>
                        <p>
                            I'm suggesting that in the future we limit our widths to somewhere between 70-80ch (characters can be used as a unit of measurement to set width)
                        </p>
                        <p>
                            If it's not possible to limit the container size, alternately, we could limit the text inputs themselves to 70-80ch and anything over that range would be appropriate for a textarea instead.
                        </p>
                        <p>
                            The container on this page is 75ch on desktop.
                        </p>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Unknown</label>
                            <p className={styles.hint}>Unknown character count</p>
                            <input size="51" maxLength="50" className={styles.inputFull} />
                        </div>

                        <p>We could also go with a different percentage or character count for these cases.</p>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Disabled Inputs</h2>
                        <p>It's always better to avoid disabling UI elements, but you might get into a situation where there's no other choice. In these cases, make sure the input receives focus as soon as it's enabled or provide users with some sort of feedback.</p>

                        <label className={styles.labelDisabled}>Disabled input</label>
                        <p className={styles.hintDisabled}>20 character input</p>
                        <input size="20" maxLength="20" className={styles.input} disabled />
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Error States</h2>
                        <p>If an error is triggered upon form submission, the label and input border should change to our danger colour.  Additionally, an error message should appear above the field with information on what went wrong.</p>
                        <p>Error message banner should span the width of the it's content for text inputs.</p>

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
                            <label className={styles.labelErrorNoHint}>No hint message</label>
                            <p className={styles.errorMessage}>This is an error message</p>
                            <input size="16" maxLength="16" className={styles.inputError} />
                        </div>

                        <p>These would work with an error summary at the top of the page that will have an anchor link pointing at each error in question.</p>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Required fields</h2>
                        <div className={styles.formGroup}>
                            <label className={styles.labelRequired}>Postal code</label>
                            <p className={styles.hint}>6 character input</p>
                            <input size="6" maxLength="6" className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelNoHintRequired}>No hint message</label>
                            <input size="16" maxLength="16" className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelErrorRequired}>With a hint message</label>
                            <p className={styles.hintError}>10 character limit</p>
                            <p className={styles.errorMessage}>This is an error message</p>
                            <input size="10" maxLength="10" className={styles.inputError} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelErrorRequired}>No hint message</label>
                            <p className={styles.errorMessage}>This is an error message</p>
                            <input size="16" maxLength="16" className={styles.inputError} />
                        </div>
                    </section>
                </div>
            </main>
            <footer>
            </footer>
        </div>
    )
}
