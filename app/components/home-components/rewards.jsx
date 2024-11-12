import Image from 'next/image'
import React from 'react'

const Rewards = ({
    image,
    h1,
    p1
}) => {
  return (
    <div className="flex flex-col lg:flex-row sm:flex-col space-y-9 lg:space-x-9 sm:space-y-9 custom-padding w-full h-fit items-center justify-center">
      <div className='w-[500px] h-[500px] relative items-center'>
    <Image
      src={image}
      width={500}
      height={620}
      className="min-w-[500px] max-w-[500px] min-h-[500px] max-h-[500px] inset-0 absolute"
    />
    </div>
    <div className="w-full lg:w-[652px] sm:w-full space-y-3 items-center justify-center text-start">
      <h1 className="text-[#15767E] h2 w-full">
        {h1}
      </h1>
      <h1 className="p2 text-black w-full">
        {p1}
      </h1>
    </div>
  </div>
  )
}

export default Rewards