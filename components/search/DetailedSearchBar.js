import styles from '../../styles/components/_detailedsearchbar.module.scss';
import Suggestion from './Suggestion';
import Image from 'next/image';

const DetailedSearchBar = ({ searchTerm, result }) => {
  return (
    <section className={styles.container}>
      <div className={styles.search}>
        {!searchTerm ? (
          <h6>Recent Search</h6>
        ) : result && result.searchResults.length >= 1 && (
          <h6>
            All results for <span>{searchTerm}</span>
          </h6>
        ) }

        { result && result.searchResults.length >= 1 ? (
        <div className={styles.searchList}>
          {result &&
            result.searchResults.map((result, key) => (
              <Suggestion key={key} result={result} />
            ))}
        </div> )
        : (
          <div className={styles.notFoundImage}>
            <Image
              src="/images/ghost.jpg"
              alt="no results ghost"
              height="100px"
              width="100px"
            />
            <h6>Can't find what you wanted, Guardian.</h6>
            <h6>Can you try again?</h6>

          </div>
        ) }
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
