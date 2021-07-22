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
    e.preventDefault();
    console.log("Dropped");
  };

  return (
    <div className="csv-uploader__container">
      <div className="csv-uploader__dropzone" onDrop={(e) => handleDropZone(e)}>
        Drag and drop the file here
      </div>
      <h1>OR</h1>
      <label htmlFor="csv-uploader__input" className="csv-uploader__label">
        Upload from desktop
      </label>
      <input
        type="file"
        id="csv-uploader__input"
        accept=".csv"
        onChange={(e) => handleFileUpload(e)}
      />
      {/* <input type="file" accept=".csv" onChange={(e) => handleFileUpload(e)} /> */}
    </div>
  );
}
