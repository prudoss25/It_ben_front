import React, { useEffect, useState } from "react";
import Aux from "../../hoc/_Aux/_Aux";
import UsersListTable from "../../components/Users/UsersListTable";
import Button from "../../components/UI/Button/Button";
import axios from "axios";
import { FIND_ALL_USERS } from "../../Routes";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(FIND_ALL_USERS).then((response) => {
      if (response.status === 200) {
        setUsers(response.data);
      }
    });
  }, []);

  return (
    <Aux>
      <div
        style={{
          height: "100%",
          width: "50%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div >
          <h1 style={{marginTop: "-3px"}}>Liste des Membres</h1>
        </div>
        <div >
          <Button action={() => setUsers([])}> Ajouter </Button>
        </div>
      </div>
      <UsersListTable users={users} />
    </Aux>
  );
};

export default UsersList;
