import React from "react";
import "./styles/csv-uploader.css";

export default function CsvUploader() {
  return (
    <div className="csv-uploader__container">
      <div className="csv-uploader__dropzone">Drag and drop the file here</div>
      <h1>OR</h1>
      <label for="csv-uploader__input">Browse...</label>
      <input type="file" name="photo" id="csv-uploader__input" />
    </div>
  );
}
