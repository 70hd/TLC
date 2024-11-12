"use client";
import React, { useEffect, useState } from "react";
import ButtonComponenet from "./button";
import Image from "next/image";
import FormSelect from "../contact-components/form-select";

const Modal = ({ TheCTA, TheCTA2 }) => {
  const [formData, setFormData] = useState({
    location: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  function Images() {
    if (formData.location.length === 0) {
      return "/airport-image.png";
    } else {
      return `/${formData.location}-image.png`;
    }
  }

  function handleChange(event) {
    setClicked(false);
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function Clicked() {
    if (formData.location.length === 0) {
      setClicked(true);
    }
  }

  function IfClicked() {
    if (clicked) {
      return <h1 className="text-[#79C35C] p2">Please select a location</h1>;
    }
  }

  function LINK() {
    if (formData.location.length === 0) {
      return;
    } else {
      return `https://order.thelittlechihuahua.com/chihuahua-${formData.location}/menu/order-setup`;
    }
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Disable background scroll
    } else {
      document.body.style.overflow = ""; // Enable background scroll
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <div>
      {/* Trigger button to open modal */}
      <div onClick={openModal}>
        <ButtonComponenet CTA={TheCTA} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Modal wrapper with flexible height */}
          <div className="relative w-fit max-w-[488px] max-h-[90vh] flex flex-col p-6 bg-white border-4 border-[#C83A2D] rounded-xl overflow-y-auto">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-6 top-6"
            >
              <Image src="/xIcon.svg" width={14} height={14} />
            </button>

            {/* Modal content */}
            <div className="flex flex-col space-y-4">
              <h1 className="p1 text-black">Select a Location to Order</h1>
              <h2 className="p2 text-black">Three San Francisco locations to serve you</h2>
              
              {/* Image and form */}
              <Image
                src={Images()}
                width={392}
                height={255}
                className="rounded-xl"
                alt="Location image"
              />
              <FormSelect
                theHeight="fit-content"
                theName="location"
                theWidth="392px"
                option0=""
                option0text="Select Location"
                option1="noe"
                option1text="Noe Valley"
                option2="polk"
                option2text="Polk Street"
                option3="lower"
                option3text="Lower Haight"
                theOnChange={handleChange}
                theValue={formData.location}
              />

              <div onClick={Clicked}>
                <ButtonComponenet CTA={TheCTA2} link={LINK()} theTarget="_blank" />
                {IfClicked()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
