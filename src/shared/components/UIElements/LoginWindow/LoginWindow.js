import React from "react";
import "./LoginWindow.scss";

import SocialmediaSigninButton from "../../FormComponents/SocialmediaSigninButton";
import Button from "../../FormComponents/Button";
import Input from "../../FormComponents/Input";

const LoginWindow = ({ closeLogin, authenticateUser }) => {
  return (
    <div className="popover">
      <form onSubmit={authenticateUser}>
        <div className="popover-inputs">
          <Input height="35" fontSize="25" />
          <Input height="35" fontSize="25" />
        </div>
        <div className="popover-buttons">
          <Button size="large" type="submit">
            login
          </Button>
          <Button size="large">Cancel</Button>
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
