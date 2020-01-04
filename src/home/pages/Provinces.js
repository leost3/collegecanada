import React,{useState} from "react";
import "./Provinces.scss";

import ProviceList from "../components/ProvincesList";
import Sidepanel from "../../shared/components/UIElements/Sidepanel/Sidepanel";

const Provinces = () => {

  const [isPanelToggled,setisPanelToggled] = useState(false)
  
  const [selectedProvince, setSelectedProvince]= useState(null)

  const selectProvince = province => {
    setisPanelToggled(true)
  }

  const untogglePanel = () => {
    setisPanelToggled(prevState => !prevState)
  }


  return (
      <div className="content">
        <button onClick={untogglePanel} >panel</button>
        <ProviceList isPanelToggled={isPanelToggled}  selectProvince={selectProvince}  />
        <Sidepanel isPanelToggled={isPanelToggled}  />
      </div>
  );
};

export default Provinces;
