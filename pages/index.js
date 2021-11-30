import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import SearchBar from '../components/search/SearchBar';
import styles from '../styles/index.module.scss';
import { useAppDispatch, useAppSelector } from '../redux/app/hooks.ts';
import { manifest } from '../redux/bungieDataSlice';
import { getManifest } from '../api';

const Landing = ({ showSuggestions, setShowSuggestions }) => {
  const dispatch = useAppDispatch();
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(
    () =>
      getManifest().then(async ({ Response }) => dispatch(manifest(Response))),
    []
  );

  return (
    <div className={styles.container}>
      <div
        className={styles.hero}
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      ></div>

      <SearchBar
        showSuggestions={showSuggestions}
        setShowSuggestions={setShowSuggestions}
      />
    </div>
  );
};

export default Landing;
