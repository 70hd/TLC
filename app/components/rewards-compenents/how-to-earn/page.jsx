"use client"
import Image from "next/image";
import React, { useState } from "react";

const HowToEarn = ({ isNormal, text, subTitle, image }) => {
  const [normal, setNormal] = useState(isNormal);
  if (normal) {
    return (
      <div className="w-full flex flex-col space-y-9 lg:flex-row lg:space-x-9 sm:space-y-9 sm:flex-col h-fit items-center justify-center">
        <div className="lg:max-h-[367px] lg:max-w-[606px] sm:w-full sm:h-full h-fit flex flex-col space-y-3">
          <h1 className="p2 text-[#CD3626]">{subTitle}</h1>
          <h1 className="p1 text-black">{text}</h1>
        </div>
        <Image
          src={image}
          width={606}
          height={367}
          className="  lg:max-h-[367px] lg:max-w-[606px] sm:w-full sm:h-full"
        />
      </div>
    );
  } else {
    return(
      <div className="w-full flex flex-col space-y-9 lg:flex-row lg:space-x-9 sm:space-y-9 sm:flex-col h-fit items-center justify-center">
        <Image
          src={image}
          width={606}
          height={367}
          className="  lg:max-h-[367px] lg:max-w-[606px] sm:w-full sm:h-full"
        />
        <div className="lg:max-h-[367px] lg:max-w-[606px] sm:w-full sm:h-full h-fit flex flex-col space-y-3">
          <h1 className="p2 text-[#CD3626]">{subTitle}</h1>
          <h1 className="p1 text-black">{text}</h1>
        </div>
      </div>
    )
  }
};

export default HowToEarn;
