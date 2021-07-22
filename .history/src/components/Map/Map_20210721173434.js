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
  const getPosition = async () => {
    console.log("I want an address");
    let response = await axios.get(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        params: {
          address: "dslgkdftgdfg",
          key: process.env.REACT_APP_GOOGLE_KEY,
        },
      }
    );
    console.log("Perhaps I've received an address");
    if (response.data.results.length > 0) {
      console.log("Correct address");
      let location = response.data.results[0].geometry.location;
      return { lat: location.lat, lng: location.lng };
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
        {/* {dataFromRows.map((address) => (
        <Marker key={address.category} />
      ))} */}
      </GoogleMap>
      <button onClick={() => getPosition()}>TESTS</button>
    </>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Mapv));
