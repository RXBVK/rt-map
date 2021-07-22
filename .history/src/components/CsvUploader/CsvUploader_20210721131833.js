import React from "react";
import "./styles/csv-uploader.css";

export default function CsvUploader() {
  return (
    <div className="csv-uploader__container">
      <div className="dropzone">Drag and drop the file here</div>
      <h1>OR</h1>
      <input type="file" />
    </div>
  );
}
