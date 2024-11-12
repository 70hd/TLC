// app/page.js
"use client";

import Hero from "./components/home-components/hero";
import Banner from "./components/home-components/banner";
import Rewards from "./components/home-components/rewards";
import MiniProductComponent from "./components/menu-components/mini-product-component";
import LargeBoxes from "./components/home-components/large-boxes";
import { useEffect, useState } from "react";

export default function Home() {
  const [database, setDatabase] = useState([]);
  const [buttonDatabase, setButtonDatabase] = useState([]);
  const getData = (name) =>
    database.find((item) => item.name === name)?.text || "";
  const getImageData = (name) =>
    database.find((item) => item.name === name)?.link || "/";
  const getCtaData = (name) =>
    buttonDatabase.find((item) => item.name === name)?.cta || "/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/home");
        if (!response.ok) throw new Error("Network response failed");
        const data = await response.json();
        setDatabase(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/button");
        if (!response.ok) throw new Error("Network response failed");
        const data = await response.json();
        setButtonDatabase(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const foodItems = Array.from({ length: 7 }, (_, i) => ({
    title: getData(`Food ${i + 1} Title`),
    miniTitle: getData(`Food ${i + 1} Mini Title`),
    image: getImageData(`Food ${i + 1} Image`),
    link: "/home",
  }));

  const largeBoxesData = [
    {
      title: getData("Rewards Title"),
      text: getData("Rewards Body"),
      image: getImageData("Rewards Image"),
      cta: getCtaData("Home Rewards Button"),
      cta2: getCtaData("Home Rewards Button 2"),
      black: true,
    },
    {
      title: getData("Order Online Title"),
      text: getData("Order Online Body"),
      image: getImageData("Order Online Image"),
      cta: getCtaData("Home Order Online Button"),
      cta2: getCtaData("Home Order Online Button 2"),
      black: false,
    },
    {
      title: getData("Visit locations Title"),
      text: getData("Visit locations Body"),
      image: getImageData("Visit locations Image"),
      cta: getCtaData("Home Locations Button"),
      cta2: getCtaData("Home Locations Button 2"),
      black: false,
    },
    {
      title: getData("View The Menu Title"),
      text: getData("View The Menu Body"),
      image: getImageData("View The Menu Image"),
      cta: getCtaData("Home Menu Button"),
      cta2: getCtaData("Home Menu Button 2"),
      black: true,
    },
  ];

  return (
    <div className="w-full flex flex-col space-y-9">

      <Hero
        h1={getData("Hero Title")}
        p2={getData("Hero Body")}
        theCTA={getCtaData("Home Hero Button")}
        theLink="./menu"
      />
      <div className="w-full overflow-hidden relative h-[312px]  flex items-center justify-center">
        <div className="absolute right-[-59.6%]">
          <MiniProductComponent sides={foodItems} />
        </div>
      </div>
      <div className="flex flex-wrap w-full custom-padding gap-8">
        {largeBoxesData.map(
          ({ title, cta2, cta, text, image, black }, index) => (
            <LargeBoxes
              key={index}
              cta={cta}
              cta2={cta2}
              Title={title}
              Text={text}
              image={image}
              black={black}
            />
          )
        )}
      </div>
      <Banner
        h1={getData("Banner Title")}
        p1={getData("Banner Body")}
        theCTA={getCtaData("Home Banner Button")}
      />
      <Rewards
        image={getImageData("Rewards CTA Image")}
        h1={getData("Rewards CTA Title")}
        p1={getData("Rewards CTA Body")}
      />
    </div>
  );
}
