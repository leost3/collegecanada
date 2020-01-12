import React from "react";
import "./Link.scss";

const Links = ({ id, path, onClick, activeLink }) => {
  return (
    <div
      className={`link ${activeLink === path && "active"}`}
      onClick={() => onClick(path)}
    >
      <span className="link-path">{path}</span>
    </div>
  );
};

export default Links;
