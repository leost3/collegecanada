import React from "react";

import "./SocialmediaSigninButton.scss";

const SocialmediaSigninButton = ({ socialmedia }) => {
  const upperSocialmedia =
    socialmedia.charAt(0).toUpperCase() + socialmedia.substring(1);

  return (
    <div className="gSignInWrapper">
      <div className="socialmedia-button customGPlusSignIn ">
        <span className={`icon-${socialmedia}`}></span>
        <span className="buttonText">{upperSocialmedia}</span>
      </div>
    </div>
  );
};

export default SocialmediaSigninButton;
