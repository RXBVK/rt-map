import React, { useState } from "react";
import "./styles/columns-picker.css";

export default function ColumnsPicker(props) {
  const columns = ["state", "city", "zip", "address", "category"];
  const numerals = ["first", "second", "third", "forth", "fifth"];
  const [columnOrder, setColumnOrder] = useState([]);
  const shouldBeDisplayed = columnOrder.length === 5 ? "none" : "block";

  const handleColumnOrder = (target) => {
    console.log(target);
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
    props.setDataFromRows(properData);
  };

  return (
    <div className="columns-picker__container">
      {columnOrder.length === 5 ? (
        <>
          <h1>Columns defined, let's display the map</h1>(
          {columnOrder.map((col) => col)})
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
