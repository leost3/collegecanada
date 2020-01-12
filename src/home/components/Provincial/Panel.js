import React from "react";
import "./Panel.scss";

import PanelHeader from "./Panel-header";

const Panel = ({isPanelToggled, togglePanel, selectedProvince}) => {
  return <div className={`panel-content panel-content-${isPanelToggled && "active"}`}>
      <PanelHeader togglePanel={togglePanel}>{selectedProvince}</PanelHeader>
  </div>;
};

export default Panel;
