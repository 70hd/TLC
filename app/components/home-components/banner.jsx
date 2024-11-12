import React from "react";
import MenuModal from '../foundation-components/menuModal';

const Banner = ({ h1, p1, theCTA }) => {
  return (
    <div className="bg-green-800 bg-[url('/Banner.png')] w-full space-y-6 custom-padding py-12 flex flex-col items-center justify-center">
      <h1 className="text-black h2 text-center w-full">{h1}</h1>
      <h1 className="p1 text-black text-center w-full">{p1}</h1>
      <MenuModal TheCTA={theCTA} style="text-black p2" isButtonProp={"true"} />
    </div>
  );
};

export default Banner;
