import React, { useState } from "react";
import CsvUploader from "./components/CsvUploader/CsvUploader";
import "./styles/app.css";

function App() {
  const [uploadError, setUploadError] = useState(false);
  const [uploadedRows, setUploadedRows] = useState([]);
  return (
    <div className="main__container">
      <CsvUploader
        uploadError={uploadError}
        setUploadError={setUploadError}
        setUploadedRows={setUploadedRows}
      />
    </div>
  );
}

export default App;
