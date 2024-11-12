import Image from 'next/image'
import React from 'react'

const IconComponent = ({
    source,
    theWidth,
    theHeight,
    theOnClick
}) => {
  return (
    <Image
          src={source}
          width={theWidth}
          height={theHeight}
          onClick={theOnClick}
          style= {{
            maxWidth: theWidth,
            minWidth: theWidth,
            maxHeight: theHeight,
            minHeight: theHeight,

          }}
        />
  )
}

export default IconComponent