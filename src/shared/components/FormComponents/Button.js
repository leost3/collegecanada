import React from "react";
import "./Button.scss";

const Button = ({ socialmedia, onClick, size, inverse, danger, children }) => {
  return (
    <button
      onClick={onClick}
      className={`button button-${size || "default"}  ${inverse &&
        "button-inverse"} ${danger && "button-danger"} ${socialmedia &&
        `button-${socialmedia}`}`}
    >
      <span>{socialmedia}</span>
      {children}
    </button>
  );
};

export default Button;
