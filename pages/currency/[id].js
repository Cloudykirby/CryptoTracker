import React from "react";
import Link from "next/link";
import Coinlist from "../../Components/List";
import styles from "./Currency.module.css";

const Currency = ({ currency }) => {
  return (
    <div className={styles.currency_container}>
      <Link href="/">
        <a>
          <h1 className={styles.currency_page}>Crypto Tracker</h1>
        </a>
      </Link>
      {/* <div className={styles.currency_container}> */}
      <img
        src={currency.image.large}
        alt={currency.name}
        className={styles.currency_img}
      />
      <h1 className={styles.currency_name}>{currency.name}</h1>
      <p className={styles.currency_symbol}>{currency.symbol}</p>
      <p className={styles.currency_current}>
        {currency.market_data.current_price.usd}
      </p>
    </div>
    // </div>
  );
};

export default Currency;

export async function getServerSideProps(context) {
  const { id } = context.query;
  console.log(id);
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const data = await res.json();

  return {
    props: {
      currency: data,
    },
  };
}
