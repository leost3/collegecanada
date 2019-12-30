import React, { useState } from "react";
import "./InputForm.scss";

const InputForm = ({ type, label }) => {
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = e => {
    setInputValue(e.target.value);
  };

  return (
    <div className="input-group">
      <input
        className="form-input"
        type={type}
        value={inputValue}
        onChange={inputChangeHandler}
      />
      <label
        className={`${inputValue.length ? "shrink" : ""} form-input-label`}
      >
        {label ? label : ""}
      </label>
    </div>
  );
};

export default InputForm;
