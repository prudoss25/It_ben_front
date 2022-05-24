import { Button, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import FormModal from "../../../common/FormModal/FormModal";
import PropTypes from "prop-types";

const addUserForm = (props) => {
  const roles = [
    {
      default: true,
      value: "Membre",
      label: "Membre",
    },
    {
      value: "SG",
      label: "Secrétaire Général",
    },
    {
      value: "SGA",
      label: "Secrétaire Général Adjoint",
    },
    {
      value: "Tresorier",
      label: "Trésorier(e)",
    },
    {
      value: "Commissaire",
      label: "Commissaire Au Compte",
    },
    {
      value: "Communication",
      label: "Chargé Communication",
    },
    {
      value: "CCS",
      label: "Chargé Culturel et Sportif",
    },
    {
      value: "PCC",
      label: "Président CC",
    },
    {
      value: "PACC",
      label: "Président Adjoint CC",
    },
    {
      value: "SGH",
      label: "Secrétaire Général d'Honneur",
    },
    {
      value: "RV",
      label: "Responsable Ville",
    },
  ];
  const [role, setRole] = useState(roles[0].value);
  return (
    <FormModal
      open={props.open}
      title="Ajouter Un Utilisateur"
      handleClose={() => props.handleToggle(false)}
    >
      <form>
        <Grid container>
          <Grid item container lg={12} justifyContent={"space-between"}>
            <Grid item xs={6}>
              <TextField
                label="Prénom"
                id="standard-size-small"
                size="small"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Nom"
                id="standard-size-small"
                size="small"
                variant="standard"
              />
            </Grid>
          </Grid>
          <Grid item container xs={12} alignItems={"space-between"}>
            <Grid item xs={6}>
              <TextField
                label="Matricule"
                InputProps={{
                  readOnly: true,
                }}
                id="standard-size-small"
                size="small"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Ville"
                id="standard-size-small"
                size="small"
                variant="standard"
              />
            </Grid>
          </Grid>
          <Grid item container xs={12} alignItems={"space-between"}>
            <Grid item xs={6}>
              <TextField
                label="Adresse Mail"
                id="standard-size-small"
                size="small"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Date d'inscription"
                id="standard-size-small"
                size="small"
                variant="standard"
              />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={12}>
              <InputLabel id="demo-simple-select-standard-label">
                Role
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={role}
                input={<OutlinedInput label="Role" />}
                
                MenuProps={{PaperProps:{
                    style:{
                        width:500
                    }
                }}}
                variant="standard"
                onChange={(event) => {
                  setRole(event.target.value);
                }}
                label="Role"
              >
                {roles.map((role) => (
                  <MenuItem
                    value={role.value}
                    defaultValue={role.default && role.value}
                  >
                    {role.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent={"space-around"} alignItems="center">
            <Grid item><Button color="success">Valider</Button></Grid>
            <Grid item><Button color="error">Anuuler</Button></Grid>
        </Grid>
      </form>
    </FormModal>
  );
};

export default addUserForm;

addUserForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
