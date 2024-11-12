"use client";
import Product from "../../props/catering-props/small-products";
import NotFound from "@/app/not-found";
import SmallCard from "@/app/components/menu-components/small-food-card";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import IconComponent from "@/app/components/foundation-components/icon";
import ClickedComponent from "@/app/components/menu-components/clicked-componenet";
import MiniProductComponent from "@/app/components/menu-components/mini-product-component";
import miniProducts from "@/app/props/catering-props/mini-products";
import selectSections from "@/app/props/catering-props/select-sections";
import Link from "next/link";
export default function ProductPage({ params }) {
  // Initialize based on current screen width
  const [isSmallScreen, setIsSmallScreen] = useState(() => window.innerWidth > 1100);
  const { slug } = params;
  const router = useRouter();
  const product = Product[slug];
  const [clicked, setClicked] = useState(slug);

  

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth > 1100);
    };

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return <NotFound />;
  if (!product) {
    return <NotFound />;
  }



  const Sort = () => {
    switch (clicked) {
      case "Aperitivos":
        return <MiniProductComponent sides={miniProducts.Aperitivos} />;
      case "Soups":
        return <MiniProductComponent sides={miniProducts.Soups} />;
      case "Salads":
        return <MiniProductComponent sides={miniProducts.Salads} />;
      case "Burritos":
        return <MiniProductComponent sides={miniProducts.Burritos} />;
      case "Bowls":
        return <MiniProductComponent sides={miniProducts.Bowls} />;
      case "Tacos":
        return <MiniProductComponent sides={miniProducts.Tacos} />;
      case "Enchiladas":
        return <MiniProductComponent sides={miniProducts.Enchiladas} />;
      case "Kids":
        return <MiniProductComponent sides={miniProducts.Kids} />;
      case "Sides":
        return <MiniProductComponent sides={miniProducts.Sides} />;
      case "Dessert":
        return <MiniProductComponent sides={miniProducts.Dessert} />;
      case "Beverages":
        return <MiniProductComponent sides={miniProducts.Beverages} />;
      case "Sodas":
        return <MiniProductComponent sides={miniProducts.Sodas} />;
      default:
        return <MiniProductComponent sides={miniProducts.Breakfast} />;
    }
  };

  if (isSmallScreen) {
    return (
      <div className="w-full h-fit space-x-9 flex flex-row custom-padding py-9">
        <div className="w-[285px] h-fit space-y-9 flex flex-col">
          {Object.keys(selectSections).map((section) => (
            <ClickedComponent
              key={section}
              clicked={clicked}
              {...selectSections[section]}
            />
          ))}
        </div>

        <div className="w-full h-fit text-center space-y-9">
          <h1 className="font-normal text-5xl text-[#15767E]">
            THE LITTLE CHIHUAHUA MENU
          </h1>
          <h1 className="font-medium text-2xl text-black">{clicked}</h1>
          <Sort />
        </div>
      </div>
    );
  } else

  return (
    <div className="w-full h-fit flex flex-col space-y-9 custom-padding">
      <Link href="../menu" className=" w-full">
      
        <button className="flex flex-row gap-2 items-center justify-center font-regular p2 text-[#51A4FF]">
        <IconComponent
            source="/Left-arrow.svg"
            theHeight={14}
            theWidth={14}
          />
          View Full Menu
          
        </button>
      </Link>

      <div className="w-full h-fit flex items-start justify-start gap-9 flex-wrap">
        {product.map(({ title, image, link, link2 }, index) => (
          <SmallCard key={index} title={title} image={image} link={link} link2={link2} />
        ))}
      </div>
    </div>
  );
}
