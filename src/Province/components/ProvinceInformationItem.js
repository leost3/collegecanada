import React, { useState, useEffect } from "react";
import "./ProvinceInformationItem.scss";

const ProvinceInformationItem = props => {
  const [displayedCityInformation, setDisplayedCityInformation] = useState([]);



  const updateDisplayedCity = city => {
    setDisplayedCityInformation(city);
  };
  useEffect(() => {
    setTimeout(() => {
      updateDisplayedCity(props.city);
    }, 1000);

    // updateDisplayedCity([city])
  }, [props.city]);

  return (
    <div className="information-card">
      <div className="information-title">
        <span className="information-title-1">{props.city}</span>
        <span className="information-title-2">[[[[BC]]]]</span>
      </div>
      <div className="image-container">
        <img
          src={require(`../../images/cities/${props.city}.jpg`)}
          alt="montreal"
        />
      </div>
    </div>
  );
};

export default ProvinceInformationItem;
