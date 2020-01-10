import React from "react";
import "./Link.scss";

const Links = ({id,path, onClick}) => {

  return <div className="links" onClick={() => onClick(path)}>
      <span className="links-path">
          {path}
      </span>
  </div>;
};

export default Links;
