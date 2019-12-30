import React from "react";
import "./Input.scss";

const Input = ({ type, width, height, fontSize, placeholder }) => {
  return (
    <input
      style={{
        width: `${width}px`,
        height: `${height}px`,
        fontSize: `${fontSize}px`
      }}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
