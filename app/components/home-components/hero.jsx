import React from 'react'
import ButtonComponenet from '../foundation-components/button'

const Hero = ({
    h1,
    p2,
    theCTA,
    theLink
}) => {
  return (
    <div className="w-full h-[659.15px] custom-padding py-[176px] items-start justify-start bg-[url('/Hero.png')] flex flex-col space-y-4">

    <h1 className="h1 w-fit text-white">
      {h1}
    </h1>
   
    <h1 className="p2">
    {p2}
    </h1>

    <ButtonComponenet
    CTA = {theCTA}
    link={theLink}
    />
    


  </div>
  )
}

export default Hero