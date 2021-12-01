import React, { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  getProfile,
  searchDestinyPlayer,
  searchByGlobalNamePrefix,
  getManifest,
} from '../../api';

import { searchBarNavOptions, commonText } from '../language';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks.ts';
import { UserPreferences } from '../../context/user';
import { PlayerContext } from '../../context/player';
import styles from '../../styles/components/_searchbar.module.scss';
import DetailedSearchBar from './DetailedSearchBar';
import LoadingDetailedSearchBar from './loadingState/LoadingDetailedSearchBar';


// import { PlayerContext, SearchContext } from '../../context';
// import SuggestionsList from './SuggestionList';

const SearchBar = ({ showSuggestions, setShowSuggestions }) => {
  const language = useAppSelector((state) => state.user.preferences.language);
  const [showDetailedSearchBar, setShowDetailedSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInput = useRef(null);
  const [bungieManifest, setBungieManifest] = useState(null);
  const [loading, setLoading] = useState(false);
  // const { searchSuggestions, setSearchSuggestions } = useContext(SearchContext);
  const { player, setPlayer } = useContext(PlayerContext);
  const [result, setResult] = useState(null);

  useEffect(() => searchInput.current.focus(), []);

  useEffect(() => {
    if (searchTerm) {
      const delayedSearch = setTimeout(() => {
        searchByGlobalNamePrefix(searchTerm).then(({ Response }) => {
          setResult(Response);
          setShowDetailedSearchBar(true);
        });
      }, 500);

      return () => clearTimeout(delayedSearch);
    }
  }, [searchTerm]);

  return (
    <>
      <div className={styles.container}>
        { showDetailedSearchBar && (
          <DetailedSearchBar
            searchTerm={searchTerm}
            result={result}
          />
        ) }
        {/* <Link to="/crucible"> */}
        <div className="hero-searchbar__inputnav">
          <input
            ref={searchInput}
            type="text"
            placeholder={commonText.search[language]}
            id="searchInput"
            onChange={({ target: { value } }) => setSearchTerm(value)}
            onClick={() => setShowDetailedSearchBar(!showDetailedSearchBar)}
            // onKeyUp={searchOnKey}
            autoComplete="off"
          />

          <nav>
            {searchBarNavOptions[language].map(({ href, title }, key) => (
              <Link key={key} href={href} passHref={true}>
                <h4>{title}</h4>
              </Link>
            ))}
          </nav>
        </div>

        <ion-icon className={styles.searchButton} name="search-outline" />
      </div>
      {/* { showSuggestions && searchSuggestions && <SuggestionsList bungieManifest={ bungieManifest } /> } */}
    </>
  );
};

export default SearchBar;
