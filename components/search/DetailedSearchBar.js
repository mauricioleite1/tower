import styles from '../../styles/components/_detailedsearchbar.module.scss';
import Suggestion from './Suggestion';

const DetailedSearchBar = ({ searchTerm, result }) => {
  return (
    <section className={styles.container}>
      <div className={styles.search}>
        { !searchTerm ? <h6>Recent Search</h6> : <h6>All results for <span>{searchTerm}</span></h6> }
        <div className={styles.searchList}>
          { result && result.searchResults.map((result, key) => (
            <Suggestion key={key} result={result} />
          )) }
        </div>
      </div>
      <div className={styles.categories}>
        {/* <h6>Categories</h6> */}
        <div>Weapons</div>
        <div>Activities</div>
        <div>Maps</div>
        <div>Triumphs</div>
      </div>
    </section>
  );
}

export default DetailedSearchBar;