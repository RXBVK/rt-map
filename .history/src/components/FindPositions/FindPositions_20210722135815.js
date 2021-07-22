import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FindPositions(props) {
  useEffect(() => {
    for (let i = 0; i < props.dataFromRows.length; i++) {
      let address = props.dataFromRows[i];
      let response = axios
        .get("https://maps.googleapis.com/maps/api/geocode/json", {
          params: {
            address: `${address.address}${address.city}`,
            key: process.env.REACT_APP_GOOGLE_KEY,
          },
        })
        .then((response) => {
          if (response.data.results.length == 0) {
            console.log("Wrong address");
          } else {
            let location = response.data.results[0].geometry.location;
            console.log("Location: ");
            console.log(location);
            address = { ...address, position: location };
            await props.setDataWithCoords([...props.dataWithCoords, address]);
            console.log("Address: ");
            console.log(address);
          }
        });
    }
  }, []);
  return (
    <div>
      <h1>Let me find those addresses on the map...</h1>
    </div>
  );
}
