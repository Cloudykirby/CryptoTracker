import styles from "./Search.module.css";

const Search = ({ ...rest }) => {
  return (
    <div className={styles.search}>
      <input className={styles.input} {...rest} />
    </div>
  );
};

export default Search;
