import React from "react";
import "./Dropdownitem.scss";

const DropdownItem = ({ item, selectDropdownItemHandler }) => {
  return (
    <li onClick={selectDropdownItemHandler} className="dropdown-item">
      {item.name}
    </li>
  );
};

export default DropdownItem;
