import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Inputs.module.css'

export default function Select() {
    return (
        <div>
            <Head>
                <title>Select Component</title>
                <meta name="description" content="Testing a select component" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
            <header className={styles.InputsHeader}>
                <div className={styles.container}>
                    <a className="back" href="/">Go back</a>
                </div>
            </header>

            <main className={styles.InputsMain}>
                <div className={styles.container}>
                    <section className={styles.InputsSection}>
                        <h1>Select component</h1>
                        <p>Some select styles for proposal. Here we can test the interactive states together. Sometimes it's harder to visualize these things working together in figma.</p>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Select height/width</h2>
                        <p>To ensure we have an accessible touch target for our selects, we should make sure they are 44px in height at a minimum. We also want to make sure that the selects's width is equal to the width of the longest option available from the list. You can see in the default example below that the width of a select to choose a province, is the length of it's longest option, "Newfoundland and Labrador".</p>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Default</h2>
                        <div className={styles.formGroup}>
                            <label className={styles.label} for="province-selection">
                                Province/territory
                            </label>
                            <p className={styles.hint}>6 character input</p>
                            <select required className={styles.select} id="province-selection" name="province-selection">
                                <option value="">Select a provice</option>
                                <option value="AB">Alberta</option>
                                <option value="BC">British Columbia</option>
                                <option value="MB">Manitoba</option>
                                <option value="NB">New Brunswick</option>
                                <option value="NL">Newfoundland and Labrador</option>
                                <option value="NS">Nova Scotia</option>
                                <option value="ON">Ontario</option>
                                <option value="PE">Prince Edward Island</option>
                                <option value="QC">Quebec</option>
                                <option value="SK">Saskatchewan</option>
                                <option value="NT">Northwest Territories</option>
                                <option value="NU">Nunavut</option>
                                <option value="YT">Yukon</option>
                            </select>
                        </div>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Error</h2>
                        <div className={styles.formGroup}>
                            <label className={styles.labelError} for="province-selection">
                                Province/territory
                            </label>
                            <p className={styles.hintError}>6 character input</p>
                            <p className={styles.errorMessage}>This is an error message</p>
                            <select required className={styles.selectError} id="province-selection" name="province-selection">
                                <option value="">Select a provice</option>
                                <option value="AB">Alberta</option>
                                <option value="BC">British Columbia</option>
                                <option value="MB">Manitoba</option>
                                <option value="NB">New Brunswick</option>
                                <option value="NL">Newfoundland and Labrador</option>
                                <option value="NS">Nova Scotia</option>
                                <option value="ON">Ontario</option>
                                <option value="PE">Prince Edward Island</option>
                                <option value="QC">Quebec</option>
                                <option value="SK">Saskatchewan</option>
                                <option value="NT">Northwest Territories</option>
                                <option value="NU">Nunavut</option>
                                <option value="YT">Yukon</option>
                            </select>
                        </div>
                    </section>

                    <section className={styles.InputsSection}>
                        <h2>Disabled</h2>
                        <div className={styles.formGroup}>
                            <label className={styles.labelDisabled} for="province-selection">
                                Province/territory
                            </label>
                            <p className={styles.hintDisabled}>6 character input</p>
                            <select disabled className={styles.select} id="province-selection" name="province-selection">
                                <option value="">Select a provice</option>
                                <option value="AB">Alberta</option>
                                <option value="BC">British Columbia</option>
                                <option value="MB">Manitoba</option>
                                <option value="NB">New Brunswick</option>
                                <option value="NL">Newfoundland and Labrador</option>
                                <option value="NS">Nova Scotia</option>
                                <option value="ON">Ontario</option>
                                <option value="PE">Prince Edward Island</option>
                                <option value="QC">Quebec</option>
                                <option value="SK">Saskatchewan</option>
                                <option value="NT">Northwest Territories</option>
                                <option value="NU">Nunavut</option>
                                <option value="YT">Yukon</option>
                            </select>
                        </div>
                    </section>
                </div>
            </main>
            <footer>
            </footer>
        </div>
    )
}
