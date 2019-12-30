import React, { useState } from "react";
import "./Header.scss";

import LoginWindow from "../UIElements/LoginWindow/LoginWindow";
import Button from "../FormComponents/Button";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(true);

  const [isUserUthenticated, setIsUserAthenticated] = useState(false);

  const toggleLogin = () => {
    setIsLoginOpen(prevLogin => !prevLogin);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  const authenticateUser = e => {
    e.preventDefault();
    setIsUserAthenticated(true);
    setIsLoginOpen(false);
  };

  const logout = e => {
    setIsUserAthenticated(false);
  };

  return (
    <div className="main-header">
      <div className="header">
        <span className="logo">logo</span>
        {!isUserUthenticated ? (
          <Button onClick={toggleLogin} className="login-buton">
            Login
          </Button>
        ) : (
          <div className="logout" onClick={logout}>
            Logout
          </div>
        )}
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
