import React from "react";
import PropTypes from "prop-types";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from "@material-ui/core";

const usersListItem = (props) => {
  return (
    <tr key={props.user.registrationNumber}>
      <td>{props.user.lastName}</td>
      <td>{props.user.firstName}</td>
      <td>{props.user.registrationNumber}</td>
      <td>{props.user.city}</td>
      <td>{props.user.role}</td>
      <td style={{display:"flex", justifyContent:"space-between"}}>
        <IconButton onClick={props.onEdit}>
          <VisibilityIcon color="primary" /> 
        </IconButton>
        <IconButton onClick={props.onConsult}>
          <EditIcon color="secondary" />
        </IconButton>
        <IconButton onClick={props.onDelete}>
          <DeleteIcon color="error" />
        </IconButton>
      </td>
    </tr>
  );
};

export default usersListItem;

usersListItem.propTypes = {
  user: PropTypes.shape({
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    registrationNumber: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onConsult: PropTypes.func.isRequired
};
