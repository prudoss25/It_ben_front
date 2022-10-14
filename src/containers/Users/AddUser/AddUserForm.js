import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FormModal from "../../../common/FormModal/FormModal";
import axios from "../../../axios";
import { POST_USER, UPDATE_USER } from "../../../Routes";
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
import MomentUtils from "@date-io/moment";
import moment from "moment";
import "moment/locale/fr";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { Autocomplete } from "@material-ui/lab";
import withManagementForm from "../../../common/ManagementDashboard/withManagementForm";
import { cities } from "morocco-cities";

const initialGeneralInfo = {
  lastName: "",
  firstName: "",
  userName: "",
  password: "",
  profilePicture: "Not Set",
  emailAddress: "",
  registrationDate: new Date(),
  birthDate: new Date(),
  startFunctionDate: new Date(),
  phoneNumber: "",
  role: "",
  city: "",
  registrationNumber: "",
};

const addUserForm = (props) => {
  useEffect(() => {
    
    setVilles(cities);
  }, []);
  useEffect(() => {
    if (props.user) {
      setGeneralInfos(props.user);
    } else {
      setGeneralInfos(initialGeneralInfo);
    }
  }, [props.user]);

  const [generalInfos, setGeneralInfos] = useState(initialGeneralInfo);
  const [villes, setVilles] = useState([]);
  const [loading,setLoading] = useState(false);

  const defaultProps = {
    options: villes,
    getOptionLabel: (option) => option.name,
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
      setLoading(true)
      const infos = {
        ...generalInfos,
        userName: `${generalInfos.lastName}_${generalInfos.firstName}`,
        password: Math.random().toString(36).substring(8),
        startFunctionDate: generalInfos.registrationDate,
      };
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
      setLoading(true)
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
    setLoading(false)
  };

  return (
    <FormModal
      open={props.open}
      title="Ajouter Un Utilisateur"
      handleClose={() => props.handleToggle()}
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
          <Grid item container xs={12}>
            <MuiPickersUtilsProvider
              libInstance={moment}
              utils={MomentUtils}
              locale={"fr"}
            >
              <Grid item xs={6}>
                <KeyboardDatePicker
                  clearable
                  views={["year", "month", "date"]}
                  label="Date de Naissance"
                  name="birthDate"
                  format="L"
                  mask="__/__/____"
                  placeholder="dd/MM/yyyy"
                  value={generalInfos.birthDate}
                  onChange={(date) => handleInfosChange(date, "birthDate")}
                />
              </Grid>
              <Grid item xs={6}>
                <KeyboardDatePicker
                  clearable
                  views={["year", "month", "date"]}
                  format="L"
                  mask="__/__/____"
                  placeholder="dd/MM/yyyy"
                  label="Date d'inscription"
                  name="registrationDate"
                  value={generalInfos.registrationDate}
                  onChange={(date) =>
                    handleInfosChange(date, "registrationDate")
                  }
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item container xs={12}>
            <Autocomplete
              {...defaultProps}
              name="city"
              onChange={(event, value) =>
                handleInfosChange(value != null ? value.name : "", "city")
              }
              value={{
                name: generalInfos.city,
              }}
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
            <Button color="primary" disabled={loading} onClick={onSubmit}>
              {" "}
              Valider{" "}
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormModal>
  );
};

export default withManagementForm(addUserForm);

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
