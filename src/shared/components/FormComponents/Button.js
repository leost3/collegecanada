import React from "react";
import "./Button.scss";

const Button = ({
  socialmedia,
  onClick,
  size,
  inverse,
  danger,
  children,
  disabled
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button button-${size || "default"}  ${inverse &&
        "button-inverse"} ${danger && "button-danger"} ${socialmedia &&
        `button-${socialmedia}`}`}
    >
      {children}
    </button>
  );
};

export default Button;
