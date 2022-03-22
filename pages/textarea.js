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
                        <p>In order to avoid overly long input lengths we should try to limit the width of a form to about 70-80 characters (define width using ch) in the future or we'll have inputs that are too long. I'm basing this off of some general rules for <a href="https://practicaltypography.com/line-length.html">line length</a>. A nice legible line should be between 45-90 characters. The current container of this page is set to 75ch on desktop.</p>
                        <p>Default textareas will be 100% the container width. Alternatively you can set the width to a percentage value but I wouldn't suggest setting it lower than 50%.</p>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Textarea full width</label>
                            <p className={styles.hint}>Hint: Textarea is 100% width by default</p>
                            <textarea className={styles.textarea} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Textarea 3/4 width</label>
                            <p className={styles.hint}>Hint: Set the textarea width to 75%</p>
                            <textarea className={styles.textarea75} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelRequired}>Textarea 1/2 width</label>
                            <p className={styles.hint}>Hint: Set the textarea width to 50%</p>
                            <textarea className={styles.textarea50} />
                        </div>

                        <p></p>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Input height</h2>
                        <p>Make the height of a textarea proportional to the amount of text you expect users to enter. You can set the height of a textarea by by specifying the rows attribute.</p>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>I want a taller textarea (full width)</label>
                            <p className={styles.hint}>Hint: Rows has been set to 4</p>
                            <textarea rows="4" className={styles.textarea} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>I want a taller textarea (3/4 width)</label>
                            <p className={styles.hint}>Hint: Rows has been set to 5</p>
                            <textarea rows="5" className={styles.textarea75} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelRequired}>I want a taller textarea (1/2 width)</label>
                            <p className={styles.hint}>Hint: Rows has been set to 6</p>
                            <textarea rows="6" className={styles.textarea50} />
                        </div>

                        <p> </p>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Disabled textareas</h2>
                        <p>It's always better to avoid disabling UI elements, but you might get into a situation where there's no other choice. In these cases, make sure the textarea receives focus as soon as it's enabled or provide users with some sort of feedback that it's been enabled.</p>
                        <div className={styles.formGroup}>
                            <label className={styles.labelDisabled}>Disabled textarea</label>
                            <p className={styles.hintDisabled}>Hint: this textarea is disabled</p>
                            <textarea rows="6" className={styles.textarea50} disabled />
                        </div>
                        <p></p>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Error state</h2>

                        <div className={styles.formGroup}>
                            <label className={styles.labelNoHint}>Error with no hint</label>
                            <textarea rows="3" className={styles.textarea75} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelError}>Error with no hint</label>
                            <p className={styles.errorMessage75}>This is an error message</p>
                            <textarea rows="3" className={styles.textareaError75} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Error with hint</label>
                            <p className={styles.hint}>Hint: Set the textarea width to 75%</p>
                            <textarea rows="3" className={styles.textarea75} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelError}>Error with hint</label>
                            <p className={styles.hintError}>Hint: Set the textarea width to 75%</p>
                            <p className={styles.errorMessage75}>This is an error message</p>
                            <textarea rows="3" className={styles.textareaError75} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelRequired}>Textarea 1/2 width</label>
                            <p className={styles.hint}>Hint: Set the textarea width to 50%</p>
                            <textarea rows="3" className={styles.textarea50} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.labelErrorRequired}>Textarea 1/2 width</label>
                            <p className={styles.hintError}>Set the textarea width to 50%</p>
                            <p className={styles.errorMessage50}>This is an error message</p>
                            <textarea rows="3" className={styles.textareaError50} />
                        </div>

                        <p> </p>
                    </section>
                </div>
            </main>
        </div>
    )
}
