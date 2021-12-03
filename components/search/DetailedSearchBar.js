import { useContext, useEffect } from 'react';
import { languageSearch } from '../language';
import { UserPreferences } from '../../context/user';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks.ts';
import Image from 'next/image';
import Link from 'next/link';
import Suggestion from './Suggestion';
import styles from '../../styles/components/_detailedsearchbar.module.scss';

const DetailedSearchBar = ({ searchTerm, results }) => {
  const language = useAppSelector((state) => state.user.preferences.language);

  console.log(results);

  return (
    <div className={styles.notFoundImage}>
      <Image
        src="/images/ghost.jpg"
        alt="no results ghost"
        height="100px"
        width="100px"
      />
      <h5>{languageSearch[language].cantfind}</h5>
      <h5>{languageSearch[language].canyoutry}</h5>
    </div>
  );
};

export default DetailedSearchBar;
