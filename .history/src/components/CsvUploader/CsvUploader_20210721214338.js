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
    console.log("Dropped");
  };

  return (
    <div className="csv-uploader__container">
      <button className="csv-uploader__help">?</button>
      <h3 styles={{ margin: "0" }}>
        Only .CSV files
        <br />
        Up to 20 rows
        <br />
        Fields divided by comma(,)
      </h3>
      <div className="csv-uploader__dropzone" onDrop={(e) => handleDropZone(e)}>
        <p>Drag and drop the file here</p>
      </div>
      <h1>OR</h1>
      <label
        htmlFor="csv-uploader__input"
        className="csv-uploader__label button--primary"
      >
        Upload from desktop
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