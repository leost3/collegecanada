import React from "react";
import "./ProvinceItem.scss";

const ProvinceItem = ({ province }) => {
  console.log(province);
  return (
    <div className="province-card">
      <span className="name">{province.name}</span>
      <div className="image-container">
        <img
          src={require(`../../images/provinces/${province.name}.jpg`)}
          alt={`${province.name}`}
        />
      </div>
      <div className="capital">
        <span className="capital-name">{province.capital}</span>
      </div>
    </div>
  );
};

export default ProvinceItem;
