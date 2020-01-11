import React, { useRef } from "react";
import DropdownItem from "./DropdownItem";
import "./DropdownContent.scss";

import {useHandleClickOutside} from "../../../hooks/ClickOutsideHook"

const DropdownContent = ({
  hideDropdown,
  dropdownContent,
  onClick
}) => {
  const dropdownMenuRef = useRef(null);


  const renderDropdownList = dropdownContent.map((item, index) => (
    <DropdownItem item={item} key={index} selectDropdownItemHandler={onClick} />
  ));
  useHandleClickOutside(dropdownMenuRef,hideDropdown)
  return (
    <div ref={dropdownMenuRef} className="dropdown-content">
      <ul className="dropdown-list">{renderDropdownList}</ul>
    </div>
  );
};

export default DropdownContent;
