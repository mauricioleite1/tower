import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { getActivityHistory } from '../../../api';
import { BungieDataContext } from '../../../context/bungieData';
import { useAppSelector, useAppDispatch } from '../../../redux/app/hooks.ts';
import { activities } from '../../../redux/userSlice';

import styles from '../../../styles/components/profile/character/_character.module.scss'

const Character = ({ characterId, emblemBackgroundPath, classHash, light }) => {
  const { bungieData } = useContext(BungieDataContext);
  const dispatch = useAppDispatch();
  const activitiesPerCharacter = useAppSelector((state) => state.activities);

  const router = useRouter();
  const { id, type } = router.query;

  const handleClick = () => {
    getActivityHistory(characterId, id, type)
      .then(({ Response }) => dispatch(activities([...Response.activities])));
  }

  return (
    <div
      className={styles.container}
      onClick={handleClick}
      style={{
        backgroundImage: `url(https://www.bungie.net${emblemBackgroundPath})`,
      }}
    >
      <div>
        <h3>{bungieData.classDefinition[classHash].displayProperties.name}</h3>
        <h3>{light}</h3>
      </div>
    </div>
  )
}

export default Character
