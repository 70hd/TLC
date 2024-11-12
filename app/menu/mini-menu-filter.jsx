"use client";
import React, { useEffect, useState } from "react";
// import smallProducts from "../props/menu-props/small-products";
import SmallClickedComponent from "../components/menu-components/small-clicked-componenet";
import selectSections from "../props/menu-props/select-sections";
import SmallProductComponent from "../components/menu-components/mini-product-component";
import IconComponent from "../components/foundation-components/icon";



const MiniMenuFilter = () => {

  const sections = Object.keys(selectSections); 
  const half = Math.ceil(sections.length / 2);
  const firstHalf = sections.slice(0, half); 
  const secondHalf = sections.slice(half); 

  return (
    <div className="w-full custom-padding flex flex-col items-start justify-between h-fit md:flex-row">
      <div className="w-full md:1/2 flex flex-col space-y-4 items-start">
        {firstHalf.map((section) => (
          <SmallClickedComponent key={section} {...selectSections[section]} />
        ))}  
      </div>

      <div className="w-full md:w-1/2 flex flex-col space-y-4 items-start">
      {secondHalf.map((section) => (
        <SmallClickedComponent key={secondHalf} {...selectSections[section]}/>
      ))}
      </div>



    </div>

  );
};

export default MiniMenuFilter;
