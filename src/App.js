import React, { useState, useCallback } from "react";
import "./App.css";

import Provinces from "./home/pages/Provinces";
import Header from "./shared/components/header/Header";
import SubHeader from "./shared/components/header/SubHeader";

import { SearchContext } from "./shared/context/SearchContext";

function App() {
  const [searchedPlace, setSearchedPlace] = useState({ searchedPlace: "" });

  const updateSeachedPlace = useCallback(value => {
    console.log(value);
    console.log(typeof value);
    setSearchedPlace({ searchedPlace:value});
  }, []);

  return (
    <SearchContext.Provider
      value={{
        searchedPlace: searchedPlace,
        updateSeachedPlace: updateSeachedPlace
      }}
    >
      <main>
        <Header />
        <SubHeader />
        <Provinces />
      </main>
    </SearchContext.Provider>
  );
}

export default App;
