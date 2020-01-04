import React from "react";
import "./Loading.scss"

const Loading = props => {
  return (
    <div className="loading">
      <img
        src={require("../../../images/empty-state.jpg")}
        alt="match-not-found"
      />
    </div>
  );
};

export default Loading;
