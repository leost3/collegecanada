import React, { useContext } from "react";

import NavigationBar from "../components/Navigation/NavigationBar";
import Provinces from "../components/Provincial/Provinces";
import FederalInformation from "./FederalInformation";
import Study from "../components/Study/Study"
import { NavlinkContext } from "../../shared/context/NavlinkContext";

const HomePageContainer = () => {
  const navlinkContext = useContext(NavlinkContext);

  return (
    <React.Fragment>
      <NavigationBar />
      
      {navlinkContext.content === "Study in Canada" && <Study />}
      {navlinkContext.content === "Provincial" && <Provinces />}
      {navlinkContext.content === "Federal" && <FederalInformation />}
    </React.Fragment>
  );
};

export default HomePageContainer;
