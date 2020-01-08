import React from "react";
import "./ProvinceItem.scss";
import Card from "../../shared/components/UIElements/Card/Card"

const ProvinceItem = ({ province, id, onClick }) => {
    return (
      <Card >

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
            </Card>
    );
};

export default ProvinceItem;
