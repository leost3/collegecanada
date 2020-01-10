import React,{useContext} from 'react'

import Provinces from "./Provinces"
import FederalInformation from "./FederalInformation"
import { NavlinkContext } from '../../shared/context/NavlinkContext'

const HomePageContainer = () => {


  const navlinkContext = useContext(NavlinkContext)

  console.log(navlinkContext);
  

  return (
    <React.Fragment>
      {navlinkContext.content === "Provincial"&&<Provinces />}
      {navlinkContext.content === "Federal"&&<FederalInformation />}
    </React.Fragment>
  )
}

export default HomePageContainer