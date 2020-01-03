import React, { useState } from "react";
import "./Dropdown.scss";

import DropdownContent from "./DropdownContent";

const contents = [
  { id: 0, name: "Population" },
  { id: 1, name: "Temperature" },
  { id: 2, name: "Jobs" },
  { id: 3, name: "Default" },
  { id: 4, name: "Cities" }
];
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
        className={`dropdown-selection dropdown-${isDropdownSelected && "active"}`}
        onClick={() => setIsDropdownSelected(prevState => !prevState)}
      >
        <span>{selectedDropdownItem}</span>
        <span className="caret">{isDropdownSelected ? "Up" : "Down"}</span>
      </div>
      {isDropdownSelected && (
        <DropdownContent
          selection="one-selection"
          onClick={selectDropdownItemHandler}
          dropdownContent={contents}
        />
      )}
    </div>
  );
};

export default Dropdown;
