import React, { useContext } from 'react';
import { SearchContext } from '../../context';
import Suggestion from './Suggestion';

const SuggestionsList = ({ bungieManifest }) => {
  const { searchSuggestions } = useContext(SearchContext);

  return (
    <div className="suggestions__container">

        {searchSuggestions &&
          searchSuggestions.searchResults.map(
            (result, key) =>
              result.destinyMemberships.length > 0 && (
                <Suggestion
                  bungieManifest={bungieManifest}
                  key={key}
                  displayName={result.bungieGlobalDisplayName}
                  displayCode={result.bungieGlobalDisplayNameCode}
                  info={result}
                />
              )
          )}

      {searchSuggestions.hasMore && <button>See more results..</button>}
    </div>
  );
};

export default SuggestionsList;
