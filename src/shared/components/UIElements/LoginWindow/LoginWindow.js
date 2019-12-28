import React from "react";
import "./LoginWindow.scss";

import Button from "../../FormComponents/Button";

const LoginWindow = ({ children, closeLogin, authenticateUser }) => {
  return (
    <div className="popover">
      <div className="popover-content">{children}</div>
      <div className="popover-footer">
        <Button onClick={authenticateUser}>Login</Button>
        <Button onClick={closeLogin}>Cancel</Button>
      </div>
      <div className="popover-social-media-container">
        {/* <div className="popover-social-media-auth"> */}
        <Button onClick={authenticateUser} socialmedia="google" size="large" />
        <Button
          onClick={authenticateUser}
          socialmedia="facebook"
          size="large"
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default LoginWindow;
