import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserPreferences } from '../../context/user';
import { commonText } from '../language';
// import { getManifest } from '../api/data';
// import { Avatar } from '@material-ui/core';
import SearchBar from '../search/SearchBar';
import styles from '../../styles/components/_header.module.scss';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks.ts';
import { selectedLanguage } from '../../redux/userSlice';


const Header = ({
  setShowLogin,
  showLanguageOptions,
  setShowLanguageOptions,
  outsideClick,
  // handleOutsideClick,
  // showSuggestions,
  // setShowSuggestions,
}) => {
  const dispatch = useAppDispatch();
  const loginInfo = useAppSelector((state) => state.user.info);
  const language = useAppSelector((state) => state.user.preferences.language);

  // const { language, setLanguage } = useContext(UserPreferences);
  // const [language, setLanguage] = useState('en');
  // const location = useLocation();

  // useEffect(() => {
  //   getManifest().then(async ({ Response }) => {
  //     setBungieManifest({ Response });
  //   });
  // }, []);

  return (
    <header className="header">
      <div className="logo">
        <Link href="/" passHref={true}>
          <Image src="/logo.png" alt="Tower" height="24px" width="24px" />
        </Link>
      </div>

      <div className={styles.right}>
        <div className={styles.language}>
          {showLanguageOptions && (
            <ul>
              <li
                onClick={() => {
                  dispatch(selectedLanguage('en'));
                  setShowLanguageOptions(false);
                }}
              >
                <Image
                  src="/flags/us.svg"
                  alt="Tower"
                  height="16px"
                  width="16px"
                />
                <h5>English</h5>
              </li>
              <li
                onClick={() => {
                  dispatch(selectedLanguage('de'));
                  setShowLanguageOptions(false);
                }}
              >
                <Image
                  src="/flags/de.svg"
                  alt="Tower"
                  height="16px"
                  width="16px"
                />
                <h5>Deutsch</h5>
              </li>
              <li
                onClick={() => {
                  dispatch(selectedLanguage('pt-br'));
                  setShowLanguageOptions(false);
                }}
              >
                <Image
                  src="/flags/br.svg"
                  alt="Tower"
                  height="16px"
                  width="16px"
                />
                <h5>Português(BR)</h5>
              </li>
            </ul>
          )}
          <div onClick={() => setShowLanguageOptions(!showLanguageOptions)}>
            <ion-icon name="globe-outline" />
          </div>
        </div>

        <button onClick={() => setShowLogin(true)}>
          { !loginInfo.displayName ? commonText.login[language] : loginInfo.displayName }
        </button>

        { loginInfo.photoURL && <Image className={styles.profileImg} src={ loginInfo.photoURL } alt="User photo" height="24px" width="24px" /> }
      </div>

    </header>
  );
};

export default Header;
