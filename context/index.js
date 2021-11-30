import { UserPreferencesStorage } from './user';
import { PlayerStorage } from './player';

const GlobalContext = ({ children }) => {
  return (
    <UserPreferencesStorage>
      <PlayerStorage>
        {children}
      </PlayerStorage>
    </UserPreferencesStorage>
  );
};

export default GlobalContext;
