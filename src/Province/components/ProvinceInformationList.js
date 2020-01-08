import React, { useState,  useEffect } from "react";
// import SkeletonProvince from "../../shared/components/Skeleton/SkeletonProvince"
import "./ProvinceInformationList.scss";
import { useParams } from "react-router-dom";

import ProvinceInformatinItem from "./ProvinceInformationItem";

const ProvinceInformationList = props => {
  const [provinceCities, setProvinceCities] = useState([]);
  
  
  const {provinceName} = useParams();

  const initializeProvince = cities => {
    setProvinceCities(cities);
  };

  useEffect(() => {
    setTimeout(() => {
      const provinces = [
        // DUMMY DATA
        {
          id: 0,
          name: "Quebec",
          title: "QC",
          cities: ["Montreal", "Quebec City"],
          capital: "Quebec City",
          population: 2000000
        },
        {
          id: 1,
          name: "Ontario",
          title: "ON",
          cities: ["Ottawa", "Toronto", "Mississauga", "Brampton", "Hamilton"],
          capital: "Toronto",
          population: 2000000
        },
        {
          id: 2,
          name: "Alberta",
          title: "QC",
          cities: ["Edmonton", "Red Deer", "Calgary"],
          capital: "quebec city",
          population: 2000000
        },
        {
          id: 3,
          name: "British Columbia",
          title: "BC",
          cities: ["Victoria", "Vancouver", "Kelowna"],
          capital: "Victoria",
          population: 2000000
        },
        {
          id: 4,
          name: "Manitoba",
          title: "MB",
          cities: ["Winnipeg", "Brandon"],
          capital: "Winnipeg",
          population: 2000000
        },
        {
          id: 5,
          name: "New Brunswick",
          title: "QC",
          cities: ["Fredericton", "Moncton"],
          capital: "Fredericton",
          population: 2000000
        },
        {
          id: 6,
          name: "Newfoundland and Labrator",
          title: "QC",
          cities: ["St. John's"],
          capital: "St. John's",
          population: 2000000
        },
        {
          id: 7,
          name: "Nova Scotia",
          title: "QC",
          cities: ["Halifax", "Sydney"],
          capital: "Halifax",
          population: 2000000
        },
        {
          id: 8,
          name: "Prince Edward Island",
          title: "P.E.I",
          cities: ["Charlottetown"],
          capital: "Charlottetown",
          population: 2000000
        },
        {
          id: 9,
          name: "Saskatchewan",
          title: "SASK",
          cities: ["Regina", "Saskatoon"],
          capital: "Regina",
          population: 2000000
        }
      ];

      
  
      const cities = provinces.filter(province => province.name === provinceName);
      initializeProvince(cities);
    },1000)
    
  }, []);
  
  if (provinceCities.length === 0) {
    return "<SkeletonProvince />"
  }
  return (
    <div className="information-container">
      {provinceCities[0].cities.map((city, index) => {
        console.log(city)
        return (
            <ProvinceInformatinItem key={index} city={city}/>
        );
      })}
    </div>
  );
};

export default ProvinceInformationList;
