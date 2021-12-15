import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import styles from '../../../styles/pages/_profile.module.scss';
import { useRouter } from 'next/router';
import { getProfile, getLinkedProfile, getGroupsForMember, getHistoricalStatForAccount } from '../../../api';
import Image from 'next/image';
import InfoCard from '../../../components/infoCard';
import WeaponSvg from '../../../public/svg/WeaponSvg';
import WeaponsKillsList from '../../../components/profile/weaponsKillsList';
import { useAppSelector } from '../../../redux/app/hooks.ts';

import Character from '../../../components/profile/character/Character';
import ActivityList from '../../../components/profile/activity/ActivityList';

const Profile = () => {
  const activities = useAppSelector(state => state.user.activities);
  const router = useRouter();
  const [profile, setProfile] = useState({});
  const [historicalInfo, setHistoricalInfo] = useState(null);
  const [profileClan, setProfileClan] = useState(null);
  const { id, type } = router.query;
  const { info, bnetMembership } = profile;

  const fetchProfileInfo = async () => {
    getLinkedProfile(id, type).then(({ Response: { bnetMembership } }) => {
      getProfile(id, type).then(({ Response }) =>
        setProfile({ bnetMembership, info: Response })
      );
      getGroupsForMember(id, type).then(({ Response }) => {
        if (Response.results.length !== 0) setProfileClan(Response.results[0].group);
      });
      getHistoricalStatForAccount(id, type).then(({ Response }) => {
        setHistoricalInfo(Response);
      })

    });
  };

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.content}>

        <div className={styles.sidebar}>
          <div className={styles.profileInfo}>
            <div className={styles.info}>
              {profile && bnetMembership && (
                <Image
                  alt="Avatar from Bungie.net"
                  className={styles.picture}
                  src={`https://www.bungie.net${bnetMembership.iconPath}`}
                  height={120}
                  width={120}
                />
              )}
              {info && (
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <h2>{info.profile.data.userInfo.bungieGlobalDisplayName} <ion-icon name="checkmark-circle-outline" /></h2>
                  <h6>{profileClan && profileClan.name}</h6>
                </div>
              )}
              <div className={styles.interaction}>
                <ion-icon name="flag" />
                <ion-icon name="mail" />
                <ion-icon name="logo-discord" />
                <ion-icon name="logo-twitter" />
                <ion-icon name="logo-instagram" />
              </div>
            </div>

            <div className={styles.characters__container}>
              {profile &&
                info &&
                Object.values(info.characters.data)
                  .map(({ characterId, emblemBackgroundPath, classHash, light }, key) => (
                    <Character
                      key={characterId}
                      characterId={characterId}
                      emblemBackgroundPath={emblemBackgroundPath}
                      classHash={classHash}
                      light={light}
                    />
                  ))}
            </div>

          </div>
        </div>
        <section className={styles.right}>
          <nav className={styles.selector}>
            <Link href="/overview" passHref={true}><button className={styles.btn}>Overview</button></Link>
            <Link href="/crucible" passHref={true}><button className={styles.btn}>Crucible</button></Link>
            <Link href="/overview" passHref={true}><button className={styles.btn}>Trials</button></Link>
            <Link href="/overview" passHref={true}><button className={styles.btn}>Vanguard</button></Link>
            <Link href="/overview" passHref={true}><button className={styles.btn}>Gambit</button></Link>
          </nav>

          <div className={styles.trials_container}>
            {profile && profile.info && historicalInfo && (
              <>
                <InfoCard
                  info={profile.info.metrics.data.metrics[1765255052].objectiveProgress.progress}
                  hash="1765255052"
                  title="Flawless"
                />
                <InfoCard
                  info={profile.info.metrics.data.metrics[1365664208].objectiveProgress.progress}
                  hash="1365664208"
                  title="Wins"
                />

              </>
            )}
          </div>

          <div className={styles.crucible_container}>
            {profile && profile.info && historicalInfo && (
              <>
                <InfoCard
                  info={profile.info.metrics.data.metrics[268448617].objectiveProgress.progress}
                  hash="268448617"
                  title="Glory Rank"
                />
                <InfoCard
                  info={profile.info.metrics.data.metrics[2872213304].objectiveProgress.progress}
                  hash="2872213304"
                  title="Valor Rank"
                />
                <InfoCard
                  info={historicalInfo.mergedAllCharacters.results.allPvP.allTime.killsDeathsRatio.basic.value.toFixed(2)}
                  hash="871184140"
                  title="K/D"
                />
                <InfoCard
                  info={historicalInfo.mergedAllCharacters.results.allPvP.allTime.kills.basic.value}
                  // hash="811894228"
                  title="Kills"
                />
                <InfoCard
                  info={historicalInfo.mergedAllCharacters.results.allPvP.allTime.deaths.basic.value}
                  // hash="811894228"
                  title="Deaths"
                />
                <InfoCard
                  info={historicalInfo.mergedAllCharacters.results.allPvP.allTime.assists.basic.value}
                  // hash="811894228"
                  title="Assists"
                />
              </>)}
          </div>

          {profile && profile.info && historicalInfo && <WeaponsKillsList historicalInfo={historicalInfo} />}
          
          <ActivityList />
        </section>
      </div>
    </main>
  );
};

export default Profile;

{
  /* This profile is loved! */
}
