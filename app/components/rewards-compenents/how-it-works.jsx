import Image from 'next/image'
import React from 'react'

const HowItWorks = ({image,text }) => {
  return (
    <div className="w-[392px] items-center justify-center h-fit flex flex-col space-y-9 px-5 ">
          <Image
            src={image}
            width={231}
            height={313}
            className="min-w-[231px] max-w-[231px] h-[auto]"
          />

          <h1 className="w-full h-fit p1 text-center text-black">{text}</h1>
        </div>
  )
}

export default HowItWorks