import React, { useState } from 'react'
import MenuModal from '../foundation-components/menuModal';


const LargeBoxes = ({cta,cta2, Title, Text, image, black}) => {
  return (
    <div className={`w-fit relative h-fit px-[5px] py-[12px] `} style={{ backgroundImage: `url(${image})` }}>
        <div className="w-[596px] h-[576px] flex flex-col space-y-[16px] items-center justify-start">
          <h1 className={`h2 w-fit h-fit  items-center ${black ? "text-black" : "text-white"}`}>{Title}</h1>
          <h1 className={`p1 w-fit h-fit items-center ${black ? "text-black" : "text-white"}`}>{Text}</h1>
          <div className="w-fit flex flex-row space-x-9">
          <MenuModal
            TheCTA={cta}
            style="text-black p2"
            isButtonProp={"true"}
          />
          <MenuModal
            TheCTA={cta2}
            style="text-black p2"
            isButtonProp={"true"}
          />
          </div>
        </div>
      </div>
  )
}


export default LargeBoxes



