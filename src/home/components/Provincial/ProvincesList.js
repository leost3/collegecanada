import React, { useState, useContext, useEffect } from "react";
import "./ProvincesList.scss";
import ProvinceItem from "../Provincial/ProvinceItem";
import EmptyState from "../../../shared/components/Empty-state/EmptyState";
import Skeleton from "../../../shared/components/Skeleton/Skeleton";

import { SearchContext } from "../../../shared/context/SearchContext";

const ProvincesList = ({ isProvinceSelected, isPanelToggled }) => {
  useEffect(() => {
    setTimeout(() => {
      retrieveProvinces([
        // DUMMY DATA
        {
          id: 0,
          name: "Quebec",
          title: "QC",
          cities: ["montreal", "quebec city"],
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
      ]);
    }, 2000);
  }, []);

  const searchContext = useContext(SearchContext);

  const [provinces, setProvinces] = useState([]);

  const retrieveProvinces = provinces => {
    setProvinces(provinces);
  };

  const [selectedProvince, setSelectedProvince] = useState("");

  const updateSelectedProvince = province => {
    setSelectedProvince(province);
    isProvinceSelected(province);
  };

  const filtered = searchContext.searchedPlace;

  const filteredProvinces = provinces.filter(province =>
    province.name.toLowerCase().includes(filtered)
  );

  const hasProvinceBeenSelected = selectedProvince.length > 0;

  const renderProvinces = filteredProvinces.map(province => {
    return (
      <ProvinceItem
        key={province.id}
        id={province.id}
        province={province.name}
        capital={province.capital}
        updateSelectedProvince={updateSelectedProvince}
        selectedProvince={selectedProvince}
      />
    );
  });

  const hasProvinces = filteredProvinces.length > 0;

  if (hasProvinces) {
    return (
      <div className="provinces">
        <div
          className={`provinces-content ${
            hasProvinceBeenSelected && isPanelToggled ? "shrink" : ""
          }`}
        >
          {renderProvinces}
        </div>
      </div>
    );
  }

  const contentHasNotRendered = provinces.length === 0;

  if (contentHasNotRendered) {
    return (
      <div className="provinces">
        <Skeleton />
      </div>
    );
  }

  return <EmptyState />;
};

export default ProvincesList;
