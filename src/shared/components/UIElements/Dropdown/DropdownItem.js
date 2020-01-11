import React from "react";
import "./Dropdownitem.scss";

const DropdownItem = ({ item, selectDropdownItemHandler }) => {
  return (
    <li onClick={selectDropdownItemHandler} className="dropdown-item">
      <span className="span-one">{item.name}</span>
      <span className="span-two">icon</span>
    </li>
  );
};

export default DropdownItem;
