import { useInstantSearch } from "react-instantsearch-hooks-web";

function NoResults() {
  const { indexUiState } = useInstantSearch();

  return (
    <div>
      <p className="text-body">
        No results for <q>{indexUiState.query}</q>.
      </p>
    </div>
  );
}

export default NoResults;
