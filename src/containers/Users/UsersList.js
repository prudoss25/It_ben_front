import React, { useEffect, useState } from "react";
import Aux from "../../hoc/_Aux/_Aux";
import UsersListTable from "../../components/Users/UsersListTable";
import Button from "../../components/UI/Button/Button";
import axios from "axios";
import { FIND_ALL_USERS } from "../../Routes";
import Loading from "../../common/Loading/Loading";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import AddUserForm from "./AddUser/AddUserForm";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAddUser, setOpenAddUser] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(FIND_ALL_USERS).then((response) => {
      if (response.status === 200) {
        setUsers(response.data);
        setLoading(false);
      }
    });
  }, []);
  const handleAddUser = () => {
    setOpenAddUser(true);
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
            <Grid item sx={7}>
              <Button action={handleAddUser}> Ajouter </Button>
            </Grid>
          </Grid>
          <UsersListTable users={users} />
          <AddUserForm open={openAddUser} handleToggle={setOpenAddUser} />
        </CardContent>
      </Card>
    </Aux>
  );
};

export default UsersList;
