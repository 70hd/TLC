import React from 'react'
import Image from 'next/image'

const Card = ({title, miniTitle, image,link}) => {
  return (
    <a href={link}>
    <button className='w-[285px] h-[285px] rounded-3xl flex flex-col space-y-[10px] items-start justify-center px-4  bg-white shadow-[0px_2px_2px_rgba(0,0,0,0.25)] relative transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
      <div className='w-full h-fit space-y-1 flex flex-col pl-2 items-start justify-start'>
          <h1 className='p2 text-[#606060] text-start'>{miniTitle}</h1>
          <h1 className='p1 text-black text-start'>{title}</h1>
      </div>
      <Image
      src={image}
      width={247}
      height={179}
      className="rounded-xl max-w-full max-h-full"
      />


    </button>
    </a>
  )
}

export default Card