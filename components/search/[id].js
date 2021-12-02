import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getProfile, getLinkedProfile } from '../../../api';
import styles from '../../../styles/pages/_profile.module.scss';
// import { Image } from 'next/image';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const router = useRouter();
  const { id, type } = router.query;
  const { info, bnetMembership } = profile;

  const fetchProfileInfo = async () => {
    getLinkedProfile(id, type).then(({ Response: { bnetMembership } }) => {
      getProfile(id, type).then(({ Response }) =>
        setProfile({ bnetMembership, info: Response })
      );
    });
  };

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        {/* Profile page { id } { type } */}
        <section className={styles.left}>
          <div className={styles.profileInfo}>
            {profile && bnetMembership && (
              <div
                className={styles.picture}
                style={{
                  backgroundImage: `url(https://www.bungie.net${bnetMembership.iconPath})`,
                }}
              >
                <ion-icon name="checkmark-circle-outline"></ion-icon>
              </div>
            )}
            <div className={styles.info}>
              <h2>{ info.profile.data.userInfo.bungieGlobalDisplayName }</h2>
            </div>
          </div>

          <div>
            { profile && info 
              && Object.values(info.characters.data).map((a) => <h4>{ a.characterId }</h4>) }
          </div>

          <div className={styles.interaction}>

            <ion-icon name="flag" />
            <ion-icon name="mail" />
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
        </section>

        <section className={styles.right}></section>
      </div>
    </main>
  );
};

export default Profile;

{
  /* This profile is loved! */
}
