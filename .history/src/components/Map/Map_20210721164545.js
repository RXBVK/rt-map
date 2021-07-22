import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

export default function Map({ dataFromRows }) {
  return (
    <div className="map__container" style={{ width: "100%", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `80%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        dataFromRows={dataFromRows}
      />
    </div>
  );
}

function Mapv({ dataFromRows }) {
  const getPosition = async () => {
    console.log("Chce adres");
    let response = await fetch(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        params: {
          address: "22 Main st Boston MA",
          key: process.env.REACT_APP_GOOGLE_KEY,
        },
      }
    );
    console.log(response);
    let data = response.json();
    console.log(data);
    console.log("Moze dostalem adres");
  };
  return (
    <>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 51.113842, lng: 17.0064022 }}
      >
        {/* {dataFromRows.map((address) => (
        <Marker key={address.category} />
      ))} */}
      </GoogleMap>
      <button onClick={() => getPosition()}>TESTS</button>
    </>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Mapv));