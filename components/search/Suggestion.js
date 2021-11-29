import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getProfile } from '../../api';
import Tag from '../base/Tag';
import TimeAgo from 'timeago-react';
import styles from '../../styles/components/_suggestion.module.scss';

const Suggestion = ({ result }) => {
  const [lastPlayed, setLastPlayed] = useState({
    character: null,
    date: null,
  });
  const { destinyMemberships } = result;
  const stringCode = String(result.bungieGlobalDisplayNameCode);

  useEffect(() => {
    if (destinyMemberships[0]) {
      const membershipId = destinyMemberships[0].membershipId;
      const membershipType = destinyMemberships[0].membershipType;
    }

    getProfile(membershipId, membershipType).then(({ Response }) => {
      setLastPlayed({
        date: Response && Response.profile.data.dateLastPlayed,
        character:
          Response &&
          Object.values(Response.characters.data).find(
            (character) => character.dateLastPlayed === lastPlayed.date
          ),
      });
    })
  }, [destinyMemberships, lastPlayed.date]);

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage:
          lastPlayed.character &&
          `url(https://www.bungie.net${lastPlayed.character.emblemBackgroundPath})`,
      }}
    >
      <div className={styles.title}>
        <h3>{result.bungieGlobalDisplayName}</h3>
        {stringCode.length === 3 ? (
          <Tag title="#" shownInfo={stringCode.padStart(4, '0')} />
        ) : (
          <Tag title="#" shownInfo={stringCode} />
        )}
      </div>
      <h6>Last seen<span>{<TimeAgo datetime={lastPlayed.date} locale="en" />}</span></h6>
    </div>
  );
};

export default Suggestion;

// const Suggestion = ({
//   displayName,
//   displayCode,
//   info,
//   info: { destinyMemberships },
//   bungieManifest,
// }) => {
//   const [dateLastPlayed, setDateLastPlayed] = useState(null);
//   const [lastPlayedCharacter, setLastPlayedCharacter] = useState(null);
//   const { setPlayerData } = useContext(PlayerContext);
//   const { lastTimeSeen } = SuggestionsLang;
//   const stringCode = String(displayCode);

//   useEffect(() => {
//     const membershipId = destinyMemberships[0].membershipId;
//     const membershipType = destinyMemberships[0].membershipType;
//     getProfile(membershipId, membershipType)
//       .then(({ Response }) => {
//         const lastPlayed = Response.profile.data.dateLastPlayed;
//         setLastPlayedCharacter(
//           Object.values(Response.characters.data).find(
//             (a) => a.dateLastPlayed === lastPlayed
//           )
//         );

//         setDateLastPlayed(lastPlayed);
//       })
//       .catch(() => {
//         const membershipId = destinyMemberships[1].membershipId;
//         const membershipType = destinyMemberships[1].membershipType;

//         getProfile(membershipId, membershipType).then(({ Response }) => {
//           const lastPlayed = Response.profile.data.dateLastPlayed;
//           setLastPlayedCharacter(
//             Object.values(Response.characters.data).find(
//               (a) => a.dateLastPlayed === lastPlayed
//             )
//           );

//           setDateLastPlayed(lastPlayed);
//         });
//       })
//       .catch(() => {
//         const membershipId = destinyMemberships[2].membershipId;
//         const membershipType = destinyMemberships[2].membershipType;

//         getProfile(membershipId, membershipType).then(({ Response }) => {
//           const lastPlayed = Response.profile.data.dateLastPlayed;
//           setLastPlayedCharacter(
//             Object.values(Response.characters.data).find(
//               (a) => a.dateLastPlayed === lastPlayed
//             )
//           );

//           setDateLastPlayed(lastPlayed);
//         });
//       })
//       .catch((a) =>
//         console.error(
//           `Unable to fetch profile data for ${info.bungieGlobalDisplayName}#${info.bungieGlobalDisplayNameCode} from Bungie`
//         )
//       );
//   }, [
//     destinyMemberships,
//     info.bungieGlobalDisplayName,
//     info.bungieGlobalDisplayNameCode,
//   ]);

//   const handleClick = async () => {
//     localStorage.setItem('recentSearch', JSON.stringify({ player: `${displayName}#${displayCode}` }) )

//     searchDestinyPlayer(`${displayName}#${displayCode}`).then(
//       ({ Response }) => {
//         getProfile(
//           destinyMemberships[0].membershipId,
//           destinyMemberships[0].membershipType
//         ).then(async ({ Response }) => {
//           const response = await fetch(`https://www.bungie.net${bungieManifest.Response.jsonWorldComponentContentPaths.en.DestinyClassDefinition}`);
//           const response1 = await fetch(`https://www.bungie.net${bungieManifest.Response.jsonWorldComponentContentPaths.en.DestinyPresentationNodeDefinition}`);
//           const response2 = await fetch(`https://www.bungie.net${bungieManifest.Response.jsonWorldComponentContentPaths.en.DestinyRecordDefinition}`);
//           const responseActivity = await fetch(`https://www.bungie.net${bungieManifest.Response.jsonWorldComponentContentPaths.en.DestinyActivityDefinition}`);
//           const responseActivityMode = await fetch(`https://www.bungie.net${bungieManifest.Response.jsonWorldComponentContentPaths.en.DestinyActivityModeDefinition}`);
//           const responseInventoryItem = await fetch(`https://www.bungie.net${bungieManifest.Response.jsonWorldComponentContentPaths.en.DestinyInventoryItemDefinition}`);
//           const responseStatDefinition = await fetch(`https://www.bungie.net${bungieManifest.Response.jsonWorldComponentContentPaths.en.DestinyStatDefinition}`);
//           const responseProgDefinition = await fetch(`https://www.bungie.net${bungieManifest.Response.jsonWorldComponentContentPaths.en.DestinyProgressionDefinition}`);

//           setPlayerData({
//             ...Response,
//             classes: await response.json(),
//             presentation: await response1.json(),
//             progression: await responseProgDefinition.json(),
//             record: Object.values(await response2.json()),
//             activity: await responseActivity.json(),
//             activities: [],
//             activityModeDefinition: await responseActivityMode.json(),
//             inventoryItems: await responseInventoryItem.json(),
//             statDefinition: await responseStatDefinition.json(),
//           });
//         });
//       }
//       );
//   };

//   return (
//     <div
//       className="suggestion"
//       onClick={handleClick}
//       // style={ lastPlayedCharacter && { backgroundImage: `url(https://www.bungie.net${lastPlayedCharacter.emblemBackgroundPath})` } }
//     >
//       <div>
//         {lastPlayedCharacter && (
//           <img
//             src={`https://www.bungie.net${lastPlayedCharacter.emblemPath}`}
//             alt="Character Emblem"
//           />
//         )}
//         <section>
//           <div>
//             <h4>{displayName}</h4>
//             { stringCode.length === 3
//               ? <Tag title="#" shownInfo={stringCode.padStart(4, '0')} />
//               : <Tag title="#" shownInfo={stringCode} /> }
//           {dateLastPlayed && (
//             <div className="suggestion_last-time">
//               <h5>{lastTimeSeen.en}</h5>
//               <h6><TimeAgo datetime={dateLastPlayed} locale="en" /></h6>
//             </div>
//           )}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Suggestion;
