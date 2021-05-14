import React from "react";
import styles from "./currency.module.css";
import Link from "next/link";

const Currency = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) => {
  console.log(name);
  return (
    <Link href="/currency/[id]" as={`/currency/${id}`}>
      <a>
        <div className={styles.currency_container}>
          <div className={styles.currency_row}>
            <div className={styles.currency}>
              <img src={image} alt={name} className={styles.currency_img} />
              <h1 className={styles.currency_name}> {name}</h1>
              <p className={styles.currency_symbol}> {symbol}</p>
            </div>
            <div className={styles.currency_data}>
              <p className={styles.price}>${price}</p>
              <p className={styles.volume}>${volume.toLocaleString()}</p>
              {priceChange < 0 ? (
                <p className={styles.currency_positive}>
                  {priceChange.toFixed(2)}%
                </p>
              ) : (
                <p className={styles.currency_negative}>
                  {priceChange.toFixed(2)}%
                </p>
              )}
              <p className={styles.currency_marketcap}>
                {marketcap.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Currency;
