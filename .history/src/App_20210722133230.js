import React, { useState } from "react";
import CsvUploader from "./components/CsvUploader/CsvUploader";
import ColumnsPicker from "./components/ColumnsPicker/ColumnsPicker";
import Map from "./components/Map/Map";
import FindPositions from "./components/FindPositions/FindPositions";
import "./styles/app.css";

function App() {
  const [uploadedRows, setUploadedRows] = useState([]);
  const [dataFromRows, setDataFromRows] = useState([]);
  const [dataWithCoords, setDataWithCoords] = useState([]);

  if (dataWithCoords.length > 0) {
    return (
      <div className="main__container">
        <Map dataWithCoords={dataWithCoords} />
      </div>
    );
  }

  if (dataFromRows.length > 0) {
    return (
      <div className="main__container">
        <FindPositions dataFromRows={dataFromRows} />
      </div>
    );
  }

  if (uploadedRows.length > 0) {
    return (
      <div className="main__container">
        <ColumnsPicker
          uploadedRows={uploadedRows}
          setDataFromRows={setDataFromRows}
          setDataWithCoords={setDataWithCoords}
          dataWithCoords={dataWithCoords}
        />
      </div>
    );
  }

  return (
    <div className="main__container">
      <CsvUploader setUploadedRows={setUploadedRows} />
    </div>
  );
  // return (
  //   <div className="main__container">
  //     <Map dataFromRows={dataFromRows} />
  //   </div>
  // );
}

export default App;
