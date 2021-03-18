import Head from "next/head";
import Currency from "../Components/Currency";
import Search from "../Components/Search";
import styles from "../styles/Home.module.css";
import List from "../Components/List";

export default function Home({ filter }) {
  // console.log(filter);
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello WOrld</h1>
      <h2>testing</h2>
      <Search type="text" placeholder="Search" />
      <List filter={filter} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );
  const filter = await res.json();
  return {
    props: {
      filter,
    },
  };
};
