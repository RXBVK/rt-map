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
    let response = await axios.get(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        params: {
          address: `${address.address}${address.city}`,
          key: process.env.REACT_APP_GOOGLE_KEY,
        },
      }
    );
    if (response.data.results.length > 0) {
      let location = response.data.results[0].geometry.location;
      //return await location;
    } else {
      console.log("Wrong address");
    }
  };

  return (
    <>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 51.113842, lng: 17.0064022 }}
      >
        {/* {dataFromRows.map((address) => (
          <Marker key={address.category} position={getPosition(address)} />
        ))} */}
        {/* <Marker
          //key={address.category}
          position={getPosition(dataFromRows[2])}
        /> */}
      </GoogleMap>
      <button onClick={() => await getPosition(dataFromRows[2])}>TESTS</button>
    </>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Mapv));
