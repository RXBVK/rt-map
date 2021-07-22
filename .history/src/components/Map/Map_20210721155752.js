import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

export default function Map(props) {
  return (
    <div className="map__container" style={{ width: "100%", height: "100vh" }}>
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `80%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

function Mapv() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 51.113842, lng: 17.0064022 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Mapv));
