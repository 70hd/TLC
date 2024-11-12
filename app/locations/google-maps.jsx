import React, { useEffect, useState } from 'react'
import Maps from './map';

const GoogleMaps = ({clicked, zoom, setZoom}) => {
    const [layers, setLayers] = useState("");
    
    const [form, setForm] = useState({
        name: "",
        address: "",
        latitude: 37.710193181159504, // Default latitude value
        longitude: -122.43485302182593, // Default longitude value
        radius: 500,
      });
    useEffect(() => {
        if (zoom > 20) {
          setZoom(20);
        }
        if (zoom < 1) {
          setZoom(1);
        }
      }, [zoom]);
    

      useEffect(() => {
        // Set latitude and longitude based on the clicked location or default values
        if (clicked) {
          const { latitude, longitude } = {
            Divisadero: {
              latitude: 37.790052013448124,
              longitude: -122.42074718350396,
            },
            Polk: { latitude: 37.772054078, longitude: -122.43703487 },
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
  return (
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
  )
}

export default GoogleMaps