import React, { useState, useCallback } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import ProvinceInformation from "./Province/pages/ProvinceInformation";
import Header from "./shared/components/header/Header";
import SubHeader from "./shared/components/header/SubHeader";
import NavigationBar from "./shared/components/header/NavigationBar";
import HomePageContainer from "./home/pages/HomePageContainer"

import { SearchContext,SearchResultsContext } from "./shared/context/SearchContext";

function App() {
  const [searchedPlace, setSearchedPlace] = useState({ searchedPlace: "" });

  const updateSeachedPlace = useCallback(value => {
    setSearchedPlace({ searchedPlace:value});
  }, []);

  const [searchedResults,setSearchedResults] = useState({results:0})

  const updateSearchedResults= useCallback(result => {
      setSearchedResults({results:result})
  },[])


  return (
    <SearchResultsContext.Provider value={{
      searchedResults:searchedResults,
      updateSearchedResults:updateSearchedResults
    }}>
    <SearchContext.Provider
      value={{
        searchedPlace: searchedPlace,
        updateSeachedPlace: updateSeachedPlace
      }}
    >
      <main>
        <Header />
        <SubHeader />
        <NavigationBar />
        <Router>
          <Switch >
          <Route path="/" exact>
            <HomePageContainer />
          </Route>
          <Route path="/provinces/:provinceName/:id/">
            <ProvinceInformation />
          </Route>
          <Redirect to="/" />
          </Switch>
        </Router>
      </main>
    </SearchContext.Provider>
    </SearchResultsContext.Provider>
  );
}

export default App;
