import React, { useState, useContext, useEffect } from "react";
import "./ProvinceInformation.scss";

import ProvinceInformationList from "../components/ProvinceInformationList"
import Card from "../../shared/components/UIElements/Card/Card";

const ProvinceInformation = props => {
  
  return (
    <div className="province-content">
      <ProvinceInformationList />
      <Card information ></Card >
    </div>

  )
};

export default ProvinceInformation;
