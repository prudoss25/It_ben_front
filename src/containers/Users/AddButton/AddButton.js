import React, { useState } from "react";
import * as XLSX from "xlsx";
import Aux from "../../../hoc/_Aux/_Aux";

function AddButton() {

  const [fileName, setFileName] = useState(null);

  const handleOnChange= async (e) => {

    const file =e.target.files[0];

    setFileName(file.name);

    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    console.log(jsonData);
  };

  return (
    <Aux>
      {fileName && (
        <p>
          FileName : <span>{fileName}</span>
        </p>
      )}
      <input 
        type="file"
        onChange={(e) => handleOnChange(e) }
      />
    </Aux>
  );
}

export default AddButton;