"use client";

import React, { useEffect, useRef, useState } from "react";
import IconComponent from "./components/foundation-components/icon";
import props from "./props/footer-props/props";
import Render from "./components/footer-components/render-link-component";

// Utility function for retrieving data
const getFooterData = (database, name) => {
  const entry = database.find((item) => item.name === name);
  return entry ? entry.text : "";
};

const getImageData = (database, name) => {
  const entry = database.find((item) => item.name === name);
  return entry ? entry.link : "/";
};

const getTargetData = (database, name) => {
  const entry = database.find((item) => item.name === name);
  return entry ? entry.target : "/";
};

const Footer = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [database, setDatabase] = useState([]);
  const [smallInfo, setSmallInfo] = useState({
    about: false,
    openHours: false,
    location: false,
    stayConnected: false,
  });
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Fetch footer data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/footer");
        if (!response.ok) throw new Error("Network response failed");
        const data = await response.json();
        setDatabase(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Track screen size for responsive design
  useEffect(() => {
    const checkScreenSize = () => setIsSmallScreen(window.innerWidth < 1100);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Handle form submission
  const updateForm = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/submitemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Successfully submitted email:", data);
        setFormData({ email: "" });
      } else {
        const errorData = await response.text();
        console.error(`Error submitting email: ${response.status} - ${errorData}`);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  // Handle input change
  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  // Toggle display for sections
  const toggleSection = (name) => {
    setSmallInfo((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const Icon = ({ name }) => (
    <IconComponent
      source={smallInfo[name] ? "/minus.svg" : "/plus.svg"}
      theWidth="24"
      theHeight="24"
      theOnClick={() => toggleSection(name)}
    />
  );

  const Information = ({ name, links, texts, targets }) =>
    (smallInfo[name] || name === "large") && (
      <div className="h-fit w-fit flex flex-col space-y-1">
        <Render
          Class="h-fit w-fit flex flex-col space-y-1"
          sides={texts.map((text, index) => ({
            text,
            theTarget: targets[index],
            link: links[index],
          }))}
        />
      </div>
    );

  const InformationSection = ({ title, name }) => (
    <div className="h-fit w-full flex flex-col space-y-1">
      {name !== "large" && (
        <div className="w-full h-fit flex flex-row justify-between">
          <h1 className="p1 text-black">{getFooterData(database, `${title} Title`)}</h1>
          <Icon name={name} />
        </div>
      )}
      <Information
        name={name}
        links={[
          getImageData(database, `${title} Text 1`),
          getImageData(database, `${title} Text 2`),
          getImageData(database, `${title} Text 3`),
        ]}
        texts={[
          getFooterData(database, `${title} Text 1`),
          getFooterData(database, `${title} Text 2`),
          getFooterData(database, `${title} Text 3`),
        ]}
        targets={[
          getTargetData(database, `${title} Text 1`),
          getTargetData(database, `${title} Text 2`),
          getTargetData(database, `${title} Text 3`),
        ]}
      />
    </div>
  );

  const LetsStayConnected = () => {
    const inputRef = useRef(null);
    useEffect(() => {
      if (inputRef.current) inputRef.current.focus();
    }, [formData.email]);

    return (
      <div className="w-fit h-fit flex flex-col space-y-3">
        <h1 className="p1 text-black">{getFooterData(database, "Lets Stay Connected Title")}</h1>
        <form onSubmit={updateForm} className="w-[246px] h-fit flex flex-row space-x-6 py-1 border border-black border-t-0 border-l-0 border-r-0">
          <input
            ref={inputRef}
            type="email"
            className="font-light p2 placeholder-black text-black"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
            name="email"
          />
          <button type="submit">
            <h1 className="font-bold p2 text-black">{getFooterData(database, "Lets Stay Connected CTA")}</h1>
          </button>
        </form>
        <div className="w-fit h-fit flex flex-col space-y-1">
          <h1 className="font-semibold p2 text-black">{getFooterData(database, "Lets Stay Connected Social Media CTA")}</h1>
          <div className="w-fit h-[21px] space-x-1 flex flex-row items-center justify-center">
            <a {...props.TLCFacebook}>
              <IconComponent source="facebook.svg" theHeight={16} theWidth={16} />
            </a>
            <a {...props.TLCX}>
              <IconComponent source="/x.svg" theHeight={16} theWidth={16} />
            </a>
            <a {...props.TLCInstagram}>
              <IconComponent source="/instagram.svg" theHeight={16} theWidth={16} />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return isSmallScreen ? (
    <div className="w-full custom-padding flex flex-col space-y-9 h-fit py-12">
      {["About", "Open Hours", "Locations"].map((title, index) => (
        <InformationSection key={index} title={title} name={title.toLowerCase()} />
      ))}
      <div className="w-full h-fit flex flex-row justify-between">
        {smallInfo.stayConnected ? (
          <LetsStayConnected />
        ) : (
          <h1 className="p1 text-black">{getFooterData(database, "Lets Stay Connected Title")}</h1>
        )}
        <Icon name="stayConnected" />
      </div>
    </div>
  ) : (
    <div className="w-full h-fit flex flex-col space-y-16 pt-[64px] justify-center items-center border border-black mt-9">
      <div className="w-fit h-fit flex flex-row space-x-[151px]">
        {["Locations", "Open Hours", "About"].map((section, index) => (
          <div key={index} className="w-fit h-full flex flex-col items-start space-y-3">
            <h1 className="w-full h-fit p1 font-semibold text-black">{getFooterData(database, `${section} Title`)}</h1>
            <InformationSection title={section} name="large" />
          </div>
        ))}
        <div className="w-fit h-fit flex flex-col space-y-3">
          <LetsStayConnected />
        </div>
      </div>
      <div className="w-full px-12 h-fit flex flex-col space-y-[10px] p-[10px]">
        <div className="w-full h-[52px] px-[45px] pt-[22px] pb-[13px] border border-b-0 border-l-0 border-r-0 border-black flex justify-between">
          <h1 className="font-medium w-fit p2 text-black">{getFooterData(database, "Copywright")}</h1>
          <Render
            Class="w-fit h-fit flex space-x-9 items-center justify-center"
            sides={[
              "Home Link",
              "Rewards Link",
              "Menu Link",
              "Contact Link",
              "Privacy Policy Link",
              "Terms Of Service Link",
            ].map((link) => ({
              text: getFooterData(database, link),
              link: getImageData(database, link),
            }))}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
