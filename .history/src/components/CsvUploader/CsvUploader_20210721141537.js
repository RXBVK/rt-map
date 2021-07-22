import React, { useState } from "react";
import "./styles/csv-uploader.css";

export default function CsvUploader(props) {
  const [uploadError, setUploadError] = useState(false);

  const handleFileUpload = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      let lineEnd = `${String.fromCharCode(13)}${String.fromCharCode(10)}`;
      let result = reader.result;
      let rows = result.split(lineEnd);
      console.log(rows);
      if (
        rows.length > 20 ||
        !rows.every((row) => row.split(",").length !== 5)
      ) {
        props.setUploadError(true);
      } else {
        props.setUploadedRows(rows);
      }
    });
    reader.readAsText(file);
  };

  return (
    <div className="csv-uploader__container">
      <div className="csv-uploader__dropzone">Drag and drop the file here</div>
      <h1>OR</h1>
      {/* <label for="csv-uploader__input" className="csv-uploader__label">
        Upload from desktop
      </label>
      <input type="file" id="csv-uploader__input" /> */}
      <input type="file" accept=".csv" onChange={(e) => handleFileUpload(e)} />
      {uploadError ? (
        <div className="csv-uploader__rows-error">
          <h1>The file can contain up to 20 rows</h1>
          <h2>Every row has to have 5 rows</h2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
