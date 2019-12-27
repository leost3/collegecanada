import React from "react";
import "./Button.scss";

const Button = props => {
  return (
    <button
      onClick={props.onClick}
      className={`button button-${props.size || "default"}  ${props.inverse &&
        "button-inverse"} ${props.danger && "button-danger"}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
