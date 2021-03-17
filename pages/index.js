import Head from "next/head";
import Search from "../Components/Search";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello WOrld</h1>
      <h2>testing</h2>
      <Search type="text" placeholder="Search" />
    </div>
  );
}
