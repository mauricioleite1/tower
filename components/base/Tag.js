import React from 'react';
// import { bgColor } from '../context/auxiliarData';
import styles from '../../styles/components/_tag.module.scss';

const Tag = ({ shownInfo, title = null, decimals = 0, width = '60px' }) => {
  // const { victory, defeat, neutral } = bgColor;

  // const bgColorTag = () => {
  //   switch (shownInfo) {
  //     case 'Victory': return victory;
  //     case 'Defeat': return defeat;

  //     default: return neutral;
  //   }    
  // }

  return (
    <div 
      className={styles.container}
      // style={{ backgroundColor: title === '#' || title === 'score' ? 'rgba(0 0 0 / 0.3)' : bgColorTag(), width }}
    >
      <h5>{ title }</h5>
      <span>{ typeof shownInfo === 'number' ? shownInfo.toFixed(decimals) : shownInfo }</span>
    </div>
  );
};

export default Tag;
