import React, { useState, useContext, useEffect } from 'react'
import Image from 'next/image';
import TimeAgo from 'timeago-react';
import Tag from '../../base/Tag';
import { BungieDataContext } from '../../../context/bungieData';
import styles from '../../../styles/components/profile/activity/_activity.module.scss'
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks.ts';
import { selectActivity } from '../../../redux/userSlice'


const Activity = ({ activity: { period, activityDetails, values } }) => {
  const { bungieData } = useContext(BungieDataContext);
  const { directorActivityHash } = activityDetails;
  const selectedActivity = useAppSelector(state => state.user.selectedActivity);
  const dispatch = useAppDispatch();

  const [selected, setSelected] = useState(false);

  const title = bungieData.activityDefinition[directorActivityHash].displayProperties.name;
  const subtitle = bungieData.activityDefinition[activityDetails.referenceId].displayProperties.name;
  const activityBg = title !== 'Prophecy' ? `url(https://www.bungie.net${bungieData.activityDefinition[activityDetails.referenceId].pgcrImage})` : `url(https://www.bungie.net${bungieData.activityDefinition[4148187374].pgcrImage}`

  useEffect(() => {
    setSelected(activityDetails.instanceId === selectedActivity)
  }, [selectedActivity])

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage:
          selected 
            ? `linear-gradient(200deg, transparent 10%, rgba(255, 255, 255, 0.4), black), ${activityBg}`
            : `linear-gradient(200deg, transparent, rgba(0, 0, 0, 0.84), black), ${activityBg}`,


        // backgroundImage: 
        //   `linear-gradient(200deg, transparent 10%, rgba(255, 255, 255, 0.2), black), ${activityBg}`,
        height: !selected && '90px',
        flexFlow: !selected && 'row wrap',
      }}
      onClick={() => dispatch(selectActivity(activityDetails.instanceId))}
    >
      <div className={styles.header}>
        <h5><TimeAgo datetime={period} /></h5>
        {!selected && <h4>{title}</h4>}
      </div>

      <div>
        {bungieData.activityDefinition[directorActivityHash].activityModeHashes && selected ? (
          <Image
            src={`https://www.bungie.net${bungieData.activityModeDefinition[bungieData.activityDefinition[directorActivityHash].activityModeHashes[0]].displayProperties.icon}`}
            alt=""
            width={50}
            height={50}
          />
        ) : <div style={{ width: '50px', height: '50px' }}></div>}

        { selected && (
          <>
            <h3>{title}</h3>
            <h5>{title !== subtitle && subtitle}</h5>
          </>
        )}

      </div>


      <div className={styles.tags}>
        {/* <Tag title="kda" shownInfo={values.killsDeathsAssists.basic.value} decimals={2} /> */}
        <Tag title={<ion-icon name="flash" />} shownInfo={values.kills.basic.value} />
        <Tag title={<ion-icon name="skull" />} shownInfo={values.deaths.basic.value} />
        { selected && <Tag title="assists" shownInfo={values.assists.basic.value} /> }
        <Tag title="kd" shownInfo={values.killsDeathsRatio.basic.value} decimals={2} />
        { selected && <Tag title="kda" shownInfo={values.killsDeathsAssists.basic.value} /> }
        { values.standing
        ? <Tag shownInfo={values.standing.basic.displayValue} />
        : values.completed.basic.displayValue === 'Yes' && <Tag shownInfo="Completed" /> }
      </div>


    </div>
  )
}

export default Activity
