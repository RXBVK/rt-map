import React, { useState } from "react";
import CsvUploader from "./components/CsvUploader/CsvUploader";
import ColumnsPicker from "./components/ColumnsPicker/ColumnsPicker";
import Map from "./components/Map/Map";
import "./styles/app.css";

function App() {
  const [uploadedRows, setUploadedRows] = useState([]);
  const [dataFromRows, setDataFromRows] = useState([]);

  if (dataFromRows) {
    return <Map />;
  }

  if (uploadedRows.length > 0) {
    return (
      <ColumnsPicker
        uploadedRows={uploadedRows}
        setDataFromRows={setDataFromRows}
      />
    );
  }

  return <CsvUploader setUploadedRows={setUploadedRows} />;
}

export default App;
