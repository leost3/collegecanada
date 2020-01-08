import React,{useState} from 'react'

import Provinces from "./Provinces"
import FederalInformation from "./FederalInformation"

const HomePageContainer = () => {

  const [page, setPage] = useState("Provinces")

  return (
    <React.Fragment>
      {page === "Provinces"&&<Provinces />}
      {page === "Federal"&&<FederalInformation />}
    </React.Fragment>
  )
}

export default HomePageContainer