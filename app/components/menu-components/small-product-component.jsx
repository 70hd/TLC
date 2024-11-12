"use client"
import React, { useState } from 'react';
import Card from './food-card';
import SmallCard from './small-food-card';
import ClickedComponent from './clicked-componenet';



const SmallProductComponent = ({
  sides
}) => {
  return (
    <div className="w-full flex flex-wrap h-fit gap-9">
      {Array.isArray(sides) && sides.map(({ redimage, blackimage, h1, link }, index) => (
        <ClickedComponent key={index} redimage={redimage} blackimage={blackimage} h1={h1} link={link} />
      ))}
    </div>  
  )} 

export default SmallProductComponent;
