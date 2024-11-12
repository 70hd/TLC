import React from "react";

const Heart = () => {
  return (
    <div className="pl-[12px] pb-[6px] bg-[url('/message-bubble.svg')] w-[113px] h-[113px] flex items-center justify-center">
      <div className="bg-[url('/red-heart.svg')] w-[70px] h-[70px] bg-center bg-no-repeat" />
    </div>
  );
};

export default Heart;
