import React from "react";
import "./Link.scss";

const Links = ({id, path}) => {

  return <div className="links">
      <span className="links-path">
          {path}
      </span>
  </div>;
};

export default Links;
