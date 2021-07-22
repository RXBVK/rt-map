import React, { useState } from "react";
import CsvUploader from "./components/CsvUploader/CsvUploader";
import ColumnsPicker from "./components/ColumnsPicker/ColumnsPicker";
import MapComponent from "./components/Map/Map";
import FindPositions from "./components/FindPositions/FindPositions";
import "./styles/app.css";

function App() {
  const [uploadedRows, setUploadedRows] = useState([]);
  const [dataFromRows, setDataFromRows] = useState([]);
  const [dataWithCoords, setDataWithCoords] = useState([]);
  const [addressesFetched, setAddressesFetched] = useState(false);

  if (
    dataWithCoords.length !== 0 &&
    dataWithCoords.length === dataFromRows.length
  ) {
    return (
      <div className="main__container">
        <MapComponent dataWithCoords={dataWithCoords} />
      </div>
    );
  }

  if (dataFromRows.length > 0) {
    return (
      <div className="main__container">
        <FindPositions
          dataFromRows={dataFromRows}
          setDataWithCoords={setDataWithCoords}
          dataWithCoords={dataWithCoords}
          setAddressesFetched={setAddressesFetched}
        />
      </div>
    );
  }

  if (uploadedRows.length > 0) {
    return (
      <div className="main__container">
        <ColumnsPicker
          uploadedRows={uploadedRows}
          setDataFromRows={setDataFromRows}
        />
      </div>
    );
  }

  return (
    <div className="main__container">
      <CsvUploader setUploadedRows={setUploadedRows} />
    </div>
  );
}

export default App;
