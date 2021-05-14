import Head from "next/head";
import Currency from "../Components/Currency";
import Search from "../Components/Search";
import styles from "../styles/Home.module.css";
import List from "../Components/List";

import { useState } from "react";
import Link from "next/link";
import Router from "next/router";

export default function Home({ filtered, page }) {
  const [search, setSearch] = useState("");
  const [statePage, setPage] = useState("");
  const allCurrency = filtered.filter((currency) =>
    currency.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };
  const addPage = () => {
    page++;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Crypto Tracker</h1>

      <Search type="text" placeholder="Search" onChange={handleChange} />
      <List filter={allCurrency} />

      <button onClick={addPage}>></button>
    </div>
  );
}

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`
  );
  const filtered = await res.json();
  return {
    props: {
      filtered,
      page: parseInt(page, 10),
    },
  };
};
