import React from 'react';
import styles from '../../styles/components/_medal.module.scss';

const Medal = ({ title }) => {
  return (
    <div className={styles.container}>
      <h5>{ title }</h5>
    </div>
  )
}

export default Medal
