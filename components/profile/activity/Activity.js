import React, { useContext } from 'react'
import Image from 'next/image';
import TimeAgo from 'timeago-react';
import { BungieDataContext } from '../../../context/bungieData';
import styles from '../../../styles/components/profile/activity/_activity.module.scss'

const Activity = ({ activity: { period, activityDetails, values } }) => {
  const { bungieData } = useContext(BungieDataContext);
  const activityBg = `url(https://www.bungie.net${bungieData.activityDefinition[activityDetails.referenceId].pgcrImage})`
  const activityType = bungieData.activityDefinition[activityDetails.referenceId].directActivityModeHash;

  const { referenceId } = activityDetails;

  const { name, icon, hasIcon } = bungieData.activityDefinition[referenceId].displayProperties;
  
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: activityBg }}
    >
      <h5><TimeAgo datetime={period} /></h5>

      <div>
        <Image
          src={ `https://www.bungie.net${icon}` }
          alt=""
          width={40}
          height={40}
        />
        {/* <h3>{ modeHash && bungieData.activityTypeDefinition[modeHash].displayProperties.name }</h3> */}
      </div>

      <h5>Hehe</h5>
    </div>
  )
}

export default Activity
