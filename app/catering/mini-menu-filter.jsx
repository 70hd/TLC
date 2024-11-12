"use client";
import React, { useEffect, useState } from "react";
// import smallProducts from "../props/menu-props/small-products";
import SmallClickedComponent from "../components/menu-components/small-clicked-componenet";
import selectSections from "../props/catering-props/select-sections";
import SmallProductComponent from "../components/menu-components/mini-product-component";
import IconComponent from "../components/foundation-components/icon";

const MiniMenuFilter = () => {
        return(
          <div>


          
<div className="w-screen custom-padding  items-start justify-between h-fit flex flex-row ">
  <div className="w-fit flex flex-col space-y-4 items-start justify-start left-0">
      <SmallClickedComponent  {...selectSections.Aperitivos} />
      <SmallClickedComponent  {...selectSections.Tacos} />
      <SmallClickedComponent  {...selectSections.Burritos} />
      <SmallClickedComponent  {...selectSections.Salads} />
      <SmallClickedComponent  {...selectSections.Sides} />

  </div>
  <div className="w-fit flex flex-col space-y-4 items-start justify-start right-0">
  <SmallClickedComponent  {...selectSections.Kids} />
      <SmallClickedComponent  {...selectSections.Cookies} />
      <SmallClickedComponent  {...selectSections.Trays} />
      <SmallClickedComponent  {...selectSections.Beverages} />
  </div>
  </div>
</div>

        )
  
}

export default MiniMenuFilter