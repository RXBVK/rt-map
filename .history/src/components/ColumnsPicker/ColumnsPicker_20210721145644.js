import React, { useState } from "react";

export default function ColumnsPicker(props) {
  const columns = ["state", "city", "zip", "address", "category"];
  const [columnOrder, setColumnOrder] = useState([]);

  const handleColumnOrder = (target) => {
    console.log(target);
    setColumnOrder([...columnOrder, target.value]);
    target.style.opacity = "0";
  };

  const connectColumnsToData = () => {
    let properData = uploadedRows.map((row) => ({
      [columnOrder[0]]: row[0],
      [columnOrder[1]]: row[1],
      [columnOrder[2]]: row[2],
      [columnOrder[3]]: row[3],
      [columnOrder[4]]: row[4],
    }));
    console.log(properData);
  };

  return (
    <div className="columns-picker__container">
      <h1>Set column order</h1>
      <h2>Click on name of the first column</h2>
      {columnOrder.length === 5 ? (
        <button onClick={() => connectColumnsToData()}>Ready</button>
      ) : (
        ""
      )}
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
  );
}
