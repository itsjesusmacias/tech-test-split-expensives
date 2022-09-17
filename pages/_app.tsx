import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";

import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Split bills</title>
        <meta
          name="description"
          content="App to track bills and other shared expenses"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/jmfelix/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Jesús 👨🏽‍💻
        </a>
      </footer>
    </div>
  );
}

export default MyApp;
