import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "../../components/Logo/Logo";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changePassword,
} from "../../services/actions/Auth/AuthActions";
import NoticationAlert from "../../components/UI/NotificationAlert/NotificationAlert";
import { disconnect } from "../../services/reducers/Auth/AuthSlice";
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        ASEBEM
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ChangePassword = () => {
  const registrationNumber = useSelector((state) => state.auth.userInfos.registrationNumber)
  const [matricule, setMatricule] = useState(null);
  const [password, setPassword] = useState(null);
  const [oldPassword, setOldPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [notification, setNotification] = useState({
    open: false,
    type: "info",
    message: "",
  });
  const onNotificationClosed = () => {
    setNotification({
      open: false,
      type: "info",
      message: "",
    });
  };
  const openNotification = (type, message) => {
    setNotification({
      open: true,
      type,
      message,
    });
  };
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    setMatricule(registrationNumber)
  },[registrationNumber])
  const onSubmit = (event) => {
    event.preventDefault();

    const validatePassword = (pwd) => {
      return PWD_REGEX.test(pwd);
    };

    if (
      confirmPassword === password &&
      confirmPassword !== null &&
      password !== null
    ) {
      if (!validatePassword(password)) {
        openNotification(
          "error",
          "le mot de passe ne respecte pas les normes "
        );
        setPassword(null);
        setConfirmPassword(null);
      } else {
        const updateInfos = {
          newPassword: password,
          oldPassword: oldPassword,
          registrationNumber: matricule,
        };
        dispatch(changePassword(updateInfos))
          .then((response) => {
            if (response === true) {
              openNotification(
                "success",
                "Changement de Mot de Passe Réussi! Veuillez vous reconnecter "
              );
              dispatch(disconnect());
              setMatricule(null);
              setPassword(null);
              setOldPassword(null);
              setConfirmPassword(null);
              history.push("/auth");
            } else {
              openNotification("error", "Changement de mot de passe Echoué");
              setMatricule(null);
              setPassword(null);
              setOldPassword(null);
              setConfirmPassword(null);
            }
          })
      }
    } else {
      openNotification("error", "confirmation de mot de passes incorecte");
      setPassword(null);
      setConfirmPassword(null);
    }
  };

  const handleMatriculeChange = (event) => {
    setMatricule(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      {notification.open && (
        <NoticationAlert
          handleClose={() => onNotificationClosed()}
          {...notification}
        />
      )}
      <CssBaseline />
      <div className={classes.paper}>
        <Logo />
        <Typography component="h1" variant="h5">
          Changement de mot de passe
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            disabled
            required
            fullWidth
            onChange={handleMatriculeChange}
            value={matricule || ""}
            id="matricule"
            label="N° Matricule"
            name="matricule"
            autoComplete="matricule"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleOldPasswordChange}
            value={oldPassword || ""}
            name="oldpassword"
            label="Ancien Mot de Passe"
            type="password"
            id="oldpassword"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handlePasswordChange}
            value={password || ""}
            name="newpassword"
            label="Nouveau Mot de Passe"
            helperText="Mot de Passe  (au moins 1 lettre miniscule,1 lettre majuscule et 1 chiffre )"
            type="password"
            id="newpassword"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleConfirmPasswordChange}
            value={confirmPassword || ""}
            name="confirmpassword"
            helperText="Confirmer le nouveau Mot de Passe"
            label="Nouveau Mot de Passe"
            type="password"
            id="confirmpassword"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Changer le mot de passe
          </Button>
          <Grid container alignContent="center">
            <Grid item xs>
              <Link href="#" variant="body2">
                Mot de passe oublié ?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default ChangePassword;
