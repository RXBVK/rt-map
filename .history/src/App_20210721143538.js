import React, { useState } from "react";
import CsvUploader from "./components/CsvUploader/CsvUploader";
import ColumnsPicker from "./components/ColumnsPicker/ColumnsPicker";
import "./styles/app.css";

function App() {
  const [uploadedRows, setUploadedRows] = useState([]);
  const [dataFromRows, setDataFromRows] = useState([]);
  return (
    <div className="main__container">
      {!uploadedRows ? (
        <CsvUploader setUploadedRows={setUploadedRows} />
      ) : (
        <ColumnsPicker />
      )}
    </div>
  );
}

export default App;
