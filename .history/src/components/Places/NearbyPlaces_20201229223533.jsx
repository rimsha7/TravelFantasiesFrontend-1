import React, { useState } from "react";
import mapStyles from "./../../mapStyles";
import placeService from "./../../services/PlaceService";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { Grid, Select, Button } from "@material-ui/core";
import { DirectionsRenderer, DistanceMatrixRenderer } from "react-google-maps";
import { compose, withProps, lifecycle } from "recompose";
const AllCities = (props) => {
  const [places, setPlaces] = React.useState([]);
  const page = props.page ? props.page : 1;
  const [perPage, setPerPage] = React.useState(10);
  var directionServices = new window.google.maps.DirectionsService();
  var directionDisplay = new window.google.maps.DirectionsRenderer();
  // var DistanceMatrixService = new window.google.maps.DistanceMatrixService();
  const [address, setAddress] = React.useState("");
  const [address2, setAddress2] = React.useState("");
  const [mode, setMode] = React.useState("DRIVING");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  const [coordinates2, setCoordinates2] = React.useState({
    lat: null,
    lng: null,
  });
  const [dist, setDist] = React.useState("0 km");
  const [time, setTime] = React.useState("0 min");
  let lat = 31.5204;
  let lng = 74.3587;
  let request = {
    location: { lat, lng },
    radius: "500",
    type: ["hospital"],
  };
  const getData = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  };

  // React.useEffect(getData, [page, perPage]);

  const MapWithADirectionsRenderer = compose(
    withProps({
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `100%` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,

    lifecycle({
      componentDidMount() {
        // navigator.geolocation.getCurrentPosition(function (position) {
        //   console.log("Latitude is :", position.coords.latitude);
        //   console.log("Longitude is :", position.coords.longitude);
        // });

        const service = new window.google.maps.places.PlacesService();
        service.nearbySearch(request, callback);
        function callback(results, status) {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
              let place = results[i];
              new window.google.maps.Marker({
                position: place.geometry.location,
              });
            }
          }
        }
      },
    })
  )((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 31.52, lng: 74.3587 }}>
      {props.directions && <DirectionsRenderer directions={props.directions} />}
      {/* {props.distance && <DistanceMatrixRenderer directions={props.distance} />} */}
    </GoogleMap>
  ));

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    //console.log(results[0].formatted_address);
    console.log(latLng.formatted_address);
    //infowindow.setContent(results[0].formatted_address);
    //console.log(results[0].formatted_address);
    setAddress(value);
    setCoordinates(latLng);
    console.log(latLng);
    console.log(results);
  };
  const handleSelect2 = async (value) => {
    const results2 = await geocodeByAddress(value);
    const latLng2 = await getLatLng(results2[0]);
    //console.log(results[0].formatted_address);
    console.log(latLng2.formatted_address);
    //infowindow.setContent(results[0].formatted_address);
    //console.log(results[0].formatted_address);
    setAddress2(value);
    setCoordinates2(latLng2);
    console.log(latLng2);
    console.log(results2);
  };
  // const getInitialState = async () => {
  //   return {
  //     value: "select",
  //   };
  // };
  const change = async (event) => {
    // this.setState({ value: event.target.value });
    setMode(event.target.value);
    //  console.log(mode);
  };

  return (
    // <div style={{ marginTop: "10px" }}>

    <div>
      <h1>Itinerary Generator</h1>
      <Grid container>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              navigator.geolocation.getCurrentPosition(function (position) {
                setCoordinates({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                });
              });
            }}
          >
            Use My Location For Start Location
          </Button>
        </Grid>
        <Grid item xs={9}>
          <div style={{ width: "73vw", height: "90vh", marginTop: "20px" }}>
            {/* <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD4G8Y9zNBLcc4EmGY8Vlu4-of9D9MUoyw`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            /> */}
            <MapWithADirectionsRenderer />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AllCities;
