import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Backdrop from "../UIElements/backdrop/Backdrop"

// import LoginWindow from "../UIElements/LoginWindow/LoginWindow";
import SinginSingup from "../../../SinginSingup/Page/SinginSingup"
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

  const login = () => setIsUserAthenticated(true)

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
        {isLoginOpen &&<Backdrop />}
        {isLoginOpen &&<SinginSingup closeLogin={closeLogin} login={login} />}
        {/* {isLoginOpen && <SinginSingup closeLogin={closeLogin}></SinginSingup>} */}
      </div>
    </div>
  );
};

export default Header;
