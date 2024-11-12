import React from 'react'

const FormInput = ({
    theHeight,
    theName,
    theOnChange,
    thePlaceholder,
    theType,
    theValue,
    theWidth,
    maxLength,
    thePB,
    thePR,
    thePL,
    thePT
}) => {
  return (
    <input
    type={theType}
    className="p2 placeholder-black/75 text-black  rounded-s bg-white border border-[#CED4DA] px-3 py-3" 
    style={{ minWidth: theWidth, maxWidth: theWidth, minHeight: theHeight, maxHeight: theHeight, paddingLeft: thePL, paddingRight: thePR, paddingBottom: thePB, paddingTop: thePT  }}
    placeholder={thePlaceholder}
    onChange={theOnChange}
    name={theName}
    value={theValue}
    maxLength={maxLength}
    required
  />
  )
}

export default FormInput