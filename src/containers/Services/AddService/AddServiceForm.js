import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FormModal from "../../../common/FormModal/FormModal";
import { CategorieList } from "../../../Constantes";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
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
import { getMoroccoCities } from "../../../features/actions/Town/TownActions";
import { getEntrepreneurListe } from "../../../features/actions/User/UserAction";
import {
  postService,
  putService,
} from "../../../features/actions/Service/ServiceAction";

const initialServiceInfo = {
  title: "",
  description: "",
  category: "",
  vendorId: "",
  image: "Not Set",
  registrationDate: new Date(),
  couvertureGeographique: [],
  entrepreneurRegistrationNumber: "",
  facebook: "",
  whatsapp: "",
  instagram: "",
  siteInternet: "",
};

const addServiceForm = (props) => {
  const dispatch = useDispatch();
  const villesList = useSelector((state) => state.town.all);
  const [edit, seEdit] = useState(false);
  const entrepreneursListe = useSelector((state) => state.user.entrepreneurs);
  const [serviceInfos, setServiceInfos] = useState(initialServiceInfo);
  const [villes, setVilles] = useState([]);
  const [entrepreneurs, setEntrepreneurs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getMoroccoCities());
    dispatch(getEntrepreneurListe());
  }, []);
  useEffect(() => {
    console.log("service", props.service);
    if (props.service) {
      seEdit(true);
      setServiceInfos({
        ...props.service,
        category: CategorieList.find(
          (cat) => cat.label === props.service.category
        ).value,
        entrepreneurRegistrationNumber:
          props.service.entrepreneur.registrationNumber,
      });
    } else {
      setServiceInfos(initialServiceInfo);
    }
  }, [props.service]);
  useEffect(() => {
    setVilles(villesList);
  }, [villesList]);
  useEffect(() => {
    if (entrepreneursListe)
      setEntrepreneurs(
        [...entrepreneursListe].map((el) => ({
          ...el,
          label: `${el.registrationNumber} ${el.userName}`,
        }))
      );
    else setEntrepreneurs([]);
  }, [entrepreneursListe]);

  const defaultCitiesProps = {
    options: villes,
    getOptionLabel: (option) => option.asciiname,
  };
  const defaultUsersProps = {
    options: entrepreneurs,
    getOptionLabel: (option) => option.label,
  };

  const handleInfosChange = (value, field) => {
    let newValue = { ...serviceInfos, [field]: value };
    setServiceInfos(newValue);
  };

  const onSave = () => {
    if (
      serviceInfos.couvertureGeographique &&
      serviceInfos.title &&
      serviceInfos.description &&
      serviceInfos.category &&
      serviceInfos.dateLimite
    ) {
      setLoading(true);
      dispatch(postService(serviceInfos))
        .then((response) => {
          if (response) {
            props.openNotication(
              "success",
              `Le Service ${serviceInfos.title} est ajouté!`
            );
          } else {
            props.openNotication("error", "Une erreur est survenue !");
            props.handleToggle();
          }
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
      serviceInfos.couvertureGeographique &&
      serviceInfos.title &&
      serviceInfos.description &&
      serviceInfos.category &&
      serviceInfos.dateLimite
    ) {
      setLoading(true);
      dispatch(putService(serviceInfos))
        .then((response) => {
          if (response) {
            props.openNotication(
              "success",
              `Le service ${serviceInfos.title} a été modifié !`
            );
          } else {
            props.openNotication("error", "Une erreur est survenue !");
          }
          props.handleToggle();
        })
        .catch(() => {
          props.openNotication("error", "Une erreur est survenue !");
          props.handleToggle();
        });
    }
  };

  const onSubmit = () => {
    if (props.service) {
      onEdit();
    } else {
      onSave();
    }
    setLoading(false);
  };

  return (
    <FormModal
      open={props.open}
      title="Ajouter Un Service"
      handleClose={() => props.handleToggle()}
    >
      <form>
        <Grid container>
          <Grid item container xs={12}>
            <TextField
              fullWidth
              name="title"
              value={serviceInfos.title}
              onChange={(event) =>
                handleInfosChange(event.target.value, "title")
              }
              label="Titre"
              id="standard-size-small"
              size="small"
              variant="standard"
            />
          </Grid>
          <Grid item container xs={12}>
            <Autocomplete
              {...defaultCitiesProps}
              multiple
              name="couvertureGeographique"
              onChange={(event, value) => {
                handleInfosChange(
                  value != null ? [...value].map((e) => e.asciiname) : "",
                  "couvertureGeographique"
                );
              }}
              value={[...serviceInfos.couvertureGeographique].map((city) => ({
                asciiname: city,
              }))}
              fullWidth
              id="auto-complete"
              autoComplete
              includeInputInList
              renderInput={(params) => (
                <TextField {...params} label="Villes" variant="standard" />
              )}
            />
          </Grid>

          <Grid item container xs={12}>
            <Autocomplete
              {...defaultUsersProps}
              disabled={edit}
              name="entrepreneurRegistrationNumber"
              onChange={(event, value) => {
                handleInfosChange(
                  value != null ? value.registrationNumber : "",
                  "entrepreneurRegistrationNumber"
                );
              }}
              value={entrepreneurs.find(
                (entrepreneur) =>
                  entrepreneur.registrationNumber ===
                  serviceInfos.entrepreneurRegistrationNumber
              )}
              fullWidth
              id="auto-complete"
              autoComplete
              includeInputInList
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Entrepreneur"
                  variant="standard"
                />
              )}
            />
          </Grid>
          <Grid item container xs={12}>
            <MuiPickersUtilsProvider
              libInstance={moment}
              utils={MomentUtils}
              locale={"fr"}
            >
              <KeyboardDatePicker
                fullWidth
                clearable
                views={["year", "month", "date"]}
                format="L"
                mask="__/__/____"
                placeholder="dd/MM/yyyy"
                label="Date Limite"
                name="dateLimite"
                value={serviceInfos.dateLimite}
                onChange={(date) => handleInfosChange(date, "dateLimite")}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item container xs={12}>
            <TextField
              name="Description"
              value={serviceInfos.description}
              onChange={(event) =>
                handleInfosChange(event.target.value, "description")
              }
              multiline
              maxRows={5}
              label="Description"
              id="standard-size-small"
              size="small"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item container>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                Categorie
              </InputLabel>
              <NativeSelect
                value={serviceInfos.category}
                defaultValue={serviceInfos.category || ""}
                name="category"
                size="small"
                onChange={(event) => {
                  handleInfosChange(event.target.value, "category");
                }}
              >
                {CategorieList.map((categorie) => (
                  <option key={categorie.value} value={categorie.value}>
                    {categorie.label}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item container xs={12}>
            <TextField
              name="facebook"
              value={serviceInfos.facebook}
              onChange={(event) =>
                handleInfosChange(event.target.value, "facebook")
              }
              label="Facebook"
              id="standard-size-small"
              size="small"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item container xs={12}>
            <TextField
              name="instagram"
              value={serviceInfos.instagram}
              onChange={(event) =>
                handleInfosChange(event.target.value, "instagram")
              }
              label="Instagram"
              id="standard-size-small"
              size="small"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item container xs={12}>
            <TextField
              fullWidth
              name="whatsapp"
              value={serviceInfos.whatsapp}
              onChange={(event) =>
                handleInfosChange(event.target.value, "whatsapp")
              }
              label="Whatsapp"
              id="standard-size-small"
              size="small"
              variant="standard"
            />
          </Grid>
          <Grid item container xs={12}>
            <TextField
              fullWidth
              name="siteInternet"
              value={serviceInfos.siteInternet}
              onChange={(event) =>
                handleInfosChange(event.target.value, "siteInternet")
              }
              label="Site Internet"
              id="standard-size-small"
              size="small"
              variant="standard"
            />
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
