import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import axios from "axios";

import Aux from "../../hoc/_Aux/_Aux";
import UsersListTable from "../../components/Users/UsersListTable";
import Button from "../../components/UI/Button/Button";
import { FIND_ALL_USERS, DELETE_USER } from "../../Routes";
import { ROLES } from "../../Constantes";
import Loading from "../../common/Loading/Loading";
import AddUserForm from "./AddUser/AddUserForm";
import ConfirmAlert from "../../components/UI/ConfirmAlert/ConfirmAlert";
import NoticationAlert from "../../components/UI/NotificationAlert/NotificationAlert";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAddUser, setOpenAddUser] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    type: "info",
    message: "",
  });
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    edit: false,
    delete: false,
    onDelete: () => onConfirmDelete(null),
    onEdit: () => onConfirmEdit(null),
  });

  useEffect(() => {
    setLoading(true);
    axios.get(FIND_ALL_USERS).then((response) => {
      if (response.status === 200) {
        const liste = response.data.map((user) => ({
          ...user,
          role: ROLES[user.role] || "",
        }));
        setUsers(liste);
        setLoading(false);
      }
    });
  }, []);

  const deleteUser = (user) => {
    console.log(user);
    setAlert({
      ...alert,
      open: true,
      message: `Etes vous sûr de supprimer l'utilisateur ${user.lastName} ${user.firstName} ?`,
      delete: true,
      onDelete: () => onConfirmDelete(user),
    });
  };
  const onConfirmDelete = (user) => {
    if (user) {
      axios
        .delete(`${DELETE_USER}${user.registrationNumber}`)
        .then((response) => {
          if(response.status === 200){
            setNotification({
              open: true,
              type: "success",
              message: `L'utilisateur ${user.lastName} ${user.firstName} a été supprimé`,
            });
            onAlertClosed()
          }
        })
        .catch(() => {
          setNotification({
            open: true,
            type: "error",
            message: `Une erreur est survenue`,
          });
        });
    }
  };

  const editUser = (user) => {};
  const onConfirmEdit = () => {};

  const consultUser = (user) => {};

  const handleAddUser = () => {
    setOpenAddUser(true);
  };
  const handleCloseForm = () => {
    setOpenAddUser(false);
  };
  const onNotificationClosed = () => {
    setNotification({
      open: false,
      type: "info",
      message: "",
    });
  };
  const onAlertClosed = () => {
    setAlert({
      open: false,
      message: "",
      edit: false,
      delete: false,
      onDelete: () => onConfirmDelete(),
      onEdit: () => onConfirmEdit(),
    });
  };
  return (
    <Aux>
      <Card>
        <CardContent>
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <Typography gutterBottom variant="h4" component="div">
                Liste des Membres
              </Typography>
            </Grid>
            <Grid item>{loading && <Loading />}</Grid>
            <Grid item>
              <Button action={handleAddUser}> Ajouter </Button>
            </Grid>
          </Grid>
          <UsersListTable
            users={users}
            onConsult={consultUser}
            onDelete={deleteUser}
            onEdit={editUser}
          />
          <AddUserForm open={openAddUser} handleToggle={handleCloseForm} />
        </CardContent>
      </Card>
      <ConfirmAlert
        open={alert.open}
        message={alert.message}
        handleClose={onAlertClosed}
        handleConfirm={
          (alert.delete && alert.onDelete) || (alert.edit && alert.onEdit) || (() => {})
        }
      />
      <NoticationAlert handleClose={onNotificationClosed} {...notification} />
    </Aux>
  );
};

export default UsersList;
