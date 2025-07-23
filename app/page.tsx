import Head from "next/head";
import styles from "../styles/Home.module.css";
import Comments from "./comments/layout";
import EnVDisplay from "./env-display/layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <EnVDisplay />
        <Comments />
      </main>
    </div>
  );
}
