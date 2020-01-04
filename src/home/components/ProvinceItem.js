import React from "react";
import "./ProvinceItem.scss";

const ProvinceItem = ({ province, id, onClick }) => {
    return (
      <div className="province-card" key={id} onClick={onClick}>
        <span className="province-name">{province.name}</span>
        <div className="image-container">
          <img
            src={require(`../../images/provinces/${province.name}.jpg`)}
            alt={`${province.name}`}
          />
        </div>
        <div className="buttons-container"></div>
        <div className="capital">
          <span className="capital-name">{province.capital}</span>
        </div>
      </div>
    );
};

export default ProvinceItem;
