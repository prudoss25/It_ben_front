import React, { useState } from "react";
import * as XLSX from "xlsx";
import Aux from "../../../hoc/_Aux/_Aux";
import UserTable from "./UserTable";
import FormModal from "../../../common/FormModal/FormModal";
import DownloadButton from "./DownloadButton";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Button, Grid } from "@material-ui/core";


export default function AddButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  
  const [rows, setRows] = useState(null);
  const [fileName, setFileName] = useState(null);
  const handleClose = () => {
    setRows(null)
    setFileName(null)
    setOpen(false)
  };
  const handleOnChange = async (e) => {
    let dataFinal = [];
    const file = e.target.files[0];

    setFileName(file.name);
    const readOpts = {
      cellText: false,
      cellDates: true,
    };
    const jsonOpts = {
      header: 0,
      defval: "",
      blankrows: true,
      raw: false,
      dateNF: 'd"/"mm"/"yyyy',
    };
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data, readOpts);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, jsonOpts);
    dataFinal = jsonData.filter(
      (row) =>
        row.Nom !== "" &&
        row.Nom != null &&
        row.Prenom !== "" &&
        row.Prenom != null &&
        row.AddresseMail !== "" &&
        row.AddresseMail != null &&
        row.DateDeNaissance !== "" &&
        row.DateDeNaissance != null &&
        row.Telephone !== "" &&
        row.Telephone != null &&
        row.Ville !== "" &&
        row.Ville != null
    );
    setRows(dataFinal);
  };

  return (
    <Aux>
      <Button color="primary" variant="contained" onClick={handleOpen}>
        Ajouter via excel
      </Button>
      <FormModal
        open={open}
        title="Enregistrer une liste de Membres"
        handleClose={handleClose}
      >
        <form>
          <Grid container>
            <Grid item xs={12}>
              <DownloadButton />
            </Grid>
            <Grid item xs={12}>
              {fileName && (
                <p>
                  Fichier : <span>{fileName}</span>
                </p>
              )}
              <input
                onChange={(e) => handleOnChange(e)}
                style={{ display: "none" }}
                accept=".xlsx"
                id="contained-button-file"
                multiple={false}
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<CloudUploadIcon />}
                  component="span"
                >
                  Chargez la liste Remplie
                </Button>
              </label>
              <Grid>
                {fileName && rows && <UserTable handleClose={handleClose} dataRows={rows}></UserTable>}
              </Grid>
            </Grid>
          </Grid>
        </form>
      </FormModal>
    </Aux>
  );
}
