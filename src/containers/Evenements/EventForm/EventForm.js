import {
  Button,
  Grid,
  ImageList,
  ImageListItem,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import FormModal from "../../../common/FormModal/FormModal";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import "moment/locale/fr";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import withManagementForm from "../../../common/ManagementDashboard/withManagementForm";
import axios from "axios";
import { POST_EVENT, UPDATE_EVENT } from "../../../Routes";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { toBase64 } from "../../../Functions";
import { Autocomplete } from "@material-ui/lab";

const initialGeneralInfo = {
  title: "",
  theme: "",
  description: "",
  pictures: [],
  sponsors: [],
  startDate: null,
  endDate: null,
};

const EventForm = (props) => {
  const [generalInfos, setGeneralInfos] = useState(initialGeneralInfo);
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInfosChange = (value, field) => {
    let newValue = { ...generalInfos, [field]: value };
    setGeneralInfos(newValue);
  };
  const defaultProps = useMemo(() => {
    return {
      multiple: true,
      options: sponsors,
      getOptionLabel: (option) => option.name,
    };
  }, [sponsors]);
  useEffect(() => {
    setSponsors(props.sponsors);
    if (props.event) {
      let event = {
        ...props.event,
        sponsors:
          (props.event.sponsors &&
            [...props.event.sponsors].map((idSponsor) => {
              return [...props.sponsors].find(
                (sponsor) => parseInt(idSponsor, 10) === sponsor.idSponsor
              );
            })) ||
          [],
        endDate:
          props.event.endDate &&
          moment(props.event.endDate).locale("fr").format(),
        startDate:
          props.event.startDate &&
          moment(props.event.startDate).locale("fr").format(),
      };
      setGeneralInfos(event);
    } else {
      setGeneralInfos(initialGeneralInfo);
    }
  }, [props.event, props.sponsors]);

  const addPictures = async (event) => {
    let base64Images = [];
    for (var i = 0; i < [...event.target.files].length; i++) {
      let image = await toBase64(event.target.files[i]);
      base64Images.push(image);
    }
    const newValues = {
      ...generalInfos,
      pictures: [...generalInfos.pictures, ...base64Images],
    };
    setGeneralInfos(newValues);
  };

  const onSave = (data) => {
      axios
        .post(POST_EVENT, data)
        .then((response) => {
          if (response.status === 200)
            props.openNotication(
              "success",
              `Evènement ${generalInfos.title} ajouté!`
            );
            setLoading(false);
          props.handleToggle();
        })
        .catch(() => {
          props.openNotication("error", "Une erreur est survenue !");
          props.handleToggle();
        });
  };

  const onEdit = (data) => {
    axios
      .put(UPDATE_EVENT, data)
      .then((response) => {
        if (response.status === 200)
          props.openNotication(
            "success",
            `Evènement ${generalInfos.title} a été modifié!`
          );
          setLoading(false);
        props.handleToggle();
      })
      .catch(() => {
        props.openNotication("error", "Une erreur est survenue !");
        props.handleToggle();
      });
  };
  const onSubmit = () => {
    if (
      generalInfos.title &&
      generalInfos.theme &&
      generalInfos.startDate &&
      generalInfos.endDate &&
      generalInfos.description
    ) {
      setLoading(true);
      const data = {
        ...generalInfos,
        sponsors: generalInfos.sponsors.map((sponsor) => {
          return sponsor.idSponsor + "";
        }),
      };
      if (props.event) {
        onEdit(data);
      } else {
        onSave(data);
      }
      
    }
  };
  return (
    <FormModal
      open={props.open}
      title="Ajouter Un Evènement"
      handleClose={() => props.handleToggle()}
    >
      <form>
        <Grid container direction="row">
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="title"
              value={generalInfos.title}
              onChange={(event) =>
                handleInfosChange(event.target.value, "title")
              }
              label="Titre"
              id="standard-size-small"
              size="small"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="theme"
              value={generalInfos.theme}
              onChange={(event) =>
                handleInfosChange(event.target.value, "theme")
              }
              label="Thème"
              id="standard-size-small"
              size="small"
              variant="standard"
            />
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
                  label="Date de Début"
                  name="startDate"
                  format="L"
                  mask="__/__/____"
                  placeholder="dd/MM/yyyy"
                  value={generalInfos.startDate}
                  onChange={(date) => handleInfosChange(date, "startDate")}
                />
              </Grid>
              <Grid item xs={6}>
                <KeyboardDatePicker
                  clearable
                  views={["year", "month", "date"]}
                  format="L"
                  mask="__/__/____"
                  placeholder="dd/MM/yyyy"
                  label="Date de Fin"
                  name="endDate"
                  value={generalInfos.endDate}
                  onChange={(date) => handleInfosChange(date, "endDate")}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="description"
              multiline
              value={generalInfos.description}
              onChange={(event) =>
                handleInfosChange(event.target.value, "description")
              }
              label="Description"
              id="standard-size-small"
              size="small"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              {...defaultProps}
              name="sponsors"
              filterSelectedOptions
              onChange={(event, value) => handleInfosChange(value, "sponsors")}
              value={[...generalInfos.sponsors]}
              fullWidth
              id="auto-complete"
              autoComplete
              includeInputInList
              renderInput={(params) => (
                <TextField {...params} label="Sponsors" variant="standard" />
              )}
            />
          </Grid>
          <Grid item xs={12} style={{ marginTop: 8 }}>
            <input
              onChange={(event) => addPictures(event)}
              style={{ display: "none" }}
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="default"
                fullWidth
                startIcon={<CloudUploadIcon />}
                component="span"
              >
                Ajouter les Images
              </Button>
            </label>
          </Grid>
          {generalInfos.pictures && generalInfos.pictures.length > 0 && (
            <Grid item container xs={12} style={{ marginTop: 8 }}>
              <ImageList rowHeight={215} cols={3}>
                {generalInfos.pictures.map((picture, index) => (
                  <ImageListItem key={index} cols={1}>
                    <img style={{objectFit:"scale-down"}} src={picture} alt={index} />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          )}
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

export default withManagementForm(EventForm);
