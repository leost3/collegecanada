import React, { useState } from "react";
import Panel from "./Panel"
import "./Provinces.scss";

import ProvinceList from "./ProvincesList";

const Provinces = () => {
  const [isPanelToggled, setisPanelToggled] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("")

  const isProvinceSelected = (province) => {
    setisPanelToggled(true);
    setSelectedProvince(province)
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
      <Panel isPanelToggled={isPanelToggled} togglePanel={togglePanel} selectedProvince={selectedProvince}/>
    </div>
  );
};

export default Provinces;
