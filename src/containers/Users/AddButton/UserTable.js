import * as React from "react";
import { useState } from "react";

import axios from "../../../axios";
import { ADD_ALL_USERS } from "../../../Routes";
import "moment/locale/fr";
import { ROLES } from "../../../Constantes";
import NoticationAlert from "../../../components/UI/NotificationAlert/NotificationAlert";
import Aux from "../../../hoc/_Aux/_Aux";
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

export default function UserTable(props) {
  const [notification, setNotification] = useState({
    open: false,
    type: "info",
    message: "",
  });

  const onNotificationClosed = () => {
    setNotification({
      open: false,
      type: "info",
      message: "",
    });
  };

  const openNotification = (type, message) => {
    setNotification({
      open: true,
      type,
      message,
    });
  };

  const rows = props.dataRows;
  const onSave = () => {
    const AllUserInfos = rows.map((row) => {
      const birthDate = row.DateDeNaissance.split("/");
      return {
        registrationDate: new Date(),
        startFunctionDate: new Date(),
        profilePicture: "Not Set",
        lastName: row.Nom,
        firstName: row.Prenom,
        userName: `${row.Nom}_${row.Prenom}`,
        password: Math.random().toString(36).substring(8),
        emailAddress: row.AddresseMail,
        birthDate: new Date(`${birthDate[2]}-${birthDate[1]}-${birthDate[0]}`),
        phoneNumber: row.Telephone,
        city: row.Ville,
        role: ROLES.Membre,
      };
    });

    axios
      .post(ADD_ALL_USERS, AllUserInfos)
      .then((response) => {
        if (response.status === 200){
          openNotification("success", `Les Utilisateurs ont été ajouté!`);
          props.refreshDataFunc();
          props.handleClose();
        }
      })
      .catch(() => {
        openNotification("error", "Une erreur est survenue !");
      });
  };

  return (
    <Aux>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Nom</TableCell>
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
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
      </TableContainer>
      <Grid container>
        <Grid item>
          <Button color="primary" onClick={onSave}>Ajouter</Button>
        </Grid>
      </Grid>
      <NoticationAlert handleClose={onNotificationClosed} {...notification} />
    </Aux>
  );
}
