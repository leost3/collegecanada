import React from "react";

import "./Search.scss";
import Input from "./Input";

const Search = props => {
  return (
    <div className="search">
      <Input width="825" type="search" placeholder="Ex: Ontario" />
      <span className="icon icon-magnifier">O</span>
    </div>
  );
};

export default Search;
