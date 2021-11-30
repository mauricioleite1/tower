import React, { useState, createContext } from 'react';

export const BungieDataContext = createContext();

export const BungieDataStorage = ({ children }) => {
  const [bungieData, setBungieData] = useState(null);
  const bungieDataInfo = { bungieData, setBungieData };

  return (
    <BungieDataContext.Provider value={bungieDataInfo}>
      {children}
    </BungieDataContext.Provider>
  );
};
