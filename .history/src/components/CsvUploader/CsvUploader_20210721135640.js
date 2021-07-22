import React from "react";
import "./styles/csv-uploader.css";

export default function CsvUploader() {
  const handleFileUpload = (e) => {
    console.log(e.target.files[0]);
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      let result = reader.result;
      let lineEnd = `${String.fromCharCode(13)}${String.fromCharCode(10)}`;
      console.log(result);
      console.log("LineEnd: " + lineEnd);
      //console.log(result.split(''))
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
    </div>
  );
}
