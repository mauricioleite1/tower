import React, { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  getProfileSearch,
  searchDestinyPlayer,
  searchByGlobalNamePrefix,
  getManifest,
  getLinkedProfile,
} from '../../api';

import { searchBarNavOptions, commonText } from '../language';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks.ts';
import { UserPreferences } from '../../context/user';
import { PlayerContext } from '../../context/player';
import styles from '../../styles/components/_searchbar.module.scss';
import DetailedSearchBar from './DetailedSearchBar';
import LoadingDetailedSearchBar from './loadingState/LoadingDetailedSearchBar';

const SearchBar = ({ showSuggestions, setShowSuggestions }) => {
  const language = useAppSelector((state) => state.user.preferences.language);
  const [showDetailedSearchBar, setShowDetailedSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [validResults, setValidResults] = useState([]);
  const searchInput = useRef(null);
  const [loading, setLoading] = useState(false);
  // const { searchSuggestions, setSearchSuggestions } = useContext(SearchContext);
  const { player, setPlayer } = useContext(PlayerContext);
  const [results, setResults] = useState(null);

  useEffect(() => searchInput.current.focus(), []);

  useEffect(() => {
    if (searchTerm) {
      const delayedSearch = setTimeout(() => {
        searchByGlobalNamePrefix(searchTerm).then(({ Response }) => {
          setResults(Response);
          setShowDetailedSearchBar(true);
        });
      }, 750);

      return () => clearTimeout(delayedSearch);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (results) {
      const validResults = results.searchResults.filter(
        (result) => result.destinyMemberships.length > 0
      );

      setValidResults(validResults)
   
        // getLinkedProfile(membershipId, membershipType).then(
        //   ({ Response: { profiles } }) => {
        //     if (profiles.length > 0) {
        //       const sortedProfilesByDate = profiles.sort(
        //         (a, b) =>
        //           new Date(b.dateLastPlayed) - new Date(a.dateLastPlayed)
        //       );

        //       const mostRecentProfile = sortedProfilesByDate[0];
        //       const { membershipId, membershipType } = mostRecentProfile;

        //       getProfileSearch(membershipId, membershipType).then(
        //         ({ Response: { characters } }) => {
        //           const charactersArray = Object.values(characters.data);
        //           const validProfile = charactersArray.find(
        //             (profile) =>
        //               profile.dateLastPlayed ===
        //               mostRecentProfile.dateLastPlayed
        //           );

        //         }
        //       );
        //     }
        //   }
        // );
      // });
    }
  }, [results]);

  return (
    <div className={styles.container}>
      <DetailedSearchBar searchTerm={searchTerm} results={validResults} />

      <div className="hero-searchbar__inputnav">
        <input
          ref={searchInput}
          type="text"
          placeholder={commonText.search[language]}
          id="searchInput"
          onChange={({ target: { value } }) => setSearchTerm(value)}
          onClick={() => setShowDetailedSearchBar(!showDetailedSearchBar)}
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
  );
};

export default SearchBar;
