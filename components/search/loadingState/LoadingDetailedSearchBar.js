import { useContext } from 'react';
// import { UserPreferences } from '../../context/user';
import Image from 'next/image';
// import Suggestion from './Suggestion';
import styles from '../../../styles/components/_detailedsearchbar.module.scss';


const DetailedSearchBar = ({ searchTerm, result }) => {
  return (
    <section className={styles.container}>
      {!searchTerm ? (
        <h6>Recent Search</h6>
      ) : result && result.searchResults.length >= 1 && (
        <h6>
          All results for <span>{searchTerm}</span>
        </h6>
      ) }
      <div className={styles.search}>
        <div className={styles.searchList}>
          <div className={styles.loading}></div>
          <div className={styles.loading}></div>
          <div className={styles.loading}></div>
          <div className={styles.loading}></div>
          <div className={styles.loading}></div>
          <div className={styles.loading}></div>
          <div className={styles.loading}></div>
          <div className={styles.loading}></div>
          <div className={styles.loading}></div>
          <div className={styles.loading}></div>
        </div>
      </div>

      {/* <div className={styles.categories}>
        <h6>Categories</h6>
        <div>Weapons</div>
        <div>Activities</div>
        <div>Maps</div>
        <div>Triumphs</div>
      </div> */}
    </section>
  );
};

export default DetailedSearchBar;
