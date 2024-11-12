import React from "react";

const NormalMessage = ({ text, version }) => {

  if (version === "normal") {
    return (
      <div className="bg-[#51A4FF] w-[404px] lg:w-[381px] md:w-[381px] sm:w-[381px] h-fit rounded-l-[36px] rounded-tr-[36px] py-[30px] px-[36px]">
        <h1
          className="p1 w-full h-fit"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    );
  } else if (version === "large") {
    return (
        <div className="w-[404px] lg:w-[604px] md:w-[604px] sm:w-[604px] h-fit rounded-tl-[50px] rounded-r-[50px] bg-[#51A4FF] p-9 relative">
        <h1 className="p1 w-full h-fit" dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    )
  } else if (version === "grey") {
    return (
        <div className="w-[404px] lg:w-[472px] md:w-[472px] sm:w-[472px] h-fit px-[36px] py-[32px] bg-[#E5E3E3] rounded-r-[36px] rounded-tl-[36px]">
        <h1 className="p1 w-full h-fit text-black" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    )
  } else {

  }
};

export default NormalMessage;
