import React, { useCallback, useReducer } from "react";
import "./LoginWindow.scss";

import SocialmediaSigninButton from "../../FormComponents/SocialmediaSigninButton";
import Button from "../../FormComponents/Button";
import InputForm from "../../FormComponents/InputForm";

import { VALIDATOR__REQUIRED } from "../../../utils/validators";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let isFormValid = true;
      for (const inputName in state.inputs) {
        if (inputName === action.inputName) {
          isFormValid = isFormValid && action.isValid;
        } else {
          isFormValid = isFormValid && state.inputs[inputName].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputName]: {
            value: action.value,
            isValid: action.isValid
          }
        },
        isFormValid: isFormValid
      };
    default:
      return state;
  }
};

const LoginWindow = ({ closeLogin }) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      email: {
        value: "",
        isValid: false
      },
      password: {
        value: "",
        isValid: false
      }
    },
    isFormValid: false
  });

  const onInputChangeHandler = useCallback((name, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      inputName: name,
      value,
      isValid
    });
  }, []);

  const email = formState.inputs.email.value;
  const password = formState.inputs.password.value;

  const authenticateUser = (e, email, password) => {
    e.preventDefault();
    closeLogin();
    console.log(email, password);
  };

  return (
    <div className="popover">
      <form onSubmit={event => authenticateUser(event, email, password)}>
        <div className="popover-inputs">
          <InputForm
            name="email"
            height="35"
            fontSize="25"
            label="email"
            validators={[VALIDATOR__REQUIRED()]}
            errorMessage="E-mail field can not be blank"
            onInputChangeHandler={onInputChangeHandler}
          />
          <InputForm
            name="password"
            type="password"
            height="35"
            fontSize="25"
            label="password"
            validators={[VALIDATOR__REQUIRED()]}
            errorMessage="Password can not be empty"
            onInputChangeHandler={onInputChangeHandler}
          />
        </div>
        <div className="popover-buttons">
          <Button size="large" type="submit" disabled={!formState.isFormValid}>
            login
          </Button>
          <Button size="large" type="button" onClick={closeLogin}>
            Cancel
          </Button>
        </div>
        <span className="register">
          Not registered?{" "}
          <span className="sign-up">
            {" "}
            <u>click here</u>
          </span>{" "}
          to sign up!{" "}
        </span>
        <span className="forgot-password">
          <u>forgot my password</u>
        </span>
        <div className="popover-socialmedia">
          <SocialmediaSigninButton socialmedia="google" />
          <SocialmediaSigninButton socialmedia="facebook" />
        </div>
      </form>
    </div>
  );
};

export default LoginWindow;
