"use client";
import Image from "next/image";
import ClickedComponent from "../components/menu-components/clicked-componenet";
import selectSections from "../props/caterings-props/select-sections";
import GoogleMaps from "./map";
import { useState, useEffect } from "react";
import IconComponent from "../components/foundation-components/icon";

const Home = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    latitude: 37.710193181159504, // Default latitude value
    longitude: -122.43485302182593, // Default longitude value
    radius: 500,
  });
  const [clicked, setClicked] = useState("");
  const [layers, setLayers] = useState("");
  const [circle, setCircle] = useState("");
  const [hovered, setHovered] = useState(false);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (zoom > 20) {
      setZoom(20);
    }
    if (zoom < 1) {
      setZoom(1);
    }
  }, [zoom]);

  useEffect(() => {
    if (clicked) {
      const { latitude, longitude } = {
        Polk: {
          latitude: 37.790052013448124,
          longitude: -122.42074718350396,
        },
        Divisadero: { latitude: 37.772054078, longitude: -122.43703487 },
        Noe: { latitude: 37.7511499967841, longitude: -122.43464598771631 },
        Airport: { latitude: 37.613595, longitude: -122.384935 },
      }[clicked] || { latitude: form.latitude, longitude: form.longitude };

      setForm((prev) => ({
        ...prev,
        latitude,
        longitude,
      }));
    }
  }, [clicked]);

  useEffect(() => {
    console.log(`Zoom level changed to: ${zoom}`);
  }, [zoom]);

  function Direction() {
    if (clicked === "") {
      return null;
    } else if (clicked === "Noe") {
      return "https://www.google.com/maps/dir//4123+24th+St,+San+Francisco,+CA+94114/@37.7445422,-122.4463154,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x808f7e1264a6d595:0xeb3ec11797db507a!2m2!1d-122.4346493!2d37.7511752!3e0?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D";
    } else if (clicked === "Polk") {
      return "https://www.google.com/maps/dir//The+Little+Chihuahua,+Polk+Street,+San+Francisco,+CA/@37.7900395,-122.4620321,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x808581cdbb783ceb:0x3ac9d74d950b9281!2m2!1d-122.4207468!2d37.7900467!3e0?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D";
    } else if (clicked === "Divisadero") {
      return "https://www.google.com/maps/dir//The+Little+Chihuahua,+Divisadero+Street,+San+Francisco,+CA/@37.7900395,-122.4620321,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x808580af39f42ff3:0xdf8af402795a03bf!2m2!1d-122.4370344!2d37.7720472!3e0?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D";
    } else if (clicked === "Airport") {
      return "https://www.google.com/maps/dir//The+Little+Chihuahua,+near+Gate,+Terminal+1,+B3,+San+Francisco,+CA/@37.6135876,-122.4262199,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x808f77dd4630e30f:0x958680d5232a3bbc!2m2!1d-122.3849346!2d37.6135948!3e0?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D";
    }
  }

  function Link() {
    if (clicked === "" || clicked === "Airport") {
      return "../menu";
    } else if (clicked === "Noe") {
      return "https://order.thelittlechihuahua.com/chihuahua-noe/menu/order-setup";
    } else if (clicked === "Polk") {
      return "https://order.thelittlechihuahua.com/chihuahua-polk/menu/order-setup";
    } else if (clicked === "Divisadero") {
      return "https://order.thelittlechihuahua.com/chihuahua-lower/menu/order-setup";
    }
  }

  function WhatLocation({ hovered, setHovered }) {
    return (
      <a
        href={Link()}
        target={clicked === "" || clicked === "Airport" ? "" : "_blank"}
      >
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`w-full h-[106px] overflow-hidden rounded-xl px-6 py-[18px] border-2 border-[#51A4FF]/65 ${
            hovered ? "bg-[#51A4FF]/65" : "bg-white"
          }`}
        >
          <div className="w-full h-full items-center justify-center flex flex-col space-y-[18px]">
            <h1 className="p1 text-black text-start w-full h-fit">
              {clicked === "" || clicked === "Airport"
                ? "Visit The Little Chihuahua Menu"
                : `Order Online From The ${clicked} Location`}
            </h1>
            <h1 className="p2 text-start text-black/50 w-full h-fit">
              {clicked === "" || clicked === "Airport"
                ? "View Menu"
                : `Order Online`}
            </h1>
          </div>
        </button>
      </a>
    );
  }

  function getBackgroundImage() {
    if (clicked === "Noe") {
      return "/Noe.png";
    } else if (clicked === "Airport") {
      return "/Airport.png";
    } else if (clicked === "Polk") {
      return "/Polk.png";
    } else if (clicked === "Divisadero") {
      return "/Divisadero.png";
    } else {
      return "/Noe.png";
    }
  }

  function TheFullScreen() {
    const mapContainer = document.querySelector(".map-container");
    mapContainer.requestFullscreen();
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }

  function Zoomed() {
    if (zoom !== 20) {
      return setZoom((prev) => prev + 1);
    }
  }

  function Minus() {
    if (zoom !== 1) {
      return setZoom((prev) => prev - 1);
    }
  }

  const [circleClicked, setCircleClicked] = useState("");

  return (
    <div className="w-fit min-h-[816px] rounded-[36px] bg-[#EEEEEE] flex flex-wrap space-x-6 p-6 stroke-black/20 ">
      <div className="w-[472px] max-h-[816px] min-h-[816px]  flex-col space-y-9 ">
      <Image
        src={getBackgroundImage()}
        height={308}
        width={472}
        className="min-w-[472px] max-w-[472px] min-h-[308px] max-h-[308px] rounded-xl"

        />
        <div className="flex flex-col w-full h-fit bg-white items-center justify-center p-6 overflow-hidden rounded-3xl space-y-6">
          <div className="flex flex-row space-x-6 w-fit h-fit">
            <button
              onClick={() => setClicked("Noe")}
              className={`w-[200px] h-[200px] flex flex-col rounded-lg overflow-hidden items-center justify-center ${
                clicked === "Noe"
                  ? "bg-[#51A4FF]/65"
                  : "bg-[#FCFCFC] border border-[#EEEEEE]"
              }`}
            >
              <IconComponent source="pin.svg" theWidth="31" theHeight="35" />
              <h1 className="p1 text-[#474747] text-start ">24th & Noe</h1>
            </button>
            <button
              onClick={() => setClicked("Divisadero")}
              className={`w-[200px] h-[200px] flex flex-col rounded-lg overflow-hidden items-center justify-center ${
                clicked === "Divisadero"
                  ? "bg-[#51A4FF]/65"
                  : "bg-[#FCFCFC] border border-[#EEEEEE]"
              }`}
            >
              <IconComponent source="pin.svg" theWidth="31" theHeight="35" />
              <h1 className="p1 text-[#474747] text-start ">Divisadero</h1>
            </button>
          </div>
          <div className="flex flex-row space-x-6 w-fit h-fit">
            <button
              onClick={() => setClicked("Polk")}
              className={`w-[200px] h-[200px] flex flex-col rounded-lg overflow-hidden items-center justify-center ${
                clicked === "Polk"
                  ? "bg-[#51A4FF]/65"
                  : "bg-[#FCFCFC] border border-[#EEEEEE]"
              }`}
            >
              <IconComponent source="pin.svg" theWidth="31" theHeight="35" />
              <h1 className="p1 text-[#474747] text-start ">Polk</h1>
            </button>
            <button
              onClick={() => setClicked("Airport")}
              className={`w-[200px] h-[200px] flex flex-col rounded-lg overflow-hidden items-center justify-center ${
                clicked === "Airport"
                  ? "bg-[#51A4FF]/65"
                  : "bg-[#FCFCFC] border border-[#EEEEEE]"
              }`}
            >
              <IconComponent source="pin.svg" theWidth="31" theHeight="35" />
              <h1 className="p1 text-[#474747] text-start ">Near Gate B3</h1>
            </button>
          </div>
        </div>
      </div>

      <div className="max-h-[816px] min-h-[816px] min-w-[696px] overflow-hidden items-center justify-center rounded-3xl flex flex-col space-y-9 p-6 bg-white">
        <div className="min-w-full h-fit min-h-[626px] overflow-hidden rounded-3xl flex flex-row items-center justify-center">
          <GoogleMaps
            layers={layers}
            setZoom={setZoom}
            zoom={zoom}
            clicked={clicked}
            latitude={form.latitude}
            longitude={form.longitude}
            setLatitude={(lat) =>
              setForm((prev) => ({ ...prev, latitude: lat }))
            }
            setLongitude={(lng) =>
              setForm((prev) => ({ ...prev, longitude: lng }))
            }
          />
        </div>
        <div className="w-full">
          <WhatLocation hovered={hovered} setHovered={setHovered} />
        </div>
      </div>

      <div className="w-[176px] max-h-[816px] min-h-[816px] flex flex-col space-y-6">
        <div className="w-full h-fit items-center justify-center rounded-3xl p-6 bg-white">
          <div className="bg-black w-full h-fit flex items-start justify-start flex-col space-y-2 p-3 rounded-xl ">
            <h1 className="p1 text-white w-full text-start">Zoom</h1>

            <div className="rounded-full w-full h-[16px] items-center justify-between flex flex-row bg-[#51A4FF]/65 px-2">
              <button onClick={Minus} className="w-[8px] h-[8px]">
                <Image src="/minus.svg" width={8} height={2} />
              </button>
              <button onClick={Zoomed} className="w-[8px] h-[8px]">
                <Image src="/plus.svg" width={8} height={8} />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-fit rounded-3xl overflow-hidden p-6 bg-white">
          <div className="w-[128px] h-full rounded-xl items-center justify-center p-3 space-y-3 flex flex-col bg-black">
            <div className="w-fit h-fit flex flex-col space-y-5 items-center justify-start">
              <div className="w-full h-fit flex flex-col space-y-[8px] items-center justify-center">
                <a
                  onClick={() => {
                    setLayers("");
                    setCircleClicked("Normal");
                  }}
                  target="_blank"
                >
                  <div
                    onMouseEnter={() => setCircle("Normal")}
                    onMouseLeave={() => setCircle("")}
                    className={`rounded-full p-3 w-fit h-fit ${
                      circle === "Normal" || circleClicked === "Normal"
                        ? "bg-[#51A4FF]"
                        : "bg-white"
                    }`}
                  >
                    <IconComponent
                      source="/Directions.svg"
                      theHeight="12"
                      theWidth="12"
                    />
                  </div>
                </a>
                <h1 className="p2 text-white w-fit h-fit">Normal</h1>
              </div>
              <div className="w-full h-fit flex flex-col space-y-[8px] items-center justify-center">
                <a
                  onClick={() => {
                    setLayers("traffic");
                    setCircleClicked("Traffic");
                  }}
                  target="_blank"
                >
                  <div
                    onMouseEnter={() => setCircle("Traffic")}
                    onMouseLeave={() => setCircle("")}
                    className={`rounded-full p-3 w-fit h-fit ${
                      circle === "Traffic" || circleClicked === "Traffic"
                        ? "bg-[#51A4FF]"
                        : "bg-white"
                    }`}
                  >
                    <IconComponent
                      source="/Directions.svg"
                      theHeight="12"
                      theWidth="12"
                    />
                  </div>
                </a>
                <h1 className="p2 text-white w-fit h-fit">Traffic</h1>
              </div>
              <div className="w-full h-fit flex flex-col space-y-[8px] items-center justify-center">
                <a
                  onClick={() => {
                    setLayers("transit");
                    setCircleClicked("Transit");
                  }}
                  target="_blank"
                >
                  <div
                    onMouseEnter={() => setCircle("Transit")}
                    onMouseLeave={() => setCircle("")}
                    className={`rounded-full p-3 w-fit h-fit ${
                      circle === "Transit" || circleClicked === "Transit"
                        ? "bg-[#51A4FF]"
                        : "bg-white"
                    }`}
                  >
                    <IconComponent
                      source="/Directions.svg"
                      theHeight="12"
                      theWidth="12"
                    />
                  </div>
                </a>
                <h1 className="p2 text-white w-fit h-fit">Transit</h1>
              </div>
              <div className="w-full h-fit flex flex-col space-y-[8px] items-center justify-center">
                <a
                  onClick={() => {
                    setLayers("biking");
                    setCircleClicked("Biking");
                  }}
                  target="_blank"
                >
                  <div
                    onMouseEnter={() => setCircle("Biking")}
                    onMouseLeave={() => setCircle("")}
                    className={`rounded-full p-3 w-fit h-fit ${
                      circle === "Biking" || circleClicked === "Biking"
                        ? "bg-[#51A4FF]"
                        : "bg-white"
                    }`}
                  >
                    <IconComponent
                      source="/Directions.svg"
                      theHeight="12"
                      theWidth="12"
                    />
                  </div>
                </a>
                <h1 className="p2 text-white w-fit h-fit">Biking</h1>
              </div>
              <div className="w-full h-fit flex flex-col space-y-[8px] items-center justify-center">
                <a
                  href={Direction()}
                  onClick={() => setCircleClicked("Directions")} // Changed onClick to use a function
                  target="_blank"
                >
                  <div
                    onMouseEnter={() => setCircle("Directions")}
                    onMouseLeave={() => setCircle("")}
                    className={`rounded-full p-3 w-fit h-fit ${
                      circle === "Directions" ? "bg-[#51A4FF]" : "bg-white"
                    }`}
                  >
                    <IconComponent
                      source="/Directions.svg"
                      theHeight="12"
                      theWidth="12"
                    />
                  </div>
                </a>
                <h1 className="p2 text-white w-fit h-fit">Directions</h1>
              </div>

              <div className="w-full h-fit flex flex-col space-y-[8px] items-center justify-center">
                <a
                  onClick={() => {
                    TheFullScreen();
                    setCircleClicked("FullScreen");
                  }}
                >
                  <div
                    onMouseEnter={() => setCircle("Full Screen")}
                    onMouseLeave={() => setCircle("")}
                    className={`rounded-full p-3 w-fit h-fit ${
                      circle === "FullScreen" || circleClicked === "FullScreen"
                        ? "bg-[#51A4FF]"
                        : "bg-white"
                    }`}
                  >
                    <IconComponent
                      source="/fullScreen.svg"
                      theHeight="12"
                      theWidth="12"
                    />
                  </div>
                </a>
                <h1 className="p2 text-white w-fit h-fit">Full Screen</h1>
              </div>
              <div className="w-full h-fit flex flex-col space-y-[8px] items-center justify-center">
                <a
                  href="tel:+6282245721"
                  onClick={() => setCircleClicked("Phone")} // Changed onClick to use a function
                >
                  <div
                    onMouseEnter={() => setCircle("Phone")}
                    onMouseLeave={() => setCircle("")}
                    className={`rounded-full p-3 w-fit h-fit ${
                      circle === "Phone" || circleClicked === "Phone"
                        ? "bg-[#51A4FF]"
                        : "bg-white"
                    }`}
                  >
                    <IconComponent
                      source="/phone.svg"
                      theHeight="12"
                      theWidth="12"
                    />
                  </div>
                </a>
                <h1 className="p2 text-white w-fit h-fit">Phone</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
