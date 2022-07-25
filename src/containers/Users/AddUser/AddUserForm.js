import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import "date-fns";

import FormModal from "../../../common/FormModal/FormModal";
import axios, { morrocoTownFetcher } from "../../../axios";
import { MOROCCO_TOWN, POST_USER, UPDATE_USER } from "../../../Routes";
import { RoleList } from "../../../Constantes";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   KeyboardDatePicker,
//   MuiPickersUtilsProvider,
// } from "@material-ui/pickers";
import { Autocomplete } from "@material-ui/lab";
const initialGeneralInfo = {
  lastName: "",
  firstName: "",
  userName:"",
  password:"",
  profilePicture: "Not Set",
  emailAddress: "",
  registrationDate: new Date(),
  birthDate: new Date(),
  startFunctionDate: new Date(),
  phoneNumber: "",
  role: "",
  city: "",
  registrationNumber: "",
}
const addUserForm = (props) => {
  useEffect(() => {
    morrocoTownFetcher.get(MOROCCO_TOWN).then((response) => {
      setVilles(response.data);
    });
    if (props.edit) {
      setGeneralInfos(...props.user);
    }
  }, []);
  useEffect(() => {
    if (props.user) {
      setGeneralInfos(props.user);
    }
    else {
      setGeneralInfos(initialGeneralInfo)
    }
  }, [props.user]);
  const [generalInfos, setGeneralInfos] = useState(initialGeneralInfo);
  const [villes, setVilles] = useState([]);
  const defaultProps = {
    options: villes,
    getOptionLabel: (option) => option.ville,
  };

  const handleInfosChange = (value, field) => {
    let newValue = { ...generalInfos, [field]: value };
    setGeneralInfos(newValue);
  };

  const onSave = () => {
    if (
      generalInfos.city &&
      generalInfos.emailAddress &&
      generalInfos.firstName &&
      generalInfos.lastName &&
      generalInfos.registrationDate &&
      generalInfos.birthDate &&
      generalInfos.role
    ) {
      const infos = {
        ...generalInfos,
        userName: `${generalInfos.lastName}_${generalInfos.firstName}`,
        password: Math.random().toString(36).substring(8),
        startFunctionDate:generalInfos.registrationDate,
      }
      axios
        .post(POST_USER, infos)
        .then((response) => {
          if (response.status === 200)
            props.openNotication(
              "success",
              `Utilisateur ${generalInfos.lastName} ${generalInfos.firstName} est ajouté!`
            );
          props.handleToggle();
        })
        .catch(() => {
          props.openNotication("error", "Une erreur est survenue !");
          props.handleToggle();
        });
    }
  };

  const onEdit = () => {
    if (
      generalInfos.city &&
      generalInfos.emailAddress &&
      generalInfos.firstName &&
      generalInfos.lastName &&
      generalInfos.registrationDate &&
      generalInfos.birthDate &&
      generalInfos.registrationNumber &&
      generalInfos.role
    ) {
      axios
        .put(UPDATE_USER, generalInfos)
        .then((response) => {
          if (response.status === 200)
            props.openNotication(
              "success",
              `Utilisateur ${generalInfos.lastName} ${generalInfos.firstName} est modifié!`
            );
          props.handleToggle();
        })
        .catch(() => {
          props.openNotication("error", "Une erreur est survenue !");
          props.handleToggle();
        });
    }
  };

  const onSubmit = () => {
    if (props.user) {
      onEdit();
    } else {
      onSave();
    }
  };

  return (
    <FormModal
      open={props.open}
      title="Ajouter Un Utilisateur"
      handleClose={() => props.handleToggle}
    >
      <form>
        <Grid container>
          <Grid
            item
            container
            lg={12}
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Grid item xs={6}>
              <TextField
                name="firstName"
                value={generalInfos.firstName}
                onChange={(event) =>
                  handleInfosChange(event.target.value, "firstName")
                }
                label="Prénom"
                id="standard-size-small"
                size="small"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="lastName"
                value={generalInfos.lastName}
                onChange={(event) =>
                  handleInfosChange(event.target.value, "lastName")
                }
                label="Nom"
                id="standard-size-small"
                size="small"
                variant="standard"
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Grid item xs={6}>
              <TextField
                value={generalInfos.phoneNumber}
                name="phoneNumber"
                label="Numéro Téléphone"
                onChange={(event) =>
                  handleInfosChange(event.target.value, "phoneNumber")
                }
                id="standard-size-small"
                size="small"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="emailAddress"
                value={generalInfos.emailAddress}
                onChange={(event) =>
                  handleInfosChange(event.target.value, "emailAddress")
                }
                label="Adresse Mail"
                id="standard-size-small"
                size="small"
                variant="standard"
              />
            </Grid>
          </Grid>
          {/* <Grid item container xs={12}>
            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="Date de Naissance"
                  name="birthDate"
                  format="dd/MM/yyyy"
                  value={generalInfos.birthDate}
                  onChange={(date) => handleInfosChange(date, "birthDate")}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="Date d'inscription"
                  name="registrationDate"
                  format="dd/MM/yyyy"
                  value={generalInfos.registrationDate}
                  onChange={(date) =>
                    handleInfosChange(date, "registrationDate")
                  }
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid> */}
          <Grid item container xs={12}>
            <Autocomplete
              {...defaultProps}
              name="city"
              onChange={(event, value) =>
                handleInfosChange(value.ville, "city")
              }
              value={{
                ville:generalInfos.city}}
              fullWidth
              id="auto-complete"
              autoComplete
              includeInputInList
              renderInput={(params) => (
                <TextField {...params} label="Ville" variant="standard" />
              )}
            />
          </Grid>
          <Grid item container>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                Role
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={generalInfos.role}
                name="role"
                size="small"
                onChange={(event) => {
                  handleInfosChange(event.target.value, "role");
                }}
                label="Role"
              >
                {RoleList.map((role) => (
                  <MenuItem key={role.value} value={role.value}>
                    {role.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"space-around"}
          alignItems="center"
          style={{ marginTop: "16px" }}
        >
          <Grid item>
            <Button color="secondary" onClick={props.handleToggle}>
              {" "}
              Annuler{" "}
            </Button>
          </Grid>
          <Grid item>
            <Button color="primary" onClick={onSubmit}>
              {" "}
              Valider{" "}
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormModal>
  );
};

export default addUserForm;

addUserForm.defaultProps = {
  edit: false,
  user: null,
};

addUserForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  openNotication: PropTypes.func.isRequired,
  edit: PropTypes.bool,
  user: PropTypes.object,
};
