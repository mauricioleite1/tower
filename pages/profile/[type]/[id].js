import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getProfile, getLinkedProfile, getGroupsForMember } from '../../../api';
import styles from '../../../styles/pages/_profile.module.scss';
import Image from 'next/image';
import Medal from '../../../components/base/Medal';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [profileClan, setProfileClan] = useState(null);
  const router = useRouter();
  const { id, type } = router.query;
  const { info, bnetMembership } = profile;

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
    });
  };

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  return (
    <main className={styles.container}>
      {/* <div className={styles.content}> */}
        {/* Profile page { id } { type } */}

        <section className={styles.left}>
          <div className={styles.profileInfo}>
            {profile && bnetMembership && (
              <Image
                className={styles.picture}
                src={ `https://www.bungie.net${bnetMembership.iconPath}` }
                alt="Avatar from Bungie.net" 
                height="100%"
                width="100%"
              />
            )}
            <div className={styles.info}>
              <h2>
                {info && info.profile.data.userInfo.bungieGlobalDisplayName}

                <ion-icon name="checkmark-circle-outline" />
              </h2>
              <h6>{profileClan && profileClan.name}</h6>
            </div>

            <div className={styles.interaction}>
              <ion-icon name="flag" />
              <ion-icon name="mail" />
              <ion-icon name="logo-twitter" />
              <ion-icon name="logo-linkedin" />
              <ion-icon name="logo-instagram" />
            </div>


          </div>


          <div className={styles.medals}>
            <Medal title={ 'sherpa' } />
            <Medal title={ 'destroyer' } />
          </div>


          <div className={styles.characters__container}>
            {profile &&
              info &&
              Object.values(info.characters.data).map((a, key) => {
                return (
                  <div
                    className={styles.character}
                    key={key}
                    style={{
                      backgroundImage: `url(https://www.bungie.net${a.emblemBackgroundPath})`,
                    }}
                  >
                    {/* <Image
                      src={`https://www.bungie.net${a.emblemPath}`}
                      alt=""
                      height="60px"
                      width="60px"
                    /> */}
                    <h4>{a.characterId}</h4>
                  </div>
                );
              })}
          </div>
        </section>

        <section className={styles.right}>
              <nav>
                <button type="button">All</button>
                <button type="button">Pve</button>
                <button type="button">Pvp</button>

              </nav>

              <div>
                <div className={styles.infoCard}>
                </div>
              </div>

        </section>
      {/* </div> */}
    </main>
  );
};

export default Profile;

{
  /* This profile is loved! */
}
