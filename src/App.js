import React from "react";
import "./App.css";

import Provinces from "./home/pages/Provinces";
import Header from "./shared/components/header/Header";
import SubHeader from "./shared/components/header/SubHeader";

function App() {
  return (
    <main>
      <Header />
      <SubHeader />
      <Provinces />
    </main>
  );
}

export default App;
