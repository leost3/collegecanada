import React,{useContext, useCallback} from "react";
import "./Navlinks.scss";
import Link from "./Link";
import { NavlinkContext } from "../../context/NavlinkContext";

const Navlinks = () => {
  const links = [
    { id: 0, path: "Provincial" },
    { id: 1, path: "Federal" },
    { id: 3, path: "Study in Canada" }
  ];


  const navlinkContext = useContext(NavlinkContext)

  const updateDisplayedContent = useCallback(content => navlinkContext.updateDisplayContent(content),[])

  const activeLink = navlinkContext.content
  console.log(navlinkContext.content)

  return (
    <div className="nav-links">
      {links.map(link => {
        return (
          <Link
            key={link.id}
            id={link.id}
            path={link.path}
            activeLink={activeLink}
            onClick={updateDisplayedContent}
          />
        );
      })}
    </div>
  );
};

export default Navlinks;
