import React, { useState, useContext } from 'react';
import { BungieDataContext } from '../context/bungieData';
import styles from '../styles/components/_infocard.module.scss';

const InfoCard = ({ title, info, hash = null }) => {
  const { bungieData } = useContext(BungieDataContext);

  return (
    <div className={styles.container}>
      { hash && <img
        src={`https://www.bungie.net${bungieData.metricDefinition[hash].displayProperties.icon}`} 
        alt="p" 
      />}
      <div>
        <h3>{info.toLocaleString()}</h3>
        <h6>{title}</h6>
      </div>
    </div>
  );
};

export default InfoCard;
