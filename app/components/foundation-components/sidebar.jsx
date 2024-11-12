"use client";
import React, { useEffect, useState } from "react";
import IconComponent from "./icon";
import Image from "next/image";
// import translations from "@/app/props/translations/props"

// import translations from "@/app/props/translations/props";
import MenuModal from "./menuModal";
// import { useLanguageContext } from "@/app/context/language-context";

const Sidebar = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { language, setLanguage } = useLanguageContext();
  const [smallInfo, setSmallInfo] = useState({
    languages: false,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);
  function LinkComponent({ text, link, theTarget }) {
    return (
      <a href={link} target={theTarget}>
        <button className="font-regular p1 text-black">
        {text}

          </button>
      </a>
    );
  }

  function Clicked(name) {
    setSmallInfo((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  }

  function Information({ name, link1, link2, text1, text2, target1, target2 }) {
    if (smallInfo[name]) {
      return (
        <div className="h-fit mt-4 w-fit flex flex-col space-y-1">
  <a
    href={link1}
    target={target1}
    onClick={() => {
      setLanguage(text1); // set the language state to text1 directly
    }}
  >
    <button
      className={`w-full text-black text-[16px] inter-style cursor-pointer ${
        language === text1 ? "font-black" : ""
      }`}
    >
      {text1}
    </button>
  </a>
  <a
    href={link2}
    target={target2}
    onClick={() => {
      setLanguage(text2);
    }}
  >
    <button
        className={`w-full text-black text-[16px] inter-style cursor-pointer ${
          language === text2 ? "font-black" : ""
        }`}
    >
      {text2}
    </button>
  </a>
</div>

      );
    }
    return null;
  }

  return (
    <div>
      <div onClick={openModal}>
        <IconComponent source="/menu.svg" theWidth="90" theHeight="90" />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative w-screen h-screen bg-white flex flex-col custom-padding py-12 space-y-9 overflow-y-auto">
            <div className="w-full flex flex-row justify-between items-center">
              <a href="/">
                <IconComponent
                  source="/Logo.svg"
                  theWidth="45"
                  theHeight="45"
                />
              </a>
              <button onClick={closeModal}>
                <Image src="/xIcon.svg" width={22.5} height={22.5} />
              </button>
            </div>

            <div className="w-full h-fit flex flex-col space-y-9">
            {/* <LinkComponent
                text={translations[language]?.menu || translations["English"].menu}
                link="/menu"
              /> */}
              {/* <button onClick={closeModal}> */}
              <MenuModal TheCTA={translations[language]?.menu || translations["English"].menu} TheCTA2="VIEW MENU" style="p1 text-black"/>
              {/* </button> */}
              <LinkComponent
                text={translations[language]?.about || translations["English"].about}
                link="/about"
              />
              <LinkComponent
                text={
                  translations[language]?.catering || translations["English"].catering
                }
                link="https://api.getspoonfed.com/1443/the-little-chihuahua/"
                theTarget="_blank"
              />
              <LinkComponent
                text={
                  translations[language]?.location || translations["English"].location
                }
                link="/locations"
              />
              <LinkComponent
                text={
                  translations[language]?.rewards || translations["English"].rewards
                }
                link="/rewards"
              />
              <LinkComponent
                text={
                  translations[language]?.merchandise ||
                  translations["English"].merchandise
                }
                link="https://shop.thelittlechihuahua.com/"
                theTarget="_blank"
              />
              <LinkComponent
                text={
                  language === "English"
                    ? "Gift Cards"
                    : translations[language]?.giftCards ||
                      translations["English"].giftCards
                }
                link="https://squareup.com/gift/0F7NT350GSZBH/order"
                theTarget="_blank"
              />
             
              <LinkComponent
                 text={
                  language === "English"
                    ? "Contact"
                    : translations[language]?.contact ||
                      translations["English"].contact
                }
                link="/contact"
              />
              <div className="flex flex-col  items-center justify-center">
                <div className="w-full h-fit flex flex-row justify-between">
                <h1 className="text-black p1">
                    {language === "English" ? "Language" : "Idioma"}
                  </h1>
                  <a onClick={() => Clicked("languages")}>
                    <IconComponent
                      source={smallInfo.languages ? "/minus.svg" : "/plus.svg"}
                      theWidth="22"
                      theHeight="22"
                      className="block max-w-full max-h-full"
                    />
                  </a>
                </div>
                <div className="w-full px-2">
                  <Information
                    name="languages"
                    text1="English"
                    text2="Spanish"
                  />
                </div>
              </div>
              <div className="w-full h-fit flex flex-row justify-between">
                <LinkComponent
                  text={translations[language]?.findYourRestaurant ||
                    translations["English"].findYourRestaurant}
                  link="https://www.google.com/maps/place/The+Little+Chihuahua/@37.6132268,-122.3934217,15.84z/data=!4m10!1m2!2m1!1sthe+little+chihuahua!3m6!1s0x808f77dd4630e30f:0x958680d5232a3bbc!8m2!3d37.6135948!4d-122.3849346!15sChR0aGUgbGl0dGxlIGNoaWh1YWh1YSIDiAEBWhYiFHRoZSBsaXR0bGUgY2hpaHVhaHVhkgEKcmVzdGF1cmFudOABAA!16s%2Fg%2F11hzkm20jv?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D"
                  theTarget="_blank"
                />
                <a
                  href="https://www.google.com/maps/place/The+Little+Chihuahua/@37.6132268,-122.3934217,15.84z/data=!4m10!1m2!2m1!1sthe+little+chihuahua!3m6!1s0x808f77dd4630e30f:0x958680d5232a3bbc!8m2!3d37.6135948!4d-122.3849346!15sChR0aGUgbGl0dGxlIGNoaWh1YWh1YSIDiAEBWhYiFHRoZSBsaXR0bGUgY2hpaHVhaHVhkgEKcmVzdGF1cmFudOABAA!16s%2Fg%2F11hzkm20jv?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="block"
                >
                  <IconComponent
                    source="/pin.svg"
                    theWidth="22"
                    theHeight="22"
                    // Ensure the display is block or inline-block
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
