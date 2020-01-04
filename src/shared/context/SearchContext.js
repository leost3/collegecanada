import { createContext } from "react";

export const SearchContext = createContext({ searched: "",updateSeachedPlace:() => {} });
export const SearchResultsContext = createContext({results: 12,updateSearchedResults:() => {}})