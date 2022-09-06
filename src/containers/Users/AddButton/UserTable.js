import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@material-ui/core";
import Button from "@mui/material/Button";
import axios from "../../../axios";
import { ADD_ALL_USERS } from "../../../Routes";
import "moment/locale/fr";
import { ROLES } from "../../../Constantes";
import NoticationAlert from "../../../components/UI/NotificationAlert/NotificationAlert";
import Aux from "../../../hoc/_Aux/_Aux";

export default function UserTable(props) {
  const [notification, setNotification] = useState({
    open: false,
    type: "info",
    message: "",
  });

  const onNotificationClosed = () => {
    //props.refreshDataFunc();
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
          props.handleClose()
        }
      })
      .catch(() => {
        openNotification("error", "Une erreur est survenue !");
      });
  };

  return (
    <Aux>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
      <Grid>
        <Button onClick={onSave}>Ajouter</Button>
      </Grid>
      <NoticationAlert handleClose={onNotificationClosed} {...notification} />
    </Aux>
  );
}
