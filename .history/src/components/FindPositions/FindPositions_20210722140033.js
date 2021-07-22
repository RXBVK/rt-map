import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FindPositions(props) {
  useEffect(() => {
    const getPositions = async () => {
      for (let i = 0; i < props.dataFromRows.length; i++) {
        let address = props.dataFromRows[i];
        let response = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json",
          {
            params: {
              address: `${address.address}${address.city}`,
              key: process.env.REACT_APP_GOOGLE_KEY,
            },
          }
        );
        if (response.data.results.length == 0) {
          console.log("Wrong address");
        } else {
          let location = response.data.results[0].geometry.location;
          console.log("Location: ");
          console.log(location);
          address = { ...address, position: location };
          props.setDataWithCoords([...props.dataWithCoords, address]);
          console.log("Address: ");
          console.log(address);
        }
      }
    };
    getPositions();
  }, []);
  return (
    <div>
      <h1>Let me find those addresses on the map...</h1>
    </div>
  );
}
