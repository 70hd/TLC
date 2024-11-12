"use client";
import React, { useEffect, useState } from "react";
import miniProducts from "../props/menu-props/mini-products";
import ClickedComponent from "../components/menu-components/clicked-componenet";
import selectSections from "../props/menu-props/select-sections";
import MiniProductComponent from "../components/menu-components/mini-product-component";
import MiniMenuFilter from "./mini-menu-filter";

const Filter = () => {
  const [clicked, setClicked] = useState("Menu");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const sortProducts = {
    Aperitivos: miniProducts.Aperitivos,
    Soups: miniProducts.Soups,
    Salads: miniProducts.Salads,
    Burritos: miniProducts.Burritos,
    Bowls: miniProducts.Bowls,
    Tacos: miniProducts.Tacos,
    Enchiladas: miniProducts.Enchiladas,
    Kids: miniProducts.Kids,
    Sides: miniProducts.Sides,
    Dessert: miniProducts.Dessert,
    Beverages: miniProducts.Beverages,
    Sodas: miniProducts.Sodas,
    Menu: miniProducts.Menu,
  };

  const Sort = () => {
    return (
      <MiniProductComponent sides={sortProducts[clicked] || miniProducts.Menu} />
    );
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1100);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isSmallScreen ? (
    <div>
      <MiniMenuFilter />
    </div>
  ) : (
    <div className="flex flex-col lg:flex-row custom-padding py-9 space-y-9 lg:space-y-0 lg:space-x-9">
      <div className="w-full lg:w-72 h-fit space-y-9 flex flex-col">
        {Object.keys(selectSections).map((section) => (
          <ClickedComponent
            key={section}
            clicked={clicked}
            setClicked={setClicked}
            {...selectSections[section]}
          />
        ))}
      </div>

      <div className="w-full h-fit space-y-9">
        <h1 className="font-normal text-3xl lg:text-5xl text-[#15767E]">
          THE LITTLE CHIHUAHUA MENU
        </h1>
        <h1 className="font-medium text-xl lg:text-2xl text-black">{clicked}</h1>
        <Sort />
      </div>
    </div>
  );
};

export default Filter;
