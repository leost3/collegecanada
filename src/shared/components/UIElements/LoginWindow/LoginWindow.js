import React, { useCallback, useReducer, useState, useEffect } from "react";
import "./LoginWindow.scss";

import SocialmediaSigninButton from "../../FormComponents/SocialmediaSigninButton";
import Button from "../../FormComponents/Button";
import InputForm from "../../FormComponents/InputForm";
import Modal from "../Modal/Modal";
import Backdrop from "../backdrop/Backdrop";
import SignupForm from "../SingupForm/SignupForm";

import {
  VALIDATOR__REQUIRED,
  VALIDATOR__MINLENGTH,
  VALIDATOR__EMAIL,
  VALIDATOR_PASSWORD_CONFIRM
} from "../../../utils/validators";

const formReducer = (state, action) => {
  console.log(state);
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
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openSignup = () => {
    dispatch({
      type: "OPEN_SINGUP"
    });
    setIsSignupOpen(true);
  };
  const closeSignup = () => {
    dispatch({
      type: "CLOSE_SINGUP"
    });
    setIsSignupOpen(false);
  };
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

  useEffect(() => {
    if (isSignupOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSignupOpen]);

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

  const renderLoginButtons = (
    <div className="popover-buttons">
      <Button
        inverse
        size="large"
        type="submit"
        disabled={!formState.isFormValid}
      >
        login
      </Button>
      <Button cancel size="large" type="button" onClick={closeLogin}>
        Cancel
      </Button>
    </div>
  );
  const renderSignupButtons = (
    <div className="popover-buttons">
      <Button
        inverse
        size="large"
        type="submit"
        disabled={!formState.isFormValid}
      >
        login
      </Button>
      <Button cancel size="large" type="button" onClick={closeSignup}>
        Cancel
      </Button>
    </div>
  );

  return (
    <React.Fragment>
      {isSignupOpen && <Backdrop onClick={closeSignup} />}
      {isSignupOpen && (
        <Modal>
          <SignupForm buttons={renderSignupButtons}>
            <InputForm
              onInputChangeHandler={onInputChangeHandler}
              type="text"
              name="first name"
              errorMessage="Please, input your first name"
              validators={[VALIDATOR__REQUIRED()]}
              label="first name"
            />
            <InputForm
              onInputChangeHandler={onInputChangeHandler}
              type="text"
              name="last name"
              errorMessage="Please, input your last name"
              validators={[VALIDATOR__REQUIRED()]}
              label="last name"
            />
            <InputForm
              onInputChangeHandler={onInputChangeHandler}
              type="email"
              name="email"
              errorMessage="Please, input a valid e-mail address"
              validators={[VALIDATOR__REQUIRED(), VALIDATOR__EMAIL()]}
              label="email"
            />
            <InputForm
              onInputChangeHandler={onInputChangeHandler}
              type="password"
              name="password"
              errorMessage="Sorry, the password is invalid, it should have at least 6 characters"
              validators={[VALIDATOR__REQUIRED(), VALIDATOR__MINLENGTH(6)]}
              label="password"
            />
            <InputForm
              onInputChangeHandler={onInputChangeHandler}
              type="password"
              name="password-confirm"
              errorMessage="passwords don't match"
              validators={[
                VALIDATOR__REQUIRED(),
                VALIDATOR__MINLENGTH(6),
                VALIDATOR_PASSWORD_CONFIRM(formState.inputs.password)
              ]}
              label="confirm your password"
            />
          </SignupForm>
        </Modal>
      )}
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

          {renderLoginButtons}

          <span className="register">
            Not registered?{" "}
            <span className="sign-up" onClick={openSignup}>
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
    </React.Fragment>
  );
};

export default LoginWindow;
