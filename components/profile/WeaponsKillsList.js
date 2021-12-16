import React, { useState, useEffect } from 'react';
import WeaponSvg from '../../public/svg/WeaponSvg';
import styles from '../../styles/components/profile/_weaponkillslist.module.scss'

const WeaponsKillsList = ({ historicalInfo }) => { 
  const [expandWeaponsList, setExpandWeaponsList] = useState(false);

  const info = [
    { type: 'Hand Cannon', data: Number(historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsHandCannon.basic.value) },
    { type: 'Shotgun', data: Number(historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsShotgun.basic.value) },
    { type: 'Sniper', data: Number(historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsSniper.basic.value) },
    { type: 'Auto Rifle', data: Number(historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsAutoRifle.basic.value) },
    { type: 'Pulse Rifle', data: Number(historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsPulseRifle.basic.value) },
    { type: 'Scout Rifle', data: Number(historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsScoutRifle.basic.value) },
    { type: 'Fusion Rifle', data: Number(historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsFusionRifle.basic.value) },
    { type: 'Trace Rifle', data: Number(historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsTraceRifle.basic.value) },
    { type: 'Sidearm', data: Number(historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsSideArm.basic.value) },
    { type: 'SMG', data: Number(historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsSubmachinegun.basic.value) },
    { type: 'Bow', data: Number(historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsBow.basic.value) },
    { type: 'Sword', data: Number(historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsSword.basic.value) },
    { type: 'Grenade Launcher', data: Number(historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsGrenadeLauncher.basic.value) },
    { type: 'Machine Gun', data: Number(historicalInfo.mergedAllCharacters.results.allPvP.allTime.weaponKillsMachineGun.basic.value) },
  ];

  const sortedInfo = info.sort((a, b) => { 
    if (a.data > b.data) { return -1; }
    if (a.data < b.data) { return 1; }
    return 0;
   });

  return (
    <div style={{ height: expandWeaponsList && 'auto' }} className={styles.container} onClick={() => setExpandWeaponsList(!expandWeaponsList)}>
      <ion-icon name={expandWeaponsList ? 'chevron-up-outline' : 'chevron-down-outline'} />
      { sortedInfo.map(({ type, data }, key) => <h5 key={key}><WeaponSvg type={ type }/> { data.toLocaleString() }</h5>) }
    </div>
  );
};

export default WeaponsKillsList;
