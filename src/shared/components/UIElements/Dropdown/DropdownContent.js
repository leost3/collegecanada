import React from "react";
import DropdownItem from "./DropdownItem";
import "./DropdownContent.scss";

const DropdownContent = ({ dropdownContent, onClick }) => {
  console.log(dropdownContent);

  const renderDropdownList = dropdownContent.map((item, index) => (
    <DropdownItem item={item} key={index} selectDropdownItemHandler={onClick} />
  ));

  console.log(renderDropdownList);
  return (
    <div className="dropdown-content">
      <ul className="dropdown-list">{renderDropdownList}</ul>
    </div>
  );
};

export default DropdownContent;
