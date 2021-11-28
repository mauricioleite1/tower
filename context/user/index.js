import React, { useState, createContext } from 'react';

export const UserPreferences = createContext();

export const UserPreferencesStorage = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const chosenLanguage = { language, setLanguage };

  return (
    <UserPreferences.Provider value={chosenLanguage}>
      {children}
    </UserPreferences.Provider>
  );
};
