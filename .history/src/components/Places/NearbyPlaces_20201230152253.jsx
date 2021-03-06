/*global google*/
import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import Search from "./Search";
import { Marker } from "react-google-maps";

let service;
const libraries = ["places"];

const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 31.52,
  lng: 74.3587,
};

export default function NearbyPlaces() {
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw",
  //   libraries,
  // });
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  navigator.geolocation.getCurrentPosition(function (position) {
    setCoordinates({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  });
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo(coordinates);
    mapRef.current.setZoom(12);
    let map = mapRef.current;

    let request = {
      location: { lat, lng },
      radius: "9000",
      type: ["hotel"],
    };

    service = new google.maps.places.PlacesService(mapRef.current);
    service.nearbySearch(request, callback);
    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          let place = results[i];
          console.log(place);
          new window.google.maps.Marker({
            position: place.geometry.location,
            map,
          });
        }
      }
    }
  }, []);

  return (
    <div>
      <Search panTo={panTo} />
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={30}
        center={center}
        options={options}
        onLoad={onMapLoad}
      />
    </div>
  );
}
