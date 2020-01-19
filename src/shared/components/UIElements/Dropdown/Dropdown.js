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

const Dropdown = ({position}) => {
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(content[0]);

  const hideDropdown = () => setisDropdownOpen(false);

  const selectDropdownItemHandler = event => {
    setSelectedDropdownItem(event.target.childNodes[0].innerHTML);
    hideDropdown();
  };

  return (
    <div className="dropdown">
      <div
        className={`dropdown-selection dropdown-${isDropdownOpen && "active"}`}
        onClick={() => setisDropdownOpen(prevState => !prevState)}
      >
        <span>{selectedDropdownItem}</span>
      </div>
      {isDropdownOpen && (
        <DropdownContent
          selection="one-selection"
          onClick={selectDropdownItemHandler}
          dropdownContent={contents}
          hideDropdown={hideDropdown}
          position={position}
        />
      )}
    </div>
  );
};

export default Dropdown;
