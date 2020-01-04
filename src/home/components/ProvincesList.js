import React, { useState, useContext, useEffect } from "react";
import "./ProvincesList.scss"
import ProvinceItem from "./ProvinceItem";
import Card from "../../shared/components/UIElements/Card/Card";
import {
  SearchContext,
  SearchResultsContext
} from "../../shared/context/SearchContext";

const ProvincesList = ({selectProvince, }) => {
  useEffect(() => {
    setTimeout(() => {
      retrieveProvinces([
        // DUMMY DATA
        {
          id: 0,
          name: "Quebec",
          title:"QC",
          cities: ["montreal", "quebec city"],
          capital: "Quebec City",
          population: 2000000
        },
        {
          id: 1,
          name: "Ontario",
          title:"ON",
          cities: ["Ottawa", "Toronto","Mississauga","Brampton","Hamilton"],
          capital: "Toronto",
          population: 2000000
        },
        {
          id: 2,
          name: "Alberta",
          title:"QC",
          cities: ["Edmonton", "Red Deer","Calgary"],
          capital: "quebec city",
          population: 2000000
        },
        {
          id: 3,
          name: "British Columbia",
          title:"BC",
          cities: ["Victoria", "Vancouver","Kelowna"],
          capital: "Victoria",
          population: 2000000
        },
        {
          id: 4,
          name: "Manitoba",
          title:"MB",
          cities: ["Winnipeg", "Brandon"],
          capital: "Winnipeg",
          population: 2000000
        },
        {
          id: 5,
          name: "New Brunswick",
          title:"QC",
          cities: ["Fredericton", "Moncton"],
          capital: "Fredericton",
          population: 2000000
        },
        {
          id: 8,
          name: "Newfoundland and Labrator",
          title:"QC",
          cities: ["St. John's"],
          capital: "St. John's",
          population: 2000000
        },
        {
          id: 9,
          name: "Nova Scotia",
          title:"QC",
          cities: ["Halifax", "Sydney"],
          capital: "Halifax",
          population: 2000000
        },
        {
          id: 10,
          name: "Prince Edward Island",
          title:"P.E.I",
          cities: ["Charlottetown"],
          capital: "Charlottetown",
          population: 2000000
        },
        {
          id: 11,
          name: "Saskatchewan ",
          title:"SASK",
          cities: ["Regina", "Saskatoon"],
          capital: "Regina",
          population: 2000000
        }
      ]);
    }, 2000);
  }, []);

  const searchContext = useContext(SearchContext);

  const [provinces, setProvinces] = useState([]);

  const retrieveProvinces = provinces => {
    setProvinces(provinces);
  };

  // const selectProvince = province => {
  //   console.log(province.target.querySelector(".province-name").textContent);
  // };

  const filterText = searchContext.searchedPlace.searchedPlace;

  const filteredProvinces = provinces.filter(province =>
    province.name.toLowerCase().includes(filterText)
  );

  const renderProvinces = filteredProvinces.map(province => {
    return (
      <Card key={province.id}>
        <ProvinceItem
          key={province.id}
          province={province}
          onClick={selectProvince}
        />
      </Card>
    );
  })

  if (filteredProvinces.length > 0) {
    return (
      <div className="provinces" >
        {renderProvinces}
      </div>
    );
  }

  if (provinces.length === 0) {
    return (
      // Create component with spinner
      <div className="loading">
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    // Create component
    <div className="not-found">
      <h1>Not found</h1>
    </div>
  );
};

export default ProvincesList;
