import React, { useState, createContext } from 'react';

export const PlayerContext = createContext();

export const PlayerStorage = ({ children }) => {
  const [player, setPlayer] = useState(null);
  const playerData = { player, setPlayer };

  return (
    <PlayerContext.Provider value={playerData}>
      {children}
    </PlayerContext.Provider>
  );
};
