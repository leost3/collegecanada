import React from "react";

import ProvinceItem from "./ProvinceItem";

const ProvicesList = props => {
  const provinces = [
    {
      name: "Quebec",
      cities: ["montreal", "quebec city"],
      capital: "quebec city",
      population: 2000000
    },
    {
      name: "Ontario",
      cities: ["montreal", "quebec city"],
      capital: "quebec city",
      population: 2000000
    },
    {
      name: "Alberta",
      cities: ["montreal", "quebec city"],
      capital: "quebec city",
      population: 2000000
    },
    {
      name: "British Columbia",
      cities: ["montreal", "quebec city"],
      capital: "quebec city",
      population: 2000000
    },
    {
      name: "Manitoba",
      cities: ["montreal", "quebec city"],
      capital: "quebec city",
      population: 2000000
    },
    {
      name: "New Brunswick",
      cities: ["montreal", "quebec city"],
      capital: "quebec city",
      population: 2000000
    },
    {
      name: "Labrator",
      cities: ["montreal", "quebec city"],
      capital: "quebec city",
      population: 2000000
    },
    {
      name: "Labrator",
      cities: ["montreal", "quebec city"],
      capital: "quebec city",
      population: 2000000
    },
    {
      name: "Nova Scotia",
      cities: ["montreal", "quebec city"],
      capital: "quebec city",
      population: 2000000
    },
    {
      name: "Prince Edward Island",
      cities: ["montreal", "quebec city"],
      capital: "quebec city",
      population: 2000000
    },
    {
      name: "Newfoundland and Labrator",
      cities: ["montreal", "quebec city"],
      capital: "quebec city",
      population: 2000000
    },
    {
      name: "Yukon",
      cities: ["montreal", "quebec city"],
      capital: "quebec city",
      population: 2000000
    },
    {
      name: "Northwest Territories",
      cities: ["montreal", "quebec city"],
      capital: "quebec city",
      population: 2000000
    }
  ];

  return provinces.map((province, i) => {
    return <ProvinceItem key={i} {...props} />;
  });
};

export default ProvicesList;
