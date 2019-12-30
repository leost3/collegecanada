import React, { useState } from "react";
import "./Header.scss";

import LoginWindow from "../UIElements/LoginWindow/LoginWindow";
import Button from "../FormComponents/Button";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(true);

  const toggleLogin = () => {
    setIsLoginOpen(prevLogin => !prevLogin);
  };
  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  const authenticateUser = e => {
    e.preventDefault();
    setIsLoginOpen(false);
    console.log("login");
  };

  return (
    <div className="main-header">
      <div className="header">
        <span className="logo">logo</span>

        <Button onClick={toggleLogin} className="login-buton">
          Login
        </Button>
        {isLoginOpen && (
          <LoginWindow
            closeLogin={closeLogin}
            authenticateUser={authenticateUser}
          >
            POPOVER
          </LoginWindow>
        )}
      </div>
    </div>
  );
};

export default Header;
