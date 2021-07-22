import React from "react";
import "./styles/csv-uploader.css";

export default function CsvUploader(props) {
  const handleFileUpload = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      const lineEnd = `${String.fromCharCode(13)}${String.fromCharCode(10)}`;
      const separator = ",";
      let result = reader.result;
      let rows = result.split(lineEnd);
      let splittedRows = rows.map((row) => row.split(separator));
      console.log(rows);
      console.log(splittedRows);
      props.setUploadedRows(splittedRows);
    });
    reader.readAsText(file);
  };

  const handleDropZone = (e) => {
    e.prevendDefault();
    e.stopPropagation();
    console.log("Dropped");
  };

  return (
    <div
      className="csv-uploader__container"
      onDrop={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div className="csv-uploader__dropzone" onDrop={(e) => handleDropZone(e)}>
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
        onChange={(e) => handleFileUpload(e)}
      />
    </div>
  );
}