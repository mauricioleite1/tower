import React, { useContext } from 'react'
import Image from 'next/image';
import TimeAgo from 'timeago-react';
import Tag from '../../base/Tag';
import { BungieDataContext } from '../../../context/bungieData';
import styles from '../../../styles/components/profile/activity/_activity.module.scss'

const Activity = ({ activity: { period, activityDetails, values } }) => {
  const { bungieData } = useContext(BungieDataContext);
  const { directorActivityHash } = activityDetails;

  const title = bungieData.activityDefinition[directorActivityHash].displayProperties.name;
  const subtitle = bungieData.activityDefinition[activityDetails.referenceId].displayProperties.name;
  const activityBg = title !== 'Prophecy' ? `url(https://www.bungie.net${bungieData.activityDefinition[activityDetails.referenceId].pgcrImage})` : `url(https://www.bungie.net${bungieData.activityDefinition[4148187374].pgcrImage}`

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `linear-gradient(200deg, transparent 35%, black), ${activityBg}` }}
    >
      <h5><TimeAgo datetime={period} /></h5>

      <div>
        {bungieData.activityDefinition[directorActivityHash].activityModeHashes ? (
          <Image
            src={`https://www.bungie.net${bungieData.activityModeDefinition[bungieData.activityDefinition[directorActivityHash].activityModeHashes[0]].displayProperties.icon}`}
            alt=""
            width={50}
            height={50}
          />
        ) : <div style={{ width: '50px', height: '50px' }}></div>}

        <h3>{title}</h3>
        {title !== subtitle && <h5>{subtitle}</h5>}

      </div>

      <div className={styles.tags}>
        {/* <Tag title="kda" shownInfo={values.killsDeathsAssists.basic.value} decimals={2} /> */}
        <Tag title={<ion-icon name="flash" />} shownInfo={values.kills.basic.value} />
        <Tag title={<ion-icon name="skull" />} shownInfo={values.deaths.basic.value} />
        <Tag title="assists" shownInfo={values.assists.basic.value} />
        <Tag title="kd" shownInfo={values.killsDeathsRatio.basic.value} decimals={2} />
        <Tag title="kda" shownInfo={values.killsDeathsAssists.basic.value} />
        { values.standing
         ? <Tag shownInfo={values.standing.basic.displayValue} />
         : values.completed.basic.displayValue === 'Yes' && <Tag shownInfo="Completed" /> }
      </div>

    </div>
  )
}

export default Activity
