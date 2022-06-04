import React from "react";

import FormModal from "../../../common/FormModal/FormModal";
import PropTypes from "prop-types";
import { Button, Grid } from "@material-ui/core";

const consultUser = (props) => {
  return (
    <FormModal
      open={props.open}
      title={`Informations ${props.user.lastName} ${props.user.firstName}`}
      handleClose={() => props.handleToggle}
    >
      <p>
        <strong>Nom : </strong>
        {props.user.lastName}
      </p>
      <p>
        <strong>Prénom : </strong>
        {props.user.firstName}
      </p>
      <p>
        <strong>Nom d'utilisateur : </strong>
        {props.user.userName}
      </p>
      <p>
        <strong>Mot de Passe : </strong>
        {props.user.password}
      </p>
      <p>
        <strong>Matricule : </strong>
        {props.user.registrationNumber}
      </p>
      <p>
        <strong>Email : </strong>
        {props.user.emailAddress}
      </p>
      <p>
        <strong>Date d'incription : </strong>
        {props.user.registrationDate &&
          props.user.registrationDate.toLocaleDateString()}
      </p>
      <p>
        <strong>Role : </strong>
        {props.user.roleLabel}
      </p>
      <Grid
        container
        justifyContent={"space-around"}
        alignItems="center"
        style={{ marginTop: "16px" }}
      >
        <Grid item>
          <Button color="primary" onClick={props.handleToggle}>
            {" "}
            Ok{" "}
          </Button>
        </Grid>
      </Grid>
    </FormModal>
  );
};

export default consultUser;

consultUser.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  user: PropTypes.object,
};
