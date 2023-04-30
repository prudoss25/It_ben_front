import React from "react";

import FormModal from "../../../common/FormModal/FormModal";
import PropTypes from "prop-types";
import { Button, Grid } from "@material-ui/core";

const consultService = (props) => {
  const {service} = props
  return (
    <FormModal
      open={props.open}
      title={`Détails Service :  ${service.title}`}
      handleClose={() => props.handleToggle}
    >
      <p>
        <strong>Titre : </strong>
        {service.title}
      </p>
      <p>
        <strong>Description : </strong>
        {service.description}
      </p>
      <p>
        <strong>Categorie : </strong>
        {service.category}
      </p>
      <p>
        <strong>Vendeur : </strong>
        {service.entrepreneur ? `${service.entrepreneur.userName} (${service.entrepreneur.registrationNumber})` : "Non défini"}
      </p>
      <p>
        <strong>Couverture Géographique : </strong>
        {service.couvertureGeographique ? [...service.couvertureGeographique].join(", ") : "Non défini"}
      </p>
      <p>
        <strong>Date Création : </strong>
        {service.registrationDate &&
          service.registrationDate.toLocaleDateString()}
      </p>
      <p>
        <strong>Facebook : </strong>
        {
          service.facebook ?
          <a href={service.facebook} target="_blank">Lien Facebook</a>
          :"Non défini"
        }
      </p>
      <p>
        <strong>WhatsApp : </strong>
        {
          service.whatsapp ?
          <a href={service.whatsapp} target="_blank">Lien whatsapp</a>
          :"Non défini"
        }
      </p>
      <p>
        <strong>Instagram : </strong>
        {
          service.instagram ?
          <a href={service.instagram} target="_blank">Lien Instagram</a>
          :"Non défini"
        }
      </p>
      <p>
        <strong>Site Internet : </strong>
        {
          service.siteInternet ?
          <a href={service.siteInternet} target="_blank">Lien Site</a>
          :"Non défini"
        }
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
