import React from "react";
import PropTypes from "prop-types";
import UsersListItem from "./UsersListItem/UsersListItem";
import classes from "./UsersListTable.css";


const usersListTable = (props) => {
  const usersList =
    props.users && props.users.length > 0 ? (
      props.users.map((user) => <UsersListItem user={user} />)
    ) : (
      <tr style={{ textAlign: "center" }}>
        <td colSpan={6}>Pas de Membres Inscrits</td>
      </tr>
    );
  return (
    <table className={classes.UsersListTable}>
      <tr>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Matricule</th>
        <th>Ville</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
      {usersList}
    </table>
  );
};

export default usersListTable;

usersListTable.propTypes = {
  users: PropTypes.array,
};
