import {
  Button,
  Grid,
  ImageList,
  ImageListItem,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FormModal from "../../../common/FormModal/FormModal";
import withManagementForm from "../../../common/ManagementDashboard/withManagementForm";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { toBase64 } from "../../../Functions";
import axios from "axios";
import { POST_SPONSOR, UPDATE_SPONSOR } from "../../../Routes";

const initialGeneralInfo = {
  site: "",
  name: "",
  description: "",
  logo: null,
};
const SponsorForm = (props) => {
  const [generalInfos, setGeneralInfos] = useState(initialGeneralInfo);
  const [loading, setLoading] = useState(false);
  
 
  useEffect(() => {
    if (props.sponsor) {
      console.log("sponsor test",props.sponsor)
      setGeneralInfos({
        ...props.sponsor,
      });
    } else {
      setGeneralInfos(initialGeneralInfo);
    }
  }, [props.sponsor]);
  const handleInfosChange = (value, field) => {
   
      let newValue = { ...generalInfos, [field]: value };
      setGeneralInfos(newValue);
  };

  const addLogo = async (event) => {
    let base64Images = [];
    for (var i = 0; i < [...event.target.files].length; i++) {
      let image = await toBase64(event.target.files[i]);
      base64Images.push(image);
    }
    const newValues = {
      ...generalInfos,
      logo: base64Images[0],
    };
    setGeneralInfos(newValues);
  };

  const onSave = () => {
    if (
      generalInfos.site &&
      generalInfos.name &&
      generalInfos.description 
    ) {
      setLoading(true);
      const infos = {
        ...generalInfos,
      };
      axios
        .post(POST_SPONSOR, infos)
        .then((response) => {
          if (response.status === 200)
            props.openNotication(
              "success",
              `Sponsor ${generalInfos.name} ajouté!`
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
      generalInfos.site &&
      generalInfos.name &&
      generalInfos.description 
    ) {
      setLoading(true);
      axios
        .put(UPDATE_SPONSOR, generalInfos)
        .then((response) => {
          if (response.status === 200)
            props.openNotication(
              "success",
              `Le Sponsor ${generalInfos.name} a été modifié!`
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
    if (props.event) {
      onEdit();
    } else {
      onSave();
    }
    setLoading(false);
  };
  return (
    <FormModal
      open={props.open}
      title="Ajouter Un Sponsor"
      handleClose={() => props.handleToggle()}
    >
      <form>
        <Grid container direction="row">
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="name"
              value={generalInfos.name}
              onChange={(event) =>
                handleInfosChange(event.target.value, "name")
              }
              label="Nom"
              id="standard-size-small"
              size="small"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="site"
              value={generalInfos.site}
              onChange={(event) =>
                handleInfosChange(event.target.value, "site")
              }
              label="Site"
              id="standard-size-small"
              size="small"
              variant="standard"
            />
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
          
          <Grid item xs={12} style={{ marginTop: 8 }}>
            <input
              onChange={(event) => addLogo(event)}
              style={{ display: "none" }}
              accept="image/*"
              id="contained-button-file"
              multiple={false}
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
                Ajouter le logo
              </Button>
            </label>
          </Grid>
          {generalInfos.logo && (
            <Grid item container xs={12} style={{ marginTop: 8 }}>
              <ImageList rowHeight={215} cols={3}>
                {[generalInfos.logo].map((picture, index) => (
                  <ImageListItem key={index} cols={3}>
                    <img style={{objectFit:"scale-down"}}  src={picture} alt={index} />
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

export default withManagementForm(SponsorForm);
