import React, { useState, useContext, useEffect } from "react";

import ProvinceItem from "./ProvinceItem";
import Card from "../../shared/components/UIElements/Card/Card";
import { SearchContext } from "../../shared/context/SearchContext";

const ProvicesList = props => {
  const searchContext = useContext(SearchContext);


  const [provinces, setProvinces] = useState([])

  const retrieveProvinces = provinces => {
    setProvinces(provinces)
  }

  useEffect(() => {
    setTimeout(() => {
      setProvinces(
        [
          {
            id: 0,
            name: "Quebec",
            cities: ["montreal", "quebec city"],
            capital: "quebec city",
            population: 2000000
          },
          {
            id: 1,
            name: "Ontario",
            cities: ["montreal", "quebec city"],
            capital: "quebec city",
            population: 2000000
          },
          {
            id: 2,
            name: "Alberta",
            cities: ["montreal", "quebec city"],
            capital: "quebec city",
            population: 2000000
          },
          {
            id: 3,
            name: "British Columbia",
            cities: ["montreal", "quebec city"],
            capital: "quebec city",
            population: 2000000
          },
          {
            id: 4,
            name: "Manitoba",
            cities: ["montreal", "quebec city"],
            capital: "quebec city",
            population: 2000000
          },
          {
            id: 5,
            name: "New Brunswick",
            cities: ["montreal", "quebec city"],
            capital: "quebec city",
            population: 2000000
          },
          {
            id: 8,
            name: "Newfoundland and Labrator",
            cities: ["montreal", "quebec city"],
            capital: "quebec city",
            population: 2000000
          },
          {
            id: 9,
            name: "Nova Scotia",
            cities: ["montreal", "quebec city"],
            capital: "quebec city",
            population: 2000000
          },
          {
            id: 10,
            name: "Prince Edward Island",
            cities: ["montreal", "quebec city"],
            capital: "quebec city",
            population: 2000000
          },
      
          {
            id: 11,
            name: "Yukon",
            cities: ["montreal", "quebec city"],
            capital: "quebec city",
            population: 2000000
          },
          {
            id: 12,
            name: "Northwest Territories",
            cities: ["montreal", "quebec city"],
            capital: "quebec city",
            population: 2000000
          }
        ]
      )
    }, 2000);
  },[])


  const filter = searchContext.searchedPlace.searchedPlace;

  const filteredProvinces = provinces.filter(province =>
    province.name.toLowerCase().includes(filter)
  );

  return filteredProvinces.map(province => {
    return (
      <Card>
        <ProvinceItem key={province.id} province={province} />
      </Card>
    );
  });
};

export default ProvicesList;
