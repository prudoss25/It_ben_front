import React from "react";
import { Button } from "@material-ui/core";
import Aux from "../../../hoc/_Aux/_Aux";
import DownloadIcon from "@material-ui/icons/GetApp";

import * as XLSX from "xlsx";

export default function DownloadButton() {
  const ExcelFields = [
    { Nom: "" },
    { Prenom: "" },
    { AddresseMail: "" },
    { DateDeNaissance: "" },
    { Telephone: "" },
    { Ville: "" },
  ];

  const handleOnDownload = () => {
    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(ExcelFields);
    XLSX.utils.book_append_sheet(wb, ws, "listeUsers");
    XLSX.writeFile(wb, "Liste ASEBEM.xlsx");
  };

  return (
    <Aux>
      <Button
        fullWidth
        color="primary"
        onClick={handleOnDownload}
        startIcon={<DownloadIcon />}
        variant="contained"
      >
        Télécharger la template
      </Button>
    </Aux>
  );
}
