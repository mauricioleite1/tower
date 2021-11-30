import { UserPreferencesStorage } from './user';
import { PlayerStorage } from './player';
import { BungieDataStorage } from './bungieData';

const GlobalContext = ({ children }) => {
  return (
    <UserPreferencesStorage>
      <PlayerStorage>
        <BungieDataStorage>
          {children}
        </BungieDataStorage>
      </PlayerStorage>
    </UserPreferencesStorage>
  );
};

export default GlobalContext;
