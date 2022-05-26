import React from "react";
import PropTypes from "prop-types";
import UsersListItem from "./UsersListItem/UsersListItem";
import classes from "./UsersListTable.css";

const usersListTable = (props) => {
  const usersList =
    props.users && props.users.length > 0 ? (
      props.users.map((user) => (
        <UsersListItem
          key={user.idUser}
          user={user}
          onConsult={() => props.onConsult(user)}
          onDelete={() => props.onDelete(user)}
          onEdit={() => props.onEdit(user)}
        />
      ))
    ) : (
      <tr style={{ textAlign: "center" }}>
        <td colSpan={6}>Pas de Membres Inscrits</td>
      </tr>
    );
  return (
    <table className={classes.UsersListTable}>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Matricule</th>
          <th>Ville</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {usersList}
      </tbody>
    </table>
  );
};

export default usersListTable;

usersListTable.propTypes = {
  users: PropTypes.array,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onConsult: PropTypes.func.isRequired,
};
