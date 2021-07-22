import React from "react";
import "./styles/csv-uploader.css";

export default function CsvUploader() {
  return (
    <div className="csv-uploader__container">
      <div className="dropzone"></div>
      <h1>OR</h1>
      <input type="file" />
    </div>
  );
}
