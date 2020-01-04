import React from "react";
import "./EmptyState.scss"

const EmptyState = props => {
  return (
    <div className="empty-state">
      <img
        src={require("../../../images/empty-state.jpg")}
        alt="match-not-found"
      />
    </div>
  );
};

export default EmptyState;
