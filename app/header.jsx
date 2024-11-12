"use client";
import React, { useEffect, useRef, useState } from "react";
import IconComponent from "./components/foundation-components/icon";
import Modal from "./components/foundation-components/modal";
import Sidebar from "./components/foundation-components/sidebar";
import { useLanguageContext } from "./context/language-context";
import translations from "./props/translations/props";
import MenuModal from "./components/foundation-components/menuModal";

const Header = () => {
  function LinkComponent({ text, link, theTarget }) {
    return (
      <a href={link} target={theTarget}>
        <button className="font-regular p2 text-black">{text}</button>
      </a>
    );
  }

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { language, setLanguage } = useLanguageContext(); // Access language from context
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1250);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for screen resize
    window.addEventListener("resize", checkScreenSize);

    // Add event listener for clicks outside the dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (isSmallScreen) {
    return (
      <div className="sticky top-0 z-50 bg-white w-full h-fit items-end flex flex-col justify-center">
        <div className="w-full h-[12px] bg-[#CD3626]" />
        <div className="w-full h-fit flex flex-row custom-padding py-6 items-center justify-between">
          <div className="flex flex-row justify-center items-center w-[165px] h-[90px]">
            <a href="/">
              <IconComponent source="/Logo.svg" theWidth="90" theHeight="90" />
            </a>
            <Sidebar />
          </div>
          <Modal
            TheCTA={
              translations[language]?.orderOnline ||
              translations["English"].orderOnline
            }
            TheCTA2="SUBMIT"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="sticky top-0 z-50 bg-white w-full h-fit items-end flex flex-col justify-center">
        <div className="w-full h-[12px] bg-[#CD3626]" />
        <div className="w-fill h-fit space-x-24 flex flex-row custom-padding py-6 items-start justify-center">
          <a href="/">
            <IconComponent source="/Logo.svg" theWidth="90" theHeight="90" />
          </a>
          <div className="w-[1064px] h-fit space-y-9">
            <div className="w-full h-fit space-x-9 flex flex-row items-center justify-end">
              <div className="relative flex flex-col">
                <div
                  className="flex flex-row space-x-1 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <h1 className="text-black p2">
                    {language === "English" ? "Language" : "Idioma"}
                  </h1>
                  <IconComponent
                    source="/Down arrow.svg"
                    theWidth="12"
                    theHeight="15"
                  />
                </div>
                {isOpen && (
                  <div
                    ref={dropdownRef} // Attach the ref here
                    className="absolute left-0 mt-10 bg-white border rounded shadow-lg"
                  >
                    <div className="px-1 py-2 space-y-1 flex w-[100px] items-center justify-center flex-col">
                      <button
                        onClick={() => {
                          setLanguage("English");
                          setIsOpen(false);
                        }}
                        className={`w-full text-black text-[16px] inter-style hover:bg-gray-200 cursor-pointer ${
                          language === "English" ? "font-black" : ""
                        }`}
                      >
                        English
                      </button>

                      <button
                        onClick={() => {
                          setLanguage("Spanish");
                          setIsOpen(false);
                        }}
                        className={`w-full text-black text-[16px] inter-style hover:bg-gray-200 cursor-pointer ${
                          language === "Spanish" ? "font-black" : ""
                        }`}
                      >
                        Spanish
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-row space-x-1">
                <IconComponent
                  source="/Location.svg"
                  theWidth="12"
                  theHeight="15"
                />
                <a
                  href="https://www.google.com/maps/place/The+Little+Chihuahua/@37.6132268,-122.3934217,15.84z/data=!4m10!1m2!2m1!1sthe+little+chihuahua!3m6!1s0x808f77dd4630e30f:0x958680d5232a3bbc!8m2!3d37.6135948!4d-122.3849346!15sChR0aGUgbGl0dGxlIGNoaWh1YWh1YSIDiAEBWhYiFHRoZSBsaXR0bGUgY2hpaHVhaHVhkgEKcmVzdGF1cmFudOABAA!16s%2Fg%2F11hzkm20jv?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <h1 className="text-[#0052AC] font-normal p2">
                    {translations[language]?.findYourRestaurant ||
                      translations["English"].findYourRestaurant}
                  </h1>
                </a>
              </div>
              <MenuModal
                TheCTA={
                  translations[language]?.orderOnline ||
                  translations["English"].orderOnline
                }
                style="text-black p2"
                isButtonProp={"true"}
              />
            </div>
            <div className="w-full items-end justify-end h-fit flex flex-row space-x-9">
              <MenuModal
                TheCTA={
                  translations[language]?.menu || translations["English"].menu
                }
                style="text-black p2"
                isButtonProp={""}
              />
              <LinkComponent
                text={
                  translations[language]?.about || translations["English"].about
                }
                link="/about"
              />
              <LinkComponent
                text={
                  translations[language]?.catering ||
                  translations["English"].catering
                }
                link="https://api.getspoonfed.com/1443/the-little-chihuahua/"
                theTarget="_blank"
              />
              <LinkComponent
                text={
                  translations[language]?.location ||
                  translations["English"].location
                }
                link="/locations"
              />
              <LinkComponent
                text={
                  translations[language]?.rewards ||
                  translations["English"].rewards
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
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;
