import React, { useState } from "react";
import CsvUploader from "./components/CsvUploader/CsvUploader";
import "./styles/app.css";

function App() {
  const [uploadedRows, setUploadedRows] = useState([]);
  const [dataFromRows, setDataFromRows] = useState([]);
  return (
    <div className="main__container">
      {!uploadedRows ? <CsvUploader setUploadedRows={setUploadedRows} /> : ""}
    </div>
  );
}

export default App;
