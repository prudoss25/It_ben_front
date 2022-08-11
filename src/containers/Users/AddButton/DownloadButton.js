import React from "react";
import {Button } from '@material-ui/core';
import Aux from "../../../hoc/_Aux/_Aux";

import * as XLSX from "xlsx";

export default function DownloadButton() {

    const ExcelFields =[ 
        {lastName: ""},
        {firstName: ""},
        {emailAddress: ""},
        {birthDate: ""},
        {phoneNumber: ""},
        {city: ""}
      ];

    const handleOnDownload = ()=>{
        let wb = XLSX.utils.book_new();
        let ws = XLSX.utils.json_to_sheet(ExcelFields);
        XLSX.utils.book_append_sheet(wb,ws,"MySheet1");
        XLSX.writeFile(wb,"Liste ASEBEM.xlsx");
    }

    return (
      <Aux >
        <Button onClick={handleOnDownload} variant="contained">Télécharger la template</Button>
      </Aux>
    );
  }