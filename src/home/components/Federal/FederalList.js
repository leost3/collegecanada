import React from "react";
import FederalItem from "./FederalItem";
import "./FederalList.scss";

const categories = [
  {
    id: 0,
    category: "Federal Skilled Worker"
  },
  { id: 1, category: "Federal Skilled Trades" },
  { id: 2, category: "Canadian Experience Class" }
];

const FederalList = props => {
  return (
    <div className="federal-items">
      {categories.map(category => {
        return <FederalItem id={category.id} key={category.id} category={category.category} />;
      })}
    </div>
  );
};

export default FederalList;
