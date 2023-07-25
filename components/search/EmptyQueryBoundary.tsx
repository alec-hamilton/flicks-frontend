import { useInstantSearch } from "react-instantsearch-hooks-web";

function EmptyQueryBoundary({
  children,
  fallback,
}: {
  children: JSX.Element;
  fallback: null;
}) {
  const { indexUiState } = useInstantSearch();

  if (!indexUiState.query) {
    return fallback;
  }

  return children;
}

export default EmptyQueryBoundary;
