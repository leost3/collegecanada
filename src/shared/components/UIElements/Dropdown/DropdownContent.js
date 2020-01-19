import React, { useRef } from "react";
import DropdownItem from "./DropdownItem";
import "./DropdownContent.scss";

import { useHandleClickOutside } from "../../../hooks/ClickOutsideHook";

const DropdownContent = ({
  position,
  hideDropdown,
  dropdownContent,
  onClick
}) => {
  const styles = {
    [position]: 0
  };

  const dropdownMenuRef = useRef(null);

  const renderDropdownList = dropdownContent.map((item, index) => (
    <DropdownItem item={item} key={index} selectDropdownItemHandler={onClick} />
  ));
  useHandleClickOutside(dropdownMenuRef, hideDropdown);
  return (
    <div ref={dropdownMenuRef} className="dropdown-content" style={position ? styles :{left:0}}>
      <ul className="dropdown-list">{renderDropdownList}</ul>
    </div>
  );
};

export default DropdownContent;
