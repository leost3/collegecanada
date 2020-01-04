import React from "react";
import "./Navlinks.scss";
import Link from "./Link"

const Navlinks = () => {
  const links = [
    { id: 0, path: "provinces" },
    { id: 1, path: "cities" },
    { id: 3, path: "colleges" }
  ];

  return <div className="nav-links">
      {links.map(link => {
          return <Link key={link.id} id={link.id} path={link.path}/>
      })}
  </div>;
};

export default Navlinks;
