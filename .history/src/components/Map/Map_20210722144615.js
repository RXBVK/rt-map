import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

export default function MapComponent({ dataWithCoords, counter }) {
  return (
    <div className="map__container" style={{ width: "100%", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `80%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        dataWithCoords={dataWithCoords}
      />
      <h4>{counter > 0 ? `We couldn't fetch ${counter} address(es)` : ""}</h1>
    </div>
  );
}

function Map({ dataWithCoords }) {
  return (
    <>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 51.113842, lng: 17.0064022 }}
      >
        {dataWithCoords.map((address) => (
          <Marker key={address.category} position={address.position} />
        ))}
      </GoogleMap>
    </>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
