import React, { useReducer } from "react";
import "./InputForm.scss";
import { validate } from "../../utils/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators)
      };
    case "TOUCHED":
      return {
        ...state,
        isTouched: true
      };
    default:
      return state;
  }
};

const InputForm = ({ type, label, validators, errorMessage, disabled }) => {
  console.log(validators);

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouched: false
  });

  const changeHandler = e => {
    dispatch({
      type: "CHANGE",
      value: e.target.value,
      validators: validators
    });
  };

  const touchHandler = event => {
    dispatch({
      type: "TOUCHED"
    });
  };

  return (
    <div className="input-group">
      <input
        className={`form-input ${
          !inputState.isValid && inputState.isTouched
            ? "form-input--invalid"
            : ""
        }`}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
      <label
        className={`${
          inputState.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label ? label : ""}
      </label>
      {!inputState.isValid && inputState.isTouched && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputForm;
