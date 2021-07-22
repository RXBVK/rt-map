import React from "react";

export default function ColumnsPicker() {
  return (
    <div className="columns-picker__container">
      <h1>Set column order</h1>
      <h2>Click on name of the first column</h2>
      <button value="state">STATE</button>
      <button value="city">CITY</button>
      <button value="zip">ZIP</button>
      <button value="address">ADDRESS</button>
      <button value="category">category</button>
    </div>
  );
}
