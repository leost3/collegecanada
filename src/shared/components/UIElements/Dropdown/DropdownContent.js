import React from "react";

import "./DropdownContent.scss";

const DropdownContent = ({ dropdownContent, onClick }) => {
  return (
    <div className="dropdown-content">
      {dropdownContent.map((content, i) => {
        return (
          <div key={i} className="content" onClick={onClick}>
            {content}
          </div>
        );
      })}
    </div>
  );
};

export default DropdownContent;
