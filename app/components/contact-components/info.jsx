import React from 'react'

const Info = ({
    title,
    paragraph1,
    paragraph2
}) => {
  return (
    <div className="flex flex-col space-y-9 w-full custom-padding">
        <h1 className="h1 text-[#15767E]">{title}</h1>
        <h1 className="p2 text-black">
          {paragraph1}
        </h1>
        <h1 className="p2 text-black">
        {paragraph2}
        </h1>
      </div>
  )
}

export default Info
