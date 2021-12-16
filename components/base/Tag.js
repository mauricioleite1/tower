import React from 'react';
// import { bgColor } from '../context/auxiliarData';
import styles from '../../styles/components/_tag.module.scss';

const Tag = ({ shownInfo, title = null, decimals = 0, width = '60px' }) => {
  // const { victory, defeat, neutral } = bgColor;

  const bgColorTag = () => {
    switch (shownInfo) {
      case 'Victory': return 'rgba(10, 100, 10, 0.2)';
      case 'Completed': return 'rgba(200, 0, 200, 0.2)';
      case 'Defeat': return 'rgba(250, 10, 50, 0.2)';
      default: return;
    }    
  }

  return (
    <div
      className={styles.container}
      style={{ justifyContent: !title && 'center', background: bgColorTag(), fontSize: !title && '10px' }}
    >
      { title && <h5>{ title }</h5> }
      <span>{ typeof shownInfo === 'number' ? shownInfo.toFixed(decimals) : shownInfo }</span>
    </div>
  );
};

export default Tag;
