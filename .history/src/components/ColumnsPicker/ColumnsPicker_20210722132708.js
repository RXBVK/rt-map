import React, { useState } from "react";
import axios from "axios";
import "./styles/columns-picker.css";

export default function ColumnsPicker(props) {
  const columns = ["state", "city", "zip", "address", "category"];
  const numerals = ["first", "second", "third", "forth", "fifth"];
  const [columnOrder, setColumnOrder] = useState([]);

  const handleColumnOrder = (target) => {
    setColumnOrder([...columnOrder, target.value]);
    target.style.opacity = "0";
    target.style.pointerEvents = "none";
  };

  const connectColumnsToData = () => {
    let properData = props.uploadedRows.map((row) => ({
      [columnOrder[0]]: row[0],
      [columnOrder[1]]: row[1],
      [columnOrder[2]]: row[2],
      [columnOrder[3]]: row[3],
      [columnOrder[4]]: row[4],
    }));
    console.log(properData);
    let dataWithCoords = [];
    const getPositions = async () => {
      for (let i = 0; i < properData.length; i++) {
        let address = properData[i];
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
          props.setDataWithCoords({ ...dataWithCoords, location });
          console.log("Address: ");
          console.log(address);
        }
        dataWithCoords.push(address);
      }
    };
    getPositions();
    console.log(dataWithCoords);
    props.setDataFromRows(properData);
  };

  return (
    <div className="columns-picker__container">
      {columnOrder.length === 5 ? (
        <>
          <h1>Columns defined, let's display the map</h1>
          <button
            onClick={() => connectColumnsToData()}
            className="columns-picker__ready-btn button--primary"
          >
            Ready!
          </button>
        </>
      ) : (
        <>
          <h1>Set column order</h1>
          <h2>
            Click on the name of the {numerals[columnOrder.length]} column
          </h2>
          <div className="columns-picker__buttons">
            {columns.map((column) => {
              return (
                <button
                  value={column}
                  onClick={(e) => handleColumnOrder(e.target)}
                  key={column}
                >
                  {column.toUpperCase()}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
