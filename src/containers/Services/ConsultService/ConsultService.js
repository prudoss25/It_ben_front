import React from "react";

import FormModal from "../../../common/FormModal/FormModal";
import PropTypes from "prop-types";
import { Button, Grid } from "@material-ui/core";

const consultService = (props) => {
  return (
    <FormModal
      open={props.open}
      title={`Informations ${props.service.title}`}
      handleClose={() => props.handleToggle}
    >
      <p>
        <strong>Titre : </strong>
        {props.service.title}
      </p>
      <p>
        <strong>Description : </strong>
        {props.service.description}
      </p>
      <p>
        <strong>Categorie : </strong>
        {props.service.category}
      </p>
      <p>
        <strong>Vendeur : </strong>
        {props.service.vendorId}
      </p>
      <p>
        <strong>Date d'incription : </strong>
        {props.service.registrationDate &&
          props.service.registrationDate.toLocaleDateString()}
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

export default consultService;

consultService.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  service: PropTypes.object,
};
