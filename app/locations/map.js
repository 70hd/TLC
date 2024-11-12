import {
  GoogleMap,
  Marker,
  useLoadScript,
  TrafficLayer,
  TransitLayer,
  BicyclingLayer,
} from "@react-google-maps/api";
import { useMemo, useState, useEffect } from "react";
import "./style.css";

const Maps = ({
  clicked,
  setLatitude,
  setLongitude,
  latitude,
  longitude,
  zoom,
  setZoom,
  layers, 
}) => {
  const [map, setMap] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  useEffect(() => {
    if (map && isLoaded) {
      if (clicked) {
        const location = locationMap[clicked];
        if (location) {
          const { lat, lng } = location;
          map.panTo({ lat, lng });
          setZoom((prevZoom) => prevZoom + 3); 
        }
      } else {
        map.panTo({ lat: latitude, lng: longitude });
      }
    }
  }, [clicked, latitude, longitude, map, isLoaded, setZoom]);


  const locations = useMemo(
    () => [
      {
        lat: 37.772054078,
        lng: -122.43703487,
        location: "1431 Polk St, San Francisco, CA 94109",
      },
      {
        lat: 37.790052013448124,
        lng: -122.42074718350396,
        location: "292 Divisadero St, San Francisco, CA 94117",
      },
      {
        lat: 37.7511499967841,
        lng: -122.43464598771631,
        location: "4123 24th St, San Francisco, CA 94114",
      },
      {
        lat: 37.613595,
        lng: -122.384935,
        location: "near Gate, B3, San Francisco, CA 94128",
      },
    ],
    []
  );

  const locationMap = {
    Divisadero: { lat: 37.790052013448124, lng: -122.42074718350396 },
    Polk: { lat: 37.772054078, lng: -122.43703487 },
    Noe: { lat: 37.7511499967841, lng: -122.43464598771631 },
    Airport: { lat: 37.613595, lng: -122.384935 },
  };

  const changeCoordinate = (coord) => {
    const { latLng } = coord;
    setLatitude(latLng.lat());
    setLongitude(latLng.lng());
  };

  const mapOptions = {
    fullscreenControl: false,
    draggable: false,
    zoomControl: false,
    disableDoubleClickZoom: true,
    scrollwheel: false,
    keyboardShortcuts: false, 
    mapTypeId:
      layers === "terrain"
        ? "terrain"
        : layers === "satellite"
        ? "satellite"
        : "roadmap",
  };

  const increaseZoom = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 1, 21));
  };

  const decreaseZoom = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 1, 0));
  };

  return (
    <div className="w-full h-full">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <GoogleMap
            mapContainerClassName="map-container"
            center={{ lat: latitude, lng: longitude }}
            zoom={zoom} 
            onLoad={setMap}
            options={mapOptions} 
          >
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={location}
                onDragEnd={changeCoordinate}
              />
            ))}

            {/* Add optional layers based on the 'layers' prop */}
            {layers === "traffic" && <TrafficLayer />}
            {layers === "transit" && <TransitLayer />}
            {layers === "biking" && <BicyclingLayer />}
          </GoogleMap>

          <div className="zoom-controls">
            <button onClick={increaseZoom}>+</button>
            <button onClick={decreaseZoom}>-</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Maps;
