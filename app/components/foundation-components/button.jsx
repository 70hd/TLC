import React from 'react'

const ButtonComponenet = ({
    CTA,
    theTarget,
    link
}) => {
  return (
    <a href={link} target={theTarget}>
    <button className='Button-component'>
        <h1 className='Button'>{CTA}</h1>
      </button>
    </a>
  )
}

export default ButtonComponenet