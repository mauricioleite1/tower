import React, { useState, useEffect, useContext } from 'react';
import styles from '../../../styles/pages/_profile.module.scss';
import { useRouter } from 'next/router';
import { getProfile, getLinkedProfile, getGroupsForMember, getHistoricalStatForAccount } from '../../../api';
import { BungieDataContext } from '../../../context/bungieData';
import Image from 'next/image';
import InfoCard from '../../../components/infoCard';
import WeaponSvg from '../../../public/svg/WeaponSvg';

const Profile = () => {
  const { bungieData } = useContext(BungieDataContext);
  const [profile, setProfile] = useState({});
  const [historicalInfo, setHistoricalInfo] = useState(null);
  const [profileClan, setProfileClan] = useState(null);
  const router = useRouter();
  const { id, type } = router.query;
  const { info, bnetMembership } = profile;

  const [expandWeaponsList, setExpandWeaponsList] = useState(false);

  const fetchProfileInfo = async () => {
    getLinkedProfile(id, type).then(({ Response: { bnetMembership } }) => {
      getProfile(id, type).then(({ Response }) =>
        setProfile({ bnetMembership, info: Response })
      );
      getGroupsForMember(id, type).then(({ Response }) => {
        if (Response.results.length !== 0) {
          setProfileClan(Response.results[0].group);
        }
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
            {profile && bnetMembership && (
              <Image
                alt="Avatar from Bungie.net"
                className={styles.picture}
                src={`https://www.bungie.net${bnetMembership.iconPath}`}
                height={120}
                width={120}
              />
            )}
            <div className={styles.info}>
              {info && (
                <>
                  <h2>{info.profile.data.userInfo.bungieGlobalDisplayName} <ion-icon name="checkmark-circle-outline" /></h2>
                  <h6>{profileClan && profileClan.name}</h6>
                </>
              )}
            </div>
            <div className={styles.interaction}>
              <ion-icon name="flag" />
              <ion-icon name="mail" />
              <ion-icon name="logo-discord" />
              <ion-icon name="logo-twitter" />
              <ion-icon name="logo-instagram" />
            </div>

            <div className={styles.characters__container}>
              {profile &&
                info &&
                Object.values(info.characters.data).map(({ emblemBackgroundPath, classHash, light }, key) => {
                  return (
                    <div
                      className={styles.character}
                      key={key}
                      style={{
                        backgroundImage: `url(https://www.bungie.net${emblemBackgroundPath})`,
                      }}
                    >
                      <div>
                        <h3>
                          {bungieData.classDefinition[classHash].displayProperties.name}
                        </h3>
                        <h3>{light}</h3>
                      </div>
                    </div>
                  )
                })}
            </div>

          </div>
        </div>
        <section className={styles.right}>
          {/* <div className={styles.main_profile}>
            <div className={styles.main_header}>Header</div>

            <div>
              <h5>About</h5>
              <h2>Pvp main</h2>
            </div>

            <div className="medals">
              <h4><ion-icon name="skull" />Destroyer x3</h4>            

            </div>
          </div> */}

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

          {profile && profile.info && historicalInfo && (
            <div style={{ height: expandWeaponsList && 'auto' }} className={styles.weaponsKillsList}>
              <ion-icon name={expandWeaponsList ? 'chevron-up-outline' : 'chevron-down-outline'} onClick={() => setExpandWeaponsList(!expandWeaponsList)} />
              <h5><WeaponSvg type="Hand Cannon" /> {historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsHandCannon.basic.value.toLocaleString()}</h5>
              <h5><WeaponSvg type="Shotgun" /> {historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsShotgun.basic.value.toLocaleString()}</h5>
              <h5><WeaponSvg type="Sniper" />  {historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsSniper.basic.value.toLocaleString()}</h5>
              <h5><WeaponSvg type="Auto Rifle" /> {historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsAutoRifle.basic.value.toLocaleString()}</h5>
              <h5><WeaponSvg type="Sidearm" /> {historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsSideArm.basic.value.toLocaleString()}</h5>
              <h5><WeaponSvg type="SMG" /> {historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsSubmachinegun.basic.value.toLocaleString()}</h5>
              <h5><WeaponSvg type="Sword" /> {historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsSword.basic.value.toLocaleString()}</h5>
              <h5><WeaponSvg type="Grenade Launcher" /> {historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsGrenadeLauncher.basic.value.toLocaleString()}</h5>
              <h5><WeaponSvg type="Rocket Launcher" /> {historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsRocketLauncher.basic.value.toLocaleString()}</h5>
              <h5><WeaponSvg type="Machine Gun" /> {historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsMachineGun.basic.value.toLocaleString()}</h5>
              <h5><WeaponSvg type="Trace Rifle" /> {historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsTraceRifle.basic.value.toLocaleString()}</h5>
              <h5><WeaponSvg type="Fusion Rifle" /> {historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsFusionRifle.basic.value.toLocaleString()}</h5>
              <h5><WeaponSvg type="Pulse Rifle" /> {historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsPulseRifle.basic.value.toLocaleString()}</h5>
              <h5><WeaponSvg type="Scout Rifle" />  {historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsScoutRifle.basic.value.toLocaleString()}</h5>
              <h5><WeaponSvg type="Bow" /> {historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsBow.basic.value.toLocaleString()}</h5>

            </div>
          )}

        </section>
      </div>
    </main>
  );
};

export default Profile;

{
  /* This profile is loved! */
}
