import React from "react";
import "./styles/csv-uploader.css";

export default function CsvUploader() {
  return (
    <div className="csv-uploader__container">
      <div className="csv-uploader__dropzone">Drag and drop the file here</div>
      <h1>OR</h1>
      <input type="file" className="csv-uploader__input" />
    </div>
  );
}
