import React from "react";
import "./styles/csv-uploader.css";

export default function CsvUploader(props) {
  const handleUpload = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.addEventListener("load", handleFile());
    reader.readAsText(file);
  };

  const handleFile = () => {
    const lineEnd = `${String.fromCharCode(13)}${String.fromCharCode(10)}`;
    const separator = ",";
    let result = reader.result;
    let rows = result.split(lineEnd);
    let splittedRows = rows.map((row) => row.split(separator));
    console.log(rows);
    console.log(splittedRows);
    props.setUploadedRows(splittedRows);
  };

  return (
    <div className="csv-uploader__container">
      <div className="csv-uploader__dropzone">Drag and drop the file here</div>
      <h1>OR</h1>
      {/* <label for="csv-uploader__input" className="csv-uploader__label">
        Upload from desktop
      </label>
      <input type="file" id="csv-uploader__input" /> */}
      <input type="file" accept=".csv" onChange={(e) => handleUpload(e)} />
    </div>
  );
}
