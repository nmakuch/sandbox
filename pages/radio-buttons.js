import Head from 'next/head'
import styles from '../styles/Inputs.module.css'

export default function RadioButtons() {
    return (
        <div>
            <Head>
                <title>Radio Buttons</title>
                <meta name="description" content="A space for testing Canada.ca Radio buttons" />
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
                        <h1>Radio Buttons</h1>
                        <p>Some radio button styles for proposal. Here we can test the interactive states together. Sometimes it's harder to visualize these things working together in figma.</p>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Radio button height/width</h2>
                        <p>To ensure we have an accessible touch target for our inputs on mobile, we should make sure they are 44px in height at a minimum. These are 40px x 40px plus a 2px border to equal 44px x 44px.</p>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Default</h2>
                        <fieldset>
                            <h3 className={styles.radiosLabel}>What type of accessibilty issues do you see most often?</h3>
                            <div class="wrapper">
                                <input id="a11y-issue-1a" name="a11y-issues1" type="radio" value="no-issues" />
                                <label for="a11y-issue-1a">There are no issues.</label>
                            </div>

                            <div class="wrapper">
                                <input id="a11y-issue-2a" name="a11y-issues1" type="radio" value="no-focus-styles" />
                                <label for="a11y-issue-2a">Focus styles are not present.</label>
                            </div>

                            <div class="wrapper">
                                <input id="a11y-issue-3a" name="a11y-issues1" type="radio" value="html-markup" />
                                <label for="a11y-issue-3a">HTML markup is used in a bizarre way. Also, what happens if the label text is very looooooooong, like this one?</label>
                            </div>
                        </fieldset>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>With Hint Message</h2>
                        <fieldset>
                            <h3 className={styles.radiosLabel}>What type of accessibilty issues do you see most often?</h3>
                            <p className="hint">Choose all the options that apply to you from the list below</p>
                            <div class="wrapper">
                                <input id="a11y-issue-1b" name="a11y-issues2" type="radio" value="no-issues" />
                                <label for="a11y-issue-1b">There are no issues.</label>
                            </div>

                            <div class="wrapper">
                                <input id="a11y-issue-2b" name="a11y-issues2" type="radio" value="no-focus-styles" />
                                <label for="a11y-issue-2b">Focus styles are not present.</label>
                            </div>

                            <div class="wrapper">
                                <input id="a11y-issue-3b" name="a11y-issues2" type="radio" value="html-markup" />
                                <label for="a11y-issue-3b">HTML markup is used in a bizarre way. Also, what happens if the label text is very looooooooong, like this one?</label>
                            </div>
                        </fieldset>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>With Error Message</h2>
                        <fieldset>
                            <h3 className={styles.radiosLabelError}>What type of accessibilty issues do you see most often?</h3>
                            <p className="hint-error">Choose all the options that apply to you from the list below</p>
                            <p className={styles.errorMessage}>You need to select at least one of the options</p>
                            <div class="wrapper">
                                <input className="error" id="a11y-issue-1c" name="a11y-issues3" type="radio" value="no-issues" />
                                <label className="error" for="a11y-issue-1c">There are no issues.</label>
                            </div>

                            <div class="wrapper">
                                <input className="error" id="a11y-issue-2c" name="a11y-issues3" type="radio" value="no-focus-styles" />
                                <label className="error" for="a11y-issue-2c">Focus styles are not present.</label>
                            </div>

                            <div class="wrapper">
                                <input className="error" id="a11y-issue-3c" name="a11y-issues3" type="radio" value="html-markup" />
                                <label className="error" for="a11y-issue-3c">HTML markup is used in a bizarre way. Also, what happens if the label text is very looooooooong, like this one?</label>
                            </div>
                        </fieldset>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Required</h2>
                        <fieldset>
                            <h3 className={styles.radiosLabelRequired}>What type of issues do you see most often?</h3>
                            <p className="hint">Choose all the options that apply to you from the list below</p>
                            <div class="wrapper">
                                <input id="a11y-issue-1d" name="a11y-issues" type="radio" value="no-issues" />
                                <label for="a11y-issue-1d">There are no issues.</label>
                            </div>

                            <div class="wrapper">
                                <input id="a11y-issue-2d" name="a11y-issues" type="radio" value="no-focus-styles" />
                                <label for="a11y-issue-2d">Focus styles are not present.</label>
                            </div>

                            <div class="wrapper">
                                <input id="a11y-issue-3d" name="a11y-issues" type="radio" value="html-markup" />
                                <label for="a11y-issue-3d">HTML markup is used in a bizarre way. Also, what happens if the label text is very looooooooong, like this one?</label>
                            </div>
                        </fieldset>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Disabled</h2>
                        <fieldset>
                            <h3 className={styles.radiosLabelDisabled}>What type of accessibilty issues do you see most often?</h3>
                            <p className="hint-disabled">Choose all the options that apply to you from the list below</p>
                            <div class="wrapper">
                                <input disabled id="a11y-issue-1c" name="a11y-issues6" type="radio" value="no-issues" />
                                <label for="a11y-issue-1c">There are no issues.</label>
                            </div>

                            <div class="wrapper">
                                <input disabled id="a11y-issue-2c" name="a11y-issues6" type="radio" value="no-focus-styles" />
                                <label for="a11y-issue-2c">Focus styles are not present.</label>
                            </div>

                            <div class="wrapper">
                                <input disabled id="a11y-issue-3c" name="a11y-issues6" type="radio" value="html-markup" />
                                <label for="a11y-issue-3c">HTML markup is used in a bizarre way. Also, what happens if the label text is very looooooooong, like this one?</label>
                            </div>
                        </fieldset>
                    </section>
                </div>
            </main>
            <footer>
            </footer>
        </div>
    )
}
