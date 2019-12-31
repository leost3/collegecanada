import React from "react";
import "./LoginWindow.scss";

import SocialmediaSigninButton from "../../FormComponents/SocialmediaSigninButton";
import Button from "../../FormComponents/Button";
import InputForm from "../../FormComponents/InputForm";

import { VALIDATOR__REQUIRED } from "../../../utils/validators";

const LoginWindow = ({ closeLogin, authenticateUser }) => {
  return (
    <div className="popover">
      <form onSubmit={authenticateUser}>
        <div className="popover-inputs">
          <InputForm
            type="email"
            height="35"
            fontSize="25"
            label="email"
            validators={[VALIDATOR__REQUIRED()]}
            errorMessage="Please, enter a valid e-mail"
          />
          <InputForm
            type="password"
            height="35"
            fontSize="25"
            label="password"
            validators={[VALIDATOR__REQUIRED()]}
            errorMessage="Password can not be empty"
          />
        </div>
        <div className="popover-buttons">
          <Button size="large" type="submit">
            login
          </Button>
          <Button size="large" type="button" onClick={closeLogin}>
            Cancel
          </Button>
        </div>
        <span className="register">
          Can't sign in? forget my password or register{" "}
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
