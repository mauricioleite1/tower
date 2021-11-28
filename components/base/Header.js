import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserPreferences } from '../../context/user';
import { commonText } from '../language';
// import { getManifest } from '../api/data';
// import { Avatar } from '@material-ui/core';
import SearchBar from '../search/SearchBar';
import styles from '../../styles/components/_header.module.scss';

const Header = ({
  setShowLogin,
  showLanguageOptions,
  setShowLanguageOptions,
  outsideClick,
  // handleOutsideClick,
  // showSuggestions,
  // setShowSuggestions,
}) => {
  const [bungieManifest, setBungieManifest] = useState(null);
  const { language, setLanguage } = useContext(UserPreferences);
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
                  setLanguage('en');
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
                  setLanguage('de');
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
                  setLanguage('ptBR');
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

          <ion-icon
            name="globe-outline"
            onClick={() => setShowLanguageOptions(!showLanguageOptions)}
          />
        </div>
        {/* <SearchBar
          bungieManifest={bungieManifest}
          setShowSuggestions={setShowSuggestions}
          showSuggestions={showSuggestions}
        /> */}
        <button onClick={() => setShowLogin(true)}>
          {commonText.login[language]}
        </button>
        {/* <Avatar /> */}
      </div>

      {/* <select name="language" id="language">
          <option value="en">English</option>
          <option value="de">Deutsch</option>
          <option value="pt-br">Português(BR)</option>
          <option value="es">Español</option>
          <option value="es-mx">Español (MX)</option>
        </select> */}
    </header>
  );
};

export default Header;
