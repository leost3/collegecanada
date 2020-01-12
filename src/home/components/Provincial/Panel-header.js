import React from "react";
import "./Panel-header.scss";

import CloseComponent from "../../../shared/components/Icons/CloseComponent";

const PanelHeader = ({togglePanel,children}) => {
  return (
    <div className="panel-header">
      <span className="panel-header-title">{children}</span>
      <CloseComponent onClick={togglePanel}/>
    </div>
  );
};

export default PanelHeader;
