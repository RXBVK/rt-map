import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FindPositions(props) {
  useEffect(() => {
    const getPositions = async () => {
      let result = [];
      for (let i = 0; i < props.dataFromRows.length; i++) {
        let address = props.dataFromRows[i];
        let response = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json",
          {
            params: {
              address: `${address.address}${address.city}${address.state}${address.zip}`,
              key: process.env.REACT_APP_GOOGLE_KEY,
            },
          }
        );
        if (response.data.results.length == 0) {
          console.log("Wrong address");
        } else {
          let location = response.data.results[0].geometry.location;
          address = { ...address, position: location };
          result.push(address);
        }
      }
      props.setAddressesFetched(true);
      props.setDataWithCoords(result);
    };
    getPositions();
  }, []);
  return (
    <div
      styles={{
        animation: "fadein 800ms",
      }}
    >
      <h1>Let me find those addresses on the map...</h1>
      <h3>Wait for few seconds</h3>
    </div>
  );
}
