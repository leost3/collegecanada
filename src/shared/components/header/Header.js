import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

import LoginWindow from "../UIElements/LoginWindow/LoginWindow";
import Button from "../FormComponents/Button";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const [isUserUthenticated, setIsUserAthenticated] = useState(false);

  const toggleLogin = () => {
    setIsLoginOpen(prevLogin => !prevLogin);
  };

  const closeLogin = e => {
    setIsLoginOpen(false);
  };

  const logout = e => {
    setIsUserAthenticated(false);
  };

  return (
    <div className="main-header">
      <div className="header">
          <Link to="/">
            <span className="logo">logo</span>
          </Link>
        {!isUserUthenticated ? (
          <Button onClick={toggleLogin} className="login-buton">
            Login
          </Button>
        ) : (
          <div className="logout" onClick={logout}>
            Logout
          </div>
        )}
        {isLoginOpen && <LoginWindow closeLogin={closeLogin}></LoginWindow>}
      </div>
    </div>
  );
};

export default Header;
