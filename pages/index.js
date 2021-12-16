import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import SearchBar from '../components/search/SearchBar';
import styles from '../styles/index.module.scss';
import { BungieDataContext } from '../context/bungieData';
import { useAppSelector } from '../redux/app/hooks.ts';
import { getManifest } from '../api';

const Landing = ({ showSuggestions, setShowSuggestions }) => {
  const { setBungieData } = useContext(BungieDataContext);
  const [loading, setLoading] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const language = useAppSelector((state) => state.user.preferences.language);
  
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    getManifest().then(async ({ Response }) => {
      setLoading(true);
      const manifest = Response.jsonWorldComponentContentPaths[language];

      const responseActivityDefinition = await fetch(`https://www.bungie.net${manifest.DestinyActivityDefinition}`);
      const responseActivityModeDefinition = await fetch(`https://www.bungie.net${manifest.DestinyActivityModeDefinition}`);
      const responseClassDefinition = await fetch(`https://www.bungie.net${manifest.DestinyClassDefinition}`);
      const responseInventoryItemDefinition = await fetch(`https://www.bungie.net${manifest.DestinyInventoryItemDefinition}`);
      const responseMetricDefinition = await fetch(`https://www.bungie.net${manifest.DestinyMetricDefinition}`);
      const responsePresentationNodeDefinition = await fetch(`https://www.bungie.net${manifest.DestinyPresentationNodeDefinition}`);
      const responseProgressionDefinition = await fetch(`https://www.bungie.net${manifest.DestinyProgressionDefinition}`);
      const responseRecordDefinition = await fetch(`https://www.bungie.net${manifest.DestinyRecordDefinition}`);
      const responseStatDefinition = await fetch(`https://www.bungie.net${manifest.DestinyStatDefinition}`);

      setBungieData({
        manifest,
        activityDefinition: await responseActivityDefinition.json(),
        activityModeDefinition: await responseActivityModeDefinition.json(),
        classDefinition: await responseClassDefinition.json(),
        inventoryItemsDefinition: await responseInventoryItemDefinition.json(),
        metricDefinition: await responseMetricDefinition.json(),
        presentationNodeDefinition: await responsePresentationNodeDefinition.json(),
        progressionDefinition: await responseProgressionDefinition.json(),
        recordDefinition: Object.values(await responseRecordDefinition.json()),
        statDefinition: await responseStatDefinition.json(),
      });

      setLoading(false);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.hero}
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      ></div>

      {/* { loading && <h5>Fetching data from bungie</h5> } */}

      {loading && (
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            position: 'absolute',
            top: '0',
            right: '100px',
            color: 'white',
          }}
        >
          <h6>Loading data from Bungie </h6>
          
        </div>
      )}

      <SearchBar
        showSuggestions={showSuggestions}
        setShowSuggestions={setShowSuggestions}
      />
    </div>
  );
};

export default Landing;
