import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import SearchBar from '../components/search/SearchBar';
import styles from '../styles/index.module.scss'

const Landing = ({ showSuggestions, setShowSuggestions }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.hero}
          style={{ transform: `translateY(${offsetY * 0.8}px)` }}
        >
        </div>

        <SearchBar
          showSuggestions={showSuggestions}
          setShowSuggestions={setShowSuggestions}
        />
      </div>
    </>
  );
};

export default Landing;
