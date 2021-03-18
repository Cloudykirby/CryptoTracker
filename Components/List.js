import Currency from "./Currency";

export default function Coinlist({ filter }) {
  return (
    <>
      {filter.map((coin) => {
        return (
          <Currency
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </>
  );
}
