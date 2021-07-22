import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

export default function Map(props) {
  return <div className="map__container"></div>;
}

function Mapv() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 51.0993371, lng: 16.9950037 }}
    />
  );
}
