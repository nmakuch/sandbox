import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Inputs.module.css'

export default function Inputs() {
    return (
        <div>
            <Head>
                <title>Textareas</title>
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
                        <h1>Textareas</h1>
                        <p>Here are some textarea styles for proposal. Here we can test the interactive states together. Sometimes it's harder to visualize these things working together in figma.</p>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Input width</h2>
                        <p>Textareas can take up 100% of the form's width if it's fairly narrow (and we should set them to 100% width by default), but it could also be set to a percentage value like 75% if the form is really wide. See the example below</p>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Textarea full width</label>
                            <p className={styles.hint}>The container on this page is too wide</p>
                            <textarea className={styles.textarea} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Textarea 3/4 width</label>
                            <p className={styles.hint}>Set the textarea width to 75%</p>
                            <textarea className={styles.textarea75} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelRequired}>Textarea 1/2 width</label>
                            <p className={styles.hint}>Set the textarea width to 50%</p>
                            <textarea className={styles.textarea50} />
                        </div>

                        <p>Not sure if there are varying page widths on Canada.ca sites, but from what I've seen most forms are pretty wide.</p>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Input height</h2>
                        <p>Make the height of a textarea proportional to the amount of text you expect users to enter. You can set the height of a textarea by by specifying the rows attribute.</p>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>I want a taller textarea (full width)</label>
                            <p className={styles.hint}>Rows has been set to 4</p>
                            <textarea rows="4" className={styles.textarea} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>I want a taller textarea (3/4 width)</label>
                            <p className={styles.hint}>Rows has been set to 5</p>
                            <textarea rows="5" className={styles.textarea75} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelRequired}>I was a taller textarea (3/4 width)</label>
                            <p className={styles.hint}>Rows has been set to 6</p>
                            <textarea rows="6" className={styles.textarea50} />
                        </div>

                        <p> </p>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Error state</h2>

                        <div className={styles.formGroup}>
                            <label className={styles.labelNoHint}>Error with no hint</label>
                            <textarea rows="5" className={styles.textarea50} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelError}>Error with no hint</label>
                            <p className={styles.errorMessage}>This error message is as wide as the textarea</p>
                            <textarea rows="5" className={styles.textareaError50} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Error with hint</label>
                            <p className={styles.hint}>Set the textarea width to 75%</p>
                            <textarea rows="3" className={styles.textarea75} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelError}>Error with hint</label>
                            <p className={styles.hintError}>Set the textarea width to 75%</p>
                            <p className={styles.errorMessage}>This error message is as wide as the textarea</p>
                            <textarea rows="3" className={styles.textareaError75} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelRequired}>Textarea 1/2 width</label>
                            <p className={styles.hint}>Set the textarea width to 50%</p>
                            <textarea rows="3" className={styles.textarea50} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelErrorRequired}>Textarea 1/2 width</label>
                            <p className={styles.hintError}>Set the textarea width to 50%</p>
                            <textarea rows="3" className={styles.textareaError50} />
                        </div>

                        <p> </p>
                    </section>
                </div>
            </main>
        </div>
    )
}
