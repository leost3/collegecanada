import React from "react";
import "./Panel.scss";

const Panel = ({isPanelToggled,togglePanel}) => {
  return <div className={`panel-content panel-content-${isPanelToggled && "active"}`}>
      <button onClick={togglePanel} >X</button>
  </div>;
};

export default Panel;
