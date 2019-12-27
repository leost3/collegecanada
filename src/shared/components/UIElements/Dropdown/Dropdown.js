import React, { useState } from "react";
import "./Dropdown.scss";

import DropdownContent from "./DropdownContent";

const content = ["Population", "Temperature", "Jobs", "Default", "Cities"];

const Dropdown = () => {
  const [isDropdownSelected, setIsDropdownSelected] = useState(false);
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(content[0]);

  const selectDropdownItemHandler = event => {
    setSelectedDropdownItem(event.target.innerHTML);
    setIsDropdownSelected(false);
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown-selected"
        onClick={() => setIsDropdownSelected(prevState => !prevState)}
      >
        <span>{selectedDropdownItem}</span>
        <span className="caret">{isDropdownSelected ? "Up" : "Down"}</span>
      </div>
      {isDropdownSelected && (
        <DropdownContent
          onClick={selectDropdownItemHandler}
          dropdownContent={content}
        />
      )}
    </div>
  );
};

export default Dropdown;
