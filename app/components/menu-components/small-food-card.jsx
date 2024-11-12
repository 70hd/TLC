import React from 'react'
import Image from 'next/image'

const SmallCard = ({title, image,link}) => {
  return (
    <a href={link}>
    <button className='w-fit h-fit flex flex-col space-y-[10px] items-center justify-center px-4'>
          
      <Image
      src={image}
      width={170}
      height={179}
      className="rounded-lg max-w-full max-h-full"
      />
      <h1 className='p1 text-black text-center w-[170px]'>{title}</h1>


    </button>
    </a>
  )
}

export default SmallCard