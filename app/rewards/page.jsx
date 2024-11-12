"use client"
import React, { useState } from "react";
import ButtonComponenet from "../components/foundation-components/button";
import Image from "next/image";
import HowItWorks from "../components/rewards-compenents/how-it-works";
import HowToEarn from "../components/rewards-compenents/how-to-earn/page";
import Reward from "../components/rewards-compenents/reward";

const Rewards = () => {

  return (
    <div className="w-full custom-padding items-center flex flex-col space-y-9">
      <h1 className="w-full h1 text-center text-[#15767E]">
        The Little Chihuahua rewards
      </h1>
      <h1 className="w-full p1 text-center text-black">
        The Best Reward Program For People Who Want To <br />
        Capitalize On Free Food Opportunities
      </h1>
      <div className="w-fit flex space-x-9">
        <ButtonComponenet CTA="ORDER ONLINE" />
        <ButtonComponenet CTA="ORDER ONLINE" />
      </div>
      <div className="w-fit h-fit items-center justify-center overflow-hidden">
        <Image
          src="/rewards-large.svg"
          width={1440}
          height={520}
          className="w-full h-[auto]"
        />
      </div>
      <h1 className="w-full h1 text-center text-[#15767E]">How It Works</h1>
      <div className="h-fit w-full items-center justify-start flex flex-wrap gap-9">

        <HowItWorks
        image = "/sign-up.svg"
        text= "Create an account"
        />
        <HowItWorks
        image = "/redeem.svg"
        text= "Instantly earn free $5 off"
        />
        <HowItWorks
        image = "/redeem.svg"
        text= "Redeem your reward"
        />
      </div>
      <h1 className="w-full h1 text-center text-[#15767E]">Ways To Earn</h1>
      <HowToEarn
      text="Visit your local Little Chihuahua Restaurant and order using the rewards program"
      subTitle="ACQUIRE"
      image="/airport-image.png"
      isNormal={true}
      />
      <HowToEarn
      text="Visit your local Little Chihuahua Restaurant and order using the rewards program"
      subTitle="ACQUIRE"
      image="/airport-image.png"
      isNormal={false}
      />
      <HowToEarn
      text="Visit your local Little Chihuahua Restaurant and order using the rewards program"
      subTitle="ACQUIRE"
      image="/airport-image.png"
      isNormal={true}
      />
      <h1 className="w-full h1 text-center text-[#15767E]">More Point More Rewards</h1>
      <div className="gap-9 h-fit w-full flex flex-wrap">
      <Reward
      image="/black-rewards-box.svg"
      level="LEVEL 1"
      name="Free Horchata"
      />
      <Reward
      image="/black-rewards-box.svg"
      level="LEVEL 1"
      name="Free Horchata"
      />
      <Reward
      image="/black-rewards-box.svg"
      level="LEVEL 1"
      name="Free Horchata"
      />
      <Reward
      image="/black-rewards-box.svg"
      level="LEVEL 1"
      name="Free Horchata"
      />
      <Reward
      image="/black-rewards-box.svg"
      level="LEVEL 1"
      name="Free Horchata"
      />
      <Reward
      image="/black-rewards-box.svg"
      level="LEVEL 1"
      name="Free Horchata"
      />
      <Reward
      image="/black-rewards-box.svg"
      level="LEVEL 1"
      name="Free Horchata"
      />
      <Reward
      image="/black-rewards-box.svg"
      level="LEVEL 1"
      name="Free Horchata"
      />

      </div>


    </div>
  );
};

export default Rewards;
