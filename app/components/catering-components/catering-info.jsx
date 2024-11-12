import React from 'react'
import ButtonComponenet from '../foundation-components/button'

const CateringInfo = ({
    header,
    button1,
    button2,
    text,
    link1,
    target1,
    link2,
    target2
}) => {
  return (
    <div className='w-full flex flex-col space-y-9 items-center justify-center'>
    <h1 className="text-[#15767E] text-5xl font-normal">{header}</h1>
      <h1 className="font-medium text-2xl flex-col text-black justify-center items-center flex text-center" dangerouslySetInnerHTML={{ __html: text }}>
      </h1>

      <div className="flex w-fit space-x-9">
         <ButtonComponenet
        CTA = {button1}
        link={link1}
        theTarget={target1}
        />
        <ButtonComponenet
        CTA = {button2}
        link={link2}
        theTarget={target2}
        />
      </div>
    </div>
  )
}

export default CateringInfo