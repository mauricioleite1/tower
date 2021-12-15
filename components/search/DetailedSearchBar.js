import { useContext, useState, useEffect, useRef, useCallback } from 'react';
import { languageSearch } from '../language';
import { UserPreferences } from '../../context/user';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks.ts';
import Image from 'next/image';
import Suggestion from './Suggestion';
import styles from '../../styles/components/_detailedsearchbar.module.scss';
import { searchByGlobalNamePrefix } from '../../api';

const DetailedSearchBar = ({ searchTerm, result: { validProfiles, hasMore, page } }) => {
  const [updatedHasMore, setUpdatedHasMore] = useState(hasMore);
  const [results, setResults] = useState(validProfiles)
  const [nextPage, setNextPage] = useState(page + 1)
  const language = useAppSelector((state) => state.user.preferences.language);

  const handleClick = () => {
    searchByGlobalNamePrefix(searchTerm, nextPage).then(({ Response, Response: { searchResults, hasMore, page } }) => {
      console.log(searchResults)

      const validProfiles = searchResults.filter((result) => result.destinyMemberships.length > 0);
      if (hasMore) { setNextPage(nextPage + 1); }
      if (searchResults.length < 25) { setUpdatedHasMore(false); }

      setResults([...results, ...validProfiles]);

    }).catch(() => setUpdatedHasMore(false));

  }

  return (
    <>
      {searchTerm && validProfiles && (
        <section className={styles.container}>
          {validProfiles.length > 0 && <h6>{results.length > 1 ? `Showing ${results.length} results` : `The only result`} for <span>{searchTerm}</span></h6>}

          <div className={styles.search}>
            {validProfiles.length > 0 ? (
              <div className={styles.searchList}>
                {results.map((result, key) => (
                  <Suggestion
                    hasMore={updatedHasMore}
                    last={results.length === key + 1 ? true : false}
                    key={key}
                    setNextPage={setNextPage}
                    result={result}
                    func={handleClick}
                  />
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
{/* 
          <div className={styles.categories}>
            <h6>Categories</h6>
            <div>Weapons</div>
            <div>Activities</div>
          </div> */}
        </section>
      )}
    </>
  );
};

export default DetailedSearchBar;
