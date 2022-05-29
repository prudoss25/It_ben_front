import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "date-fns";

import FormModal from "../../../common/FormModal/FormModal";
import axios, { morrocoTownFetcher } from "../../../axios";
import { MOROCCO_TOWN, POST_USER } from "../../../Routes";
import NoticationAlert from "../../../components/UI/NotificationAlert/NotificationAlert";
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
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { Autocomplete } from "@material-ui/lab";

const addUserForm = (props) => {
  useEffect(() => {
    morrocoTownFetcher.get(MOROCCO_TOWN).then((response) => {
      setVilles(response.data);
    });
    if (props.edit) {
      setGeneralInfos(...props.user);
    }
  }, []);

  const [generalInfos, setGeneralInfos] = useState({
    lastName: "",
    firstName: "",
    emailAddress: "",
    registrationDate: new Date(),
    role: "",
    city: "",
    registrationNumber: "",
  });
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    type: "info",
  });
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
      generalInfos.role
    ) {
      axios
        .post(POST_USER, generalInfos)
        .then((response) => {
          if (response.status === 200)
            setNotification({
              open: true,
              message: `Utilisateur ${generalInfos.lastName} ${generalInfos.firstName} est ajouté!`,
              type: "success",
            });
          props.handleToggle();
        })
        .catch(() => {
          setNotification({
            open: true,
            message: "Une erreur est survenue !",
            type: "error",
          });
          props.handleToggle();
        });
    }
  };

  const onEdit = () => {};

  const onSubmit = () => {
    if (props.edit) {
      onEdit();
    } else {
      onSave();
    }
  };

  const handleNotificationClose = () => {
    setNotification({
      open: false,
      message: "",
      type: "info",
    });
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
                value={generalInfos.registrationNumber}
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
          <Grid item container xs={12}>
            <Autocomplete
              {...defaultProps}
              name="city"
              onChange={(event, value) =>
                handleInfosChange(value.ville, "city")
              }
              fullWidth
              id="auto-complete"
              autoComplete
              includeInputInList
              renderInput={(params) => (
                <TextField {...params} label="Ville" variant="standard" />
              )}
            />
          </Grid>
          <Grid item container xs={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                label="Date d'inscription"
                name="registrationDate"
                format="dd/MM/yyyy"
                fullWidth
                value={generalInfos.registrationDate}
                onChange={(date) => handleInfosChange(date, "registrationDate")}
              />
            </MuiPickersUtilsProvider>
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
            <Button color="primary" onClick={onSubmit}>
              {" "}
              Valider{" "}
            </Button>
          </Grid>
          <Grid item>
            <Button color="secondary" onClick={props.handleToggle}>
              {" "}
              Annuler{" "}
            </Button>
          </Grid>
        </Grid>
      </form>
      <NoticationAlert
        message={notification.message}
        open={notification.open}
        type={notification.type}
        handleClose={handleNotificationClose}
      />
    </FormModal>
  );
};

export default addUserForm;

addUserForm.defaultProps = {
  edit: false,
  user: {},
};

addUserForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  edit: PropTypes.bool,
  user: PropTypes.object,
};
