import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import axios from "axios";

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
  const getPosition = async (address) => {
    console.log("I want an address");
    let response;
    try {
      response = await axios.get(
        "https://maps.googleapis.com/maps/api/geocode/json",
        {
          params: {
            address: `${address.address}${address.city}`,
            key: process.env.REACT_APP_GOOGLE_KEY,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    console.log("Perhaps I've received an address");
    if (response && response.data.results.length > 0) {
      console.log("Correct address");
      let location = response.data.results[0].geometry.location;
      console.log(location);
      return location;
    } else {
      console.log("Wrong address");
      return false;
    }
  };

  return (
    <>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 51.113842, lng: 17.0064022 }}
      >
        {dataFromRows.map((address) => {
          let position = getPosition(address);
          return <Marker key={address.category} position={{ position }} />;
        })}
      </GoogleMap>
      <button onClick={() => getPosition()}>TESTS</button>
    </>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Mapv));