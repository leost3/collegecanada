import React from "react";

import "./FederalItem.scss"

const FederalItem = ({ id, category }) => {
  return (
        <div className="federal-item">
            <h3>{category}</h3>
        </div>
  );
};

export default FederalItem;
