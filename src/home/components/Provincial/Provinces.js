import React, { useState } from "react";
import Panel from "./Panel"
import "./Provinces.scss";

import ProvinceList from "./ProvincesList";

const Provinces = () => {
  const [isPanelToggled, setisPanelToggled] = useState(false);


  const isProvinceSelected = () => {
    setisPanelToggled(true);
  };

  const togglePanel = () => {
    setisPanelToggled(prevState => !prevState);
  };

  return (
    <div className="content">
      <ProvinceList
        isPanelToggled={isPanelToggled}
        isProvinceSelected={isProvinceSelected}
      />
      <Panel isPanelToggled={isPanelToggled} togglePanel={togglePanel}/>
    </div>
  );
};

export default Provinces;
