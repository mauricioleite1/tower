import { API_BASE_URL, header } from './key';

export const bungieApiFetch = async (API_ENDPOINT) => {
  const response = await fetch(API_ENDPOINT, header);
  // console.log(response);
  if (response.ok) {
    const data = response.json();
    return data;
  } else {
    throw new Error('Something went wrong')
  }
}

export const getManifest = async () => {
  const API_ENDPOINT = `${API_BASE_URL}/Destiny2/Manifest/`;
  return bungieApiFetch(API_ENDPOINT);
}

export const searchByGlobalNamePrefix = async (displayNamePrefix, page = 0) => {
  const API_ENDPOINT = `${API_BASE_URL}/User/Search/Prefix/${displayNamePrefix}/${page}`;
  return bungieApiFetch(API_ENDPOINT);
}

// export const searchDestinyPlayer = async (displayName, membershipType = -1) => {
//   const API_ENDPOINT = `${API_BASE_URL}/Destiny2/SearchDestinyPlayer/${membershipType}/${displayName}/`;
//   return apiFetch(API_ENDPOINT);
// }

export const getProfile = async (membershipId, membershipType = -1) => {
  const API_ENDPOINT = `${API_BASE_URL}/Destiny2/${membershipType}/Profile/${membershipId}/?components=100,104,200,202,205,1100`;
  return bungieApiFetch(API_ENDPOINT);
}

// export const getActivityHistory = async (characterId, membershipId, membershipType = 1) => {
//   const API_ENDPOINT = `${API_BASE_URL}/Destiny2/${membershipType}/Account/${membershipId}/Character/${characterId}/Stats/Activities/?count=100`
//   return apiFetch(API_ENDPOINT);
// }

// export const getTrialsActivityHistory = async (characterId, membershipId, membershipType = 1) => {
//   const API_ENDPOINT = `${API_BASE_URL}/Destiny2/${membershipType}/Account/${membershipId}/Character/${characterId}/Stats/Activities/?mode=trialsofosiris&count=24&page=0`
//   return apiFetch(API_ENDPOINT);
// }

// export const getItem = async (itemInstanceId, membershipId, membershipType = 1) => {
//   const API_ENDPOINT = `${API_BASE_URL}/Destiny2/${membershipType}/Profile/${membershipId}/Item/${itemInstanceId}/?components=300,302,303,304,307`
//   return apiFetch(API_ENDPOINT);
// }

// export const getPostGameCarnageReport = async (activityId) => {
//   const API_ENDPOINT = `${API_BASE_URL}/Destiny2/Stats/PostGameCarnageReport/${activityId}/`
//   return apiFetch(API_ENDPOINT);
// }

