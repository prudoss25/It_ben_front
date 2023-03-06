import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FormModal from "../../../common/FormModal/FormModal";
import axios from "../../../axios";
import { POST_USER, UPDATE_USER } from "../../../Routes";
import { CategorieList } from "../../../Constantes";
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
import { useDispatch, useSelector } from "react-redux";
import { getMoroccoCities } from "../../../services/actions/Town/TownActions";

const initialServiceInfo = {
  title: "",
  description: "",
  category: "",
  vendorId: "",
  image: "Not Set",
  registrationDate: new Date(),
  // phoneNumber: "",
  // role: "",
  // city: "",
  // registrationNumber: "",
};

const addServiceForm = (props) => {
  const dispatch = useDispatch()
  const villesList = useSelector((state) => state.town.all)
  useEffect(() => {
    dispatch(getMoroccoCities())
  }, []);
  useEffect(() => {
    if (props.user) {
      setServiceInfos(props.user);
    } else {
      setServiceInfos(initialServiceInfo);
    }
  }, [props.user]);
  useEffect(() => {
    setVilles(villesList)
  },[villesList])


  const [serviceInfos, setServiceInfos] = useState(initialServiceInfo);
  const [villes, setVilles] = useState([]);
  const [loading,setLoading] = useState(false);

  const defaultProps = {
    options: villes,
    getOptionLabel: (option) => option.asciiname,
  };

  const handleInfosChange = (value, field) => {
    let newValue = { ...serviceInfos, [field]: value };
    setServiceInfos(newValue);
  };

  const onSave = () => {
    if (
      serviceInfos.city &&
      serviceInfos.title &&
      serviceInfos.description &&
      serviceInfos.category &&
      serviceInfos.registrationDate 
    ) {
      setLoading(true)
      const infos = {
        ...serviceInfos,
        startFunctionDate: serviceInfos.registrationDate,
      };
      axios
        .post(POST_USER, infos)
        .then((response) => {
          if (response.status === 200)
            props.openNotication(
              "success",
              `Utilisateur ${serviceInfos.title} est ajouté!`
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
      serviceInfos.city &&
      serviceInfos.title &&
      serviceInfos.description &&
      serviceInfos.category &&
      serviceInfos.registrationDate 
    ) {
      setLoading(true)
      axios
        .put(UPDATE_USER, serviceInfos)
        .then((response) => {
          if (response.status === 200)
            props.openNotication(
              "success",
              `Utilisateur ${serviceInfos.title}  est modifié!`
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
      title="Ajouter Un Service"
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
                name="title"
                value={serviceInfos.title}
                onChange={(event) =>
                  handleInfosChange(event.target.value, "title")
                }
                label="titre"
                id="standard-size-small"
                size="small"
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="Description"
                value={serviceInfos.description}
                onChange={(event) =>
                  handleInfosChange(event.target.value, "description")
                }
                label="Description"
                id="standard-size-small"
                size="small"
                variant="standard"
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
          <Grid item xs={6}>
              <TextField
                name="VendorID"
                value={serviceInfos.vendorId}
                onChange={(event) =>
                  handleInfosChange(event.target.value, "VendorId")
                }
                label="VendorID"
                id="standard-size-small"
                size="small"
                variant="standard"
              />
            </Grid>
            <MuiPickersUtilsProvider
              libInstance={moment}
              utils={MomentUtils}
              locale={"fr"}
            >
              <Grid item xs={6}>
                <KeyboardDatePicker
                  clearable
                  views={["year", "month", "date"]}
                  format="L"
                  mask="__/__/____"
                  placeholder="dd/MM/yyyy"
                  label="Date d'inscription"
                  name="registrationDate"
                  value={serviceInfos.registrationDate}
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
                handleInfosChange(value != null ? value.asciiname : "", "city")
              }
              value={{
                asciiname: serviceInfos.city,
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
                Categorie
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={serviceInfos.role}
                name="role"
                size="small"
                onChange={(event) => {
                  handleInfosChange(event.target.value, "role");
                }}
                label="Role"
              >
                {CategorieList.map((categorie) => (
                  <MenuItem key={categorie.value} value={categorie.value}>
                    {categorie.label}
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

export default withManagementForm(addServiceForm);

addServiceForm.defaultProps = {
  edit: false,
  user: null,
};

addServiceForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  openNotication: PropTypes.func.isRequired,
  edit: PropTypes.bool,
  user: PropTypes.object,
};
