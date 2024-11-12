import React from 'react';
import LinkComponent from './link-component';

const Render = ({ sides , Class}) => {
  return (
    <div className={Class}>
      {Array.isArray(sides) && sides.map(({ text, link, theTarget }, index) => (
        <LinkComponent key={index} text={text} theTarget={theTarget} link={link} />
      ))}
    </div>
  );
};

export default Render;