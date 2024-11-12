import React from 'react'

const FormSelect = ({
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
    thePT,
    option0,
    option0text,
    option1,
    option1text,
    option2,
    option2text,
    option3,
    option3text,
    option4,
    option4text
}) => {
  return (
    <select
      type={theType}
      className="p2 placeholder-black/75 text-black rounded-s bg-white border border-[#CED4DA] px-3 py-3" 
      style={{ minWidth: theWidth, maxWidth: theWidth, minHeight: theHeight, maxHeight: theHeight, paddingLeft: thePL, paddingRight: thePR, paddingBottom: thePB, paddingTop: thePT }}
      placeholder={thePlaceholder}
      onChange={theOnChange}
      name={theName}
      value={theValue}
      maxLength={maxLength}
      required
    >
      {option0text && <option value={option0}>{option0text}</option>}
      {option1 && option1text && <option value={option1}>{option1text}</option>}
      {option2 && option2text && <option value={option2}>{option2text}</option>}
      {option3 && option3text && <option value={option3}>{option3text}</option>}
      {option4 && option4text && <option value={option4}>{option4text}</option>}
    </select>
  );
}

export default FormSelect;
