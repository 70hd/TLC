import Image from 'next/image'
import React from 'react'
import ButtonComponenet from '../foundation-components/button'

const Menu = ({
    text,
    title,
    imageTitle,
    image,
    alt,
    cta1,
    cta2,
    link1,
    link2,
    target1,
    target2
}) => {
  return (
    <div className='flex flex-col space-y-9'>
    <h1 className="font-normal text-5xl text-[#15767E]">
    {title}
  </h1>
  <h1 className='text-black text-lg font-semibold'>
    {imageTitle}
  </h1>
  <Image
    src={image}
    width={753}
    height={129}
    alt={alt}
  />
  <div className='flex flex-col items-center space-y-3'>
    <div className='flex w-fit space-x-9'>
        <ButtonComponenet
        CTA = {cta1}
        link={link1}
        theTarget={target1}
        />
        <ButtonComponenet
        CTA = {cta2}
        link={link2}
        theTarget={target2}
        />
    </div>
    <h1 className='font-normal w-full text-xs text-black' dangerouslySetInnerHTML={{ __html: text }} />
  </div>
</div>
  )
}

export default Menu

