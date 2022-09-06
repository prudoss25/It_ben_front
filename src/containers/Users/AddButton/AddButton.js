import React, { useState } from "react";
import * as XLSX from "xlsx";
import Aux from "../../../hoc/_Aux/_Aux";
import UserTable from "./UserTable";
//import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Grid } from '@material-ui/core';
import DownloadButton from "./DownloadButton";






const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rows, setRows] =useState(null);
   const [fileName, setFileName] = useState(null);
  const handleOnChange= async (e) => {
    let dataFinal=[];
    const file =e.target.files[0];

    setFileName(file.name);
    const readOpts = { 
      cellText:false, 
      cellDates:true
    };
    const jsonOpts = {
      header: 0,
  defval: '',
  blankrows: true,
  raw: false,
  dateNF: 'd"/"mm"/"yyyy' 
}
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data,readOpts);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
     const jsonData = XLSX.utils.sheet_to_json(worksheet,jsonOpts);
     console.log("TEST DATATABLE jsonData",jsonData)
       dataFinal = jsonData.filter(row => row.Nom !=="" && row.Nom!=null
       && row.Prenom !=="" && row.Prenom!=null
       && row.AddresseMail !=="" && row.AddresseMail!=null
       && row.DateDeNaissance!=="" && row.DateDeNaissance!=null
       && row.Telephone !=="" &&row.Telephone!=null
       && row.Ville !=="" && row.Ville!=null
       )
       setRows(dataFinal);
       
  };

    


  return (
    <Aux>
      <Button variant = "contained" onClick={handleOpen}>Ajouter via excel</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Téléchargez la template puis remplissez la
          </Typography>

          <Grid>
              <DownloadButton/>
          </Grid>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Uploadez le fichier rempli 
          </Typography>
          
          <Grid>
          {fileName && (
            <p>
              Fichier: : <span>{fileName}</span>
            </p>
          )}
          <input 
            type="file"
            onChange={(e) => handleOnChange(e) }
          />
          <Grid>
            {fileName && rows &&(
              <UserTable dataRows ={rows}></UserTable>
            )}
          </Grid>
          
          
          
        </Grid>


        </Box>
      </Modal>
    </Aux>
  );
}

