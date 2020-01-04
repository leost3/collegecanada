import React from "react";
import "./SubHeader.scss";

import Search from "../FormComponents/Search";
import Dropdown from "../UIElements/Dropdown/Dropdown";
import SearchResults from "../UIElements/SearchResults";

const SubHeader = props => {
  return (
    <div className="sub-header">
    <div className="sub-header-content">
      <Dropdown />
      <Search />
      <SearchResults />
    </div>
    </div>
  );
};

export default SubHeader;
