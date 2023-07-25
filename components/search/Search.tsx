"use client";

import algoliasearch from "algoliasearch/lite";
import {
  Configure,
  InstantSearch,
  SearchBox,
  Hits,
} from "react-instantsearch-hooks-web";
import Hit from "./Hit";

const searchClient = algoliasearch(
  "6B940ZV6CB",
  "d5cfb49854f8f559bcd9eae76b6b44e1"
);

const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="movies_100">
      <Configure hitsPerPage={10} />
      <SearchBox
        classNames={{
          input:
            "w-full h-10 p-2 border border-body bg-black2 text-body focus-visible:shadow-none",
          submit: "hidden",
          reset: "hidden",
          root: "pb-6",
        }}
      />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
};

export default Search;
