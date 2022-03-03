import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Skip.module.css'

export default function Skip() {
    return (
        <div>
            <Head>
                <title>Skip to content</title>
                <meta name="description" content="Testing a skip to content component" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
            <a tabIndex="0" href="#maincontent" className={styles.skip}>Skip to content</a>
            <header className={styles.header}>
                <section className={styles.language}>Francais</section>
                <div className={styles.fipContainer}>
                    <Image src="/sig-blk-en.svg" width="360px" height="33.6px" />
                    <form className={styles.search}>
                        <input className={styles.input} id="name" placeholder="Search Canada.ca" type="text" autocomplete="name" required />
                        <button className={styles.searchSubmit} type="submit"><Image src="/mag.svg" height="50px" width="50px" /></button>
                    </form>
                </div>
                <nav className={styles.nav}>
                    <div className={styles.container}>
                        <button>
                            <span>MENU</span>
                            <span className="fa fa-chevron-down" style={{ fontSize: "0.7em" }}></span>
                        </button>
                    </div>
                </nav>
            </header>

            <main id="maincontent">
                <div className={styles.container}>
                    <h1 className={styles.canadaH1}>Testing a skip to content button</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit orci nibh, et ullamcorper dolor commodo eu. Integer tristique egestas lacus ut pharetra. Etiam quis urna vel lorem congue fermentum at egestas lacus. Phasellus dictum eget orci nec tempus. Nullam pretium cursus erat ut sodales. Aliquam dignissim purus ut enim tristique, consectetur tempor massa pharetra. Fusce eu tincidunt metus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit orci nibh, et ullamcorper dolor commodo eu. Integer tristique egestas lacus ut pharetra. Etiam quis urna vel lorem congue fermentum at egestas lacus. Phasellus dictum eget orci nec tempus. Nullam pretium cursus erat ut sodales. Aliquam dignissim purus ut enim tristique, consectetur tempor massa pharetra. Fusce eu tincidunt metus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit orci nibh, et ullamcorper dolor commodo eu. Integer tristique egestas lacus ut pharetra. Etiam quis urna vel lorem congue fermentum at egestas lacus. Phasellus dictum eget orci nec tempus. Nullam pretium cursus erat ut sodales. Aliquam dignissim purus ut enim tristique, consectetur tempor massa pharetra. Fusce eu tincidunt metus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit orci nibh, et ullamcorper dolor commodo eu. Integer tristique egestas lacus ut pharetra. Etiam quis urna vel lorem congue fermentum at egestas lacus. Phasellus dictum eget orci nec tempus. Nullam pretium cursus erat ut sodales. Aliquam dignissim purus ut enim tristique, consectetur tempor massa pharetra. Fusce eu tincidunt metus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit orci nibh, et ullamcorper dolor commodo eu. Integer tristique egestas lacus ut pharetra. Etiam quis urna vel lorem congue fermentum at egestas lacus. Phasellus dictum eget orci nec tempus. Nullam pretium cursus erat ut sodales. Aliquam dignissim purus ut enim tristique, consectetur tempor massa pharetra. Fusce eu tincidunt metus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit orci nibh, et ullamcorper dolor commodo eu. Integer tristique egestas lacus ut pharetra. Etiam quis urna vel lorem congue fermentum at egestas lacus. Phasellus dictum eget orci nec tempus. Nullam pretium cursus erat ut sodales. Aliquam dignissim purus ut enim tristique, consectetur tempor massa pharetra. Fusce eu tincidunt metus.</p>
                </div>
            </main>

            <footer>
            </footer>
        </div>
    )
}
