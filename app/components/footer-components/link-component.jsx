import React from 'react'

function LinkComponent({ text, link, theTarget }) {
    if (text && text.length > 0) {
      return (
        <a href={link} target={theTarget}>
          <button className="font-regular p2 text-black">{text}</button>
        </a>
      );
    } else {
      null;
    }
  }

export default LinkComponent