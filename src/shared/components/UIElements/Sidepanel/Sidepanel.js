import React from "react";

import "./Sidepanel.scss";

const Sidepanel = ({isPanelToggled}) => {
  return (
    <div className={`sidepanel sidepanel-${isPanelToggled && "active"}`}>
      <h2>Sidepanel</h2>
    </div>
  );
};

export default Sidepanel;
