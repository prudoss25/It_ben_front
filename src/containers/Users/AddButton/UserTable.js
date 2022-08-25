import * as React from 'react';
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import axios from "../../../axios";
import {  ADD_ALL_USERS } from "../../../Routes";
import moment from "moment";
import "moment/locale/fr";
import loading from '../../../common/Loading/Loading';
import { ROLES } from '../../../Constantes';

// function createData(lastName, firstName, emailAddress,birthDate, phoneNumber, city) {
//   return { lastName, firstName, emailAddress,birthDate, phoneNumber, city };
// }


export default function UserTable(props) {
  const [loading,setLoading] = useState(false);
    const rows = props.dataRows;
    const onSave = () => {

      
      const AllUserInfos =rows.map(row => 
        {
          const birthDate = row.DateDeNaissance.split('/');
          return({
        registrationDate: new Date(),
        startFunctionDate: new Date(),
        profilePicture: "Not Set",
        lastName:row.Nom,
        firstName:row.Prenom,
        userName:`${row.Nom}_${row.Prenom}`,
        password:Math.random().toString(36).substring(8),
        emailAddress:row.AddresseMail,
        birthDate:new Date(`${birthDate[2]}-${birthDate[1]}-${birthDate[0]}`),
        phoneNumber:row.Telephone,
        city:row.Ville,
        role:ROLES.Membre
      })});

      
      console.log("AllUserInfos",AllUserInfos);

       
        setLoading(true);
        axios
          .post(ADD_ALL_USERS, AllUserInfos)
          .then((response) => 
          {
            // if (response.status === 200)
            //   props.openNotication(
            //     "success",
            //     `Utilisateur ${UserInformations.lastName} ${UserInformations.firstName} est ajouté!`
            //   );
            // props.handleToggle();
          })
          .catch(() => {
            // props.openNotication("error", "Une erreur est survenue !");
            // props.handleToggle();
          }
          );
      
    };









  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right" >Nom</TableCell>
            <TableCell align="right">Prenom</TableCell>
            <TableCell align="right">AddresseMail</TableCell>
            <TableCell align="right">Date de Naissance</TableCell>
            <TableCell align="right">Telephone</TableCell>
            <TableCell align="right">Ville</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="right">{row.Nom}</TableCell>
              <TableCell align="right">{row.Prenom}</TableCell>
              <TableCell align="right">{row.AddresseMail}</TableCell>
              <TableCell align="right">{row.DateDeNaissance}</TableCell>
              <TableCell align="right">{row.Telephone}</TableCell>
              <TableCell align="right">{row.Ville}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Grid>
            <Button onClick={onSave}>Ajouter</Button>
      </Grid>
    </TableContainer>
  );
}
