import React from "react";
import "./ProvinceItem.scss";
import Card from "../../shared/components/UIElements/Card/Card";
import { withRouter } from "react-router-dom";

const ProvinceItem = ({ province, capital, id, history }) => {
  
  return (
    <Card>
      <div
        className="province-card"
        onClick={() => history.push(`/provinces/${province}/${id}`)}
      >
        <span className="province-name">{province}</span>
        <div className="image-container">
          <img
            src={require(`../../images/provinces/${province}.jpg`)}
            alt={`${province}`}
          />
        </div>
        <div className="buttons-container"></div>
        <div className="capital">
          <span className="capital-name">{capital}</span>
        </div>
      </div>
    </Card>
  );
};

export default withRouter(ProvinceItem);
