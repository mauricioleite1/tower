import React, { useState, useEffect, useContext } from 'react';
import { BungieDataContext } from '../../context/bungieData';
import { getLinkedProfile, getProfile } from '../../api';
import { languageSuggestion } from '../language';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks.ts';
import { useRouter } from 'next/router';
import styles from '../../styles/components/_suggestion.module.scss';
import Tag from '../base/Tag';
import TimeAgo from 'timeago-react';

const Suggestion = ({ results }) => {
  const { bungieData, setBungieData } = useContext(BungieDataContext);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [searchedUser, setSearchedUser] = useState({});
  const router = useRouter();

  const language = useAppSelector((state) => state.user.preferences.language);
  const stringCode = String(results.bungieGlobalDisplayNameCode);
  const { destinyMemberships } = results;

  useEffect(() => {
    console.log(results);
    // const initialId = results.destinyMemberships[0].membershipId;
    // const initialType = results.destinyMemberships[0].membershipType;
    
    // getLinkedProfile(initialId, initialType).then(
    //   ({ Response: { profiles } }) => {
    //     const profilesList = profiles.sort(
    //       (a, b) => new Date(b.dateLastPlayed) - new Date(a.dateLastPlayed)
    //     );
    //     const lastUsedProfile = profilesList[0];
    //     const { membershipId, membershipType, dateLastPlayed } =
    //       lastUsedProfile;

    //     getProfile(membershipId, membershipType).then(({ Response }) =>
    //       setSearchedUser({
    //         general: Response,
    //         lastPlayedCharacter: Object.values(Response.characters.data).find(
    //           (a) => a.dateLastPlayed === dateLastPlayed
    //         ),
    //       })
    //     );
    //   }
    // );
  }, [results]);

  const handleClick = async () => {
    const { membershipId, membershipType, dateLastPlayed } =
      searchedUser.lastPlayedCharacter;
    router.push(`/profile/${membershipType}/${membershipId}`);
  };

  const handleMouseOver = () => {
    // setShowAdditionalInfo(!showAdditionalInfo);
  };

  return (
    <>
    hehe
      {searchedUser && searchedUser.general && (
        <div
          onClick={handleClick}
          onMouseOut={handleMouseOver}
          onMouseOver={handleMouseOver}
          className={styles.container}
          style={{
            backgroundImage:
              searchedUser &&
              searchedUser.lastPlayedCharacter &&
              `url(https://www.bungie.net${searchedUser.lastPlayedCharacter.emblemBackgroundPath})`,
          }}
        >
          <div className={styles.title}>
            {searchedUser && searchedUser.general && (
              <h3>
                {
                  searchedUser.general.profile.data.userInfo
                    .bungieGlobalDisplayName
                }
              </h3>
            )}
            {stringCode.length === 3 ? (
              <Tag title="#" shownInfo={stringCode.padStart(4, '0')} />
            ) : (
              <Tag title="#" shownInfo={stringCode} />
            )}
          </div>
          {searchedUser && searchedUser.general && (
            <h6>
              {languageSuggestion[language].lastseen}
              <span>
                {
                  <TimeAgo
                    datetime={searchedUser.general.profile.data.dateLastPlayed}
                    locale={language}
                  />
                }
              </span>
            </h6>
          )}
          {/* {showAdditionalInfo && (
            <div className={styles.additionalInfo}>
              <h3>
                {
                  searchedUser.general.profile.data.userInfo
                    .bungieGlobalDisplayName
                }
              </h3>
            </div>
          )} */}

        </div>
      )}
    </>
  );
};

export default Suggestion;
