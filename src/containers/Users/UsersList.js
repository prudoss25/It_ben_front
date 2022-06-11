import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Aux from "../../hoc/_Aux/_Aux";
import UsersListTable from "../../components/Users/UsersListTable";
import Button from "../../components/UI/Button/Button";
import { FIND_ALL_USERS, DELETE_USER } from "../../Routes";
import { ROLES } from "../../Constantes";
import Loading from "../../common/Loading/Loading";
import AddUserForm from "./AddUser/AddUserForm";
import ConsultUser from "./ConsultUser/ConsultUser";
import ConfirmAlert from "../../components/UI/ConfirmAlert/ConfirmAlert";
import NoticationAlert from "../../components/UI/NotificationAlert/NotificationAlert";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openUserForm, setOpenUserForm] = useState(false);
  const [openConsultUser, setOpenConsultUser] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    type: "info",
    message: "",
  });
  const [currentUser, setCurrentUser] = useState(null);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    edit: false,
    delete: false,
    onDelete: () => onConfirmDelete(null),
    onEdit: () => onConfirmEdit(null),
  });
  const getData = () => {
    setLoading(true);
    axios.get(FIND_ALL_USERS).then((response) => {
      if (response.status === 200) {
        const liste = response.data.map((user) => ({
          ...user,
          roleLabel: ROLES[user.role] || "",
          registrationDate: user.registrationDate && new Date(user.registrationDate)
        }));
        setUsers(liste);
        setLoading(false);
      }
    });
  }
  useEffect(() => {
    getData();
  }, []);
  
  useEffect(() => {
    if(openUserForm === false){
      setCurrentUser(null)
    }
  }, [openUserForm])

  useEffect(() => {
    if(openConsultUser === false){
      setCurrentUser(null)
    }
  }, [openConsultUser])
  
  /*Delete User Management */
  const deleteUser = (user) => {
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
        .delete(`${DELETE_USER}${user.idUser}`)
        .then((response) => {
          if (response.status === 200) {
            openNotification("success",`L'utilisateur ${user.lastName} ${user.firstName} a été supprimé`);
            onAlertClosed();
          }
        })
        .catch(() => {
          openNotification("error",`Une erreur est survenue`);
        });
    }
  };

  const openNotification = (type, message) => {
    setNotification({
      open: true,
      type,
      message,
    });
  }

  /*Edit User Management */
  const editUser = (user) => {
    setCurrentUser(user);
    setOpenUserForm(true);
  };
  const onConfirmEdit = () => {};

  const consultUser = (user) => {
     handleConsultUser(user);
  };

  /* Add User */
  const handleAddUser = () => {
    setOpenUserForm(true);
  };
  const handleCloseForm = () => {
    setOpenUserForm(false);
    // setCurrentUser(null);
  };

  /* Consult User Informations */
  const handleCloseConsult = () => {
    setOpenConsultUser(false);
    // setCurrentUser(null);
  };
  const handleConsultUser = (user) => {
    setCurrentUser(user);
    setOpenConsultUser(true);
  };

  const onNotificationClosed = () => {
    getData()
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
          {
            openUserForm &&
          <AddUserForm open={openUserForm} handleToggle={handleCloseForm} user={currentUser} openNotication={(type, message) => openNotification(type, message) } />
          }
          {
            openConsultUser &&
            <ConsultUser
              user={currentUser}
              open={openConsultUser}
              handleToggle={handleCloseConsult}
            />
          }
        </CardContent>
      </Card>
      <ConfirmAlert
        open={alert.open}
        message={alert.message}
        handleClose={onAlertClosed}
        handleConfirm={
          (alert.delete && alert.onDelete) ||
          (alert.edit && alert.onEdit) ||
          (() => {})
        }
      />
      <NoticationAlert handleClose={onNotificationClosed} {...notification} />
    </Aux>
  );
};

export default UsersList;
