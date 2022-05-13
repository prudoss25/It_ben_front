import React from "react";
import PropTypes from "prop-types";

const usersListItem = (props) => {
  return (
    <tr>
      <td>{props.user.lastName}</td>
      <td>{props.user.firstName}</td>
      <td>{props.user.registrationNumber}</td>
      <td>{props.user.city}</td>
      <td>{props.user.role}</td>
      <td>
        <i className="ri-eye-line"></i> <i className="ri-pen-nib-line"></i>
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
    registrationNumber: PropTypes.number.isRequired,
  }).isRequired,
};
