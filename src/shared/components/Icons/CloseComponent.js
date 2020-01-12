import React from "react";
import "./CloseComponent.scss";

const CloseComponent = ({onClick}) => {
  return <span className="close-component" onClick={onClick}>&#10006;</span>;
};

export default CloseComponent;
