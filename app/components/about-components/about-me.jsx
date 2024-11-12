import Image from 'next/image'
import React from 'react'

const AboutMe = ({
    source,
    text,
    title
}) => {
  return (
    <div className='flex items-start flex-col space-y-9 w-full px-2'>
        <div className="w-full custom-padding h-fit items-start justify-start">
        <h1 className="w-full text-start h1 text-[#15767E]">{title}</h1>
      </div>
      <div className="flex flex-col lg:items-center md:items-start lg:justify-center md:justify-start custom-padding space-y-9 lg:space-x-9 md:space-y-9 md:flex-col lg:flex-row">
        <Image
          src={source}
          width={560}
          height={420}
          alt="Image"
          className='min-w-[360px]'
        />
        <h1 className="text-black max-w-[560px] text-start" dangerouslySetInnerHTML={{ __html: text }}>
        </h1>
      </div>

    </div>)

  // ) <div className="w-full custom-padding flex lg:flex-wrap lg:space-x-9 md:space-y-9  items-start">
}

export default AboutMe