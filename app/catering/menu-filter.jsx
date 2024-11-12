"use client";
import React, { useEffect, useState } from "react";
import miniProducts from "../props/catering-props/mini-products";
import ClickedComponent from "../components/menu-components/clicked-componenet";
import selectSections from "../props/catering-props/select-sections";
import MiniProductComponent from "../components/menu-components/mini-product-component";
import MiniMenuFilter from "./mini-menu-filter";

const Filter = () => {
  const [clicked, setClicked] = useState("Menu");
  function Sort() {
    if (clicked === "Aperitivos") {
      return (
          <MiniProductComponent sides={miniProducts.Aperitivos} />
      );
    } else if (clicked === "Tacos") {
      return <MiniProductComponent sides={miniProducts.Tacos} />
    } else if (clicked === "Burritos") {
      return (
          <MiniProductComponent sides={miniProducts.Burritos} />
          
      );
    } else if (clicked === "Salads") {
      return (
          <MiniProductComponent sides={miniProducts.Salads} />
      );
    } else if (clicked === "Sides") {
      return (
        <MiniProductComponent sides={miniProducts.Sides} />
      );
    } else if (clicked === "Kids") {
      return (
        <MiniProductComponent sides={miniProducts.Kids} />
      );
    } else if (clicked === "Cookies") {
      return (
        <MiniProductComponent sides={miniProducts.Cookies} />
      );
    } else if (clicked === "Trays") {
      return (
        <MiniProductComponent sides={miniProducts.Trays} />
      );
    } else if (clicked === "Beverages") {
      return (
        <MiniProductComponent sides={miniProducts.Beverages} />
      );
    } else {
      return (
        <MiniProductComponent sides={miniProducts.Menu} />
      );
    }
  }
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1100);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for screen resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Optional: Log to verify screen size state
  useEffect(() => {
    console.log("isSmallScreen:", isSmallScreen);
  }, [isSmallScreen]);
  if (isSmallScreen) {
  return (
    <div>
      <MiniMenuFilter/>
      </div>
  
  )} else {
  return (
    <div className="w-full h-fit space-x-9 flex flex-row custom-padding py-9">
    <div className="w-[285px] h-fit space-y-9 flex flex-col">
      <ClickedComponent clicked={clicked} {...selectSections.Menu} />
      <ClickedComponent clicked={clicked} {...selectSections.Aperitivos} />
      <ClickedComponent clicked={clicked} {...selectSections.Tacos} />
      <ClickedComponent clicked={clicked} {...selectSections.Burritos} />
      <ClickedComponent clicked={clicked} {...selectSections.Salads} />
      <ClickedComponent clicked={clicked} {...selectSections.Sides} />
      <ClickedComponent clicked={clicked} {...selectSections.Kids} />
      <ClickedComponent clicked={clicked} {...selectSections.Cookies} />
      <ClickedComponent clicked={clicked} {...selectSections.Trays} />
      <ClickedComponent clicked={clicked} {...selectSections.Beverages} />
    </div>
  
    <div className="w-full h-fit space-y-9">
      <h1 className="font-normal text-5xl text-[#15767E]">
        THE LITTLE CHIHUAHUA MENU
      </h1>
      <h1 className="font-medium text-2xl text-black">{clicked}</h1>
      <Sort />
    </div>
  </div>
  
  )}
};
export default Filter;
