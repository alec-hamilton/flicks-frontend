"use client";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "6B940ZV6CB",
  "d5cfb49854f8f559bcd9eae76b6b44e1"
);

const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="movies_100">
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
};

export default Search;
