import React, { useState } from "react";

export default function ColumnsPicker() {
  const columns = ["state", "city", "zip", "address", "category"];
  const [columnOrder, setColumnOrder] = useState([]);
  const handleColumnOrder = (target) => {
    console.log(target);
    setColumnOrder([...columnOrder, target.value]);
    target.style.opacity = "0";
  };

  return (
    <div className="columns-picker__container">
      <h1>Set column order</h1>
      <h2>Click on name of the first column</h2>
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
