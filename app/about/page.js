import Image from "next/image";
import React from "react";
import NormalMessage from "../components/about-components/normal-messages";
import AboutMe from "../components/about-components/about-me";
import props from "../props/about-props/props";
import Heart from "../components/foundation-components/heart";


const about = () => {
  return (
    <div className="flex flex-col space-y-9 items-center justify-center">
      <div className="w-full custom-padding h-fit items-start justify-start">
        <h1 className="w-full h1 text-[#15767E]">
          We are a restaurant that<br/> strives for freshness
        </h1>
      </div>
      <div className="w-full custom-padding">
      <Image src="/about-hero.svg" width={1248} height={500} alt="hero image" />
      </div>
      <AboutMe
        {...props.aboutMe}
      />
      <div className="w-full custom-padding h-fit">
        <h1 className="w-full text-start h1 text-[#15767E]">
          Over 500 4.8 Star Reviews
        </h1>
      </div>

      <div className="w-full h-fit custom-padding">
        <div className="w-full h-fit flex flex-col space-y-9 items-start justify-start lg:space-x-9 md:space-y-9  lg:flex-row md:flex-col lg:items-center md:items-start lg:justify-center md:justify-start">
          <div className="w-fit h-fit relative">
          <div className="absolute top-[-60px] left-[-20px] sm:top-[-50px] sm:left-[-60px] w-fit h-fit z-10">
            <Heart/>
            </div>
            <NormalMessage
              {...props.largeMessage}
            />

          </div>
          <div className="w-fit h-fit items-end justify-end flex flex-col space-y-9">

          <NormalMessage
              {...props.firstNormalMessage}
            />
            <NormalMessage
              {...props.greyMessage}
            />
            <NormalMessage
              {...props.secondNormalMessage}
            />
          </div>

        </div>

      </div>
      <div className="w-full custom-padding h-fit items-start justify-start">
        <h1 className=" h1 text-[#15767E]">Our History</h1>
      </div>
    </div>
  );
};

export default about;
