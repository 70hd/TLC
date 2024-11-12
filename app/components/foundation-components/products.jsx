"use client";
import Image from "next/image";
import React, { useState } from "react";
import ButtonComponent from "./button";
import IconComponent from "./icon";
import MiniProductComponent from "../menu-components/mini-product-component";
import Props from "@/app/props/product-props/related-products";

const Products = ({
  image,
  title,
  description,
  cal,
  buttonCopy,
  firstSectionTitle,
  firstSectionMiniTitle,
  firstSectionDescription,
  SecondSectionTitle,
  SecondSectionMiniTitle,
  SecondSectionDescription,
  thirdSectionTitle,
  thirdSectionDescription,
  buttonLink,
  target,
  slug,
}) => {
  const [nutrients, setNutrients] = useState(false);
  const [ingredients, setIngredients] = useState(false);

  const NutrientsClicked = () =>
    nutrients ? (
      <div className="w-full h-fit p-6 flex flex-col space-y-6 bg-[#F0F2EF]">
        <h1 className="text-[#748C70] p1">{firstSectionMiniTitle}</h1>
        <h1 className="p2 w-full h-fit text-start text-[#0C0C0C]/40">
          {firstSectionDescription}
        </h1>
      </div>
    ) : null;

  const IngredientsClicked = () =>
    ingredients ? (
      <div className="w-full h-fit p-6 flex flex-col space-y-6 bg-[#F0F2EF]">
        <h1 className="text-[#748C70] p1">{SecondSectionMiniTitle}</h1>
        <h1 className="p2 w-full h-fit text-start text-[#0C0C0C]/40">
          {SecondSectionDescription}
        </h1>
      </div>
    ) : null;

  const PlusMinusToggle = ({ state, setState, plusSrc, minusSrc }) => (
    <button onClick={() => setState((prev) => !prev)}>
      <IconComponent
        source={state ? minusSrc : plusSrc}
        theWidth="24"
        theHeight="24"
      />
    </button>
  );

  return (
    <div className="flex flex-col space-y-9 items-start justify-start custom-padding">
      <div className="w-full h-fit flex flex-wrap space-x-9 justify-start items-start">
        <Image
          src={image}
          width={600}
          height={507}
          className=" max-w-[600px] max-h-[507px] w-full h-full"
          alt={title}
        />
        <div className="w-[525px] h-fit flex flex-col space-y-9 items-start justify-start">
          <h1 className="w-full h-fit font-normal h1 text-[#15667E]">
            {title}
          </h1>
          <h1 className="text-black font-medium p1">{cal}</h1>
          <h1 className="p2 text-black w-full h-fit">{description}</h1>
          <ButtonComponent
            link={buttonLink}
            CTA={buttonCopy}
            theTarget={target}
          />
        </div>
      </div>
      <div className="w-full h-fit flex flex-wrap gap-9 items-start justify-start">
        <div className="flex flex-col w-full md:w-[600px] sm:w-[600px] h-fit space-y-[1px] bg-[#CBCBCB] p-[1px]">
          <div className="w-full h-fit flex flex-row bg-[#F0F2EF] p-6 items-center justify-center">
            <h1 className="p1 w-full h-fit text-black">{firstSectionTitle}</h1>
            <PlusMinusToggle
              state={nutrients}
              setState={setNutrients}
              plusSrc="/plus.svg"
              minusSrc="/minus.svg"
            />
          </div>
          <NutrientsClicked />
          <div className="w-full h-fit flex flex-row bg-[#F0F2EF] border border-l-0 border-b-0 border-r-0 border-t-[1px] border-[#CBCBCB] p-6">
            <h1 className="p1 w-full h-fit text-black">{SecondSectionTitle}</h1>
            <PlusMinusToggle
              state={ingredients}
              setState={setIngredients}
              plusSrc="/plus.svg"
              minusSrc="/minus.svg"
            />
          </div>
          <IngredientsClicked />
        </div>
        <div className="flex flex-col w-[600px] h-fit space-y-6 p-4 border border-[#CBCBCB] bg-[#F0F2EF]">
          <div className="w-full h-fit px-4 py-2 border border-t-0 border-l-0 border-r-0 border-[#ADADAD]">
            <h1 className="p1 text-black">{thirdSectionTitle}</h1>
          </div>
          <h1 className="p2 text-black/40">{thirdSectionDescription}</h1>
        </div>
      </div>
      <div className="w-full flex items-start justify-start flex-col h-fit">
        <h1 className="h1 w-full text-[#15767E] text-start">RELATED PRODUCTS</h1>
        <MiniProductComponent sides={Props[slug]} />
      </div>
    </div>
  );
};

export default Products;
