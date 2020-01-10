import React, { useState } from "react";
import "./Provinces.scss";

import ProvinceList from "./ProvincesList";

const Provinces = () => {
  const [isPanelToggled, setisPanelToggled] = useState(false);

  const [selectedProvince, setSelectedProvince] = useState(null);

  const selectProvince = province => {
    setisPanelToggled(true);
  };

  const untogglePanel = () => {
    setisPanelToggled(prevState => !prevState);
  };

  return (
    <div className="content">
      <ProvinceList
        isPanelToggled={isPanelToggled}
        selectProvince={selectProvince}
      />
    </div>
  );
};

export default Provinces;
