import { useContext, useEffect } from 'react';
import { languageSearch } from '../language';
import { UserPreferences } from '../../context/user';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks.ts';
import Image from 'next/image';
import Link from 'next/link';
import Suggestion from './Suggestion';
import styles from '../../styles/components/_detailedsearchbar.module.scss';

const DetailedSearchBar = ({ searchTerm, results }) => {
  const language = useAppSelector((state) => state.user.preferences.language);

  // console.log(result);

  return (
    <>
      {searchTerm && (
        <section className={styles.container}>
          <h6>All results for <span>{searchTerm}</span></h6>

          <div className={styles.search}>
            {results && results.searchResults.length !== 0 ? (

              <div className={styles.searchList}>
                { results &&
                  results.searchResults.map((result, key) => (
                      <Suggestion key={key} results={results} />
                  ))}
              </div>

            ) : (

              <div className={styles.notFoundImage}>
                <Image
                  src="/images/ghost.jpg"
                  alt="no results ghost"
                  height="100px"
                  width="100px"
                />
                <h5>{languageSearch[language].cantfind}</h5>
                <h5>{languageSearch[language].canyoutry}</h5>
              </div>
              
            )}
          </div>

          {/* <div className={styles.categories}>
        <h6>Categories</h6>
        <div>Weapons</div>
        <div>Activities</div>
        <div>Maps</div>
        <div>Triumphs</div>
      </div> */}
        </section>
      )}
    </>
  );
};

export default DetailedSearchBar;
