import React, { useContext } from "react";
import "./SearchResults.scss";
import { NavlinkContext } from "../../context/NavlinkContext";

const SearchResults = props => {
  const content = useContext(NavlinkContext);

  let term;

  console.log(content);
  if (content.content === "Provincial") {
    term = "Provinces";
  } else if (content.content === "Study in Canada") {
    term = "Colleges";
  } else {
    term = "Federal Programs";
  }

  return <span className="search-results">11/11 {term} found</span>;
};

export default SearchResults;
