"use client";
import React, { useEffect, useState } from "react";
import ButtonComponenet from "./button";
import Image from "next/image";

const MenuModal = ({ TheCTA, style, isButtonProp }) => {
  const [isButton, setIsButton] = useState(isButtonProp);
  const [formData, setFormData] = useState({
    location: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const kane = isButtonProp
  

  const closePropModalOpenModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const Images = () => (formData.location ? `/${formData.location}-image.png` : "/airport-image.png");

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen])

  function Button() {
    {if(isButton === "true"){
      return(
        <button onClick={closePropModalOpenModal}>
        <ButtonComponenet CTA={TheCTA}/>
        </button>
        
      )
    } else {
      return(
      <button onClick={closePropModalOpenModal}>
      <h1 className={style}>{TheCTA}</h1>
    </button>
    )}
    }
  }

  return (
    <div>
      {/* Trigger button to open modal */}
      <Button/>
      
      

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Modal wrapper */}
          <div className="relative w-fit max-w-[488px] max-h-[90vh] flex flex-col p-6 bg-white border-4 border-[#C83A2D] rounded-xl space-y-5 overflow-y-auto">
            {/* Close button */}
            <button onClick={closeModal} className="absolute right-6 top-6">
              <Image src="/xIcon.svg" width={14} height={14} />
            </button>

            {/* Modal content */}
            <h1 className="p1 text-black">Select a Location to Order</h1>
            <h2 className="p2 text-black">Three San Francisco locations to serve you</h2>

            {/* Image and buttons */}
            <Image
              src={Images()}
              width={392}
              height={255}
              className="rounded-xl max-h-[225px] min-h-[225px] max-w-[392px] min-w-[392px]"
              alt="Location image"
            />

            <div className="flex space-x-9">
              <button
                onMouseEnter={() => setFormData({ location: "polk" })}
                onMouseLeave={() => setFormData({ location: "" })}
              >
                <ButtonComponenet
                  CTA="Polk"
                  theTarget="_blank"
                  link="https://order.thelittlechihuahua.com/chihuahua-polk/menu/order-setup"
                />
              </button>
              <button
                onMouseEnter={() => setFormData({ location: "noe" })}
                onMouseLeave={() => setFormData({ location: "" })}
              >
                <ButtonComponenet
                  CTA="Noe"
                  theTarget="_blank"
                  link="https://order.thelittlechihuahua.com/chihuahua-noe/menu/order-setup"
                />
              </button>
              <button
                onMouseEnter={() => setFormData({ location: "lower" })}
                onMouseLeave={() => setFormData({ location: "" })}
              >
                <ButtonComponenet
                  CTA="Lower Haight"
                  theTarget="_blank"
                  link="https://order.thelittlechihuahua.com/chihuahua-lower/menu/order-setup"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuModal;
