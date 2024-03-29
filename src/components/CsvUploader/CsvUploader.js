import React, { useState } from "react";
import "./styles/csv-uploader.css";

export default function CsvUploader(props) {
  const [fileTooBig, setFileTooBig] = useState(false);
  const handleFileUpload = (file) => {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      const lineEnd = `${String.fromCharCode(13)}${String.fromCharCode(10)}`;
      const separator = ",";
      let result = reader.result;
      let rows = result.split(lineEnd);
      let splittedRows = rows.map((row) => row.split(separator));
      console.log(rows);
      console.log(splittedRows);
      if (splittedRows.length > 20) {
        setFileTooBig(true);
      } else {
        props.setUploadedRows(splittedRows);
      }
      console.log(splittedRows);
    });
    reader.readAsText(file);
  };

  const handleDropZone = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleFileUpload(e.dataTransfer.files[0]);
  };

  return (
    <div className="csv-uploader__container">
      <div
        className="csv-uploader__dropzone"
        onDrop={(e) => handleDropZone(e)}
        onDragOver={(e) => {
          e.preventDefault();
        }}
      >
        <p>Drag and drop the file here</p>
      </div>
      <h1 className="csv-uploader__or">OR</h1>
      <label
        htmlFor="csv-uploader__input"
        className="csv-uploader__label button--primary"
      >
        Upload from device
      </label>
      <input
        type="file"
        id="csv-uploader__input"
        accept=".csv"
        onChange={(e) => handleFileUpload(e.target.files[0])}
      />
      {fileTooBig ? (
        <h5 style={{ color: "red", fontWeight: "900" }}>
          Given .CSV file has too many rows (max 20)
        </h5>
      ) : (
        ""
      )}
    </div>
  );
}
