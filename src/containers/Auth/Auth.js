import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "../../components/Logo/Logo";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../services/actions/Auth/AuthActions";
import NoticationAlert from "../../components/UI/NotificationAlert/NotificationAlert";

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

const Auth = () => {
  const [matricule, setMatricule] = useState(null);
  const [password, setPassword] = useState(null);
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
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(authenticateUser(matricule,password))
    .then((state) => {
      if(state)
      {
        openNotification("success","Authentification Réussie")
        history.push("/")
      }
      else {
        openNotification("error","Authentification Echouée")
        setMatricule(null)
        setPassword(null)
      }
    })    
  };
  const handleMatriculeChange = (event) => {
    setMatricule(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <Container component="main" maxWidth="xs">
     { notification.open && (
        <NoticationAlert
          handleClose={() => onNotificationClosed()}
          {...notification}
        />
      ) }
      <CssBaseline />
      <div className={classes.paper}>
        <Logo />
        <Typography component="h1" variant="h5">
          S'auhentifier
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleMatriculeChange}
            value={matricule||""}
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
            onChange={handlePasswordChange}
            value={password ||""}
            name="password"
            label="Mot de Passe"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            S'authentifier
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
}
export default Auth;