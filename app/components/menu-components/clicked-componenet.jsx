import React from 'react'
import IconComponent from '../foundation-components/icon';
import Link from 'next/link';

const ClickedComponent = ({
    clicked,
    ifclicked,
    redimage,
    blackimage,
    h1,
    link
}) => {
        if (clicked === ifclicked) {
          return (
            <Link href={link}>
            <div className="w-full h-[70px] flex flex-col space-y-9  overflow-hidden rounded-md bg-[#F4F3F3]">
              <div className="flex flex-row space-x-4 w-full items-center h-full">
                <div className="w-[8px] h-full bg-[#CD3626]" />
                <IconComponent source={redimage} theWidth="48" theHeight="48"/>; 
                <h1 className="text-black font-bold p2 text-start">{h1}</h1>
              </div>
            </div>
            </Link>
            
          );
        } else {
          return (
            <Link href={link}>
            <div className="w-full h-[70px] flex flex-col space-y-9  overflow-hidden rounded-md bg-[#FFFFFF]">
              <div className="flex flex-row space-x-4 w-full items-center h-full">
                <div className="w-[8px] h-full bg-[#FFFFFF]" />
                <IconComponent source={blackimage} theWidth="48" theHeight="48"/>; 
                <h1 className="text-black font-bold p2 text-start">{h1}</h1>
              </div>
            </div>
            </Link>
            
          );
        }
      
  
}

export default ClickedComponent