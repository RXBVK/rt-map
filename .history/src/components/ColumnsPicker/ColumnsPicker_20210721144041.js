import React from "react";

export default function ColumnsPicker() {
  const columns = [state, city, zip, address, category];
  return (
    <div className="columns-picker__container">
      <h1>Set column order</h1>
      <h2>Click on name of the first column</h2>
      {columns.map((column) => {
        <button value={column}>{column.toUpperCase()}</button>;
      })}
    </div>
  );
}
