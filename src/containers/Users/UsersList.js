import { Grid,  Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ManagementDashboard from "../../common/ManagementDashboard/ManagementDashboard";
import { UsersManagementType } from "../../Constantes";
import AddUserForm from "./AddUser/AddUserForm";
import ConsultUser from "./ConsultUser/ConsultUser";
import Aux from "../../hoc/_Aux/_Aux";
import { FIND_ALL_USERS, DELETE_USER } from "../../Routes";

import AddButton from "./AddButton/AddButton";

const UsersList = () => {
  const [openUserForm,setOpenUserForm] = useState(false)
  return (
    <ManagementDashboard
      deleteDataRoute={`${DELETE_USER}`}
      getDataListRoute={`${FIND_ALL_USERS}`}
      idField="idUser"
      typeManagement={`${UsersManagementType}`}
      render={({object, consult, edit, add, refreshDataFunc,setOpenObjectForm,setOpenConsultObject}) => {
        const [openConsult,setOpenConsult] = useState(false)
        useEffect(() => {
          setOpenUserForm(edit||add)
        },[edit, add])
        useEffect(() => {
          setOpenConsult(consult)
        },[consult])
        return (
          <Aux>
            <Grid item>
              <Typography gutterBottom variant="h4" component="div">
                Liste des Membres
              </Typography>
            </Grid>
           
            <Grid item>
              <AddButton refreshDataFunc={() => refreshDataFunc()} />
            </Grid>
      
              <AddUserForm
                visible={openUserForm}
                open={openUserForm}
                handleToggle={() => setOpenObjectForm(false)}
                user={object}
                refreshDataFunc={() => refreshDataFunc()}
              />
            
            {openConsult && (
              <ConsultUser
                user={object}
                open={consult}
                handleToggle={() => setOpenConsultObject(false)}
              />
            )}
          </Aux>
        );
      }}
    />
  );
};

export default UsersList;
