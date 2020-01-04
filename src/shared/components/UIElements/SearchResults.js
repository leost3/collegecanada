import React,{useState, useContext} from "react";
import "./SearchResults.scss";
import {SearchResultsContext} from "../../context/SearchContext"

const SearchResults = props => {

  const searchResultsContext = useContext(SearchResultsContext);

    return <span className="search-results">11/11 provinces found</span>;
};

export default SearchResults;
