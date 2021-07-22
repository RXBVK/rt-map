import React from "react";

export default function ColumnsPicker() {
  return (
    <div className="columns-picker__container">
      <h1>Set column order</h1>
      <h2>Click on name of the first column</h2>
      <button value="state"></button>
      <button value="city"></button>
      <button value="ZIP"></button>
      <button value="address"></button>
      <button value="category"></button>
    </div>
  );
}
