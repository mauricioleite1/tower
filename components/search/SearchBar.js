import React, { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  getProfile,
  searchDestinyPlayer,
  searchByGlobalNamePrefix,
  getManifest,
} from '../../api';

import { searchBarNavOptions, commonText } from '../language';
import { UserPreferences } from '../../context/user';
import { PlayerContext } from '../../context/player';
import styles from '../../styles/components/_searchbar.module.scss';
import DetailedSearchBar from './DetailedSearchBar';
import LoadingDetailedSearchBar from './loadingState/LoadingDetailedSearchBar';


// import { PlayerContext, SearchContext } from '../../context';
// import SuggestionsList from './SuggestionList';

const SearchBar = ({ showSuggestions, setShowSuggestions }) => {
  const [showDetailedSearchBar, setShowDetailedSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState(null);
  const searchInput = useRef(null);
  const { language } = useContext(UserPreferences);
  const [bungieManifest, setBungieManifest] = useState(null);
  const [loading, setLoading] = useState(false);
  // const { searchSuggestions, setSearchSuggestions } = useContext(SearchContext);
  const { player, setPlayer } = useContext(PlayerContext);
  const [result, setResult] = useState(null);

  useEffect(() => searchInput.current.focus(), []);

  useEffect(
    () =>
      getManifest().then(async ({ Response }) =>
        setBungieManifest(Response.jsonWorldComponentContentPaths)
      ),
    []
  );

  useEffect(() => {
    if (searchTerm) {
      const delayDebounceFn = setTimeout(() => {
        searchByGlobalNamePrefix(searchTerm).then(({ Response }) => {
          setShowDetailedSearchBar(true);
          setResult(Response);
        });
      }, 700);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchTerm]);

  // const searchOnKey = async ({ key }) => {
  //   if (key === 'Enter') {
  //     searchDestinyPlayer(searchTerm.replace(/#|_|-|&/g, '%23')).then((a) => setTest(a))
  //   }
  // }

  // const handleKeyUp = async ({ key }) => {
  //   if (key === 'Enter') {
  //     searchDestinyPlayer(searchTerm.replace(/#|_|-|&/g, '%23'))
  //       .then(({ Response }) => {
  //         getProfile(Response[0].membershipId, Response[0].membershipType, Response)
  //         .then(async ({ Response }) => {
  //           const response = await fetch(`https://www.bungie.net${bungieManifest.Response.jsonWorldComponentContentPaths.en.DestinyClassDefinition}`);
  //           const response1 = await fetch(`https://www.bungie.net${bungieManifest.Response.jsonWorldComponentContentPaths.en.DestinyPresentationNodeDefinition}`);
  //           const response2 = await fetch(`https://www.bungie.net${bungieManifest.Response.jsonWorldComponentContentPaths.en.DestinyRecordDefinition}`);
  //           const responseActivity = await fetch(`https://www.bungie.net${bungieManifest.Response.jsonWorldComponentContentPaths.en.DestinyActivityDefinition}`);
  //           const responseActivityMode = await fetch(`https://www.bungie.net${bungieManifest.Response.jsonWorldComponentContentPaths.en.DestinyActivityModeDefinition}`);
  //           const responseInventoryItem = await fetch(`https://www.bungie.net${bungieManifest.Response.jsonWorldComponentContentPaths.en.DestinyInventoryItemDefinition}`);
  //           const responseStatDefinition = await fetch(`https://www.bungie.net${bungieManifest.Response.jsonWorldComponentContentPaths.en.DestinyStatDefinition}`);
  //           const responseProgDefinition = await fetch(`https://www.bungie.net${bungieManifest.Response.jsonWorldComponentContentPaths.en.DestinyProgressionDefinition}`);

  //           setPlayerData({
  //             ...Response,
  //             classes: await response.json(),
  //             presentation: await response1.json(),
  //             progression: await responseProgDefinition.json(),
  //             record: Object.values(await response2.json()),
  //             activity: await responseActivity.json(),
  //             activityModeDefinition: await responseActivityMode.json(),
  //             inventoryItems: await responseInventoryItem.json(),
  //             statDefinition: await responseStatDefinition.json(),
  //           })
  //         })
  //     })
  //   }
  // };

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

        <ion-icon name="search-outline" />
      </div>
      {/* { showSuggestions && searchSuggestions && <SuggestionsList bungieManifest={ bungieManifest } /> } */}
    </>
  );
};

export default SearchBar;
