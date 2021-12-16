import React from 'react'
import { useAppSelector } from '../../../redux/app/hooks.ts';
import Activity from './Activity';
import styles from '../../../styles/components/profile/activity/_activityList.module.scss'

const ActivityList = () => {
  const activities = useAppSelector(state => state.user.activities);
  

  return (
    <div className={styles.container}>
      {activities
        .map(activity => <Activity key={activity.activityDetails.instanceId} activity={activity} />)}
    </div>

  );
};

export default ActivityList;
