import React, { useState, useContext } from 'react';
import img from 'next/image';
import { BungieDataContext } from '../context/bungieData';
import styles from '../styles/components/_infocard.module.scss';

const InfoCard = ({ title, info, hash }) => {
  const { bungieData } = useContext(BungieDataContext);

  return (
    <div className={styles.container}>
      <img
        src={`https://www.bungie.net${bungieData.metricDefinition[hash].displayProperties.icon}`} 
        alt="p" 
      />
      <div>
        <h3>{info}</h3>
        <h6>{bungieData.metricDefinition[hash].displayProperties.name}</h6>
      </div>
    </div>
  );
};

export default InfoCard;
