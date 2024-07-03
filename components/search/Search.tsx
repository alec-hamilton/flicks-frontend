"use client";

import algoliasearch from "algoliasearch/lite";
import { Configure, InstantSearch, SearchBox, Hits } from "react-instantsearch";
import Hit from "./Hit";
import EmptyQueryBoundary from "./EmptyQueryBoundary";
import NoResultsBoundary from "./NoResultsBoundary";
import NoResults from "./NoResults";

const searchClient = algoliasearch(
  "6B940ZV6CB",
  "d5cfb49854f8f559bcd9eae76b6b44e1"
);

type SearchProps = {
  handleClose: () => void;
};

const Search = ({ handleClose }: SearchProps) => {
  return (
    <InstantSearch searchClient={searchClient} indexName="titles_csv">
      <Configure hitsPerPage={8} />
      <SearchBox
        classNames={{
          input:
            "w-full h-10 p-2 border border-foreground bg-layer2 text-heading focus-visible:shadow-none",
          submit: "hidden",
          reset: "hidden",
          root: "pb-6",
        }}
        autoFocus
        placeholder="Search..."
        loadingIconComponent={() => <div></div>}
      />
      <EmptyQueryBoundary fallback={null}>
        <NoResultsBoundary fallback={<NoResults />}>
          <Hits
            hitComponent={({ hit }) => (
              <Hit hit={hit} handleClose={handleClose} />
            )}
          />
        </NoResultsBoundary>
      </EmptyQueryBoundary>
    </InstantSearch>
  );
};

export default Search;
