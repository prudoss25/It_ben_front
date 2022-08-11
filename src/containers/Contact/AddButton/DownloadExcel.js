import React from "react";
import { Grid, Button } from '@material-ui/core';

import * as XLSX from "xlsx";

export default function DownloadExcel() {

    const ExcelFields =[ 
        {lastName: ""},
        {firstName: ""},
        {userName: ""},
        {password: ""},
        {profilePicture: ""},
        {emailAddress: ""},
        {registrationDate: ""},
        {birthDate: ""},
        {startFunctionDate: ""},
        {phoneNumber: ""},
        {role: ""},
        {city: ""},
        {registrationNumber: ""}
      ];

    const handleOnDownload = ()=>{
        let wb = XLSX.utils.book_new();
        let ws = XLSX.utils.json_to_sheet(ExcelFields);
        XLSX.utils.book_append_sheet(wb,ws,"MySheet1");
        XLSX.writeFile(wb,"MyFile.xlsx");
    }

    return (
      <Grid >
        <Button onClick={handleOnDownload} variant="contained">DownloadExcel</Button>
      </Grid>
    );
  }